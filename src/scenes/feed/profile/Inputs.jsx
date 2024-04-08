import "./Inputs.css";

function Inputs(props) {
  return (
    <>
      <label htmlFor="inpput-profile">{props.label}</label>
      <input
        type="text"
        id="input-profile"
        name="input-profile"
        className="profile-input"
      />
    </>
  );
}

export default Inputs;
