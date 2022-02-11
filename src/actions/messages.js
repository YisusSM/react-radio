import { types } from "../types/types"

export const loadMessages=(messages)=>({
    type:types.messageLoad,
    payload:messages
})
export const clearMessages=()=>({
    type:types.clearMessages
})