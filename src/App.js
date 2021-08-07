import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
// We have to destructure since we don't use export default.
import { robots } from "./robots";

import "./App.css";

// State means the description of your app. An object that describes your application and it's able to change.
// STATE >> props | Props are just things that come out of state.

class App extends Component {
    // To add a state
    // App component with two states.
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ""
        };
    }
    // Anytime you make your own method on a component use arrow functions.
    // Now "this" refers to where it was created, the App.
    onSearchChange = (event)  => {
        // WE ALWAYS HAVE TO DO IT THIS WAY!!!
        this.setState({ searchfield: event.target.value });
      
    }

    render() {
        // It gives us the value of the search.
        const filteredRobots = this.state.robots.filter(robot => {
                return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        // React uses JSX to create the Virtual DOM.
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;