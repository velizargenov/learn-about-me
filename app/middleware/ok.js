export default function ok (req, res, next) {
  res.ok = (data) => res.send({
    status: 'OK',
    data
  })
  next()
}
