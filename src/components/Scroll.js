import React from "react";

// We want this component to wrap another component.
// We have props, state and children.
const Scroll = (props) => {
    // Even when we don't pass any props, all components have the children property.
    return (
        // style: javascript code that returns an object of css properties.
        <div style={{ overflowY: "scroll", border: "1px solid black", height: "800px" }}>
            { props.children }
        </div>
    )
}

export default Scroll;