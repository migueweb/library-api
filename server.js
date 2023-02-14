const express = require('express');
const mysql = require('mysql2');
const myconnection = require('express-myconnection');

const routes = require('./routes')
const config = require('./config')

const app = express();
app.set('port', process.envPORT || 9000)

const dbOptions = {
    host: config.DB_HOST,
    port: config.DB_PORT,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    socketPath: config.socketPath
}

/***********************************************************/
/* Midlewares                                              */
/***********************************************************/
app.use(myconnection(mysql, dbOptions, 'single'))

app.use(express.json())


/***********************************************************/
/* Routes                                                  */
/***********************************************************/

app.get('/', (req, res) => {
    res.send('API working :) \n')
})
app.use('/books', routes)

/***********************************************************/
/* Server running                                          */
/***********************************************************/

app.listen(app.get('port'), () => {
    console.log('server running on port', app.get('port'))
})
