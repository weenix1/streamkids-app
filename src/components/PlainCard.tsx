import React from 'react';
import Title from './Title';
import Text from './Text';
import { Card, CardHeader } from '@material-tailwind/react';

interface Iprops {
  icon: string;
  title?: string;
  description?: string;
  plain?: boolean;
}

const PlainCard = ({ icon, title, description, plain }: Iprops) => {
  return (
    !plain ? (
      <div className="h-full p-6 bg-[#F6FAFD] w-full"
    style={{
      boxShadow: '14px 13px 0px 0px rgba(217,243,255,1)',
    }}
    >
  <div className="flex justify-start items-center h-full flex-col text-center">
    <img src={icon} alt="" className='py-5'/>
    <Title variant="h5">{title}</Title>
          <Text variant="normal">
          {description}
          </Text>
  </div>
</div>
    ):(
      <Card className="max-w-[32rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none max-w-full"
      >
        <img
          src={icon}
          alt="review check"
          className='w-full hover:transform hover:scale-105 transition duration-300 ease-in-out'
        />
      </CardHeader>
    </Card>
    )
  );
};

export default PlainCard;