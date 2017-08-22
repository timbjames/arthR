import { IApiCallWithPayload } from '../Utility';

const identityService = {
    get: (): IApiCallWithPayload<void, void> => {

        return {
            method: 'get',
            url: `api/identity/`
        };
    }
}

export { identityService as IdentityService }
/*
    Debug Info:
     Unknown Types: 
*/
