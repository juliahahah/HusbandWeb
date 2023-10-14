import { createApp } from 'vue'
import '../src/assets/style/normal.css'
import '../src/assets/style/tailwind.css'
import '../src/assets/style/output.css'
import App from './App.vue'

createApp(App).mount('#app')

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
      App
  }
})
  
  