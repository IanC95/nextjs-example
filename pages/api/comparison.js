export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    console.log(req.body)
    res.status(200);
  } else {
    res.status(400);
  }

  res.end();
  return;
}
