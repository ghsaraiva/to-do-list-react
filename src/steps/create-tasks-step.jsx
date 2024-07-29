import { PlusIcon } from "@heroicons/react/24/outline"


function CreateTasksStep({ addItem, changeInputTask, changeInputDescription, task, description }) {

    return (
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
            <button onClick={addItem} className="bg-teal-500 text-teal-950 hover:bg-teal-600 rounded-lg px-10 py-2.5 flex items-center justify-center gap-2 transition-all w-full">
                <PlusIcon className="size-5" />
                Adicionar Tarefa
            </button>
        </div>
    )
}

export default CreateTasksStep