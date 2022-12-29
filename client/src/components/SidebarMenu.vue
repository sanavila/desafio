<template>
  <div class="sidebar-page">
    <section class="sidebar-layout sidebar-editor">
      <b-tag class="reduce-button" type="is-blue"
        rounded
        @click="reduce = !reduce">
        <b-icon size="is-small" :icon="reduce ? 'chevron-right' : 'chevron-left'"/>
      </b-tag>
      <b-sidebar
        position="static"
        :mobile="mobile"
        :expand-on-hover="expandOnHover"
        :reduce="reduce"
        :delay="expandWithDelay ? 500 : null"
        type="is-light" open
        class="custom-sidebar"
        >
        <div class="p-1 custom-h100">
          <div class="block">
          <ProfileUser :reduce="reduce"/>
          </div>
          <b-menu class="is-custom-mobile" :class="{hr: reduce, 'custom-text-left': !reduce}">
            <b-menu-list :label="reduce ? '' : 'Ferramentas'">
              <b-menu-item icon="home-variant-outline"
                label="Inicio"
                class="mb-2
                mt-6">
              </b-menu-item>
              <b-menu-item
                icon="card-account-details-outline"
                label="Consultório"
                class="mb-2">
              </b-menu-item>
              <b-menu-item
                icon="home-city-outline"
                label="Clinicas"
                class="mb-2">
              </b-menu-item>
              <b-menu-item
                icon="monitor"
                label="Painel de atendimentos"
                class="mb-6">
            </b-menu-item>
          </b-menu-list>
            <div class="hr"></div>
            <b-menu-list :label="reduce ? '' : 'Outros'">
              <b-menu-item
                icon="bell-outline"
                label="Notificações"
                class="mb-2 mt-6">
              </b-menu-item>
              <b-menu-item
                icon="help-circle-outline"
                label="Central de ajuda"
                class="mb-2">
              </b-menu-item>
              <b-menu-item
                icon="cog-outline"
                label="Configurações"
                class="mb-2">
              </b-menu-item>
              <b-menu-item
                icon="arrow-left-thin"
                label="Sair"
                class="mb-2">
              </b-menu-item>
            </b-menu-list>
          </b-menu>
        </div>
      </b-sidebar>
    </section>
  </div>
</template>
<script>
import ProfileUser from './ProfileUser.vue';

export default {
  name: 'SidebarMenu',
  components: {
    ProfileUser,
  },
  data() {
    return {
      expandOnHover: false,
      expandWithDelay: false,
      mobile: 'reduce',
      reduce: true,
    };
  },
};
</script>
<style scoped>
.hr {
  border-top: 1px solid #dfdfdf;
}
.custom-sidebar {
  display: flex;
  z-index: 99;
  grid-row: 1/4;
}
.sidebar-layout {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 86px 20px auto;
  height: 100%;
}
</style>
<style lang="scss">
.reduce-button {
  position: relative;
  grid-column: 2;
  grid-row: 2;
  z-index: 100;
  margin-left: -12px;
}
@media screen and (max-width: 1023px) {
    .b-sidebar {
      grid-row: 1/3;
      grid-column: 1;
        .sidebar-content {
            &.is-mini-mobile {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 1024px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
</style>
