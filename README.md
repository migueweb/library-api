# Books data API 📚

### Project Setup
- To create the database use `./library-api.sql` file
- Set the credentials at `/config.js`

```javascript
npm install
npm run dev
```
## Documentation

### Introduction
This documentation will help you get familiar with the resources of the  **Library API** and show you how to make different queries, so that you can get the most out of it.

### Get all books
You can access the list of books by using the `/books` endpoint. 

`GET: localhost:9000/books`
```json
[
    {
        "id": 1,
        "title": "The book",
        "author": "Jon Doe",
        "edition": 1
    }
    {
        "...": "..."
    }
]
```

### Get a single book
You can get a single book by using the `/books/book/{id}` endpoint.

`GET: localhost:9000/books/book/12`
```json
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
You can add a new book by using `/books/add` endpoint. 

`POST: localhost:9000/books/add`
```json
{
    "title": "The Hunger Games",
    "author": "Suzanne Collins",
    "edition": 1
}
```

### Update a book
You can update a book by using `/books/update/{id}` endpoint. 

`PUT: localhost:9000/books/update/14`
```json
{
    "author": "Jon Doe",
}
```
### Delete a book
You can delete a book by using `/books/delete/{id}` endpoint. 

`DELETE: localhost:9000/books/delete/14`
```json
{
	"status": "success",
	"message": "The book was deleted"
}
```

## Author
Github - [@migueweb](https://github.com/migueweb)
