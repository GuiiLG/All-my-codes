const slider = document.getElementById('slider');
    const sliderBackground = document.getElementById('sliderBackground');
    slider.addEventListener('input', () => {
        const value = (slider.value - slider.min) / (slider.max - slider.min);
        sliderBackground.style.width = `${value * 100}%`;
      });