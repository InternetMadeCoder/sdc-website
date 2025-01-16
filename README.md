This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### AWS Amplify

AWS Amplify is a set of tools and services that enables developers to build secure, scalable full stack applications.

1. Push your code to a Git provider (like GitHub, GitLab, or Bitbucket).
2. [Create a new Amplify App](https://console.aws.amazon.com/amplify/home) and connect the repository.
3. In the Build settings, set the base directory to `out` and the build command to `npm run build`.
4. Click on `Save` and then `Deploy`.

AWS Amplify will now build and deploy your Next.js application and give you a URL to view it online.

### Hostinger

Hostinger is a web hosting provider and internet domain registrar.

1. Build your Next.js project locally using `npm run build`.
2. FTP/SFTP upload the `.next` and `public` folders, and the `package.json` file to your Hostinger file system.
3. SSH into your Hostinger account and navigate to the project directory.
4. Run `npm install` to install the dependencies.
5. Run `npm start` to start your Next.js application.

Your Next.js application is now running on Hostinger.

For other hosting services, please refer to their specific documentation for deployment instructions.