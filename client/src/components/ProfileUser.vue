<template>
  <section class="is-flex">
    <img src="" alt="img">
    <div v-if="!reduce" class="is-flex is-justify-content-space-between flex-1">
      <section class="pl-2">
        <h4>User Name</h4>
        <p>Profission</p>
      </section>
      <b-dropdown position="is-bottom-left">
        <template #trigger>
          <span v-if="!reduce">
            <b-icon icon="chevron-down"></b-icon>
          </span>
        </template>
        <div class="tooltip">
          <b-dropdown-item
            class="has-text-white tooltip-hover pr-5 pl-5">
            Visualizar perfil
          </b-dropdown-item>
          <b-dropdown-item
           class="has-text-white tooltip-hover pr-4 pl-5">
           Sair da conta
          </b-dropdown-item>
        </div>
      </b-dropdown>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ProfileUser',
  props: {
    reduce: {
      type: Boolean,
      require: true,
    },
  },
};
</script>
<style lang="scss">
div:has(> .tooltip) {
  background-color: #575757;
  border-radius: 5px;
  width: min-content;
  margin-left: auto;
}
.tooltip-hover {
  text-align: end;
  &:hover {
    background-color: #575757 !important;
  }
}
</style>
