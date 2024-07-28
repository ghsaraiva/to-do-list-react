function FiltersStep({ filter, setFilter }) {
    return (
        <div>
            <select className="bg-zinc-950 text-lg text-zinc-400 outline-none border-0 border-b-2 border-zinc-600 focus:ring-0 focus:outline-none focus:border-zinc-600"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}>
                <option value="all">Todas</option>
                <option value="completed">Completas</option>
                <option value="incompleted">Incompletas</option>
            </select>
        </div>
    )
}
export default FiltersStep