// pages/index.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Your portfolio description goes here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 ">
          Welcome to my {' '}
          <Link href="/portfolio" className='cursor-pointer'>
          Portfolio
          </Link>{' '}
        
        </h1>

        <p className="text-lg mb-8">
          Explore my work and get to know more about me.
        </p>

        <div className=" flex gap-4">
          {/* Add your projects or portfolio items here */}
          <div className="bg-white p-4 rounded-md shadow-md w-auto text-wrap">
            <h3 className="text-xl font-semibold mb-2 ">Zero Trust Security</h3>
            <p className=''> This project is based on react Technology in front end and Express and MongoDB in Back end.
The project deals with all sorts of identity access management related fields and includes SSO type,provisioning and creating assessments and reports along with riskfactors along with the crud functionality.
</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Zero Trust Platform Assesment</h3>
            <p>This  project is based on Nextjs 13  and Tailwind css in front end and next server in backend with prisma as databse ORM  and Mongo DB. The project deals with all sorts of identity access management related fields and includes SSO type,provisioning and creating assessments and reports along with model questionaaire and categories  along with the crud functionality. </p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </main>

      <footer className="mt-8">
        <p className="text-gray-500">© {new Date().getFullYear()} Ankit Kumar Sah</p>
      </footer>
    </div>
  );
}
