import "./App.css";
import GrandPa from "./Components/GrandPa/GrandPa";
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
      <h1>Form master</h1>
      <GrandPa></GrandPa>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFull></StateFull> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ResuableForm
        formTitle={"sign up"}
        submitButtonText={"Sign up"}
        handleSubmit={handleSingUpSubmit}
      >
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign Up Right now</p>
        </div>
      </ResuableForm>
      <ResuableForm
        formTitle={"Profile Update"}
        submitButtonText={"update"}
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always update your profile </p>
        </div>
      </ResuableForm> */}
    </>
  );
}

export default App;
