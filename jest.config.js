module.exports = {
  setupFiles: ['raf/polyfill', '<rootDir>/jest.init.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
