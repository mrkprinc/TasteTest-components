module.exports = {
  Error: class Error {},
  DatabaseError: class DatabaseError extends Error {
    constructor(err) {
      super(err);
      this.customResponseType = 'error';
      this.msg = err;
    }
  }
}