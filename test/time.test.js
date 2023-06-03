const LibDate = require("../dist/lib.date.js")

/**
 *
 */
test("time() should return a length of string equals to 8", () => {
  const str = LibDate.time()
  expect(str.length).toBe(8)
})
