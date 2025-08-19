<script setup>
  import { ref , reactive} from 'vue';
  import todoItem from './components/todoItem.vue';
  const todoText = ref('');
  const todos = reactive([
    {id:1,title:'Learn Web', checked:false},
    {id:2,title:'Get a job', checked:false}
  ])
  function toggleCheckbox({id, checked}){
    const idx = todos.findIndex(todo => todo.id === id);

    todos[idx].checked = checked;
    console.log(todos);

  }
  function deleteTodo(id){
    if(window.confirm('정말 삭제하시겠습니까?') ){

      const idx = todos.findIndex(todo => todo.id === id);
      
      todos.splice(idx, 1);

    }
  }
  function addTodo(){
    todos.push({
      id: todos.length + 1,
      title: todoText.value,
      checked: false
    })

  }

</script>

<template>
  <div class="container">

    <h1>Todo List</h1>
    <BFormInput
    v-model="todoText"
    placeholder="할일을 입력하세요"
    @keyup.enter="addTodo"
    />
    <hr>
    <todoItem
    v-for ="todo in todos"
    :key="todo.id"
    :todo="todo"
    @toggle-checkbox="toggleCheckbox"
    @delete-todo="deleteTodo"


    />
  </div>
</template>

<style scoped>


</style>
