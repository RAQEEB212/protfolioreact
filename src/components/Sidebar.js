import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

function Sidebar() {
    return (
        <div className="sidebar" style={{ backgroundColor: '#f8f9fa', position: 'fixed', left: 0, top: 0, bottom: 0, width: '250px' }}>
            <div className="profile">
                <h3>Your Name</h3>
                <p>Web Developer</p>
            </div>
            <ul className="sidebar-links">
                <li>
                    <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                        <span>GitHub</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/your-instagram-username/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                        <span>Instagram</span>
                    </a>
                </li>
            </ul>
            <Button variant="primary" size="lg" block href="/path/to/your-cv.pdf" download>
                <FontAwesomeIcon icon={faFileDownload} />
                <span>Download CV</span>
            </Button>
        </div>
    );
}

export default Sidebar;
