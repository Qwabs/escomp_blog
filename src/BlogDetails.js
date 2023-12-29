import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/data/' + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:8000/data/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    }) 
  }

  const editClick = () => {
    fetch('http://localhost:8000/data/' + blog.id, {
      method: 'PATCH'
    }).then( () => {
      navigate('/edit')
    })
  }


  // const editClick = () => {
  //   // Assuming 'editedData' contains the updated data
  //   const editedData = { data: blog, content: 'Updated Content' };
  
  //   fetch(`http://localhost:8000/data/${blog.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(editedData),
  //   })
  //     .then(() => {
  //       console.log('Data updated successfully');
  //       navigate('/');
  //     })
  //     .catch(error => {
  //       console.error('Error updating data:', error);
  //     });
  // };
  

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>delete</button>
          <br></br><span><button onClick={editClick}>Edit</button></span>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;
