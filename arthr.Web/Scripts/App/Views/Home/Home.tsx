// 3rd Party
import * as React from 'react';

// Base
import { BaseComponent } from '../../BaseComponent';

export class Home extends BaseComponent<{}> {

    render() {

        return (
            <div>
                <h1>Here</h1>

                <button onClick={() => {

                    this.props.emitter.emit('WOW');

                }} >Click Me</button>

                <Home2 {...this.props} />

            </div>
        );
    }
}

export class Home2 extends BaseComponent<{}> {

    render() {

        return (
            <div>
                <h1>Here</h1>

                <button onClick={() => {

                    this.props.emitter.emit('WOW');

                }} >Click Me 2</button>

            </div>
        );
    }
}
