// 3rd Party
import * as React from 'react';

// Material Ui
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

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

    render() {

        const { appActions, appState } = this.props;
        const clonedState = ObjectHelper.deepClone(appState);

        const tools = appState.project.projectTools;

        const plannedStart: Date = null;

        return (
            <div className="row">

                <div className="col-xs-12">

                    <TextField
                        floatingLabelText="Project Name"
                        onChange={this.handleTextChange(appActions, clonedState)} />

                    <DatePicker
                        floatingLabelText="Planned Start"
                        onChange={this.handleDateChange(appActions, clonedState)}
                        value={appState.project.projectUpsert ? DateHelper.stringToDate(appState.project.projectUpsert.model.plannedStart) : null} />

                </div>

            </div>
        );
    }
}
