module.exports = {
  files: [
    "raf/polyfill",
    "<roodDir>/src/test/setupTest.js"
  ],
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
}