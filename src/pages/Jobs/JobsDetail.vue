<template>
  <h1>This is job details page</h1>
  <!-- get id from route param -->
  <div>id from route param: {{ $route.params.id }}</div>

  <!-- get id from props -->
  <div>id from props: {{ id }}</div>
</template>

<script>
export default {
  name: "JobDetails",
  props: {
    id: Number
  }
};
</script>
