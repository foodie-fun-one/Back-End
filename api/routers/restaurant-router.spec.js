const request = require('supertest');

const server = require('../server.js');

describe('get request', () => {
    it('returns restaurants', async () => {
        const res = await request(server).get('/api/restaurants')

        expect(res.body.length).toEqual(3);
    })
})

describe('post request', () => {
    it('adds a restaurant', function() {
        return request(server).post('/api/restaurants')
        .send({name: "s23ome name", address: "some address", hours: "some hours"})

        expect(res.status).toBe(201);
    })
    
    it('PUT', () => {
        return request(server).put('/api/restaurants/2')
            .send({
                name: "updated name",
                address: "updated address",
                hours: "updated hours"
            })

            expect(res.status).toBe(200);
    })
})

