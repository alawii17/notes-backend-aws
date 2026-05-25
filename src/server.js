import express from 'express';
import routes from './routes.js';
import cors from 'cors';

const app = express();
const port = 3000;
const host = 'localhost';

app.use(cors({
    origin: 'https://notesapp-v1.dicodingacademy.com',
}))

app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running at http://${host}:${port}`);
});