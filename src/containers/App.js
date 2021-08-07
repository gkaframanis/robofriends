import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

// State means the description of your app. An object that describes your application and it's able to change.
// STATE >> props | Props are just things that come out of state.


// Lifecycle Methods (Lifecycle hooks: called automatically): https://reactjs.org/docs/react-component.html
// Smart componet because we have state.
class App extends Component {
    // To add a state
    // App component with two states.
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ""
        };
    }

    // Getting the data from API.
    async componentDidMount() {
        // fetch is a method from the window object.
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        this.setState({robots: users});
    }

    // Anytime you make your own method on a component use arrow functions.
    // Now "this" refers to where it was created, the App.
    onSearchChange = (event)  => {
        // WE ALWAYS HAVE TO DO IT THIS WAY!!!
        this.setState({ searchfield: event.target.value });
      
    }

    render() {
        const { robots, searchfield } = this.state;
        // It gives us the value of the search.
        const filteredRobots = robots.filter(robot => {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        // If the response from the API takes a long time
        return !robots.length ?
            <h1 className="tc">Loading...</h1> :
            // React uses JSX to create the Virtual DOM.
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        }
    }

export default App;