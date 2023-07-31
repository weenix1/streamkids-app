import React, { FunctionComponent, PropsWithChildren } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

const VerticalCard: FunctionComponent<PropsWithChildren<{ icon: string, }>> = ({ icon, children }) => {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={icon}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>

    </Card>
  );
}

export default VerticalCard;