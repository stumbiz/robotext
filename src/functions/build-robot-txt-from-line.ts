import RobotTxt from '../types/robot-txt';
import findUserAgent from './find-user-agent';
import buildUserAgent from './build-user-agent';
import getValueFromCurrentLine from './get-value-from-current-line';

export default (robotTxt: RobotTxt, currentLine: string): RobotTxt => {
  if (currentLine.search(/^#/) > -1) {
    return robotTxt;
  }

  if (currentLine.search(/^user-agent/i) > -1) {
    robotTxt.currentAgent = getValueFromCurrentLine(currentLine);
    return robotTxt;
  }

  if (currentLine.search(/^disallow/i) > -1) {
    let userAgent = findUserAgent(robotTxt.currentAgent, robotTxt.userAgents);

    if (!userAgent) {
      userAgent = buildUserAgent(robotTxt);
      robotTxt.userAgents.push(userAgent);
    }

    userAgent.disallow.push(getValueFromCurrentLine(currentLine));
    return robotTxt;
  }

  if (currentLine.search(/^sitemap/i) > -1) {
    robotTxt.sitemaps.push(getValueFromCurrentLine(currentLine));
    return robotTxt;
  }

  return robotTxt;
};
