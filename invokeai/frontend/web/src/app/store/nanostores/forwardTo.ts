import { atom } from 'nanostores';

/**
 * The Server ip to connect to.
 */
export const $forwardTo = atom<string | undefined>();
