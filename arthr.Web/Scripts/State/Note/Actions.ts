// 3rd Party
import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { createHashHistory } from 'history';

// https://github.com/diegoddox/react-redux-toastr
import { toastr } from 'react-redux-toastr'

// Utility
import { IApiProgressFunctions } from '../../Utility';

// Models
import { Note, NoteUpsertViewModel } from '../../Models'

// Services
import { NotesService } from '../../Services'

// Page Actions
import { PageDispatcherFactory } from '../Page/Actions';

// Base
import { Actions } from '../Base/Actions';

// State
import { ActionTypes, INoteState } from './State';

export interface INoteActions {
    createNoteAsync: (note: Note) => void;
    editNoteAsync: (note: Note) => void;
    getNoteAsync: (noteId: number) => void;
    getNotesAsync: () => void;
    receiveNoteUpsert: (upsert: NoteUpsertViewModel) => void;
}

class NoteActions extends Actions implements INoteActions {

    private onFailure = (error): void => {
        console.log(error);
    }

    public createNoteAsync = (note: Note) => (dispatch: Dispatch<INoteState>): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('Note Creation', 'Note Created');
            createHashHistory().push('/notes');
        };

        this.api.call(NotesService.post(), note, onSuccess, this.onFailure);
    }

    public editNoteAsync = (note: Note) => (dispatch: Dispatch<INoteState>): void => {

        const onSuccess = (result: boolean) => {
            toastr.success('Note Edit', 'Note Updated');
            createHashHistory().push('/notes');
        };

        this.api.call(NotesService.put(), note, onSuccess, this.onFailure);
    }

    public getNoteAsync = (noteId: number) => (dispatch: Dispatch<INoteState>): void => {

        const onSuccess = (upsert: NoteUpsertViewModel) => {
            dispatch(this.receiveNoteUpsert(upsert));
        };

        this.api.call(NotesService.getById(noteId), null, onSuccess, this.onFailure);
    }

    public getNotesAsync = () => (dispatch: Dispatch<INoteState>): void => {

        const onSuccess = (notes: Note[]) => {
            dispatch(this.receiveNotes(notes));
        };

        this.api.call(NotesService.get(), null, onSuccess, this.onFailure);
    }

    private receiveNotes = createAction(ActionTypes.receiveCollection, (notes: Note[]) => notes);
    public receiveNoteUpsert = createAction(ActionTypes.receiveUpsert, (upsert: NoteUpsertViewModel) => upsert);
}

const dispatcherFactory = (dispatch: Dispatch<INoteState>, progressFunctions: IApiProgressFunctions): INoteActions => {

    const actions = new NoteActions(progressFunctions);

    return {
        createNoteAsync: (note: Note) => {
            dispatch(actions.createNoteAsync(note));
        },
        editNoteAsync: (note: Note) => {
            dispatch(actions.editNoteAsync(note));
        },
        getNoteAsync: (noteId: number) => {
            dispatch(actions.getNoteAsync(noteId));
        },
        getNotesAsync: () => {
            dispatch(actions.getNotesAsync());
        },
        receiveNoteUpsert: (upsert: NoteUpsertViewModel) => {
            dispatch(actions.receiveNoteUpsert(upsert));
        }
    }
}

export { dispatcherFactory as NoteDispatcherFactory }
