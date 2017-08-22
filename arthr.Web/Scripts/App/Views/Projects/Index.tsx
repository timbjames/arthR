import * as React from 'react';
import 'whatwg-fetch';

import { Project } from '../../../Models/Project';
import { Api, IApiCallWithPayload } from '../../../Utility';
import { ProjectService } from '../../../Services';

export class Index extends React.Component<{}, { message: string }> {

    private handleCreate = (): void => {

        const data: Project = {
            alreadyBilled: false,
            completed: false,
            dateCompleted: null,
            deadline: null,
            deleted: false,
            hideFromTimesheet: false,
            masterSiteId: 1,
            name: 'Test',
            onGoing: true,
            plannedStart: new Date(),
            quoted: 500,
            username: 'tim'
        } as Project;

        const onSuccess = (result: boolean) => {
            alert('success');
        };

        Api(null).call(ProjectService.post(), data, onSuccess, (error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h1>Index Page</h1>
                <p>A template for starting off a .net Core Web Application project using React + Redux, coded in Typescript, bundled together by Webpack.</p>
                <button onClick={ this.handleCreate }>Create Project</button>
            </div>
        );
    }
}
