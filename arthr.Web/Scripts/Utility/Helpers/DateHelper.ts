const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

const stringToDate = (value: string | Date): Date => {

    if (typeof value === "string")
    {
        const newDate = new Date(value);

        if (newDate.getFullYear() === 1) {

            return null;
        }

        return new Date(value);
    }

    return value;
}

const dateHelper = {
    stringToDate
}

export {
    dateHelper as DateHelper
}
