<script setup lang="ts">
    import {ref} from 'vue'
    const status = ref(false)
    const props = defineProps({
        todo:{
            type:Object,
            required:true
        }
    }) 
    const emit = defineEmits(['toggle-checkbox', 'delete-todo']);
    function deleteTodo(){
        emit('delete-todo', props.todo.id);
    }
    function toggleCheckbox(e){
        emit('toggle-checkbox', {
            id:props.todo.id,
            checked: e.target.checked

        });
    }
</script>



<template>

    <div class="d-flex gap-1 mb-1">
        <BFormCheckbox
      :id="`todo-${props.todo.id}`"
      v-model="status"
      :name="`todo-${props.todo.id}`"
      value="accepted"
      unchecked-value="not_accepted"
        @change="toggleCheckbox"
    >
        <span :class="{muted: props.todo.checked}">
            {{ props.todo.title }}
        </span>

    </BFormCheckbox>
    <BButton variant="danger" size="sm"
     @click="deleteTodo"

    >삭제</BButton>
    </div>


</template>

<style scoped>
    .muted{
        color: #ccc;
        text-decoration:line-through;
    }

</style>