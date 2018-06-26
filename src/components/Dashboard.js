import React from 'react';
import { connect } from 'react-redux';
import { create, destroy, update } from '../actions/category-actions';

import CategoryForm from './CategoryForm.js';
import CategoryItem from './CategoryItem.js';
import CategoryList from './CategoryList.js';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1>Budget App</h1>
                <CategoryForm create={this.props.create}/>
                <CategoryList destroy={this.props.destroy} update={this.props.update}/>
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
        destroy: (id) => dispatch(destroy(id)),
        update: (category) => dispatch(update(category)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);