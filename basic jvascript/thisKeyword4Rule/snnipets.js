var title = "A Passage to India";
var author = "E.M. Forster";

var novel = {
   title: "Pride and Prejudice",
   author: "Jane Austen",
   print: function() {
       console.log(this.title);
       console.log(this.author);
   }
}

novel.print();