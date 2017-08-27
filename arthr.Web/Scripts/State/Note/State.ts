// 3rd Party
import { handleActions, Action } from 'redux-actions';

// Utility
import { ReduxHelper } from '../../Utility';

// Models
import { Note, NoteUpsertViewModel } from '../../Models';

const actionTypes = {
    receiveCollection: 'note.receive.collection',
    receiveUpsert: 'note.receive.upsert'
};

export interface INoteState {
    notes: Note[],
    noteUpsert: NoteUpsertViewModel;
}

const initialState = (): INoteState => {

    return {
        notes: null,
        noteUpsert: null
    };
}

const actionWrapper = ReduxHelper.actionWrapper;

const noteReducer = handleActions<INoteState>({

    [actionTypes.receiveCollection]: (state: INoteState, action: Action<Note[]>): INoteState => {

        return actionWrapper(state, action, (newState: INoteState) => {
            newState.notes = action.payload;
        });
    },

    [actionTypes.receiveUpsert]: (state: INoteState, action: Action<NoteUpsertViewModel>): INoteState => {

        return actionWrapper(state, action, (newState: INoteState) => {
            newState.noteUpsert = action.payload;
        });
    }

}, initialState());

export {
    actionTypes as ActionTypes,
    noteReducer as NoteReducer
}
