import React from 'react';
import Text from './Text';

interface CardCarousalProps {
  children: React.ReactNode;
  title?: string;
}

function CardCarousal({ title, children }: CardCarousalProps) {
  return (
    <div>
      <Text>{title}</Text>
      <div>{children}</div>
    </div>
  );
}

export default CardCarousal;
