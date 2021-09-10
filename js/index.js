function calc() {

    var weight = parseInt(document.getElementById('weight').value);
    document.getElementById('weight-val').textContent = weight + ' kg';

    var height = parseInt(document.getElementById('height').value);
    document.getElementById('height-val').textContent = height + ' cm';

    var bmi = (weight / Math.pow( (height / 100) , 2)).toFixed(1);
    var result = document.getElementById('bmi-result');

    result.textContent = bmi;

    if( bmi < 18.5 ) {
        category = "underweight";
        result.style.color = '#ffc44d';

    } else if ( bmi >= 18.5 && bmi <= 24.9 ) {
        category = "normal";
        result.style.color = '#0be881';

    } else if ( bmi >= 25 && bmi <= 29.9 ) {
        category = "overweight";
        result.style.color = '#ff884d';

    } else {
        category = "obese"
        result.style.color = '#ff111d';

    }

    document.getElementById('category').textContent = category;
}