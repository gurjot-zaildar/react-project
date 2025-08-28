import React from "react";

function Read(props) {
  const todos = props.todos;
  const settodos = props.settodos;

  let rendertodos = todos.map((todo) => {
    return <li className="flex rounded-xl place-content-between bg-gray-900 mb-4 text-3xl p-3 font-thin" key={todo.id}><span>{todo.title}</span>  <button onClick={()=>deletehandler(todo.id)} className=" text-green-400 border rounded-md border-white text-xl p-1">completed</button></li> 
    
  });

  const deletehandler=(id)=>{
    const filtertodo=todos.filter((todo)=>todo.id !=id);
    settodos(filtertodo)
  }

  return (
    <div className=" w-[40%] p-10">
      <h1 className="text-center mb-10 text-5xl font-thin"><span className="text-pink-400">Pending</span>Todos</h1>
      <div className="flex">
      <ol className="w-full">{rendertodos} </ol>
    
    </div>
    </div>
  );
}

export default Read;
