function convertTemperature() {

    let temp = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if (isNaN(temp)) {
        result.innerHTML = "⚠️ Please enter a valid temperature.";
        return;
    }

    let output = "";

    if (unit === "celsius") {
        let f = (temp * 9/5) + 32;
        let k = temp + 273.15;

        output = `
        <b>${temp} °C</b><br><br>
        Fahrenheit: <b>${f.toFixed(2)} °F</b><br>
        Kelvin: <b>${k.toFixed(2)} K</b>
        `;
    }

    else if (unit === "fahrenheit") {
        let c = (temp - 32) * 5/9;
        let k = c + 273.15;

        output = `
        <b>${temp} °F</b><br><br>
        Celsius: <b>${c.toFixed(2)} °C</b><br>
        Kelvin: <b>${k.toFixed(2)} K</b>
        `;
    }

    else if (unit === "kelvin") {
        let c = temp - 273.15;
        let f = (c * 9/5) + 32;

        output = `
        <b>${temp} K</b><br><br>
        Celsius: <b>${c.toFixed(2)} °C</b><br>
        Fahrenheit: <b>${f.toFixed(2)} °F</b>
        `;
    }

    result.innerHTML = output;
}

function resetFields() {
    document.getElementById("temperature").value = "";
    document.getElementById("unit").selectedIndex = 0;
    document.getElementById("result").innerHTML = "Your result will appear here.";
}