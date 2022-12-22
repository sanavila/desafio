<template>
  <section>
    <div class="is-flex is-align-items-center p-4">
      <b-button class="pl-1"
        icon-left="arrow-left-thin"
        type="is-ghost"
        size="is-medium">
      </b-button>
      <h2 class="pl-2">Configurações de perfil</h2>
    </div>
    <b-tabs v-model="activeTab" :multiline="multiline" :animated="false" class="custom-p-less">
      <template v-for="tab in baseTabs">
        <b-tab-item v-if="tab.displayed" :key="tab.id" :value="tab.id" :label="tab.label">
          <div class="columns">
            <div class="column is-6 py-5 has-text-left">
              <h2 class="has-text-weight-semibold">
                Informações pessoais
              </h2>
              <h3>{{ tab.description }}</h3>
            </div>
            <div class="column is-1 is-offset-5 is-align-self-center">
              <b-button type="is-info">
                Editar
              </b-button>
            </div>
          </div>
          <component :is="tab.content"></component>
        </b-tab-item>
      </template>
    </b-tabs>
  </section>
</template>

<script>
import GeneralData from './GeneralData.vue';
import AddressData from './AddressData.vue';
import PasswordData from './PasswordData.vue';
import ProfessionalData from './ProfessionalData.vue';

export default {
  name: 'TabsUserConfig',
  data() {
    return {
      activeTab: 'generalData',
    };
  },
  computed: {
    baseTabs() {
      return [
        {
          id: 'generalData',
          label: 'Dados Gerais',
          content: GeneralData,
          displayed: true,
          description: 'Atualize suas fotos e dados pessoais aqui',
        },
        {
          id: 'address',
          label: 'Endereço',
          content: AddressData,
          displayed: true,
          description: 'Atualize seu endereço aqui',
        },
        {
          id: 'password',
          label: 'Senha',
          content: PasswordData,
          displayed: true,
          description: 'Atualize sua senha aqui',
        },
        {
          id: 'professionalData',
          label: 'Dados profissionais',
          content: ProfessionalData,
          displayed: true,
          description: 'Atualize seus dados profissionais aqui',
        },
      ];
    },
  },
};
</script>
<style>
.fixed-information {
  text-align: left;
}
</style>
