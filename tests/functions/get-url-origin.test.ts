import getUrlOrigin from '../../src/functions/get-url-origin';

describe('Pull origin from url', () => {
  it('Should get the origin url', () => {
    expect(getUrlOrigin('https://nodejs.org/api/url.html#url_url_origin')).toBe('https://nodejs.org');
  });

  it('Should return undefined if url is not valid', () => {
    expect(getUrlOrigin('url.html#url_url_origin')).toBeUndefined();
  });
});
