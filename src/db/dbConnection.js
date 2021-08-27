import { Sequelize } from 'sequelize'

const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGDBPORT } = process.env

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: PGDBPORT,
    dialect: "postgres"
})
export const connectionSequelize = async () => {
    try {
        await sequelize.authenticate().then(() => {
            console.log('db is authenticated')
        })

    } catch (error) {
        console.log(error)
    }
}


export default sequelize