// 3rd Party
import * as React from 'react';

// Base
import { BaseComponent } from '../../BaseComponent';

// Material Ui
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

// Utility
//import { } from '../../../Utility';
import { DateHelper, ObjectHelper } from '../../../Utility/Helpers';

// Models
import { AnthRTask, StaffOnTask, TaskToolsViewModel, TaskUpsertViewModel } from '../../../Models';

// State
import { IAppActions } from '../../../State';

type updateFunc = (upsert: TaskUpsertViewModel) => void;

export class TaskUpsertForm extends BaseComponent<{ stepIndex: number }> {

    private modelBinder: updateFunc;
    private upsert: TaskUpsertViewModel;

    constructor(props) {
        super(props);

        this.state = {
            stepIndex: 0
        };
    }

    componentDidMount() {

        const { appActions } = this.props;

        this.modelBinder = appActions.task.receiveTaskUpsert;
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

    private staffOnTaskChange = (tools: TaskToolsViewModel) => (e: any, index: number, values: number[]) => {

        const staff = tools.staff;
        this.upsert.model.staffOnTasks = [];

        for (var i = 0; i <= values.length - 1; i++) {
            const selectedStaffMember = staff.filter(f => f.staffId === values[i])[0];
            this.upsert.model.staffOnTasks.push({ anthRTaskId: this.upsert.model.anthRTaskId, staffId: selectedStaffMember.staffId } as StaffOnTask);
        }

        this.modelBinder(this.upsert);
    }

    //#endregion

    private handlePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({ stepIndex: 0 });
    }

    private handleSave = (appActions: IAppActions, upsert: TaskUpsertViewModel, stepIndex: number) => (e: React.MouseEvent<HTMLButtonElement>) => {

        if (stepIndex === 0) {
            this.setState({ stepIndex: 1 });
            return;
        }

        if (upsert.model.anthRTaskId) {
            appActions.task.editTaskAsync(upsert.model);
        } else {
            appActions.task.createTaskAsync(upsert.model);
        }
    }

    private getStepContent = (model: AnthRTask, tools: TaskToolsViewModel, index: number): JSX.Element => {

        switch (index) {
            case 0:
                return (
                    <div>
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
                                value={model ? DateHelper.stringToDate(model && model.plannedStart) : null} />
                        </div>

                        <div className="form-group">
                            <DatePicker
                                floatingLabelText="Deadline"
                                onChange={this.deadlineChange}
                                value={model ? DateHelper.stringToDate(model && model.deadline) : null} />
                        </div>

                        <div className="form-group">
                            <TextField
                                floatingLabelText="Requested By"
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
                    </div>
                );

            case 1:
            default:
                const selectedStaff = model.staffOnTasks ? model.staffOnTasks.map(p => p.staffId) : [];

                return (
                    <div className="form-group">
                        <SelectField
                            floatingLabelText="Staff On Project"
                            multiple
                            onChange={this.staffOnTaskChange(tools)}
                            value={selectedStaff}>
                            {
                                (tools && tools.staff) && tools.staff.map((staff, i) => {

                                    const isChecked = model.staffOnTasks ? model.staffOnTasks.some(s => s.staffId === staff.staffId) : false;

                                    return (
                                        <MenuItem
                                            checked={isChecked}
                                            insetChildren
                                            key={i}
                                            primaryText={staff.name}
                                            value={staff.staffId} />
                                    );
                                })
                            }
                        </SelectField>
                    </div>
                );
        }
    }

    render() {

        const { appActions, appState } = this.props;
        const { stepIndex } = this.state;

        this.upsert = ObjectHelper.deepClone(appState.task.taskUpsert);
        const model = this.upsert && this.upsert.model;
        const tools = this.upsert && this.upsert.tools;

        return (
            <div className="form-horizontal">

                <h4>Task</h4>

                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>Task Details</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Staff On Task</StepLabel>
                    </Step>
                </Stepper>

                <div className="col-xs-12 col-md-4">

                    {this.getStepContent(model, tools, stepIndex)}

                    <div className="form-group">
                        <RaisedButton label="Previous" onClick={this.handlePrevious} />
                        <RaisedButton label={stepIndex === 0 ? 'Next' : 'Save'} onClick={this.handleSave(appActions, this.upsert, stepIndex)} />
                    </div>

                </div>

            </div>
        );
    }
}
