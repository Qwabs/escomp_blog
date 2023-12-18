import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data,
    error,
    isPending,
  } = useFetch("http://localhost:8000/data/" + id);
  return (
    <div className="blog-details">
      <h2>Blog Details-{id}</h2>
      {isPending && <div>loading....</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written By { data.author }</p>
          <div> { data.body } </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
