import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";


// Hooks: having state using functions instead of classes.
function App () {
    // useState returns a pair: the current state value and a function that lets you update it
    // We use array destructuring.
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    // Getting the data from API.
    useEffect(() => {
        // fetch is a method from the window object.
        async function fetchData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await response.json();
            setRobots(users);
        }
        fetchData();
    // Only use useEffect if the searchfield changes | Optional list where we tell when we want to run the useEffect function.
    // [] is shortcut for componentDidMount.
    }, []);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    };

    const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    // If the response from the API takes a long time
    return !robots.length ?
        <h1 className="tc">Loading...</h1> :
        // React uses JSX to create the Virtual DOM.
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={ onSearchChange }/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
}

export default App;