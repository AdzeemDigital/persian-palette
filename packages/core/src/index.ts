/**
 * @persian-palette/core
 * Persian-inspired digital palettes with reference color math and explicit provenance.
 * Version 3.0.0
 */

// Export Data & Tokens
export * from './tokens/palettes.js';

// Export Types
export * from './types/token.js';
export * from './types/evidence.js';
export * from './types/palette.js';
export * from './types/index.js';

// Export Discovery Engine
export * from './engine.js';

// Export Math & Color Science Engines
export * from './math/oklab.js';
export * from './math/apca.js';
export * from './math/spectral.js';
export * from './math/color-mixing.js';
export * from './math/hct.js';

// Export Multi-Platform Exporters
export * from './exporters/w3c.js';
export { exportW3CTokens as exportToW3CTokens } from './exporters/w3c.js';
export * from './exporters/figma.js';
export * from './exporters/tailwind.js';

export * from './version.js';
export * from './exporters/platforms.js';
