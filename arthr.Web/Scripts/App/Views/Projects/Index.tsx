import * as React from 'react';
import 'whatwg-fetch';

import { Project } from '../../../Models/Project';
import { Api, IApiCallWithPayload } from '../../../Utility';

interface IIndexProps {
    
}

const url = (): IApiCallWithPayload<Project, Project> => {
    return {
        method: 'get',
        url: 'http://localhost:5001/api/project'
    };
}

export class Index extends React.Component<IIndexProps, { message: string }> {

    constructor(props: IIndexProps) {
        super(props);

        this.state = {
            message: ''
        };
    }


    componentDidMount() {

        //fetch('http://localhost:5001/api/project?completed=true&all=',
        //    {
        //        credentials: 'include',
        //        method: 'get',
        //        headers: {
        //            'Authorization': 'Bearer ' + (window as any).accessToken
        //        }
        //    }
        //)
        //    .then(this.checkStatus)
        //    .then(this.parseJSON)
        //    .then((data) => {
        //        console.log('data: ', data);
        //    })
        //    .catch((error) => {
        //        console.log('error: ', error);
        //    });
    }

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

        const onSuccess = (data: Project) => {
            console.log(data);
        };

        Api(null).call(url(), data, onSuccess, (error) => {

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
