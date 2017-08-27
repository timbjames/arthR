// 3rd Party
import { handleActions, Action } from 'redux-actions';

// Utility
import { ReduxHelper } from '../../Utility';

// Models
import { MasterSite, MasterSiteUpsertViewModel } from '../../Models';

const actionTypes = {
    receiveCollection: 'masterSite.receive.collection',
    receiveUpsert: 'masterSite.receive.upsert'
};

export interface IMasterSiteState {
    masterSites: MasterSite[],
    masterSiteUpsert: MasterSiteUpsertViewModel;
}

const initialState = (): IMasterSiteState => {

    return {
        masterSites: null,
        masterSiteUpsert: null
    };
}

const actionWrapper = ReduxHelper.actionWrapper;

const masterSiteReducer = handleActions<IMasterSiteState>({

    [actionTypes.receiveCollection]: (state: IMasterSiteState, action: Action<MasterSite[]>): IMasterSiteState => {

        return actionWrapper(state, action, (newState: IMasterSiteState) => {
            newState.masterSites = action.payload;
        });
    },

    [actionTypes.receiveUpsert]: (state: IMasterSiteState, action: Action<MasterSiteUpsertViewModel>): IMasterSiteState => {

        return actionWrapper(state, action, (newState: IMasterSiteState) => {
            newState.masterSiteUpsert = action.payload;
        });
    }

}, initialState());

export {
    actionTypes as ActionTypes,
    masterSiteReducer as MasterSiteReducer
}
