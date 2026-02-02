export interface Recipe {
    id: string;
    title: string;
    image: string;
    time: string;
    category: string;
    difficulty: string;
    description: string;
    servings: number;
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
    ingredients: string[];
    instructions: { step: number; title: string; text: string }[];
    chefTip?: string;
    healthLabel?: string;
}

export const recipes: Recipe[] = [
    {
        id: "pot-roast",
        title: "Classic Sunday Pot Roast with Vegetables",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
        time: "3.5 hrs",
        category: "Comfort Food",
        difficulty: "Medium",
        description: "A tender, slow-cooked beef roast with hearty carrots, potatoes, and a rich savory gravy.",
        servings: 6,
        calories: 450,
        protein: "35g",
        carbs: "15g",
        fat: "22g",
        ingredients: [
            "3-4 lb Beef Chuck Roast",
            "2 lbs Yukon Gold potatoes, halved",
            "1 lb carrots, cut into 2-inch chunks",
            "2 large yellow onions, quartered",
            "4 cloves garlic, smashed",
            "2 cups beef broth (low sodium)",
            "1 cup red wine (optional)",
            "2 sprigs fresh rosemary",
            "3 sprigs fresh thyme",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            { step: 1, title: "Sear the Meat", text: "Pat dry the roast and season generously with salt and pepper. In a large Dutch oven, heat olive oil over medium-high heat and sear meat on all sides until browned." },
            { step: 2, title: "Add Aromatics", text: "Remove meat. Add onions and garlic to the pot, sautéing for 3-4 minutes until fragrant. Deglaze with red wine or a splash of broth." },
            { step: 3, title: "Slow Cook", text: "Return meat to pot. Add broth, rosemary, and thyme. Cover and bake at 300°F (150°C) for 2 hours." },
            { step: 4, title: "Add Vegetables", text: "Add potatoes and carrots. Cover and cook for another 1-1.5 hours until meat and vegetables are tender." }
        ],
        chefTip: "Sear the meat deeply! The brown crust is where all the deep, savory flavor comes from for the gravy.",
        healthLabel: "Traditional Favorite"
    },
    {
        id: "baked-salmon",
        title: "Lemon Herb Baked Salmon with Asparagus",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
        time: "25 mins",
        category: "Healthy",
        difficulty: "Easy",
        description: "Light and flavorful salmon fillets seasoned with fresh herbs and lemon, baked to perfection.",
        servings: 2,
        calories: 380,
        protein: "32g",
        carbs: "8g",
        fat: "18g",
        ingredients: [
            "2 Salmon fillets (6oz each)",
            "1 bunch thin asparagus, trimmed",
            "2 tbsp extra virgin olive oil",
            "1 lemon, thinly sliced",
            "2 cloves garlic, minced",
            "1 tsp dried oregano",
            "Fresh parsley for garnish"
        ],
        instructions: [
            { step: 1, title: "Preheat Oven", text: "Preheat your oven to 400°F (200°C) and line a baking sheet with parchment paper." },
            { step: 2, title: "Season Salmon & Veggies", text: "Place salmon and asparagus on the sheet. Drizzle with olive oil. Sprinkle garlic, oregano, salt, and pepper over both." },
            { step: 3, title: "Bake", text: "Top salmon with lemon slices. Bake for 12-15 minutes until salmon flakes easily with a fork and asparagus is tender." }
        ],
        chefTip: "Don't overcook the salmon. It's best when it's just opaque in the center and still moist.",
        healthLabel: "Heart Healthy"
    },
    {
        id: "chicken-soup",
        title: "Homemade Chicken Noodle Soup",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
        time: "45 mins",
        category: "Seniors",
        difficulty: "Easy",
        description: "Warm and comforting soup filled with tender chicken, egg noodles, and fresh celery.",
        servings: 4,
        calories: 290,
        protein: "24g",
        carbs: "30g",
        fat: "8g",
        ingredients: [
            "1 tbsp olive oil",
            "1 lb chicken breast, diced",
            "2 carrots, sliced",
            "2 stalks celery, sliced",
            "1 onion, chopped",
            "6 cups low-sodium chicken broth",
            "2 cups wide egg noodles",
            "1/2 tsp dried thyme",
            "Fresh parsley, chopped"
        ],
        instructions: [
            { step: 1, title: "Sauté Vegetables", text: "In a large pot, heat oil over medium heat. Add carrots, celery, and onion. Cook until softened, about 5-7 minutes." },
            { step: 2, title: "Simmer Soup", text: "Add broth, chicken, and thyme. Bring to a boil, then reduce heat and simmer for 20 minutes." },
            { step: 3, title: "Cook Noodles", text: "Add egg noodles and cook for 8-10 minutes until tender. Stir in fresh parsley before serving." }
        ],
        chefTip: "Use bone-in chicken for the simmer stage if you have more time; it makes the broth much richer.",
        healthLabel: "Easy Digestion"
    },
    {
        id: "shepherds-pie",
        title: "Traditional British Shepherd's Pie",
        image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd679?q=80&w=800&auto=format&fit=crop",
        time: "1 hr",
        category: "Dinner",
        difficulty: "Medium",
        description: "Savory ground meat topped with a thick layer of creamy mashed potatoes.",
        servings: 4,
        calories: 520,
        protein: "28g",
        carbs: "42g",
        fat: "26g",
        ingredients: [
            "1 lb ground beef or lamb",
            "1 onion, diced",
            "1 cup frozen peas and carrots",
            "2 tbsp tomato paste",
            "1 cup beef broth",
            "1.5 lbs potatoes, peeled and cubed",
            "1/4 cup milk",
            "2 tbsp butter",
            "1/2 cup shredded cheddar (optional)"
        ],
        instructions: [
            { step: 1, title: "Make Mashed Potatoes", text: "Boil potatoes until soft. Drain and mash with milk and butter until creamy. Set aside." },
            { step: 2, title: "Cook Meat Filling", text: "Brown the meat and onions in a skillet. Stir in tomato paste, broth, and frozen vegetables. Simmer for 10 minutes until thickened." },
            { step: 3, title: "Assemble & Bake", text: "Pour meat mixture into a baking dish. Spread mashed potatoes over the top. Bake at 400°F for 20 minutes until golden." }
        ],
        chefTip: "Use a fork to create ridges in the mashed potatoes before baking—they get extra crispy and delicious.",
        healthLabel: "Classic Comfort"
    },
    {
        id: "diabetic-chicken",
        title: "Mediterranean Garlic Herb Chicken",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop",
        time: "30 mins",
        category: "Diabetic Friendly",
        difficulty: "Easy",
        description: "Lean chicken breast marinated in olive oil, garlic, and Mediterranean herbs.",
        servings: 4,
        calories: 240,
        protein: "38g",
        carbs: "4g",
        fat: "9g",
        ingredients: [
            "4 Boneless chicken breasts",
            "1/4 cup extra virgin olive oil",
            "4 cloves garlic, minced",
            "1 tsp dried rosemary",
            "1 tsp dried thyme",
            "1 lemon, juiced",
            "Fresh cracked black pepper"
        ],
        instructions: [
            { step: 1, title: "Marinate", text: "Combine olive oil, garlic, herbs, and lemon juice in a bowl. Add chicken and toss to coat. Let sit for at least 15 minutes." },
            { step: 2, title: "Grill or Pan-Sear", text: "Heat a grill pan or skillet over medium-high heat. Cook chicken for 6-7 minutes per side until internal temperature reaches 165°F." },
            { step: 3, title: "Rest", text: "Remove from heat and let rest for 5 minutes before slicing to keep it juicy." }
        ],
        chefTip: "Serve this with a big Greek salad or roasted cauliflower for a perfect low-carb, diabetic-friendly meal.",
        healthLabel: "Low Glycemic"
    },
    {
        id: "low-salt-stew",
        title: "Hearty Low-Sodium Beef Stew",
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=800&auto=format&fit=crop",
        time: "2 hrs",
        category: "Heart Healthy",
        difficulty: "Medium",
        description: "Flavor-packed stew using fresh herbs and aromatics instead of excess salt.",
        servings: 4,
        calories: 360,
        protein: "30g",
        carbs: "22g",
        fat: "14g",
        ingredients: [
            "1.5 lbs beef stew meat",
            "2 tbsp flour",
            "2 onions, chopped",
            "3 cloves garlic, minced",
            "3 carrots, sliced",
            "2 stalks celery, sliced",
            "4 cups unsalted beef stock",
            "1 tbsp balsamic vinegar",
            "2 bay leaves",
            "1 tsp dried thyme",
            "1 tsp smoked paprika"
        ],
        instructions: [
            { step: 1, title: "Brown Meat", text: "Toss meat in flour and paprika. Brown in a large pot with a little oil. Remove meat." },
            { step: 2, title: "Sauté Veggies", text: "Add onions, garlic, carrots, and celery to the pot. Cook until aromatics are soft." },
            { step: 3, title: "Deglaze & Simmer", text: "Add balsamic vinegar and stir, scraping up brown bits. Add stock, meat, bay leaves, and thyme. Simmer covered for 1.5 - 2 hours." }
        ],
        chefTip: "The balsamic vinegar and smoked paprika provide a 'meaty' depth of flavor that makes you forget there's less salt!",
        healthLabel: "Low Sodium"
    }
];

export const categories = [
    { name: "Healthy Meals", icon: "Salad", count: 24, slug: "healthy" },
    { name: "Comfort Food", icon: "Soup", count: 18, slug: "comfort" },
    { name: "Diabetic Friendly", icon: "Heart", count: 12, slug: "diabetic" },
    { name: "Easy Dinners", icon: "Clock", count: 32, slug: "easy" }
];

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string; // Simplified for now, can be HTML string or markdown
    image: string;
    date: string;
    readTime: string;
    category: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "low-sodium-flavor-tips",
        title: "The Secret to Low-Sodium Cooking Without Losing Flavor",
        excerpt: "Cutting salt doesn't mean cutting taste. Discover the herbs and spices that make heart-healthy meals delicious.",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
        date: "February 2, 2026",
        readTime: "5 min read",
        category: "Heart Health",
        content: `
      <p class="mb-4">For many of reduced sodium intake is a doctor's order that feels like a sentence to bland food. But it doesn't have to be that way. In fact, relying less on salt can help you discover the true, vibrant flavors of your ingredients.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">1. Embrace Acid</h3>
      <p class="mb-4">Lemon juice, lime juice, and various vinegars (balsamic, apple cider, red wine) act very similarly to salt. They brighten up a dish and make flavors 'pop'. Try finishing your roasted vegetables with a squeeze of fresh lemon instead of a pinch of salt.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">2. Fresh Herbs are King</h3>
      <p class="mb-4">Fresh rosemary, thyme, cilantro, and parsley pack a punch of flavor. Unlike dried herbs, which can sometimes taste dusty if old, fresh herbs add aromatic oils that trick your palate into thinking the food is more seasoned than it is.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">3. Use Umami Boosters</h3>
      <p class="mb-4">Ingredients like mushrooms, tomatoes, and garlic have natural glutamates that provide a savory 'umami' quality. Roasting these ingredients deepens their flavor profile, adding richness to stews and soups without reaching for the salt shaker.</p>
    `
    },
    {
        id: "pantry-staples-seniors",
        title: "5 Heart-Healthy Ingredients to Keep in Your Pantry",
        excerpt: "Stock your kitchen with these essentials to make healthy cooking easier and faster every day.",
        image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=800&auto=format&fit=crop",
        date: "January 28, 2026",
        readTime: "4 min read",
        category: "Nutrition",
        content: `
      <p class="mb-4">Cooking healthy starts with having the right ingredients on hand. When you're tired or in a hurry, a well-stocked pantry stops you from reaching for processed convenience foods.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">1. Canned Beans (No Salt Added)</h3>
      <p class="mb-4">Beans are a powerhouse of fiber and protein. They help regulate blood sugar and keep you full. Rinse them thoroughly to remove excess sodium, or buy the 'No Salt Added' varieties.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">2. Whole Grains</h3>
      <p class="mb-4">Quinoa, brown rice, and oats. These grains are vital for digestive health and lowering cholesterol. They store for a long time and are incredibly versatile.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">3. Olive Oil</h3>
      <p class="mb-4">The cornerstone of the Mediterranean diet. Extra virgin olive oil is rich in monounsaturated fats which are great for your heart. Use it for dressings and low-heat cooking.</p>
    `
    },
    {
        id: "cooking-for-two",
        title: "Cooking for Two: Simple Tips to Avoid Leftover Waste",
        excerpt: "Adjusting to a smaller household? Here's how to scale down recipes and shop smarter.",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
        date: "January 15, 2026",
        readTime: "6 min read",
        category: "Lifestyle",
        content: `
      <p class="mb-4">After years of cooking for a full house, scaling back to cooking for just one or two can be a challenge. It often leads to weeks of eating the same leftovers or, worse, throwing food away.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">1. The 'Component' Strategy</h3>
      <p class="mb-4">Instead of making a full casserole, prep components. Roast a tray of chicken thighs. Determine to use two for dinner tonight, chop two for a salad tomorrow lunch, and shred the last two for tacos later in the week. Same ingredient, three different meals.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">2. Freeze in Portions</h3>
      <p class="mb-4">If you make a big pot of soup, don't put the whole pot in the fridge. Ladle it into single-serving containers immediately. These become your own homemade 'TV dinners' for nights you don't feel like cooking.</p>
    `
    }
];
