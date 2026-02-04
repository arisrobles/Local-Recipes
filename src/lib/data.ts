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
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=800&auto=format&fit=crop",
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
    },
    {
        id: "meatloaf-classic",
        title: "Mom's Classic Meatloaf with Mashed Potatoes",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop",
        time: "1 hr 15 mins",
        category: "Comfort Food",
        difficulty: "Easy",
        description: "A nostalgic, tender meatloaf just like mom used to make, served with creamy mashed potatoes.",
        servings: 6,
        calories: 420,
        protein: "32g",
        carbs: "28g",
        fat: "18g",
        ingredients: [
            "2 lbs ground beef (80/20)",
            "1 cup breadcrumbs",
            "1 onion, finely diced",
            "2 eggs, beaten",
            "1/2 cup milk",
            "1/4 cup ketchup (plus extra for topping)",
            "1 tbsp Worcestershire sauce",
            "1 tsp garlic powder",
            "Salt and pepper to taste",
            "2 lbs potatoes for mashing"
        ],
        instructions: [
            { step: 1, title: "Mix Meatloaf", text: "In a large bowl, combine ground beef, breadcrumbs, onion, eggs, milk, ketchup, Worcestershire sauce, and seasonings. Mix gently until just combined." },
            { step: 2, title: "Shape & Bake", text: "Form into a loaf shape in a baking dish. Spread extra ketchup on top. Bake at 350°F (175°C) for 1 hour." },
            { step: 3, title: "Make Mashed Potatoes", text: "While meatloaf bakes, boil potatoes until tender. Mash with butter and milk until creamy." },
            { step: 4, title: "Rest & Serve", text: "Let meatloaf rest 10 minutes before slicing. Serve with mashed potatoes." }
        ],
        chefTip: "Don't overmix the meat mixture—it makes the meatloaf tough. Mix just until ingredients are combined.",
        healthLabel: "Traditional Favorite"
    },
    {
        id: "baked-chicken-rice",
        title: "Easy Baked Chicken and Rice Casserole",
        image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?q=80&w=800&auto=format&fit=crop",
        time: "1 hr",
        category: "Seniors",
        difficulty: "Easy",
        description: "A simple one-dish meal with tender chicken, fluffy rice, and vegetables—perfect for easy digestion.",
        servings: 4,
        calories: 380,
        protein: "35g",
        carbs: "38g",
        fat: "10g",
        ingredients: [
            "4 boneless chicken thighs",
            "1.5 cups long-grain white rice",
            "3 cups low-sodium chicken broth",
            "1 cup frozen mixed vegetables",
            "1 onion, diced",
            "2 cloves garlic, minced",
            "1 tsp dried thyme",
            "1 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            { step: 1, title: "Prepare Dish", text: "Preheat oven to 375°F. In a 9x13 baking dish, combine rice, broth, vegetables, onion, garlic, and thyme." },
            { step: 2, title: "Add Chicken", text: "Season chicken with salt and pepper. Place on top of rice mixture. Drizzle with olive oil." },
            { step: 3, title: "Bake Covered", text: "Cover tightly with foil and bake for 50-60 minutes until rice is tender and chicken is cooked through." }
        ],
        chefTip: "Make sure the foil is sealed tight so the steam cooks the rice perfectly. No peeking until the timer goes off!",
        healthLabel: "Easy Digestion"
    },
    {
        id: "vegetable-soup",
        title: "Hearty Vegetable Soup for Two",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
        time: "40 mins",
        category: "Healthy",
        difficulty: "Easy",
        description: "A warm, nourishing vegetable soup packed with fiber and vitamins—perfect for smaller households.",
        servings: 2,
        calories: 180,
        protein: "6g",
        carbs: "32g",
        fat: "4g",
        ingredients: [
            "1 tbsp olive oil",
            "1 carrot, diced",
            "1 celery stalk, diced",
            "1 small zucchini, diced",
            "1 potato, cubed",
            "1 can (14oz) diced tomatoes",
            "3 cups low-sodium vegetable broth",
            "1 tsp Italian seasoning",
            "1 cup spinach or kale",
            "Salt and pepper to taste"
        ],
        instructions: [
            { step: 1, title: "Sauté Vegetables", text: "Heat oil in a pot. Add carrot, celery, and potato. Cook for 5 minutes until slightly softened." },
            { step: 2, title: "Simmer Soup", text: "Add zucchini, tomatoes, broth, and Italian seasoning. Bring to a boil, then simmer for 25 minutes." },
            { step: 3, title: "Add Greens", text: "Stir in spinach or kale. Cook for 2 more minutes until wilted. Season to taste." }
        ],
        chefTip: "This soup tastes even better the next day! Make a double batch and freeze half for easy meals later.",
        healthLabel: "Heart Healthy"
    },
    {
        id: "pork-chops-applesauce",
        title: "Pan-Fried Pork Chops with Homemade Applesauce",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop",
        time: "35 mins",
        category: "Dinner",
        difficulty: "Easy",
        description: "Juicy pork chops paired with sweet, homemade applesauce—a classic American comfort meal.",
        servings: 4,
        calories: 340,
        protein: "28g",
        carbs: "24g",
        fat: "14g",
        ingredients: [
            "4 bone-in pork chops (1-inch thick)",
            "2 tbsp olive oil",
            "1 tsp garlic powder",
            "1 tsp paprika",
            "4 apples, peeled and chopped",
            "1/4 cup water",
            "2 tbsp brown sugar (optional)",
            "1/2 tsp cinnamon",
            "Salt and pepper"
        ],
        instructions: [
            { step: 1, title: "Make Applesauce", text: "In a saucepan, combine apples, water, sugar, and cinnamon. Simmer for 20 minutes, stirring occasionally, until apples break down. Mash lightly." },
            { step: 2, title: "Season Pork Chops", text: "Pat pork chops dry. Season both sides with garlic powder, paprika, salt, and pepper." },
            { step: 3, title: "Pan-Fry", text: "Heat oil in a skillet over medium-high heat. Cook pork chops 4-5 minutes per side until golden and internal temp reaches 145°F." },
            { step: 4, title: "Serve", text: "Let pork chops rest 5 minutes. Serve with warm applesauce on the side." }
        ],
        chefTip: "Don't overcook the pork chops! They should be slightly pink in the center for maximum juiciness.",
        healthLabel: "Traditional Favorite"
    },
    {
        id: "tuna-noodle-casserole",
        title: "Classic Tuna Noodle Casserole",
        image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=800&auto=format&fit=crop",
        time: "45 mins",
        category: "Comfort Food",
        difficulty: "Easy",
        description: "A creamy, nostalgic casserole with egg noodles, tuna, and peas—simple and satisfying.",
        servings: 6,
        calories: 320,
        protein: "22g",
        carbs: "36g",
        fat: "10g",
        ingredients: [
            "12 oz egg noodles",
            "2 cans (5oz each) tuna in water, drained",
            "1 can cream of mushroom soup (low-sodium)",
            "1 cup frozen peas",
            "1/2 cup milk",
            "1 cup shredded cheddar cheese",
            "1/2 cup breadcrumbs",
            "2 tbsp butter, melted",
            "Salt and pepper"
        ],
        instructions: [
            { step: 1, title: "Cook Noodles", text: "Boil egg noodles according to package directions. Drain and set aside." },
            { step: 2, title: "Mix Casserole", text: "In a large bowl, combine noodles, tuna, soup, peas, milk, and half the cheese. Season with salt and pepper." },
            { step: 3, title: "Assemble", text: "Pour into a greased 9x13 baking dish. Top with remaining cheese. Mix breadcrumbs with melted butter and sprinkle on top." },
            { step: 4, title: "Bake", text: "Bake at 350°F for 25-30 minutes until bubbly and golden on top." }
        ],
        chefTip: "Use chunk light tuna instead of albacore—it's lower in mercury and perfect for regular meals.",
        healthLabel: "Classic Comfort"
    },
    {
        id: "slow-cooker-beef-stew",
        title: "Slow Cooker Beef Stew (Set and Forget)",
        image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=800&auto=format&fit=crop",
        time: "8 hrs",
        category: "Seniors",
        difficulty: "Easy",
        description: "Tender beef and vegetables cooked low and slow—minimal effort for maximum comfort.",
        servings: 6,
        calories: 380,
        protein: "32g",
        carbs: "26g",
        fat: "16g",
        ingredients: [
            "2 lbs beef chuck, cut into 2-inch cubes",
            "4 carrots, cut into chunks",
            "3 potatoes, cubed",
            "1 onion, chopped",
            "3 cups low-sodium beef broth",
            "2 tbsp tomato paste",
            "1 tsp dried thyme",
            "2 bay leaves",
            "2 tbsp flour",
            "Salt and pepper"
        ],
        instructions: [
            { step: 1, title: "Prep Ingredients", text: "Toss beef cubes with flour, salt, and pepper. Place in slow cooker with carrots, potatoes, and onion." },
            { step: 2, title: "Add Liquids", text: "Stir in broth, tomato paste, thyme, and bay leaves." },
            { step: 3, title: "Cook Low and Slow", text: "Cover and cook on LOW for 8 hours or HIGH for 4-5 hours until beef is fork-tender." },
            { step: 4, title: "Serve", text: "Remove bay leaves. Ladle into bowls and serve with crusty bread." }
        ],
        chefTip: "Start this in the morning before you run errands. Come home to a house that smells amazing and dinner ready to eat!",
        healthLabel: "Easy Digestion"
    },
    {
        id: "baked-cod-lemon",
        title: "Simple Baked Cod with Lemon and Herbs",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
        time: "20 mins",
        category: "Healthy",
        difficulty: "Easy",
        description: "Mild, flaky cod baked with fresh lemon and parsley—light, healthy, and quick to prepare.",
        servings: 2,
        calories: 180,
        protein: "28g",
        carbs: "2g",
        fat: "6g",
        ingredients: [
            "2 cod fillets (6oz each)",
            "1 lemon, sliced",
            "2 tbsp olive oil",
            "2 cloves garlic, minced",
            "1 tsp dried oregano",
            "Fresh parsley, chopped",
            "Salt and pepper"
        ],
        instructions: [
            { step: 1, title: "Prepare Baking Dish", text: "Preheat oven to 400°F. Lightly oil a baking dish." },
            { step: 2, title: "Season Fish", text: "Place cod fillets in dish. Drizzle with olive oil. Sprinkle with garlic, oregano, salt, and pepper. Top with lemon slices." },
            { step: 3, title: "Bake", text: "Bake for 12-15 minutes until fish flakes easily with a fork." },
            { step: 4, title: "Garnish", text: "Sprinkle with fresh parsley before serving." }
        ],
        chefTip: "Cod is very mild and perfect for people who say they 'don't like fish.' Serve with steamed green beans for a complete meal.",
        healthLabel: "Heart Healthy"
    },
    {
        id: "oatmeal-breakfast",
        title: "Warm Cinnamon Apple Oatmeal",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=800&auto=format&fit=crop",
        time: "15 mins",
        category: "Diabetic Friendly",
        difficulty: "Easy",
        description: "A hearty, fiber-rich breakfast that helps regulate blood sugar and keeps you full all morning.",
        servings: 2,
        calories: 220,
        protein: "6g",
        carbs: "42g",
        fat: "4g",
        ingredients: [
            "1 cup old-fashioned oats",
            "2 cups water or low-fat milk",
            "1 apple, diced",
            "1 tsp cinnamon",
            "1 tbsp chopped walnuts",
            "1 tsp honey (optional)",
            "Pinch of salt"
        ],
        instructions: [
            { step: 1, title: "Cook Oats", text: "In a saucepan, bring water or milk to a boil. Add oats and salt. Reduce heat and simmer for 5 minutes, stirring occasionally." },
            { step: 2, title: "Add Apple", text: "Stir in diced apple and cinnamon. Cook for 3 more minutes until apples soften." },
            { step: 3, title: "Serve", text: "Divide into bowls. Top with walnuts and a drizzle of honey if desired." }
        ],
        chefTip: "Steel-cut oats take longer but have an even lower glycemic index. Cook a big batch on Sunday and reheat throughout the week.",
        healthLabel: "Low Glycemic"
    },
    {
        id: "roasted-turkey-breast",
        title: "Herb-Roasted Turkey Breast for Two",
        image: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?q=80&w=800&auto=format&fit=crop",
        time: "1 hr 30 mins",
        category: "Dinner",
        difficulty: "Medium",
        description: "Juicy roasted turkey breast with herbs—perfect for smaller households without leftovers for weeks.",
        servings: 4,
        calories: 280,
        protein: "42g",
        carbs: "2g",
        fat: "10g",
        ingredients: [
            "2 lb boneless turkey breast",
            "2 tbsp olive oil",
            "2 tsp dried sage",
            "1 tsp dried thyme",
            "1 tsp garlic powder",
            "1 tsp onion powder",
            "1 cup low-sodium chicken broth",
            "Salt and pepper"
        ],
        instructions: [
            { step: 1, title: "Season Turkey", text: "Preheat oven to 350°F. Rub turkey breast with olive oil and season with sage, thyme, garlic powder, onion powder, salt, and pepper." },
            { step: 2, title: "Roast", text: "Place in a roasting pan. Pour broth around (not over) the turkey. Roast for 1 hour 15 minutes, basting every 20 minutes." },
            { step: 3, title: "Rest", text: "Remove when internal temp reaches 165°F. Let rest 10 minutes before slicing." }
        ],
        chefTip: "Use a meat thermometer! Turkey breast dries out fast if overcooked. Pull it at exactly 165°F.",
        healthLabel: "Heart Healthy"
    },
    {
        id: "mac-and-cheese",
        title: "Creamy Homemade Mac and Cheese",
        image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?q=80&w=800&auto=format&fit=crop",
        time: "35 mins",
        category: "Comfort Food",
        difficulty: "Easy",
        description: "Rich, creamy macaroni and cheese made from scratch—comfort food at its finest.",
        servings: 6,
        calories: 420,
        protein: "18g",
        carbs: "48g",
        fat: "18g",
        ingredients: [
            "1 lb elbow macaroni",
            "4 tbsp butter",
            "1/4 cup flour",
            "3 cups whole milk",
            "3 cups shredded sharp cheddar cheese",
            "1 cup shredded mozzarella",
            "1/2 tsp mustard powder",
            "Salt and pepper",
            "1/2 cup breadcrumbs (optional topping)"
        ],
        instructions: [
            { step: 1, title: "Cook Pasta", text: "Boil macaroni according to package directions. Drain and set aside." },
            { step: 2, title: "Make Cheese Sauce", text: "In a large pot, melt butter. Whisk in flour and cook 1 minute. Slowly add milk, whisking constantly. Bring to a simmer until thickened." },
            { step: 3, title: "Add Cheese", text: "Remove from heat. Stir in cheddar, mozzarella, mustard powder, salt, and pepper until smooth. Mix in cooked pasta." },
            { step: 4, title: "Optional Bake", text: "For baked version: Pour into dish, top with breadcrumbs, bake at 350°F for 20 minutes until golden." }
        ],
        chefTip: "Add the cheese off the heat to prevent it from becoming grainy. Low and slow wins the race!",
        healthLabel: "Classic Comfort"
    },
    {
        id: "baked-tilapia",
        title: "Garlic Butter Baked Tilapia",
        image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=800&auto=format&fit=crop",
        time: "20 mins",
        category: "Healthy",
        difficulty: "Easy",
        description: "Mild, flaky tilapia baked with garlic butter—a quick, heart-healthy weeknight dinner.",
        servings: 4,
        calories: 210,
        protein: "30g",
        carbs: "1g",
        fat: "9g",
        ingredients: [
            "4 tilapia fillets",
            "3 tbsp butter, melted",
            "3 cloves garlic, minced",
            "1 lemon, juiced",
            "1 tsp paprika",
            "Fresh parsley, chopped",
            "Salt and pepper"
        ],
        instructions: [
            { step: 1, title: "Prepare Baking Sheet", text: "Preheat oven to 400°F. Line a baking sheet with parchment paper." },
            { step: 2, title: "Season Fish", text: "Place tilapia on sheet. Mix melted butter, garlic, lemon juice, paprika, salt, and pepper. Brush over fish." },
            { step: 3, title: "Bake", text: "Bake for 12-15 minutes until fish flakes easily. Garnish with fresh parsley." }
        ],
        chefTip: "Tilapia is one of the most affordable fish. Buy it frozen in bulk and thaw as needed for quick meals.",
        healthLabel: "Heart Healthy"
    },
    {
        id: "split-pea-soup",
        title: "Classic Split Pea Soup with Ham",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
        time: "1 hr 30 mins",
        category: "Seniors",
        difficulty: "Easy",
        description: "Thick, hearty split pea soup with ham—a traditional favorite that's easy to digest and full of protein.",
        servings: 6,
        calories: 280,
        protein: "20g",
        carbs: "38g",
        fat: "6g",
        ingredients: [
            "1 lb dried split peas, rinsed",
            "1 ham bone or 2 cups diced ham",
            "1 onion, diced",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "3 cloves garlic, minced",
            "8 cups low-sodium chicken broth",
            "2 bay leaves",
            "1 tsp dried thyme",
            "Salt and pepper"
        ],
        instructions: [
            { step: 1, title: "Sauté Vegetables", text: "In a large pot, sauté onion, carrots, and celery for 5 minutes until softened." },
            { step: 2, title: "Add Ingredients", text: "Add split peas, ham bone (or diced ham), garlic, broth, bay leaves, and thyme. Bring to a boil." },
            { step: 3, title: "Simmer", text: "Reduce heat and simmer for 1-1.5 hours, stirring occasionally, until peas are very soft and soup is thick." },
            { step: 4, title: "Finish", text: "Remove ham bone and bay leaves. Shred any meat from bone and return to soup. Season to taste." }
        ],
        chefTip: "This soup thickens as it sits. Add more broth when reheating if needed.",
        healthLabel: "Easy Digestion"
    },
    {
        id: "chicken-pot-pie",
        title: "Classic Chicken Pot Pie",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800&auto=format&fit=crop",
        time: "1 hr",
        category: "Comfort Food",
        difficulty: "Medium",
        description: "Flaky pastry filled with creamy chicken and vegetables—the ultimate comfort food.",
        servings: 6,
        calories: 480,
        protein: "26g",
        carbs: "42g",
        fat: "22g",
        ingredients: [
            "2 cups cooked chicken, diced",
            "1 package refrigerated pie crusts (2 crusts)",
            "3 tbsp butter",
            "1 onion, diced",
            "2 carrots, diced",
            "1 cup frozen peas",
            "1/3 cup flour",
            "2 cups chicken broth",
            "1 cup milk",
            "1 tsp dried thyme",
            "Salt and pepper"
        ],
        instructions: [
            { step: 1, title: "Make Filling", text: "In a large skillet, melt butter. Sauté onion and carrots for 5 minutes. Sprinkle flour over vegetables and stir for 1 minute." },
            { step: 2, title: "Add Liquids", text: "Slowly add broth and milk, stirring constantly. Bring to a simmer until thickened. Stir in chicken, peas, thyme, salt, and pepper." },
            { step: 3, title: "Assemble Pie", text: "Line a 9-inch pie dish with one crust. Pour filling in. Top with second crust, crimp edges, and cut slits for steam." },
            { step: 4, title: "Bake", text: "Bake at 425°F for 30-35 minutes until crust is golden brown." }
        ],
        chefTip: "Use a rotisserie chicken from the grocery store to save time. The filling can be made a day ahead.",
        healthLabel: "Traditional Favorite"
    },
    {
        id: "grilled-cheese-tomato-soup",
        title: "Grilled Cheese with Tomato Soup",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
        time: "25 mins",
        category: "Comfort Food",
        difficulty: "Easy",
        description: "The classic duo—crispy grilled cheese paired with warm, creamy tomato soup.",
        servings: 2,
        calories: 420,
        protein: "14g",
        carbs: "48g",
        fat: "20g",
        ingredients: [
            "4 slices bread",
            "4 slices cheddar cheese",
            "2 tbsp butter",
            "1 can (14oz) tomato soup",
            "1/2 cup milk",
            "1/2 tsp dried basil",
            "Salt and pepper"
        ],
        instructions: [
            { step: 1, title: "Make Soup", text: "In a saucepan, combine tomato soup, milk, and basil. Heat over medium, stirring occasionally, until hot. Season to taste." },
            { step: 2, title: "Assemble Sandwiches", text: "Butter one side of each bread slice. Place cheese between two slices, buttered sides out." },
            { step: 3, title: "Grill", text: "Heat a skillet over medium heat. Cook sandwiches 3-4 minutes per side until golden and cheese is melted." },
            { step: 4, title: "Serve", text: "Cut sandwiches in half and serve with hot tomato soup for dipping." }
        ],
        chefTip: "Add a pinch of sugar to the tomato soup to balance the acidity. It makes a huge difference!",
        healthLabel: "Classic Comfort"
    },
    {
        id: "baked-ziti",
        title: "Easy Baked Ziti with Three Cheeses",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop",
        time: "50 mins",
        category: "Comfort Food",
        difficulty: "Easy",
        description: "Hearty pasta baked with marinara sauce and three types of cheese—perfect for feeding a crowd.",
        servings: 8,
        calories: 450,
        protein: "22g",
        carbs: "52g",
        fat: "18g",
        ingredients: [
            "1 lb ziti pasta",
            "1 jar (24oz) marinara sauce",
            "1 lb ricotta cheese",
            "2 cups shredded mozzarella",
            "1/2 cup grated Parmesan",
            "1 egg",
            "2 tsp Italian seasoning",
            "Fresh basil for garnish",
            "Salt and pepper"
        ],
        instructions: [
            { step: 1, title: "Cook Pasta", text: "Boil ziti until just al dente (1-2 minutes less than package directions). Drain." },
            { step: 2, title: "Mix Cheese Filling", text: "In a bowl, combine ricotta, egg, 1 cup mozzarella, Italian seasoning, salt, and pepper." },
            { step: 3, title: "Assemble", text: "In a 9x13 dish, layer half the pasta, half the sauce, all the ricotta mixture, then remaining pasta and sauce. Top with remaining mozzarella and Parmesan." },
            { step: 4, title: "Bake", text: "Cover with foil and bake at 375°F for 25 minutes. Uncover and bake 10 more minutes until bubbly and golden." }
        ],
        chefTip: "Make this a day ahead and refrigerate. It actually tastes better the next day!",
        healthLabel: "Traditional Favorite"
    },
    {
        id: "roasted-vegetables",
        title: "Simple Roasted Root Vegetables",
        image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=800&auto=format&fit=crop",
        time: "45 mins",
        category: "Healthy",
        difficulty: "Easy",
        description: "Colorful roasted carrots, parsnips, and sweet potatoes—naturally sweet and full of fiber.",
        servings: 4,
        calories: 180,
        protein: "3g",
        carbs: "36g",
        fat: "5g",
        ingredients: [
            "3 carrots, cut into chunks",
            "2 parsnips, cut into chunks",
            "1 sweet potato, cubed",
            "1 red onion, quartered",
            "3 tbsp olive oil",
            "1 tsp dried thyme",
            "1 tsp garlic powder",
            "Salt and pepper"
        ],
        instructions: [
            { step: 1, title: "Prep Vegetables", text: "Preheat oven to 425°F. Toss all vegetables with olive oil, thyme, garlic powder, salt, and pepper." },
            { step: 2, title: "Roast", text: "Spread in a single layer on a baking sheet. Roast for 35-40 minutes, stirring halfway, until tender and caramelized." },
            { step: 3, title: "Serve", text: "Garnish with fresh herbs if desired. Serve as a side dish or over quinoa for a complete meal." }
        ],
        chefTip: "Don't overcrowd the pan! Give vegetables space so they roast instead of steam.",
        healthLabel: "Heart Healthy"
    },
    {
        id: "beef-barley-soup",
        title: "Hearty Beef and Barley Soup",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
        time: "1 hr 45 mins",
        category: "Seniors",
        difficulty: "Easy",
        description: "A thick, filling soup with tender beef, pearl barley, and vegetables—comfort in a bowl.",
        servings: 6,
        calories: 320,
        protein: "26g",
        carbs: "34g",
        fat: "10g",
        ingredients: [
            "1 lb beef stew meat, cubed",
            "1 cup pearl barley",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "1 onion, diced",
            "8 cups low-sodium beef broth",
            "2 bay leaves",
            "1 tsp dried thyme",
            "2 tbsp olive oil",
            "Salt and pepper"
        ],
        instructions: [
            { step: 1, title: "Brown Beef", text: "Heat oil in a large pot. Brown beef on all sides. Remove and set aside." },
            { step: 2, title: "Sauté Vegetables", text: "In the same pot, sauté carrots, celery, and onion for 5 minutes." },
            { step: 3, title: "Simmer", text: "Return beef to pot. Add barley, broth, bay leaves, and thyme. Bring to a boil, then simmer for 1.5 hours until beef and barley are tender." },
            { step: 4, title: "Season", text: "Remove bay leaves. Season with salt and pepper to taste." }
        ],
        chefTip: "Barley will absorb liquid as it sits. Add more broth when reheating leftovers.",
        healthLabel: "Easy Digestion"
    },
    {
        id: "baked-ham-glaze",
        title: "Brown Sugar Glazed Baked Ham",
        image: "https://images.unsplash.com/photo-1545093149-618ce3bcf49d?q=80&w=800&auto=format&fit=crop",
        time: "2 hrs",
        category: "Dinner",
        difficulty: "Medium",
        description: "A beautiful centerpiece ham with a sweet and tangy glaze—perfect for special occasions.",
        servings: 10,
        calories: 320,
        protein: "32g",
        carbs: "18g",
        fat: "14g",
        ingredients: [
            "1 bone-in ham (8-10 lbs)",
            "1 cup brown sugar",
            "1/2 cup honey",
            "1/4 cup Dijon mustard",
            "1/4 cup apple cider vinegar",
            "Whole cloves (optional)",
            "Pineapple slices (optional)"
        ],
        instructions: [
            { step: 1, title: "Prepare Ham", text: "Preheat oven to 325°F. Score ham in a diamond pattern. Insert cloves if using." },
            { step: 2, title: "Make Glaze", text: "In a saucepan, combine brown sugar, honey, mustard, and vinegar. Simmer for 5 minutes." },
            { step: 3, title: "Bake", text: "Place ham in roasting pan. Brush with glaze. Bake for 1.5-2 hours, basting every 20 minutes." },
            { step: 4, title: "Rest", text: "Let ham rest 15 minutes before slicing." }
        ],
        chefTip: "Buy a pre-cooked ham to save time. You're really just heating it and adding flavor with the glaze.",
        healthLabel: "Traditional Favorite"
    },
    {
        id: "egg-salad-sandwich",
        title: "Classic Egg Salad Sandwich",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
        time: "20 mins",
        category: "Seniors",
        difficulty: "Easy",
        description: "Creamy egg salad on soft bread—a simple, protein-rich lunch that's easy to chew.",
        servings: 4,
        calories: 280,
        protein: "14g",
        carbs: "26g",
        fat: "14g",
        ingredients: [
            "6 hard-boiled eggs, chopped",
            "1/4 cup mayonnaise",
            "1 tsp Dijon mustard",
            "2 tbsp chopped celery",
            "1 tbsp chopped fresh dill",
            "8 slices soft white or wheat bread",
            "Lettuce leaves",
            "Salt and pepper"
        ],
        instructions: [
            { step: 1, title: "Make Egg Salad", text: "In a bowl, combine chopped eggs, mayo, mustard, celery, dill, salt, and pepper. Mix gently." },
            { step: 2, title: "Assemble Sandwiches", text: "Place lettuce on 4 slices of bread. Top with egg salad and remaining bread slices." },
            { step: 3, title: "Serve", text: "Cut in half and serve immediately, or wrap and refrigerate for up to 2 days." }
        ],
        chefTip: "For perfect hard-boiled eggs: Boil for 10 minutes, then immediately transfer to ice water.",
        healthLabel: "Easy Digestion"
    },
    {
        id: "stuffed-bell-peppers",
        title: "Ground Beef Stuffed Bell Peppers",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800&auto=format&fit=crop",
        time: "1 hr",
        category: "Dinner",
        difficulty: "Medium",
        description: "Colorful bell peppers filled with seasoned ground beef and rice—a complete meal in one.",
        servings: 4,
        calories: 380,
        protein: "28g",
        carbs: "36g",
        fat: "16g",
        ingredients: [
            "4 large bell peppers (any color)",
            "1 lb ground beef",
            "1 cup cooked rice",
            "1 can (14oz) diced tomatoes",
            "1 onion, diced",
            "2 cloves garlic, minced",
            "1 tsp Italian seasoning",
            "1 cup shredded mozzarella",
            "Salt and pepper"
        ],
        instructions: [
            { step: 1, title: "Prepare Peppers", text: "Cut tops off peppers and remove seeds. Boil in salted water for 5 minutes. Drain." },
            { step: 2, title: "Make Filling", text: "Brown beef with onion and garlic. Drain fat. Stir in rice, tomatoes, Italian seasoning, salt, and pepper." },
            { step: 3, title: "Stuff & Bake", text: "Fill peppers with beef mixture. Place in baking dish. Cover with foil and bake at 375°F for 30 minutes." },
            { step: 4, title: "Add Cheese", text: "Uncover, top with cheese, and bake 10 more minutes until melted." }
        ],
        chefTip: "Use leftover rice from Chinese takeout! It's the perfect amount and saves time.",
        healthLabel: "Traditional Favorite"
    },
    {
        id: "lentil-soup",
        title: "Hearty Lentil Soup with Vegetables",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
        time: "50 mins",
        category: "Healthy",
        difficulty: "Easy",
        description: "Protein-packed lentil soup with carrots and spinach—budget-friendly and heart-healthy.",
        servings: 6,
        calories: 220,
        protein: "14g",
        carbs: "38g",
        fat: "3g",
        ingredients: [
            "1.5 cups dried green or brown lentils",
            "1 onion, diced",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "3 cloves garlic, minced",
            "6 cups low-sodium vegetable broth",
            "1 can (14oz) diced tomatoes",
            "2 cups spinach",
            "1 tsp cumin",
            "1 tbsp olive oil",
            "Salt and pepper"
        ],
        instructions: [
            { step: 1, title: "Sauté Vegetables", text: "Heat oil in a large pot. Sauté onion, carrots, and celery for 5 minutes. Add garlic and cumin, cook 1 minute." },
            { step: 2, title: "Add Lentils", text: "Add lentils, broth, and tomatoes. Bring to a boil, then simmer for 35-40 minutes until lentils are tender." },
            { step: 3, title: "Finish", text: "Stir in spinach and cook until wilted. Season with salt and pepper." }
        ],
        chefTip: "Lentils don't need soaking! They're the fastest-cooking legume and perfect for weeknight meals.",
        healthLabel: "Heart Healthy"
    },
    {
        id: "pancakes-blueberry",
        title: "Fluffy Buttermilk Pancakes with Blueberries",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop",
        time: "25 mins",
        category: "Diabetic Friendly",
        difficulty: "Easy",
        description: "Light, fluffy pancakes with fresh blueberries—a weekend breakfast treat.",
        servings: 4,
        calories: 280,
        protein: "8g",
        carbs: "46g",
        fat: "8g",
        ingredients: [
            "1.5 cups all-purpose flour",
            "2 tbsp sugar",
            "2 tsp baking powder",
            "1/2 tsp salt",
            "1.25 cups buttermilk",
            "1 egg",
            "2 tbsp melted butter",
            "1 cup fresh blueberries",
            "Maple syrup for serving"
        ],
        instructions: [
            { step: 1, title: "Mix Dry Ingredients", text: "In a bowl, whisk together flour, sugar, baking powder, and salt." },
            { step: 2, title: "Mix Wet Ingredients", text: "In another bowl, whisk buttermilk, egg, and melted butter." },
            { step: 3, title: "Combine", text: "Pour wet into dry ingredients. Stir until just combined (lumps are okay). Gently fold in blueberries." },
            { step: 4, title: "Cook", text: "Heat a griddle over medium heat. Pour 1/4 cup batter per pancake. Cook until bubbles form, flip, and cook until golden." }
        ],
        chefTip: "Don't overmix the batter! Lumps are good—they make the pancakes fluffy.",
        healthLabel: "Traditional Favorite"
    },
    {
        id: "baked-sweet-potato",
        title: "Loaded Baked Sweet Potato",
        image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?q=80&w=800&auto=format&fit=crop",
        time: "1 hr",
        category: "Healthy",
        difficulty: "Easy",
        description: "Fluffy baked sweet potato topped with black beans, avocado, and a dollop of Greek yogurt.",
        servings: 2,
        calories: 340,
        protein: "12g",
        carbs: "58g",
        fat: "8g",
        ingredients: [
            "2 large sweet potatoes",
            "1 can (15oz) black beans, drained",
            "1 avocado, sliced",
            "1/4 cup Greek yogurt",
            "1/4 cup salsa",
            "Fresh cilantro",
            "Lime wedges",
            "Salt and pepper"
        ],
        instructions: [
            { step: 1, title: "Bake Potatoes", text: "Preheat oven to 400°F. Pierce sweet potatoes with a fork. Bake for 45-60 minutes until tender." },
            { step: 2, title: "Warm Beans", text: "Heat black beans in a small pot with a pinch of cumin and salt." },
            { step: 3, title: "Assemble", text: "Split sweet potatoes open. Top with black beans, avocado, yogurt, and salsa." },
            { step: 4, title: "Garnish", text: "Add cilantro and serve with lime wedges." }
        ],
        chefTip: "Sweet potatoes are packed with vitamin A and fiber. They're naturally sweet, so no butter needed!",
        healthLabel: "Heart Healthy"
    },
    {
        id: "chicken-noodle-casserole",
        title: "Creamy Chicken Noodle Casserole",
        image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=800&auto=format&fit=crop",
        time: "45 mins",
        category: "Comfort Food",
        difficulty: "Easy",
        description: "A creamy, comforting casserole with chicken, egg noodles, and vegetables.",
        servings: 6,
        calories: 380,
        protein: "26g",
        carbs: "38g",
        fat: "14g",
        ingredients: [
            "12 oz egg noodles",
            "2 cups cooked chicken, diced",
            "1 can cream of chicken soup",
            "1 cup sour cream",
            "1 cup frozen mixed vegetables",
            "1 cup shredded cheddar cheese",
            "1/2 cup milk",
            "1/2 cup breadcrumbs",
            "2 tbsp butter, melted",
            "Salt and pepper"
        ],
        instructions: [
            { step: 1, title: "Cook Noodles", text: "Boil egg noodles according to package directions. Drain." },
            { step: 2, title: "Mix Casserole", text: "In a large bowl, combine noodles, chicken, soup, sour cream, vegetables, half the cheese, and milk. Season with salt and pepper." },
            { step: 3, title: "Assemble", text: "Pour into a greased 9x13 baking dish. Top with remaining cheese. Mix breadcrumbs with melted butter and sprinkle on top." },
            { step: 4, title: "Bake", text: "Bake at 350°F for 25-30 minutes until bubbly and golden." }
        ],
        chefTip: "Use rotisserie chicken to save time. This casserole freezes beautifully for future meals!",
        healthLabel: "Classic Comfort"
    }
];

export const categories = [
    { name: "Comfort Food", icon: "Soup", count: 7, slug: "comfort" },
    { name: "Healthy Meals", icon: "Salad", count: 5, slug: "healthy" },
    { name: "Seniors", icon: "Heart", count: 4, slug: "seniors" },
    { name: "Dinner", icon: "Clock", count: 4, slug: "dinner" },
    { name: "Diabetic Friendly", icon: "Heart", count: 2, slug: "diabetic" },
    { name: "Heart Healthy", icon: "Heart", count: 3, slug: "heart" }
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
    },
    {
        id: "digestive-health-seniors",
        title: "Digestive Health: Foods to embrace and Avoid after 50",
        excerpt: "As we age, our digestion changes. Learn which foods soothe your stomach and which might be causing discomfort.",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop",
        date: "February 5, 2026",
        readTime: "5 min read",
        category: "Health",
        content: `
      <p class="mb-4">It's not your imagination—foods you used to eat without issue might now cause heartburn or bloating. This is a natural part of aging, but simple dietary tweaks can keep your digestive system running smoothly.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">1. Fiber is Your Best Friend</h3>
      <p class="mb-4">Constipation is a common complaint among seniors. Increasing soluble fiber from oats, apples, and beans can keep things moving. Just remember to increase water intake simultaneously to help the fiber do its job.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">2. Watch the Spices</h3>
      <p class="mb-4">Extremely spicy foods can irritate the lining of the stomach. If you love flavor, try shifting towards aromatic spices like basil, oregano, and turmeric, which are anti-inflammatory, rather than chili powder or hot sauce.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">3. Smaller, More Frequent Meals</h3>
      <p class="mb-4">A large, heavy dinner can be hard to digest before bed. Try shifting your largest meal to lunch, and having a lighter supper. This gives your body ample time to digest before you lie down to sleep.</p>
    `
    },
    {
        id: "joy-of-slow-cooking",
        title: "The Joy of Slow Cooking: Why It's Perfect for Retirement",
        excerpt: "Rediscover the patience and reward of traditional cooking methods that fill your home with warmth.",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
        date: "February 8, 2026",
        readTime: "4 min read",
        category: "Lifestyle",
        content: `
      <p class="mb-4">In a fast-paced career, the microwave was a necessity. In retirement, the slow cooker (or Dutch oven) is a luxury. There is something deeply satisfying about starting a meal in the morning and smelling it simmer all day.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">1. Tough Cuts Become Tender</h3>
      <p class="mb-4">Slow cooking allows you to buy more affordable, tougher cuts of meat like chuck roast or pork shoulder. Over time, the collagen breaks down, resulting in meat that is far more tender and flavorful than expensive quick-cook steaks.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">2. One Pot, Less Cleanup</h3>
      <p class="mb-4">We all want to spend less time standing at the sink. Slow cooker meals usually involve tossing everything into one vessel. Serve it with a slice of crusty bread, and you have a complete meal with hardly any dishes to wash.</p>
    `
    }
];
