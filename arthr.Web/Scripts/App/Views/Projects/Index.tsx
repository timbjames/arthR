import * as React from 'react';
import 'whatwg-fetch';

interface IIndexProps {
    
}

export class Index extends React.Component<IIndexProps, { message: string }> {

    constructor(props: IIndexProps) {
        super(props);

        this.state = {
            message: ''
        };
    }

    private checkStatus = (response: Response) => {
        if (response.status >= 200 && response.status < 300){
            return response;
        } else {
            const error = new Error(response.statusText);
            //error.response = response;
            throw error;
        }
    }

    private parseJSON = (response: Response) => {
        return response.json();
    }

    componentDidMount() {

        fetch('http://localhost:5001/api/project?completed=true&all=',
            {
                credentials: 'include',
                method: 'get',
                headers: {
                    'Authorization': 'Bearer ' + (window as any).accessToken
                }
            }
        )
            .then(this.checkStatus)
            .then(this.parseJSON)
            .then((data) => {
                console.log('data: ', data);
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    private handleCreate = (): void => {

        const data = JSON.stringify({ name: 'Test' });

        fetch('http://localhost:5001/api/project',
            {
                credentials: 'include',
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Authorization': 'Bearer ' + (window as any).accessToken,
                    'Content-Type': 'application/json'
                },
                body: data
            }
        )
            .then(this.checkStatus)
            .then(this.parseJSON)
            .then((data) => {
                console.log('data: ', data);
            })
            .catch((error) => {
                console.log('error: ', error);
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
