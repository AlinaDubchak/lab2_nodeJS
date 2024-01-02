export function jsonPr(data, failback) {
  try {
    return JSON.parse(data)
  } catch (e) {
    return failback
  }
}

export function parseForm(data, failback) {
  try {
    data = data
      .split('\r\n')
      .filter((line) => line.trim() !== '' && !line.includes('----'))
    let result = {}

    for (let i = 0; i < data.length; i += 2) {
      let keyLine = data[i]
      if (keyLine) {
        let keyStart = keyLine.indexOf('name="') + 6
        let keyEnd = keyLine.indexOf('"', keyStart)
        let key = keyLine.substring(keyStart, keyEnd)
        let value = data[i + 1]
        result[key] = value
      }
    }

    return result
  } catch (e) {
    console.error('Error parsing form-data:', e)
    throw failback
  }
}
