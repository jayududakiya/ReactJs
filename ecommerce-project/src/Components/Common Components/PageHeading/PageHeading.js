import React from 'react'

import './PageHeading.css'
function PageHeading({pageTitle,goBackLink}) {
  return (
    <div className="PageHeading-wrapper">
        {/* background */}
        <div className="sm:container PageHeading-link mx-auto flex flex-col items-start justify-center">
        
          <ul className="Nave-GetLinks flex items-center mb-2.5">

            <li>
              <a className="back-Link transition-all  flex items-center justify-center" href="#">{goBackLink}</a>
            </li>

            <li>
              <p className="PgTitle-text flex items-center justify-center">{pageTitle}</p>
            </li>

          </ul>

          <h1 className="PgTitle" >{pageTitle}</h1>

        </div>

    </div>
  )
}

export default PageHeading
