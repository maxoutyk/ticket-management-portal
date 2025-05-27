# Deployment Guide for Ticket Management Portal

## Prerequisites
- Node.js 18.x or later
- PostgreSQL database
- SMTP server for email notifications
- Storage solution for file uploads (e.g., S3)
- Git

## Step 1: Prepare Your Application

1. Create production environment variables:
   ```env
   # Database
   DATABASE_URL="your-production-database-url"
   
   # NextAuth.js
   NEXTAUTH_URL="https://your-domain.com"
   NEXTAUTH_SECRET="generated-secret-key"
   
   # Email (SMTP)
   SMTP_HOST="your-smtp-host"
   SMTP_PORT="587"
   SMTP_USER="your-smtp-username"
   SMTP_PASSWORD="your-smtp-password"
   SMTP_FROM="noreply@your-domain.com"
   
   # File Upload
   STORAGE_ACCESS_KEY="your-storage-access-key"
   STORAGE_SECRET_KEY="your-storage-secret-key"
   STORAGE_BUCKET="your-bucket-name"
   STORAGE_REGION="your-region"
   ```

2. Build the application locally to test:
   ```bash
   npm run build
   ```

## Step 2: Choose a Hosting Platform

### Option 1: Vercel (Recommended)

1. Create a Vercel account at https://vercel.com
2. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Login to Vercel:
   ```bash
   vercel login
   ```
4. Deploy:
   ```bash
   vercel
   ```

### Option 2: Railway

1. Create a Railway account at https://railway.app
2. Install Railway CLI:
   ```bash
   npm i -g @railway/cli
   ```
3. Login and deploy:
   ```bash
   railway login
   railway up
   ```

### Option 3: Traditional Shared Hosting

If using traditional shared hosting:

1. Set up Node.js environment (contact host for specific version support)
2. Set up PostgreSQL database
3. Configure domain and SSL
4. Upload files via FTP/SFTP
5. Run build process:
   ```bash
   npm install
   npm run build
   npm run start
   ```

## Step 3: Database Migration

1. Generate Prisma client:
   ```bash
   npx prisma generate
   ```
2. Run migrations:
   ```bash
   npx prisma migrate deploy
   ```

## Step 4: Configure Domain & SSL

1. Add your custom domain in hosting platform
2. Configure DNS records:
   - A record pointing to your hosting IP
   - CNAME record for www subdomain
3. Enable SSL certificate

## Step 5: Environment Setup

Configure these environment variables in your hosting platform:

- All variables from .env file
- Set NODE_ENV="production"
- Set proper NEXTAUTH_URL
- Configure database connection
- Set up email credentials
- Configure storage credentials

## Step 6: Post-Deployment Checks

1. Verify database connection
2. Test authentication flow
3. Check email notifications
4. Test file uploads
5. Verify SSL/HTTPS
6. Test all main features
7. Monitor error logs

## Maintenance

1. Regular backups:
   - Database
   - Uploaded files
   - Environment variables

2. Monitoring:
   - Set up uptime monitoring
   - Configure error tracking
   - Monitor database performance

3. Updates:
   - Regular dependency updates
   - Security patches
   - Node.js version updates

## Troubleshooting

Common issues and solutions:

1. Database Connection:
   - Check DATABASE_URL format
   - Verify database credentials
   - Check network/firewall settings

2. Authentication Issues:
   - Verify NEXTAUTH_URL matches domain
   - Check NEXTAUTH_SECRET
   - Verify email settings

3. File Upload Issues:
   - Check storage credentials
   - Verify bucket permissions
   - Check file size limits

4. Build Errors:
   - Clear .next directory
   - Update dependencies
   - Check Node.js version

## Security Considerations

1. Enable rate limiting
2. Set up CORS properly
3. Use secure headers
4. Regular security audits
5. Keep dependencies updated
6. Monitor for suspicious activities

## Backup Strategy

1. Database:
   ```bash
   # Backup
   pg_dump -U username -h hostname database_name > backup.sql
   
   # Restore
   psql -U username -h hostname database_name < backup.sql
   ```

2. Files:
   - Regular backups of uploaded files
   - Environment variables backup
   - Code repository backup

## Performance Optimization

1. Enable caching
2. Optimize images
3. Use CDN for static assets
4. Configure proper build output
5. Monitor and optimize database queries

For support or questions, refer to the hosting platform's documentation or contact their support team. 