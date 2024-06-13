document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('search');
    const searchBtn = document.getElementById('searchBtn');
    const cardContainer = document.getElementById('cardContainer');
    const setSelect = document.getElementById('set');
    const typeSelect = document.getElementById('type');
    const subtypeSelect = document.getElementById('subtype');
    const supertypeSelect = document.getElementById('supertype');
    const raritySelect = document.getElementById('rarity');
    
    const apiUrl = 'https://api.pokemontcg.io/v2';

    // Request API function
    async function fetchCards(query) {
        try {
            const response = await fetch(`${apiUrl}/cards?${query}`, {
                headers: {
                    'X-Api-Key': '404c35ae-c7c7-4f82-903a-a380b401e691'
                }
            });
            const data = await response.json();
            displayCards(data.data);
            resetInputs();
        } catch (error) {
            console.error('Erro ao buscar as cartas:', error);
        }
    }

    // Show cards function
    function displayCards(cards) {
        cardContainer.innerHTML = '';
        cards.forEach(card => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card', 'mb-3');
            cardDiv.style.width = '18rem';
            cardDiv.innerHTML = `
                <img src="${card.images.large}" class="card-img-top" alt="${card.name}">
                <div class="card-body">
                    <h5 class="card-title">${card.name}</h5>
                    <p class="card-text">Set: ${card.set.name}</p>
                    <p class="card-text">Type: ${card.types ? card.types.join(', ') : 'N/A'}</p>
                    <p class="card-text">Rarity: ${card.rarity || 'N/A'}</p>
                </div>
            `;
            cardContainer.appendChild(cardDiv);
        });
    }

    // Function build query string based on selected filters
    function buildQueryString() {
        const searchText = searchInput.value.trim();
        const set = setSelect.value;
        const type = typeSelect.value;
        const subtype = subtypeSelect.value;
        const supertype = supertypeSelect.value;
        const rarity = raritySelect.value;

        let query = [];
        if (searchText) query.push(`q=name:"${searchText}"`);
        if (set) query.push(`q=set.id:"${set}"`);
        if (type) query.push(`q=types:"${type}"`);
        if (subtype) query.push(`q=subtypes:"${subtype}"`);
        if (supertype) query.push(`q=supertypes:"${supertype}"`);
        if (rarity) query.push(`q=rarity:"${rarity}"`);

        return query.join('&');
    }

    // Function to reset search input field and filters
    function resetInputs() {
        searchInput.value = '';
        searchInput.placeholder = 'Search for Pokémon name...';

        setSelect.selectedIndex = 0;
        typeSelect.selectedIndex = 0;
        subtypeSelect.selectedIndex = 0;
        supertypeSelect.selectedIndex = 0;
        raritySelect.selectedIndex = 0;
    }

    // Function to populate filters (sets, types, subtypes, supertypes, rarities)
    async function populateFilters() {
        try {
            // sets
            let response = await fetch(`${apiUrl}/sets`, {
                headers: {
                    'X-Api-Key': '404c35ae-c7c7-4f82-903a-a380b401e691'
                }
            });
            let data = await response.json();
            setSelect.innerHTML = ''; // Clear existing options
            const placeholderOption = document.createElement('option');
            placeholderOption.value = '';
            placeholderOption.textContent = 'Select Set';
            placeholderOption.disabled = true;
            placeholderOption.selected = true;
            setSelect.appendChild(placeholderOption);
            data.data.forEach(set => {
                const option = document.createElement('option');
                option.value = set.id;
                option.textContent = set.name;
                setSelect.appendChild(option);
            });

            // types
            response = await fetch(`${apiUrl}/types`, {
                headers: {
                    'X-Api-Key': '404c35ae-c7c7-4f82-903a-a380b401e691'
                }
            });
            data = await response.json();
            typeSelect.innerHTML = ''; // Clear existing options
            const typePlaceholderOption = document.createElement('option');
            typePlaceholderOption.value = '';
            typePlaceholderOption.textContent = 'Select Type';
            typePlaceholderOption.disabled = true;
            typePlaceholderOption.selected = true;
            typeSelect.appendChild(typePlaceholderOption);
            data.data.forEach(type => {
                const option = document.createElement('option');
                option.value = type;
                option.textContent = type;
                typeSelect.appendChild(option);
            });

            // subtypes
            response = await fetch(`${apiUrl}/subtypes`, {
                headers: {
                    'X-Api-Key': '404c35ae-c7c7-4f82-903a-a380b401e691'
                }
            });
            data = await response.json();
            subtypeSelect.innerHTML = ''; // Clear existing options
            const subtypePlaceholderOption = document.createElement('option');
            subtypePlaceholderOption.value = '';
            subtypePlaceholderOption.textContent = 'Select Subtype';
            subtypePlaceholderOption.disabled = true;
            subtypePlaceholderOption.selected = true;
            subtypeSelect.appendChild(subtypePlaceholderOption);
            data.data.forEach(subtype => {
                const option = document.createElement('option');
                option.value = subtype;
                option.textContent = subtype;
                subtypeSelect.appendChild(option);
            });

            // supertypes
            response = await fetch(`${apiUrl}/supertypes`, {
                headers: {
                    'X-Api-Key': '404c35ae-c7c7-4f82-903a-a380b401e691'
                }
            });
            data = await response.json();
            supertypeSelect.innerHTML = ''; // Clear existing options
            const supertypePlaceholderOption = document.createElement('option');
            supertypePlaceholderOption.value = '';
            supertypePlaceholderOption.textContent = 'Select Supertype';
            supertypePlaceholderOption.disabled = true;
            supertypePlaceholderOption.selected = true;
            supertypeSelect.appendChild(supertypePlaceholderOption);
            data.data.forEach(supertype => {
                const option = document.createElement('option');
                option.value = supertype;
                option.textContent = supertype;
                supertypeSelect.appendChild(option);
            });

            // rarities
            response = await fetch(`${apiUrl}/rarities`, {
                headers: {
                    'X-Api-Key': '404c35ae-c7c7-4f82-903a-a380b401e691'
                }
            });
            data = await response.json();
            raritySelect.innerHTML = ''; // Clear existing options
            const rarityPlaceholderOption = document.createElement('option');
            rarityPlaceholderOption.value = '';
            rarityPlaceholderOption.textContent = 'Select Rarity';
            rarityPlaceholderOption.disabled = true;
            rarityPlaceholderOption.selected = true;
            raritySelect.appendChild(rarityPlaceholderOption);
            data.data.forEach(rarity => {
                const option = document.createElement('option');
                option.value = rarity;
                option.textContent = rarity;
                raritySelect.appendChild(option);
            });

        } catch (error) {
            console.error('Erro ao popular os filtros:', error);
        }
    }

    // click search
    searchBtn.addEventListener('click', () => {
        const queryString = buildQueryString();
        fetchCards(queryString);
    });

    // press enter to search
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Previne o comportamento padrão do Enter
            const queryString = buildQueryString();
            fetchCards(queryString);
        }
    });

    // press enter to search on filter dropdowns
    const dropdowns = [setSelect, typeSelect, subtypeSelect, supertypeSelect, raritySelect];
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Previne o comportamento padrão do Enter
                const queryString = buildQueryString();
                fetchCards(queryString);
            }
        });
    });

    populateFilters();
});
