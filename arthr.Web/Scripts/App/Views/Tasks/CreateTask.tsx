﻿// 3rd Party
import * as React from 'react';

// Base
import { RoutedBaseComponent } from '../../BaseComponent';

// Module
import { TaskUpsertForm } from './TaskUpsertForm';

export class CreateTask extends RoutedBaseComponent {

    componentDidMount() {

        const { appActions, match } = this.props;
        const { params } = match;

        const projectId = params.projectId && params.projectId;

        appActions.task.getTaskTemplateAsync(projectId);
    }

    render() {

        return (
            <div className="row">

                <div className="col-xs-12">

                    <h2>Create</h2>

                    <TaskUpsertForm {...this.props} />

                </div>

            </div>
        );
    }
}
