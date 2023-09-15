import React, { PropsWithChildren } from 'react';
import { Menu, MenuList, MenuHandler } from '@material-tailwind/react';


export const FilterDropDown: React.FC<
  PropsWithChildren<{
    root?: React.ReactNode;
  }>
> = ({ children, root }) => {
  return (
    <Menu placement="bottom">
      <MenuHandler>
        <div>{root}</div>
      </MenuHandler>
      <MenuList>{children}</MenuList>
    </Menu>
  );
};

export default FilterDropDown;
