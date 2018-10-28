const fn = require('./index.js');

describe('index.js test', () => {
  test('The values are the same', () => {
    // given
    const questions = [1, 2, 5, 7];

    // when
    const answers = questions.map(fn);

    // then
    const expects = [4, 16, 88, 172];
    for (let i = 0; i < expects.length; i += 1) {
      expect(answers[i]).toBe(expects[i]);
    }
  });
});
