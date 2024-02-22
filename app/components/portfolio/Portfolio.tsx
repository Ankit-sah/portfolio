import React from 'react'
import styles from '../../home.module.css'
import Head from 'next/head'

const Portfolio = () => {
  return (
    <div className={styles.container}>
    <Head>
      <title>Ankit Kumar Sah - Portfolio</title>
      <meta name="description" content="Ankit Kumar Sah's portfolio showcasing skills and projects" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>Hello! I am Ankit Kumar Sah, a Software Developer</h1>

      <p className={styles.description}>
        I have over 2 years of hands-on experience in Identity and Access Management (IAM).
        {/* Add more information about your journey, skills, and beliefs */}
      </p>

      <section className={styles.technicalSkills}>
        <h2> Technical Toolkit</h2>
        <p>
          My technical toolkit includes a wide range of programming languages like HTML5, CSS, JavaScript,
          Node.js, Express, C, C++, React JS, Next.js 13, Tailwind CSS, and Prisma. I am also well-versed in
          database management with MongoDB.
        </p>
      </section>

      <section className={styles.professionalExperience}>
        <h2>Professional Experience</h2>
        <p>
          Currently, I am a Software Developer at BeyondID, where I have been a part of projects that have expanded my horizons.
          {/* Add more details about your role, projects, and achievements at BeyondID */}
        </p>
      </section>

      <section className={styles.personalProjects}>
        <h2> Personal Projects</h2>
        <p>
          Outside of my professional roles, I have explored my creativity through various projects. From developing YelpCamp,
          a full-stack web application for campers to share experiences, to creating responsive webpages like the Random Image
          Feed and Frontend Ninja.
          {/* Add more details about your personal projects */}
        </p>
      </section>

      <section className={styles.educationAndCertifications}>
        <h2> Education and Certifications</h2>
        <p>
          I hold a Bachelor of Technology in Electronics and Communication Engineering, and my dedication to lifelong learning
          has earned me several certifications in Okta, including Okta Certified Professional, Okta Certified Developer, Okta Certified Admin,
          and Okta Certified Consultant.
          {/* Add more details about your education and certifications */}
        </p>
      </section>
    </main>

    <footer className={styles.footer}>
      <p> I am constantly seeking new opportunities to collaborate, learn, and grow in the tech field.</p>
      <p> Lets connect, share insights, and explore how we can contribute to the world of technology together.</p>
      <p>Feel free to reach out; I am eager to connect and network with fellow tech enthusiasts and professionals!</p>
    </footer>
  </div>
  )
}

export default Portfolio