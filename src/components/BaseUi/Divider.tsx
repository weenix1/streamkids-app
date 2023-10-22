import { ConfigColor } from "../../types";


const Divider: React.FC<{
  type?: 'vertical' | 'horizontal';
  color?: ConfigColor;
}> = ({ type = 'horizontal', color = 'ald_blue_light_periwinkle' }) => {
  const types = {
    horizontal: `grid grid-rows-2 divide-y divide-${color}`,
    vertical: `grid grid-cols-2 divide-x divide-${color}`,
  };
  return (
    <div className={types[type]}>
      <div />
      <div />
    </div>
  );
};

export default Divider;
