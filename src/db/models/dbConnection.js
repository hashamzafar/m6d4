import { Sequelize } from 'sequelize'

const { DATABASE, USER, PASSWORD, HOST, DBPORT, } = process.env

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    port: DBPORT,
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