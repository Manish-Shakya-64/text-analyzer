import React from 'react'
// import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div>
      <nav class="navbar bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">{props.title}</span>
  </div>
</nav>
    </div>
  )
}
// Navbar.defaultProps = {
//     title : "Payal",
//     home : "Ahmedabad",
//     link:"E-mail"
//   }
//   Navbar.propTypes = {
//     title : PropTypes.string.isRequired,
//     home : PropTypes.string.isRequired,
//     link : PropTypes.string.isRequired,
//   }