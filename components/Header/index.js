// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const headerDiv = document.createElement('div')
  headerDiv.classList.add('header')

  const spanDate = document.createElement('span')
  spanDate.classList.add('date')
  headerDiv.appendChild(spanDate)

  const h1 = document.createElement('h1')
  h1.textContent = 'Lambda times'
  headerDiv.appendChild(h1)

  const spanTemp = document.createElement('span')
  spanTemp.classList.add('temp')

  spanTemp.textContent = `98°`
  headerDiv.appendChild(spanTemp)
  return headerDiv
}
const headerCon = document.querySelector('.header-container')
headerCon.appendChild(Header())
