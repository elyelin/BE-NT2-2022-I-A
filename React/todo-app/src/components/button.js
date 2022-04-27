import "../styles/Button.css";
import "../App.css"

const Button = ({ callBack }) => {
  return (
    <div className="containerButton">
    <button onClick={callBack} className="Button">
      +
    </button>
 </div> );
};
export { Button };
