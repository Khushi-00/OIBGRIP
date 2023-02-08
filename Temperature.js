let Celsius = Document.GetElementById("Celsius");
let Fahrenheit = Document.GetElementById("Fahrenheit");

function CelToFar(){
    let Output = ( ParseFloat(Celsius.Value) * 9/5 ) + 32;
    Fahrenheit.Value = ParseFloat(Output.ToFixed(2));
}

function FarToCel(){
    let Output = ( ParseFloat(Fahrenheit.Value) - 32) * 5/9;
    Celsius.Value = ParseFloat( Output.ToFixed(2));
    Console.Log(Output);
}


