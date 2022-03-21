import { Language, MeetingModel } from "apollo/Models";
import { updateLanguage } from "./i18n";
import { updateLocalUser } from "./user";
import { updateLocalMeeting, SAVE_MEETING } from "./meeting";

export const i18nMutations = {
    updateLanguage: (lang: Language) => updateLanguage(lang),
};
export const localUserMutations = {
    updateLocalUser: (isLoggedIn: boolean) => updateLocalUser(isLoggedIn),
};

export const localMeetingMutations = {
    updateLocalMeeting: (obj: any) => updateLocalMeeting(obj)
}

export {SAVE_MEETING};