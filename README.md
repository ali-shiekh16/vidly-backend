# Vidly

---

Backend for a video rental application.

## How to run the app?

1. In the root of the project create a file named **.env** set the following environment variables in the file.
   - **VIDLY_PASSWORD** - A password/secret for generating JWT.
   - **VIDLY_DB_CONNECTION_STRING** - Connection string to connect to a mongodb database.
   - **VIDLY_PORT** - Port on which the application is to run.
   - **DEBUG** - This parameter defines the level of debugging required. Set it to " _vidly:\*_ " to log all the messages on the terimnal.
1. Run the following commands to get the app up and running.

```shell
npm i
npm run dev
```

Thats all.

## Endpoints

---

### Genres

**Properites**

- ID
- Name

| URL                  | Method | Response                                                                                                       |
| -------------------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| vidly/api/genres     | GET    | Returns all the genres.                                                                                        |
| vidly/api/genres/:id | GET    | Return the genre with given ID.                                                                                |
| vidly/api/genres/    | POST   | Creates a new genre and returns it. It requires a _name_ property to create the resouce.                       |
| vidly/api/genres/:id | UPDATE | Updates the genre with the given ID and returns it. It reads a _name_ attribute from the body of the request . |
| vidly/api/genres/:id | DELETE | Delete genre with the given id and returns it.                                                                 |

### Movies

**Properites**

- Title
-

| URL              | Method | Response               |
| ---------------- | ------ | ---------------------- |
| vidly/api/movies | GET    | Returns all the movies |
