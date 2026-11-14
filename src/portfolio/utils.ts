export interface TypingState {
  wordIndex: number;
  position: number;
  deleting: boolean;
  pause: number;
}

export function advanceTypingState(
  state: TypingState,
  words: readonly string[],
  pauseLength = 15,
): TypingState {
  if (words.length === 0) return state;

  let { wordIndex, position, deleting, pause } = state;
  const word = words[wordIndex];

  if (!deleting && position === word.length) {
    pause += 1;
    if (pause === pauseLength) {
      deleting = true;
      pause = 0;
    }
  } else if (deleting && position === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  if (pause === 0) position += deleting ? -1 : 1;
  return { wordIndex, position, deleting, pause };
}
