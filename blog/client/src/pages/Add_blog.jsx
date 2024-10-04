// import React from 'react'
import Button from "@mui/material/Button";
import { useContext } from "react";
import { GlobalContext } from "../context";

function Add_blog() {
  const { formData, setFormData, handleSubmit } = useContext(GlobalContext);
  return (
    <div>
      <div className="flex flex-col gap-7 w-[400px] mx-auto">
        <h3 className="text-4xl font-medium border-b-4 rounded-sm pb-6 border-blue-600 ">
          Add Blog
        </h3>
        <input
          required
          className="text-xl p-2 px-3 outline-none rounded-lg mt-5  border-2 border-blue-600"
          type="text"
          placeholder="Enter Blog Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <textarea
          required
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="text-xl p-2 px-3 outline-none rounded-lg mt-5  border-2 border-blue-600"
          name="description"
          id="description"
          placeholder="Enter Blog Description"
        ></textarea>
        <Button onClick={handleSubmit} variant="contained">
          Add new blog
        </Button>
        {/* <button></button> */}
      </div>
    </div>
  );
}

export default Add_blog;
