new Vue({
  el: "#app",
  data: {
    input: "",
    labelsEnabled: true
  },
  methods: {
    handleResize: function() {
      if(window.innerWidth < 700) {
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
  }
});

/*function myFunction(x) {
    if (x.matches) { // If media query matches
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "pink";
    }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes*/
