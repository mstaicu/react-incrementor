function composeEventHandlers(...fns) {
  return (event, ...args) =>
    fns.some((fn) => {
      fn && fn(event, ...args);
      return event.defaultPrevented;
    });
}

export { composeEventHandlers };
