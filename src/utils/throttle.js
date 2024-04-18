/** @format */

export function throttle(func, wait) {
  let timeout;
  let lastCalledTime = 0;

  return function (...args) {
    const now = Date.now();
    const timeSinceLastCall = now - lastCalledTime;
    const timeToWait = wait - timeSinceLastCall;

    if (timeToWait <= 0) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      lastCalledTime = now;
      func.apply(this, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        lastCalledTime = Date.now();
        func.apply(this, args);
        timeout = null;
      }, timeToWait);
    }
  };
}
