const staffApi = {
    delete: (id: number) => {
        return `/api/staff/${id}`
    }, 
    get: () => {
        return `/api/staff`
    }, 
    getById: (id: number) => {
        return `/api/staff/${id}`
    }, 
    post: () => {
        return `/api/staff`
    }, 
    put: () => {
        return `/api/staff`
    }
}

export { staffApi as StaffApi }
