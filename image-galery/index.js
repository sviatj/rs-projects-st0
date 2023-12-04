const search = document.querySelector('.search');
const searchContainer = document.querySelector('.search_container');
const output = document.querySelector('.output');
const button = document.querySelector('.button');
const searchIcon = document.querySelector('.search_icon');

const key = 'Kf8cMcean-HYKe7Ma6_NWnQnuUJrox0EqBDAjfzJN-s';



  let searchInput = "";
  let imgPage = 1;
  
  
  async function getImages() {
    
      if (searchInput.length === 0) {
        searchInput = "mountains";
      }
      
      else if (searchInput.length > 0) {
        searchInput = searchContainer.value;
      }

      const url = `https://api.unsplash.com/search/photos?page=${imgPage}&query=${searchInput}&client_id=${key}&per_page=9&orientation=landscape`;

      const res = await fetch(url);
      const data = await res.json();
      showImages(data);

      }
  
  
    function showImages(data) {
      data.results.map((value) => {
          let imgUrl = value.urls.regular;
          const img = document.createElement('img');
          img.src = imgUrl;
          img.alt = 'image';
          output.append(img);
    })
  }
  
  
  search.addEventListener('submit', (event) => {
    event.preventDefault();
    if(imgPage === 1 || imgPage > 0) {
        output.innerHTML = '';
    }
    getImages();
  })

  button.addEventListener('click', () => {
    imgPage++;

    getImages(); 
  })

  window.addEventListener('load', function() {
    if(imgPage === 1 || imgPage > 0) {
      output.innerHTML = '';
  }
    getImages()
  });

    searchIcon.addEventListener('click', () => {
      output.innerHTML = '';
      getImages();
    })