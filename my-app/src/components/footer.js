import React from "react";

export default function Header(){
    const date = new Date()
    const year = date.getFullYear();

    return (
        <footer>

            Challenge {year}

        </footer>
    );
}