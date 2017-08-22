const masterSiteApi = {
    delete: (id: number) => {
        return `/api/mastersite/${id}`
    }, 
    get: () => {
        return `/api/mastersite`
    }, 
    getById: (id: number) => {
        return `/api/mastersite/${id}`
    }, 
    post: () => {
        return `/api/mastersite`
    }, 
    put: () => {
        return `/api/mastersite`
    }
}

export { masterSiteApi as MasterSiteApi }
