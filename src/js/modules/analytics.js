export const createAnalytics = () => {
  let counter = 0;
  let isDestroyed = false;

  const analyticsHandler = () => {
    counter++;
  }

  document.addEventListener('click', analyticsHandler);

  return {
    destroy() {
      document.removeEventListener('click', analyticsHandler);
      isDestroyed = true;
    },

    getClicks() {
      if (isDestroyed) {
        return 'No analytics';
      }
      return counter
    }
  }
}
