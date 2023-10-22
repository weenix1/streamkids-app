import { MenuItem } from '@material-tailwind/react';
import { ConfigSize } from '../../types';
import Text from './Text';


interface FilterDropDownItemProps {
  value?: string;
  fontSize?: ConfigSize;
  onClick?: (e: any) => void;
}

const FilterDropDownItem = ({
  value = '2',
  fontSize = 'md',
  onClick,
}: FilterDropDownItemProps) => {
  return (
    <MenuItem
      key={value}
      value={value}
      className={`p-0 flex justify-between items-center gap-3 text-${fontSize}`}
      onClick={(e) => onClick && onClick(e)}
    >
      <Text >{value}</Text>
    </MenuItem>

  );
};

export default FilterDropDownItem;
