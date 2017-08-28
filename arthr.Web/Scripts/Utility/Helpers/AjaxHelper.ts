// 3rd Party
import 'whatwg-fetch';

// Utility
import { IAjaxInfo, IApiCallWithPayload } from '../Interfaces/ApiInterfaces';

const checkStatus = (response: Response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(response.statusText);
        throw error;
    }
};

const parseResponse = (response: Response) => {
    return response.json();
}

export interface IApiProgressFunctions {
    incrementProgress: Function;
    decrementProgress: Function;
}

const api = (apiFunctions: IApiProgressFunctions) => {

    return {
        call: <TRequest, TResponse>(api: IApiCallWithPayload<TRequest, TResponse>, payload: TRequest, onSuccess: (model: TResponse) => void, onFailure: any): void => {

            const body = payload && JSON.stringify(payload);

            apiFunctions.incrementProgress();

            fetch(api.url,
                {
                    credentials: 'include',
                    method: api.method,
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Authorization': 'Bearer ' + (window as any).accessToken,
                        'Content-Type': 'application/json'
                    },
                    keepalive: false,
                    body
                }
            )
            .then(checkStatus)
            .then(parseResponse)
            .then((data) => {

                apiFunctions.decrementProgress();

                const returnedData: TResponse = (data as any) as TResponse;
                onSuccess(returnedData);

                return;
            })
            .catch((error) => {

                apiFunctions.decrementProgress();

                onFailure(error);

                console.log('error: ', error);
            });
        }
    }
};

export { api as Api }
