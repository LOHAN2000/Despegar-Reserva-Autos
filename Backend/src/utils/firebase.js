import admin from 'firebase-admin';
import dontenv from 'dotenv';

dontenv.config();

const serviceAccountKey = process.env.SERVICE_ACCOUNT_KEY;
let db;

try {
  if (!serviceAccountKey) {
    throw new Error ("La variable de entorno SERVICE_ACCOUNT_KEY no está definida")
  }

  const serviceAccount = JSON.parse(serviceAccountKey);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })

  console.log("Conexion exitosa a Firebase Admin SDK.")

} catch (error) {
  console.error("ERROR. No se pudo inicializar Firebase Admin.", error.message)
}