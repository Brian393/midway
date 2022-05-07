import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { TiptapVuetifyPlugin } from 'tiptap-vuetify';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  icons: {
    iconfont: 'md' // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        anchor: '#D4B842',
        black: "#000000",
        purple: "#CF00E8"
      },
    },
  },
});

Vue.use(TiptapVuetifyPlugin, {
  vuetify,
  iconsGroup: 'md'
});

export default vuetify;
