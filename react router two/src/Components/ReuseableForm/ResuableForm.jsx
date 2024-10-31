import React from "react";

const ResuableForm = ({
  formTitle,
  handleSubmit,
  submitButtonText,
  children,
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit();
  };

  return (
    <div>
      <form onSubmit={handleLocalSubmit}>
        {children}
        <input type="text" name="name" />
        <br />
        <input type="email" id="" name="email" />
        <br />
        <input type="password" id="" name="password" />
        <br />
        <input type="submit" value={submitButtonText} />
      </form>
    </div>
  );
};

export default ResuableForm;
