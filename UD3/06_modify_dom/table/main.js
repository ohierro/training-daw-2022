function onClick() {
    let tbody = document.getElementsByTagName('tbody')[0]

    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerText = '0'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Example'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Surname'
    tr.appendChild(td)

    tbody.appendChild(tr)
    console.log('add')
}