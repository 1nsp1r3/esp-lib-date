const DateFormat = require("../dateformat.js")

/**
 *
 */
test("time() should return a length of string equals to 8", () => {
  const str = DateFormat.time()
  expect(str.length).toBe(8)
})
