import normalize from './normalize';

describe('normalize | util | unit test', () => {
  it("normalizes texts' whitespaces", () => {
    const text = normalize`
      Okay\t
        \r\r\nthis is clearly not     normalized
    `;

    expect(text).toBe('Okay this is clearly not normalized');
  });  
});
