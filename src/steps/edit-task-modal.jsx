import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline"

function EditTaskModal({ closeTaskModal, currentTask, changeEditTask, handleEditTask }) {
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-full max-w-lg rounded-xl py-5 px-6 shadow-lg bg-zinc-900 space-y-5'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-semibold'>Editar Tarefa</h2>
                    <button onClick={closeTaskModal} type='button' className="text-zinc-200 hover:text-zinc-400 transition-all">
                        <XMarkIcon className="w-7 h-7" />
                    </button>
                </div>
                <div className='space-y-3'>
                    <div className='bg-zinc-950 border border-zinc-800 rounded-lg flex items-center'>
                        <input
                            type="text"
                            name='task'
                            placeholder="Tarefa"
                            value={currentTask.task}
                            onChange={changeEditTask}
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none border-none focus:ring-0 focus:border-transparent focus:placeholder-zinc-700 flex-1 p-2" />
                    </div>
                    <div className='bg-zinc-950 border border-zinc-800 rounded-lg flex items-center'>
                        <textarea
                            type="text"
                            name='description'
                            placeholder="Descrição"
                            value={currentTask.description}
                            onChange={changeEditTask}
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none border-none focus:ring-0 focus:border-transparent focus:placeholder-zinc-700 w-full p-2" />
                    </div>
                    <button onClick={handleEditTask} className="bg-teal-500 text-teal-950 hover:bg-teal-600 rounded-lg px-4 py-2 flex items-center justify-center gap-2 transition-all w-full">
                        <CheckIcon className="w-5 h-5" /> Confirmar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditTaskModal
