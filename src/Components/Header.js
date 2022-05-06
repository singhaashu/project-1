import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Task</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" >
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Weather <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to='/calculator'>Calculator</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to='/join'>Join</Link>
      </li>
    
    </ul>
  </div>
</nav>
      </div>
    )
  }
}

export default Header