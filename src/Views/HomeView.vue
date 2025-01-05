<script setup>
import Hero from "@/components/hero.vue"
import HomeCards from "@/components/HomeCards.vue"
import JobsListing from "@/components/JobsListing.vue";
</script>

<template>
    <Hero/>
    <HomeCards/>
    <JobsListing :limit="3"/>
    <section class="m-auto max-w-lg my-10 px-6">
    <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View
      All Jobs</RouterLink>
    </section>
</template>