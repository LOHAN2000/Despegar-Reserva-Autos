// src/tests/no-funcionales.test.js
import request from 'supertest';
import { app } from '../server.js';

describe('Pregunta 2: Pruebas No Funcionales', () => {

    // CASO 1: Rendimiento (Latencia)
    test('PNF-01: El endpoint de búsqueda debe responder en menos de 2 segundos', async () => {
        const start = Date.now();
        
        await request(app).get('/api/auto/autos').query({
            location: 'Lima',
            fechaRecogida: '2025-12-01',
            fechaDevolucion: '2025-12-05'
        });

        const end = Date.now();
        const duration = end - start;

        console.log(`Tiempo de respuesta: ${duration}ms`);
        
        // La prueba falla si tarda más de 2000ms
        expect(duration).toBeLessThan(2000); 
    });

});