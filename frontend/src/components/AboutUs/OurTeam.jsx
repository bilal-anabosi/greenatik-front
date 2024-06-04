// OurTeam.js
import React from 'react';
import './About.css';
import TeamList from './TeamList';

function OurTeam() {
  const teamMembers = [
    {
      name: 'Bilal Anabosi',
      facebook: 'https://www.facebook.com/bilal.anabosi',
      image: '/pics/teamimg/tt1.png',
    },
    {
      name: 'Toqa Asidah',
      facebook: 'https://www.facebook.com/profile.php?id=100004664898147',
      image: '/pics/teamimg/tt2.png',
    },
    {
      name: 'Sana Saleh',
      facebook: 'https://www.facebook.com/profile.php?id=100009260106763',
      image: '/pics/teamimg/tt3.png',
    },
    {
      name: 'Roaa Kittaneh',
      facebook: 'https://www.facebook.com/roaa.kittaneh.3',
      image: '/pics/teamimg/tt4.png',
    },
    {
      name: 'Abdellatif Shtayeh',
      facebook: 'https://www.facebook.com/abboudqshtayeh',
      image: '/pics/teamimg/tt5.png',
    },
    {
      name: 'Nora Sarrawi',
      facebook: 'https://www.facebook.com/Norazzzz',
      image: '/pics/teamimg/tt6.png',
    },
    {
      name: 'Eman Rayyan',
      facebook: 'https://www.facebook.com/eman.rayan.98',
      image: '/pics/teamimg/tt7.png',
    },
    {
      name: 'Ebrahim Bileh',
      facebook: 'ebrahimbileh21@gmail.com',
      image: '/pics/teamimg/tt8.png',
    }
  ];


  return (
    <div className='container'>
    <div className='ZZ'>
        <section className="team social-hover team-overlay pb-0">
          <div className="row">
            <div className="col-12 col-lg-8 mx-auto">
              <div className="title text-center">
                <h2>Our Leadership</h2>
              </div>
            </div>
          </div>
          <TeamList teamMembers={teamMembers} />
          <div className="row">
            <div className="col-12 col-lg-8 mx-auto text-center mt-5">
              <br/><br/><br/>
              <h6>For more information, please contact us at (contact information) or follow us on (social media links).</h6>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurTeam;
