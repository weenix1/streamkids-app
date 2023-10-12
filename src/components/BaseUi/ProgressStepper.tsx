import React from 'react';
import { ConfigBackGroundValues, ConfigColor, ConfigSize } from '../../types';
import Box from './Box';

interface ProgressStepperProps {
  size?: ConfigSize;
  status?: ConfigColor;
  percentage?: number;
  dataTestId?: string;
  width?: ConfigSize;
}

const ProgressStepper: React.FC<ProgressStepperProps> = ({
  size = 'xs',
  percentage = 0,
  status = 'light_yellow',
  dataTestId = '',
  width = 'xs',
}) => {
  const sizeMap: Record<ConfigSize, string> = {
    xs: 'h-0.5',
    sm: 'h-1',
    md: 'h-1.5',
    lg: 'h-2',
    xl: 'h-3',
    '2xl': 'h-4',
  };

  const widthMap: Record<ConfigSize, string> = {
    xs: 'w-40',
    sm: 'w-27',
    md: 'w-69',
    lg: 'w-72',
    xl: 'w-full',
    '2xl': 'w-screen',
  };

  const statusColor = `${ConfigBackGroundValues[status]}`;
  const customGrayColor = 'bg-stream_white';

  const progressBarClasses = `flex flex-start overflow-hidden w-full font-sans rounded-full text-xs font-medium ${sizeMap[size]}`;

  const coveredWidth = percentage > 100 ? 100 : percentage;

  // ${widthMap[width]}

  return (
    <Box className={`gap-1 border rounded-full ${widthMap[width]}`} data-testid={dataTestId}>
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
