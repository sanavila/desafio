<template>
  <section>
    <div class="columns py-5 hr">
      <span class="column is-3 has-text-left has-text-weight-semibold">
        UF / Município de residência
      </span>
      <b-field class="column is-3">
        <b-select placeholder="Seleceione o estado" expanded>
          <option value="flint">Flint</option>
        </b-select>
      </b-field>
      <b-field class="column is-3">
        <b-select placeholder="Selecione o município" expanded>
          <option value="flint">Flint</option>
        </b-select>
      </b-field>
    </div>
    <div class="columns py-5 hr">
      <span
        class="column is-3 has-text-left has-text-weight-semibold">
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
      <b-field  class="column is-9">
        <b-input></b-input>
      </b-field>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AddressData',
};
</script>
<style>
.hr {
  border-top: 1px solid #dfdfdf;
}
</style>
