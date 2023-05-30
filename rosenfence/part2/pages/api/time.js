export default function time(req, res) {
  const today = new Date().toLocaleString();

  if (req.method === 'GET') {
    return res.status(200).json(today);
  }
}
