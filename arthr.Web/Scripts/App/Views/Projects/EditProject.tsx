// 3rd Party
import * as React from 'react';

// Base
import { RoutedBaseComponent } from '../../BaseComponent';

// Module
import { ProjectUpsertForm } from './ProjectUpsertForm';

export class EditProject extends RoutedBaseComponent {

    componentDidMount() {

        const { appActions, appState, match } = this.props;
        const { params } = match;

        appActions.project.getProjectAsync(params.projectId);
    }

    render() {

        return (
            <div className="row">

                <div className="col-xs-12">

                    <h2>Edit</h2>

                    <ProjectUpsertForm {...this.props} />

                </div>

            </div>
        );
    }
}
