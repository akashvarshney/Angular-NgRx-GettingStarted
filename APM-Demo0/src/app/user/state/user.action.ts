import { Action } from '@ngrx/store';

export enum UserActionType {
    MaskUserName = '[User] Mask User Name'
}
export class MaskUserName implements Action {
    readonly type: UserActionType.MaskUserName;
    constructor(public payload: boolean) { }
}
export type UserAction = MaskUserName;
