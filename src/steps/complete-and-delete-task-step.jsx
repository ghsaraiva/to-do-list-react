import { CheckBadgeIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"

function CompleteAndDeleteTaskStep({ deleteItem, itemsList, markAsComplete, openTaskModal, filter, search }) {
    return (
        <div className="w-full">
            <ul className="text-md space-y-2">
                {itemsList
                    .filter((item) => item.task.toLowerCase().includes(search.toLowerCase()))
                    .filter((item) => filter === "all" ? true : filter === "completed" ? item.isCompleted : !item.isCompleted)
                    .map((item) => (
                        <div key={item.id} className={`flex items-center gap-3 p-4 rounded-lg text-center ${item.isCompleted ? "bg-lime-950 text-lime-900" : "bg-zinc-900 text-zinc-400"} w-full`}>
                            <button title="Concluir tarefa" onClick={() => markAsComplete(item.id)}>
                                <CheckBadgeIcon className={`w-7 h-7 ${item.isCompleted ? "text-lime-400" : "text-zinc-400 hover:text-zinc-50"}`} />
                            </button>
                            <li className="flex-1">
                                <p>{item.task}</p>
                                <p className={`text-xs ${item.isCompleted ? "text-lime-900" : "text-zinc-400"} text-wrap max-w-full`}>{item.description}</p>
                            </li>
                            <button onClick={() => openTaskModal(item)}>
                                <PencilSquareIcon title="Editar tarefa" className={`w-7 h-7 ${item.isCompleted ? "hover:text-zinc-500" : "text-zinc-400 hover:text-zinc-50"}`} />
                            </button>
                            <button title="Excluir tarefa" onClick={() => deleteItem(item.id)}>
                                <TrashIcon className={`w-7 h-7 ${item.isCompleted ? "hover:text-zinc-500" : "text-zinc-400 hover:text-zinc-50"}`} />
                            </button>
                        </div>
                    ))}
            </ul>
        </div>
    )
}

export default CompleteAndDeleteTaskStep
