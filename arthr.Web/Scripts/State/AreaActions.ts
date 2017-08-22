// 3rd Party
import { createAction } from 'redux-actions';

// Utility
import { Api, IApiCallWithPayload } from '../Utility';

// Models
import { ProjectUpsertViewModel } from '../Models'

// Services
import { ProjectService } from '../Services'

export interface IAreaActions {
    getProjectTemplateAsync: () => void;
}

class AreaActions implements IAreaActions {

    private onFailure = (): void => {
        
    }

    public getProjectTemplateAsync = () => (dispatch: any): void => {

        const onSuccess = (upsert: ProjectUpsertViewModel) => {
            dispatch(this.receiveProjectUpsert(upsert));
        };

        Api(dispatch).call(ProjectService.getTemplate(), null, onSuccess, this.onFailure);
    }

    private receiveProjectUpsert = createAction('TEST', (upsert: ProjectUpsertViewModel) => upsert);
}

const actionsDispatcherFactory = (dispatch: any): IAreaActions => {

    const localActions = new AreaActions();

    return {
        getProjectTemplateAsync: () => {
            dispatch(localActions.getProjectTemplateAsync());
        }
    }
}

export {
    actionsDispatcherFactory as ActionsDispatcherFactory
}
