
var slider_cost = document.getElementById('range-slider-cost');
if (slider_cost) {
    noUiSlider.create(slider_cost, {
        start: [30, 100],   // начальные значения
        connect: true,   // соединяет маркеры
        step: 1,
        range: {
            'min': 30,
            'max': 100
        }
    });
    var minInput_cost = document.getElementById('min-value_cost');
    var maxInput_cost = document.getElementById('max-value_cost');
    const costs = [minInput_cost, maxInput_cost];
    slider_cost.noUiSlider.on('update', function (values) {
        minInput_cost.value = values[0];
        maxInput_cost.value = values[1];
    });
    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;
        slider_cost.noUiSlider.set(arr);
    };
    costs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value);
        });
    });
}




var slider_height = document.getElementById('range-slider-height');
if (slider_height) {
    noUiSlider.create(slider_height, {
        start: [1.2, 3],   // начальные значения
        connect: true,   // соединяет маркеры
        step: 0.1,
        range: {
            'min': 1.2,
            'max': 3
        }
    });

    var minInput_height = document.getElementById('min-value_height');
    var maxInput_height = document.getElementById('max-value_height');
    const heights = [minInput_height, maxInput_height];

    slider_height.noUiSlider.on('update', function (values) {
        minInput_height.value = values[0];
        maxInput_height.value = values[1];
    });
    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;
        console.log(arr);
        slider_height.noUiSlider.set(arr);
    };
    heights.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value);
        });
    });
}
var slide_cost = document.getElementById('range-slide-cost');
var slide_height = document.getElementById('range-slide-height');
if (slide_cost) {
    noUiSlider.create(slide_cost, {
        start: [30, 100],   // начальные значения
        connect: true,   // соединяет маркеры
        step: 1,
        range: {
            'min': 30,
            'max': 100
        }
    });
    var minInput_cost = document.getElementById('min-value_cost');
    var maxInput_cost = document.getElementById('max-value_cost');
    const costs = [minInput_cost, maxInput_cost];
    slide_cost.noUiSlider.on('update', function (values) {
        minInput_cost.value = values[0];
        maxInput_cost.value = values[1];
    });
    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;
        slide_cost.noUiSlider.set(arr);
    };
    costs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value);
        });
    });
}
if (slide_height) {
    noUiSlider.create(slide_height, {
        start: [1.2, 3],   // начальные значения
        connect: true,   // соединяет маркеры
        step: 0.1,
        range: {
            'min': 1.2,
            'max': 3
        }
    });

    var minInput_height = document.getElementById('min-value_height');
    var maxInput_height = document.getElementById('max-value_height');
    const heights = [minInput_height, maxInput_height];

    slide_height.noUiSlider.on('update', function (values) {
        minInput_height.value = values[0];
        maxInput_height.value = values[1];
    });
    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;
        console.log(arr);
        slide_height.noUiSlider.set(arr);
    };
    heights.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value);
        });
    });
}





