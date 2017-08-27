// 3rd Party
import * as React from 'react';

// Base
import { BaseComponent } from '../../BaseComponent';

// Material Ui
import NumberInput from 'material-ui-number-input';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

// Utility
//import { } from '../../../Utility';
import { DateHelper, ObjectHelper } from '../../../Utility/Helpers';

// Models
import { MasterSiteUpsertViewModel } from '../../../Models/MasterSiteUpsertViewModel';

// State
import { IAppActions } from '../../../State';

type updateFunc = (upsert: MasterSiteUpsertViewModel) => void;

export class MasterSiteUpsertForm extends BaseComponent<{}> {

    private modelBinder: updateFunc;
    private upsert: MasterSiteUpsertViewModel;

    componentDidMount() {

        const { appActions } = this.props;

        this.modelBinder = appActions.masterSite.receiveMasterSiteUpsert;
    }

    //#region handlers

    private titleChange = (e: React.KeyboardEvent<HTMLInputElement>, value: string) => {

        this.upsert.model.name = value;
        this.modelBinder(this.upsert);
    }

    private liveBidIdChange = (e: React.KeyboardEvent<HTMLInputElement>, value: string) => {

        this.upsert.model.liveBidMasterSiteId = +value;
        this.modelBinder(this.upsert);
    }

    private hasVatChange = (e: React.MouseEvent<HTMLInputElement>, checked: boolean) => {

        this.upsert.model.hasVAT = checked;
        this.modelBinder(this.upsert);
    }

    //#endregion

    private handleSave = (appActions: IAppActions, upsert: MasterSiteUpsertViewModel) => (e: React.MouseEvent<HTMLButtonElement>) => {

        if (upsert.model.masterSiteId) {
            appActions.masterSite.editMasterSiteAsync(upsert.model);
        } else {
            appActions.masterSite.createMasterSiteAsync(upsert.model);
        }
    }

    render() {

        const { appActions, appState } = this.props;

        this.upsert = ObjectHelper.deepClone(appState.masterSite.masterSiteUpsert);
        const model = this.upsert && this.upsert.model;

        return (
            <div className="form-horizontal">

                <h4>MasterSite</h4>

                <div className="col-xs-12 col-md-4">

                    <div className="form-group">
                        <TextField
                            floatingLabelText="Master Site Name"
                            onChange={this.titleChange}
                            value={(model && model.name) ? model.name : ''} />
                    </div>

                    <div className="form-group">
                        <NumberInput
                            floatingLabelText="LiveBid Master Site Id"
                            min={0}
                            onChange={this.liveBidIdChange}
                            value={(model && model.liveBidMasterSiteId) ? model.liveBidMasterSiteId.toString() : ''} />
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-8">
                            <div className="form-group">
                                <Toggle label="Has VAT?" onToggle={this.hasVatChange} toggled={(model && model.hasVAT !== null) ? model.hasVAT : false} />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <RaisedButton label="Save" onClick={this.handleSave(appActions, this.upsert)} />
                    </div>

                </div>

            </div>
        );
    }
}
