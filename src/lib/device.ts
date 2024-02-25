const isMobile = () => {
  const userAgent = navigator.userAgent;
  return userAgent.match(/Android|iPhone|iPad/i);
};

export { isMobile };
