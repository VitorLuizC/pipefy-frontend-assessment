export const ROOT_PATH = '/';

export const PIPES_PATH = '/pipes';

export const PIPE_PATH = `${PIPES_PATH}/:pipeId`;

export const PIPE_CARD_PATH = `${PIPE_PATH}/:cardId`;

// List of paths that could be taken to the pipes page.
export const PIPES_PATHS = [
  PIPES_PATH,
  PIPE_PATH,
  PIPE_CARD_PATH,
];

export const NOT_FOUND_ERROR_PATH = '/404';
