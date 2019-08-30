import React from 'react'
import * as URL from 'constants/url'
import './Footer.scss'

const footerLinks = [  
]

const Footer = () => (
  <footer className="Footer">
    <div className="Footer__inner">
      <ul className="Footer__linkBox">
        {
          footerLinks.map(({ title, link }) => (
            <li className="Footer__link" key={title}>
              <a
                href={link}
                target="_blank"
                rel="noreferrer noopener"
              >
                {title}
              </a>
            </li>
          ))
        }
      </ul>
      <div className="Footer__copyright">&copy; 2019 Samanda</div>
    </div>
  </footer>
)

export default Footer
