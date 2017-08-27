const notesApi = {
    delete: (id: number) => {
        return `/api/note/${id}`
    }, 
    get: () => {
        return `/api/note`
    }, 
    getById: (id: number) => {
        return `/api/note/${id}`
    }, 
    post: () => {
        return `/api/note`
    }, 
    put: () => {
        return `/api/note`
    }
}

export { notesApi as NotesApi }
