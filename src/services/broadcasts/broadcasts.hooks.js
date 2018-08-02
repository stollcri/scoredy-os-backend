

module.exports = {
  before: {
    all: [],
    find: [],
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
