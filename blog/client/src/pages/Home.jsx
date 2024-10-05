import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Home() {
  const { blogList, fetchListOfPost, handkeDeleteBlog } =
    useContext(GlobalContext);
  useEffect(() => {
    fetchListOfPost();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-10 mt-16  ">
      {blogList.map((post) => (
        <div
          className=" p-5 border-2 border-blue-600 rounded-xl shadow-xl hover:translate-y-1"
          key={post.id}
        >
          <h1 className="font-medium text-xl">{post.title}</h1>
          <p className="font-serif">{post.description}</p>
          <EditIcon className="mx-4 cursor-pointer" />
          <DeleteIcon
            onClick={() => handkeDeleteBlog(post.id)}
            className=" cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
