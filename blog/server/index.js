import express from "express";
import cors from "cors";
import pg from "pg";


const app = express();
const port = 5000;
// database connection
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "blog",
  password: "12345",
  port: "5432",
});
db.connect();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
// Create post
app.post("/api/create", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = await db.query(
      "INSERT INTO blogpost (title,description) VALUES($1,$2) RETURNING *",
      [title, description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//Get all post

app.get("/api/get", async (req, res) => {
  try {
    const getAllPost = await db.query("SELECT * FROM blogpost");
    res.json(getAllPost.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get single post
app.get("/api/get/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await db.query("SELECT * FROM blogpost WHERE id=$1 ", [id]);
    res.json(data.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//Update posts
app.put("/api/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatePost = await db.query(
      "UPDATE blogpost SET title = $1 , description =$2  WHERE id =$3",
      [title, description, id]
    );
    res.json("Post updated successfully : )");
  } catch (err) {
    console.error(err.message);
  }
});

//Delete post
app.delete("/api/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await db.query("DELETE FROM blogpost WHERE id =$1", [
      id,
    ]);
    res.json("Delete succesfully ...");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
