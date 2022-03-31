import createApp from './utils/createApp.js';
import './database/index.js';

try {
  const app = createApp();
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
} catch (err) {
  console.log(err);
}
