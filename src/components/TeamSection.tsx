import React from 'react';
import styles from './TeamSection.module.css';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Ganesh Lagad',
      role: 'CEO',
      bio: 'Visionary leader driving innovation and strategic growth.',
      image: '/team/ganesh.svg'
    },
    {
      name: 'Kuber Surve',
      role: 'CFO',
      bio: 'Financial strategist ensuring sustainable business growth.',
      image: '/team/kuber.svg'
    },
    {
      name: 'Vedanth Choudhary',
      role: 'MD',
      bio: 'Operations expert optimizing business processes.',
      image: '/team/vedanth.svg'
    },
    {
      name: 'Afzal Khan',
      role: 'CTO',
      bio: 'Technology innovator leading digital transformation.',
      image: '/team/afzal.svg'
    }
  ];

  return (
    <section className={styles['team-section']}>
      <div className="section-content">
        <h2 className="section-title">Our Leadership Team</h2>
        <div className={styles['team-grid']}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles['team-card']}>
              <div className={styles['team-member-image']}>
                <img src={member.image} alt={member.name} />
              </div>
              <h3 className={styles['team-member-name']}>{member.name}</h3>
              <p className={styles['team-member-role']}>{member.role}</p>
              <p className={styles['team-member-bio']}>{member.bio}</p>              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;