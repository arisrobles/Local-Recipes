## Commands to Run in DigitalOcean Console

You're already in the right directory! Now run:

```bash
chmod +x update.sh
./update.sh
```

If the script doesn't exist yet (because you just pushed it), run these commands manually:

```bash
git pull origin main
docker build -t recipe-app .
docker stop website
docker rm website
docker run -d -p 80:3000 --restart always --name website recipe-app
```

## What Each Command Does:

1. `git pull origin main` - Downloads the latest code from GitHub
2. `docker build -t recipe-app .` - Rebuilds the Docker image with new code (takes 2-3 mins)
3. `docker stop website` - Stops the current running website
4. `docker rm website` - Removes the old container
5. `docker run -d -p 80:3000 --restart always --name website recipe-app` - Starts the new website

## After Running:

Visit `http://157.245.208.122` to see your updated site with:
- 30 recipes
- Working mobile menu
- Fixed images
- Updated categories
