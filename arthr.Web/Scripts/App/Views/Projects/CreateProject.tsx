﻿// 3rd Party
import * as React from 'react';

// Base
import { BaseComponent } from '../../BaseComponent';

// Module
import { ProjectUpsertForm } from './ProjectUpsertForm';

export class CreateProject extends BaseComponent<{}> {

    componentDidMount() {

        const { appActions } = this.props;

        appActions.project.getProjectTemplateAsync();
    }

    render() {

        return (
            <div className="row">

                <div className="col-xs-12">

                    <h2>Create</h2>

                    <ProjectUpsertForm {...this.props} />

                </div>

            </div>
        );
    }
}
