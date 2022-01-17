

console.log("App js is running")


//JSX- JAVASCRIPT XML


const app = {
    title : 'Indecision App!',
    subtitle : 'this is my subtitle',
    options : []

}

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted')
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option)
        e.target.elements.option.value='';
        renderApp();
    }
}

const removaAll = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById("app")


const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length ? 'Here are your options' : 'No Options'}</p>
            <button onClick={removaAll}>RemovalAll</button>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <p>{app.options.length}</p>
            <ol>
               {app.options.map((option) => {
                  return <li key={option}>{option}</li>
               })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                
            </form>
        </div>);

    ReactDOM.render(template, appRoot);
}

renderApp();