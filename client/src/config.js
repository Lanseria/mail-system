import prefix from '../../config';

export const baseUrl = process.env.NODE_ENV === 'development' ? `//localhost:7994${prefix}` : `//api.limonplayer.cn${prefix}`;
export const options = {
  param: 'callback'
};
