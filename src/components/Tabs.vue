<template>
  <body>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
      <div class="mdl-layout__header-row portfolio-logo-row">
                <span class="mdl-layout__title">
                    <div class="portfolio-logo"></div>
                </span>
      </div>
    </header>
    <div class="mdl-layout__header-row portfolio-navigation-row">
      <md-tabs md-sync-route class="mdl-navigation mdl-typography--body-1-force-preferred-font">
        <md-tab id="tab-company" class="mdl-navigation__link" md-label="О компании">
        </md-tab>
        <md-tab id="tab-flats" class="mdl-navigation__link" md-label="Квартиры">
        </md-tab>
        <md-tab id="tab-contacts" class="mdl-navigation__link" md-label="Контакты">
        </md-tab>
      </md-tabs>
    </div>
    <router-view></router-view>
    <md-bottom-bar></md-bottom-bar>

    <footer class="footer">
      <div class="mdl-mini-footer__left-section">
        <div class="mdl-logo">Simple portfolio website</div>
      </div>
      <div class="mdl-mini-footer__right-section">
        <ul class="mdl-mini-footer__link-list">
          <li><a href="#">Help</a></li>
          <li><a href="#">Privacy & Terms</a></li>
        </ul>
      </div>
    </footer>
  </div>
  </body>
</template>

<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import MdTabs from 'vue-material/dist/components';

  @Component({
    name: 'TabsComponent',
  })
  export default class TabsComponent extends Vue {
    MdTabs;

  }
</script>

<style scoped>

</style>
