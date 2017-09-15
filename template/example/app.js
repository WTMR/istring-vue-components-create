// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { TestApp } from '../dist/{{ name }}'
import '../dist/{{ name }}.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<div><TestApp/></div>',
  components: { TestApp }
})