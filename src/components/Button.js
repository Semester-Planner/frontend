import "./Button.css";

const Button = ({ children, type, onClick }) => {
  return (
    <button className="btn" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
