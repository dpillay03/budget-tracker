import {
    CATEGORY_CREATE,
    CATEGORY_UPDATE,
    CATEGORY_DESTROY
} from '../actions/category-actions'

const initialState = {
    categories: []
}

export default function categoryReducer(state, action) {
    if (state === undefined) {
        return initialState;
    }

    let newState = {}
    let newCats = [];
    let currentCategories;
    let updateCategories;
    let categoryIndex;
    let categoryToRemove;

    console.log('Action.type', action.type)
    switch (action.type) {
        case CATEGORY_CREATE:
            let newCats = state.categories.map(ele => {
                return ele;
            });
            newCats.push(action.category)
            console.log('NEW CATS', newCats)
            return Object.assign(newState, {
                categories: newCats
            });


        case CATEGORY_UPDATE:
            let newObject = {};
            currentCategories = state.categories.map(ele => {
                if(ele.id ===  action.category.id) {
                    ele.isEditing = !ele.isEditing;
                    ele.name = action.category.name;
                    ele.budget = action.category.budget;
                    console.log('ENTERING REDUCER IF')
                }
                return ele;
            })
            // console.log('Current Cat', currentCategories)
            let newObj = Object.assign(newObject, state, { categories: currentCategories });
            // console.log('TEMP OBJ', tempObj)
            return newObj


        case CATEGORY_DESTROY:
            console.log('In destroy!', action)

            currentCategories = state.categories.filter(ele => {
                return ele.id !== action.id
                console.log('DELETED ACTION', action.id)
            })
            return Object.assign(newState, state, { categories: currentCategories });

        default: return state;
    }
}
