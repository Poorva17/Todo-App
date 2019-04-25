import React from 'react'
import {VisibilityFilters} from "../constants/visibilityFilters";

export default React.createContext({
    todos: [],
    visibilityFilter: VisibilityFilters.SHOW_ALL
})
