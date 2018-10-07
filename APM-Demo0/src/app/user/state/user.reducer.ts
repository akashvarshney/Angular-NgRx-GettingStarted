import { User } from '../user';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserAction, UserActionType } from './user.action';

export interface UserState {
    maskUserName: boolean;
    currentUser: User;
}

const initalizeState: UserState = {
    maskUserName: false,
    currentUser: {
        id: 5,
        userName: 'AkashVarshney',
        isAdmin: true
    }
};

const getUserFeatureState = createFeatureSelector<UserState>('user');
export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
);

export const getCurrentUser = createSelector(
    getUserFeatureState,
    state => state.currentUser
);

export function reducer(state = initalizeState, action: UserAction) {
    switch (action.type) {
        case UserActionType.MaskUserName: {
            return {
                ...state,
                maskUserName: action.payload
            };
        }
        default:
            return state;
    }
}
