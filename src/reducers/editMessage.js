import { SET_EDIT_VALUE, SEND_MESSAGE } from "../constants/action-types";

export default (state = null, action) => {
    switch(action.type) {
        case SET_EDIT_VALUE:
            return action.payload
        case SEND_MESSAGE:
            return "";
        default:
            return state;
    }
}