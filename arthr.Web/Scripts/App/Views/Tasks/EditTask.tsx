// 3rd Party
import * as React from 'react';

// Base
import { RoutedBaseComponent } from '../../BaseComponent';

// Module
import { TaskUpsertForm } from './TaskUpsertForm';

export class EditTask extends RoutedBaseComponent {

    componentDidMount() {

        const { appActions, appState, match } = this.props;
        const { params } = match;

        appActions.task.getTaskAsync(params.taskId);
    }

    render() {

        return (
            <div className="row">

                <div className="col-xs-12">

                    <h2>Edit</h2>

                    <TaskUpsertForm {...this.props} />

                </div>

            </div>
        );
    }
}
