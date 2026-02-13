/**
 * 1. Debounce
 * - If leading=false: Run only after `delay` ms of inactivity.
 * - If leading=true: Run immediately, then ignore updates for `delay` ms.
 */
function debounce(fn, delay, option = { leading: false }) {
  let timer = null;
  let lastArgs = null;
  let lastContext = null;

  return function (...args) {
    const context = this;

    //setting bool value of the function if leading is false and timer is null call function immidiately
    const shouldCallnow = option.leading && !timer;
     
    if (shouldCallnow) {
      fn.apply(context, args);
    }

    //saving values for every keypress
    lastArgs = args;
    lastContext = context;

    //if timer has a value, clear it after the delay time
    if (timer) clearTimeout(timer);

    //when timer hits the delay time, send last arguments to the function and reset everything
    timer = setTimeout(() => 
      {
      if (!option.leading) {
        fn.apply(lastContext, lastArgs);
      }
      timer = null;
      lastArgs = lastContext = null;
      
      }, delay);

   

  }
}

/**
 * 2. Throttle
 * - Runs the function at most once every `interval` ms.
 * - Ensure the last call is also executed if it happened during the cooldown.
 */
function throttle(fn, interval) {
function throttle(fn, interval) {
  let shouldWait = false;
  let waitingArgs = null;
  const timeoutFunc = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      fn(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, interval);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    fn(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, interval);
  } 
}
}

/**
 * 3. Batcher
 * - Aggregates calls. When `limit` calls happen OR `interval` ms passed,
 *   call the underlying `fn` with ALL the collected arguments.
 *
 * @param {Function} fn - Accepts an ARRAY of arguments.
 * @param {Object} config - { limit: number, interval: number }
 */
function batcher(fn, config = { limit: 5, interval: 100 }) {
  let queue = [];
  let timer = null;

  return function (...arg) {
    queue.push(...arg);

    if (queue.length === 1) {
      timer = setTimeout(() => {
        fn(queue);
        queue = [];
        timer = null;
      }, config.interval);
    }

    if (queue.length >= config.limit) {
      clearTimeout(timer);
      fn(queue);
      queue = [];
      timer = null;
    }
  }
}

/**
 * 4. Promisify
 * - Transforms a callback-style function (err, value) into a Promise.
 */
function promisify(fn) {
  return function (...args) {
    const context = this;

    return new Promise((resolve, reject) => {
      fn.apply(context, [...args, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
        
        }
      ]);
    })
  }
}


module.exports = { debounce, throttle, batcher, promisify };
