import React from 'react'

function SuccessBlock() {
  return (
    <div className="center success-content">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>ic_check_circle_48px</title>
          <g className="nc-icon-wrapper" fill="#4caf50">
            <path d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z"/>
          </g>
        </svg>
        <div className="success-block">
        Logged In Successfully
        </div>
      </div>
    </div>
  )
}

export default SuccessBlock;