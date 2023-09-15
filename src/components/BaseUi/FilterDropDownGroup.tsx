import { PropsWithChildren } from 'react';
import Text from './Text';

const FilterDropDownGroup: React.FC<
  PropsWithChildren<{
    title?: string;
  }>
> = ({ title, children }) => {
  return (
    <div className="pt-3">
      <Text color="white" fontSize="md" bold>
        {title}
      </Text>
      {children}
    </div>
  );
};

export default FilterDropDownGroup;
