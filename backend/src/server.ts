import dotenv from 'dotenv';
import app from './app';

const {parsed} = dotenv.config();

const PORT = process.env.PORT || +parsed.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
