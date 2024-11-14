// JavaScript có thể được sử dụng để thêm hiệu ứng tùy thích
// Ví dụ: hiệu ứng thay đổi ảnh khi di chuột qua

document.getElementById("poemImage").addEventListener("mouseover", function () {
  this.style.transform = "scale(1.05)";
});

document.getElementById("poemImage").addEventListener("mouseout", function () {
  this.style.transform = "scale(1)";
});
