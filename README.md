# Next.js MongoDB Starter

## Start on local

A starter kit with Next.js, MongoDB, Mongoose, NextAuth.js, Tailwind CSS and Shadcn UI.

## Environment Setup

1. Clone the repository
```bash
git clone https://github.com/Siedrix/mongo-next-starter.git
cd mongo-next-starter
```

2. Install dependencies
```bash
pnpm install
```

3. Create a `.env` file in the root directory with the following variables:

To generate a secure random string for AUTH_SECRET, run:
```bash
openssl rand -base64 32
```

Then add it to the `.env` file

```env
MONGODB_URI=mongodb://127.0.0.1:27017/starter
AUTH_SECRET=your-secret-key-here # Generate a secure random string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_COOKIE_PREFIX=myapp # Unique prefix for cookies to avoid collisions with other apps
```

4. Start the development server
```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Git setup

After clone do

```
git reset $(git commit-tree HEAD^{tree} -m "A new start")
```

To get a new history, then point to the correct package

```
git remote set-url origin [Git repo]
```

Update the package.json file with the new name of you module and its repo

Then remove this part and write the docs of your package