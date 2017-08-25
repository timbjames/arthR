interface IAppConfiguration {
    apiUrl: string;
}

const getConfig = (): IAppConfiguration => {
    return {
        apiUrl: (window as any).apiUrl
    };
};

const appService = () => {

    return {
        config: getConfig()
    };
};

export { appService as AppService }
