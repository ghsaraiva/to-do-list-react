import { PlusIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function App() {
  function changeInput(event) {
    const taskValue = event.target.value
    setTask(taskValue)
  }
  const [task, setTask] = useState('');
  return (
    <div className="md:container md:mx-auto flex justify-center items-center h-screen">
      <div className="text-center space-y-10">
        <p className="text-lg text-zinc-300">To do List com React e Tailwind</p>
        <div className="h-16 bg-zinc-950 px-4 rounded-xl flex items-center shadow-shape gap-3">
          <div className='flex items-center gap-2 flex-1'>
            <PencilSquareIcon className="text-zinc-400 size-6" />
            <input
              type="text"
              name='name'
              placeholder="Digite a tarefa que deseja adicionar"
              onChange={changeInput}
              className="bg-transparent text-lg placeholder-zinc-400 outline-none border-none focus:ring-0 focus:border-transparent w-[500px]" />
            <button className="bg-teal-500 text-teal-950 hover:bg-teal-600 rounded-lg px-5 py-2 flex items-center justify-center gap-2 transition-all">
              Adicionar
              <PlusIcon className="size-5" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <ul className=" to-do-list text-md rounded-lg w-full space-y-2">
            <li className="justify-between bg-zinc-950 py-2 px-2 rounded-lg">Teste</li>
            <li className="justify-between bg-zinc-950 py-2 px-2 rounded-lg">Teste</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default App;
