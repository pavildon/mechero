import path from 'path'
import express from 'express'


const __dirname = path.resolve()

const app = express()
const port = 3000

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: (res) => {
    res.set('x-timestamp', Date.now())
  }
}


app.use('/', express.static(__dirname + '/static'))


app.get('/api/', async (_req, res) => {
  res.json("ok")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

