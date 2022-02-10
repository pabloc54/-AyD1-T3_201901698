import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hola mundo 201901698</h1>')
})

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'))
