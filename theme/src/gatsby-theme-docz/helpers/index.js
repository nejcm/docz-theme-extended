export const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

export const isUrl = (str) => {
  try {
    const url = new URL(str);
    // Check if the protocol is HTTP or HTTPS to prevent XSS attacks
    // Adjust this list to your needs (e.g., you might want to allow 'ftp:' or 'mailto:')
    const allowedProtocols = ['http:', 'https:'];
    return allowedProtocols.includes(url.protocol);
  } catch (e) {
    return false;
  }
};  

export const removeSlashes = (str) => str.replace(/^\/|\/$/g, '');

export const getPublicUrl = (base, src) =>
  activeEnv !== 'development' && !isUrl(src) && base && base.length
    ? `/${removeSlashes(base)}/${removeSlashes(src)}`
    : src;
