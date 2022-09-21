import React from 'react'
import Create from './pages/Create'
import Contacts from './pages/Contacts'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { purple } from '@material-ui/core/colors'
import {createMuiTheme,ThemeProvider} from '@material-ui/core'

const theme = createMuiTheme({
  typography:{
    fontFamily:'Quicksand',
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700,
  }
})

export default function App(){
  return(
    <ThemeProvider>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Contacts/>
        </Route>
        <Route path='/create'>
          <Create/>
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  )
}