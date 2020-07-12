import { UserAgent } from '../types/user-agent';

export default (userAgentName: string, userAgents: UserAgent[]) => {
  for (const userAgent of userAgents) {
    if (userAgent.name === userAgentName) {
      return userAgent;
    }
  }

  return undefined;
};
