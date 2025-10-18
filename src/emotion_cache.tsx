import createCache from '@emotion/cache';

const CreateEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

export default CreateEmotionCache;