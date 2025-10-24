# Deployment Instructions for Stock Recommendation App

## Option 1: GitHub Pages (Recommended)

The app is already configured for GitHub Pages deployment. Follow these steps:

### 1. Enable GitHub Pages in Your Repository

1. Go to your GitHub repository: https://github.com/Nimish0410/React-Sample-App
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** section in the left sidebar
4. Under **Build and deployment**:
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages` and `/root` folder
   - Click **Save**

### 2. Build and Deploy

Run the following commands locally:

```bash
# Build the production version
npm run build

# Deploy to GitHub Pages
npm run deploy
```

If the `npm run deploy` command fails with a 403 error, try these alternatives:

#### Alternative A: Manual GitHub Pages Setup

```bash
# Build the app
npm run build

# Create and switch to gh-pages branch
git checkout --orphan gh-pages

# Remove all files
git rm -rf .

# Copy build files
cp -r build/* .
cp build/.gitignore .gitignore 2>/dev/null || true

# Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force

# Switch back to your feature branch
git checkout claude/create-stock-recommendation-app-011CUSWwnwAw3CDCqmzQTxqa
```

#### Alternative B: Use GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main, master ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '16'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build
      env:
        NODE_OPTIONS: --openssl-legacy-provider

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

### 3. Access Your Deployed App

Once deployed, your app will be available at:
**https://Nimish0410.github.io/React-Sample-App**

## Option 2: Vercel (Alternative)

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your app will be deployed instantly

## Option 3: Netlify (Alternative)

1. Sign up at https://netlify.com
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy!

## Option 4: Run Locally

To run the app locally:

```bash
npm start
```

The app will open at http://localhost:3000

---

## Troubleshooting

### Build Errors with Node.js

If you encounter OpenSSL errors, make sure the scripts in `package.json` include:
```json
"start": "export NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
"build": "export NODE_OPTIONS=--openssl-legacy-provider && react-scripts build"
```

### gh-pages Command Fails

If `npm run deploy` fails:
1. Ensure you have push access to the repository
2. Try the Manual GitHub Pages Setup (Alternative A above)
3. Or use GitHub Actions for automated deployment

### App Not Loading on GitHub Pages

1. Check that GitHub Pages is enabled in repository settings
2. Verify the `homepage` field in `package.json` matches your GitHub Pages URL
3. Wait a few minutes for deployment to complete
4. Clear your browser cache

---

## Current Status

✅ App built successfully
✅ Code committed to branch: `claude/create-stock-recommendation-app-011CUSWwnwAw3CDCqmzQTxqa`
✅ Code pushed to GitHub
⏳ Awaiting manual GitHub Pages configuration

To complete deployment, please follow Option 1 above or choose an alternative deployment method.
