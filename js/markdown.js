new Vue({
  el: "#app",
  data: {
    input: ""
  },
  computed: {
    preview: function() {
      return marked(this.input);
    }
  }
});
