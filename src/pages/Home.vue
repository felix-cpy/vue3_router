<template>
  <h1>This is a home page title</h1>
  <p v-for="pa in para" :key="pa">{{ pa }}</p>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      para: [
        "       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et luctus magna, et interdum nunc. Ut porta justo purus, id ornare nunc mollis nec. Proin at quam vitae turpis faucibus ornare. Nunc fermentum lacinia elit eu faucibus. Cras malesuada augue vitae libero ornare aliquam. Sed mi eros, ultricies sit amet hendrerit at, malesuada id felis. Nulla et velit tristique, varius leo ut, elementum enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam suscipit tincidunt ligula, et elementum felis aliquet et. Nulla facilisi. Nam a quam odio. Nulla fermentum volutpat est, non vulputate nunc bibendum ac. Maecenas mauris velit, luctus vel dolor at, malesuada congue augue. Proin interdum vestibulum nunc vel ultricies. Phasellus est lorem, lobortis id eleifend rutrum, pellentesque at felis.",
        "Morbi urna mi, lobortis ut nisl vel, congue ullamcorper risus. Mauris sit amet elit aliquet, cursus eros vitae, rhoncus quam. Aliquam vitae fermentum leo, vel lacinia quam. Donec feugiat tellus facilisis dolor venenatis maximus. Aliquam massa nunc, dapibus eu tellus sit amet, gravida lacinia ipsum. Nunc posuere sed justo eu finibus. Suspendisse vulputate iaculis ultrices. Ut ullamcorper nulla ut elit rhoncus gravida. Fusce eget ullamcorper felis, sit amet venenatis augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec suscipit aliquet imperdiet. Suspendisse volutpat hendrerit eros, ac tincidunt dui tristique aliquet. Donec a ornare erat. Curabitur tristique, lacus quis maximus euismod, erat lacus euismod magna, at fringilla nunc neque non urna. Ut nisl ante, aliquam vel massa laoreet, aliquam posuere sapien. Curabitur lacus enim, feugiat at mauris at, facilisis posuere metus.",
        "Maecenas ut est at lacus porttitor porta. Sed sed leo bibendum, hendrerit magna at, vulputate ex. Curabitur et commodo turpis, ac tempor dolor. Fusce ut lectus lacus. Integer lobortis scelerisque nunc, quis lobortis dolor lobortis vitae. Cras urna tortor, porttitor hendrerit nibh in, viverra scelerisque urna. Vivamus cursus vulputate ipsum, id tincidunt felis lacinia eu. Etiam venenatis euismod suscipit. Aliquam nisi odio, tristique sit amet fringilla in, viverra ac ex. Nulla tincidunt, ex quis dictum ullamcorper, turpis nibh viverra ligula, vulputate viverra magna purus et massa. Vestibulum ut metus libero. Quisque finibus nulla sed nisl interdum egestas. Sed lacinia arcu maximus, viverra metus quis, malesuada ipsum. Quisque ut tincidunt elit."
      ]
    };
  }
};
</script>
