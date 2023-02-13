<template>
  <div class="container grid-xs py-2">
    <form @submit.prevent="add(tarefa)">
      <div class="input-group input-tarefas">
        <input type="text" v-model="tarefa.description" class="form-input" placeholder="Nova tarefa" required>

        <button class="btn btn-primary input-group-btn" :class="{loading}">Adicionar</button>
      </div>
    </form>

    <div class="tarefa-list">
      <tarefa v-for="t in tarefas" :key="t.id" @toggle="toggleTarefa" @remove="removeTarefa" :tarefa="t" />
      <progress v-if="loading" class="progress" max="100"></progress>
    </div>

  </div>
</template>


<script>
import Tarefa from '@/components/Tarefa-cpnt';
import { mapActions, mapState } from 'vuex';


export default {
  name: 'App',
  components: { Tarefa },
  data() {
    return { 
      tarefa: { checked: false }
    };
  },
  computed: {
    ...mapState(['tarefas', 'loading'])
  },
  methods: {
    ...mapActions(['addTarefa', 'toggleTarefa', 'removeTarefa']),

    async add(tarefa) {
      await this.addTarefa(tarefa);
      this.tarefa = { checked: false }
    }
  }
};
</script>


<style scoped>
.input-tarefas {
  padding-top: 2rem;
}
.tarefa-list {
  padding-top: 1rem;
}
</style>
