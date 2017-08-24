// 3rd Party
import * as React from 'react';

// Material Ui
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

// Utility
//import { } from '../../../Utility';
import { DateHelper, ObjectHelper } from '../../../Utility/Helpers';

// Models
import { TaskUpsertViewModel } from '../../../Models/TaskUpsertViewModel';

// State
import { IAppActions, IAppState } from '../../../State';

export interface ITaskUpsertFormProps {
    appActions: IAppActions;
    appState: IAppState;
}

type updateFunc = (upsert: TaskUpsertViewModel) => void;

export class TaskUpsertForm extends React.Component<ITaskUpsertFormProps, {}> {

    private modelBinder: updateFunc;
    private upsert: TaskUpsertViewModel;

    componentDidMount() {

        const { appActions } = this.props;

        this.modelBinder = appActions.receiveTaskUpsert;
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

    private requestedByChange = (e: React.KeyboardEvent<HTMLInputElement>, value: string) => {

        this.upsert.model.requestedBy = value;
        this.modelBinder(this.upsert);
    }

    private deadlineChange = (e: any, date: Date) => {

        this.upsert.model.deadline = date;
        this.modelBinder(this.upsert);
    }

    private projectChange = (e: any, index: number, value: number) => {

        this.upsert.model.projectId = value;
        this.modelBinder(this.upsert);
    }

    private statusChange = (e: any, index: number, value: number) => {

        this.upsert.model.statusId = value;
        this.modelBinder(this.upsert);
    }

    private priorityChange = (e: any, index: number, value: number) => {

        this.upsert.model.priority = value;
        this.modelBinder(this.upsert);
    }

    //#endregion

    private handleSave = (appActions: IAppActions, upsert: TaskUpsertViewModel) => (e: React.MouseEvent<HTMLButtonElement>) => {

        if (upsert.model.anthRTaskId) {
            appActions.editTaskAsync(upsert.model);
        } else {
            appActions.createTaskAsync(upsert.model);
        }
    }

    render() {

        const { appActions, appState } = this.props;

        this.upsert = ObjectHelper.deepClone(appState.task.taskUpsert);
        const model = this.upsert && this.upsert.model;
        const tools = this.upsert && this.upsert.tools;

        return (
            <div className="form-horizontal">

                <h4>Task</h4>

                <div className="col-xs-12 col-md-4">

                    <div className="form-group">
                        <TextField
                            floatingLabelText="Task Name"
                            onChange={this.nameChange}
                            value={(model && model.name) ? model.name : ''} />
                    </div>

                    <div className="form-group">
                        <DatePicker
                            floatingLabelText="Planned Start"
                            onChange={this.plannedStartChange}
                            value={appState.task.taskUpsert ? DateHelper.stringToDate(model && model.plannedStart) : null} />
                    </div>

                    <div className="form-group">
                        <DatePicker
                            floatingLabelText="Deadline"
                            onChange={this.deadlineChange}
                            value={appState.task.taskUpsert ? DateHelper.stringToDate(model && model.deadline) : null} />
                    </div>

                    <div className="form-group">
                        <TextField
                            floatingLabelText="Task Name"
                            onChange={this.requestedByChange}
                            value={(model && model.requestedBy) ? model.requestedBy : ''} />
                    </div>

                    <div className="form-group">
                        <SelectField
                            floatingLabelText="Project"
                            onChange={this.projectChange}
                            value={(model && model.projectId) ? model.projectId : null}>
                            {
                                (tools && tools.projects) && tools.projects.map((project, i) => {
                                    return (
                                        <MenuItem key={i} primaryText={project.name} value={project.projectId} />
                                    );
                                })
                            }
                        </SelectField>
                    </div>

                    <div className="form-group">
                        <SelectField
                            floatingLabelText="Status"
                            onChange={this.statusChange}
                            value={(model && model.statusId) ? model.statusId : null}>
                            {
                                (tools && tools.states) && tools.states.map((state, i) => {
                                    return (
                                        <MenuItem key={i} primaryText={state.name} value={state.statusId} />
                                    );
                                })
                            }
                        </SelectField>
                    </div>

                    <div className="form-group">
                        <SelectField
                            floatingLabelText="Priority"
                            onChange={this.priorityChange}
                            value={(model && model.priority) ? model.priority : null}>
                            {
                                (tools && tools.priorities) && tools.priorities.map((priority, i) => {
                                    return (
                                        <MenuItem key={i} primaryText={priority} value={priority} />
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
