// 3rd Party
import * as React from 'react';

// Base
import { BaseComponent } from '../../BaseComponent';

// Material Ui
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

// Utility
//import { } from '../../../Utility';
import { DateHelper, ObjectHelper } from '../../../Utility/Helpers';

// Models
import { StaffUpsertViewModel } from '../../../Models/StaffUpsertViewModel';

// State
import { IAppActions } from '../../../State';

type updateFunc = (upsert: StaffUpsertViewModel) => void;

export class StaffUpsertForm extends BaseComponent<{}> {

    private modelBinder: updateFunc;
    private upsert: StaffUpsertViewModel;

    componentDidMount() {

        const { appActions } = this.props;

        this.modelBinder = appActions.staff.receiveStaffUpsert;
    }

    //#region handlers

    private nameChange = (e: React.KeyboardEvent<HTMLInputElement>, value: string) => {

        this.upsert.model.name = value;
        this.modelBinder(this.upsert);
    }

    private emailChange = (e: React.KeyboardEvent<HTMLInputElement>, value: string) => {

        this.upsert.model.email = value;
        this.modelBinder(this.upsert);
    }

    private userChange = (e: any, index: number, value: number) => {

        this.upsert.model.userId = value;
        this.modelBinder(this.upsert);
    }

    //#endregion

    private handleSave = (appActions: IAppActions, upsert: StaffUpsertViewModel) => (e: React.MouseEvent<HTMLButtonElement>) => {

        if (upsert.model.staffId) {
            appActions.staff.editStaffAsync(upsert.model);
        } else {
            appActions.staff.createStaffAsync(upsert.model);
        }
    }

    render() {

        const { appActions, appState } = this.props;

        this.upsert = ObjectHelper.deepClone(appState.staff.staffUpsert);
        const model = this.upsert && this.upsert.model;
        const tools = this.upsert && this.upsert.tools;

        return (
            <div className="form-horizontal">

                <h4>Staff</h4>

                <div className="col-xs-12 col-md-4">

                    <div className="form-group">
                        <TextField
                            floatingLabelText="Name"
                            onChange={this.nameChange}
                            value={(model && model.name) ? model.name : ''} />
                    </div>

                    <div className="form-group">
                        <TextField
                            floatingLabelText="Email"
                            onChange={this.emailChange}
                            value={(model && model.email) ? model.email : ''} />
                    </div>

                    <div className="form-group">
                        <SelectField
                            floatingLabelText="User"
                            onChange={this.userChange}
                            value={(model && model.userId) ? model.userId : null}>
                            {
                                (tools && tools.users) && tools.users.map((user, i) => {
                                    return (
                                        <MenuItem key={i} primaryText={user.name} value={user.userId} />
                                    );
                                })
                            }
                        </SelectField>
                    </div>

                    <div className="form-group">
                        <RaisedButton label="Save" onClick={this.handleSave(appActions, this.upsert)} />
                    </div>

                </div>

            </div>
        );
    }
}
