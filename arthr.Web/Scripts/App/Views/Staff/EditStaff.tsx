// 3rd Party
import * as React from 'react';

// Base
import { RoutedBaseComponent } from '../../BaseComponent';

// Module
import { StaffUpsertForm } from './StaffUpsertForm';

export class EditStaff extends RoutedBaseComponent {

    componentDidMount() {

        const { appActions, appState, match } = this.props;
        const { params } = match;

        appActions.staff.getStaffAsync(params.staffId);
    }

    render() {

        return (
            <div className="row">

                <div className="col-xs-12">

                    <h2>Edit</h2>

                    <StaffUpsertForm {...this.props} />

                </div>

            </div>
        );
    }
}
