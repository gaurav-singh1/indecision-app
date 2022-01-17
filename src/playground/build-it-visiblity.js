class VisiblityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this);
        this.state = {
            visiblity : false
        }
    }
    handleToggleVisiblity(){
        this.setState((prevState) => {
            return {
                visiblity: !prevState.visiblity
            };
        });
    }


    render() {
        return (<div>
            <h1>VisiblityToggle</h1>
            <button onClick={this.handleToggleVisiblity}>{this.state.visiblity===false?'show details':'hide details'}</button>
            {
                this.state.visiblity && <p>here are your details!!</p>
            }
        </div>);
    }
}


ReactDOM.render(<VisiblityToggle />, document.getElementById('app'));


// const appRoot = document.getElementById("app")



// const CheckToShow = () => {
//    counter = 1 - counter;
//     renderApp();
// }

// let counter = 0
// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visiblity Toggle</h1> 
//             <button onClick={CheckToShow}>{counter===0? "show details" : "hide details"}</button>
//             {
//                 counter===0 && (
//                     <div>
//                         <p>here is your text</p>
//                     </div>
//                 )

//             }
//         </div>);

//     ReactDOM.render(template, appRoot);
// }


// renderApp();

