function getValues() {
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter valid numbers");
        return null;
    }

    return { a, b };
}

function add() {
    var values = getValues();
    if (values)
        document.getElementById("result").value = values.a + values.b;
}

function sub() {
    var values = getValues();
    if (values)
        document.getElementById("result").value = values.a - values.b;
}

function mul() {
    var values = getValues();
    if (values)
        document.getElementById("result").value = values.a * values.b;
}

function div() {
    var values = getValues();
    if (values) {
        if (values.b === 0) {
            alert("Cannot divide by zero");
            return;
        }
        document.getElementById("result").value = values.a / values.b;
    }
}