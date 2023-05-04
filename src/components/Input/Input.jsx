import "./Input.css";
import { RiSearchEyeLine } from "react-icons/ri";
import { useState } from "react";
export default function Input({ setSearch, search }) {
  const [actual, setActual] = useState("");

  const sendChange = (e) => {
    setSearch(actual);
  };
  const setAsearch = (e) => {
    setActual(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <button onClick={sendChange}>
        <RiSearchEyeLine /> Buscar{" "}
      </button>
      <input
        type="text"
        placeholder="Github user"
        className="user-input"
        onChange={setAsearch}
      />
      <p>*No te equivoques*</p>
    </form>
  );
}
