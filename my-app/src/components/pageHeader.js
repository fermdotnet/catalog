import React from "react";

export default function PageHeader({title}){
    return (
        <div className="page-header">

            <div className="content">
                <h1>{title}</h1>
            </div>

        </div>
    );
}