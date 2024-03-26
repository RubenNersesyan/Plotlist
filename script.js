const header = document.createElement("div")
header.classList.add("header-box")
//logotip
var logo_box = document.createElement("div")
logo_box.classList.add("logo-box")
var logo = document.createElement("a")
logo.href = '#';
const log_img = document.createElement('img');
log_img.src = './logoimg/white-logo.png';
logo.append(log_img);
logo_box.append(logo);
header.append(logo_box)
//menu
var menu = document.getElementById("menu")
header.append(menu)
document.body.append(header)

document.addEventListener('scroll', () => {
    var width = window.innerWidth;
    var scroll = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY;
    var links = document.querySelectorAll('#menu_ul>li>a');
    console.log(links);
    var lines = document.querySelectorAll('button>span');
    if (scroll > 100) {
        header.style.backgroundColor = 'white';
        log_img.src = 'https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/black-logo.png';
        if (width > 768) {
            links.forEach((e) => {
                e.style.color = 'black'
            })
        } else {
            links.forEach((e) => {
                e.style.color = 'black'
            })
        }
        lines.forEach((e) => {
            e.style.backgroundColor = 'black'
        })
    } else if (width < 768) {
        links.forEach((e) => {
            e.style.color = 'black'
        })
    } else {
        header.style.backgroundColor = '';
        log_img.src = './logoimg/white-logo.png';

        if (scroll > 100) {
            links.forEach((e) => {
                e.style.color = 'black'
            })
        } else {
            links.forEach((e) => {
                e.style.color = 'white'
            })
        }
        links[4].style.color = 'black'
        lines.forEach((e) => {
            e.style.backgroundColor = 'white'
        })
    }
});

var count = 0
var Menu_Btn = document.querySelector('.Menu_Btn');
Menu_Btn.onclick = function () {
    if (count % 2 == 0) {
        menu_ul.style.height = "200px"
        Menu_Btn.classList.add('Menu_Btn_Active')
    }
    else {
        menu_ul.style.height = "0px"
        Menu_Btn.classList.remove('Menu_Btn_Active')
    }
    count++
}
//banner
var banner = document.createElement("div")
banner.classList.add("banner-box")
document.body.append(banner)
//actives
var ACTIVE_LISTINGS = document.createElement("div")
ACTIVE_LISTINGS.classList.add("active-listings")
//....toptext
var top_text = document.createElement("div")
top_text.classList.add("top-text")
//.....text
var active_div = document.createElement("div")
var active = document.createElement("h6")
var find_text_div = document.createElement("div")
var Find_Nearby_Places_Things = document.createElement("h2")
active.innerText = "OVER 36,500+ ACTIVE LISTINGS"
Find_Nearby_Places_Things.innerText = "Find Nearby Places & Things"
active_div.append(active)
find_text_div.append(Find_Nearby_Places_Things)
top_text.append(active_div, find_text_div)
ACTIVE_LISTINGS.append(top_text)
banner.append(ACTIVE_LISTINGS)
//....search field
var search_field = document.createElement("div")
search_field.classList.add("search-field")
ACTIVE_LISTINGS.append(search_field)
//selection and serarch and input div......
var div_areas_search = document.createElement("div")
var location_div_serach = document.createElement("div")
var price_div_search = document.createElement("div")
var buttom_div = document.createElement("div")
search_field.append(div_areas_search, location_div_serach, price_div_search, buttom_div)
//....areas_selection
var areas_selection = document.createElement("select")
areas_selection.classList.add("areas-select")
var optons_all_areas = document.createElement("option")
optons_all_areas.innerText = "All areas"
var new_village = document.createElement("option")
new_village.innerText = "New Village"
var old_town = document.createElement("option")
old_town.innerText = "Old Town"
var modern_city = document.createElement("option")
modern_city.innerText = "Modern City"
areas_selection.append(optons_all_areas, new_village, old_town, modern_city)
div_areas_search.append(areas_selection)
//.location input
var location_input = document.createElement("input")
location_input.classList.add("location-input")
location_input.placeholder = "Enter a loaction"
location_div_serach.append(location_input)
//....price selection
var price_selection = document.createElement("select")
price_selection.classList.add("price-select")
var optons_pricerange = document.createElement("option")
optons_pricerange.innerText = "Price Range"
var Price_1 = document.createElement("option")
Price_1.innerText = "$150-$250"
var Price_2 = document.createElement("option")
Price_2.innerText = "$250-$500"
var Price_3 = document.createElement("option")
Price_3.innerText = "$500-$1000"
var Price_max = document.createElement("option")
Price_max.innerText = "$1,000 or more"
price_div_search.append(price_selection)
price_selection.append(optons_pricerange, Price_1, Price_2, Price_3, Price_max)
//button
//ikon button
var button = document.createElement("button")
button.classList.add("button_serach_filed")
var ikon_button = document.createElement("i")
ikon_button.className = "fa-solid fa-magnifying-glass"
button.innerText = "Serach Now"
button.append(ikon_button)
buttom_div.append(button)
//.....Categories
var Categories = document.createElement("div")
Categories.classList.add("Categories")
var Categories_ul = document.createElement("ul")
Categories.append(Categories_ul)
ACTIVE_LISTINGS.append(Categories)
//......................................

const Categories_Data = [
    {
        img: 'https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-01.png',
        name: ' Apartments'
    },
    {
        img: 'https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-02.png',
        name: 'Food & Life'
    },
    {
        img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-03.png",
        name: "Cars"
    },
    {
        img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-04.png",
        name: "Shopping"
    },
    {
        img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-05.png",
        name: "Traveling"
    }
]

Categories_Data.map((item) => {
    const Data_Box = document.createElement('li');
    //...................................
    const Data = document.createElement('a');
    //............................
    const Data_Img_Box = document.createElement('div');
    const Data_Img = document.createElement('img');
    Data_Img.src = item.img;
    Data_Img_Box.append(Data_Img);
    //...................................
    const Data_Name_Box = document.createElement('div');
    const Data_Name = document.createElement('h3');
    Data_Name_Box.append(Data_Name);
    Data_Name.innerText = item.name;
    //............................
    Data.append(Data_Img_Box, Data_Name_Box)
    Data_Box.append(Data);
    Categories_ul.append(Data_Box)
})


////// populare categories box 
const Popular_categories_box = document.createElement("div")
Popular_categories_box.classList.add("Papular-categories-box")
document.body.append(Popular_categories_box)
///////Populare header and header text
const Popular_box_header = document.createElement("div")
Popular_box_header.classList.add("Popular-box-header")
Popular_categories_box.append(Popular_box_header)
const populare_categories_div_text = document.createElement("div")
Popular_box_header.append(populare_categories_div_text)
const populare_categories_text = document.createElement("h2")
populare_categories_text.innerText = "Popular Categories"
populare_categories_div_text.append(populare_categories_text)
const check_Them_out_div_text = document.createElement("div")
Popular_box_header.append(check_Them_out_div_text)
const check_Them_out_text = document.createElement("h4")
check_Them_out_text.innerText = "CHECK THEM OUT"
check_Them_out_div_text.append(check_Them_out_text)
////categoris box
const Categories_box = document.createElement("div")
Categories_box.classList.add("Categories-box")
Popular_categories_box.append(Categories_box)
/////categories
const Category_Selection_div = document.createElement("div")
Category_Selection_div.classList.add("categories-list")
const Categories_selection = document.createElement("ul")
Category_Selection_div.append(Categories_selection)
Categories_box.append(Category_Selection_div)
var categories_selection_data = [
    {
        img: 'https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-01.png',
        name: ' Apartments',
        id: "apartaments"
    },
    {
        img: 'https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-02.png',
        name: 'Food & Life',
        id: "Food_life"
    },
    {
        img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-03.png",
        name: "Cars",
        id: "cars"
    },
    {
        img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-04.png",
        name: "Shopping",
        id: "shopping"
    },
    {
        img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/search-icon-05.png",
        name: "Traveling",
        id: "traveling"
    },

]

categories_selection_data.forEach((item) => {
    const list_categories = document.createElement("li")
    const categories_button = document.createElement("button")
    categories_button.id = item.id
    categories_button.innerText = item.name
    if (window.innerWidth <= 768) {
        categories_button.innerText = ''
    }
    ////////////////////////////////////////////
    const categories_button_img_box = document.createElement("div")
    const categories_button_img = document.createElement("img")
    categories_button_img.src = item.img
    categories_button_img_box.append(categories_button_img)
    categories_button.append(categories_button_img_box)
    ////////////////////////////////////////////
    Categories_selection.append(list_categories)
    list_categories.append(categories_button)
})

function animation(element) {
    element.style.animation = 'translate 0.5s linear forwards';
    setTimeout(() => {
        element.style.animation = '';
    }, 800);
}

const categories_info_box = document.createElement("div")
categories_info_box.classList.add("categories-info-box")
Categories_box.append(categories_info_box)
const info_box = document.createElement("div")
info_box.classList.add("info-box")
categories_info_box.append(info_box)
const info_header = document.createElement("div")
info_box.append(info_header)
const info_header_text = document.createElement("h1")
info_header_text.innerHTML = "One Of The Most Trending Stuffs Right Now!"
info_header.append(info_header_text)
const info_text_div = document.createElement("div")
info_box.append(info_text_div)
const info_text = document.createElement("p")
info_text.innerText = "Plot Listing is a responsive Bootstrap 5 website template that included 4 different HTML pages. This template is provided by TemplateMo website. You can apply this layout for your static or dynamic CMS websites."
info_text_div.append(info_text)
const button_div_info = document.createElement("div")
info_box.append(button_div_info)
const button_info = document.createElement("button")
button_info.innerText = " Discover More"
button_info.classList.add("info-button")
button_div_info.append(button_info)
const button_info_ikon = document.createElement("i")
button_info_ikon.className = "fa-solid fa-eye"
button_info.append(button_info_ikon)
//////info img
const info_img_div = document.createElement("div")
categories_info_box.append(info_img_div)
const info_img = document.createElement("img")
info_img.src = "./info_img/tabs-image-01.jpg"
info_img_div.append(info_img)
///////////////////////////////////////////////
const list_apartaments_button = document.getElementById("apartaments");
const list_food_life_button = document.getElementById("Food_life")
const list_cars_button = document.getElementById("cars")
const list_shopping_button = document.getElementById("shopping")
const list_traveling_button = document.getElementById("traveling")
list_apartaments_button.focus()
//////////////////////////
list_apartaments_button.onclick = function () {
    animation(categories_info_box)
    info_header_text.innerHTML = "One Of The Most Trending Stuffs Right Now!"
    info_img.src = "./info_img/tabs-image-01.jpg"
    info_text.innerText = "Plot Listing is a responsive Bootstrap 5 website template that included 4 different HTML pages. This template is provided by TemplateMo website. You can apply this layout for your static or dynamic CMS websites."
}
list_food_life_button.onclick = function () {
    animation(categories_info_box)
    info_header_text.innerHTML = "Food and Lifestyle category is here"
    info_img.src = "./info_img/tabs-image-02.jpg"
    info_text.innerText = "You can feel free to download, edit and apply this template for your website. Please tell your friends about TemplateMo website"
}
list_cars_button.onclick = function () {
    animation(categories_info_box)
    info_header_text.innerHTML = "Best car rentals for your trips!"
    info_img.src = "./info_img/tabs-image-03.jpg"
    info_text.innerText = "Did you know? You can get the best free HTML templates on Too CSS blog. Visit the blog pages and explore fresh and latest website templates."
}
list_shopping_button.onclick = function () {
    animation(categories_info_box)
    info_header_text.innerHTML = "Shopping List: Images from Unsplash"
    info_img.src = "./info_img/tabs-image-04.jpg"
    info_text.innerText = "Image credits go to Unsplash website that provides free stock photos for anyone. Images used in this Plot Listing template are from Unsplash."
}
list_traveling_button.onclick = function () {
    animation(categories_info_box)
    info_header_text.innerHTML = "Information and Safety Tips for Traveling"
    info_img.src = "./info_img/tabs-image-05.jpg"
    info_text.innerText = "You are allowed to use this template for your commercial websites. You are NOT allowed to redistribute this template ZIP file on any Free CSS collection websites."
}
function animation(element) {
    element.style.animation = 'translate 0.5s linear forwards';
    setTimeout(() => {
        element.style.animation = '';
    }, 800);
}

//////////////////////

const reset_listing_box = document.createElement("div")
reset_listing_box.classList.add("reset-listing-box")
document.body.append(reset_listing_box)
////
const reset_listing_header_text = document.createElement("div")
reset_listing_header_text.classList.add("reset-listing-header")
reset_listing_box.append(reset_listing_header_text)
///
const div_text_reset_listing = document.createElement("div")
reset_listing_header_text.append(div_text_reset_listing)
const reset_listing_text = document.createElement("h1")
reset_listing_text.innerText = "Recent Listing"
div_text_reset_listing.append(reset_listing_text)
///
const reset_check_div = document.createElement("div")
reset_listing_header_text.append(reset_check_div)
const check_text = document.createElement("h3")
check_text.innerText = "CHECK THEM OUT"
reset_check_div.append(check_text)
/////////////////////////////////////
const reset_box = document.createElement("div")
reset_box.classList.add("reset-box")
reset_listing_box.append(reset_box)
///////////
const reset_slide_container = document.createElement("div")
reset_box.append(reset_slide_container)
reset_slide_container.classList.add("container-slide-box")
////////
const slide_div = document.createElement("div")
slide_div.classList.add("slide-div")
const slide_div2 = document.createElement("div")
slide_div2.classList.add("slide-div")
const slide_div3 = document.createElement("div")
slide_div3.classList.add("slide-div")
reset_slide_container.append(slide_div, slide_div2, slide_div3)
const slide_data1 = [
    {
        Reviews: " (18) Reviews",
        headertext: "1. First Apartament Unit",
        by: "by:Sale Agent",
        price: "450 - $950 / month with taxes",
        detalies: "detalies:",
        sqft: "2760 sq ft",
        bethroomstext: "4 Bathrooms",
        bedroomstext: "4 Bedrooms",
        bathroomsikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-03.png",
        bedroomsikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-02.png",
        ikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-01.png",
        img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-01.jpg",
    },
    {
        Reviews: "(24) Reviews",
        headertext: "2. Another House of Gaming",
        by: "by:Sale Agent",
        price: "1,400 - $3,500 / month with taxes",
        detalies: "detalies:",
        sqft: "3650 sq ft",
        bethroomstext: "3 Bathrooms",
        bedroomstext: "4 Bedrooms",
        bathroomsikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-03.png",
        bedroomsikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-02.png",
        ikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-01.png",
        img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-02.jpg",
    },
    {
        Reviews: "(36) Reviews",
        headertext: "3. Secret Place Hidden House",
        by: "by:Best Property",
        price: "1,500 - $3,600 / month with taxes",
        detalies: "detalies:",
        sqft: "5500 sq ft",
        bethroomstext: "3 Bathrooms",
        bedroomstext: "4 Bedrooms",
        bathroomsikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-03.png",
        bedroomsikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-02.png",
        ikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-01.png",
        img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-03.jpg"
    },
]
const slide_data2 = [
    {
        Reviews: "(24) Reviews",
        headertext: "4. Sunshine Fourth Apartment",
        by: "by: Sale Agent",
        price: " $3,600 / month with taxes",
        detalies: "Details: ",
        sqft: "3660 sq ft",
        bethroomstext: " 3 Bathrooms",
        bedroomstext: " 5 Bedrooms",
        bathroomsikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-03.png",
        bedroomsikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-02.png",
        ikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-01.png",
        img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-04.jpg"
    },
    {
        Reviews: "(32) Reviews",
        headertext: "5. Best House Of the Town",
        by: "by: Sale Agent",
        price: " $5,600 / month with taxes",
        detalies: "Details: ",
        sqft: "1750 sq ft",
        bethroomstext: " 3 Bathrooms",
        bedroomstext: " 6 Bedrooms",
        bathroomsikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-03.png",
        bedroomsikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-02.png",
        ikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-01.png",
        img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-05.jpg"
    },
    {
        Reviews: "(40) Reviews",
        headertext: "6. Amazing Pool Party Villa",
        by: "by: Sale Agent",
        price: " $3,850 / month with taxes",
        detalies: "Details: ",
        sqft: "3660 sq ft",
        bethroomstext: " 3 Bathrooms",
        bedroomstext: " 4 Bedrooms",
        bathroomsikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-03.png",
        bedroomsikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-02.png",
        ikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-01.png",
        img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-06.jpg"
    }
]
const slide_data3 = [
    {
        Reviews: "(24) Reviews",
        headertext: "7. Sunny Apartment",
        by: "by: Sale Agent",
        price: " $5,450 / month with taxes",
        detalies: "Details: ",
        sqft: "1640 sq ft",
        bethroomstext: " 5 Bathrooms",
        bedroomstext: " 8 Bedrooms",
        bathroomsikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-03.png",
        bedroomsikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-02.png",
        ikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-01.png",
        img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-05.jpg"
    },
    {
        Reviews: "(15) Reviews",
        headertext: "8. Third House of Gaming",
        by: "by: Sale Agent",
        price: " $5,520 / month with taxes",
        detalies: "Details: ",
        sqft: "1660 sq ft",
        bethroomstext: " 4 Bathrooms",
        bedroomstext: " 5 Bedrooms",
        bathroomsikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-03.png",
        bedroomsikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-02.png",
        ikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-01.png",
        img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-02.jpg"
    },
    {
        Reviews: "(20) Reviews",
        headertext: "9. Relaxing BBQ Party Villa",
        by: "by: Sale Agent",
        price: " $4,760 / month with taxes",
        detalies: "Details: ",
        sqft: "2880 sq ft",
        bethroomstext: " 4 Bathrooms",
        bedroomstext: " 6 Bedrooms",
        bathroomsikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-03.png",
        bedroomsikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-02.png",
        ikon: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-01.png",
        img: "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-06.jpg"
    }
]
slide_data1.forEach((item) => {
    const slide_box = document.createElement("div")
    slide_box.classList.add("slide-box")
    slide_div.append(slide_box)
    const slide_div_img = document.createElement("div")
    slide_div_img.classList.add("slide-div-img")
    slide_box.append(slide_div_img)
    const slide_img = document.createElement("img")
    slide_img.src = item.img
    slide_div_img.append(slide_img)
    const slide_info_box = document.createElement("div")
    slide_box.append(slide_info_box)
    slide_info_box.classList.add("slide-info-box")
    const slide_info1 = document.createElement("div")
    slide_info1.classList.add("slide_info1")
    const slide_info1_text_div1 = document.createElement("div")
    const slide_info1_text = document.createElement("h2")
    slide_info1_text.innerText = item.headertext
    slide_info1_text_div1.append(slide_info1_text)
    slide_info1.append(slide_info1_text_div1)
    const slide_info1_div2 = document.createElement("div")
    const Star_div = document.createElement("div")
    for (i = 1; i < 6; i++) {
        const star = document.createElement("i")
        star.className = "fa-regular fa-star"
        Star_div.append(star)
    }
    const slide_star_text_div = document.createElement("div")
    const slide_star_text = document.createElement("h4")
    slide_star_text.innerText = item.Reviews
    slide_info1_div2.append(Star_div)
    slide_star_text_div.append(slide_star_text)
    slide_info1_div2.append(slide_star_text_div)
    slide_info1.append(slide_info1_div2)
    slide_info_box.append(slide_info1)
    const slide_info2 = document.createElement("div")
    slide_info2.classList.add("slide_info2")
    slide_info_box.append(slide_info2)
    const slide_info2_text = document.createElement("span")
    slide_info2_text.innerHTML = item.by
    slide_info2.append(slide_info2_text)
    const slide_info3 = document.createElement("div")
    slide_info3.classList.add("slide_info3")
    slide_info_box.append(slide_info3)
    const slide_ikon_div = document.createElement("div")
    slide_info3.append(slide_ikon_div)
    const slide_ikon = document.createElement("img")
    slide_ikon.src = item.ikon
    slide_ikon_div.append(slide_ikon)
    const slide_info3_text = document.createElement("h4")
    slide_info3_text.innerText = item.price
    slide_info3.append(slide_info3_text)
    const slide_info4 = document.createElement("div")
    slide_info4.classList.add("slide_info4")
    slide_info_box.append(slide_info4)
    const slide_info4_text1 = document.createElement("h3")
    const slide_info4_text2 = document.createElement("h4")
    slide_info4_text1.innerHTML = item.detalies
    slide_info4_text2.innerHTML = item.sqft
    slide_info4.append(slide_info4_text1)
    slide_info4.append(slide_info4_text2)
    const slide_info5 = document.createElement("div")
    slide_info5.classList.add("slide_info5")
    slide_info_box.append(slide_info5)
    const slide_info5_div1 = document.createElement("div")
    slide_info5_div1.classList.add("bedrooms-bethrooms")
    slide_info5.append(slide_info5_div1)
    const slide_bedrooms = document.createElement("div")
    slide_bedrooms.classList.add("bedrooms")
    const slide_bedrooms_img_div = document.createElement("div")
    const slide_bedrooms_img = document.createElement("img")
    slide_bedrooms_img.src = item.bedroomsikon
    const slide_bedrooms_text = document.createElement("h4")
    slide_bedrooms_text.innerHTML = item.bedroomstext
    slide_bedrooms.append(slide_bedrooms_img_div)
    slide_bedrooms_img_div.append(slide_bedrooms_img)
    slide_bedrooms.append(slide_bedrooms_text)
    const slide_bathrooms = document.createElement("div")
    slide_bathrooms.classList.add("bathrooms")
    const slide_bathrooms_img_div = document.createElement("div")
    const slide_bathrooms_img = document.createElement("img")
    slide_bathrooms_img.src = item.bathroomsikon
    slide_bathrooms.append(slide_bathrooms_img_div)
    slide_bathrooms_img_div.append(slide_bathrooms_img)
    const slide_bathrooms_text = document.createElement("h4")
    slide_bathrooms_text.innerText = item.bethroomstext
    slide_bathrooms.append(slide_bathrooms_text)
    slide_info5_div1.append(slide_bedrooms, slide_bathrooms)
    const slide_info5_div2 = document.createElement("div")
    const slide_button = document.createElement("button")
    slide_button.innerText = "Contact Now"
    const slide_button_ikon = document.createElement("i")
    slide_button_ikon.className = "fa-regular fa-eye"
    slide_button.append(slide_button_ikon)
    slide_info5_div2.append(slide_button)
    slide_info5.append(slide_info5_div2)
})
slide_data2.forEach((item) => {
    const slide_box2 = document.createElement("div")
    slide_box2.classList.add("slide-box")
    slide_div2.append(slide_box2)
    const slide2_div_img = document.createElement("div")
    slide2_div_img.classList.add("slide-div-img")
    slide_box2.append(slide2_div_img)
    const slide2_img = document.createElement("img")
    slide2_img.src = item.img
    slide2_div_img.append(slide2_img)
    const slide2_info_box = document.createElement("div")
    slide_box2.append(slide2_info_box)
    slide2_info_box.classList.add("slide-info-box")
    const slide2_info1 = document.createElement("div")
    slide2_info1.classList.add("slide_info1")
    const slide2_info1_text_div1 = document.createElement("div")
    const slide2_info1_text = document.createElement("h2")
    slide2_info1_text.innerText = item.headertext
    slide2_info1_text_div1.append(slide2_info1_text)
    slide2_info1.append(slide2_info1_text_div1)
    const slide2_info1_div2 = document.createElement("div")
    const Star2_div = document.createElement("div")
    for (i = 1; i < 6; i++) {
        const star2 = document.createElement("i")
        star2.className = "fa-regular fa-star"
        Star2_div.append(star2)
    }
    const slide2_star_text_div = document.createElement("div")
    const slide2_star_text = document.createElement("h4")
    slide2_star_text.innerText = item.Reviews
    slide2_info1_div2.append(Star2_div)
    slide2_star_text_div.append(slide2_star_text)
    slide2_info1_div2.append(slide2_star_text_div)
    slide2_info1.append(slide2_info1_div2)
    slide2_info_box.append(slide2_info1)
    const slide2_info2 = document.createElement("div")
    slide2_info2.classList.add("slide_info2")
    slide2_info_box.append(slide2_info2)
    const slide2_info2_text = document.createElement("span")
    slide2_info2_text.innerHTML = item.by
    slide2_info2.append(slide2_info2_text)
    const slide2_info3 = document.createElement("div")
    slide2_info3.classList.add("slide_info3")
    slide2_info_box.append(slide2_info3)
    const slide2_ikon_div = document.createElement("div")
    slide2_info3.append(slide2_ikon_div)
    const slide2_ikon = document.createElement("img")
    slide2_ikon.src = item.ikon
    slide2_ikon_div.append(slide2_ikon)
    const slide2_info3_text = document.createElement("h4")
    slide2_info3_text.innerText = item.price
    slide2_info3.append(slide2_info3_text)
    const slide2_info4 = document.createElement("div")
    slide2_info4.classList.add("slide_info4")
    slide2_info_box.append(slide2_info4)
    const slide2_info4_text1 = document.createElement("h3")
    const slide2_info4_text2 = document.createElement("h4")
    slide2_info4_text1.innerHTML = item.detalies
    slide2_info4_text2.innerHTML = item.sqft
    slide2_info4.append(slide2_info4_text1)
    slide2_info4.append(slide2_info4_text2)
    const slide2_info5 = document.createElement("div")
    slide2_info5.classList.add("slide_info5")
    slide2_info_box.append(slide2_info5)
    const slide2_info5_div1 = document.createElement("div")
    slide2_info5_div1.classList.add("bedrooms-bethrooms")
    slide2_info5.append(slide2_info5_div1)
    const slide2_bedrooms = document.createElement("div")
    slide2_bedrooms.classList.add("bedrooms")
    const slide2_bedrooms_img_div = document.createElement("div")
    const slide2_bedrooms_img = document.createElement("img")
    slide2_bedrooms_img.src = item.bedroomsikon
    const slide2_bedrooms_text = document.createElement("h4")
    slide2_bedrooms_text.innerHTML = item.bedroomstext
    slide2_bedrooms.append(slide2_bedrooms_img_div)
    slide2_bedrooms_img_div.append(slide2_bedrooms_img)
    slide2_bedrooms.append(slide2_bedrooms_text)
    const slide2_bathrooms = document.createElement("div")
    slide2_bathrooms.classList.add("bathrooms")
    const slide2_bathrooms_img_div = document.createElement("div")
    const slide2_bathrooms_img = document.createElement("img")
    slide2_bathrooms_img.src = item.bathroomsikon
    slide2_bathrooms.append(slide2_bathrooms_img_div)
    slide2_bathrooms_img_div.append(slide2_bathrooms_img)
    const slide2_bathrooms_text = document.createElement("h4")
    slide2_bathrooms_text.innerText = item.bethroomstext
    slide2_bathrooms.append(slide2_bathrooms_text)
    slide2_info5_div1.append(slide2_bedrooms, slide2_bathrooms)
    const slide2_info5_div2 = document.createElement("div")
    const slide2_button = document.createElement("button")
    slide2_button.innerText = "Contact Now"
    const slide2_button_ikon = document.createElement("i")
    slide2_button_ikon.className = "fa-regular fa-eye"
    slide2_button.append(slide2_button_ikon)
    slide2_info5_div2.append(slide2_button)
    slide2_info5.append(slide2_info5_div2)
})
slide_data3.forEach((item) => {
    const slide_box3 = document.createElement("div")
    slide_box3.classList.add("slide-box")
    slide_div3.append(slide_box3)
    const slide3_div_img = document.createElement("div")
    slide3_div_img.classList.add("slide-div-img")
    slide_box3.append(slide3_div_img)
    const slide3_img = document.createElement("img")
    slide3_img.src = item.img
    slide3_div_img.append(slide3_img)
    const slide3_info_box = document.createElement("div")
    slide_box3.append(slide3_info_box)
    slide3_info_box.classList.add("slide-info-box")
    const slide3_info1 = document.createElement("div")
    slide3_info1.classList.add("slide_info1")
    const slide3_info1_text_div1 = document.createElement("div")
    const slide3_info1_text = document.createElement("h2")
    slide3_info1_text.innerText = item.headertext
    slide3_info1_text_div1.append(slide3_info1_text)
    slide3_info1.append(slide3_info1_text_div1)
    const slide3_info1_div2 = document.createElement("div")
    const Star3_div = document.createElement("div")
    for (i = 1; i < 6; i++) {
        const Star3 = document.createElement("i")
        Star3.className = "fa-regular fa-star"
        Star3_div.append(Star3)
    }
    const slide3_star_text_div = document.createElement("div")
    const slide3_star_text = document.createElement("h4")
    slide3_star_text.innerText = item.Reviews
    slide3_info1_div2.append(Star3_div)
    slide3_star_text_div.append(slide3_star_text)
    slide3_info1_div2.append(slide3_star_text_div)
    slide3_info1.append(slide3_info1_div2)
    slide3_info_box.append(slide3_info1)
    const slide3_info2 = document.createElement("div")
    slide3_info2.classList.add("slide_info2")
    slide3_info_box.append(slide3_info2)
    const slide3_info2_text = document.createElement("span")
    slide3_info2_text.innerHTML = item.by
    slide3_info2.append(slide3_info2_text)
    const slide3_info3 = document.createElement("div")
    slide3_info3.classList.add("slide_info3")
    slide3_info_box.append(slide3_info3)
    const slide3_ikon_div = document.createElement("div")
    slide3_info3.append(slide3_ikon_div)
    const slide3_ikon = document.createElement("img")
    slide3_ikon.src = item.ikon
    slide3_ikon_div.append(slide3_ikon)
    const slide3_info3_text = document.createElement("h4")
    slide3_info3_text.innerText = item.price
    slide3_info3.append(slide3_info3_text)
    const slide3_info4 = document.createElement("div")
    slide3_info4.classList.add("slide_info4")
    slide3_info_box.append(slide3_info4)
    const slide3_info4_text1 = document.createElement("h3")
    const slide3_info4_text2 = document.createElement("h4")
    slide3_info4_text1.innerHTML = item.detalies
    slide3_info4_text2.innerHTML = item.sqft
    slide3_info4.append(slide3_info4_text1)
    slide3_info4.append(slide3_info4_text2)
    const slide3_info5 = document.createElement("div")
    slide3_info5.classList.add("slide_info5")
    slide3_info_box.append(slide3_info5)
    const slide3_info5_div1 = document.createElement("div")
    slide3_info5_div1.classList.add("bedrooms-bethrooms")
    slide3_info5.append(slide3_info5_div1)
    const slide3_bedrooms = document.createElement("div")
    slide3_bedrooms.classList.add("bedrooms")
    const slide3_bedrooms_img_div = document.createElement("div")
    const slide3_bedrooms_img = document.createElement("img")
    slide3_bedrooms_img.src = item.bedroomsikon
    const slide3_bedrooms_text = document.createElement("h4")
    slide3_bedrooms_text.innerHTML = item.bedroomstext
    slide3_bedrooms.append(slide3_bedrooms_img_div)
    slide3_bedrooms_img_div.append(slide3_bedrooms_img)
    slide3_bedrooms.append(slide3_bedrooms_text)
    const slide3_bathrooms = document.createElement("div")
    slide3_bathrooms.classList.add("bathrooms")
    const slide3_bathrooms_img_div = document.createElement("div")
    const slide3_bathrooms_img = document.createElement("img")
    slide3_bathrooms_img.src = item.bathroomsikon
    slide3_bathrooms.append(slide3_bathrooms_img_div)
    slide3_bathrooms_img_div.append(slide3_bathrooms_img)
    const slide3_bathrooms_text = document.createElement("h4")
    slide3_bathrooms_text.innerText = item.bethroomstext
    slide3_bathrooms.append(slide3_bathrooms_text)
    slide3_info5_div1.append(slide3_bedrooms, slide3_bathrooms)
    const slide3_info5_div2 = document.createElement("div")
    const slide3_button = document.createElement("button")
    slide3_button.innerText = "Contact Now"
    const slide3_button_ikon = document.createElement("i")
    slide3_button_ikon.className = "fa-regular fa-eye"
    slide3_button.append(slide3_button_ikon)
    slide3_info5_div2.append(slide3_button)
    slide3_info5.append(slide3_info5_div2)
})

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide-div")

    let current_slide = 0

    function SlideShow(index) {
        const newTransformValue = -index * 100 + '%';
        slides.forEach(slide => {
            slide.style.transform = 'translateX(' + newTransformValue + ')';
        });
    }
    function nextslide() {
        current_slide = (current_slide + 1) % slides.length;
        SlideShow(current_slide)
    }

    setInterval(nextslide, 7000)
})

const end_div = document.createElement("div")
end_div.classList.add("end-div")
document.body.append(end_div)
const end_box1 = document.createElement("div")
end_div.append(end_box1)
const end_box1_img_div = document.createElement("div")
end_box1.append(end_box1_img_div)
const end_box1_img = document.createElement("img")
end_box1_img_div.append(end_box1_img)
end_box1_img.src = "https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/black-logo.png"
const end_box1_herader_text = document.createElement("div")
end_box1.append(end_box1_herader_text)
const end_box1_text = document.createElement("p")
end_box1_text.innerText = "If you consider that Plot Listing template is useful for your website, please support us a little via PayPal."
end_box1_herader_text.append(end_box1_text)
//////////////////////////////////////////////////////
const end_box2 = document.createElement("div")
end_div.append(end_box2)
const end_box2_header_div = document.createElement("div")
end_box2.append(end_box2_header_div)
const end_box2_header = document.createElement("h2")
end_box2_header.innerText = "Helpful Links"
end_box2_header_div.append(end_box2_header)
const link_div = document.createElement("div")
end_box2.append(link_div)
const links_box1 = document.createElement("div")
const links1 = document.createElement("ul")
links_box1.append(links1)
const links_box2 = document.createElement("div")
const links2 = document.createElement("ul")
links_box2.append(links2)
link_div.append(links_box1, links_box2)
const links_data1 = [
    {
        text: "Categories"
    },
    {
        text: "Reviews"
    },
    {
        text: "Listing"
    },
    {
        text: "Contact Us"
    },
]
const links_data2 = [
    {
        text: "About Us"
    },
    {
        text: "Awards"
    },
    {
        text: "Useful Sites"
    },
    {
        text: "Privacy Policy"
    }
]
links_data1.forEach(linkitem => {
    const links1_li = document.createElement("li")
    links1.append(links1_li)
    const links1_a = document.createElement("a")
    links1_a.innerText = linkitem.text
    links1_li.append(links1_a)
});
links_data2.forEach(linkitem2 => {
    const links2_li = document.createElement("li")
    links2.append(links2_li)
    const links2_a = document.createElement("a")
    links2_a.innerText = linkitem2.text
    links2_li.append(links2_a)
})
const end_box3 = document.createElement("div")
end_div.append(end_box3)
const end_box3_header_div = document.createElement("div")
end_box3.append(end_box3_header_div)
const end_box3_header = document.createElement("h2")
end_box3_header.innerText = "Contact Us"
end_box3_header_div.append(end_box3_header)
const Whereabouts_div = document.createElement("div")
end_box3.append(Whereabouts_div)
const Whereabouts = document.createElement("p")
Whereabouts.innerText = "27th Street of New Town, Digital Villa"
Whereabouts_div.append(Whereabouts)
const numbers_div = document.createElement("div")
end_box3.append(numbers_div)
const numbers_box1 = document.createElement("div")
const number1 = document.createElement("a")
number1.innerText = "010-020-0340"
numbers_box1.append(number1)
const numbers_box2 = document.createElement("div")
const number2 = document.createElement("a")
number2.innerText = "090-080-0760"
numbers_box2.append(number2)
numbers_div.append(numbers_box1, numbers_box2)
const end = document.createElement("div")
document.body.append(end)
end.classList.add("end")
const end_text = document.createElement("p")
end_text.style.fontSize = "15px"
end_text.innerText = "Copyright © 2021 Plot Listing Co., Ltd. All Rights Reserved. Design: TemplateMo"
end.append(end_text)