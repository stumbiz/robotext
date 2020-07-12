import { UserAgent } from '../types/user-agent';
import RobotTxt from '../types/robot-txt';

export default (robotTxt: RobotTxt): UserAgent => {
  const userAgent: UserAgent = { name: '*', disallow: [] };

  if (robotTxt.currentAgent) {
    userAgent.name = robotTxt.currentAgent;
  }

  return userAgent;
};
