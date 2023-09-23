import Text from './Text';
import { FunctionComponent, PropsWithChildren } from 'react';

type CaseProperties = {
  title?: string;
};

export const Case: FunctionComponent<PropsWithChildren<CaseProperties>> = ({
  title,
  children,
}) => (
  <div className="flex-row flex-1 py-2">
    {title && (
      <div>
        <Text color='light_gray'>{title}</Text>
      </div>
    )}
    <div className="my-1 mx-1">{children}</div>
  </div>
);
