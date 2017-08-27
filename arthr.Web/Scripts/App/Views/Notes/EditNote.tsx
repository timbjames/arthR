// 3rd Party
import * as React from 'react';

// Base
import { RoutedBaseComponent } from '../../BaseComponent';

// Module
import { NoteUpsertForm } from './NoteUpsertForm';

export class EditNote extends RoutedBaseComponent {

    componentDidMount() {

        const { appActions, appState, match } = this.props;
        const { params } = match;

        appActions.note.getNoteAsync(params.noteId);
    }

    render() {

        return (
            <div className="row">

                <div className="col-xs-12">

                    <h2>Edit</h2>

                    <NoteUpsertForm {...this.props} />

                </div>

            </div>
        );
    }
}
