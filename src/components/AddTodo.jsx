import React, { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const { addTodo } = useContext(TodoContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
  };
  return (
    <form onSubmit={handleSubmit} className="flex text-center">
      <div className="flex bg-teal-400">
        <label htmlFor="">New todo</label>
        <input
          className="border-2 border-r-cyan-600"
          value={input}
          name="input"
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
      </div>
      <button>Add</button>
    </form>
  );
};
export default AddTodo;
