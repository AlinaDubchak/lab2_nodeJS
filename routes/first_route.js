export function GET(req, res) {
  res.writeHead(200, {
    'Content-type': 'application/xml'
  })
  res.end(
    '<response><message>Welcome to the first route! =)</message></response>'
  )
}

export function POST(req, res, payload) {
  res.json(payload)
}

export function OPTIONS(req, res) {
  res.writeHead(204, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  res.end()
}
