import React, { useState } from "react";
import Temperature from "./Temperature";

export default function Calculator() {
    const [state, setState] = useState({
        temperature: "",
        scale: "c",
    });
    const handleChange = (scale) => (value) => {
        setState({
            temperature: value,
            scale,
        });
    };
    const toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) / 1.8;
    };

    const toFahrenheit = (celsius) => {
        return celsius * 1.8 + 32;
    };
    const tryConvert = (temperatureInput, func) => {
        const input = parseFloat(temperatureInput);
        if (Number.isNaN(input)) {
            return "";
        }
        let output = func(input);
        output = Math.round(output * 1000) / 1000;
        return output;
    }; 
    const celsius =
        state.scale === "f"
            ? tryConvert(state.temperature, toCelsius)
            : state.temperature;
    const fahrenheit =
        state.scale === "c"
            ? tryConvert(state.temperature, toFahrenheit)
            : state.temperature;

    return (
        <div>
            <Temperature
                title="Celsius"
                value={celsius}
                onHandleChange={handleChange("c")}
            />
            <Temperature
                title="Fahrenheit"
                value={fahrenheit}
                onHandleChange={handleChange("f")}
            />
        </div>
    );
}
