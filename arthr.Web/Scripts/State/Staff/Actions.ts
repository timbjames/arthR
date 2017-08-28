// 3rd Party
import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { createHashHistory } from 'history';

// https://github.com/diegoddox/react-redux-toastr
import { toastr } from 'react-redux-toastr'

// Utility
import { IApiProgressFunctions } from '../../Utility';

// Models
import { Staff, StaffUpsertViewModel } from '../../Models'

// Services
import { StaffService } from '../../Services'

// Page Actions
import { PageDispatcherFactory } from '../Page/Actions';

// Base
import { Actions } from '../Base/Actions';

// State
import { ActionTypes, IStaffState } from './State';

export interface IStaffActions {
    createStaffAsync: (staff: Staff) => void;
    editStaffAsync: (staff: Staff) => void;
    getStaffAsync: (staffId: number) => void;
    getStaffsAsync: () => void;
    receiveStaffUpsert: (upsert: StaffUpsertViewModel) => void;
}

class StaffActions extends Actions implements IStaffActions {

    private onFailure = (error): void => {
        console.log(error);
    }

    public createStaffAsync = (staff: Staff) => (dispatch: Dispatch<IStaffState>): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('Staff Creation', 'Staff Created');
            createHashHistory().push('/staff');
        };

        this.api.call(StaffService.post(), staff, onSuccess, this.onFailure);
    }

    public editStaffAsync = (staff: Staff) => (dispatch: Dispatch<IStaffState>): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('Staff Edit', 'Staff Updated');
            createHashHistory().push('/staff');
        };

        this.api.call(StaffService.put(), staff, onSuccess, this.onFailure);
    }

    public getStaffAsync = (staffId: number) => (dispatch: Dispatch<IStaffState>): void => {

        const onSuccess = (upsert: StaffUpsertViewModel) => {
            dispatch(this.receiveStaffUpsert(upsert));
        };

        this.api.call(StaffService.getById(staffId), null, onSuccess, this.onFailure);
    }

    public getStaffsAsync = () => (dispatch: Dispatch<IStaffState>): void => {

        const onSuccess = (staffs: Staff[]) => {
            dispatch(this.receiveStaffs(staffs));
        };

        this.api.call(StaffService.get(), null, onSuccess, this.onFailure);
    }

    private receiveStaffs = createAction(ActionTypes.receiveCollection, (staffs: Staff[]) => staffs);
    public receiveStaffUpsert = createAction(ActionTypes.receiveUpsert, (upsert: StaffUpsertViewModel) => upsert);
}

const dispatcherFactory = (dispatch: Dispatch<IStaffState>, progressFunctions: IApiProgressFunctions): IStaffActions => {

    const actions = new StaffActions(progressFunctions);

    return {
        createStaffAsync: (staff: Staff) => {
            dispatch(actions.createStaffAsync(staff));
        },
        editStaffAsync: (staff: Staff) => {
            dispatch(actions.editStaffAsync(staff));
        },
        getStaffAsync: (staffId: number) => {
            dispatch(actions.getStaffAsync(staffId));
        },
        getStaffsAsync: () => {
            dispatch(actions.getStaffsAsync());
        },
        receiveStaffUpsert: (upsert: StaffUpsertViewModel) => {
            dispatch(actions.receiveStaffUpsert(upsert));
        }
    }
}

export { dispatcherFactory as StaffDispatcherFactory }
