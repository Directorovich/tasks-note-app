//(true? textDiv:textInput);

let countArvhiveTasks = 0;
let countActiveTasks = 0;

let countArvhiveRandomThought = 0;
let countActiveRandomThought = 0;

let countArvhiveIdeas = 0;
let countActiveIdeas = 0;

let rowTemplate = document.querySelector('.row-template');
let bodyNotesBlockEl = document.querySelector('#body-notes-block');
let notesBlockEl = document.querySelector('#notes-block');
let createButtonEl = document.querySelector('#create-button');
let unarchiveButtonEl = document.querySelector('#unarchive-button');
let destroyAllButtonEl = document.querySelector('#destroy-all-button');

createButtonEl.addEventListener('click', onCreateNoteButton);
destroyAllButtonEl.addEventListener('click', destroyAllOnClickButton);
unarchiveButtonEl.addEventListener('click', onUnarchiveButton);

function onUnarchiveButton(){
    let archived = bodyNotesBlockEl.querySelectorAll('.note-task');
    archived.forEach(el=>el.classList.toggle('archived'));
}

function onCreateNoteButton() {
    const newNote = rowTemplate.cloneNode(true);
    newNote.classList.remove('row-template');
    bodyNotesBlockEl.appendChild(newNote);

    const addButtonEl = newNote.querySelector('[data-component="add-button"]');
    const deleteButtonEls = newNote.querySelectorAll('[data-component="delete-button"]');
    const editButtonEl = newNote.querySelector('[data-component="edit-button"]');
    const archiveButtonEl = newNote.querySelector('[data-component="archive-button"]');

    addButtonEl.addEventListener('click', onAddButton);
    deleteButtonEls.forEach(el => el.addEventListener('click', onDeleteButton));
    editButtonEl.addEventListener('click', onEditButton);
    archiveButtonEl.addEventListener('click', onArchiveButton);

    function onAddButton() {
        const cells = newNote.querySelectorAll('[data-component="cell"]');
        const actionButtons = newNote.querySelectorAll('[data-component="action-buttons"] div');

        actionButtons.forEach(el => el.classList.toggle('hidden'));
        cells.forEach(el => {
            let divEL = el.querySelector('div');
            let inputEl = el.querySelector('input, select, textarea');

            if (inputEl != null){
                divEL.innerHTML=inputEl.value.substring(0, 20)+(inputEl.value.length>20 ? "...":"");
                //divEL.innerHTML.substring(0, 8);

                divEL.classList.toggle('hidden');
                inputEl.classList.toggle('hidden');
            }
        });

        
        let nowSelect= newNote.querySelector('select').value;
        if (nowSelect==='Tasks'){
            countActiveTasks++;
        } else if (nowSelect=== 'Random Thought'){
            countActiveRandomThought++;
        } else if (nowSelect==='Idea') {
            countActiveIdeas++;
        };
        console.log('tasks '+countActiveTasks);
        console.log('random '+countActiveRandomThought);
        console.log('idea '+countActiveIdeas);

        checkActiveAndArchive();
    };

    function checkActiveAndArchive(){
        const rowArchiveTask = document.querySelector('[data-component="row-archive-task"]');
        const rowArchiveRandom = document.querySelector('[data-component="row-archive-random"]');
        const rowArchiveIdea = document.querySelector('[data-component="row-archive-idea"]');

        if (countArvhiveTasks+countActiveTasks>0){
            rowArchiveTask.classList.remove('hidden');
        } else {
            rowArchiveTask.classList.add('hidden')
        };
        if (countArvhiveRandomThought+countActiveRandomThought>0){
            rowArchiveRandom.classList.remove('hidden');
        } else {
            rowArchiveRandom.classList.add('hidden')
        };
        if (countArvhiveIdeas+countActiveIdeas>0){
            rowArchiveIdea.classList.remove('hidden');
        } else {
            rowArchiveIdea.classList.add('hidden')
        };

    }
    function onDeleteButton() {
        let nowSelect= newNote.querySelector('select').value;


        if (nowSelect==='Tasks'){
            countActiveTasks--;
        } else if (nowSelect=== 'Random Thought'){
            countActiveRandomThought--;
        } else if (nowSelect==='Idea') {
            countActiveIdeas--;
        };


        console.log('tasks '+countActiveTasks);
        console.log('random '+countActiveRandomThought);
        console.log('idea '+countActiveIdeas);
        newNote.remove();
        checkActiveAndArchive();
    };

    function onEditButton() {
        const cells = newNote.querySelectorAll('[data-component="cell"]');
        const actionButtons = newNote.querySelectorAll('[data-component="action-buttons"] div');

        actionButtons.forEach(el => el.classList.toggle('hidden'));
        cells.forEach(el => {
            let divEL = el.querySelector('div');
            let inputEl = el.querySelector('input, select, textarea');

            if (inputEl != null){
                //divEL.innerHTML=inputEl.value;

                divEL.classList.toggle('hidden');
                inputEl.classList.toggle('hidden');
            }
        });
    };

    function onArchiveButton() {
        console.log('will be archived');
        newNote.classList.toggle('archived');
    }

    


    //alert('create note');
//     let names="name from per"
//     let newNote = document.createElement('div');
//     newNote.classList.add('div'+classIndex);

//     bodyNotesBlockEl.appendChild(newNote);
//     let currentNoteChiled = bodyNotesBlockEl.querySelector('div.div'+classIndex);
//     currentNoteChiled.innerHTML = `<div class="note-task" >
//     <!--элемент заметки-->
//     <div class="name-note" onclick={} data-position="${'div'+classIndex}"> "${names}" ${currentIndex}</div>
//     <div class="date-created-note" data-position="${'div'+classIndex}">11.08.2018</div>
//     <div class="category-note" data-position="${'div'+classIndex}">Task</div>
//     <div class="content-note" data-position="${'div'+classIndex}">New book</div>
//     <div class="date-note" data-position="${'div'+classIndex}">12.08.2018</div>
//     <div class="button-setting-note">
//         <button class="edit" data-position="${'div'+classIndex}">ch</button>
//         <button class="archive" data-position="${'div'+classIndex}">arh</button>
//         <button class="destroy" data-position="${'div'+classIndex}">del</button>
//     </div>
// </div>`
//     //bodyNotesBlockEl.insertAdjacentHTML('beforeend', newNote);

//     listItems = bodyNotesBlockEl.querySelectorAll('div');
//     destroyButtons = bodyNotesBlockEl.querySelectorAll('button.destroy');
//     archiveButtons = bodyNotesBlockEl.querySelectorAll('.archive');
//     editButtons = bodyNotesBlockEl.querySelectorAll('.edit');

//     destroyItem();
//     archiveItem();
//     editItem();

//     currentIndex++;
//     classIndex++;
//     countActiveTasks++;
//     countActiveNote(countActiveTasks);
}








// function editString(){
//     let editNameInputEl = document.querySelector('#edit-name-input');
//     let addButtonEl = document.querySelector('#add-button');
//     addButtonEl.addEventListener('click', addNote)
//     function addNote () {
//         nameValue = editNameInputEl.value;
//     }
// }

// function destroyItem () {
//     destroyButtons[currentIndex].addEventListener('click', destroyItemOnClick);
// }
// function archiveItem () {
//     archiveButtons[currentIndex].addEventListener('click', archiveItemOnClick);
// }
// function editItem () {
//     editButtons[currentIndex].addEventListener('click', editItemOnClick);
// }


// function destroyItemOnClick(e) {
//     //alert('удалили заметку'+currentIndex);
//     let currentItem = getItem(e);
//     currentItem.remove();
//     currentIndex--;
//     countActiveTasks--;
//     listItems = bodyNotesBlockEl.querySelectorAll('div');
//     countActiveNote(countActiveTasks);
// }



// function archiveItemOnClick(e) {
//     alert('заархивировали');
//     let currentItem = getItem(e);
//     countArvhiveTasks++;
//     countArchiveNote(countArvhiveTasks);
//     countActiveTasks--;
//     countActiveNote(countActiveTasks);
//     currentItem.classList.add('hide');
// }


// function editItemOnClick(e) {

//     //alert('start edit');
//     let currentItem = getItem(e);
    
//     let nameNote=currentItem.querySelector('div.name-note');
//     let valueInput = currentItem.querySelectorAll('input#edit-mode');
//     //nameNote.innerHTML = valueInput.value;
//     for (i=0; i<valueInput.length; i++){
//         valueInput[i].classList.toggle('edit-mode');
//     }
    
//     a = valueInput[1].value;
//     nameNote.innerHTML=a;

// }


// function getItem(e) {
//     let curEl = e.currentTarget;
//     let itemPosition = curEl.dataset.position;
//     let curItem = bodyNotesBlockEl.querySelector('div.'+itemPosition);
//     return curItem;
// };
function destroyAllOnClickButton(){
    //alert('destroy all');
    //listItems=null;
    bodyNotesBlockEl.innerHTML = null;
    countArvhiveTasks = 0;
    countActiveTasks = 0;
    currentIndex = 0;
    classIndex = 0;
    listItems = null;
    destroyButtons = null; //all destroy buttons
    archiveButtons = null;
    editButtons = null;
    countActiveNote(countActiveTasks);
}

function countActiveNote(countActiveTasks) {
    let countActiveTaskEl = document.querySelector('#count-active-task');
    countActiveTaskEl.innerHTML = countActiveTasks;
}
function countArchiveNote(countArvhiveTasks) {
    let countArchiveTaskEl = document.querySelector('#count-archived-task');
    countArchiveTaskEl.innerHTML = countArvhiveTasks;
}

countActiveNote(countActiveTasks);
countArchiveNote(countArvhiveTasks);
