import React from "react";

function CategoryRow (props) { 
    return (
    <div>
        {props.categoryName} 
        {props.activeCount}
        {props.archiveCount}
    </div>
    )
    
}

export default CategoryRow;