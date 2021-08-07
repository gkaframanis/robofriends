

// We want to create an Action.
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants";

// Action on searchChange
export const setSearchfield = (text) => (
    // It's a constant, that's why we use capital letters.
    {type: CHANGE_SEARCH_FIELD,
    payload: text
    }
);

export const requestRobots = () => async (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    try {
        dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: users});
    } catch (error){
        dispatch({type: REQUEST_ROBOTS_FAILED, payload: error});
    }
}