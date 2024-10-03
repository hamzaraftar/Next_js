import { createContext, useState } from "react";

export const GlobleContext = createContext(null);
export default function GlobalState({ children }) {
  const [searchParams, setSetParams] = useState("");
  const [recipesList, setRecipesList] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );
      const data = await res.json();
      setRecipesList(data.data.recipes);
      setSetParams("");
    } catch (error) {
      console.error(error.message);
    }
  }
  console.log(recipesList);
  return (
    <GlobleContext.Provider
      value={{
        searchParams,
        setSetParams,
        handleSubmit,
        recipesList,
      }}
    >
      {children}
    </GlobleContext.Provider>
  );
}
