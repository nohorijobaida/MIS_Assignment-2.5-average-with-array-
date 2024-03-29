function calculateAverage() {
    var numbers = [43, 654, 34, 60, 532, 46, 300];
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var average = sum / numbers.length;
   
    document.getElementById("result").innerHTML = "Average of numbers from the array: " + average;
}

window.onload = function() {
    calculateAverage();
}
