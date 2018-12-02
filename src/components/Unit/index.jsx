import React, { Component } from 'react'
import { Link } from 'gatsby'
import './style.scss'

const LinkTo = ({ to, children }) => {
  const internal = /^\/(?!\/)/.test(to)
  if (!internal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link to={to}>
      {children}
    </Link>
  )
}

class Unit extends Component {
  render() {
    return (
      <div className="unit">
        <LinkTo to={this.props.link}>
          <div
            className="unit__image"
            style={{
              backgroundImage: `url(${this.props.image})`,
              backgroundColor: this.props.color,
              backgroundSize: this.props.imageSize || 'contain',
            }}
          />
        </LinkTo>
        <div className="unit__line1">
          {this.props.line1}
        </div>
        <div className="unit__line2">
          {this.props.line2}
        </div>
        <div className="unit__line3">
          {this.props.line3}
        </div>
        <div className="unit__description">
          {this.props.description}
        </div>
      </div>
    )
  }
}

export default Unit
