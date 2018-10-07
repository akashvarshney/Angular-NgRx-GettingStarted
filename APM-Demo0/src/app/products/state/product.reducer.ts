import { Product } from '../product';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductAction, ProductActionType } from './products.actions';

export interface State extends fromRoot.State {
    products: ProductState;
}

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    productList: Product[];

}

const initalState: ProductState = {
    showProductCode: true,
    currentProduct: null,
    productList: []
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');
export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);

export const getCurrentProduct = createSelector(
    getProductFeatureState,
    state => state.currentProduct
);

export const getProductList = createSelector(
    getProductFeatureState,
    state => state.productList
);

export function reducer(state = initalState, action: ProductAction): ProductState {
    switch (action.type) {
        case ProductActionType.ToggleProductCode:
            return {
                ...state,
                showProductCode: action.payload
            };
        case ProductActionType.SetCurrentProduct:
            return {
                ...state,
                currentProduct: { ...action.payload }
            };
        case ProductActionType.ClearCurrentProduct:
            return {
                ...state,
                currentProduct: null
            };
        case ProductActionType.InitializeCurrentProduct:
            return {
                ...state,
                currentProduct: {
                    id: 0,
                    description: '',
                    productCode: 'New',
                    productName: '',
                    starRating: 0
                }
            };

        default:
            return state;
    }
}
