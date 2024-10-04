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

  
  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        handleSubmit,
        blogList,
        fetchListOfPost,        
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
