download.addEventListener(
  "click",
  () => {
    var input = document.getElementById("input").value;
    var data = new Blob([input], {
      type: "text/plain"
    });
    var textFile = "";
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }
    textFile = window.URL.createObjectURL(data);
    const a = document.createElement('a');
    a.href = textFile;
    a.download = "download.txt"
    a.click();
  },
  false
);
