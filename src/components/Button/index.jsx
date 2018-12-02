import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

const Button = ({ link, title }) => (
  <a href={link} className="btn btn-primary btn-2h" target="_blank" rel="noopener noreferrer"><i className="icon-link-ext" />&nbsp;{title}</a>
)

export default Button
