import { createApp } from 'vue'
import '../src/assets/style/normal.css'
import '../src/assets/style/tailwind.css'
import '../src/assets/style/output.css'
import App from './App.vue'

createApp(App).mount('#app')


Vue.component('my-component', {
    data() {
      return {
        showDropdown: false
      };
    },
    // 其它组件选项，比如methods、computed等
  });
  