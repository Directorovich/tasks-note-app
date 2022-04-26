import React from "react";
import Note from "./Note/Note";

function NoteBody (props) { 
    return (
    <div>
        <div class="header-notes-block">
            
            <div class="item-header-notes">Name</div>
            <div class="item-header-notes">Created</div>
            <div class="item-header-notes">Category</div>
            <div class="item-header-notes">Content</div>
            <div class="item-header-notes">Dates</div>
            <div class="item-header-notes">
                {/* <img class="unarchive" title="archived" id="unarchive-button" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Grey_archive_icon_%28Wikiproject_icons%29.svg/2048px-Grey_archive_icon_%28Wikiproject_icons%29.svg.png" alt="archive note">
                <img class="destroy-all" title="delete all" id="destroy-all-button" src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/delete.png" alt="delete note"> */}
            </div>
        </div>
        <Note/>
        <button>Create</button>
        
    </div>
    )
    
}

export default NoteBody;