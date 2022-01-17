import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
   
    onFormSubmit = (e) => {
        
        e.preventDefault();

        console.log('form submitted')
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return { error };
        });
        e.target.elements.option.value='';
    }

    render () {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button> 
            </form>
            </div>
        )
    }
}
