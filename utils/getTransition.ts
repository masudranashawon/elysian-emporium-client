export const getTransition = (
  delay: number = 0,
  duration: number = 1,
  ease: string = "easeInOut"
) => {
  return { ease, duration, delay };
};
