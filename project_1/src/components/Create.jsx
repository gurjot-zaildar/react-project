import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

function Create(props) {
  const todos = props.todos;
  const settodos = props.settodos;

  const [title, settitle] = useState("");
 // const [complete, setcomplete] = useState(true);

  const submithendler = (e) => {
    e.preventDefault();

    const newtodo = {
      id: nanoid(),
      title: title,
      iscomplete: false,
    };
    let copytodos = [...todos];
    copytodos.push(newtodo);
    settodos(copytodos);

    settitle("");
  };

  return (
    <div className="w-[60%]  p-10">
      <h1 className="text-center mt-10 text-7xl font-thin">ADD <span className="text-red-400">TASK</span></h1>
      <form onSubmit={submithendler}>
        <input className="mt-10 w-full border-b text-4xl font-thin p-4 outline-0 "
          onChange={(e) => settitle(e.target.value)}
          value={title}
          placeholder="title"
          type="text"
        />
        <button className="mt-10 border rounded-sm  p-2 border-pink-400">submit</button>
      </form>
    </div>
  );
}

export default Create;
