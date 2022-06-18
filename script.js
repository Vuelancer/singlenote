if (localStorage.getItem("notes")) {
  input.value = localStorage.getItem("notes");
}

input.addEventListener("change", function () {
  localStorage.setItem("notes", input.value);
});

download.addEventListener(
  "click",
  () => {
    var data = new Blob([input.value], {
      type: "text/plain",
    });
    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(data);
    a.download = "download.md";
    a.click();
    window.URL.revokeObjectURL(a.href);
  },
  false
);
