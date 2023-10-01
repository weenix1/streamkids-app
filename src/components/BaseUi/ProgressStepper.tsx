import React from 'react';
import { ConfigBackGroundValues, ConfigColor, ConfigSize } from '../../types';
import Box from './Box';

interface ProgressStepperProps {
  size?: ConfigSize;
  status?: ConfigColor;
  percentage?: number;
  dataTestId?: string;
}

const ProgressStepper: React.FC<ProgressStepperProps> = ({
  size = 'xs',
  percentage = 0,
  status = 'light_yellow',
  dataTestId = '',
}) => {
  const sizeMap: Record<ConfigSize, string> = {
    xs: 'h-0.5',
    sm: 'h-1',
    md: 'h-1.5',
    lg: 'h-2',
    xl: 'h-3',
    '2xl': 'h-4',
  };

  const statusColor = `${ConfigBackGroundValues[status]}`;
  const customGrayColor = 'bg-stream_white';

  const progressBarClasses = `flex flex-start overflow-hidden w-full font-sans rounded-full text-xs font-medium ${sizeMap[size]}`;

  const coveredWidth = percentage > 100 ? 100 : percentage;

  return (
    <Box className="w-auto gap-1 border rounded-full" data-testid={dataTestId}>
      <div
        key={`progress-stepper-`}
        className="flex flex-start flex-col items-start w-full "
      >
        <div className={progressBarClasses}>
          <div
            className={statusColor}
            style={{ width: `${coveredWidth}%` }}
          ></div>
          {coveredWidth < 100 && (
            <div
              className={customGrayColor}
              style={{ width: `${100 - coveredWidth}%` }}
            ></div>
          )}
        </div>
      </div>
    </Box>
  );
};

export default ProgressStepper;
