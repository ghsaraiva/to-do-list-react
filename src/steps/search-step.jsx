function SearchStep({ search, setSearch }) {
    return (
        <div className="items-center justify-center">
            <input type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Pesquisar..."
                className="flex-1 bg-transparent text-lg placeholder-zinc-600 outline-none border-0 border-b-2 border-zinc-600 focus:ring-0 focus:border-transparent focus:placeholder-zinc-800 focus:border-zinc-600 w-full" />
        </div>
    )
}

export default SearchStep