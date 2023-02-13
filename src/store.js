import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


// State
const state = { tarefas: [], loading: false  }


// Actions
const actions = {
    addTarefa({ commit }, tarefa) {
        commit('setLoading', true)
        return new Promise(resolve => {
            setTimeout(() => {
                tarefa.id = Date.now()
                commit('addTarefa', tarefa)
                commit('setLoading', false)
                resolve(tarefa)
            }, 500)
        })
    },

    toggleTarefa({commit}, tarefa) {
        commit('toggleTarefa', tarefa);
    },

    removeTarefa({ commit }, tarefa) {
        commit('removeTarefa', tarefa);
    },

    checkAll({ commit, state }) {
        const uncheckedsIds = state.tarefas.filter(i => !i.checked).map(i => i.id);
        commit('togleTafefasAll', uncheckedsIds);
    },

    uncheckAll({ commit, state }) {
        const checkedsIds = state.tarefas.filter(i => i.checked).map(i => i.id);
        commit('togleTafefasAll', checkedsIds);
    },

    removeAllCheckeds({ commit, state }) {
        const checkedsIds = state.tarefas.filter(i => i.checked).map(i => i.id);
        commit('removeTafefasAll', checkedsIds);
    }
}


// Getters
const getters = {
    uncheckeds(state) {
        return state.tarefas.filter(tarefa => tarefa.checked === false);
    },

    checkeds(state) {
        return state.tarefas.filter(tarefa => tarefa.checked);
    }
}


// Mutations
const mutations = {
    addTarefa(state, payload) {
        state.tarefas.push(payload)
    },

    setLoading(state, payload) {
        state.loading = payload
    },

    toggleTarefa(state, payload) {
        const index = state.tarefas.findIndex(item => item.id === payload.id);
        if (index > -1) {
            const checked = !state.tarefas[index].checked;
            Vue.set(state.tarefas, index, { ...state.tarefas[index], checked });
        }
    },

    removeTarefa(state, payload) {
        state.tarefas = state.tarefas.filter(item => item.id != payload.id);
    },

    togleTafefasAll(state, tarefasIds) {
        const tarefas = state.tarefas.map(item => {
            return tarefasIds.includes(item.id) ? { ...item, checked: !item.checked } : item
        })
        state.tarefas = tarefas;
    },

    removeTafefasAll(state, tarefasIds) {
        const tarefas = state.tarefas.filter(item => !tarefasIds.includes(item.id));
        state.tarefas = tarefas
    }
}


// Store
const store = new Vuex.Store({ state, actions, getters, mutations })


// Export
export default store;
