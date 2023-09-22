import { MenuItem } from '@material-tailwind/react';
import { ConfigSize } from '../../types';
import Text from './Text';


interface FilterDropDownItemProps {
  value?: string;
  fontSize?: ConfigSize;
  onClick?: () => void;
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
    >
      <Text onClick={() => {
        if (onClick) {
          onClick();
        }
      }}>{value}</Text>
    </MenuItem>

  );
};

export default FilterDropDownItem;
