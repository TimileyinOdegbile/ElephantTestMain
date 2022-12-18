// ============== ASYNC-AWAIT APPROACH ================

//   .catch((err) => {
//     if (err) {
//       document.querySelector(".table").classList.add("hide");
//       document.querySelector(".error-info").classList.remove("hide");
//     }
//   });


    // ============== ANOTHER ONE =======================

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(res);
    const data = res.json();
    return data;
}
getData().then((myData) => {
    let tableData = '';
    myData.map((value) => {
        tableData.innerHTML += `<tr>
        <td>${value.id}</td>
        <td>${value.name}</td>
        <td>${value.email}</td>
        <td>${value.website}</td>
        </tr>`
    });
    document.getElementById('table-body').innerHTML=tableData;

}).catch((err) => {
    console.log(err);
});

    // .catch((err) => {
        // if (err) {
        //     document.querySelector(".table").classList.add("hide");
        //     document.querySelector(".error-info").classList.remove("hide");
        //     }
    //      });




//     response.map((value) => {
//         return (
//             tableData.innerHTML += `<tr>
//                 <td>${value.id}</td>
//                 <td>${value.name}</td>
//                 <td>${value.email}</td>
//                 <td>${value.website}</td>
//             </tr>`
//         )
//     })
    
// }
// getData();



// ============== FETCH-THEN-CATCH APPROACH ================

// const getData = fetch("https://jsonplaceholder.typicode.com/users").then((data) => {
//     return data.json();
//     console.log(data);
//     }).then((objectData) => {
//     let tableData="";
//     objectData.map((values) => {
//         tableData+=`<tr>
//         <td>${values.id}</td>
//         <td>${values.name}</td>
//         <td>${values.email}</td>
//         <td>${values.company.catchPhrase}</td>
//       </tr>`
//     });
//     document.getElementById('table-body').innerHTML=tableData;
//     }).catch((err) => {
//     if (err) {
//         document.querySelector('.table').classList.add('hide');
//         document.querySelector('nav').classList.add('hide');
//         document.querySelector('.error-info').classList.remove('hide');
//     }
// });
