import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error,setError] = useState(null);

  // const [name, setName] = useState("Richie");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

 
  return (
    <div className="home">
      {error && <div> { error } </div>}
      {isPending && <div>Loading....</div>}
      {data && <BlogList data={data} title="All Blogs" />}

      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs"
        handleDelete={handleDelete}
      /> */}
      {/* <button onClick={() => setName("Guy")}>Change Name</button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
