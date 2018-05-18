var initialText = "Markdown - Demo\n========================\n\nThis is a markdown previewer.  Markdown is a simple text format which is easy to read and write.  It is commonly used by sites such as Git Hub.  This previewer allows you to preview Git Hub style markdown.  To learn more about how to write markdown go to [Mastering Markdown](https:\/\/guides.github.com/features/mastering-markdown/).\n\nYou can use this demo to type any markdown you choose and it will automatically be previewed.  You can:\n\n1. Type markdown in the left pane.\n2. See the live preview in the right pane.\n3. Clear this left pane using the 'Clear' button.\n\nPlease note that this previewer is not capable of showing syntax highlighting in code snippets at this time. [clear everything](?text=)";

var main = new Vue({
  el: "#app",
  data: {
    input: initialText,
    labelsEnabled: true
  },
  methods: {
    handleResize: function() {
      if(window.innerWidth < 600) {
        this.labelsEnabled = false;
      } else {
        this.labelsEnabled = true;
      }
    }
  },
  computed: {
    preview: function() {
      return marked(this.input);
    }
  },
  created: function() {
    window.addEventListener('resize', this.handleResize);
  },
  mounted: function() {
    this.handleResize();
    //this.input = initialText;
  }
});

window.onload = function() {
  var clear = setInterval(function()
  {
      var currentPage = window.location.href;
      if ("?text=" === currentPage.substr(-6))
      {
          main.input = "";
          clearInterval(clear);
      }
  }, 200);
};
