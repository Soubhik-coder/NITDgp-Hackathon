import React from 'react'
import './Repocard.scss'

const Repocard = ({ name, description, language, type, color}) => {
  return (
    <div className='repocard'>
      <div className="header">
        <h3 className='name'>{name}-TDoc</h3>
        <span className="type-container">
          <span className='type'>{type}</span>
        </span>
      </div>
      <div className="language-container">
        <span className="dot-container">
        <div className="dot"></div>
        </span>
        <span className='language'>{language}</span>
      </div>
    </div>
  )
}

export default Repocard