import { useState } from "react";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    fetch("htto://localhost:8000/data/",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=> {
      console.log("New Blog Added")
    })
    
    
  };
  return (
    <div className="create">
      <h2>Add A New Blog</h2>
      <form onSubmit={handleSubmit}>
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
          <option value="">Richard</option>
          <option value="">Guy Richie</option>
        </select>
        <button>Add Blog</button>
       
      </form>
    </div>
  );
};

export default Create;
