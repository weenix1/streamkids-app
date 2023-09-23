import { FunctionComponent, PropsWithChildren } from 'react';
import Text from './Text';
import Divider from './Divider';

type CaseGroupProperties = {
  title?: string;
  col?: boolean;
};

export const CaseGroup: FunctionComponent<
  PropsWithChildren<CaseGroupProperties>
> = ({ title, children, col = false }) => (
  <>
    {title && (
      <div>
        <Text color='light_gray'>{title}</Text>
      </div>
    )}
    <div className={`flex ${col ? 'flex-col' : 'flex-row'} flex-wrap py-5`}>
      {children}
    </div>
    <div className="py-2">
      <Divider />
    </div>
  </>
);
