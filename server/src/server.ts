import express from 'express'
import cors from 'cors'
import path from 'path'
import routes from './routes'
import { errors } from 'celebrate'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

// função que serve arquivos estáticos (usado nas imagens)
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
// lida automaticamente com o retorno de erros para o frontend
app.use(errors())

app.listen(3333)