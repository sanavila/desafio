<template>
  <section>
    <div class="columns py-5 mb-0 is-align-items-center hr">
      <span class="column is-3 has-text-left has-text-weight-semibold">Nome / Sobrenome</span>
      <b-field class="column is-6">
        <b-input value="Kevin Garvey"></b-input>
      </b-field>
    </div>
    <div class="columns py-5 mb-0 is-align-items-center hr">
      <span class="column is-3 has-text-left has-text-weight-semibold">Nascimento / Sexo</span>
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
    <div class="columns py-5 mb-0 hr">
      <div class="column is-3 has-text-left">
        <span class="has-text-weight-semibold">Sua foto</span>
        <p>Isso será exibido no seu perfil.</p>
      </div>
      <img class="column is-1" :src="imageURL" alt="">
      <b-field class="column is-5 custom-w">
        <b-upload v-model="dropFiles" drag-drop accept=".svg, .png, .jpg">
          <section class="section p-1">
            <div class="content has-text-centered">
              <p>
                <b-icon icon="cloud-upload" size="is-large">
                </b-icon>
              </p>
              <p>Clique para fazer upload ou arraste e solte</p>
              <p>SVG, PNG ou JPG(máximo de 800x800)</p>
            </div>
          </section>
        </b-upload>
      </b-field>
    </div>
    <div class="columns py-5 mb-0 hr">
      <span class="column is-3 has-text-left has-text-weight-semibold">E-mail / Telefone</span>
      <b-field class="column is-3">
        <b-input placeholder="Email"
          v-model="email"
          type="email"
          icon="email">
        </b-input>
      </b-field>
      <b-field class="column is-3">
        <b-input placeholder="Telefone" icon="phone-outline"></b-input>
      </b-field>
    </div>
    <div class="columns py-5 mb-0 hr">
      <span class="column is-3 has-text-left has-text-weight-semibold">RG / CPF / CNS</span>
      <b-field class="column is-2">
        <b-input placeholder="00000000000"></b-input>
      </b-field>
      <b-field class="column is-2">
        <b-input placeholder="00000000000"></b-input>
      </b-field>
      <b-field class="column is-2">
        <b-input placeholder="00000000000"></b-input>
      </b-field>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GeneralData',
  data() {
    return {
      dropFiles: null,
    };
  },
  computed: {
    imageURL() {
      return this.dropFiles ? URL.createObjectURL(this.dropFiles) : '';
    },
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
