const express =  require('express');
const routes = express.Router();

/* Get all books */
routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM books', (err, rows) => {
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

/* Get single book */
routes.get('/book/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM books WHERE id = ?', [req.params.id], (err, rows) => {
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

/* Register new book */
routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('INSERT INTO books SET ?', [req.body], (err, rows) => {
            if(err) return res.send(err)
            
            res.send("The book was registered!")
        })
    })
})

/* Delete book */
routes.delete('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('DELETE FROM books WHERE id = ?', [req.params.id], (err, rows) => {
            if(err) return res.send(err)
            
            res.send("The book was deleted!")
        })
    })
})

/* Update book */
routes.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('UPDATE books SET ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
            if(err) return res.send(err)
            
            res.send("The book was updated!")
        })
    })
})

module.exports = routes