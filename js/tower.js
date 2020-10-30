for (let i=25; i>0; i--) {
    let slider = document.createElement('div');
    slider.setAttribute('class', 'sld anim');
    slider.setAttribute('id', 'sld'+i);
    document.getElementById('game_4').append(slider);
}

function stopSlide(slider) {
    let sliderCurrent = document.getElementById('sld'+ slider);
    let sliderAbove = document.getElementById('sld' + (slider+1));
    let sliderBelow;
    if (slider == 1) {
        sliderBelow = sliderCurrent;
    } else {
        sliderBelow = document.getElementById('sld' + (slider - 1));
    }
    let left = parseInt(window.getComputedStyle(sliderCurrent).getPropertyValue('left'));
    console.log(left);
    sliderCurrent.classList.remove('anim');
    sliderCurrent.style.left = left + 'px';
    let width = parseInt(window.getComputedStyle(sliderCurrent).getPropertyValue('width'));
    let leftBelow = parseInt(window.getComputedStyle(sliderBelow).getPropertyValue('left'));

    let difference = left - leftBelow;
    let absDifference = Math.abs(difference);
    if (difference > width || difference < -width) {
        let score = `Score ${slider-1}`;
        alert(score);
        location.reload();
    }
    if (difference < 0) {
        left += absDifference;
    } else {
        left = left - absDifference;
        sliderCurrent.style.left = left.toString().concat('px');
    }
    let offset = (width - absDifference).toString().concat('px');
    sliderCurrent.style.width = offset;
    sliderAbove.style.width = offset;
    sliderAbove.style.visibility = 'visible';

    let onclick = 'stopSlide(' + (slider+1) + ')';
    document.getElementById('btn_4').setAttribute('onclick', onclick);
}