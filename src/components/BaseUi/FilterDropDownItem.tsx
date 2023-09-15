import { MenuItem } from '@material-tailwind/react';
import { ConfigSize } from '../../types';
import Text from './Text';


interface FilterDropDownItemProps {
  age?: string;
  fontSize?: ConfigSize;
  onClick?: () => void;
}

const FilterDropDownItem = ({
  age = '2',
  fontSize = 'md',
  onClick,
}: FilterDropDownItemProps) => {
  return (
    <MenuItem
      key={age}
      className={`p-0 flex justify-between items-center gap-3 text-${fontSize}`}
    >
      <Text onClick={() => {
        if (onClick) {
          onClick();
        }
      }}>{age}</Text>
    </MenuItem>

  );
};

export default FilterDropDownItem;
