export const LIST_ADD = "LIST_ADD"
export const LIST_DELETE = "LIST_DELETE"
export const LIST_COMPLETE = "LIST_COMPLETE"
export const LIST_INPROCESS = "LIST_INPROCESS"


export const addToList = (name) => async (dispatch) => {
    dispatch({
        type: LIST_ADD,
        payload: {
            name: name,
            complete: false,
        }
    })
}   

export const deleteFromList = (name) => async (dispatch) => {
    dispatch({
        type: LIST_DELETE,
        payload: {
            name: name,
        }
    })
}

export const addDone = (name) => async (dispatch) => {
    dispatch({
        type: LIST_COMPLETE,
        payload: {
            name: name,
            complete: true
        }
    })
} 

export const addInProcess = (name) => async (dispatch) => {
    dispatch({
        type: LIST_INPROCESS,
        payload: {
            name: name,
            complete: false
        }
    })
}   