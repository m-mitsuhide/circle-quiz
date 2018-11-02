const fn = require('./index.js');

describe('index.js test', () => {
  test('The values are the same', () => {
    // given
    const questions = [1, 1.7, 5, 7, 100.02651];

    // when
    const answers = questions.map(fn);

    // then
    const expects = [4, 16, 88, 172, 31852];
    for (let i = 0; i < expects.length; i += 1) {
      expect(answers[i]).toBe(expects[i]);
    }
  });
});
