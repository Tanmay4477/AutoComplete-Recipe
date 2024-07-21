GET https://api.spoonacular.com/recipes/autocomplete

GET https://api.spoonacular.com/recipes/autocomplete?number=10&query=chick  
Parameters - 2 (number and query)

Api Key - 


Response - 

[
    {
        "id": 296687,
        "title": "chicken",
        "imageType": "jpg"
    },
    {
        "id": 42569,
        "title": "chicken bbq",
        "imageType": "jpg"
    },

    {
        "id": 83890,
        "title": "chicken blt",
        "imageType": "jpg"
    },
    {
        "id": 737543,
        "title": "chicken pie",
        "imageType": "jpg"
    }
]







<!DOCTYPE html>
<html>
<head>
   <title>Search Autocomplete Example</title>
   <style>
      #search-results {
      position: absolute;
      z-index: 1;
      list-style-type: none;
      margin: 0px;
      padding: 0px;  }
      #search-results li {
      padding: 5px;
      cursor: pointer; }
      #search-results li:hover {
      background-color: yellow;  }
   </style>
</head>
<body>
   <label for="search-input">Enter the state:</label><br>
   <input type="text" id="search-input" name="search-input">
   <ul id="search-results"></ul>
   <script>
      let searchInput = document.getElementById('search-input');
      let searchResults = document.getElementById('search-results');
      // define your search data as an array of strings
      let searchData = [
         'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal'
      ];
      
      // function to filter search results
      function filterResults(query) {
         return searchData.filter(item => item.toLowerCase().includes(query.toLowerCase()));
      }
      
      // function to display search results
      function displayResults(results) {
         searchResults.innerHTML = '';
         results.forEach(result => {
            let li = document.createElement('li');
            li.textContent = result;
            li.addEventListener('click', () => {
               searchInput.value = result;
               searchResults.innerHTML = '';
            });
            searchResults.appendChild(li);
         }); 
      }
      
      // event listener for search input
      searchInput.addEventListener('input', () => {
         let query = searchInput.value;
         if (query === '') {
            searchResults.innerHTML = '';
         } else {
            let results = filterResults(query);
            displayResults(results);
         } 
      });
      
      // event listener to close search results when clicking outside the input and the results
      document.addEventListener('click', (event) => {
         let isClickInsideInput = event.target === searchInput;
         let isClickInsideResults = searchResults.contains(event.target);
         if (!isClickInsideInput && !isClickInsideResults) {
            searchResults.innerHTML = '';
         } 
      });
   </script>
</body>
</html>