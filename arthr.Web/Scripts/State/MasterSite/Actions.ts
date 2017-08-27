// 3rd Party
import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { createHashHistory } from 'history';

// https://github.com/diegoddox/react-redux-toastr
import { toastr } from 'react-redux-toastr'

// Utility
import { Api } from '../../Utility';

// Models
import { MasterSite, MasterSiteUpsertViewModel } from '../../Models'

// Services
import { MasterSiteService } from '../../Services'

// State
import { ActionTypes, IMasterSiteState } from './State';

export interface IMasterSiteActions {
    createMasterSiteAsync: (masterSite: MasterSite) => void;
    editMasterSiteAsync: (masterSite: MasterSite) => void;
    getMasterSiteAsync: (masterSiteId: number) => void;
    getMasterSitesAsync: () => void;
    receiveMasterSiteUpsert: (upsert: MasterSiteUpsertViewModel) => void;
}

class MasterSiteActions implements IMasterSiteActions {

    private onFailure = (error): void => {
        console.log(error);
    }

    public createMasterSiteAsync = (masterSite: MasterSite) => (dispatch: Dispatch<IMasterSiteState>): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('MasterSite Creation', 'MasterSite Created');
            createHashHistory().push('/masterSites');
        };
        Api(dispatch).call(MasterSiteService.post(), masterSite, onSuccess, this.onFailure);
    }

    public editMasterSiteAsync = (masterSite: MasterSite) => (dispatch: Dispatch<IMasterSiteState>): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('MasterSite Edit', 'MasterSite Updated');
            createHashHistory().push('/masterSites');
        };

        Api(dispatch).call(MasterSiteService.put(), masterSite, onSuccess, this.onFailure);
    }

    public getMasterSiteAsync = (masterSiteId: number) => (dispatch: Dispatch<IMasterSiteState>): void => {

        const onSuccess = (upsert: MasterSiteUpsertViewModel) => {
            dispatch(this.receiveMasterSiteUpsert(upsert));
        };

        Api(dispatch).call(MasterSiteService.getById(masterSiteId), null, onSuccess, this.onFailure);
    }

    public getMasterSitesAsync = () => (dispatch: Dispatch<IMasterSiteState>): void => {

        const onSuccess = (masterSites: MasterSite[]) => {
            dispatch(this.receiveMasterSites(masterSites));
        };

        Api(dispatch).call(MasterSiteService.get(), null, onSuccess, this.onFailure);
    }

    private receiveMasterSites = createAction(ActionTypes.receiveCollection, (masterSites: MasterSite[]) => masterSites);
    public receiveMasterSiteUpsert = createAction(ActionTypes.receiveUpsert, (upsert: MasterSiteUpsertViewModel) => upsert);
}

const dispatcherFactory = (dispatch: Dispatch<IMasterSiteState>): IMasterSiteActions => {

    const actions = new MasterSiteActions();

    return {
        createMasterSiteAsync: (masterSite: MasterSite) => {
            dispatch(actions.createMasterSiteAsync(masterSite));
        },
        editMasterSiteAsync: (masterSite: MasterSite) => {
            dispatch(actions.editMasterSiteAsync(masterSite));
        },
        getMasterSiteAsync: (masterSiteId: number) => {
            dispatch(actions.getMasterSiteAsync(masterSiteId));
        },
        getMasterSitesAsync: () => {
            dispatch(actions.getMasterSitesAsync());
        },
        receiveMasterSiteUpsert: (upsert: MasterSiteUpsertViewModel) => {
            dispatch(actions.receiveMasterSiteUpsert(upsert));
        }
    }
}

export { dispatcherFactory as MasterSiteDispatcherFactory }
