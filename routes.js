const express =  require('express');
const routes = express.Router();

/* Get all books */
routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send({
            message: 'failed',
            error: err
        })

        conn.query('SELECT * FROM books', (err, rows) => {
            if(err) return res.send(err)
            res.json({ 
                status: 'success',
                books: rows
            })
        })
    })
})

/* Get single book */
routes.get('/book/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send({
            message: 'failed',
            error: err
        })

        conn.query('SELECT * FROM books WHERE id = ?', [req.params.id], (err, rows) => {
            if(err) return res.send({
                message: 'failed',
                error: err
            })
            res.json({
                status: 'success',
                books: rows
            })
        })
    })
})

/* Register new book */
routes.post('/add', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send({
            message: 'failed',
            error: err
        })

        conn.query('INSERT INTO books SET ?', [req.body], (err, rows) => {
            if(err) return res.send({
                message: 'failed',
                error: err
            })
            
            res.send({
                status: 'success',
                message: 'The book was registered',
            })
        })
    })
})

/* Delete book */
routes.delete('/delete/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send({
            message: 'failed',
            error: err
        })

        conn.query('DELETE FROM books WHERE id = ?', [req.params.id], (err, rows) => {
            if(err) return res.send({
                message: 'failed',
                error: err
            })
            
            res.send({
                status: 'success',
                message: 'The book was deleted',
            })
        })
    })
})

/* Update book */
routes.put('/update/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send({
            message: 'failed',
            error: err
        })

        conn.query('UPDATE books SET ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
            if(err) return res.send({
                message: 'failed',
                error: err
            })
            
            res.send({
                status: 'success',
                message: 'the book was updated'
            })
        })
    })
})

module.exports = routes