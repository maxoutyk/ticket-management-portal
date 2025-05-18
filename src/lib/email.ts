import nodemailer from 'nodemailer';
import { prisma } from './prisma';

type EmailOptions = {
  to: string;
  subject: string;
  text: string;
  html: string;
};

export async function getEmailConfig() {
  // Get SMTP settings from database
  const smtpSettings = await prisma.appSetting.findMany({
    where: {
      key: {
        in: ['smtpHost', 'smtpPort', 'smtpUser', 'smtpPassword', 'smtpFromEmail', 'smtpFromName', 'smtpSecure'],
      },
    },
  });

  // Convert to object for easier access
  const settings = smtpSettings.reduce((acc, setting) => {
    acc[setting.key] = setting.value;
    return acc;
  }, {} as Record<string, string>);

  // Check if SMTP is configured
  if (!settings.smtpHost || !settings.smtpPort || !settings.smtpUser || !settings.smtpPassword) {
    throw new Error('SMTP settings are not configured');
  }

  return {
    host: settings.smtpHost,
    port: parseInt(settings.smtpPort, 10),
    secure: settings.smtpSecure === 'true',
    auth: {
      user: settings.smtpUser,
      pass: settings.smtpPassword,
    },
    from: `"${settings.smtpFromName || 'Support Team'}" <${settings.smtpFromEmail}>`,
  };
}

export async function sendEmail({ to, subject, text, html }: EmailOptions) {
  try {
    const config = await getEmailConfig();
    
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: config.auth,
      // Add TLS configuration options to handle connection issues
      tls: {
        // Do not fail on invalid certificates
        rejectUnauthorized: false,
        // Explicitly set the minimum TLS version
        minVersion: 'TLSv1.2',
      },
      // For port 587, use this option to enable STARTTLS
      ...(config.port === 587 ? { requireTLS: true } : {}),
      // Set long timeout for slow email servers
      connectionTimeout: 10000, // 10 seconds
    });

    console.log('SMTP Configuration:', {
      host: config.host,
      port: config.port,
      secure: config.secure,
      user: config.auth.user, // Don't log the password
    });

    const info = await transporter.sendMail({
      from: config.from,
      to,
      subject,
      text,
      html,
    });

    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

export function generateOTP(length = 6): string {
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10).toString();
  }
  return otp;
}

export const emailTemplates = {
  otpEmail: (otp: string) => ({
    subject: 'Your Login Verification Code',
    text: `Your verification code is: ${otp}. This code will expire in 10 minutes.`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
        <h2 style="color: #334155;">Login Verification</h2>
        <p>Your verification code is:</p>
        <div style="background-color: #f3f4f6; padding: 20px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 5px; margin: 20px 0;">
          ${otp}
        </div>
        <p>This code will expire in 10 minutes.</p>
        <p>If you didn't request this code, please ignore this email.</p>
        <hr style="border: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="color: #64748b; font-size: 14px;">
          This is an automated message, please do not reply.
        </p>
      </div>
    `,
  }),

  ticketAssigned: (ticketDetails: { id: string; title: string; assignerName: string }) => ({
    subject: `Ticket ${ticketDetails.id} Assigned: ${ticketDetails.title}`,
    text: `Ticket ${ticketDetails.id} has been assigned to you by ${ticketDetails.assignerName}. Ticket title: ${ticketDetails.title}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
        <h2 style="color: #334155;">Ticket Assigned</h2>
        <p>A ticket has been assigned to you by ${ticketDetails.assignerName}.</p>
        <div style="border-left: 4px solid #3b82f6; padding-left: 15px; margin: 20px 0;">
          <p style="margin: 5px 0; font-weight: bold; font-size: 16px;">Ticket #: ${ticketDetails.id}</p>
          <p style="margin: 10px 0 0; font-weight: bold;">${ticketDetails.title}</p>
        </div>
        <p>Please login to the portal to view and respond to this ticket.</p>
        <hr style="border: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="color: #64748b; font-size: 14px;">
          This is an automated message, please do not reply.
        </p>
      </div>
    `,
  }),

  newTicket: (ticketDetails: { id: string; title: string; creatorName: string; priority: string }) => ({
    subject: `New Ticket ${ticketDetails.id}: ${ticketDetails.title}`,
    text: `A new ${ticketDetails.priority.toLowerCase()} priority ticket (${ticketDetails.id}) has been created by ${ticketDetails.creatorName}. Ticket title: ${ticketDetails.title}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
        <h2 style="color: #334155;">New Ticket Created</h2>
        <p>A new ticket has been created by ${ticketDetails.creatorName}.</p>
        <div style="border-left: 4px solid #3b82f6; padding-left: 15px; margin: 20px 0;">
          <p style="margin: 5px 0; font-weight: bold; font-size: 16px;">Ticket #: ${ticketDetails.id}</p>
          <p style="margin: 10px 0 0; font-weight: bold;">${ticketDetails.title}</p>
          <p style="margin: 5px 0 0; color: #64748b;">Priority: 
            <span style="color: ${
              ticketDetails.priority === 'HIGH' ? '#ef4444' : 
              ticketDetails.priority === 'MEDIUM' ? '#f59e0b' : 
              ticketDetails.priority === 'LOW' ? '#10b981' : 
              ticketDetails.priority === 'CRITICAL' ? '#dc2626' :
              '#64748b'
            }; font-weight: bold;">${ticketDetails.priority}</span>
          </p>
        </div>
        <p>Please login to the portal to view and manage this ticket.</p>
        <hr style="border: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="color: #64748b; font-size: 14px;">
          This is an automated message, please do not reply.
        </p>
      </div>
    `,
  }),
}; 