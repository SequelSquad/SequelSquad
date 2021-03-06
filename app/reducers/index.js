// @flow
import { combineReducers } from "redux"
import { routerReducer as router } from "react-router-redux"
import counter from "./counter"
import addModel from "./addModel"
import currentModal from "./modals"
import models from "./models"
import lines from "./lines"
import currRect from "./currRect"
import path from "./path"
import theme from "./theme"
import databases from "./initDb"
import currDB from "./currDB"
import queryResult from "./Query"


const rootReducer = combineReducers({
	counter,
	router,
	addModel,
	models,
	currentModal,
	lines,
	currRect,
	path,
	theme,
	databases,
	currDB,
	queryResult
})

export default rootReducer
