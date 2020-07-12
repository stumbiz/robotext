import buildRobotTxtFromLine from './build-robot-txt-from-line';
import RobotTxt from '../types/robot-txt';

export default async (url: string) => {
  try {
    const response = await fetch(url);

    if (response.status >= 200 && response.status < 300) {
      const robotText = await response.text();
      const chunks = robotText.split(/[\n\r]/g);

      return (chunks.reduce((accumulator: any, currentValue): any => {
        if (!(accumulator instanceof Object)) accumulator = { userAgents: [], sitemaps: [] };
        return buildRobotTxtFromLine(accumulator, currentValue);
      }) as unknown) as RobotTxt;
    }
  } catch (e) {
    console.warn(e);
  }

  return undefined;
};
