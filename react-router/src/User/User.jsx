import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, address } = user;

  const userStyle = {
    border: "2px solid green",
    padding: "10px",
    borderRadius: "20px",
    margin: "10px",
  };
  return (
    <div style={userStyle}>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{email}</h1>
    </div>
  );
};

export default User;
