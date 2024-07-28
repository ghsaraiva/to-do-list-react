import { CheckBadgeIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"

function CompleteAndDeleteTaskStep({ deleteItem, itemsList, markAsComplete, openTaskModal, filter, search }) {
    return (
        <div className="flex items-center text-center justify-between w-full">
            <ul className="text-md w-full space-y-2">
                {itemsList
                    .filter((item) => item.task.toLowerCase().includes(search.toLowerCase()))
                    .filter((item) => filter === "all" ? true : filter === "completed" ? item.isCompleted : !item.isCompleted)
                    .map((item) => (
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
    )
}

export default CompleteAndDeleteTaskStep