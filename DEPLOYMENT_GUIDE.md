# Publish Contexta as a Public Demo with Vercel

This guide assumes you are a beginner and want to publish the existing React prototype at a public URL.

## What you already have

Contexta is a Vite + React website. The important project files are:

- `src/` — application code
- `public/` — Spanish and French audio files and other public assets
- `package.json` — dependencies and build commands
- `vite.config.js` — Vite configuration
- `tailwind.config.js` — design configuration
- `index.html` — browser entry point

Do not manually upload `node_modules` or `dist`. Vercel creates those during deployment.

## Part 1: Create accounts

Create free accounts at:

1. https://github.com
2. https://vercel.com

When creating the Vercel account, choose **Continue with GitHub**. This makes deployment easier.

## Part 2: Put the project on GitHub

### Option A: GitHub website upload

1. Sign in to GitHub.
2. Click **New repository**.
3. Name it `contexta`.
4. Choose **Private** while testing, or **Public** if you want the source code visible.
5. Click **Create repository**.
6. Choose **uploading an existing file**.
7. Upload the project files and folders, including `src`, `public`, `package.json`, `vite.config.js`, `tailwind.config.js`, and `index.html`.
8. Do not upload `node_modules` or `dist`.
9. Click **Commit changes**.

GitHub's browser uploader may be inconvenient for a large audio folder. If that happens, use GitHub Desktop.

### Option B: GitHub Desktop

1. Install GitHub Desktop from https://desktop.github.com.
2. Sign in.
3. Choose **Add an Existing Repository from your Local Drive**.
4. Select the downloaded Contexta project folder.
5. If asked, create a repository there.
6. Commit the files with the message `Initial Contexta website`.
7. Click **Publish repository**.

## Part 3: Deploy with Vercel

1. Sign in at https://vercel.com.
2. Click **Add New → Project**.
3. Find the `contexta` GitHub repository.
4. Click **Import**.
5. Vercel should recognize the project as **Vite**.
6. Confirm these settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
7. Do not add environment variables for the current public demo.
8. Click **Deploy**.

After the build completes, Vercel gives you an address similar to:

`https://contexta-example.vercel.app`

Open that URL and test:

- English, Spanish, and French selection
- Reading Library
- Lesson audio
- Clickable words
- Comprehension activities
- Vocabulary Shelf
- Educator Studio
- Dark mode
- Mobile layout

## Part 4: Update the website later

When you change the project:

1. Save your changes.
2. Commit and push them to GitHub.
3. Vercel detects the update automatically.
4. Vercel builds and publishes a new version.

Every GitHub update creates a deployment history, so you can restore an older version if needed.

## Part 5: Add a custom domain

You can initially use the free `.vercel.app` URL.

To use a domain such as `contexta.com`:

1. Buy a domain from a domain registrar.
2. Open the project in Vercel.
3. Go to **Settings → Domains**.
4. Enter your domain.
5. Follow Vercel's DNS instructions.

Vercel automatically provides HTTPS.

## Important limitation of the current public demo

The prototype stores progress and Educator Studio lessons in browser `localStorage`.

That means:

- Each visitor has separate data.
- Data does not follow a learner to another device.
- An educator-created lesson is not automatically shared with students.
- Clearing browser data removes locally created content.
- There are no real educator or learner accounts yet.

This is acceptable for a public demo, but not for a real school product.

## How to include your own lessons in the public demo

There are two approaches:

### Temporary demo approach

Create a lesson in Educator Studio, export the lesson pack, and import it in another browser. This is useful for demonstrations but does not distribute the lesson automatically.

### Public-content approach

Add approved lessons to the project's source curriculum and redeploy. These lessons will then be available to every visitor. A developer can convert an exported Contexta lesson pack into source curriculum data.

## What a real teaching product needs later

After the public demo is working, the next production phase should add:

1. Authentication for educators and learners
2. A hosted database
3. Educator and learner roles
4. Shared published lessons
5. Class enrollment and assignment records
6. Cloud progress synchronization
7. Secure audio and file storage
8. Password reset and email verification
9. Privacy policy, terms, and data-deletion controls
10. Monitoring, backups, and error reporting

A beginner-friendly future stack would be:

- Vercel — website hosting
- Supabase — authentication, PostgreSQL database, and file storage
- React/Vite — existing frontend

## Pre-deployment checklist

- [ ] The project runs locally with `npm run dev`
- [ ] `npm run build` succeeds
- [ ] `public/audio` is included in GitHub
- [ ] `node_modules` is not committed
- [ ] `dist` is not required in GitHub
- [ ] The Vercel framework is Vite
- [ ] The build command is `npm run build`
- [ ] The output directory is `dist`
- [ ] The deployed audio works
- [ ] The site works on a phone
- [ ] You understand that current user data is browser-local
