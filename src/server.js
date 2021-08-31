import express from 'express'
import cors from 'cors'
import categoryRouter from './services/category/index.js'
import { connectionSequelize } from './db/dbConnection.js'
import productRouter from './services/products/index.js'
const server = express()


const port = process.env.PORT || 3000
server.use(cors())
server.use(express.json())
server.use('/products', productRouter)
server.use('/category', categoryRouter)
// server.use ('/review' review)
// db.sequelize
//     .sync()/
//     .then(() => {
//         server.listen(port, async () => {
//             console.log('server running on', port)
//         })
//     })
//     .catch(err => { console.log(err) })


server.listen(port, async () => {
    await connectionSequelize();
    console.log(" ✔ Server running", port);
});
server.on('error', (err) => console.error('server crashed due to ', err))
