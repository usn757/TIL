document.addEventListener("DOMContentLoaded", function () {
  var toastEl = document.getElementById("darwinToast");
  var toast = new bootstrap.Toast(toastEl);

  document.getElementById("toastBtn").addEventListener("click", function () {
    toast.show();
  });
});
