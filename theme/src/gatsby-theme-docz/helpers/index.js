export const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

export const isUrl = (str) => {
  try {
    return Boolean(new URL(str));
  } catch (e) {
    return false;
  }
};

export const removeSlashes = (str) => str.replace(/^\/|\/$/g, '');

export const getPublicUrl = (base, src) =>
  activeEnv !== 'development' && !isUrl(src) && base && base.length
    ? `/${removeSlashes(base)}/${removeSlashes(src)}`
    : src;
