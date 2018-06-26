import React from 'react';
import { connect } from 'react-redux';
import { create, destroy, update } from '../actions/category-actions';
import uuidv4 from 'uuid/v4'

class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            budget: 0,
            isEditing: false
        }
        this.submit = this.submit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    submit(e) {
        e.preventDefault();
        if (this.props.name === 'update') {
            const category = Object.assign({}, this.props.category, this.state);
            this.props.update(category)
            this.setState({ isEditing: !this.state.isEditing });
            console.log('INSIDE OF IF')
            console.log('Updated Category', category)
        } else {
            const category = Object.assign({}, this.state, { id: uuidv4(), timestamp: new Date() });
            this.props.create(category);
            console.log('New Category: ', category);
            console.log('INSIDE OF ELSE')
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render() {
        return (
            <form onSubmit={this.submit}>
                <input id="name" name="name" type="text" onChange={this.onChange} placeholder="name" />
                <input id="budget" name="budget" type="number" onChange={this.onChange} placeholder="budget" />
                <button type="submit" onClick={this.submit} id="submit"> SUBMIT </button>
            </form>
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
        update: (category) => dispatch(update(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);