import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

const Intro = ({ author }) => {
  return (
    <div className="intro">
      <div className="intro__hello">Hi! I'm <strong>{author.name}!</strong></div>
      <div className="intro__lead">Leader in civic data and its many uses with 10+ years experience in data management, analysis, visualization, and engineering. I helped build <a href="https://datasf.org">DataSF</a> into a world-recognized program empowering use of San Francisco's data.</div>
    </div>
  )
}

export default Intro
