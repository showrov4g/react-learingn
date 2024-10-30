import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const naviget = useNavigate();

  const handleDetails =()=>{
    naviget(`/post/${id}`)
  }
  return (
    <div className="border-2 border-green-600 rounded-lg p-4">
      <h1 className="text-4xl uppercase font-bold">post: {id}</h1>
      <h2>Post Title: {title}</h2>
      <div>
        <Link to={`/post/${id}`}> post details</Link>
      </div>
      <Link to={`/post/${id}`}>
        <button className="btn">Show Details</button>
      </Link>
      <button onClick={handleDetails} className="btn ">Click to see details</button>
    </div>
  );
};

export default Post;
