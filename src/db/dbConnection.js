import { Sequelize } from 'sequelize'

const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGDBPORT } = process.env

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: PGDBPORT,
    dialect: "postgres"
})

// const schemas = ["development", "production"]
//     .map((schema) => `CREATE SCHEMA IF NOT EXISTS ${schema} AUTHORIZATION postgres`)
//     .join(";")

export const connectionSequelize = async () => {
    // try {
    //     await (await sequelize.authenticate()).sync({ alter: true, force: true }).then(() => {
    //         // sync({alter: true, force: true})
    //         console.log('db is authenticated')
    //     })

    // } catch (error) {
    //     console.log(error)
    // }
    try {
        await sequelize.authenticate()
        // await sequelize.query(schemas)
        // CREATES SCHEMAS
        await sequelize.sync({
            // alter: true, // => but won't change restraints
            // force: true, // => but will lose data. 
            // force NECESSARY WHEN WE NEED TO CHANGE CONSTRAINTS AND MAJOR INFO, BUT WILL CLEAR ALL DATA TABLES
            logging: false,
            // STOPS EXCESSIVE LOGGING EACH TIME SERVER RESTARTS AT SERVER.JS LINE 27
            // schema: "development",
        });
        console.log("DB authenticated")
    } catch (error) {
        console.log(error)
    }
}





export default sequelize