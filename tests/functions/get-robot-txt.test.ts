import getRobotTxt from '../../src/functions/get-robot-txt';

describe('Build robot txt object', () => {
  const robotTxtString = `# robots.txt file for YouTube
# Created in the distant future (the year 2000) after
# the robotic uprising of the mid 90's which wiped out all humans.

User-agent: Mediapartners-Google*
Disallow:

User-agent: *
Disallow: /channel/*/community
Disallow: /comment
Disallow: /get_video

Sitemap: https://www.youtube.com/sitemaps/sitemap.xml`;

  const oldFetch = (global as any).fetch;
  const mockFetch = jest.fn();

  beforeEach(() => {
    (global as any).fetch = mockFetch;
  });

  afterEach(() => {
    (global as any).fetch = oldFetch;
  });

  it('Should return a robot txt object', async () => {
    expect.assertions(2);
    mockFetch.mockResolvedValueOnce({ status: 200, text: () => robotTxtString });
    const response = await getRobotTxt('https://youtube.com/robots.txt');
    expect(response?.userAgents).toEqual([
      { name: 'Mediapartners-Google*', disallow: [''] },
      { name: '*', disallow: ['/channel/*/community', '/comment', '/get_video'] },
    ]);

    expect(response?.sitemaps).toEqual(['https://www.youtube.com/sitemaps/sitemap.xml']);
  });

  it('Should return undefined if it failed to fetch', async () => {
    mockFetch.mockResolvedValueOnce({ status: 300, text: () => robotTxtString });
    const response = await getRobotTxt('https://youtube.com/robots.txt');
    expect(response).toBeUndefined();
  });
});
