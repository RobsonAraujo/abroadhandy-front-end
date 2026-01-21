/**
 * Re-export sendGAEvent from @next/third-parties/google
 * This ensures we use the optimized Next.js implementation,
 * also is helpful in case we need to change the implementation later.
 */
export { sendGAEvent } from '@next/third-parties/google';
