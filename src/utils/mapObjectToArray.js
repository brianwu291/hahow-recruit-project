/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
function mapObjectToArray(inputObj = {}) {
  const result = []
  for (const key in inputObj) {
    const currentItem = {}
    if (Object.prototype.hasOwnProperty.call(inputObj, key)) {
      currentItem[key] = JSON.parse(JSON.stringify(inputObj[key]))
      result.push(currentItem)
    }
  }
  return result
}

export default mapObjectToArray
