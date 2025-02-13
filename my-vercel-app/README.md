# My Vercel App

This project is a serverless application deployed on Vercel. It consists of an API, a public-facing HTML page, and TypeScript code for better type safety.

## Project Structure

- **api/index.ts**: Entry point for serverless functions that handle API requests.
- **public/index.html**: Main HTML structure for the application.
- **src/app.ts**: Initializes the application, sets up middleware, and defines routes.
- **src/types/index.ts**: Contains interfaces and types used throughout the application.
- **vercel.json**: Configuration settings for deploying the application on Vercel.
- **package.json**: Lists dependencies and scripts for the project.
- **tsconfig.json**: TypeScript configuration file.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-vercel-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the application locally:
   ```
   npm run dev
   ```

## Deployment

To deploy the application, push your changes to the main branch, and Vercel will automatically build and deploy your application.

## License

This project is licensed under the MIT License.