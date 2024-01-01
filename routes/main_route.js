export function mainGET(req, res, payload, body) {
   res.writeHead(200, {
     'Content-type': 'text/html',
   });
   res.end('<h1>Lab 2</h1>');
}

export function POST(req, res, payload, body) {
  res.json(payload);
}

export function OPTIONS(req, res, payload, body) {
  res.writeHead(204, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end();
}

