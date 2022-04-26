import React from "react";
import NoteBlock from "./NoteBlock/NoteBlock";
import ArchiveBlock from "./ArchiveBlock/ArchiveBlock";

function WrapperNote (props) { 
    return (
    <div>
        <NoteBlock/>
        <ArchiveBlock/>
    </div>
    )
    
}

export default WrapperNote;