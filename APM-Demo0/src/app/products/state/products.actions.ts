import { Action } from '@ngrx/store';
import { Product } from '../product';

// action
export enum ProductActionType {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetCurrentProduct = '[Product] Set Current Product',
    ClearCurrentProduct = '[Product] Clear Current Product',
    InitializeCurrentProduct = '[Product] Initialize Current Product',
    Load = '[Product] Load Products',
    LoadSuccuess = '[Product] Load Success Product',
    LoadFailed = '[Product] Load Failed Product'
}
// action creators
export class ToggleProductCode implements Action {
    readonly type = ProductActionType.ToggleProductCode;
    constructor(public payload: boolean) { }
}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionType.SetCurrentProduct;
    constructor(public payload: Product) { }
}

export class ClearCurrentProduct implements Action {
    readonly type = ProductActionType.ClearCurrentProduct;
}

export class InitializeCurrentProduct implements Action {
    readonly type = ProductActionType.InitializeCurrentProduct;
}

export class Load implements Action {
    readonly type = ProductActionType.Load;
}

export class LoadSuccuess implements Action {
    readonly type = ProductActionType.LoadSuccuess;
    constructor(public payload: Product[]) { }
}

export class LoadFailed implements Action {
    readonly type = ProductActionType.LoadFailed;
    constructor(public payload: string) { }
}

// action union
export type ProductAction = ToggleProductCode
    | SetCurrentProduct
    | ClearCurrentProduct
    | InitializeCurrentProduct
    | Load
    | LoadSuccuess
    | LoadFailed;
