import React from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'

@inject('account')
@observer
class Menu extends React.Component {
  render() {
    const { account } = this.props
    return <div>
      {account.isLoggedIn() ? <LoggedInMenu/> : <LoggedOutMenu/>}
    </div>
  }
}

function LoggedInMenu() {
  return <menu>
    <Link to="/">Browse</Link>
    <Link to="/page/about">About</Link>
    <Link to="/page/logout">Logout</Link>
  </menu>
}

function LoggedOutMenu() {
  return <menu>
    <Link to="/">Browse</Link>
    <Link to="/page/about">About</Link>
    <Link to="/page/register">Register</Link>
    <Link to="/page/login">Login</Link>
  </menu>
}

export default Menu
