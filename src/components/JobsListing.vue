<script setup>
import { reactive, defineProps, onMounted } from "vue";
import JobListing from "./JobListing.vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const state = reactive({
  jobs: [],
  IsLoading: true,
})

onMounted(async () => {
  try {
    const res = await axios.get("/api/jobs");
    state.jobs = res.data;
  } catch (error) {
    console.error("Error fetching jobs data", error);
  }
  finally {
    state.IsLoading = false;
  }
});


defineProps({
  limit: Number,
});
</script>
<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div v-if="state.IsLoading" class='text-center text-gray-500 py-6'>
        <PulseLoader />
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>
</template>