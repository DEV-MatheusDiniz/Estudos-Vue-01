<template>
    <div class="tile" :class="{checked: tarefa.checked}">
        <div class="tile-icon">
            <i class="icon icon-2x" :class="tarefa.checked ? 'icon-check' : 'icon-time'"></i>
        </div>

        <div class="tile-content">
            <p class="tile-subtitle">{{ tarefa.description }}</p>

            <div>
                <button @click="$emit('toggle', tarefa)" class="btn btn-link">
                    <span v-if="tarefa.checked">Desmarcar</span>
                    <span v-else>Concluído</span>
                </button>
                
                <button @click="$emit('remove', tarefa)" class="btn btn-link">
                    <span class="text-error">Remover</span>
                </button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        tarefa: { type: Object, required: true }
    }
};
</script>


<style scoped>
.tile {
    margin-top: 1rem;
    padding: 1rem;
    box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, .15);
}

.checked {
   text-decoration: line-through;
   color: lightgray 
}
</style>