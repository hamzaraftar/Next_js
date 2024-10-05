import { createContext, useState } from "react";
import axios from "axios";
export const GlobalContext = createContext(null);
export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [blogList, setBlogList] = useState([]);
  async function handleSubmit() {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/create",
        formData
      );
      const data = await res.data;
      if (data) {
        setFormData({
          title: "",
          description: "",
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  async function fetchListOfPost() {
    const res = await axios.get("http://localhost:5000/api/get");
    const data = await res;
    setBlogList(data.data);
  }
  async function handkeDeleteBlog(id) {
    try {
      const deletePost = await axios.delete(
        `http://localhost:5000/api/delete/${id}`
      );
      const result = await deletePost.data;
      if (result) {
        fetchListOfPost();
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        handleSubmit,
        blogList,
        fetchListOfPost,
        handkeDeleteBlog,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
