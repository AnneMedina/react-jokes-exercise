import React from "react";

export default function Jokes(props) {
    return (
        <div className="jokes-container">
            {props.setup && <p>Setup: {props.setup}</p>}
            <p>Punchline: {props.punchline}</p>
            {props.upvotes && <p>Upvotes: {props.upvotes}</p>}
            {props.downvotes && <p>Downvotes: {props.downvotes}</p>}
            {props.isPun && <p>Is Pun: {props.isPun ? "Not a fan of puns" : ""}</p>}
            <hr />
        </div>
    )
}