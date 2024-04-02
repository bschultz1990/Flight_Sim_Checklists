document.addEventListener("DOMContentLoaded", function (event) {
  const lines = document.querySelectorAll(".line");
  const uncheckAll = document.getElementById("uncheck-all");
  const checkAll = document.getElementById("check-all");

  lines.forEach((line) => {
    line.addEventListener("click", function () {
      line.classList.toggle("line-complete");
    });
  });

  uncheckAll.addEventListener("click", function () {
    lines.forEach((line) => {
      line.classList.remove("line-complete");
    });
  });

  checkAll.addEventListener("click", function () {
    lines.forEach((line) => {
      line.classList.add("line-complete");
    });
  });
});