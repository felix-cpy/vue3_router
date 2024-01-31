<template>
  <h2>This is a sample list of jobs</h2>
  <div v-for="job in jobsList" :key="job.id">
    <!-- params: passed to the route id as well as props of the component -->
    <router-link
      :to="{
        name: 'jobDetails',
        params: { rid: job.id + 1 },
        props: { id: job.id, title: job.title }
      }"
    >
      <h4>
        {{ job.title }}
      </h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Jobs",
  data() {
    return {
      jobsList: [
        { title: "butcher", id: 0 },
        { title: "sous chef", id: 1 },
        { title: "pastry chef", id: 2 },
        { title: "line chef", id: 3 },
        { title: "server", id: 4 }
      ]
    };
  }
};
</script>
