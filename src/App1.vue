<script>
export default {
  data() {
    return {
      message: "Tasks : ",
      status: "active",
      items: ["Task 1", "Task 2", "Task 3"]
    }
  },
  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "pending"
      }
      else if (this.status === "inactive") {
        this.status = "active"
      }
      else {
        this.status = "inactive"
      }
    }
  }
}
</script>

<template>
  <h1>{{ message }}</h1>
  <li v-for="item in items">
    {{ item }}
  </li>
  <br>
  <p>User is {{ status }}</p>
  <button @click="toggleStatus">ToggleStatus</button>

</template>


<script setup>
import { onMounted, ref} from 'vue';
let name = ref("John Doe")
let status = ref("active")
let tasks = ref(['task one', 'task 2', 'task 3'])
let newTask = ref("")
const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending"
  }
  else if (status.value === "inactive") {
    status.value = "active"
  }
  else {
    status.value = "inactive"
  }
}
const addTask = () => {
  if (newTask.value.trim() != "") {
    tasks.value.push(newTask.value)
    newTask.value = "";
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index,1)
}
onMounted(async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await res.json()
    tasks.value = data.map((task) => (task.title))
  } catch (error) {
    console.log('Data Fetching error')
  }
})
</script>

<template>
  <h1>{{ name }}</h1>
  <form @submit.prevent="addTask">
    <label for="newTask">Add new Task</label> <br>
    <input type="text" id="newTask" v-model="newTask">
    <button type="submit">Add</button>
  </form>
  <li v-for="(task, index) in tasks" :key="task">
    <span>
      {{ task }}
    </span>
    <button @click="deleteTask(index)">X</button>
  </li>
  <br>
  <p>User is {{ status }}</p>
  <button @click="toggleStatus">ToggleStatus</button>

</template>
