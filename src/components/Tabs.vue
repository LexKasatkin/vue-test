<template>
  <div>
    <div>
      <img  class="header" src="/src/assets/img/header.png" alt="Altair Invest"/>
    </div>

    <div class="navbar-fixed-top" id="myHeader">
      <md-tabs md-sync-route>
        <md-tab id="tab-company" md-label="О компании">
        </md-tab>
        <md-tab id="tab-flats" md-label="Квартиры">
        </md-tab>
        <md-tab id="tab-contacts" md-label="Контакты">
        </md-tab>
      </md-tabs>
    </div>
  </div>
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
  .header {
    width: 100%;
  }

  .navbar-fixed-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
</style>
