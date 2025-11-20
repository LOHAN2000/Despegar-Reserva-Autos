// src/tests/funcionales.test.js
import request from 'supertest';
import { app } from '../server.js';

// Aumentamos el timeout porque Firebase tarda un poco en responder

describe('Pregunta 1: Pruebas Funcionales', () => {

    // CASO 1: Búsqueda Exitosa (Debe encontrar el auto en Lima)
    test('PF-01: Buscar autos en Lima en fechas libres debe devolver status 200 y datos', async () => {
        const response = await request(app).get('/api/auto/autos').query({
            location: 'Lima',
            fechaRecogida: '2025-12-01',
            fechaDevolucion: '2025-12-05'
        });


        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0); // Esperamos encontrar el Toyota
        expect(response.body[0].ubicacion).toBe('Lima');
    });

    // CASO 2: Validación de Bloqueo (El auto NO debe aparecer si está reservado)
    test('PF-02: Buscar en fechas ocupadas (11-14 Dic) debe devolver lista vacía', async () => {
        const response = await request(app).get('/api/auto/autos').query({
            location: 'Lima',
            fechaRecogida: '2025-12-11',
            fechaDevolucion: '2025-12-14'
        });

        expect(response.statusCode).toBe(200);
        // Si el filtro funciona, el array debe estar vacío
        expect(response.body.length).toBe(0); 
    });

});