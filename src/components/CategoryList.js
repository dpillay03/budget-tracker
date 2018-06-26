import React from 'react';
import { connect } from 'react-redux';
import { create, destroy, update } from '../actions/category-actions';

import CategoryItem from './CategoryItem.js'



class CategoryList extends React.Component {
    constructor(props) {
        super(props);

        this.catList = this.catList.bind(this);
    }


    catList() {
        return this.props.categories.map((cat, i) => {
            // console.log('CAT ', cat)
            // console.log('this.props.category', this.props.categories)
            return <CategoryItem cat={cat}
                key={i}
                id={cat.id}
                name={cat.name}
                budget={cat.budget}
                update={this.props.update}
                destroy={this.props.destroy}>
            </CategoryItem>
        });
    }

    render() {
        return (
            <div>
                <h2 id="budget-header">Bills</h2>
                <ul>
                    <li>{this.catList()}</li>
                </ul>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        create: (category) => dispatch(create(category)),
        update: (category) => dispatch(update(category)),
        destroy: (id) => dispatch(destroy(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);