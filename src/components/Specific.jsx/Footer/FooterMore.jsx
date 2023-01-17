import React from 'react'

const FooterMore = (props) => {
  return (
    <div className={`${props.className}`}>
      <div className={`${props.className}`}>
      <h4 className="font-weight-light">More</h4>
      <ul className='footer-card-list'>
        <li>Give</li>
        <li>News</li>
        <li>Privacy</li>
        <li>Terms</li>
      </ul>
    </div>
    </div>
  )
}

export default FooterMore