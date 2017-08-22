const timesheetApi = {
    delete: (id: number) => {
        return `/api/timesheet/${id}`
    }, 
    get: () => {
        return `/api/timesheet`
    }, 
    getById: (id: number) => {
        return `/api/timesheet/${id}`
    }, 
    post: () => {
        return `/api/timesheet`
    }, 
    put: () => {
        return `/api/timesheet`
    }
}

export { timesheetApi as TimesheetApi }
