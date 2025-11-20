import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import path from 'path';
import autoRoutes from './routes/auto.routes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT
const __dirname = path.resolve();


app.use(cors());
app.use(express.json());

app.use('/api/auto', autoRoutes);

// Servir archivos estáticos de Frontend en producción
if (process.env.NODE_ENV === 'production') {
  const frontendDistPath = path.join(__dirname, '..', 'Frontend', 'dist');
  app.use(express.static(frontendDistPath));
  app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(frontendDistPath, 'index.html'));
  })
}

app.get('/', (req, res) => {
  res.send('Serves is ready')
})


if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Servidor de Express corriendo en http://localhost:${PORT}`);
    });
}

export { app };