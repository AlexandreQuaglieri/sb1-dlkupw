class InMemoryDb {
  constructor() {
    this.data = {};
  }

  async connect() {
    console.log('Connected to in-memory database');
  }

  async disconnect() {
    console.log('Disconnected from in-memory database');
  }

  async create(collection, document) {
    if (!this.data[collection]) {
      this.data[collection] = [];
    }
    const id = Date.now().toString();
    const newDoc = { ...document, _id: id };
    this.data[collection].push(newDoc);
    return newDoc;
  }

  async find(collection, query = {}) {
    return this.data[collection] || [];
  }

  async findOne(collection, query = {}) {
    const results = this.data[collection] || [];
    return results[0] || null;
  }

  async update(collection, id, update) {
    const index = this.data[collection]?.findIndex(doc => doc._id === id);
    if (index !== -1) {
      this.data[collection][index] = { ...this.data[collection][index], ...update };
      return this.data[collection][index];
    }
    return null;
  }

  async delete(collection, id) {
    const index = this.data[collection]?.findIndex(doc => doc._id === id);
    if (index !== -1) {
      return this.data[collection].splice(index, 1)[0];
    }
    return null;
  }
}

export const db = new InMemoryDb();