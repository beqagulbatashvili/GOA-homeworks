document.addEventListener('DOMContentLoaded', function() {
    const imageUrls = [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902',
        'https://1000logos.net/wp-content/uploads/2020/08/Python-Logo-500x313.png',
        'https://images.seeklogo.com/logo-png/18/2/css3-logo-png_seeklogo-186678.png',
        'https://brandslogos.com/wp-content/uploads/images/java-logo-1.png',
        'https://bairesdev.mo.cloudinary.net/blog/2023/08/How-to-Choose-the-Right-Programming-Language-for-a-New-Project.jpg?tx=w_834,q_auto'
    ];

    const sliderImage = document.getElementById('სლაიდერსურათი');
    const prevBtn = document.getElementById('წინაღილაკი');
    const nextBtn = document.getElementById('შემდეგიღილაკი');

    let currentImageIndex = 0;
    let autoSlideInterval;

    function showImage(index) {
        if (sliderImage) {
            sliderImage.style.opacity = 0;
            setTimeout(() => {
                sliderImage.src = imageUrls[index];
                sliderImage.style.opacity = 1;
            }, 300);
        }
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
        showImage(currentImageIndex);
        resetAutoSlide();
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
        showImage(currentImageIndex);
        resetAutoSlide();
    }

    function startAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextImage, 3000);
    }

    if (sliderImage && prevBtn && nextBtn) {
        showImage(currentImageIndex);
        startAutoSlide();

        nextBtn.addEventListener('click', nextImage);
        prevBtn.addEventListener('click', prevImage);
    }
});