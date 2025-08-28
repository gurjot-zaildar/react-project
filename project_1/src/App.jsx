import React, { useState } from "react";

import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [todos, settodos] = useState([
    {id :1 , title: "kaam krle bhai" , iscomplete: false}
  ]);

  return (
    <div className="flex bg-gray-800 text-white w-screen h-screen gap-10 p-5 ">
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
