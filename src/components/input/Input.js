import "./Input.scss";

function Input({ type, value, label, onChange }) {
  return <input type={type} value={value} labe={label} onChange={onChange} />;
}

export default Input;
