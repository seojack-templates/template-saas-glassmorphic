/**
 * Scoped CSS for the saas-glassmorphic template.
 * EVERY selector must be prefixed with ".saas-glassmorphic-demo" so the styles
 * cannot leak (this matters when the source is seeded into the builder).
 */
export const SAAS_GLASSMORPHIC_CSS = `
.saas-glassmorphic-demo {
    --ink: #14141a;
    --paper: #ffffff;
    font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
    color: var(--ink);
    background: var(--paper);
}
.saas-glassmorphic-demo * { box-sizing: border-box; }
.saas-glassmorphic-demo h1 { font-size: clamp(2rem, 5vw, 3.5rem); margin: 0 0 1rem; }
`;