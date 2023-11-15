import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  )
}

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated')

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default App

