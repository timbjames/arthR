// 3rd Party
import * as React from 'react';

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
//import {  } from '../../../Models/Project';

// State
import { IAreaActions, IAreaState } from '../../../State';

export interface ICreateProjectProps {
    appActions: IAreaActions;
    appState: IAreaState;
}

export class CreateProject extends React.Component<ICreateProjectProps, {}> {

    componentDidMount() {

        const { appActions, appState } = this.props;

        appActions.getProjectTemplateAsync();
    }

    private handleDateChange = (appActions: IAreaActions, appState: IAreaState) => (e: any, date: Date) => {

        const updatedUpsert = appState.project.projectUpsert;
        updatedUpsert.model.plannedStart = date;
        appActions.receiveProjectUpsert(updatedUpsert);
    }

    private handleTextChange = (appActions: IAreaActions, appState: IAreaState) => (e: React.KeyboardEvent<HTMLInputElement>, value: string) => {

        const updatedUpsert = appState.project.projectUpsert;
        updatedUpsert.model.name = value;
        appActions.receiveProjectUpsert(updatedUpsert);
    }

    private handleNumberChange = (appActions: IAreaActions, appState: IAreaState) => (e: React.KeyboardEvent<HTMLInputElement>, value: string) => {

        const updatedUpsert = appState.project.projectUpsert;
        updatedUpsert.model.quoted = +value;
        appActions.receiveProjectUpsert(updatedUpsert);
    }

    private handleSelectChange = (appActions: IAreaActions, appState: IAreaState) => (e: any, index: number, value: number) => {

        const updatedUpsert = appState.project.projectUpsert;
        updatedUpsert.model.masterSiteId = value;
        appActions.receiveProjectUpsert(updatedUpsert);
    }

    private handleToggle = (appActions: IAreaActions, appState: IAreaState) => (e: React.MouseEvent<HTMLInputElement>, checked: boolean) => {

        const updatedUpsert = appState.project.projectUpsert;
        updatedUpsert.model.onGoing = checked;
        appActions.receiveProjectUpsert(updatedUpsert);
    }

    private handleSave = (appActions: IAreaActions, appState: IAreaState) => (e: React.MouseEvent<HTMLButtonElement>) => {

        appActions.createProjectAsync(appState.project.projectUpsert.model);
    }

    render() {

        const { appActions, appState } = this.props;
        const clonedState = ObjectHelper.deepClone(appState);

        const model = appState.project.projectUpsert && appState.project.projectUpsert.model;
        const tools = appState.project.projectUpsert && appState.project.projectUpsert.tools;

        const plannedStart: Date = null;

        return (
            <div className="row">

                <div className="col-xs-12">

                    <div className="form-group">
                        <TextField
                            floatingLabelText="Project Name"
                            onChange={this.handleTextChange(appActions, clonedState)}
                            value={(model && model.name) ? model.name : ''} />
                    </div>

                    <div className="form-group">
                        <NumberInput
                            floatingLabelText="Quoted"
                            min={0}
                            onChange={this.handleNumberChange(appActions, clonedState)}
                            value={(model && model.quoted) ? model.quoted.toString() : ''} />
                    </div>

                    <div className="form-group">
                        <SelectField
                            floatingLabelText="Master Site"
                            onChange={this.handleSelectChange(appActions, clonedState)}
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
                            onChange={this.handleDateChange(appActions, clonedState)}
                            value={appState.project.projectUpsert ? DateHelper.stringToDate(model && model.plannedStart) : null} />
                    </div>
                    <div className="row">
                    <div className="col-xs-12 col-md-2">
                    <div className="form-group">
                        <Toggle label="Ongoing Project?" onToggle={this.handleToggle(appActions, clonedState)} toggled={(model && model.onGoing !== null) ? model.onGoing : false} />
                    </div>
                    </div>
                    </div>

                    <div className="form-group">
                        <RaisedButton label="Save" onClick={this.handleSave(appActions,appState)} />
                    </div>

                </div>

            </div>
        );
    }
}
