import { LIST_ADD, LIST_INPROCESS, LIST_DELETE, LIST_COMPLETE } from "../actions/listAction"


export const listAddReducer = (state = { todoList: []}, action) => {
    switch (action.type) {
        case LIST_ADD:
            const newList = action.payload
            return {
                ...state,
                todoList: [ ...state.todoList, newList ],
            }
        //cập nhật mảng todoList bằng cách sao chép(lấy) curent state
        //và thêm vào cuối một giá trị mới

        case LIST_DELETE:
            return {
                ...state,
                todoList: state.todoList.filter(x => x.name !== action.payload.name)
            }

        case LIST_COMPLETE:
            const existTaskComlete = state.todoList.find(x => x.name === action.payload.name)
            return {
                ...state,
                todoList: state.todoList.map((x) => x.name === existTaskComlete.name ? action.payload : x)
            }

        case LIST_INPROCESS:
            const existTaskProcess = state.todoList.find(x => x.name === action.payload.name)
            return {
                ...state,
                todoList: state.todoList.map((x) => x.name === existTaskProcess.name ? action.payload : x)
            }

        default:
            return state
    }
}
