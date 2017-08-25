// 3rd Party
import * as React from 'react';

// Base
import { BaseComponent } from '../../BaseComponent';

// Material Ui
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem';
import NumberInput from 'material-ui-number-input';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

// Utility
//import { } from '../../../Utility';
import { DateHelper, ObjectHelper } from '../../../Utility/Helpers';

// Models
import { ProjectUpsertViewModel } from '../../../Models/ProjectUpsertViewModel';

// State
import { IAppActions } from '../../../State';

type updateFunc = (upsert: ProjectUpsertViewModel) => void;

export class ProjectUpsertForm extends BaseComponent {

    private modelBinder: updateFunc;
    private upsert: ProjectUpsertViewModel;

    componentDidMount() {

        const { appActions } = this.props;

        this.modelBinder = appActions.project.receiveProjectUpsert;
    }

    //#region handlers

    private plannedStartChange = (e: any, date: Date) => {

        this.upsert.model.plannedStart = date;
        this.modelBinder(this.upsert);
    }

    private nameChange = (e: React.KeyboardEvent<HTMLInputElement>, value: string) => {

        this.upsert.model.name = value;
        this.modelBinder(this.upsert);
    }

    private quotedChange = (e: React.KeyboardEvent<HTMLInputElement>, value: string) => {

        this.upsert.model.quoted = +value;
        this.modelBinder(this.upsert);
    }

    private masterSiteChange = (e: any, index: number, value: number) => {

        this.upsert.model.masterSiteId = value;
        this.modelBinder(this.upsert);
    }

    private onGoingChange = (e: React.MouseEvent<HTMLInputElement>, checked: boolean) => {

        this.upsert.model.onGoing = checked;
        this.modelBinder(this.upsert);
    }

    private deadlineChange = (e: any, date: Date) => {

        this.upsert.model.deadline = date;
        this.modelBinder(this.upsert);
    }

    //#endregion

    private handleSave = (appActions: IAppActions, upsert: ProjectUpsertViewModel) => (e: React.MouseEvent<HTMLButtonElement>) => {

        if (upsert.model.projectId) {
            appActions.project.editProjectAsync(upsert.model);
        } else {
            appActions.project.createProjectAsync(upsert.model);
        }
    }

    render() {

        const { appActions, appState } = this.props;

        this.upsert = ObjectHelper.deepClone(appState.project.projectUpsert);
        const model = this.upsert && this.upsert.model;
        const tools = this.upsert && this.upsert.tools;

        return (
            <div className="form-horizontal">

                <h4>Project</h4>

                <div className="col-xs-12 col-md-4">

                    <div className="form-group">
                        <TextField
                            floatingLabelText="Project Name"
                            onChange={this.nameChange}
                            value={(model && model.name) ? model.name : ''} />
                    </div>

                    <div className="form-group">
                        <NumberInput
                            floatingLabelText="Quoted"
                            min={0}
                            onChange={this.quotedChange}
                            value={(model && model.quoted) ? model.quoted.toString() : ''} />
                    </div>

                    <div className="form-group">
                        <SelectField
                            floatingLabelText="Master Site"
                            onChange={this.masterSiteChange}
                            value={(model && model.masterSiteId) ? model.masterSiteId : null}>
                            {
                                (tools && tools.masterSites) && tools.masterSites.map((site, i) => {
                                    return (
                                        <MenuItem key={i} primaryText={site.name} value={site.masterSiteId} />
                                    );
                                })
                            }
                        </SelectField>
                    </div>

                    <div className="form-group">
                        <DatePicker
                            floatingLabelText="Planned Start"
                            onChange={this.plannedStartChange}
                            value={appState.project.projectUpsert ? DateHelper.stringToDate(model && model.plannedStart) : null} />
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-2">
                            <div className="form-group">
                                <Toggle label="Ongoing Project?" onToggle={this.onGoingChange} toggled={(model && model.onGoing !== null) ? model.onGoing : false} />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <DatePicker
                            floatingLabelText="Deadline"
                            onChange={this.deadlineChange}
                            value={appState.project.projectUpsert ? DateHelper.stringToDate(model && model.deadline) : null} />
                    </div>

                    <div className="form-group">
                        <RaisedButton label="Save" onClick={this.handleSave(appActions, this.upsert)} />
                    </div>

                </div>

            </div>
        );
    }
}
