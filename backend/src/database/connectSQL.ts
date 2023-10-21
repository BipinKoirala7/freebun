import sql from 'mysql2/promise'

async function connectSQL() {
    try {
        const connection = await sql.createConnection({
            host: 'localhost',
            port: 3306,
            database: 'invoicing',
            user: 'root',
            password: 'Bipinkoiral@2061'
        })
        // const query = await connection.execute('SELECT * FROM `clients`')
        // console.log(query)
        return connection
    }
    catch (error:any) {
        console.log(error.message)
    }
}

export default connectSQL

