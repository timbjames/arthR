import * as React from 'react';

import { IAreaState } from '../../../Models/IAreaState';
import { IAreaActions } from '../../../Models/AreaActions';

export const Three = (areaActions: IAreaActions, areaState: IAreaState) => () => {

    return (
        <div>
            <h2>Redux Tester</h2>
            <h1>{ areaState.name }</h1>
            <button onClick={
                () => { areaActions.doSomething(); }
            }>Click Me</button>
        </div>
    );
};