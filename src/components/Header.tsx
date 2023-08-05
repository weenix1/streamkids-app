import React from 'react';
import StreamkidsLogo from '../assets/logos/Streamkids-logo4.png';

function Header() {
  return (
    <header className="bg-transparent">
      <nav className="h-14 flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="shrink-0">
          <div>
            <img className="h-8 w-auto img-fluid" src={StreamkidsLogo} alt="StreamKids logo" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
