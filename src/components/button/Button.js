import "./Button.scss";

function Button({ buttonText, onClick }) {
  return <button onClick={onClick}>{buttonText}</button>;
}

export default Button;
