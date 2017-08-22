const projectApi = {
    get: (completed: boolean, all: string) => {
        return `/api/project?completed=${completed}&all=${encodeURIComponent(all)}`
    }, 
    getById: (id: number) => {
        return `/api/project/getbyid/${id}`
    }, 
    post: () => {
        return `/api/project`
    }, 
    put: () => {
        return `/api/project`
    }, 
    delete: (id: number) => {
        return `/api/project/delele/${id}`
    }, 
    complete: () => {
        return `/api/project/complete`
    }
}

export { projectApi as ProjectApi }
