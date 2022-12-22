<template>
  <section>
    <!-- Succeeds -->
    <b-breadcrumb separator="has-succeeds-separator pb-0 mb-0">
      <b-breadcrumb-item href="/">Home</b-breadcrumb-item>
      <b-breadcrumb-item href="/documentation">Inicio</b-breadcrumb-item>
      <b-breadcrumb-item href="/documentation/breadcrumb" active>Perfil</b-breadcrumb-item>
    </b-breadcrumb>
    <DateDescription />
    <div class="hr"></div>
  </section>
</template>

<script>
import DateDescription from './DateDescription.vue';

export default {
  name: 'BreadCrumb',
  components: { DateDescription },
};
</script>
<style scoped>
.hr {
  width: 100%;
  border-bottom: 1px solid #dfdfdf;
}
</style>
