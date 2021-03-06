
// MAGIC Alert
//
// Attempting a find (hitting '/broadcasts/?q=my') will
// always only return the current user's records

module.exports = {
  before: {
    all: [],
    find: [(context) => {
      context.params.query = { "created_by": context.params.userId }
      // console.log(`broadcasts/broadcasts.hooks.js -- ${context.params.userId}`);
    }],
    get: [],
    create: [(context) => {
      context.data.created_by = context.params.userId;
    }],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
