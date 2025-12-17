const testBtn = document.getElementById("testBtn");
const statusText = document.getElementById("status");

testBtn.addEventListener("click", () => {
  statusText.textContent = "وضعیت: در حال تست...";
  statusText.style.color = "orange";

  setTimeout(() => {
    statusText.textContent = "وضعیت: تست با موفقیت انجام شد ✅";
    statusText.style.color = "green";
  }, 1500);
});