import { TypePolicies } from "@apollo/client";
import { initialUser, initialI18n,  initialMeeting} from "apollo/State";

export const TypePolicy: TypePolicies = {
    Query: {
        fields: {
            localUser: {
                read(existing) {
                    if (!existing) {
                        return initialUser();
                    }
                    return existing;
                },
                merge(existing, incoming) {
                    return { ...existing, ...incoming };
                },
            },

            i18n: {
                read(existing) {
                    if (!existing) {
                        return initialI18n();
                    }
                    return existing;
                },
                merge(existing, incoming) {
                    return { ...existing, ...incoming };
                },
            },
            meeting: {
                read(existing) {
                    console.log('existing', existing)
                    if (!existing) {
                        return initialMeeting();
                    }
                    return existing;
                },
                merge(existing, incoming) {
                    console.log('merge', existing, incoming)
                    return { ...existing, ...incoming };
                },
            }
        },
    },
};
