import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';
import LogS from './LogS';

const fullTWConfigWithCustomization = resolveConfig(tailwindConfig);

const STREAM_TW_MARKER = 'stream_';

const getConfigDeltaFromDefaultTWOfSubset = (configPart: 'colors') => {
  const fullConfig = fullTWConfigWithCustomization.theme?.[configPart];

  const extraConfigs: Record<string, any> = {};

  if (fullConfig) {
    for (const key in fullConfig) {
      if (key.includes(STREAM_TW_MARKER)) {
        extraConfigs[key] = fullConfig[key];
      }
    }
  }
  return extraConfigs;
};

const getCurrentTailwindConfig = () => fullTWConfigWithCustomization;

const getTailwindFullConfig = () => {
  return getCurrentTailwindConfig().theme;
};

const getTailwindSelectedConfig = () => {
  const colors = getCurrentTailwindConfig().theme?.colors;
  const fontSize = getCurrentTailwindConfig().theme?.fontSize;
  if (!colors || !fontSize) throw new Error('Tailwind theme is not defined');
  LogS.debug('Full TW config', { colors, fontSize });
  return { colors, fontSize };
};

const LayoutS = {
  getTailwindSelectedConfig,
  STREAM_TW_MARKER,
  getConfigDeltaFromDefaultTWOfSubset,
  getTailwindFullConfig,
};

export default LayoutS;
