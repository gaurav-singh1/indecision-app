class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleResetAll = this.handleResetAll.bind(this);
        this.state = {
            count : 0
        }
    }
    componentDidMount(){
        let count = localStorage.getItem('count')
        if(!isNaN(count)){
            count = parseInt(count, 10)
            this.setState(() =>({count}))
        }
    }

    componentDidUpdate(prevProps, prevState){
        localStorage.setItem('count', this.state.count)
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                    count : prevState.count + 1
                };
            
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleResetAll() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleResetAll}>reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter count={-10}/>, document.getElementById('app'));


// const addOne = () => {
//     console.log("add one ")
//     count++;
//     renderApp();
// };
// const minusOne = () => {
//     console.log("minus one ")
//     count--;
//     renderApp();
// };
// const reset = () => {
//     console.log("reset ")
//     count = 0;
//     renderApp();
// };

// let count = 0;

// const renderApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
    
//     ReactDOM.render(templateTwo, appRoot);

// }


// renderApp();
