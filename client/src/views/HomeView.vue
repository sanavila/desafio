<template>
  <div class="wrapper">
    <BreadCrumb class="grid-bread"/>
    <TabsUserConfig class="grid-tabs"/>
    <SidebarMenu class="sidebar-menu"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarMenu from '@/components/SidebarMenu.vue';
import BreadCrumb from '@/components/BreadCrumb.vue';
import TabsUserConfig from '@/components/TabsUserConfig.vue';

export default {
  name: 'HomeView',
  components: {
    SidebarMenu,
    BreadCrumb,
    TabsUserConfig,
  },
};
</script>
<style lang="scss">

.wrapper {
  display: grid;
  grid-template-columns: 85px 1fr;
  grid-template-rows: 86px auto;
}

.grid-bread {
  grid-row: 1;
  grid-template-rows: 15vh;
}

.sidebar-menu {
grid-column: 1;
grid-row: 1/3;
}

.grid-tabs {
  grid-row-start: 2;
}
</style>
