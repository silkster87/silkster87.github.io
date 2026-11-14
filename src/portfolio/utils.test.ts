import { describe, expect, it } from 'vitest';
import { advanceTypingState } from './utils';

describe('advanceTypingState', () => {
  const words = ['Hi', 'OK'];

  it('advances while typing a word', () => {
    expect(advanceTypingState({ wordIndex: 0, position: 0, deleting: false, pause: 0 }, words))
      .toEqual({ wordIndex: 0, position: 1, deleting: false, pause: 0 });
  });

  it('waits at the end of a word before deleting', () => {
    expect(advanceTypingState({ wordIndex: 0, position: 2, deleting: false, pause: 14 }, words))
      .toEqual({ wordIndex: 0, position: 1, deleting: true, pause: 0 });
  });

  it('moves to the next word after deleting the current one', () => {
    expect(advanceTypingState({ wordIndex: 0, position: 0, deleting: true, pause: 0 }, words))
      .toEqual({ wordIndex: 1, position: 1, deleting: false, pause: 0 });
  });

  it('handles an empty word list without changing state', () => {
    const state = { wordIndex: 0, position: 0, deleting: false, pause: 0 };
    expect(advanceTypingState(state, [])).toBe(state);
  });
});
