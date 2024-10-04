import { createContext, useState } from "react";
import axios from "axios";
export const GlobalContext = createContext(null);
export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

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

  return (
    <GlobalContext.Provider value={{ formData, setFormData, handleSubmit }}>
      {children}
    </GlobalContext.Provider>
  );
}
