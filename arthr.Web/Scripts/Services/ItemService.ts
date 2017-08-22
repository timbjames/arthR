import { IApiCallWithPayload } from '../Utility';
import { Person } from '../Models/Person';

const itemService = {
    get: (): IApiCallWithPayload<void, string[]> => {

        return {
            method: 'get',
            url: `api/item/`
        };
    }, 
    doSomething: (): IApiCallWithPayload<Person, Person> => {

        return {
            method: 'post',
            url: `/api/item/dosomething`
        };
    }
}

export { itemService as ItemService }
/*
    Debug Info:
    , /api/item/dosomething, typeof(arthr.Models.Core.Person) Unknown Types: Person
*/
