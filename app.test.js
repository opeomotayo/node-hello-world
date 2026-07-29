const test = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('./app');

test('GET / returns Hello message', async () => {
  const response = await request(app).get('/');

  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(response.text, 'Hello from Harness CI/CD!');
});
