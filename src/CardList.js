import React from "react";
import Card from "./Card";


// Pure component: it receives something and returns something.
const CardList = ({ robots }) => {
    const cardList = robots.map((_card, index) => {
        // When we do something of a loop, we need to give it a unique key.
        // If we return multiple lines we need to use the ().
        return <Card key={index} id={robots[index].id} name={robots[index].name} email={robots[index].email}/>
    })
    return (
        <div>
           { cardList } 
        </div>
    );
}

export default CardList;