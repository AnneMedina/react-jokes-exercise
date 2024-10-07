import React from "react";

export default function Jokes({ setup, punchline }) {

    return (
        <div className="jokes-container">
            <h3>Setup: {setup}</h3>
            <p>Punchline: {punchline}</p>
        </div>
    )

}