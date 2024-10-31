import useInputState from "../../Hooks/HooksState";

const HookForm = () => {
    // const[name, handleNameChange] = useInputState("Ghosh")

    const emailState = useInputState('abc@gmail.com');

    const handleSubmit = e =>{
        e.preventDefault()
        console.log("Form data", emailState.value)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
        <br />
        <input {...emailState} type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value={"submit"} />
      </form>
    </div>
  );
};

export default HookForm;
