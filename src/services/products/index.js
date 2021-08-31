import express from 'express'
import db from '../../db/models/db-assoc.js'
// import Products from '../../db/models/products.js'

const productRouter = express.Router()
const Categories = db.Categories
const Products = db.Products
productRouter
    .route('/')
    .get(async (req, res, next) => {
        try {
            const product = await Products.findAll({ include: Categories })
            res.send(product)
        } catch (error) {
            next(error)
        }
    })
    .post(async (req, res, next) => {
        try {
            const product = await Products.create(req.body)
            res.send(product)

        } catch (error) {
            next(error)
        }
    })
productRouter
    .route('/:id')
    .get(async (req, res, next) => {
        try {
            const product = await Products.findByPk(req.params.id)
            res.send(product)
        } catch (error) {
            next(error)
        }

    })
    .put(async (req, res, next) => {
        try {
            const product = await Products.update(req.body, {
                where: { id: req.params.id },
                returning: true,
            })
            res.send(product[1][0])
        } catch (error) {
            next(error)
        }
    })
    .delete(async (req, res, next) => {
        try {
            const rows = await Products.destroy({
                where: { id: req.params.id, },
            })
            rows > 0 ? res.send('ok') : res.status(404).send('not found')
        } catch (error) {
            next(error)
        }
    })


export default productRouter