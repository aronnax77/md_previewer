/* Author: Richard Myatt
     Date: 21 May 2018

     A markdown previewer.  Prepared as an exercise for freecodecamp.
*/

var initialText = "Welcome\n======\n\nMarkdown is a simple text format which allows the writer to prepare a document which can be converted into other formats such as HTML.  In comparison to writing a document in HTML the format is relatively simple and straightforward and also provides the benefit that it can be easily read before conversion.  This form of documentation is used by sites like git hub where the Readme.md is prepared in markdown.  For more information on markdown see [Mastering Markdown](https://guides.github.com/features/mastering-markdown/).\n\nIllustration\n------------\n\nAs a quick illustration unordered lists can be written as follows:\n\n- this is an unordeered list\n- ordered lists are just as easy\n\t1. This is an indented ordered list\n\t2. and so on.\n\t\nCode snippets, blockquotes and images are also easily include.  For example a code snippet takes the form:\n\n``` python\n\na = 10\nprint(a)\n\n```\n\nA block quote attributed to Albert Einstein:\n\n> I am by heritage a Jew, by citizenship a Swiss, and by makeup a human being, and only a human being, without any special attachment to any state or national entity whatsoever.\n\nAnd finally an image.\n\n![Elephant](https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/220px-African_Bush_Elephant.jpg  'African Elephant')\n\nThis markdown previewer provides a live, instant, preview of any markdown entered.  If you would like to try it out please either alter the existing text or press the \'Clear\' button.  You can easily return to this screen by pressing the \'Welcome\' button.";

new Vue({
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
    },
    setInitialText: function() {
      this.input = initialText;
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
  }
});
