const assert = require('assert');
const app = require('../../src/app');

describe('\'broadcasts\' service', () => {
  it('registered the service', () => {
    const service = app.service('broadcasts');

    assert.ok(service, 'Registered the service');
  });
});
