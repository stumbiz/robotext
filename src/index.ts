import getUrlOrigin from './functions/get-url-origin';
import getRobotTxt from './functions/get-robot-txt';

export default (url: string) => {
  const robotTxtUrl = getUrlOrigin(url) + '/robots.txt';
  return getRobotTxt(robotTxtUrl);
};
