require("dotenv").config();
const request = require('supertest');
const server = require('../server.js');

describe('when a list of cuisine values are requested', () => {
    it('should => status code 200', async () => {
        const res = await request(server).get('/api/cuisine')
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJpbGx5IiwicGFzc3dvcmQiOiIkMmEkMTIkM1JoS2xvcldETy9aT2IuQy9ETUJrdW03anhieDNmZWczYWlVdG8zRTFMSUlBaHkuZVpBQ2UiLCJpYXQiOjE1ODA5NTk1MTksImV4cCI6MTU4MDk4ODMxOX0.pKR88Mfi7MDLoQ_eMXu0UzC6QyxLl4eokioMqfLvk5c')
        expect(res.statusCode).toEqual(200);
    });
});

describe('when a specific cuisine value is requested', () => {
    it('should => status code 200', async () => {
        const res = await request(server).get('/api/cuisine/7')
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJpbGx5IiwicGFzc3dvcmQiOiIkMmEkMTIkM1JoS2xvcldETy9aT2IuQy9ETUJrdW03anhieDNmZWczYWlVdG8zRTFMSUlBaHkuZVpBQ2UiLCJpYXQiOjE1ODA5NTk1MTksImV4cCI6MTU4MDk4ODMxOX0.pKR88Mfi7MDLoQ_eMXu0UzC6QyxLl4eokioMqfLvk5c')
        expect(res.statusCode).toEqual(200);
    });
});