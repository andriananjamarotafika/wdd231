

const displayData = (item) => {
    let index = 0;
    let tab = [];
    for (const key in item) {
        index++;
        if (item[key].membershipLevel == 2 || item[key].membershipLevel == 3) {
            tab.push(parseInt(index));
        }
    }

    for (let i = 0; i < 3; i++) {
        const random = Math.floor(Math.random() * tab.length);
        const image = document.createElement('img');
        const src = `images/${item[random].image}`;
        image.setAttribute('src', src);
        image.setAttribute('alt', `Logo of ${item[random].name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '200');

        const name = document.createElement('h2');
        name.textContent = item[random].name;


        const phone = document.createElement('p');
        phone.innerHTML = `<b>Phone:</b> ${item[random].phone}`;

        const website = document.createElement('a');
        website.setAttribute('href', item[random].website);
        website.innerHTML = `<b>Website:</b> ${item[random].website}`;

        const card = document.createElement('div');
        card.classList.add('card');
        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(phone);
        card.appendChild(website);

        const memberList = document.querySelector('.member-list');
        memberList.appendChild(card);
    }
}

const fetchData = async () => {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) {
            throw new Error(`Request failed ${response.status}`);
        }
        const jsonData = await response.json();

        displayData(jsonData);
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
};

fetchData();