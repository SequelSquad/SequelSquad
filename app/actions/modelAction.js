//ACTION TYPE
export const SET_MODEL = "SET_MODEL"
export const ADD_TABLE = "ADD_TABLE"
export const REMOVE_MODEL = "REMOVE_MODEL"
export const ADD_COLUMN = "ADD_COLUMN"
export const REMOVE_ALL_MODELS = "REMOVE_ALL_MODELS"
// export const REMOVE_MODEL = "REMOVE_MODEL"

//ACTION CREATOR
export const setModel = model => ({type: SET_MODEL, model})
export const addTable = table => ({type: ADD_TABLE, table})
export const removeModel = modelID => ({type: REMOVE_MODEL, modelID})
export const removeAllModels = () => ({type: REMOVE_ALL_MODELS})






