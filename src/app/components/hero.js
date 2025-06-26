import React from 'react';
import Link from 'next/link';
import profile from '../../../public/profile.png';
import Image from 'next/image';
import './hero.css'; // Assuming you have a CSS file for styling

export default function Hero() {
   return (
      <>
         <div className="hero-container">
            <div className="hero-content">
               {/* Profile Section */}
               <div className="profile-section">
                  <div className="profile-image-wrapper">
                     <Image src={profile} alt="Uheeking" width={120} height={120} className="profile-image" />
                  </div>
               </div>

               {/* Main Content */}
               <div className="content-section">
                  <div className="text-content">
                     <p className="greeting">Nice to Meet You</p>
                     <h1 className="main-heading">
                        <span className="heading-light">I'm</span> <span className="heading-bold">Full Stack</span>
                        <br />
                        <span className="heading-bold">Developer</span> <span className="heading-accent">Uheeking</span>
                     </h1>
                     <p className="description">Building exceptional digital experiences with modern technologies</p>
                  </div>

                  <div className="action-section">
                     <Link href="/project" className="cta-link">
                        View Projects
                        <span className="arrow">→</span>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
