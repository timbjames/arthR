export interface IAjaxInfo {
    dataReturned?: any;
    exceptionReport?: any;
    statusCode: number;
}

export interface IRESTfulUrl {
    method: string;
    url: string;
}

export interface IApiCall<TResponse> extends IRESTfulUrl { }
export interface IApiCallWithPayload<TRequest, TResponse> extends IApiCall<TResponse> { }
