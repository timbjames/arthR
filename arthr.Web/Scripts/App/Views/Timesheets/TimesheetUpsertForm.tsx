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
import { Timesheet, TimesheetToolsViewModel, TimesheetUpsertViewModel } from '../../../Models';

// State
import { IAppActions } from '../../../State';

type updateFunc = (upsert: TimesheetUpsertViewModel) => void;

export class TimesheetUpsertForm extends BaseComponent<{  }> {

    private modelBinder: updateFunc;
    private upsert: TimesheetUpsertViewModel;

    componentDidMount() {

        const { appActions } = this.props;

        this.modelBinder = appActions.timesheet.receiveTimesheetUpsert;
    }

    //#region handlers

    private dateRecordedChange = (e: any, date: Date) => {

        this.upsert.model.dateRecorded = date;
        this.modelBinder(this.upsert);
    }

    private hoursChange = (e: any, index: number, value: number) => {

        this.upsert.model.hours = value;
        this.modelBinder(this.upsert);
    }

    private minutesChange = (e: any, index: number, value: number) => {

        this.upsert.model.mins = value;
        this.modelBinder(this.upsert);
    }

    private quotedChange = (e: any, index: number, value: number) => {

        this.upsert.model.quoted = value;
        this.modelBinder(this.upsert);
    }

    private taskChange = (e: any, index: number, value: number) => {

        this.upsert.model.anthRTaskId = value;
        this.modelBinder(this.upsert);
    }

    //#endregion

    private handlePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({ stepIndex: 0 });
    }

    private handleSave = (appActions: IAppActions, upsert: TimesheetUpsertViewModel) => (e: React.MouseEvent<HTMLButtonElement>) => {

        if (upsert.model.timesheetId) {
            appActions.timesheet.editTimesheetAsync(upsert.model);
        } else {
            appActions.timesheet.createTimesheetAsync(upsert.model);
        }
    }

    render() {

        const { appActions, appState } = this.props;

        this.upsert = ObjectHelper.deepClone(appState.timesheet.timesheetUpsert);
        const model = this.upsert && this.upsert.model;
        const tools = this.upsert && this.upsert.tools;

        return (
            <div className="form-horizontal">

                <h4>Timesheet</h4>

                <div className="col-xs-12 col-md-4">

                    <div>

                        <div className="form-group">
                            <DatePicker
                                floatingLabelText="Date Recorded"
                                onChange={this.dateRecordedChange}
                                value={model ? DateHelper.stringToDate(model && model.dateRecorded) : null} />
                        </div>

                        <div className="form-group">
                            <NumberInput
                                floatingLabelText="Hours"
                                onChange={this.hoursChange}
                                value={model && model.hours} />
                        </div>

                        <div className="form-group">
                            <NumberInput
                                floatingLabelText="Minutes"
                                onChange={this.minutesChange}
                                value={model && model.mins} />
                        </div>

                        <div className="form-group">
                            <SelectField
                                floatingLabelText="Project"
                                onChange={this.taskChange}
                                value={(model && model.anthRTaskId) ? model.anthRTaskId : null}>
                                {
                                    (tools && tools.tasks) && tools.tasks.map((project, i) => {
                                        return (
                                            <MenuItem key={i} primaryText={project.name} value={project.anthRTaskId} />
                                        );
                                    })
                                }
                            </SelectField>
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
