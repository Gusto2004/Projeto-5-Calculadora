# Calculator

A calculator with the four basic operations, built with vanilla JavaScript. It was the first project I built on my own, as a consolidation exercise.

## Features

- Add, subtract, multiply and divide two numbers
- Support for decimal numbers
- Calculate with the Enter key, as well as the button
- History of the latest calculations, saved between visits
- Dark / light mode with a toggle button, remembered between visits
- Validation of invalid or empty inputs
- Handling of division by zero

## Technologies

- HTML5
- CSS3 (CSS variables for the themes)
- JavaScript (DOM, events, `switch`, `localStorage`)

## Concepts practiced

- Selecting DOM elements (`querySelector`)
- Click and keyboard events (`addEventListener`, `keydown`)
- Converting text to a number (`parseFloat`) and validating it (`isNaN`)
- Decision structure with `switch`
- "Early return" to handle error cases
- Persisting data in the browser with `localStorage`
- Switching themes with `classList.toggle` and CSS variables

## How to run

Open `index.html` in your browser, or use the "Live Server" extension in VS Code to see changes in real time.

## Demo

🔗 [View the live site](https://gusto2004.github.io/Projeto-5-Calculadora/)

## Next steps

- [ ] Add support for more operations (percentage, power)
- [ ] A button to clear the history
- [ ] Support for longer expressions (more than two numbers)
