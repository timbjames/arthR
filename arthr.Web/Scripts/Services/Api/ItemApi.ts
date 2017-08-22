const itemApi = {
    get: () => {
        return `api/item/`
    }, 
    doSomething: () => {
        return `/api/item/dosomething`
    }
}

export { itemApi as ItemApi }
