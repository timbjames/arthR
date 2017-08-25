// 3rd Party
import * as React from 'react';

// Base
import { BaseComponent } from '../../BaseComponent';

// Module
import { StaffUpsertForm } from './StaffUpsertForm';

export class CreateStaff extends BaseComponent {

    componentDidMount() {

        const { appActions } = this.props;

        appActions.staff.getStaffAsync(0);
    }

    render() {

        return (
            <div className="row">

                <div className="col-xs-12">

                    <h2>Create</h2>

                    <StaffUpsertForm {...this.props} />

                </div>

            </div>
        );
    }
}
