import React from 'react'
import './style.scss'

class Section extends React.Component {
  render() {
    const unitsClass = this.props.unitsClass ? `section__units section__units-${this.props.unitsClass}` : 'section__units'
    return (
      <div className="section">
        <h2 className="section__title">
          {this.props.title}
        </h2>
        <div className={unitsClass}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Section
