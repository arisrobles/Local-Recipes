# How to Deploy to DigitalOcean Droplet (VPS)

This guide explains how to host your site on a **DigitalOcean Droplet**. This gives you a dedicated server with your own IP address, which is useful if you need to rotate servers later.

## Prerequisites
1.  **Code on GitHub**: Ensure you have pushed your latest code to `arisrobles/Local-Recipes`.
2.  **DigitalOcean Account**.
3.  **Domain Name**: Purchased from Namecheap, GoDaddy, etc.

---

## Part 1: Create the Droplet (Server)

1.  Log in to **DigitalOcean**.
2.  Click **Create** (green button) -> **Droplets**.
3.  **Choose Region**: Select "New York" or "San Francisco" (Since your target audience is **USA**).
4.  **Choose Image (OS)**:
    *   Click the **Marketplace** tab.
    *   Search for **"Docker"**.
    *   Select **Docker on Ubuntu**. (This saves us from installing Docker manually).
5.  **Choose Size**:
    *   Select **Basic**.
    *   Select **Regular Disk Type**.
    *   Choose the **$6/month** option (1 GB RAM / 1 CPU).
6.  **Authentication**:
    *   **Password**: Create a strong root password. (Write this down! You need it to log in).
7.  **Hostname**: Name it something simple like `recipe-server-1`.
8.  Click **Create Droplet**.

*Wait about 60 seconds for the IP Address to appear.*

---

## Part 2: Connect to the Server

You can use the "Console" in the browser or a terminal on your PC.

1.  In the DigitalOcean Dashboard, click on your new Droplet.
2.  Click **"Access"** on the left menu.
3.  Click **"Launch Droplet Console"**.
    *   A black window will open. You are now inside your server.

---

## Part 3: Deploy the Code

Run these commands inside the Console window:

### 1. Download your Code
```bash
# Clone your repository
git clone https://github.com/arisrobles/Local-Recipes.git

# Enter the folder
cd Local-Recipes
```

### 2. Build the App
This turns your code into a running program.
```bash
# Build the docker image (this might take 3-5 minutes)
docker build -t recipe-app .
```

### 3. Run the App
This starts the website on Port 80 (the standard web port).
```bash
# Run the container in the background
docker run -d -p 80:3000 --restart always --name website recipe-app
```

**Test it:** Copy your Droplet's **IP Address** and paste it into your browser. You should see your recipe site!

---

## Part 4: Connect Your Domain

Now let's replace the ugly IP address with your domain (e.g., `classichomerecipes.com`).

1.  Log in to your **Domain Registrar** (Namecheap, GoDaddy, etc.).
2.  Go to **DNS Settings** / **Zone Management**.
3.  Add/Edit an **A Record**:
    *   **Type**: `A Record`
    *   **Host/Name**: `@` (means root domain)
    *   **Value/Target**: `YOUR_DROPLET_IP_ADDRESS` (e.g., 164.90.x.x)
    *   **TTL**: Automatic or 30 mins.
4.  Add another **A Record** (for "www"):
    *   **Type**: `A Record`
    *   **Host/Name**: `www`
    *   **Value/Target**: `YOUR_DROPLET_IP_ADDRESS`
5.  Click **Save**.

*Note: It may take 1-2 hours for the domain to work everywhere.*

---

## Part 5: Rotate/Change Server (If Flagged)

If this IP gets flagged or banned by ad networks:
1.  Go to DigitalOcean.
2.  **Destroy** the Droplet `recipe-server-1`.
3.  Create a **New Droplet** `recipe-server-2`.
4.  Repeat **Part 2 & 3**.
5.  Update your Domain DNS (Part 4) with the **New IP**.

This gives you a fresh start in about 10 minutes.
