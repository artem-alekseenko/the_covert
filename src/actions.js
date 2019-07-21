import { ADD_COMMENT_BEGIN, ADD_COMMENT_SERVER, ADD_COMMENT_END } from "./actionTypes";


export const addCommentBegin = (comment, employee) => ({
    type: ADD_COMMENT_BEGIN,
    comment,
    employee
})

export const addCommentServer = (comment) => ({
    type: ADD_COMMENT_SERVER,
    comment
})

export const addCommentEnd = (comment) => ({
    type: ADD_COMMENT_END,
    comment
})