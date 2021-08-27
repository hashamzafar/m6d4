import express from 'express'
import db from '../../db/models/db-assoc.js'
const categoryRouter = express.Router()

const { Categories } = db
categoryRouter.route('/')
    .get(async (req, res, next) => {
        try {
            await res.send(Categories)
        } catch (error) {
            next(error)
        }
    })


export default categoryRouter