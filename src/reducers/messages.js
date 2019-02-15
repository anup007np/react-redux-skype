import { getMessages } from "../static-data";
import { SEND_MESSAGE, DELETE_MESSAGE } from "../constants/action-types";
import _ from "lodash";

/*export default function messages(state = getMessages(10), action) {
    return state;
}*/

export default (state = getMessages(10), action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const { message, userId, editId } = action.payload;
            const allUserMsgs = state[userId];
            const number = editId ? editId : +_.keys(allUserMsgs).pop() + 1; //'+' is to make sure that the result is converted to a Number instead of a String.
            return {
                ...state,
                [userId]: {
                    ...allUserMsgs,
                    [number]: {
                        number,
                        text: message,
                        is_user_msg: true
                    }
                }
            }
        case DELETE_MESSAGE: {
            const { number, userId } = action.payload;
            const allUserMsgs = state[userId];
            const deletedMsg = _.omit(allUserMsgs, number); //It will return a new object
            return {
                ...state,
                [userId]: {
                    ...deletedMsg
                }
            }
        }
       /*case EDIT_MESSAGE: {
            const { number, message, userId } = action.payload;
            const allUserMsgs = state[userId];
            //let editedMsg = _.omit(allUserMsgs, number); //It will return a new object
            //console.log('edited', editedMsg);
            return {
                ...state,
                [userId]: {
                    ...allUserMsgs,
                    [number]: {
                        ...allUserMsgs[number],
                        number,
                        text: message,
                        is_user_msg: true
                    }
                }
            }
        }*/
        default:
            return state;
    }
}