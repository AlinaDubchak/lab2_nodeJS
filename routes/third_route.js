export function GET(req, res) {
  res.writeHead(200, {
    'Content-type': 'application/json'
  })
  res.json({
    message:
      'I see, you so stubborn. Ok, here some json information special for you:',
    fact_1: 'Most heart attacks occur between the hours of 8 and 9 am',
    fact_2: 'On average a business document is copied 19 times',
    fact_3: 'Ever year, Americans spend close to $25 billion on beer',
    fact_4: 'Banging your head against a wall uses 150 calories an hour',
    fact_5:
      'The Romans used to clean themselves with olive oil since they did not have any soap. They would pour the oil on their bodies, and then use a strigil, which is type of blade, to scrape off any dirt along with the oil'
  })
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
