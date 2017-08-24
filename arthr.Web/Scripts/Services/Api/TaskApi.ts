const taskApi = {
    delete: (id: number) => {
        return `/api/task/${id}`
    }, 
    get: () => {
        return `/api/task`
    }, 
    getById: (id: number) => {
        return `/api/task/${id}`
    }, 
    getTemplate: (projectId: number) => {
        return `/api/task/template/${projectId}`
    }, 
    post: () => {
        return `/api/task`
    }, 
    put: () => {
        return `/api/task`
    }
}

export { taskApi as TaskApi }
