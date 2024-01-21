const supertest = require('supertest')
const server = require('../config/server')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const db = process.env.MONGO_URI_TEST

describe('Testeando Status de respuestas',  () => {

  BeforeAll(() => {
    mongoose.connect(db)
      .then(() => console.log('Conectada mor'));
  })

  afterAll(() => {
    mongoose.connection.close()
  })

  test('Ruta /', async () => {
    const { statusCode } = await supertest(server).get('/')
    expect(statusCode).toBe(200)
  });

  test('Ruta /tasks', async () => {
    const { statusCode } = await supertest(server).get('/tasks')
    expect(statusCode).toBe(200)
  })

  test('Ruta /tasks expect redirection code 302', async () => {
    const { statusCode } = await supertest(server).post('/tasks')
      .send({ name: 'Nueva Tarea', status: 'Status' })
    expect(statusCode).toBe(302)
  })
  
  test('Ruta /tasks expect redirection code 302', async () => {
    const { statusCode } = await supertest(server).post('/tasks/delete')
    .send({ taskName: 'Nueva Tarea' })
    expect(statusCode).toBe(302)
  })
})