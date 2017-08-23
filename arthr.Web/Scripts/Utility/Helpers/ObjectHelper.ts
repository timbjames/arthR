function deepClone<TModel>(obj: TModel): TModel {

    if (obj === undefined || obj === null) {
        return null;
    }

    return JSON.parse(JSON.stringify(obj));
}

const objectHelper = {
    deepClone
};

export { objectHelper as ObjectHelper }
