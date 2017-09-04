// 3rd Party
import * as React from 'react';

// Base
import { RoutedBaseComponent } from '../../BaseComponent';

// Module
import { TimesheetUpsertForm } from './TimesheetUpsertForm';

export class EditTimesheet extends RoutedBaseComponent {

    componentDidMount() {

        const { appActions, appState, match } = this.props;
        const { params } = match;

        appActions.timesheet.getTimesheetAsync(params.timesheetId);
    }

    render() {

        return (
            <div className="row">

                <div className="col-xs-12">

                    <h2>Edit</h2>

                    <TimesheetUpsertForm {...this.props} />

                </div>

            </div>
        );
    }
}
