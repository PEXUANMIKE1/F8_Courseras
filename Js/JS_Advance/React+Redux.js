import html from "./core.js"

const cars = ['BMW','Mercerdes','Audi','Hyndai']

const output = html`
    <h3>${false}</h3>
    <ul>
      ${cars.map(car => `<li>${car}</li>`)}
    </ul>
`

let app = document.querySelector('#root')
app.innerHTML=output
console.log(output)