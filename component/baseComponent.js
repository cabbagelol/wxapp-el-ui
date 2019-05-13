const util = require('./index.js');
export default (options = {}) => {

  options.options = {
    multipleSlots: true,
    addGlobalClass: true,
    ...options.options,
  };

  options.behaviors = [
    ...(options.behaviors = options.behaviors || []),
  ];

  options.externalClasses = [
    ...(options.externalClasses = options.externalClasses || []),
  ];

  !!options.methods ? options.methods = Object.assign(options.methods, util.util) : false;

  return Component(options);
}