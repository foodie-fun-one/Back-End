const request = require('supertest');

const server = require('../server.js');

describe('POST', () => {
    it('adds a review', () => {
        return request(server).post('/api/reviews/restaurant/2')
        .send({
            user_id: 1,
            restaurant_id: 2,
            review_disc: "some description"
        }).then(res => {
            expect(res.status).toBe(201);
        })        
    })

    it('GET by restaurant', () => {
        return request(server).get('/api/reviews/restaurant/2')
            .then(res => {
                expect(res.status).toBe(200);
            })
    })

    it('GET by user', () => {
        return request(server).get('/api/reviews/user/4')
            .then(res => {
                expect(res.status).toBe(200);
            })
    })
})