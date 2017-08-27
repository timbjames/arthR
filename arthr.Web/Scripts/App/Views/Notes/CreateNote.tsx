// 3rd Party
import * as React from 'react';

// Base
import { BaseComponent } from '../../BaseComponent';

// Module
import { NoteUpsertForm } from './NoteUpsertForm';

export class CreateNote extends BaseComponent<{}> {

    componentDidMount() {

        const { appActions } = this.props;

        appActions.note.getNoteAsync(0);
    }

    render() {

        return (
            <div className="row">

                <div className="col-xs-12">

                    <h2>Create</h2>

                    <NoteUpsertForm {...this.props} />

                </div>

            </div>
        );
    }
}
