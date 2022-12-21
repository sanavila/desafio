<template>
  <div class="wrapper">
    <BreadCrumb class="grid-crumb"/>
    <DateDescription class="grid"/>
    <TabsUserConfig class="grid-tabs"/>
    <SidebarMenu class="sidebar-menu"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarMenu from '@/components/SidebarMenu.vue';
import BreadCrumb from '@/components/BreadCrumb.vue';
import DateDescription from '@/components/DateDescription.vue';
import TabsUserConfig from '@/components/TabsUserConfig.vue';

export default {
  name: 'HomeView',
  components: {
    SidebarMenu,
    BreadCrumb,
    DateDescription,
    TabsUserConfig,
  },
};
</script>
<style lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: 11fr 1fr;
  grid-template-rows: 15vh 85vh;
}

.sidebar-menu {
grid-column-start: 1;
grid-row: 1;
}

.grid-crumb {
  grid-column-start: 1;
  grid-row: 1;
}

.grid-tabs {
  grid-row: 2;
}
</style>
