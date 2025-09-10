// ---------------- DATA ----------------
const DATA = [
  {id:'r1', title:'Tamarind Fish Fry', cuisine:'indian', time:'30 mins', tags:['fish','quick'], img:'temaraind fish fry.jpg',
   steps:[
     'Clean the fish and cut into pieces.',
     'Marinate with tamarind paste, salt, and spices for 20 minutes.',
     'Heat oil in a pan and fry the fish until golden brown.',
     'Serve hot with rice or salad.'
   ]
  },
  {id:'r2', title:'Margherita Pizza', cuisine:'italian', time:'45 mins', tags:['pizza','vegetarian'], img:'margherita pizza.jpg',
   steps:[
     'Preheat oven to 220°C (425°F).',
     'Roll out pizza dough and place on baking tray.',
     'Spread tomato sauce evenly on the base.',
     'Top with mozzarella cheese and fresh basil leaves.',
     'Bake for 15-20 minutes until crust is golden.',
     'Serve hot.'
   ]
  },
  {id:'r3', title:'Coconut Curry Rice', cuisine:'indian', time:'40 mins', tags:['curry','vegan'], img:'cocount curry rice.jpg',
   steps:[
     'Cook rice until fluffy and set aside.',
     'In a pan, sauté onions, garlic, and ginger.',
     'Add coconut milk and curry powder, simmer for 10 mins.',
     'Mix in cooked rice and stir well.',
     'Garnish with fresh coriander and serve.'
   ]
  },
  {id:'r4', title:'Lemon Herb Salmon', cuisine:'fusion', time:'25 mins', tags:['salmon','healthy'], img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
   steps:[
     'Preheat oven to 200°C (400°F).',
     'Place salmon fillets on a baking tray.',
     'Sprinkle with lemon juice, salt, pepper, and herbs.',
     'Bake for 12-15 minutes until cooked through.',
     'Serve with steamed vegetables.'
   ]
  },
  {id:'r5', title:'Paneer Tikka', cuisine:'indian', time:'35 mins', tags:['paneer','grill'], img:'panneer tikka.png',
   steps:[
     'Cut paneer into cubes.',
     'Marinate with yogurt, spices, and lemon juice for 20 minutes.',
     'Skewer the paneer and grill until golden.',
     'Serve with mint chutney.'
   ]
  },
  {id:'r6', title:'Pesto Pasta', cuisine:'italian', time:'20 mins', tags:['pasta','quick'], img:'pesto pasta.jpg',
   steps:[
     'Cook pasta according to package instructions.',
     'Prepare pesto by blending basil, garlic, pine nuts, Parmesan, and olive oil.',
     'Mix cooked pasta with pesto sauce.',
     'Serve with extra Parmesan on top.'
   ]
  },
  {id:'r7', title:'Chocolate Cake', cuisine:'fusion', time:'60 mins', tags:['dessert','chocolate'], img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
   steps:[
     'Preheat oven to 180°C (350°F).',
     'Mix flour, sugar, cocoa powder, baking powder, and salt.',
     'Add eggs, milk, and melted butter, mix well.',
     'Pour batter into a greased pan and bake for 35-40 minutes.',
     'Cool before serving.'
   ]
  },
  {id:'r8', title:'Veggie Salad', cuisine:'fusion', time:'15 mins', tags:['salad','healthy'], img:'Veggie Sandwich.jpg',
   steps:[
     'Chop fresh vegetables (lettuce, cucumber, tomato, carrot).',
     'Mix in a large bowl.',
     'Add olive oil, lemon juice, salt, and pepper.',
     'Toss well and serve chilled.'
   ]
  },
  {id:'r9', title:'Butter Chicken', cuisine:'indian', time:'50 mins', tags:['chicken','creamy'], img:'butter chicken.jpg',
   steps:[
     'Marinate chicken in yogurt and spices for 30 mins.',
     'Cook chicken until lightly browned.',
     'Prepare butter gravy with onions, tomatoes, cream, and spices.',
     'Add chicken to gravy and simmer for 15 minutes.',
     'Serve hot with naan or rice.'
   ]
  },
  {id:'r10', title:'Tiramisu', cuisine:'italian', time:'30 mins', tags:['dessert','coffee'], img:'tiramisu.jpg',
   steps:[
     'Mix mascarpone, sugar, and egg yolks.',
     'Dip ladyfingers in coffee and layer in a dish.',
     'Spread mascarpone mixture over the layer.',
     'Repeat layers and dust with cocoa powder.',
     'Chill for 2 hours before serving.'
   ]
  },
  {id:'r11', title:'Grilled Chicken Salad', cuisine:'fusion', time:'20 mins', tags:['chicken','salad'], img:'grilled chicken salad.jpg',
   steps:[
     'Grill chicken breasts and slice thinly.',
     'Mix lettuce, tomatoes, cucumber, and olives.',
     'Add grilled chicken on top.',
     'Drizzle with olive oil and lemon dressing.'
   ]
  },
  {id:'r12', title:'Mushroom Risotto', cuisine:'italian', time:'40 mins', tags:['rice','vegetarian'], img:'Mushroom Risotto.jpg',
   steps:[
     'Sauté mushrooms, onions, and garlic in butter.',
     'Add arborio rice and cook for 2 minutes.',
     'Gradually add vegetable stock until rice is cooked.',
     'Stir in Parmesan cheese and serve hot.'
   ]
  },
  {id:'r13', title:'Egg Fried Rice', cuisine:'fusion', time:'25 mins', tags:['rice','quick'], img:'Egg Fried Rice.jpg',
   steps:[
     'Cook rice and let it cool.',
     'Scramble eggs in a pan and set aside.',
     'Sauté vegetables and mix with rice.',
     'Add scrambled eggs and soy sauce.',
     'Serve hot.'
   ]
  },
  {id:'r14', title:'Spaghetti Carbonara', cuisine:'italian', time:'30 mins', tags:['pasta','quick'], img:'Spaghetti Carbonara.jpg',
   steps:[
     'Cook spaghetti until al dente.',
     'Mix eggs, Parmesan, and pepper.',
     'Toss hot pasta with egg mixture and pancetta.',
     'Serve immediately.'
   ]
  },
  {id:'r15', title:'Veggie Stir Fry', cuisine:'fusion', time:'20 mins', tags:['vegetarian','quick'], img:'Veggie Stir Fry.jpg',
   steps:[
     'Chop vegetables (bell peppers, broccoli, carrots).',
     'Stir fry in oil with garlic and soy sauce.',
     'Serve hot with rice or noodles.'
   ]
  },
  {id:'r16', title:'Beef Tacos', cuisine:'fusion', time:'35 mins', tags:['beef','mexican'], img:'Beef Tacos.jpg',
   steps:[
     'Cook ground beef with taco seasoning.',
     'Warm tortillas.',
     'Assemble tacos with beef, lettuce, tomato, and cheese.',
     'Serve immediately.'
   ]
  },
  {id:'r17', title:'Shakshuka', cuisine:'fusion', time:'25 mins', tags:['eggs','spicy'], img:'Shakshuka.jpg',
   steps:[
     'Sauté onions, peppers, and tomatoes.',
     'Add spices (cumin, paprika).',
     'Make small wells and crack eggs into them.',
     'Cover and cook until eggs are set.',
     'Serve with bread.'
   ]
  },
  {id:'r18', title:'Chicken Biryani', cuisine:'indian', time:'60 mins', tags:['chicken','rice'], img:'Chicken Biryani.jpg',
   steps:[
     'Marinate chicken with yogurt and spices.',
     'Cook rice separately.',
     'Layer chicken and rice, cook on low heat.',
     'Garnish with fried onions and coriander.',
     'Serve hot.'
   ]
  },
  {id:'r19', title:'French Toast', cuisine:'fusion', time:'15 mins', tags:['bread','sweet'], img:'French Toast.jpg',
   steps:[
     'Whisk eggs, milk, cinnamon, and sugar.',
     'Dip bread slices in mixture.',
     'Fry on a pan until golden brown.',
     'Serve with syrup or fruits.'
   ]
  },
  {id:'r20', title:'Caprese Salad', cuisine:'italian', time:'10 mins', tags:['salad','quick'], img:'Caprese Salad.jpg',
   steps:[
     'Slice tomatoes and mozzarella.',
     'Layer slices with basil leaves.',
     'Drizzle with olive oil and balsamic vinegar.',
     'Serve chilled.'
   ]
  },
  {id:'r21', title:'Chocolate Brownie', cuisine:'fusion', time:'45 mins', tags:['dessert','chocolate'], img:'chocolate Brownie.jpg',
   steps:[
     'Preheat oven to 180°C (350°F).',
     'Melt chocolate and butter together.',
     'Mix in sugar, eggs, and flour.',
     'Pour into baking pan and bake for 25-30 mins.',
     'Cool and cut into squares.'
   ]
  },
  {id:'r22', title:'Garlic Butter Shrimp', cuisine:'fusion', time:'20 mins', tags:['shrimp','quick'], img:'Garlic Butter Shrimp.jpg',
   steps:[
     'Sauté garlic in butter.',
     'Add shrimp and cook until pink.',
     'Season with salt, pepper, and lemon juice.',
     'Serve hot with bread or rice.'
   ]
  },
  {id:'r23', title:'Veggie Sandwich', cuisine:'fusion', time:'10 mins', tags:['vegetarian','quick'], img:'Veggie Sandwich.jpg',
   steps:[
     'Slice bread and toast lightly.',
     'Layer with vegetables, cheese, and sauces.',
     'Serve immediately.'
   ]
  },
  {id:'r24', title:'Lentil Soup', cuisine:'fusion', time:'35 mins', tags:['vegan','healthy'], img:'Lentil Soup.jpg',
   steps:[
     'Sauté onions, garlic, and carrots.',
     'Add lentils and vegetable stock.',
     'Cook until lentils are soft.',
     'Blend if desired and serve hot.'
   ]
  },
  {id:'r25', title:'Chicken Caesar Salad', cuisine:'fusion', time:'20 mins', tags:['chicken','salad'], img:'Chicken Caesar Salad.jpg',
   steps:[
     'Grill chicken and slice thinly.',
     'Mix romaine lettuce, croutons, and Parmesan.',
     'Top with chicken and Caesar dressing.'
   ]
  },
  {id:'r26', title:'Masala Dosa', cuisine:'indian', time:'40 mins', tags:['dosa','vegetarian'], img:'Masala Dosa.jpg',
   steps:[
     'Prepare dosa batter and let ferment overnight.',
     'Cook spiced potato filling.',
     'Spread batter on a pan to make dosa.',
     'Add filling and fold.',
     'Serve with chutney and sambar.'
   ]
  },
  {id:'r27', title:'Pancakes', cuisine:'fusion', time:'20 mins', tags:['breakfast','sweet'], img:'Pancakes.jpg',
   steps:[
     'Mix flour, sugar, baking powder, milk, and eggs.',
     'Heat a pan and pour batter to form pancakes.',
     'Cook both sides until golden.',
     'Serve with syrup or fruits.'
   ]
  },
  {id:'r28', title:'Tomato Soup', cuisine:'fusion', time:'25 mins', tags:['soup','vegetarian'], img:'Tomato Soup.jpg',
   steps:[
     'Sauté onions and garlic.',
     'Add chopped tomatoes and vegetable stock.',
     'Cook until soft and blend.',
     'Season with salt, pepper, and cream.'
   ]
  },
  {id:'r29', title:'Fish Curry', cuisine:'indian', time:'50 mins', tags:['fish','spicy'], img:'Fish Curry.jpg',
   steps:[
     'Marinate fish with turmeric and salt.',
     'Cook onions, tomatoes, and spices to make gravy.',
     'Add fish and simmer until cooked.',
     'Serve with rice.'
   ]
  },
  {id:'r30', title:'Vegetable Biryani', cuisine:'indian', time:'60 mins', tags:['rice','vegetarian'], img:'vegetable Biryani.jpg',
   steps:[
     'Cook basmati rice until 70% done.',
     'Sauté mixed vegetables with spices.',
     'Layer rice and vegetables in a pot and cook on low heat.',
     'Garnish with fried onions and serve hot.'
   ]
  },
];

// ---------------- THE REST OF THE CODE ----------------
// Use the same renderRecipes(), renderFavorites(), showRecipe(), doSearch(), load more, theme toggle functions from previous code




let visibleCount=4;
const recipesGrid=document.getElementById('recipesGrid');
const favoritesGrid=document.getElementById('favoritesGrid');
const searchInput=document.getElementById('searchInput');
const filterSelect=document.getElementById('filterSelect');
const loadMoreBtn=document.getElementById('loadMore');
const yearEl=document.getElementById('year');
yearEl.textContent=new Date().getFullYear();

// FAVORITES
function getFavorites(){return JSON.parse(localStorage.getItem('cookbook_favs')||'[]');}
function setFavorites(arr){localStorage.setItem('cookbook_favs',JSON.stringify(arr));}
function toggleFavorite(id){let favs=getFavorites();const idx=favs.indexOf(id);if(idx===-1){favs.push(id);}else{favs.splice(idx,1);}setFavorites(favs);renderFavorites();}

// RENDER
function renderRecipes(list=DATA.slice(0,visibleCount)){
recipesGrid.innerHTML='';
list.forEach(item=>{
const card=document.createElement('div');card.className='card';
card.innerHTML=`<div style="position:relative"><img src="${item.img}" alt="${item.title}"><button class="fav-btn">♡</button></div>
<div class="card-body"><h4>${item.title}</h4><p>${item.cuisine.toUpperCase()} • ${item.time}</p>
<div class="card-actions"><button onclick="showRecipe(DATA.find(d=>d.id==='${item.id}'))">View</button>
<button onclick="alert('Saved!')">Save</button></div></div>`;
card.querySelector('.fav-btn').addEventListener('click',()=>toggleFavorite(item.id));
recipesGrid.appendChild(card);
});
}

function renderFavorites() {
  const favs = getFavorites();
  favoritesGrid.innerHTML = '';
  const favItems = DATA.filter(d => favs.includes(d.id));

  if (favItems.length === 0) {
    favoritesGrid.innerHTML = '<p class="muted">No favorites yet</p>';
    return;
  }

  favItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div style="position:relative"><img src="${item.img}" alt="${item.title}"></div>
      <div class="card-body">
        <h4>${item.title}</h4>
        <p>${item.cuisine.toUpperCase()} • ${item.time}</p>
        <div class="card-actions">
          <button onclick="showRecipe(DATA.find(d=>d.id==='${item.id}'))">View</button>
          <button onclick="toggleFavorite('${item.id}')">${getFavorites().includes(item.id) ? '❤️ Remove' : '♡ Save'}</button>
        </div>
      </div>
    `;
    favoritesGrid.appendChild(card);
  });
}

// SEARCH/FILTER
function doSearch(){const q=searchInput.value.toLowerCase();const filter=filterSelect.value;const filtered=DATA.filter(d=>{const inQ=d.title.toLowerCase().includes(q)||d.tags.join(' ').toLowerCase().includes(q);const inFilter=filter==='all'||d.cuisine===filter;return inQ&&inFilter;});renderRecipes(filtered.slice(0,visibleCount));}
searchInput.addEventListener('input',doSearch);
filterSelect.addEventListener('change',doSearch);

// LOAD MORE
// loadMoreBtn.addEventListener('click',()=>{visibleCount+=4;renderRecipes();});

loadMoreBtn.addEventListener('click', () => {
  // Disable button and show loader
  loadMoreBtn.disabled = true;
  const originalText = loadMoreBtn.textContent;
  loadMoreBtn.innerHTML = `<span class="loader"></span> Loading...`;

  // Wait 1 second before running original logic
  setTimeout(() => {
    visibleCount += 4;
    renderRecipes();
    loadMoreBtn.disabled = false;
    loadMoreBtn.textContent = originalText;

    if (visibleCount >= DATA.length) {
      loadMoreBtn.style.display = 'none';
    }
  }, 1000);
});


// THEME TOGGLE
document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.querySelector('.theme-toggle');

  // Apply saved theme on load
  if (localStorage.getItem('cookbook_theme') === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeBtn.textContent = '☀️';
  }

  // Toggle theme on click
  themeBtn.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
      document.body.removeAttribute('data-theme');
      themeBtn.textContent = '🌙';
    } else {
      document.body.setAttribute('data-theme', 'dark');
      themeBtn.textContent = '☀️';
    }
    localStorage.setItem(
      'cookbook_theme',
      document.body.getAttribute('data-theme') || 'light'
    );
  });
});



// Show Recipe Modal
function showRecipe(item) {
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalCuisineTime').textContent = `${item.cuisine.toUpperCase()} • ${item.time}`;
  document.getElementById('modalImage').src = item.img;
  document.getElementById('modalImage').alt = item.title;
  document.getElementById('modalSteps').innerHTML = item.steps.map(step => `<li>${step}</li>`).join('');
  document.getElementById('recipeModal').classList.remove('hidden');
}

// Close Modal
document.querySelector('.modal .close').addEventListener('click', () => {
  document.getElementById('recipeModal').classList.add('hidden');
});



// INITIAL RENDER
renderRecipes();
renderFavorites();
