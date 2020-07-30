import React from 'react';
import { Link } from "react-router-dom";

export const SecondPage = () => {
    return(
        <div className="center">
            <h1>Page 2</h1>
            <Link to="/">
                <button variant="outlined">
                    Page 2
                </button>
            </Link>
        </div>
    )
}