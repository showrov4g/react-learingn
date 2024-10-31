import "./App.css";
import ResuableForm from "./Components/ReuseableForm/ResuableForm";
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import StateFull from './Components/StateFull/StateFull'

function App() {
  const handleSingUpSubmit = (e) => {
    e.preventDefault()
  };
  const handleUpdateProfile = (e) => {
    e.preventDefault()
  };

  return (
    <>
      <h1>This react form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFull></StateFull> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ResuableForm
        formTitle={"sign up"}
        submitButtonText={"Sign up"}
        handleSubmit={handleSingUpSubmit}
      ></ResuableForm>
      <ResuableForm
        formTitle={"Profile Update"}
        submitButtonText={"update"}
        handleSubmit={handleUpdateProfile}
      ></ResuableForm>
    </>
  );
}

export default App;
