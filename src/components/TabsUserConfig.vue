<template>
    <section>
        <b-tabs v-model="activeTab" :multiline="multiline" :animated="false">
            <template v-for="tab in baseTabs">
                <b-tab-item
                    v-if="tab.displayed"
                    :key="tab.id"
                    :value="tab.id"
                    :label="tab.label">
                    <h2 class="has-text-weight-semibold">Informações pessoais</h2>
                    <h3>{{ tab.description }}</h3>
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
