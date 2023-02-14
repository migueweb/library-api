# Library API

### Project Setup
- Create the database use `/library-api.sql`

- Config `/config.js`

```javascript
$ npm install
$ npm run dev
```
## Documentation

### Introduction
This documentation will help you get familiar with the resources of the First node.js API and show you how to make different queries, so that you can get the most out of it.

#### Base URL
`localhost:9000/`

### Get all books
You can access the list of books by using the `/books` endpoint. 

```json
GET: localhost:9000/books 

[
    {
        "id": 1,
        "title": "The book",
        "author": "Jon Doe",
        "edition": 1
    }
    {
        ...
    }
]
```

### Get a single book
You can get a single book by using the `/books/book/{id}` endpoint.
```json
GET: localhost:9000/books/book/12

[
    {
        "id": 12,
        "title": "harry Potter",
        "author": "J. K. Rowling",
        "edition": 1
    }
]
```

### Add a new book
You can add a new book by using `/books/add`
```json
POST: localhost:9000/books/add

Content-Type: application/json

{
    "title": "The Hunger Games",
    "author": "Suzanne Collins",
    "edition": 1
}
```

### Update a book
You can update a book by using `/books/update/{id}`
```json
PUT: localhost:9000/books/update/14

Content-Type: application/json

{
    "author": "Jon Doe",
}
```
### Delete a book
You can delete a book by using `/books/delete/{id}`
```json
DELETE: localhost:9000/books/14
```
## Author
Github - [@migueweb](https://github.com/migueweb)