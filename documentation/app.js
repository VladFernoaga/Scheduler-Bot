var markdownpdf = require("markdown-pdf");
var mdDocs = ["readme.md"],
    bookPath = "out/documentation.pdf";
var options = {
    cssPath: "css/github-markdown.css"
};
markdownpdf(options).concat.from(mdDocs).to(bookPath, function() {
    console.log("Created", bookPath);
});