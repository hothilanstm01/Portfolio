import { Route, Switch } from 'react-router'
import { ThemeProvider } from 'styled-components'
import Main  from './components/Main'
import AboutPage  from './components/AboutPage'
import WorkPage  from './components/WorkPage'
import MySkillsPage  from './components/MySkillsPage'
import { lightTheme } from './components/Themes'
import GlobalStyle from './globalStyle'
import ContactPage from './components/ContactPage'
import ProjectsPage from './components/ProjectsPage'

function App() {
  return <>

  <GlobalStyle />

    <ThemeProvider theme={lightTheme}>

      <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/project" component={ProjectsPage}/>
          <Route exact path="/work" component={WorkPage}/>
          <Route exact path="/skills" component={MySkillsPage}/>
          <Route exact path="/contact" component={ContactPage}/>
      </Switch>

    </ThemeProvider>
    </>
    
}

export default App

