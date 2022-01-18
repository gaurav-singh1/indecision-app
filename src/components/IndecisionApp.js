import React from 'react';
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOptions: undefined
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options}));
            }
        }catch(e) {
            // Do nothing at all
        }   
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
   
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
          options: prevState.options.filter((option) => optionToRemove !== option)
        }));
      }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        // alert(option);
        this.setState((prevState) => ({
            selectedOptions: option
        }))
    }
    handleAddOption = (option) => {
        if(!option){
            return "Enter a valid value";
        }else if(!this.state.options.indexOf(option)){
            return "you entered a duplicate value"
        }
        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }
    clearSelectedOptions = () => {
        this.setState(() => ({selectedOptions: undefined}));
    }
    render() {
        const title = "Indecision App"
        const subtitle = "Put your life in the hands of a Computer"

        return (
            <div>
                <Header title = {title} subtitle={subtitle} />
                <div className='container'>
                    <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                    <div className='widget'>
                        <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                        handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                selectedOptions = {this.state.selectedOptions}
                clearSelectedOptions ={this.clearSelectedOptions}
                />
        </div>
        )
    }
}


export default IndecisionApp;