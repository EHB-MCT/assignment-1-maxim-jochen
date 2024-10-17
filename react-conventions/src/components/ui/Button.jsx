// Button.jsx: A reusable button component.

const Button = ({ label, onClick }) => (
    <button onClick={onClick}>
      {label}
    </button>
  );
  
  export default Button;