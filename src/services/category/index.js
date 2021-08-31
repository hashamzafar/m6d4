import express from 'express'
import db from '../../db/models/db-assoc.js'
const categoryRouter = express.Router()

const { Categories } = db
categoryRouter.route('/')
    .get(async (req, res, next) => {
        try {
            const category = await Categories.findAll()


            res.send(category)
        } catch (error) {
            next(error)
        }

    })
    .post(async (req, res, next) => {
        try {
            const category = await Categories.create(req.body)
            res.send(category)
        } catch (error) {
            next(error)
        }
    })
categoryRouter
    .route('/:id')
    .get(async (req, res, next) => {
        try {
            const category = await Categories.findByPk(req.params.id)
            res.send(category)
        } catch (error) {
            next(error)
        }
    })
    .put(async (req, res, next) => {
        try {
            const category = await Categories.update(req.body, {
                where: { id: req.params.id },
                returning: true,
            })
            res.send(category[1][0])
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    .delete(async (req, res, next) => {
        try {
            const rows = await Categories.destroy({
                where: {
                    id: req.params.id,
                },
            })
                (rows > 0) ?
                res.send("ok")
                : res.status(404).send("not found")

        } catch (error) {
            console.log(error)
            next(error)
        }
    })

export default categoryRouter