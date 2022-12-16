fetch("https://jsonplaceholder.typicode.com/").then((data) => {
    return data.json(); 
}).then((objectData) => {
    let tableData="";
    objectData.map((values) => {
        tableData+=`<tr>
        <td>${values.id}</td>
        <td>${values.name}</td>
        <td>${values.username}</td>
        <td>${values.email}</td>
        <td>${values.address.city}</td>
      </tr>`
    });
    document.getElementById('table-body').innerHTML=tableData;
}).catch((err) => {
    if (err) {
        document.querySelector('.table').classList.add('hide');
        document.querySelector('.error-info').classList.remove('hide');
    }

})







// async function loadIntoTable(url) {
//   const res = await fetch(url);
//   const response = await res.json();

//       console.log(response);

//     //   const tableHead = table.querySelector('thead');
//     //   const tableBody = table.querySelector('tbody');
//     // const { header, row } = await response.json();

//   // // Clear the table
//   // tableHead.innerHTML = '<tr></tr>';
//   // tableBody.innerHTML = '';

//   // //Populate the headers
//   // for (const headText of headers) {
//   //     const headerElement = document.createElement('th');

//   //     headerElement.textContent = headText;
//   //     tableHead.querySelector('tr').appendChild(headerElement);
//   // }

//   // //Populate the row
// //   for (const row of response.data) {
// //       const rowElement = document.createElement('tr');

// //       for (const cellText of row) {
// //           const cellElement = document.createElement('td');

// //           cellElement.textContent = cellText;
// //           rowElement.appendChild(cellElement);
// //       }
// //       tableBody.appendChild(rowElement);
// //   }
// }

// loadIntoTable(
//   "https://jsonplaceholder.typicode.com/users?postId=1");
