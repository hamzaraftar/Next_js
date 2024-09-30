import { NextResponse } from "next/server";
import db from "../database";
//get single todo
export async function GET(request, { params }) {
  try {
    const id = params.id;
    const todo = await db.query("SELECT * FROM todo WHERE todo_id=$1 ", [id]);
    return NextResponse.json(todo.rows);
  } catch (err) {
    console.error(err.message);
  }
}
//Delete todo

export async function DELETE(request, { params }) {
  const id = params.id;
  const deleteTodo = await db.query("DELETE FROM todo WHERE todo_id =$1", [id]);
  return NextResponse.json(`Delete successfully ...`);
}

