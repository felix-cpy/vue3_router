<template>
  <h1>This is job details page</h1>
  <div>id from route param: {{ $route.params.rid }}</div>
  <div>id from props: {{ id }}</div>
  <div>title from props: {{ title }}</div>
</template>

<script>
export default {
  name: "JobDetails",
  props: {
    id: Number,
    title: String
  }
};
</script>
