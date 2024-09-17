let data = [
  {
    idCategory: "1",
    name: "Beef",
    img: "https://www.themealdb.com/images/category/beef.png",
    description:
      "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and essential nutrients.",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: ["Beef", "Salt", "Black Pepper", "Olive Oil"],
    price: 400,
  },
  {
    idCategory: "2",
    name: "Chicken",
    img: "https://www.themealdb.com/images/category/chicken.png",
    description:
      "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: ["Chicken", "Salt", "Black Pepper", "Olive Oil"],
    price: 300,
  },
  {
    idCategory: "3",
    name: "Dessert",
    img: "https://www.themealdb.com/images/category/dessert.png",
    description:
      "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal. The term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: ["Sugar", "Butter", "Flour", "Eggs"],
    price: 250,
  },
  {
    idCategory: "4",
    name: "Lamb",
    img: "https://www.themealdb.com/images/category/lamb.png",
    description:
      "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages. A sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: ["Lamb", "Salt", "Black Pepper", "Olive Oil"],
    price: 450,
  },
  {
    idCategory: "5",
    name: "Miscellaneous",
    img: "https://www.themealdb.com/images/category/miscellaneous.png",
    description: "General foods that don't fit into another category",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3"],
    price: 200,
  },
  {
    idCategory: "6",
    name: "Pasta",
    img: "https://www.themealdb.com/images/category/pasta.png",
    description:
      "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily. Also commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. As an alternative for those wanting a different taste, or who need to avoid products containing gluten, some pastas can be made using rice flour in place of wheat. Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca).",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: ["Pasta", "Salt", "Black Pepper", "Olive Oil"],
    price: 280,
  },
  {
    idCategory: "7",
    name: "Pork",
    img: "https://www.themealdb.com/images/category/pork.png",
    description:
      "Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide, with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork. Pork is the most popular meat in Eastern and Southeastern Asia, and is also very common in the Western world, especially in Central Europe. It is highly prized in Asian cuisines for its fat content and pleasant texture. Consumption of pork is forbidden by Jewish and Muslim dietary law, a taboo that is deeply rooted in tradition, with several suggested possible causes. The sale of pork is limited in Israel and illegal in certain Muslim countries.",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: ["Pork", "Salt", "Black Pepper", "Olive Oil"],
    price: 350,
  },
  {
    idCategory: "8",
    name: "Seafood",
    img: "https://www.themealdb.com/images/category/seafood.png",
    description:
      'Seafood is any form of sea life regarded as food by humans. Seafood prominently includes fish and shellfish. Shellfish include various species of molluscs, crustaceans, and echinoderms. Historically, sea mammals such as whales and dolphins have been consumed as food, though that happens to a lesser extent in modern times. Edible sea plants, such as some seaweeds and microalgae, are widely eaten as seafood around the world, especially in Asia (see the category of sea vegetables). In North America, although not generally in the United Kingdom, the term "seafood" is extended to fresh water organisms eaten by humans, so all edible aquatic life may be referred to as seafood. For the sake of completeness, this article includes all edible aquatic life.',
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: ["Seafood", "Salt", "Black Pepper", "Olive Oil"],
    price: 500,
  },
  {
    idCategory: "9",
    name: "Side",
    img: "https://www.themealdb.com/images/category/side.png",
    description:
      "A side dish, sometimes referred to as a side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal. Side dishes such as salad, potatoes and bread are commonly used with main courses throughout many countries of the western world. New side orders introduced within the past decade, such as rice and couscous, have grown to be quite popular throughout Europe, especially at formal occasions (with couscous appearing more commonly at dinner parties with Middle Eastern dishes).",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: ["Side", "Salt", "Black Pepper", "Olive Oil"],
    price: 150,
  },
  {
    idCategory: "10",
    name: "Starter",
    img: "https://www.themealdb.com/images/category/starter.png",
    description:
      "An entrée in modern French table service and that of much of the English-speaking world (apart from the United States and parts of Canada) is a dish served before the main course of a meal; it may be the first dish served, or it may follow a soup or other small dish or dishes. In the United States and parts of Canada, an entrée is the",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: ["Starter", "Salt", "Black Pepper", "Olive Oil"],
    price: 180,
  },
  {
    idCategory: "11",
    name: "Vegan",
    img: "https://www.themealdb.com/images/category/vegan.png",
    description:
      "Veganism is both the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals. A follower of either the diet or the philosophy is known as a vegan (pronounced /ˈviːɡən/ VEE-gən). Distinctions are sometimes made between several categories of veganism. Dietary vegans (or strict vegetarians) refrain from consuming animal products, not only meat but also eggs, dairy products and other animal-derived substances. The term ethical vegan is often applied to those who not only follow a vegan diet but extend the philosophy into other areas of their lives, and oppose the use of animals for any purpose. Another term is environmental veganism, which refers to the avoidance of animal products on the premise that the harvesting or industrial farming of animals is environmentally damaging and unsustainable.",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: ["Vegan", "Salt", "Black Pepper", "Olive Oil"],
    price: 270,
  },
  {
    idCategory: "12",
    name: "Vegetarian",
    img: "https://www.themealdb.com/images/category/vegetarian.png",
    description:
      "Vegetarianism is the practice of abstaining from the consumption of meat (red meat, poultry, seafood, and the flesh of any other animal), and may also include abstention from by-products of animal slaughter. Vegetarianism may be adopted for various reasons. Many people object to eating meat out of respect for sentient life. Such ethical motivations have been codified under various religious beliefs, as well as animal rights advocacy. Other motivations for vegetarianism are health-related, political, environmental, cultural, aesthetic, economic, or personal preference. There are variations of the diet as well: an ovo-lacto vegetarian diet includes both eggs and dairy products, an ovo-vegetarian diet includes eggs but not dairy products, and a lacto-vegetarian diet includes dairy products but not eggs. A vegan diet excludes all animal products, including eggs and dairy. Some vegans also avoid other animal products such as beeswax, leather or silk clothing, and goose-fat shoe polish.",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: ["Vegetarian", "Salt", "Black Pepper", "Olive Oil"],
    price: 320,
  },
  {
    idCategory: "13",
    name: "Breakfast",
    img: "https://www.themealdb.com/images/category/breakfast.png",
    description:
      'Breakfast is the first meal of a day. The word in English refers to breaking the fasting period of the previous night. There is a strong likelihood for one or more "typical", or "traditional", breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast.',
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: ["Breakfast", "Salt", "Black Pepper", "Olive Oil"],
    price: 220,
  },
  {
    idCategory: "14",
    name: "Goat",
    img: "https://www.themealdb.com/images/category/goat.png",
    description:
      "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese.",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: ["Goat", "Salt", "Black Pepper", "Olive Oil"],
    price: 380,
  },
  {
    idCategory: "15",
    name: "Pasta Carbonara",
    img: "https://www.sharmispassions.com/wp-content/uploads/2020/03/WhiteSaucePasta5-1.jpg",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: [
      "Spaghetti",
      "Eggs",
      "Pancetta",
      "Parmesan Cheese",
      "Black Pepper",
      "Salt",
      "Garlic",
      "Olive Oil",
    ],
    price: 350,
    description:
      "Classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
  },
  {
    idCategory: "16",
    name: "Chicken Curry",
    img: "https://www.sharmispassions.com/wp-content/uploads/2022/10/ChickenCurry4.jpg",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: [
      "Chicken",
      "Onion",
      "Tomato",
      "Coconut Milk",
      "Ginger",
      "Garlic",
      "Curry Powder",
      "Chili",
      "Coriander",
      "Cumin",
      "Turmeric",
      "Salt",
    ],
    price: 380,
    description:
      "A flavorful Indian dish made with chicken, spices, and coconut milk.",
  },
  {
    idCategory: "17",
    name: "Cheeseburger",
    img: "https://www.sharmispassions.com/wp-content/uploads/2020/12/35698082704_4ae8094380_o.jpg",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: [
      "Beef Patty",
      "Cheese",
      "Burger Buns",
      "Lettuce",
      "Tomato",
      "Onion",
      "Ketchup",
      "Mustard",
      "Salt",
      "Black Pepper",
    ],
    price: 420,
    description:
      "Classic American burger made with a beef patty, cheese, and fresh vegetables.",
  },
  {
    idCategory: "18",
    name: "Caesar Salad",
    img: "https://www.sharmispassions.com/wp-content/uploads/2021/03/MoongSproutsSalad2.jpg",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: [
      "Romaine Lettuce",
      "Croutons",
      "Parmesan Cheese",
      "Caesar Dressing",
      "Black Pepper",
      "Salt",
      "Lemon Juice",
      "Olive Oil",
      "Garlic",
    ],
    price: 300,
    description:
      "Classic salad made with romaine lettuce, croutons, and Caesar dressing.",
  },
  {
    idCategory: "19",
    name: "Sushi Roll",
    img: "https://www.sharmispassions.com/wp-content/uploads/2020/12/6465386161_86c12f6d12_z.jpg",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: [
      "Sushi Rice",
      "Nori Seaweed",
      "Raw Fish (e.g., Tuna, Salmon)",
      "Cucumber",
      "Avocado",
      "Soy Sauce",
      "Wasabi",
      "Pickled Ginger",
    ],
    price: 450,
    description:
      "Japanese dish made with vinegared rice, seafood, and vegetables, wrapped in seaweed.",
  },
  {
    idCategory: "19",
    name: "Margherita Pizza",
    img: "https://www.sharmispassions.com/wp-content/uploads/2020/12/14195302429_2a770a8e4f_o.jpg",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: [
      "Pizza Dough",
      "Tomato Sauce",
      "Mozzarella Cheese",
      "Fresh Basil Leaves",
      "Olive Oil",
      "Salt",
      "Black Pepper",
    ],
    price: 320,
    description:
      "Classic Italian pizza topped with tomato sauce, mozzarella, and fresh basil.",
  },
  {
    idCategory: "20",
    name: "Chocolate Cake",
    img: "https://www.sharmispassions.com/wp-content/uploads/2020/11/chocolate-cake-1.jpg",
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ingredients: [
      "Flour",
      "Sugar",
      "Cocoa Powder",
      "Eggs",
      "Milk",
      "Butter",
      "Baking Powder",
      "Baking Soda",
      "Vanilla Extract",
      "Salt",
    ],
    price: 250,
    description:
      "Rich and moist chocolate cake made with cocoa powder and topped with chocolate frosting.",
  },
];

let container = document.getElementById("container");

function display(){
    data.forEach(function(el){
        // console.log(el)
    let div = document.createElement("div")
    div.setAttribute("class", "main")

    let name = document.createElement("h1")
    name.innerText = el.name;
    let price = document.createElement("h3")
    price.innerText = el.price;
    let image = document.createElement("img")
    image.src = el.img
    div.append(image,name,price)

    container.append(div)
    })
}

display();