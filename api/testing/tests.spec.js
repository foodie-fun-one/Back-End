const request = require('supertest');
const server = require('../server');

const db = require('../../data/dbConfig');
const Users = require('../../data/helpers/models/user-model');

let token;

beforeAll(done => {
    request(server)
      .post("/api/register")
      .set("Content-Type", "application/json")
      .send({
       username: "TestUser",
       password: "password",
       email: "testing@gmail.com",
       city: "Testago"
      })
      .end((err, res) => {
        request(server)
          .post("/api/login")
          .set("Content-Type", "application/json")
          .send({
            username: "TestUser",
            password: "password"
          })
          .end((err, response) => {
             token = response.body.token; 
             console.log(token)
            done();
          });
      });
  });




describe("GET /", () => { 
    test("It should require authorization", () => {
      return request(server)
        .get("/api/cuisine")
        .then(response => {
          expect(response.statusCode).toBe(400);
        });
    });
    test("It responds with JSON", () => {
        return request(server)
          .get("/api/cuisine/2")
          .set("Authorization", `${token}`)
          .then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.type).toBe("application/json");
          });
      });
  });

  // cuisine values tests

  describe('when a list of cuisine values are requested', () => {
    test('it should respond with a 200', () => {
        return request(server)
        .get('/api/cuisine')
        .set('Authorization', `${token}`)
        .then(response => {
            console.log(token)
            expect(response.statusCode).toBe(200)
            expect(response.type).toBe("application/json");
        })
    })
})

describe('when a specific cuisine values is requested', () => {
  test('it should respond with a 200', () => {
      return request(server)
      .get('/api/cuisine/2')
      .set('Authorization', `${token}`)
      .then(response => {
          console.log(token)
          expect(response.statusCode).toBe(200)
          expect(response.type).toBe("application/json");
      })
  })
})


// describe('when a new cuisine value is created', () => {
//     it('status code should be 200', async () => {
//         const res = await request(server).post('/api/cuisine')
//         .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhhcnJ5IiwicGFzc3dvcmQiOiIkMmEkMTIkeTRrWHNManZaLmpnM2hUUjhUNUlsZW9vaTgzdTdwdzZaS21OVjlSOHlMOHNaR3JOemtiWkMiLCJpYXQiOjE1ODEwMTc1MTcsImV4cCI6MTU4MTA0NjMxN30.qQ0MEcfknpEOZeYxXxbWBpihJ_pvXVvZ7gK3nRMWxF0')
//         .send({
//             "name": "African",
//         })
//         expect(res.statusCode).toEqual(200);
//     });
// });