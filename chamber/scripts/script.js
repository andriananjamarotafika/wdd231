const displayDataAsGrid = (data) => {
    data.forEach((item) => {
        const image = document.createElement('img');
        const src = `images/${item.image}`;
        image.setAttribute('src', src);
        image.setAttribute('alt', `Logo of ${item.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '200');

        const name = document.createElement('h2');
        name.textContent = item.name;


        const phone = document.createElement('p');
        phone.innerHTML = `<b>Phone:</b> ${item.phone}`;

        const website = document.createElement('a');
        website.setAttribute('href', item.website);
        website.innerHTML = `<b>Website:</b> ${item.website}`;

        const card = document.createElement('div');
        card.classList.add('card');
        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(phone);
        card.appendChild(website);

        const listCompany = document.querySelector('.list-company');
        listCompany.appendChild(card);
    });
}

const displayDataAsList = (data) => {
    const listCompany = document.querySelector('.list-company');
    data.forEach((item) => {
        const listItem = document.createElement('li');

        [item.name, item.phone, item.website].forEach((value) => {
            const span = document.createElement('span');
            span.textContent = value;
            listItem.appendChild(span);
        });

        listCompany.appendChild(listItem);
    });
}

const gridViewButton = document.getElementById('grid-view');
const listViewButton = document.getElementById('list-view');


const fetchData = async () => {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) {
            throw new Error(`Request failed ${response.status}`);
        }
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
};

fetchData().then((data) => displayDataAsGrid(data));

gridViewButton.addEventListener('click', () => {
    const listCompany = document.querySelector('.list-company');
    listCompany.innerHTML = '';
    fetchData().then((data) => displayDataAsGrid(data));
});

listViewButton.addEventListener('click', () => {
    const listCompany = document.querySelector('.list-company');
    listCompany.innerHTML = '';
    fetchData().then((data) => displayDataAsList(data));
});

