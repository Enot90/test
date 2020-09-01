import Vue from 'vue';

// Layouts
import C_Footer from 'src/layouts/footer/C_Footer.vue';
import C_Header from 'src/layouts/header/C_Header.vue';

// Drawers
import C_LeftDrawer from 'src/components/leftdrawer/C_LeftDrawer.vue';
import C_RightDrawer from 'src/components/rightdrawer/C_RightDrawer.vue';

// Main components
import C_MainPage from 'src/components/mainpage/C_MainPage.vue';

Vue.component('c-header', C_Header);
Vue.component('c-footer', C_Footer);
Vue.component('c-left-drawer', C_LeftDrawer);
Vue.component('c-right-drawer', C_RightDrawer);
Vue.component('c-main-page', C_MainPage);
