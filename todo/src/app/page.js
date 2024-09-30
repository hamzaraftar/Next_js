"use client";
import { useState, useEffect } from "react";
export default function Home() {
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);
  // Create todo

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      Window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
    setDescription("");
  }

  // getAlltodos
  const getTodos = async () => {
    try {
      const data = await fetch("http://localhost:3000/todo");
      const response = await data.json();
      setList(response);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  // Delete Todo
  const handleDelete = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:3000/todo/${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <main className="bg-slate-600 h-screen m-0">
        <div className="bg-white max-w-sm rounded-xl shadow-xl mx-auto h-[600px] relative top-32">
          <div>
            <h1 className="rounded-lg text-center bg-yellow-500 relative top-6 font-semibold text-4xl text-slate-100 py-2">
              TODO LIST
            </h1>
          </div>
          <div>
            <div className="text-center mt-10">
              <form onSubmit={handleSubmit}>
                <input
                  className="outline-none rounded-sm py-1 my-2 -sm border-b-4 border-yellow-500 mx-3 px-5 "
                  type="text"
                  placeholder="ADD TODO ITEMS"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <button className=" bg-yellow-500  px-2 rounded-full hover:bg-green-700 text-white text-center text-lg font-semibold">
                  +
                </button>
              </form>
              <ol className=" text-center relative top-10">
                {list.map((items) => (
                  <li
                    key={items.todo_id}
                    onClick={() => handleDelete(items.todo_id)}
                    className="hover:text-red-700 font-medium text-2xl cursor-pointer"
                  >
                    {items.description}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
