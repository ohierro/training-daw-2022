window.onload = function () {
    console.log('document loaded');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let employees = JSON.parse(this.responseText).data;

            for (let i = 0; i < employees.length; i++) {
                addRow(employees[i]);
            }
        }
    };

    xhttp.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
    xhttp.send();
};

function addRow(employee) {
    let tbody = document.getElementsByTagName('tbody')[0];

    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerText = employee.id;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = employee.employee_name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = employee.employee_salary;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = employee.employee_age;
    tr.appendChild(td);

    tbody.appendChild(tr);
}
