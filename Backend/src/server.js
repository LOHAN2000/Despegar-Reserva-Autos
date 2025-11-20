import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import autoRoutes from './routes/auto.routes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());

app.use('/api/auto', autoRoutes);

app.get('/', (req, res) => {
  res.send('Serves is ready')
})

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Servidor de Express corriendo en http://localhost:${PORT}`);
    });
}

// EXPORTAR app para los tests
export { app };