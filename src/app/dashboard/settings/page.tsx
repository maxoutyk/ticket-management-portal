"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// Define interfaces for settings
interface SmtpSettings {
  smtpHost: string;
  smtpPort: string;
  smtpUser: string;
  smtpPassword: string;
  smtpFromEmail: string;
  smtpFromName: string;
  smtpSecure: string;
}

interface GeneralSettings {
  appName: string;
  defaultLanguage: string;
  allowUserRegistration: boolean;
  requireEmailVerification: boolean;
  autoAssignTickets: boolean;
  maintenanceMode: boolean;
  enableTwoFactorAuth: boolean;
}

interface NotificationSettings {
  notifyOnNewTicket: boolean;
  notifyOnTicketAssignment: boolean;
  notifyOnTicketStatusChange: boolean;
  notifyOnTicketComment: boolean;
  adminEmailNotifications: boolean;
  userEmailNotifications: boolean;
}

// SMTP Configuration Tab props interface
interface SmtpConfigTabProps {
  settings: SmtpSettings | null;
  onSave: (settings: SmtpSettings) => Promise<any>;
  onTest: (settings: SmtpSettings) => Promise<any>;
}

// General Settings Tab props interface
interface GeneralSettingsTabProps {
  settings: GeneralSettings | null;
  onSave: (settings: GeneralSettings) => Promise<any>;
}

// Notification Settings Tab props interface
interface NotificationSettingsTabProps {
  settings: NotificationSettings | null;
  onSave: (settings: NotificationSettings) => Promise<any>;
}

// General Settings Tab
const GeneralSettingsTab = ({ settings, onSave }: GeneralSettingsTabProps) => {
  const [formData, setFormData] = useState<GeneralSettings>({
    appName: "Ticket Management Portal",
    defaultLanguage: "en",
    allowUserRegistration: true,
    requireEmailVerification: false,
    autoAssignTickets: false,
    maintenanceMode: false,
    enableTwoFactorAuth: true,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveResult, setSaveResult] = useState<{ success?: boolean; message?: string } | null>(null);
  
  useEffect(() => {
    if (settings) {
      setFormData({
        appName: settings.appName || "Ticket Management Portal",
        defaultLanguage: settings.defaultLanguage || "en",
        allowUserRegistration: settings.allowUserRegistration ?? true,
        requireEmailVerification: settings.requireEmailVerification ?? false,
        autoAssignTickets: settings.autoAssignTickets ?? false,
        maintenanceMode: settings.maintenanceMode ?? false,
        enableTwoFactorAuth: settings.enableTwoFactorAuth ?? true,
      });
    }
  }, [settings]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
    
    // Clear save results when form changes
    if (saveResult) {
      setSaveResult(null);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSave(formData);
      setSaveResult({ success: true, message: "General settings saved successfully" });
    } catch (error) {
      setSaveResult({ 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to save general settings" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="space-y-6">
      {saveResult && (
        <div className={`p-4 rounded-md ${saveResult.success ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'}`}>
          <p className={`text-sm ${saveResult.success ? 'text-green-700' : 'text-red-700'}`}>
            {saveResult.message}
          </p>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Application Settings</h3>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="appName" className="block text-sm font-medium text-gray-700 mb-1">
                Application Name
              </label>
              <input
                type="text"
                id="appName"
                name="appName"
                value={formData.appName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
              />
            </div>
            
            <div>
              <label htmlFor="defaultLanguage" className="block text-sm font-medium text-gray-700 mb-1">
                Default Language
              </label>
              <select
                id="defaultLanguage"
                name="defaultLanguage"
                value={formData.defaultLanguage}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Security Settings</h3>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="allowUserRegistration"
                name="allowUserRegistration"
                checked={formData.allowUserRegistration}
                onChange={handleChange}
                className="h-4 w-4 text-incite-navy focus:ring-incite-navy border-gray-300 rounded"
              />
              <label htmlFor="allowUserRegistration" className="ml-2 block text-sm text-gray-700">
                Allow user registration
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="requireEmailVerification"
                name="requireEmailVerification"
                checked={formData.requireEmailVerification}
                onChange={handleChange}
                className="h-4 w-4 text-incite-navy focus:ring-incite-navy border-gray-300 rounded"
              />
              <label htmlFor="requireEmailVerification" className="ml-2 block text-sm text-gray-700">
                Require email verification
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="enableTwoFactorAuth"
                name="enableTwoFactorAuth"
                checked={formData.enableTwoFactorAuth}
                onChange={handleChange}
                className="h-4 w-4 text-incite-navy focus:ring-incite-navy border-gray-300 rounded"
              />
              <label htmlFor="enableTwoFactorAuth" className="ml-2 block text-sm text-gray-700">
                Enable two-factor authentication (2FA)
              </label>
              <span className="ml-2 text-xs text-gray-500">(OTP will be sent via email during login)</span>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Ticket Settings</h3>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="autoAssignTickets"
                name="autoAssignTickets"
                checked={formData.autoAssignTickets}
                onChange={handleChange}
                className="h-4 w-4 text-incite-navy focus:ring-incite-navy border-gray-300 rounded"
              />
              <label htmlFor="autoAssignTickets" className="ml-2 block text-sm text-gray-700">
                Auto-assign tickets to available employees
              </label>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">System Status</h3>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="maintenanceMode"
                name="maintenanceMode"
                checked={formData.maintenanceMode}
                onChange={handleChange}
                className="h-4 w-4 text-incite-navy focus:ring-incite-navy border-gray-300 rounded"
              />
              <label htmlFor="maintenanceMode" className="ml-2 block text-sm text-gray-700">
                Enable maintenance mode
              </label>
              <span className="ml-2 text-xs text-gray-500">(Only admins can access the system)</span>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-incite-navy hover:bg-blue-950 text-white px-4 py-2 rounded transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Saving..." : "Save Settings"}
          </button>
        </div>
      </form>
    </div>
  );
};

// Notification Settings Tab
const NotificationSettingsTab = ({ settings, onSave }: NotificationSettingsTabProps) => {
  const [formData, setFormData] = useState<NotificationSettings>({
    notifyOnNewTicket: true,
    notifyOnTicketAssignment: true,
    notifyOnTicketStatusChange: true,
    notifyOnTicketComment: true,
    adminEmailNotifications: true,
    userEmailNotifications: true,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveResult, setSaveResult] = useState<{ success?: boolean; message?: string } | null>(null);
  
  useEffect(() => {
    if (settings) {
      setFormData({
        notifyOnNewTicket: settings.notifyOnNewTicket ?? true,
        notifyOnTicketAssignment: settings.notifyOnTicketAssignment ?? true,
        notifyOnTicketStatusChange: settings.notifyOnTicketStatusChange ?? true,
        notifyOnTicketComment: settings.notifyOnTicketComment ?? true,
        adminEmailNotifications: settings.adminEmailNotifications ?? true,
        userEmailNotifications: settings.userEmailNotifications ?? true,
      });
    }
  }, [settings]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    setFormData({
      ...formData,
      [name]: checked,
    });
    
    // Clear save results when form changes
    if (saveResult) {
      setSaveResult(null);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSave(formData);
      setSaveResult({ success: true, message: "Notification settings saved successfully" });
    } catch (error) {
      setSaveResult({ 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to save notification settings" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="space-y-6">
      {saveResult && (
        <div className={`p-4 rounded-md ${saveResult.success ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'}`}>
          <p className={`text-sm ${saveResult.success ? 'text-green-700' : 'text-red-700'}`}>
            {saveResult.message}
          </p>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="notifyOnNewTicket"
                name="notifyOnNewTicket"
                checked={formData.notifyOnNewTicket}
                onChange={handleChange}
                className="h-4 w-4 text-incite-navy focus:ring-incite-navy border-gray-300 rounded"
              />
              <label htmlFor="notifyOnNewTicket" className="ml-2 block text-sm text-gray-700">
                Send notification when a new ticket is created
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="notifyOnTicketAssignment"
                name="notifyOnTicketAssignment"
                checked={formData.notifyOnTicketAssignment}
                onChange={handleChange}
                className="h-4 w-4 text-incite-navy focus:ring-incite-navy border-gray-300 rounded"
              />
              <label htmlFor="notifyOnTicketAssignment" className="ml-2 block text-sm text-gray-700">
                Send notification when a ticket is assigned
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="notifyOnTicketStatusChange"
                name="notifyOnTicketStatusChange"
                checked={formData.notifyOnTicketStatusChange}
                onChange={handleChange}
                className="h-4 w-4 text-incite-navy focus:ring-incite-navy border-gray-300 rounded"
              />
              <label htmlFor="notifyOnTicketStatusChange" className="ml-2 block text-sm text-gray-700">
                Send notification when a ticket status changes
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="notifyOnTicketComment"
                name="notifyOnTicketComment"
                checked={formData.notifyOnTicketComment}
                onChange={handleChange}
                className="h-4 w-4 text-incite-navy focus:ring-incite-navy border-gray-300 rounded"
              />
              <label htmlFor="notifyOnTicketComment" className="ml-2 block text-sm text-gray-700">
                Send notification when a comment is added to a ticket
              </label>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Recipients</h3>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="adminEmailNotifications"
                name="adminEmailNotifications"
                checked={formData.adminEmailNotifications}
                onChange={handleChange}
                className="h-4 w-4 text-incite-navy focus:ring-incite-navy border-gray-300 rounded"
              />
              <label htmlFor="adminEmailNotifications" className="ml-2 block text-sm text-gray-700">
                Send notifications to administrators
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="userEmailNotifications"
                name="userEmailNotifications"
                checked={formData.userEmailNotifications}
                onChange={handleChange}
                className="h-4 w-4 text-incite-navy focus:ring-incite-navy border-gray-300 rounded"
              />
              <label htmlFor="userEmailNotifications" className="ml-2 block text-sm text-gray-700">
                Send notifications to users
              </label>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-incite-navy hover:bg-blue-950 text-white px-4 py-2 rounded transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Saving..." : "Save Settings"}
          </button>
        </div>
      </form>
    </div>
  );
};

// SMTP Configuration Tab
const SmtpConfigTab = ({ settings, onSave, onTest }: SmtpConfigTabProps) => {
  const [formData, setFormData] = useState({
    smtpHost: "",
    smtpPort: "",
    smtpUser: "",
    smtpPassword: "",
    smtpFromEmail: "",
    smtpFromName: "",
    smtpSecure: "true",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ 
    success?: boolean; 
    message?: string;
    details?: string;
    suggestions?: string[];
    technical?: string;
  } | null>(null);
  
  useEffect(() => {
    if (settings) {
      setFormData({
        smtpHost: settings.smtpHost || "",
        smtpPort: settings.smtpPort || "",
        smtpUser: settings.smtpUser || "",
        smtpPassword: settings.smtpPassword || "",
        smtpFromEmail: settings.smtpFromEmail || "",
        smtpFromName: settings.smtpFromName || "",
        smtpSecure: settings.smtpSecure || "true",
      });
    }
  }, [settings]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
    // Clear test results when form changes
    if (testResult) {
      setTestResult(null);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSave(formData);
      setTestResult({ success: true, message: "SMTP settings saved successfully" });
    } catch (error) {
      setTestResult({ 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to save SMTP settings" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleTest = async () => {
    setIsTesting(true);
    setTestResult(null);
    
    try {
      const result = await onTest(formData);
      setTestResult({ 
        success: true, 
        message: result.message || "Test email sent successfully" 
      });
    } catch (error: any) {
      // Check if the error has a response with JSON data
      let errorData: any = { error: "Failed to send test email" };
      
      // Extract error details if available
      setTestResult({ 
        success: false, 
        message: "SMTP Connection Test Failed",
        details: error.details || errorData?.details || "Connection to SMTP server failed",
        suggestions: error.suggestions || errorData?.suggestions,
        technical: error.technical || error.message || "Unknown error"
      });
    } finally {
      setIsTesting(false);
    }
  };
  
  return (
    <div className="space-y-6">
      {testResult && (
        <div className={`p-4 rounded-md ${testResult.success ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'}`}>
          <p className={`text-sm font-medium ${testResult.success ? 'text-green-700' : 'text-red-700'}`}>
            {testResult.message}
          </p>
          
          {!testResult.success && testResult.details && (
            <p className="mt-2 text-sm text-red-600">
              {testResult.details}
            </p>
          )}
          
          {!testResult.success && testResult.suggestions && testResult.suggestions.length > 0 && (
            <div className="mt-2">
              <p className="text-sm font-medium text-red-700">Suggestions:</p>
              <ul className="mt-1 text-sm text-red-600 list-disc list-inside">
                {testResult.suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          )}
          
          {!testResult.success && testResult.technical && (
            <details className="mt-2">
              <summary className="text-sm text-red-600 cursor-pointer">Technical details</summary>
              <p className="mt-1 text-sm text-red-500 whitespace-pre-wrap font-mono text-xs p-2 bg-red-50 rounded">
                {testResult.technical}
              </p>
            </details>
          )}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="smtpHost" className="block text-sm font-medium text-gray-700 mb-1">
                SMTP Host <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="smtpHost"
                name="smtpHost"
                value={formData.smtpHost}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
                placeholder="smtp.example.com"
              />
            </div>
            
            <div>
              <label htmlFor="smtpPort" className="block text-sm font-medium text-gray-700 mb-1">
                SMTP Port <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="smtpPort"
                name="smtpPort"
                value={formData.smtpPort}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
                placeholder="587"
              />
              <p className="mt-1 text-xs text-gray-500">
                Common ports: 25 (standard), 587 (TLS/STARTTLS), 465 (SSL)
              </p>
            </div>
            
            <div>
              <label htmlFor="smtpUser" className="block text-sm font-medium text-gray-700 mb-1">
                SMTP Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="smtpUser"
                name="smtpUser"
                value={formData.smtpUser}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
                placeholder="username@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="smtpPassword" className="block text-sm font-medium text-gray-700 mb-1">
                SMTP Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="smtpPassword"
                name="smtpPassword"
                value={formData.smtpPassword}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
                placeholder="••••••••"
              />
            </div>
            
            <div>
              <label htmlFor="smtpFromEmail" className="block text-sm font-medium text-gray-700 mb-1">
                From Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="smtpFromEmail"
                name="smtpFromEmail"
                value={formData.smtpFromEmail}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
                placeholder="support@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="smtpFromName" className="block text-sm font-medium text-gray-700 mb-1">
                From Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="smtpFromName"
                name="smtpFromName"
                value={formData.smtpFromName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
                placeholder="Support Team"
              />
            </div>
            
            <div>
              <label htmlFor="smtpSecure" className="block text-sm font-medium text-gray-700 mb-1">
                Use TLS/SSL
              </label>
              <select
                id="smtpSecure"
                name="smtpSecure"
                value={formData.smtpSecure}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-incite-navy"
              >
                <option value="true">Yes (for port 465)</option>
                <option value="false">No (for ports 587, 25)</option>
              </select>
              <p className="mt-1 text-xs text-gray-500">
                Use "Yes" for SSL connections (usually port 465), "No" for STARTTLS (usually port 587)
              </p>
            </div>
          </div>
          
          <div className="flex space-x-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-incite-navy hover:bg-blue-950 text-white px-4 py-2 rounded transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Saving..." : "Save Settings"}
            </button>
            
            <button
              type="button"
              onClick={handleTest}
              disabled={isTesting || !formData.smtpHost || !formData.smtpPort}
              className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded transition-colors disabled:opacity-50"
            >
              {isTesting ? "Sending..." : "Test Connection"}
            </button>
          </div>
        </div>
      </form>
      
      <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-md">
        <h3 className="text-sm font-medium text-blue-800">SMTP Configuration Help</h3>
        <ul className="mt-2 text-sm text-blue-700 list-disc list-inside space-y-1">
          <li>For Gmail: Use smtp.gmail.com, port 587, and SSL/TLS disabled</li>
          <li>For Office 365: Use smtp.office365.com, port 587, and SSL/TLS disabled</li>
          <li>For custom email servers: Check with your email provider for the correct settings</li>
          <li>If using Gmail or other providers, you may need to enable "Less secure app access" or create an app password</li>
        </ul>
      </div>
    </div>
  );
};

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const { data: session, status } = useSession();
  const router = useRouter();
  
  // Update settings state to handle all types of settings
  const [settings, setSettings] = useState<{
    smtp?: SmtpSettings;
    general?: GeneralSettings;
    notifications?: NotificationSettings;
  }>({});
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      // Check if the user has the required role
      if (session?.user?.role !== "ADMIN") {
        router.push("/dashboard");
        return;
      }
      
      fetchSettings();
    }
  }, [status, router, session]);
  
  const fetchSettings = async () => {
    try {
      // First, check if settings need to be initialized
      const checkResponse = await fetch("/api/settings/init", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (checkResponse.ok) {
        const checkData = await checkResponse.json();
        
        // If settings need initialization, call the init endpoint
        if (checkData.needsInitialization) {
          const initResponse = await fetch("/api/settings/init", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
          
          if (!initResponse.ok) {
            console.warn("Failed to initialize settings");
          } else {
            console.log("Settings initialized successfully");
          }
        }
      }
      
      // Now fetch all settings
      const response = await fetch("/api/settings", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!response.ok) {
        throw new Error("Failed to fetch settings");
      }
      
      const data = await response.json();
      
      // Parse boolean values from string
      const parsedData: Record<string, string | boolean> = {};
      Object.keys(data).forEach(key => {
        // If the value is "true" or "false", convert it to a boolean
        if (data[key] === "true" || data[key] === "false") {
          parsedData[key] = data[key] === "true";
        } else {
          parsedData[key] = data[key];
        }
      });
      
      // Organize settings by type
      const smtpSettings: SmtpSettings = {
        smtpHost: typeof parsedData.smtpHost === 'string' ? parsedData.smtpHost : '',
        smtpPort: typeof parsedData.smtpPort === 'string' ? parsedData.smtpPort : '',
        smtpUser: typeof parsedData.smtpUser === 'string' ? parsedData.smtpUser : '',
        smtpPassword: typeof parsedData.smtpPassword === 'string' ? parsedData.smtpPassword : '',
        smtpFromEmail: typeof parsedData.smtpFromEmail === 'string' ? parsedData.smtpFromEmail : '',
        smtpFromName: typeof parsedData.smtpFromName === 'string' ? parsedData.smtpFromName : '',
        smtpSecure: (parsedData.smtpSecure === true || parsedData.smtpSecure === 'true') ? 'true' : 'false',
      };
      
      const generalSettings: GeneralSettings = {
        appName: typeof parsedData.appName === 'string' ? parsedData.appName : 'Ticket Management Portal',
        defaultLanguage: typeof parsedData.defaultLanguage === 'string' ? parsedData.defaultLanguage : 'en',
        allowUserRegistration: typeof parsedData.allowUserRegistration === 'boolean' ? parsedData.allowUserRegistration : true,
        requireEmailVerification: typeof parsedData.requireEmailVerification === 'boolean' ? parsedData.requireEmailVerification : false,
        autoAssignTickets: typeof parsedData.autoAssignTickets === 'boolean' ? parsedData.autoAssignTickets : false,
        maintenanceMode: typeof parsedData.maintenanceMode === 'boolean' ? parsedData.maintenanceMode : false,
        enableTwoFactorAuth: typeof parsedData.enableTwoFactorAuth === 'boolean' ? parsedData.enableTwoFactorAuth : true,
      };
      
      const notificationSettings: NotificationSettings = {
        notifyOnNewTicket: typeof parsedData.notifyOnNewTicket === 'boolean' ? parsedData.notifyOnNewTicket : true,
        notifyOnTicketAssignment: typeof parsedData.notifyOnTicketAssignment === 'boolean' ? parsedData.notifyOnTicketAssignment : true,
        notifyOnTicketStatusChange: typeof parsedData.notifyOnTicketStatusChange === 'boolean' ? parsedData.notifyOnTicketStatusChange : true,
        notifyOnTicketComment: typeof parsedData.notifyOnTicketComment === 'boolean' ? parsedData.notifyOnTicketComment : true,
        adminEmailNotifications: typeof parsedData.adminEmailNotifications === 'boolean' ? parsedData.adminEmailNotifications : true,
        userEmailNotifications: typeof parsedData.userEmailNotifications === 'boolean' ? parsedData.userEmailNotifications : true,
      };
      
      setSettings({
        smtp: smtpSettings,
        general: generalSettings,
        notifications: notificationSettings,
      });
    } catch (error) {
      console.error("Error fetching settings:", error);
      setError("Failed to load settings. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSaveSmtpSettings = async (smtpSettings: SmtpSettings) => {
    const response = await fetch("/api/settings/smtp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(smtpSettings),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to save SMTP settings");
    }
    
    // Update local settings state
    setSettings(prev => ({
      ...prev,
      smtp: smtpSettings,
    }));
    
    return response.json();
  };
  
  const handleTestSmtpSettings = async (smtpSettings: SmtpSettings) => {
    try {
      const response = await fetch("/api/settings/smtp/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(smtpSettings),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw {
          ...data,
          status: response.status,
          statusText: response.statusText,
        };
      }
      
      return data;
    } catch (error: any) {
      console.error("Error testing SMTP settings:", error);
      // Propagate the error with all details for the UI to handle
      throw error;
    }
  };
  
  const handleSaveGeneralSettings = async (generalSettings: GeneralSettings) => {
    const response = await fetch("/api/settings/general", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(generalSettings),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to save general settings");
    }
    
    // Update local settings state
    setSettings(prev => ({
      ...prev,
      general: generalSettings,
    }));
    
    return response.json();
  };
  
  const handleSaveNotificationSettings = async (notificationSettings: NotificationSettings) => {
    const response = await fetch("/api/settings/notifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notificationSettings),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to save notification settings");
    }
    
    // Update local settings state
    setSettings(prev => ({
      ...prev,
      notifications: notificationSettings,
    }));
    
    return response.json();
  };
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-incite-navy"></div>
      </div>
    );
  }
  
  const tabs = [
    { id: "general", label: "General" },
    { id: "email", label: "Email Configuration" },
    { id: "notifications", label: "Notifications" },
  ];
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">System Settings</h1>
        <p className="text-gray-600">Configure system-wide settings and integrations</p>
      </div>
      
      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}
      
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-incite-navy text-incite-navy"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === "general" && (
            <GeneralSettingsTab 
              settings={settings.general || null} 
              onSave={handleSaveGeneralSettings} 
            />
          )}
          {activeTab === "email" && (
            <SmtpConfigTab
              settings={settings.smtp || null}
              onSave={handleSaveSmtpSettings}
              onTest={handleTestSmtpSettings}
            />
          )}
          {activeTab === "notifications" && (
            <NotificationSettingsTab 
              settings={settings.notifications || null}
              onSave={handleSaveNotificationSettings}
            />
          )}
        </div>
      </div>
    </div>
  );
} 