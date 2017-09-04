// 3rd Party
import * as React from 'react';

// Base
import { RoutedBaseComponent } from '../../BaseComponent';

// Module
import { TimesheetUpsertForm } from './TimesheetUpsertForm';

export class CreateTimesheet extends RoutedBaseComponent {

    componentDidMount() {

        const { appActions, match } = this.props;
        const { params } = match;

        const projectId = params.projectId && params.projectId;

        //appActions.timesheet.get
    }

    render() {

        return (
            <div className="row">

                <div className="col-xs-12">

                    <h2>Create</h2>

                    <TimesheetUpsertForm {...this.props} />

                </div>

            </div>
        );
    }
}
