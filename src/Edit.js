import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch("http://localhost:8000/data/", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("Blog Edited");
      setIsPending(false);
      navigate("/edit");
      navigate('/')
    });
  };
  return (
    <div className="edit">
      <h2>Edit Blog Content</h2>
      <form onSubmit={handleEdit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Richard">Richard</option>
          <option value="Guy Richie">Guy Richie</option>
        </select>
        {!isPending && <button>Edit Blog</button>}
        {isPending && <button disabled>Editing Blog....</button>}
      </form>
    </div>
  );
};

export default Edit;
