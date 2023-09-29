const search = document.querySelector('.search');
const searchContainer = document.querySelector('.search_container');
const output = document.querySelector('.output');
const button = document.querySelector('.button');

const url = 'https://type.fit/api/quotes';

let searchInput = "";
let imgPage = 1;

async function getData() {
    searchInput = search_container.value;
  }
  getData();