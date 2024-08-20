// full_server/server.js
import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 1245;

// Use the routes defined in routes/index.js
app.use(routes);

// Start the server and listen for incoming requests
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Export the app for testing purposes
export default app;
