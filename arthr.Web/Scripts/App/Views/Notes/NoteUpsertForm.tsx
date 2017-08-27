// 3rd Party
import * as React from 'react';

// Base
import { BaseComponent } from '../../BaseComponent';

// Material Ui
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// Utility
//import { } from '../../../Utility';
import { DateHelper, ObjectHelper } from '../../../Utility/Helpers';

// Models
import { NoteUpsertViewModel } from '../../../Models/NoteUpsertViewModel';

// State
import { IAppActions } from '../../../State';

type updateFunc = (upsert: NoteUpsertViewModel) => void;

export class NoteUpsertForm extends BaseComponent<{}> {

    private modelBinder: updateFunc;
    private upsert: NoteUpsertViewModel;

    componentDidMount() {

        const { appActions } = this.props;

        this.modelBinder = appActions.note.receiveNoteUpsert;
    }

    //#region handlers

    private titleChange = (e: React.KeyboardEvent<HTMLInputElement>, value: string) => {

        this.upsert.model.title = value;
        this.modelBinder(this.upsert);
    }

    private contentChange = (e: React.KeyboardEvent<HTMLInputElement>, value: string) => {

        this.upsert.model.content = value;
        this.modelBinder(this.upsert);
    }

    //#endregion

    private handleSave = (appActions: IAppActions, upsert: NoteUpsertViewModel) => (e: React.MouseEvent<HTMLButtonElement>) => {

        if (upsert.model.noteId) {
            appActions.note.editNoteAsync(upsert.model);
        } else {
            appActions.note.createNoteAsync(upsert.model);
        }
    }

    render() {

        const { appActions, appState } = this.props;

        this.upsert = ObjectHelper.deepClone(appState.note.noteUpsert);
        const model = this.upsert && this.upsert.model;

        return (
            <div className="form-horizontal">

                <h4>Note</h4>

                <div className="col-xs-12 col-md-4">

                    <div className="form-group">
                        <TextField
                            floatingLabelText="Note"
                            onChange={this.titleChange}
                            value={(model && model.title) ? model.title : ''} />
                    </div>
                </div>

                <div className="col-xs-12">
                    <div className="form-group">
                        <TextField
                            floatingLabelText="Content"
                            fullWidth
                            multiLine
                            onChange={this.contentChange}
                            rows={ 15 }
                            value={(model && model.content) ? model.content : ''} />
                    </div>

                </div>

                <div className="col-xs-12 col-md-4">

                    <div className="form-group">
                        <RaisedButton label="Save" onClick={this.handleSave(appActions, this.upsert)} />
                    </div>

                </div>

            </div>
        );
    }
}
