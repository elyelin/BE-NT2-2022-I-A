import "../styles/Button.css";
import "../App.css"

const Button = ({ onClick }) => {
  return (
    <div className="containerButton">
    <button onClick={onClick} className="Button">
      +
    </button>
 </div> );
};
export { Button };
