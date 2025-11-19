// src/utils/firebase.js

import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT;

// 1. DECLARACIÓN: Declara db como let fuera del try/catch
let db = undefined; 

try {
    if (!serviceAccountKey) {
        throw new Error("La variable de entorno FIREBASE_SERVICE_ACCOUNT no está definida.");
    }
    
    const serviceAccount = JSON.parse(serviceAccountKey);

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });

    console.log("Conexión exitosa a Firebase Admin SDK.");
    
    // 2. ASIGNACIÓN: Asigna la instancia SOLAMENTE aquí
    db = admin.firestore(); 

} catch (error) {
    // Si el error ocurrió aquí, db será undefined, pero ya lo sabemos.
    console.error("ERROR: No se pudo inicializar Firebase Admin:", error.message);
}

// 3. EXPORTACIÓN: Exporta la instancia (que ahora debería ser globalmente definida)
export { db };