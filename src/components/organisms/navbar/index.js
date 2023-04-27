import React from 'react';
import BrandLogo from '../../atoms/brandLogo';
import SearchField from '../../molecules/seachField';

function Navbar() {
  return (
    <div className="flex justify-between p-1">
      <BrandLogo />
      <SearchField />
    </div>
  );
}

export default Navbar;
