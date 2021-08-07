import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

import { setSearchfield, requestRobots } from "../actions";

// https://react-redux.js.org/using-react-redux/connect-mapstate
// Tell what piece of state do I need to listen to and send its props.
const mapStateToProps = state => {
    return {
        // state.searchfield because we have one reducer to our store. 
        searchfield: state.searchRobots.searchfield,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

// dispatch is what triggers the action.
// Tell what props I should listen to that are actions and need to get dispatched.
const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

// State means the description of your app. An object that describes your application and it's able to change.
// STATE >> props | Props are just things that come out of state.


// Lifecycle Methods (Lifecycle hooks: called automatically): https://reactjs.org/docs/react-component.html
// Smart componet because we have state.
class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const {searchfield, onSearchChange, robots, isPending} = this.props;
        // It gives us the value of the search.
        const filteredRobots = robots.filter(robot => {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        // If the response from the API takes a long time
        return isPending ?
            <h1 className="tc">Loading...</h1> :
            // React uses JSX to create the Virtual DOM.
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        }
    }

// connect is a higher order functions that returns another function.
// Subscribe to any state changes in the redux store and we need to define what changes the App is interested in.
export default connect(mapStateToProps, mapDispatchToProps)(App);