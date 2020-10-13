//find()

const books = [
    { id: 101, title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
    { id: 102, title: 'Speaking JavaScript', author: 'Axel Rauschmayer' },
    { id: 103, title: 'Understanding ECMAScript 6', author: 'Nicholas C. Zakas' }
];

const bookResult = books.find(function(book) {
    return this.findBook(book);
}, {
    findBook: book => book.title == 'Understanding ECMAScript 6'
});
//// {id: 102, title: "Understanding ECMAScript 6", author: "Nicholas C. Zakas"}

//------------------------------------------------------------------------------

const bookResult = books.find(function(book) {
    return book.title == 'Understanding ECMAScript 6'
});
//// {id: 102, title: "Understanding ECMAScript 6", author: "Nicholas C. Zakas"}

//------------------------------------------------------------------------------

const bookResult = books.find(book => book.title == 'Understanding ECMAScript 6');
//// {id: 102, title: "Understanding ECMAScript 6", author: "Nicholas C. Zakas"}

//------------------------------------------------------------------------------


//findIndex()

const cities = [
    { id: 101, city: 'Pristina', country: 'Kosovo' },
    { id: 102, city: 'Sofia', country: 'Bulgaria' },
    { id: 103, city: 'Helsinki', country: 'Finland' },
    { id: 104, city: 'Athens', country: 'Greece' },
    { id: 105, city: 'Keiv', country: 'Ukraine' }
];

const cityIndex = cities.findIndex(city => city.city == 'Keiv');
////4

//------------------------------------------------------------------------------
const cityIndex = cities.findIndex(city => city.city == 'Manila');
////-1


//includes()

const fruits = ['apricot', 'avocado', 'banana', 'bell pepper',
    'bilberry', 'blackberry', 'blackcurrant'
];

fruits.includes('blackcurrant');
////true

fruits.includes('watermelon');
////false

//------------------------------------------------------------------------------

const fruits = ['dragonfruit', 'durian', 'eggplant', 'elderberry',
    'feijoa', 'fig', 'goji berry', 'gooseberry'
];

fruits.includes('fig', 2);
////true

fruits.includes('fig', 6);
////false

//------------------------------------------------------------------------------

//filter()

const flowerlist = [
    { category: 'Shrubs', name: 'Azalea' },
    { category: 'Shrubs', name: 'Tibouchina Semidecandra' },
    { category: 'Container Plants', name: 'Bonsai Tree' },
    { category: 'Container Plants', name: 'Calibrachoa Noa' },
    { category: 'Herbaceous Perennials', name: 'Iris Sibirica' }
];

let shrubs = flowerlist.filter(flower => flower.catergory === 'Shrubs');

//[{category: 'Shrubs', name: 'Azalea'},
// {category: 'Shrubs', name: 'Tibouchina Semidecandra'}]

let result = flowerlist.filter(shrubs);

//[{category: 'Shrubs', name: 'Azalea'},
// {category: 'Shrubs', name: 'Tibouchina Semidecandra'}]


//------------------------------------------------------------------------------