import React, { ReactNode } from 'react';
import Navbar from './Navbar';

const Navbarcontent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex grow h-full overflow-auto">
        <Navbar />
        <section className="bg-neutral-100 h-full relative grow scrollbar-track-violet-200 scrollbar-thin scrollbar-thumb-violet-700 scrollbar-thumb-rounded-lg">
          {children}
        </section>
      </div>
    </div>
  );
};

export default Navbarcontent;
