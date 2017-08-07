import { createAction } from 'redux-actions';

export interface IAreaActions {
    doSomething: () => void;
    receive: (name: string) => void;
}

class AreaActions implements IAreaActions {

    public doSomething = () => (dispatch: any): void => {

        dispatch(this.receive('tim'));
    }

    public receive = createAction('TEST', (name: string) => name);
}

const actionsDispatcherFactory = (dispatch: any): IAreaActions => {

    const localActions = new AreaActions();

    return {
        doSomething: () => {
            dispatch(localActions.doSomething());
        },
        receive: (name: string) => {
            dispatch(localActions.receive(name));
        }
    }
}

export {
    actionsDispatcherFactory as ActionsDispatcherFactory
}
