class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
          options: []
        };
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
   
    handleDeleteOptions() {
        this.setState(() => ({options: []}))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
          options: prevState.options.filter((option) => optionToRemove !== option)
        }));
      }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option){
        if(!option){
            return "Enter a valid value";
        }else if(!this.state.options.indexOf(option)){
            return "you entered a duplicate value"
        }
        this.setState((prevState) => ({options: prevState.options.concat([option])}));
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat([option])
        //     };
        // });
    }
    render() {
        const title = "Indecision App"
        const subtitle = "Put your life in the hands of a Computer"

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                <Options
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                handleAddOption={this.handleAddOption}
                />
        </div>
        )
    }
}


// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}
// class Action extends React.Component {
    
//     render() {
//         return (
//             <div>
//                 <button 
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//                 >
//                     What should i do?
//                 </button>

//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
                What should i do?
            </button>

        </div>
    );
}

// class Options extends React.Component {
    
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Removal All</button>
//                 {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
//                 <Option />
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Removal All</button>
            {props.options.length===0 && <p>Please add options to get started</p>}
            {
                props.options.map((option) => (
            <Option 
                key={option} 
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
            />
            )
            )}
        </div>
    );
}


// const Options = (props) => {
//     return (
//       <div>
//         <button onClick={props.handleDeleteOptions}>Remove All</button>
//         {
//           props.options.map((option) => (
//             <Option
//               key={option}
//               optionText={option}
//               handleDeleteOption={props.handleDeleteOption}
//             />
//           ))
//         }
//       </div>
//     );
//   };

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.optionText}</p>
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}
        >
          remove
        </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        };
    }
    onFormSubmit(e) {
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




ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


