document.getElementById("markForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let tam = parseFloat(document.getElementById("tam").value);
  let eng = parseFloat(document.getElementById("eng").value);
  let mat = parseFloat(document.getElementById("mat").value);
  let sci = parseFloat(document.getElementById("sci").value);
  let soc = parseFloat(document.getElementById("soc").value);

  let total = tam + eng + mat + sci + soc;
  document.getElementById("total").textContent = total;
  let percentage = (total / 500) * 100;
  document.getElementById("percentage").textContent =
    percentage.toFixed(2) + "%";

  let grade;
  switch (true) {
    case percentage >= 90:
      grade = "A+";
      break;
    case percentage >= 80:
      grade = "A";
      break;
    case percentage >= 70:
      grade = "B";
      break;
    case percentage >= 60:
      grade = "C";
      break;
    case percentage >= 50:
      grade = "D";
      break;
    default:
      grade = "FAIL(FIRST ATTEMPT IN LIFE), SO, DON'T WORRY, TRY AGAIN...";
  }
  document.getElementById("grade").textContent = grade;
});
