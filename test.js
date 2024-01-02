function parseFormData(data) {
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
      console.log(key)
      let value = data[i + 1]
      result[key] = value
      console.log(result)
    }
  }

  return result
}

let response =
  '----------------------------055939152145875890313739\r\nContent-Disposition: form-data; name="qwertyu"\r\n\r\nsdfs\r\n----------------------------055939152145875890313739\r\nContent-Disposition: form-data; name="hello"\r\n\r\ndsfgd\r\n----------------------------055939152145875890313739--\r\n----------------------------055939152145875890313739\r\nContent-Disposition: form-data; name="boss"\r\n\r\nlike\r\n----------------------------055939152145875890313739--\r\n'

let parsedData = parseFormData(response)
console.log(parsedData)
