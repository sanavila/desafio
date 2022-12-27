<template>
  <section>
    <div class="columns py-5 hr">
      <span class="column is-3 has-text-left has-text-weight-semibold">
        Conselho / Estado conselho
      </span>
      <b-select class="column is-3" placeholder="Seleceione o conselho" expanded>
        <option value="flint">Flint</option>
      </b-select>
      <b-select class="column is-3" placeholder="Seleceione o estado" expanded>
        <option value="flint">Flint</option>
      </b-select>
    </div>
    <div class="columns py-5 hr">
      <span class="column is-3 has-text-left has-text-weight-semibold">Número do conselho</span>
      <b-field class="column is-6">
        <b-input></b-input>
      </b-field>
    </div>
    <div class="columns py-5 hr">
      <span class="column is-3 has-text-left has-text-weight-semibold">
        Especialidade / RQE
      </span>
      <b-select class="column is-3" placeholder="Seleceione a especialidade" expanded>
        <option value="flint">Flint</option>
      </b-select>
      <b-field class="column is-3">
        <b-input></b-input>
      </b-field>
    </div>
    <div class="columns py-5 hr">
      <span class="column is-3 has-text-left has-text-weight-semibold">
        ID user / Sincronização MEMED
      </span>
      <b-field class="column is-3">
        <b-input></b-input>
      </b-field>
      <b-switch
        class="column is-3"
        v-model="isSwitched">
        {{ isSwitched ? "Ativo" : "Desativado" }}
      </b-switch>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProfessionalData',
  data() {
    return {
      isSwitched: false,
      isSwitchedCustom: 'Yes',
    };
  },
};
</script>
<style>
.hr {
  border-top: 1px solid #dfdfdf;
}
</style>
