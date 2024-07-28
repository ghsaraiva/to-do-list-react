
{
    editTaskModal && (
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
                            value={currentTask.task}
                            onChange={changeEditTask}
                            placeholder="Tarefa"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none border-none focus:ring-0 focus:border-transparent focus:placeholder-zinc-700 flex-1" />
                    </div>
                    <div className='h-22 px-0.5 py-2 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'>
                        <textarea
                            type="text"
                            name='description'
                            value={currentTask.description}
                            onChange={changeEditTask}
                            placeholder="Descrição"
                            className="bg-zinc-950 text-lg placeholder-zinc-400 outline-none border-none focus:ring-0 focus:border-transparent focus:placeholder-zinc-700 w-full" />
                    </div>
                    <button onClick={handleEditTask} className="bg-teal-500 text-teal-950 hover:bg-teal-600 rounded-lg px-5 py-2 flex items-center justify-center gap-2 transition-all w-full">
                        <CheckIcon className="size-5" /> Confirmar
                    </button>
                </div>
            </div>
        </div>
    )
}