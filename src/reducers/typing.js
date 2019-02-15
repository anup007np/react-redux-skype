import { SET_TYPING_VALUE, SEND_MESSAGE, EDIT_MESSAGE } from "../constants/action-types";

export default (state = "", action) => {
    switch (action.type) {
        case SET_TYPING_VALUE:
            return action.payload;
        case EDIT_MESSAGE:
            return action.payload.text;
        case SEND_MESSAGE:
            return "";
        default:
            return state;
    }
}