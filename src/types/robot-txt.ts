import { UserAgent } from './user-agent';

export default interface RobotTxt {
  userAgents: UserAgent[];
  sitemaps: string[];
  [index: string]: any;
}
