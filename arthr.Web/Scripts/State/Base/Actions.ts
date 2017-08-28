// Utility
import { Api, IApiProgressFunctions } from '../../Utility';

export class Actions {

    public api: any;

    constructor(private apiProgressFunctions: IApiProgressFunctions) {
        this.api = Api(apiProgressFunctions);
    }
}
