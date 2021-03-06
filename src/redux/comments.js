import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            return { ...state, errMess: null, comments: action.playload };
        case ActionTypes.COMMENTS_FAILED:
            return { ...state, errMess: action.payload };
        case ActionTypes.ADD_COMMENTS:
            const comment = action.payload;
            return { ...state, comments: state.comments.concat(comment) };
        default:
            return state;
    }
};