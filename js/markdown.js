/* Author: Richard Myatt
     Date: 21 May 2018

     A markdown previewer.  Prepared as an exercise for freecodecamp.
*/

var initialText = "Welcome\n======\n\nMarkdown is a simple text format which allows the writer to prepare a document which can be converted into other formats such as HTML.  In comparison to writing a document in HTML the format is relatively simple and straightforward and also provides the benefit that it can be easily read before conversion.  This form of documentation is used by sites like git hub where the Readme.md is prepared in markdown.  For more information on markdown see [Mastering Markdown](https://guides.github.com/features/mastering-markdown/).\n\nIllustration\n------------\n\nAs a quick illustration unordered lists can be written as follows:\n\n- this is an unordeered list\n- ordered lists are just as easy\n\t1. This is an indented ordered list\n\t2. and so on.\n\t\nCode snippets, blockquotes and images are also easily include.  \n\nHere is a code snippet in python:\n\n``` python\n\ndef bubbleSort(l):\n    '''\n    An implementation of the bubble sore with optimisation\n    '''\n    result = l[:]\n\n    lengthData = len(result)\n    sweep      = lengthData - 1\n\n    while sweep >= 0:\n        for i in range(sweep):\n            if result[i] > result[i+1]:\n                result[i], result[i+1] = result[i+1], result[i]\n        sweep -= 1\n\n    return result\n\n\nprint(bubbleSort([33, 20, 12, 31, 2, 67]))\n\n\n```\n\nAnd an example in C:\n\n``` c\n\n#include <stdio.h>\n\nint main(void)\n{\n\tint\t\ta = 1;\n\tvoid\ttry_to_change_it(int);\n\n\tprintf('%d\\n', a);\t\t/* 1 is printed */\n\ttry_to_change_it(a);\n\tprintf('%d\\n', a);\t\t/* 1 is printed again */\n\n\treturn (0);\n}\n\nvoid try_to_change_it(int a)\n{\n\ta = 777;\n}\n\n```\n\nA block quote attributed to Albert Einstein:\n\n> I am by heritage a Jew, by citizenship a Swiss, and by makeup a human being, and only a human being, without any special attachment to any state or national entity whatsoever.\n\nAnd finally an image.\n\n![Elephant](https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/220px-African_Bush_Elephant.jpg  \'African Elephant\')\n\nThis markdown previewer provides a live, instant, preview of any markdown entered.  If you would like to try it out please either alter the existing text or press the \'Clear\' button.  You can easily return to this screen by pressing the \'Welcome\' button.";

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
  },
  updated: function() {
    var code = document.querySelectorAll("code");
    for(var el = 0; el < code.length; el++) {
      hljs.highlightBlock(code[el]);
    }

  }
});

document.addEventListener("DOMContentLoaded", function() {
  hljs.initHighlightingOnLoad();
});
