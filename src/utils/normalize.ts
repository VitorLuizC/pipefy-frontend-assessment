const SEQUENCE_OF_WHITESPACES = /\s+/g;

/** A tagged template that normalizes texts' whitespaces. */
function normalize(strings: TemplateStringsArray): string {
  return strings.join(' ').replace(SEQUENCE_OF_WHITESPACES, ' ').trim();
}

export default normalize;
