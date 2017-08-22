const projectApi = {
    complete: () => {
        return `/api/project/complete`
    }, 
    delete: (id: number) => {
        return `/api/project/delele/${id}`
    }, 
    get: (completed: boolean, all: string) => {
        return `/api/project?completed=${completed}&all=${encodeURIComponent(all)}`
    }, 
    getById: (id: number) => {
        return `/api/project/getbyid/${id}`
    }, 
    getTemplate: () => {
        return `/api/project/template`
    }, 
    post: () => {
        return `/api/project`
    }, 
    put: () => {
        return `/api/project`
    }
}

export { projectApi as ProjectApi }
