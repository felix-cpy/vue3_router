<template>
  <h2>This is a sample list of jobs</h2>
  <div v-for="job in jobsList" :key="job.id">
    <h4>{{ job.title }}</h4>
  </div>
</template>

<script>
export default {
  name: "Jobs",
  data() {
    return {
      jobsList: [
        { title: "butcher", id: 1 },
        { title: "sous chef", id: 2 },
        { title: "pastry chef", id: 3 },
        { title: "line chef", id: 4 },
        { title: "server", id: 5 }
      ]
    };
  }
};
</script>
