let currentIndex = 0;
const images = document.querySelectorAll('.list-img img');
const totalImages = images.length;

function showNextImage() {
    currentIndex = (currentIndex + 1) % (totalImages - 1); // Chỉ chuyển khi có ảnh tiếp theo
    updateSlidePosition();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + (totalImages - 1)) % (totalImages - 1); // Giảm chỉ số, quay lại nếu dưới 0
    updateSlidePosition();
}

function updateSlidePosition() {
    const offset = -currentIndex * 50; // Tính toán offset để hiển thị ảnh
    document.querySelector('.list-img').style.transform = `translateX(${offset}%)`;
}
