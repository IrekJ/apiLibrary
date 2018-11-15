
document.querySelector('#getMultiBtn').addEventListener('click', getMulti);
document.querySelector('#getSingleBtn').addEventListener('click', getSingle);
document.querySelector('#postBtn').addEventListener('click', addItem);
document.querySelector('#putBtn').addEventListener('click', updateItem);
document.querySelector('#deleteBtn').addEventListener('click', deleteItem);


const apiFetch = new ApiFetch();
const previewDiv = document.querySelector('#preview')
previewDiv.innerHTML = ""

function getMulti() {
    previewDiv.innerHTML = "<strong><small>Usage Sample: apiFetch.get('http://api.icndb.com/jokes/random/10')</small></strong> <hr/>";
    const url = 'http://api.icndb.com/jokes/random/10';
    apiFetch.get(url)
        .then(data => {
            data.value.forEach((item) => {
                previewDiv.innerHTML += `<strong>id:</strong> ${item.id} <br/>
                <strong>joke:</strong> ${item.joke} <hr/>`;
            });
            previewDiv.innerHTML += `<span style="color: red"><strong>RAW RESPONSE DATA</strong> <br/><br/> ${JSON.stringify(data.value)} </span>`;
        })
        .catch((err) => {
            alert(err);
        });
}

function getSingle() {
    previewDiv.innerHTML = "<strong><small>Usage Sample: apiFetch.get('https://jsonplaceholder.typicode.com/users/1')</small></strong> <hr/>";
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    apiFetch.get(url)
        .then(data => {
            previewDiv.innerHTML +=
                `<strong>id: </strong>${data.id} <br/>
                <strong>name:</strong> ${data.name} <br/>
                <strong>username: </strong>${data.username} <br/>
                <strong>email: </strong>${data.email} <br/>
                <strong>address: </strong><i><br/>
                <strong>street:</strong>${data.address.street} <br/>
                <strong>suite: </strong>${data.address.suite} <br/>
                <strong>city: </strong>${data.address.city} <br/>
                <strong>zipcode: </strong>${data.address.zipcode} </i><br/>
                <hr/>`;
            previewDiv.innerHTML += `<span style="color: red"><strong>RAW RESPONSE DATA</strong> <br/><br/> ${JSON.stringify(data)} </span>`;
        })
        .catch((err) => {
            alert(err);
        });
}

function deleteItem() {
    
    previewDiv.innerHTML = "<strong><small>Usage Sample: apiFetch.delete('https://jsonplaceholder.typicode.com/users/3')</small></strong> <hr/>";
    const url = 'https://jsonplaceholder.typicode.com/users/5';
    apiFetch.delete(url)
        .then(data => {
            previewDiv.innerHTML += `<span style="color: red"><strong>RAW RESPONSE DATA</strong> <br/><br/> ${data} </span>`;

        })
        .catch((err) => {
            alert(err);
        });
}

function addItem() {
    previewDiv.innerHTML = "<strong><small>Usage Sample: apiFetch.post('https://jsonplaceholder.typicode.com/users/', newItemObject)</small></strong> <hr/>";
    const url = 'https://jsonplaceholder.typicode.com/users/';
    const newItem = {
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031",
        website: "hildegard.org"
    }

    apiFetch.post(url,newItem)
        .then(data => {
            previewDiv.innerHTML +=
                `<strong>New Record with id: </strong> ${data.id} had been created<br/>
                <strong>name:</strong> ${data.name} <br/>
                <strong>username: </strong>${data.username} <br/>     
                <strong>email: </strong>${data.email} <br/>
                <strong>address: </strong><i><br/>     
                <strong>street:</strong>${data.address.street} <br/>     
                <strong>suite: </strong>${data.address.suite} <br/>     
                <strong>city: </strong>${data.address.city} <br/>
                <strong>zipcode: </strong>${data.address.zipcode} </i><br/>
                <hr/>`;
            previewDiv.innerHTML += `<span style="color: red"><strong>RAW RESPONSE DATA</strong> <br/><br/> ${JSON.stringify(data)} </span>`;

        })
}

function updateItem() {
    previewDiv.innerHTML = "<strong><small>Usage Sample: apiFetch.post('https://jsonplaceholder.typicode.com/users/3', newItemObject)</small></strong> <hr/>";
    const url = 'https://jsonplaceholder.typicode.com/users/3';
    const newItem = {
        name: "Leanne Graham",
        username: "LeanneG",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031",
        website: "hildegard.org"
    }

    apiFetch.put(url,newItem)
        .then(data => {
            previewDiv.innerHTML +=
                `<strong>New Record with id: </strong> ${data.id} had been updated<br/>
                <strong>name:</strong> ${data.name} <br/>
                <strong>username: </strong>${data.username} <br/>     
                <strong>email: </strong>${data.email} <br/>
                <strong>address: </strong><i><br/>     
                <strong>street:</strong>${data.address.street} <br/>     
                <strong>suite: </strong>${data.address.suite} <br/>     
                <strong>city: </strong>${data.address.city} <br/>
                <strong>zipcode: </strong>${data.address.zipcode} </i><br/>
                <hr/>`;
            previewDiv.innerHTML += `<span style="color: red"><strong>RAW RESPONSE DATA</strong> <br/><br/> ${JSON.stringify(data)} </span>`;

        })
}