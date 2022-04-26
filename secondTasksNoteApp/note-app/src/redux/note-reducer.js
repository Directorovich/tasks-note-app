let initialState = {
    notes: [
        {id:1, noteName: 'Read', createDate: '01.02.2020}', category: "Task", content:'', endDate:'05.05.2022'},
        {id:2, noteName: 'Write', createDate: '01.02.2020}', category: "Task", content:'', endDate:'05.05.2022'},
        {id:3, noteName: 'Listen', createDate: '01.02.2020}', category: "Task", content:'', endDate:'05.05.2022'},
        {id:4, noteName: 'Work', createDate: '01.02.2020}', category: "Task", content:'', endDate:'05.05.2022'},
        
    ]
}

const noteReducer = (state = initialState, action) => {
    return state
}
export default noteReducer;