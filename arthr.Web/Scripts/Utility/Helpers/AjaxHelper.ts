import 'whatwg-fetch';

import { IAjaxInfo, IApiCallWithPayload } from '../Interfaces/ApiInterfaces';

const api = (dispatch: any) => {

    const checkStatus = (response: Response) => {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            const error = new Error(response.statusText);
            //error.response = response;
            throw error;
        }
    }

    const parseJSON = (response: Response) => {
        return response.json();
    }

    return {
        call: <TRequest, TResponse>(api: IApiCallWithPayload<TRequest, TResponse>, payload: TRequest, onSuccess: (model: TResponse) => void, onFailure: any): void => {

            const body = payload && JSON.stringify(payload);

            fetch('http://localhost:5001/api/project',
                {
                    credentials: 'include',
                    method: 'post',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Authorization': 'Bearer ' + (window as any).accessToken,
                        'Content-Type': 'application/json'
                    },
                    body
                }
            )
                .then(this.checkStatus)
                .then(this.parseJSON)
                .then((data) => {

                    const returnedData: TResponse = (data as any) as TResponse;
                    onSuccess(returnedData);
                    console.log('data: ', data);
                })
                .catch((error) => {
                    onFailure(error);
                    console.log('error: ', error);
                });
        }
    }
};

export { api as Api }
