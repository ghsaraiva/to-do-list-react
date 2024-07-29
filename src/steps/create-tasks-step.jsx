import { PlusIcon } from "@heroicons/react/24/outline"

function CreateTasksStep({ addItem, changeInputTask, changeInputDescription, task, description }) {
    return (
        <div className="w-full max-w-md space-y-4">
            <p className="text-sm text-zinc-400 flex">Tarefa <span className="text-red-700 font">*</span></p>
            <div className="bg-zinc-900 py-2 px-3 rounded-xl flex items-center">
                <input
                    type="text"
                    name='tarefa'
                    onChange={changeInputTask}
                    value={task}
                    placeholder="Tarefa"
                    className="bg-transparent text-lg placeholder-zinc-600 outline-none border-none focus:ring-0 focus:border-transparent focus:placeholder-zinc-800 w-full" />
            </div>
            <p className="text-sm text-zinc-400">Descrição da tarefa</p>
            <div className="bg-zinc-900 py-2 px-3 rounded-lg flex items-center">
                <textarea
                    type="text"
                    name='descricao'
                    onChange={changeInputDescription}
                    value={description}
                    placeholder="Descrição da tarefa"
                    className="bg-transparent text-lg placeholder-zinc-600 outline-none border-none focus:ring-0 focus:border-transparent focus:placeholder-zinc-800 w-full" />
            </div>
            <button onClick={addItem} className="bg-teal-500 text-teal-950 hover:bg-teal-600 rounded-lg px-4 py-2 flex items-center justify-center gap-2 transition-all w-full">
                <PlusIcon className="w-5 h-5" />
                Adicionar Tarefa
            </button>
        </div>
    )
}

export default CreateTasksStep
