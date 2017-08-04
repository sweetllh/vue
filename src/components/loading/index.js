const LoadingComponent = require('./Loading.vue')
const Loading = {
  install: function(Vue) {
    Vue.component('loading', LoadingComponent)
  }
}
module.exports = Loading

