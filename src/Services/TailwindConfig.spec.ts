import { ConfigColor, ConfigColorValues } from '../types';
import LayoutS from './LayoutS';
import LogS from './LogS';

describe('Tailwind CSS config', () => {
  it('should have service colors present inside the actual Tailwind CSS config', () => {
    // Get the differences in configured colors from the default Tailwind CSS configuration
    const deltaConfiguredTWColors = LayoutS.getConfigDeltaFromDefaultTWOfSubset('colors');

    // Get the actual Tailwind CSS colors configuration
    const actualTWColors = LayoutS.getTailwindSelectedConfig().colors;

    // Log the differences in configured colors for debugging
    LogS.debug('Configured Tailwind CSS Colors:', deltaConfiguredTWColors);

    // Ensure each configured color key is present in the actual Tailwind CSS colors
    for (const configuredColorKey of Object.keys(deltaConfiguredTWColors)) {
      expect(actualTWColors).toHaveProperty(configuredColorKey);
    }

    // Ensure that there are configured colors
    expect(Object.keys(deltaConfiguredTWColors).length > 0).toBe(true);

    // Ensure the number of configured colors matches the expected count
    expect(Object.keys(deltaConfiguredTWColors).length === ConfigColorValues.length).toBe(true);

    // Check if each configured color is a valid color type
    for (const actualConfigKey of Object.keys(deltaConfiguredTWColors)) {
      const configKeyOnType = actualConfigKey.split(`${LayoutS.STREAM_TW_MARKER}`)[1];
      expect(ConfigColorValues.includes(configKeyOnType as ConfigColor)).toBe(true);
    }
  });
});
