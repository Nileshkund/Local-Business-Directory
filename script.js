document.addEventListener("DOMContentLoaded", () => {
    const categorySelect = document.getElementById("category-select");
    const businessList = document.getElementById("business-list");

    
    const businesses = [
        { name: "Sample Restaurant 1", category: "restaurant", neighborhood: "Downtown", rating: 4.5, image: "restaurant1.jpg" },
        { name: "Sample Auto Service 1", category: "auto", neighborhood: "Northside", rating: 4.2, image: "auto1.jpg" },
        { name: "Sample Home Service 1", category: "home", neighborhood: "West End", rating: 4.8, image: "home1.jpg" },
        { name: "Sample Restaurant 2", category: "restaurant", neighborhood: "Downtown", rating: 4.2, image: "restaurant2.jpg" },
        { name: "Sample Auto Service 2", category: "auto", neighborhood: "Northside", rating: 4.0, image: "auto2.jpg" },
        { name: "Sample Home Service 2", category: "home", neighborhood: "West End", rating: 4.6, image: "home2.jpg" },
        { name: "Sample Restaurant 3", category: "restaurant", neighborhood: "Downtown", rating: 4.5, image: "restaurant3.jpg" },
        { name: "Sample Auto Service 3", category: "auto", neighborhood: "Northside", rating: 4.2, image: "auto3.jpg" },
        { name: "Sample Home Service 3", category: "home", neighborhood: "West End", rating: 4.8, image: "home3.jpg" },
        
    ];

    
    function filterBusinesses() {
        const selectedCategory = categorySelect.value;
        const filteredBusinesses = businesses.filter(business => selectedCategory === "all" || business.category === selectedCategory);
        displayBusinesses(filteredBusinesses);
    }

    
    function displayBusinesses(businesses) {
        businessList.innerHTML = "";
        businesses.forEach(business => {
            const card = document.createElement("div");
            card.className = "business-card";

            const img = document.createElement("img");
            img.src = business.image; 

            const info = document.createElement("div");
            info.className = "business-card-info";
            info.innerHTML = `
                <h2>${business.name}</h2>
                <p>Category: ${business.category}</p>
                <p>Neighborhood: ${business.neighborhood}</p>
                <p>Rating: ${business.rating}</p>
            `;

            card.appendChild(img);
            card.appendChild(info);
            businessList.appendChild(card);
        });
    }

    
    categorySelect.addEventListener("change", filterBusinesses);

   
    filterBusinesses();
});
