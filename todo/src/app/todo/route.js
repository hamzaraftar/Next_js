import { NextResponse } from "next/server";
import db from "./database";

//Get every todo

export async function GET() {
  try {
    const getTodo = await db.query("SELECT * FROM todo");
    return NextResponse.json(getTodo.rows);
  } catch (error) {
    console.log(error.massage);
  }
}
// Create todos

export async function POST(request) {
  const { description } = await request.json();
  // console.log(description);
  const newTodo = await db.query(
    "INSERT INTO todo (description) VALUES($1) RETURNING *",
    [description]
  );
  return NextResponse.json(newTodo.rows[0]);
}
