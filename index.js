
// ============== FETCH-THEN-CATCH APPROACH ================

// const getData = fetch("https://jsonplaceholder.typicode.com/users").then((data) => {
//     return data.json();
//     }).then((objectData) => {
//     let tableData="";
//     objectData.map((values) => {
    //     tableData+=`<tr>
    //     <td>${values.id}</td>
    //     <td>${values.name}</td>
    //     <td>${values.email}</td>
    //     <td>${values.company.catchPhrase}</td>
    //   </tr>`
//     });
    // document.getElementById('table-body').innerHTML=tableData;
//     }).catch((err) => {
    // if (err) {
    //     document.querySelector('.table').classList.add('hide');
    //     document.querySelector('nav').classList.add('hide');
    //     document.querySelector('.error-info').classList.remove('hide');
    // }
// });



// ============== -ASYNC-AWAIT = FETCH-THEN-CATCH APPROACH ================

async function getData() {
    const dataFetch = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await dataFetch.json();
        return data;
}

window.addEventListener('load', () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        const field = document.querySelectorAll("field-box");
        field.removeChild(".loader")
    } )
})

getData().then((data) => {
    let tableData = '';
    data.map((values) => {
        tableData+=`<tr data-href="https://jsonplaceholder.typicode.com/users">
        <td>${values.id}</td>
        <td>${values.name}</td>
        <td>${values.email}</td>
        <td>${values.company.catchPhrase}</td>
      </tr>`
    })
    document.getElementById('table-body').innerHTML = tableData;
}).catch((err) => {
    if (err) {
        document.querySelector('.table').classList.add('hide');
        document.querySelector('nav').classList.add('hide');
        document.querySelector('.error-info').classList.remove('hide');
    }
})

$('.table').on("click", "tbody tr", function () {
    
    document.querySelector('.field-box').classList.add('hide');
    document.querySelector('.information').classList.remove('hide');
    
});





// getData((dataInfo) => {
//     let personalInfo = '';
//     dataInfo.map((info) => {
//         personalInfo = `
//         <h2>${info.name}</h2>
//         <p>${info.email}</p>
//         <h4>${info.address}</h4>
//         <h4>${info.catchPhrase}</h4>
//         `
//         document.getElementsByClassName('.information').innerHTML = personalInfo;
//     })
// })