// React must be in scope to use jsx.
import React from "react";

// We can do destructuring inside the parameters
const Card = ({name, email, id}) => {
    // const {name, email, id} = props;
    // We can only return one element, eg the <div></div> here with its children.
    return (
        // bg: background, tc: text center, .dib { display: inline-block; }, br: border, pa: padding, ma: margin, 
        // bw: border weight, grow: grow on hover (animation)
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;
