// Utility
import { Api, IApi, IApiProgressFunctions } from '../../Utility';

export class Actions {

    public api: IApi;

    constructor(private apiProgressFunctions: IApiProgressFunctions) {
        this.api = Api(apiProgressFunctions);
    }
}
