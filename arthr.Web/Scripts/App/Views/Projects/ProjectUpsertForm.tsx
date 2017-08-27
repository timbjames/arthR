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
import { Project, ProjectToolsViewModel, ProjectUpsertViewModel, StaffOnProjects } from '../../../Models';

// State
import { IAppActions } from '../../../State';

type updateFunc = (upsert: ProjectUpsertViewModel) => void;

export class ProjectUpsertForm extends BaseComponent<{stepIndex: number}> {

    private modelBinder: updateFunc;
    private upsert: ProjectUpsertViewModel;

    constructor(props) {
        super(props);

        this.state = {
            stepIndex: 0
        };
    }

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

    private staffOnProjectChange = (tools: ProjectToolsViewModel) => (e: any, index: number, values: number[]) => {

        const staff = tools.staff;
        this.upsert.model.staffOnProjects = [];

        for (var i = 0; i <= values.length - 1; i++) {
            const selectedStaffMember = staff.filter(f => f.staffId === values[i])[0];
            this.upsert.model.staffOnProjects.push({ projectId: this.upsert.model.projectId, staffId: selectedStaffMember.staffId } as StaffOnProjects);
        }

        this.modelBinder(this.upsert);
    }

    //#endregion

    private handlePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({ stepIndex: 0 });
    }

    private handleSave = (appActions: IAppActions, upsert: ProjectUpsertViewModel, stepIndex: number) => (e: React.MouseEvent<HTMLButtonElement>) => {

        if (stepIndex === 0) {
            this.setState({ stepIndex: 1 });
            return;
        }

        if (upsert.model.projectId) {
            appActions.project.editProjectAsync(upsert.model);
        } else {
            appActions.project.createProjectAsync(upsert.model);
        }
    }

    private getStepContent = (model: Project, tools: ProjectToolsViewModel, stepIndex: number): JSX.Element => {

        switch (stepIndex) {
            case 0:
                return (
                    <div>
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
                                value={model ? DateHelper.stringToDate(model && model.plannedStart) : null} />
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-md-8">
                                <div className="form-group">
                                    <Toggle label="Ongoing Project?" onToggle={this.onGoingChange} toggled={(model && model.onGoing !== null) ? model.onGoing : false} />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <DatePicker
                                floatingLabelText="Deadline"
                                onChange={this.deadlineChange}
                                value={model ? DateHelper.stringToDate(model && model.deadline) : null} />
                        </div>
                    </div>
                );
            case 1:
            default:

                const selectedStaff = model.staffOnProjects ? model.staffOnProjects.map(p => p.staffId) : [];

                return (
                    <div className="form-group">
                        <SelectField
                            floatingLabelText="Staff On Project"
                            multiple
                            onChange={this.staffOnProjectChange(tools)}
                            value={selectedStaff}>
                            {
                                (tools && tools.staff) && tools.staff.map((staff, i) => {

                                    const isChecked = model.staffOnProjects ? model.staffOnProjects.some(s => s.staffId === staff.staffId) : false;

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

        this.upsert = ObjectHelper.deepClone(appState.project.projectUpsert);
        const model = this.upsert && this.upsert.model;
        const tools = this.upsert && this.upsert.tools;

        return (
            <div className="form-horizontal">

                <h4>Project</h4>

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
