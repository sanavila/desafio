<template>
  <section>
    <div class="columns py-5 hr">
      <span class="column is-3 has-text-left has-text-weight-semibold">
        UF / Município de residência
      </span>
      <b-field class="column is-3">
        <b-select v-model="sigla" placeholder="Seleceione o estado" expanded>
          <option
            v-for="(uf, index) in ufList"
            :value="uf.sigla"
            :key="index">
            {{ uf.sigla }}
          </option>
        </b-select>
      </b-field>
      <b-field class="column is-3">
        <b-tooltip label="Necessário selecionar estado" :active="!sigla">
          <b-select
            v-model="district"
            :loading="districtLoad"
            :disabled="!sigla || districtLoad"
            placeholder="Selecione o município"
            expanded>
            <option
              v-for="(district, index) in districtList"
              :value="district.nome"
              :key="index">
              {{ district.nome }}
            </option>
          </b-select>
        </b-tooltip>
      </b-field>
    </div>
    <div class="columns py-5 hr">
      <span class="column is-3 has-text-left has-text-weight-semibold">
        Logradouro / Número / Bairro
      </span>
      <b-field class="column is-3">
        <b-input placeholder="R.Santos Dumond"></b-input>
      </b-field>
      <b-field class="column is-3">
        <b-input placeholder="1450"></b-input>
      </b-field>
      <b-field class="column is-3">
        <b-input placeholder="Aerolândia"></b-input>
      </b-field>
    </div>
    <div class="columns py-5 hr">
      <span class="column is-3 has-text-left has-text-weight-semibold">Complemento</span>
      <b-field class="column is-9">
        <b-input></b-input>
      </b-field>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AddressData',
  data() {
    return {
      ufList: [],
      districtList: [],
      sigla: null,
      district: null,
      districtLoad: false,
    };
  },
  watch: {
    async sigla() {
      this.districtLoad = true;
      await this.requestDistrict();
      this.districtLoad = false;
    },
  },
  async beforeMount() {
    await this.requestUF();
  },
  methods: {
    async requestUF() {
      this.ufList = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
        .then((response) => response.json())
        .then(
          (response) => response.sort((first, second) => first.sigla.localeCompare(second.sigla)),
        );
    },
    async requestDistrict() {
      this.districtList = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.sigla}/distritos`)
        .then((response) => response.json())
        .then(
          (response) => response.sort((first, second) => first.nome.localeCompare(second.nome)),
        );
    },
  },
};
</script>
<style>
.hr {
  border-top: 1px solid #dfdfdf;
}
</style>
