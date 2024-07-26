import { PlusIcon, PencilSquareIcon, CheckBadgeIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function App() {
  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')
  const [itemsList, setItemsList] = useState([])
  function changeInputTask(event) {
    const taskValue = event.target.value
    setTask(taskValue)
  }
  function changeInputDescription(event) {
    const descriptionValue = event.target.value
    setDescription(descriptionValue)
  }
  function addItem() {
    if (!task) {
      return (
        window.alert("teste")
      )
    }
    setItemsList([...itemsList, { task, description }])
    setTask('')
    setDescription('')
  }
  function markAsComplete(id) {
    const checkedItems = itemsList.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setItemsList(checkedItems);
  }
  function deleteItem(id) {
    const deletedItems = itemsList.filter((item) =>
      item.id !== id ? item : null
    );
    setItemsList(deletedItems);
  }
  return (

    <div className="md:container md:mx-auto flex justify-center items-center h-screen bg-pattern bg-no-repeat bg-center">
      <div className="text-center space-y-10">
        <div className="flex items-center justify-between">
          <p className="text-2xl text-zinc-300">Lista de Tarefas</p>
          <button onClick={addItem} className="bg-teal-500 text-teal-950 hover:bg-teal-600 rounded-lg px-5 py-2 flex items-center justify-center gap-2 transition-all">
            <PlusIcon className="size-5" />
            Adicionar Tarefa
          </button>
        </div>
        <div className="w-[600px] space-y-2">
          <p className="text-sm text-zinc-400 flex">Tarefa</p>
          <div className="h-16 bg-zinc-900 py-2 px-0.5 w-full rounded-xl items-center flex">
            <input
              type="text"
              name='tarefa'
              onChange={changeInputTask}
              value={task}
              className="bg-transparent text-lg placeholder-zinc-400 outline-none border-none focus:ring-0 focus:border-transparent focus:placeholder-zinc-700 w-full" />
          </div>

          <p className="text-sm text-zinc-400 flex items-center"> Descrição da tarefa</p>
          <div className="h-22 bg-zinc-900 py-2 px-0.5 w-full rounded-lg items-center flex ">
            <textarea
              type="text"
              name='descricao'
              onChange={changeInputDescription}
              value={description}
              size={100000}
              className="bg-zinc-900 text-lg placeholder-zinc-400 outline-none border-none focus:ring-0 focus:border-transparent focus:placeholder-zinc-700 w-full" />
          </div>

        </div>
        <div className="flex items-center justify-between w-full">
          <ul className="text-md w-full space-y-2">
            {itemsList.map(
              (item, index) => (
                <>
                  <div className="hidden">{item.id = index}</div>
                  <div key={item.id} className={item.isCompleted ? "flex w-[600px] bg-lime-950 py-2.5 px-4 rounded-lg items-center gap-3 text-lime-900" : "flex w-[600px] bg-zinc-900 py-2.5 px-4 rounded-lg items-center gap-3"}>
                    <button onClick={() => markAsComplete(item.id)}>
                      <CheckBadgeIcon className={item.isCompleted ? "size-7 text-lime-400 transition-all" : "text-zinc-400 size-7 hover:text-zinc-50 transition-all"} />
                    </button>
                    <li className="flex-1">
                      <p>{item.task}</p>
                      <p className={item.isCompleted ? "text-xs text-lime-900 text-wrap max-w-full" : "text-xs text-zinc-400 text-wrap max-w-full"}>{item.description}</p>
                    </li>
                    <button>
                      <PencilSquareIcon className={item.isCompleted ? "size-7 hover:text-zinc-500 transition-all" : "text-zinc-400 size-7 hover:text-zinc-50 transition-all"} />
                    </button>
                    <button onClick={() => deleteItem(item.id)}>
                      <TrashIcon className={item.isCompleted ? "size-7 hover:text-zinc-500 transition-all" : "text-zinc-400 size-7 hover:text-zinc-50 transition-all"} />
                    </button>
                  </div>
                </>
              )
            )}

          </ul>
        </div>

      </div >
    </div >

  )
}

export default App;
