import TestApp from './components/TestApp.vue'

// Install the components
export function install(Vue) {
  Vue.component('testApp', TestApp)
  /* -- Add more components here -- */
}

// Expose the components
export {
  TestApp,
  /* -- Add more components here -- */
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: VERSION,
  install,
}

export default plugin;

// Auto-install
// Vue.use(plugin);
