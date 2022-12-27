<template>
    <section>
        <div class="columns py-5 hr">
            <span class="column is-3 has-text-left">Usuário / Senha</span>
            <b-input class="column is-4" value="johnsilver" maxlength="30"></b-input>
            <b-field class="column is-4">
              <b-input
                icon="lock-outline"
                type="password"
                placeholder="Digite sua senha aqui"
                >
              </b-input>
            </b-field>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      name: 'John Silver',
    };
  },
};
</script>
<style>
.hr {
  border-top: 1px solid #dfdfdf;
}
</style>
