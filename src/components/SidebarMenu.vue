<template>
  <div class="sidebar-page">
    <section class="sidebar-layout is-flex sidebar-editor">
      <b-sidebar
        position="static"
        :mobile="mobile"
        :expand-on-hover="expandOnHover"
        :reduce="reduce"
        :delay="expandWithDelay ? 500 : null"
        type="is-light" open>
        <div class="p-1">
          <div class="block">
          <ProfileUser :reduce="reduce"/>
          </div>
          <b-tag class="reduce-button"
            rounded
            @click="reduce = !reduce">
            <b-icon :icon="reduce ? 'chevron-right' : 'chevron-left'" />
          </b-tag>
          <b-menu class="is-custom-mobile">
            <div class="hr"></div>
            <b-menu-list :label="reduce ? '' : 'Ferramentas'">
              <b-menu-item icon="home-variant-outline" label="Inicio"></b-menu-item>
              <b-menu-item
                icon="card-account-details-outline"
                label="Consultório">
              </b-menu-item>
              <b-menu-item icon="home-city-outline" label="Clinicas"></b-menu-item>
              <b-menu-item
                icon="monitor"
                label="Painel de atendimentos">
            </b-menu-item>
          </b-menu-list>
            <div class="hr"></div>
            <b-menu-list :label="reduce ? '' : 'Outros'">
              <b-menu-item icon="bell-outline" label="Notificações"></b-menu-item>
              <b-menu-item icon="help-circle-outline" label="Central de ajuda"></b-menu-item>
              <b-menu-item icon="cog-outline" label="Configurações"></b-menu-item>
              <b-menu-item icon="arrow-left-thin" label="Sair  "></b-menu-item>
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
      reduce: false,
    };
  },
};
</script>
<style lang="scss">
.hr {
  width: 100%;
  border-bottom: 1px solid #dfdfdf;
}
.reduce-button {
  position: absolute;
  background-color: red;
}
@media screen and (max-width: 1023px) {
    .b-sidebar {
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
