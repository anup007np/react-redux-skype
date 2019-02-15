import { combineReducers } from "redux";
import user from "./user";
import contacts from "./contacts";
import activeUserId from './activeUserId';
import messages from "./messages";
import typing from "./typing";
import editMessage from "./editMessage";

export default combineReducers({
    user,
    messages,
    typing,
    contacts,
    activeUserId,
    editMessage
});