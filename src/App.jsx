import { PlusIcon, PencilSquareIcon, CheckBadgeIcon, TrashIcon, XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [itemsList, setItemsList] = useState([]);
  const [editTaskModal, setEditTaskModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  function changeInputTask(event) {
    const taskValue = event.target.value;
    setTask(taskValue);
  }

  function changeInputDescription(event) {
    const descriptionValue = event.target.value;
    setDescription(descriptionValue);
  }

  function addItem() {
    if (!task) {
      return (
        window.alert("teste")
      )
    }
    setItemsList([{ id: uuidv4(), task, description, isCompleted: false }, ...itemsList]);
    setTask('');
    setDescription('');
  }

  function markAsComplete(id) {
    const checkedItems = itemsList.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setItemsList(checkedItems);
  }

  function deleteItem(id) {
    const deletedItems = itemsList.filter((item) => item.id !== id);
    setItemsList(deletedItems);
  }

  function openTaskModal(item) {
    setCurrentTask(item);
    setEditTaskModal(true);
  }

  function closeTaskModal() {
    setEditTaskModal(false);
    setCurrentTask(null);
  }

  function handleEditTask() {
    const updatedTasks = itemsList.map((item) =>
      item.id === currentTask.id ? { ...item, task: currentTask.task, description: currentTask.description } : item
    );
    setItemsList(updatedTasks);
    closeTaskModal();
  }

  function changeEditTask(event) {
    const { name, value } = event.target;
    setCurrentTask({ ...currentTask, [name]: value });
  }

  return (
    <div className="md:container md:mx-auto flex justify-center items-center h-screen bg-pattern bg-no-repeat bg-center">
      <div className="space-y-12">
        <div className="flex items-center justify-between">
          <p className="text-2xl text-zinc-300">Lista de Tarefas</p>
          <button onClick={addItem} className="bg-teal-500 text-teal-950 hover:bg-teal-600 rounded-lg px-5 py-2 flex items-center justify-center gap-2 transition-all">
            <PlusIcon className="size-5" />
            Adicionar Tarefa
          </button>
        </div>
        <div className="w-[600px] space-y-2">
          <p className="text-sm text-zinc-400 flex">Tarefa <span className="text-red-700 font">*</span></p>
          <div className="h-16 bg-zinc-900 py-2 px-0.5 w-full rounded-xl items-center flex">
            <input
              type="text"
              name='tarefa'
              onChange={changeInputTask}
              value={task}
              placeholder="Tarefa"
              className="bg-transparent text-lg placeholder-zinc-600 outline-none border-none focus:ring-0 focus:border-transparent focus:placeholder-zinc-800 w-full" />
          </div>
          <p className="text-sm text-zinc-400 flex items-center">Descrição da tarefa</p>
          <div className="h-22 bg-zinc-900 py-2 px-0.5 w-full rounded-lg items-center flex ">
            <textarea
              type="text"
              name='descricao'
              onChange={changeInputDescription}
              value={description}
              placeholder="Descrição da tarefa"
              className="bg-zinc-900 text-lg placeholder-zinc-600 outline-none border-none focus:ring-0 focus:border-transparent focus:placeholder-zinc-800 w-full" />
          </div>
        </div>

        {editTaskModal && (
          <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-lg font-semibold'>Editar Tarefa</h2>
                  <button onClick={closeTaskModal} type='button' className="text-zinc-200 hover:text-zinc-400 transition-all">
                    <XMarkIcon className="size-7" />
                  </button>
                </div>
              </div>
              <div className='space-y-3'>
                <div className='h-14 px-0.5 py-2 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'>
                  <input
                    type="text"
                    name='task'
                    placeholder="Tarefa"
                    value={currentTask.task}
                    onChange={changeEditTask}
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none border-none focus:ring-0 focus:border-transparent focus:placeholder-zinc-700 flex-1" />
                </div>
                <div className='h-22 px-0.5 py-2 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'>
                  <textarea
                    type="text"
                    name='description'
                    placeholder="Descrição"
                    value={currentTask.description}
                    onChange={changeEditTask}
                    className="bg-zinc-950 text-lg placeholder-zinc-400 outline-none border-none focus:ring-0 focus:border-transparent focus:placeholder-zinc-700 w-full" />
                </div>
                <button onClick={handleEditTask} className="bg-teal-500 text-teal-950 hover:bg-teal-600 rounded-lg px-5 py-2 flex items-center justify-center gap-2 transition-all w-full">
                  <CheckIcon className="size-5" /> Confirmar
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center text-center justify-between w-full">
          <ul className="text-md w-full space-y-2">
            {itemsList.map((item) => (
              <div key={item.id} className={item.isCompleted ? "flex w-[600px] bg-lime-950 py-2.5 px-4 rounded-lg items-center gap-3 text-lime-900" : "flex w-[600px] bg-zinc-900 py-2.5 px-4 rounded-lg items-center gap-3"}>
                <button title="Concluir tarefa" onClick={() => markAsComplete(item.id)}>
                  <CheckBadgeIcon className={item.isCompleted ? "size-7 text-lime-400 transition-all" : "text-zinc-400 size-7 hover:text-zinc-50 transition-all"} />
                </button>
                <li className="flex-1">
                  <p>{item.task}</p>
                  <p className={item.isCompleted ? "text-xs text-lime-900 text-wrap max-w-full" : "text-xs text-zinc-400 text-wrap max-w-full"}>{item.description}</p>
                </li>
                <button onClick={() => openTaskModal(item)}>
                  <PencilSquareIcon title="Editar tarefa" className={item.isCompleted ? "size-7 hover:text-zinc-500 transition-all" : "text-zinc-400 size-7 hover:text-zinc-50 transition-all"} />
                </button>
                <button title="Excluir tarefa" onClick={() => deleteItem(item.id)}>
                  <TrashIcon className={item.isCompleted ? "size-7 hover:text-zinc-500 transition-all" : "text-zinc-400 size-7 hover:text-zinc-50 transition-all"} />
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
