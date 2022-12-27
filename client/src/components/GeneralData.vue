<template>
  <section>
    <div class="columns py-5 mb-0 is-align-items-center hr">
      <span class="column is-3 has-text-left">Nome / Sobrenome</span>
      <b-field
        class="column is-6">
        <b-input value="Kevin Garvey"></b-input>
      </b-field>
    </div>
    <div class="columns py-5 mb-0 is-align-items-center hr">
      <span class="column is-3 has-text-left">Nascimento / Sexo</span>
      <b-field class="column is-3 mb-0">
        <b-datepicker placeholder="Clique para selecionar uma data" trap-focus>
        </b-datepicker>
      </b-field>
      <b-field class="column is-3">
        <b-select placeholder="Masculino" class="custom-w100">
          <optgroup>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </optgroup>
        </b-select>
      </b-field>
    </div>

    <b-field label="Username" type="is-success" message="This username is available" horizontal>
      <b-input value="johnsilver" maxlength="30"></b-input>
    </b-field>

    <b-field label="Password" horizontal>
      <b-input type="password" value="iwantmytreasure" password-reveal>
      </b-input>
    </b-field>

    <b-field label="Message" horizontal>
      <b-input maxlength="200" type="textarea"></b-input>
    </b-field>
  </section>
</template>

<script>
export default {
  name: 'GeneralData',
  data() {
    const today = new Date();

    return {
      date: new Date(),
      minDate: new Date(today.getFullYear() - 80, today.getMonth(), today.getDate()),
      maxDate: new Date(today.getFullYear() + 18, today.getMonth(), today.getDate()),
    };
  },
};
</script>
<style scoped>
.hr {
  border-top: 1px solid #dfdfdf;
}
.container-one {
  max-width: 80%;
}
</style>
