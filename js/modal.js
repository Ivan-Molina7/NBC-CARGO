document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    const prevButton = document.querySelector(".prev-page");
    const nextButton = document.querySelector(".next-page");
    let currentPage = 0;
  
    function updatePagination() {
      pages.forEach((page, index) => {
        if (index === currentPage) {
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }
      });
  
      prevButton.disabled = currentPage === 0;
      nextButton.disabled = currentPage === pages.length - 1;
    }
  
    prevButton.addEventListener("click", () => {
      if (currentPage > 0) {
        currentPage--;
        updatePagination();
      }
    });
  
    nextButton.addEventListener("click", () => {
      if (currentPage < pages.length - 1) {
        currentPage++;
        updatePagination();
      }
    });
  
    updatePagination();
  });
  