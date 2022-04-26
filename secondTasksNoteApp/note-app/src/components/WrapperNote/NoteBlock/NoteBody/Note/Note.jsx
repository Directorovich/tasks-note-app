import React from "react";

function Note (props) { 
    return (
    <div>
        <div class="name-note">{props.noteName}</div>
        <div class="date-created-note">{props.createDate}</div>
        <div class="category-note">{props.category}</div>
        <div class="content-note">{props.content}</div>
        <div class="date-note">{props.endDate}</div>
        <div class="button-setting-note">picture</div>
        NEWNote    
    </div>
    )
    
}

export default Note;