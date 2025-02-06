// 검색 및 필터링 기능
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const monthFilter = document.getElementById("monthFilter");
  const tilContainer = document.getElementById("til-container");
  const cards = document.querySelectorAll(".card");

  // 검색 기능
  function filterCards() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedMonth = monthFilter.value;

    cards.forEach((card) => {
      const cardContent = card.textContent.toLowerCase();
      const cardDate = card.dataset.date;

      const matchesSearch = cardContent.includes(searchTerm);
      const matchesMonth = !selectedMonth || cardDate.startsWith(selectedMonth);

      card.style.display = matchesSearch && matchesMonth ? "block" : "none";
    });
  }

  searchInput.addEventListener("input", filterCards);
  monthFilter.addEventListener("change", filterCards);

  // 마지막 수정 날짜 업데이트
  const lastModified = document.getElementById("lastModified");
  lastModified.textContent = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});
