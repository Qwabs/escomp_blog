const Create = () => {
  return (
    <div className="create">
      <h2>Add A New Blog</h2>
      <form>
        <label>Blog Title:</label>
        <input type="text" required />
        <label>Blog Body:</label>
        <textarea required/>
        <label>Blog Author:</label>
        <select>
            <option value="Richard">Richard</option>
            <option value="Richard">Guy Richie</option>
        </select>

      </form>
    </div>
  );
};

export default Create;
