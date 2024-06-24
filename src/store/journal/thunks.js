export const startNewNote = () => {
    return async (dispatch, getState) => {
        //uid
        console.log(getState());
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };
        //dispatch(newNote)
        //dispatch(activarNote)
    };
};
