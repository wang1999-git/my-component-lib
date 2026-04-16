import type { App } from 'vue';
import MyButton from './components/MyButton.vue';
import IconSwitch from './components/IconSwitch.vue';

export { MyButton, IconSwitch };

export default {
  install(app: App) {
    app.component(MyButton.name || 'MyButton', MyButton);
    app.component(IconSwitch.name || 'IconSwitch', IconSwitch);
  }
};
