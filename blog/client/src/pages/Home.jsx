import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";

function Home() {
  const { blogList, fetchListOfPost,handleDetails } = useContext(GlobalContext);
  useEffect(() => {
    fetchListOfPost();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-10 mt-16 cursor-pointer ">
      {blogList.map((post) => (
        <div onClick={()=>handleDetails(post.id)}
          className=" p-5 border-2 border-blue-600 rounded-xl shadow-xl hover:translate-y-1"
          key={post.id}
        >
          <h1 className="font-medium text-xl">{post.title}</h1>
          <p className="font-serif">{post.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
