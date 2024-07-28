import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import CreateTasksStep from "./steps/create-tasks-step";
import EditTaskModal from "./steps/edit-task-modal";
import CompleteAndDeleteTaskStep from "./steps/complete-and-delete-task-step";
import { PlusIcon } from "@heroicons/react/24/outline";
import SearchStep from "./steps/search-step";
import FiltersStep from "./steps/filters-step";

function App() {
  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')
  const [itemsList, setItemsList] = useState([])
  const [editTaskModal, setEditTaskModal] = useState(false)
  const [currentTask, setCurrentTask] = useState(null)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

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
    <div className="md:container md:mx-auto flex justify-center items-center h-screen mt-10 bg-pattern bg-no-repeat bg-center">
      <div className="space-y-14 block">
        <div className="flex items-center justify-between">
          <p className="text-2xl text-zinc-300">Lista de Tarefas</p>
          <button onClick={addItem} className="bg-teal-500 text-teal-950 hover:bg-teal-600 rounded-lg px-5 py-2 flex items-center justify-center gap-2 transition-all">
            <PlusIcon className="size-5" />
            Adicionar Tarefa
          </button>
        </div>


        <div className="flex justify-between items-center">

          <FiltersStep
            filter={filter}
            setFilter={setFilter}
          />

          <SearchStep
            search={search}
            setSearch={setSearch}
          />

        </div>

        <CreateTasksStep
          changeInputTask={changeInputTask}
          changeInputDescription={changeInputDescription}
          task={task}
          description={description}
        />

        {editTaskModal && (
          <EditTaskModal
            closeTaskModal={closeTaskModal}
            currentTask={currentTask}
            changeEditTask={changeEditTask}
            handleEditTask={handleEditTask}
          />
        )}

        <CompleteAndDeleteTaskStep
          deleteItem={deleteItem}
          filter={filter}
          itemsList={itemsList}
          markAsComplete={markAsComplete}
          openTaskModal={openTaskModal}
          search={search}
        />

      </div>
    </div>
  );
}

export default App;
