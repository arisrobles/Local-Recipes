# How to Deploy to DigitalOcean App Platform

This guide will help you deploy your Next.js recipe application to DigitalOcean using their **App Platform**. This is the easiest method (PaaS) and handles SSL/HTTPS, auto-deployments, and scaling automatically.

## Prerequisites

1.  **GitHub Account**: You need to host your code on GitHub first.
2.  **DigitalOcean Account**: You need access to the DO dashboard.

---

## Step 1: Push Your Code to GitHub

DigitalOcean needs to pull your code from somewhere.

1.  Create a new repository on GitHub (e.g., `classic-home-recipes`).
2.  Run these commands in your VS Code terminal to push your code:
    ```bash
    # Stop the dev server first (Ctrl+C)
    
    # Initialize git if you haven't (skip if already a git repo)
    git init
    
    # Add files
    git add .
    git commit -m "Ready for deployment"
    
    # Connect to GitHub (replace URL with your actual repo URL)
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/classic-home-recipes.git
    git push -u origin main
    ```

---

## Step 2: Create App in DigitalOcean

1.  Log in to your **DigitalOcean Dashboard**.
2.  On the left menu, click **Apps** > **Create App**.
3.  Choose **GitHub** as your Service Provider.
    *   *Note: You may need to authorize DigitalOcean to access your GitHub account.*
4.  Select the repository you just created (`classic-home-recipes`).
5.  Select the `main` branch and ensure "Autodeploy" is checked.
6.  Click **Next**.

---

## Step 3: Configure Resources

DigitalOcean will detect the `Dockerfile` we created.

1.  **Source Directory**: Leave as `/` (default).
2.  **Resource Type**: It might default to a larger plan. Click **Edit Plan**.
    *   For a starter/test site, choose **Basic** -> **$5.00/mo** (512MB RAM | 1 vCPU).
    *   *Note: Next.js builds can sometimes be memory intensive. If the build fails, you might need the $10 or $12 tier momentarily, but $5 usually works for running the app.*
3.  **Environment Variables**:
    *   Since we are using hardcoded data for now (proxy strategy), you strictly don't need any yet.
    *   *If you add Supabase later:* Click "Edit" and add `NEXT_PUBLIC_SUPABASE_URL` etc. here.
4.  **HTTP Port**: Ensure it is set to **3000** (This is what our Dockerfile exposes).
5.  Click **Next**.

---

## Step 4: Review and Build

1.  Review the details.
2.  Click **Create Resources**.
3.  DigitalOcean will now start building your Docker image. This takes about **5-10 minutes**.
4.  You can watch the "Build Logs" to see progress.

---

## Step 5: Test the Live URL

Once the build is green/successful:
1.  Click the **"Live App"** link at the top (e.g., `https://sea-lion-app-j8s9d.ondigitalocean.app`).
2.  Verify your website is working.

---

## Step 6: Connect Your Custom Domain

Once your app is live, you want to use `classichomerecipes.com` instead of the ugly DigitalOcean URL.

1.  Go to your App settings in DigitalOcean.
2.  Click the **Settings** tab.
3.  Click **Domains** -> **Add Domain**.
4.  Enter your domain (e.g., `classichomerecipes.com`).
5.  DigitalOcean will verify it.
    *   **If you bought the domain elsewhere (Namecheap/GoDaddy):** Use the provided CNAME records.
    *   **If you manage DNS on DigitalOcean:** It will be automatic.
6.  Once verified, DigitalOcean automatically issues an **SSL Certificate** (HTTPS).

---

## Optimization Tip (Cost Saving)

If you find the $5/mo App Platform too limiting (builds failing), users sometimes deploy via a **Droplet ($4-$6/mo)** using Docker Compose. However, that requires manual server management (SSH, Linux commands, security updates). For a business campaign, **App Platform** is worth the extra few dollars for peace of mind and zero-downtime deployments.
