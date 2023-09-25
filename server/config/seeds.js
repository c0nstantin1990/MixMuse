const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Liquor" },
    { name: "Equipment" },
    { name: "Mixers" }
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    // Liquor data goes here //
    {
      name: "Tito's Vodka",
      description:
        "Titos Handmade Vodka is designed to be savored by spirit connoisseurs. It is micro-distilled in an old-fashioned pot still, just like fine single malt scotches and high-end French cognacs. This time-honored method of distillation requires more skill and effort than modern column stills, but it’s well worth it.",
      image: "https://www.liquor.com/thmb/jSdDjGIHVSXMKeZm659RFig8DqA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/LQR_Edit-BottleReview_TitosVodka_PrimaryHero-4000x4000-a98fb75c2f6a4926a8f728eec87b19ec.jpg",
      category: categories[0]._id,
      price: 22.99,
      quantity: 500,
    },
    {
      name: "Espolon Tequila",
      description:
        "Although affordable, Espolon Blanco is really just an okay tequila. Its mild flavor makes it a fine sipper, though its lack of punch could render it lost in cocktails.",
      image: "https://www.liquor.com/thmb/ZNBtFjfKPI67lk6gCzXOkM8-HOA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bottle-review_Espolon-Blanco_720x720-bb0c6bf3db594010914fb83372f14b1a.jpg",
      category: categories[0]._id,
      price: 20,
      quantity: 500,
    },
    {
      name: "Michter’s US*1 Small Batch Kentucky Straight Bourbon",
      description:
        "An accessible offering from a label that’s often known for costly age statement whiskeys, Michter’s non-age-statement straight bourbon is an excellent choice for straight pours or mixing into cocktails. Our tasting panel particularly noted the whiskey’s oak-forward complexity, which is speculated to come from Michter’s practice of seasoning its barrels for 18 to 48 months. ",
      image: "https://www.liquor.com/thmb/txO2ogw74oUCdde0rWewpD8iazs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bottle-review_michters_1500x1500-e769a2df8abe4558a0de1e59c3034553.jpg",
      category: categories[0]._id,
      price: 40,
      quantity: 20,
    },
    {
      name: "DUsse VSOP",
      description:
        "a distinct and versatile cognac that works well as both a sipper or a mixer. Its soft and unchallenging flavors of figs, caramel, and honey lead to a gentle yet alcoholic kick on the finish. ",
      image: "https://www.liquor.com/thmb/wScpRgiHeyRtDdRBthzwKc-yqvg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bottle-review_dusse-cognac_main_720x720-f0afa2a6056c42d385c091c183abc497.jpg",
      category: categories[0]._id,
      price: 50,
      quantity: 50,
    },
    {
      name: "Monkey 47 Schwarzwald Dry Gin ",
      description:
        "Monkey 47 Schwarzwald Dry Gin has garnered a cult following amongst gin enthusiasts and bartenders alike since its launch in 2010. It is known as an unusual bottling that stands out in a crowded gin category. ",
      image: "https://www.liquor.com/thmb/mzBjD3c8JNl8MmASKgcbOX2gVnc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/LQR_Edit-BottleReview_Monkey47Gin_PrimaryHero-4000x4000-37dfb033f6cd461f8ce5f92b5b2e5f73.jpg",
      category: categories[0]._id,
      price: 50,
      quantity: 50,
    },
    {
      name: "Havana Club Añejo Clásico Puerto Rican Rum ",
      description:
        "While its history is complicated, this affordable bottling is a pleasant, middle-of-the-road aged rum, according to reviewers. They noted its excellent value and mixability in drinks like the Daiquiri and Piña Colada, but found that it lacks the complexity and character to be best enjoyed neat. ",
      image: "https://www.liquor.com/thmb/gVS8TwMKLHktAc2hnGnNc9dfEWE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bottle-review_havana-club-rum_1500x1500-216ed905a7de486a999ec5a3ec4896e0.jpg",
      category: categories[0]._id,
      price: 22,
      quantity: 300,
    },
    {
      name: "Rittenhouse Straight Rye Whisky",
      description:
        "There are trendier bottles out there, but Rittenhouse Straight Rye Whisky has remained a bartender favorite for its versatility in cocktails and its complex spicy notes that make it a great sipping whiskey. Industry clout aside, it has a relatively gentle and sweet flavor profile that beginners will appreciate, too. ",
      image: "https://www.liquor.com/thmb/efRedvjADv6MUQC2TUG5OBJnwkE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bottle-review_Rittenhouse-Rye_main_720x720-afc4efb1d3bf467aa7d52088dcf4f313.jpg",
      category: categories[0]._id,
      price: 28,
      quantity: 100,
    },
    {
      name: "Macallan 15 Year Triple Cask Scotch",
      description:
        "There are trendier bottles out there, but Rittenhouse Straight Rye Whisky has remained a bartender favorite for its versatility in cocktails and its complex spicy notes that make it a great sipping whiskey. Industry clout aside, it has a relatively gentle and sweet flavor profile that beginners will appreciate, too. ",
      image: "https://www.liquor.com/thmb/n4U_Je4VprBHSFweLyC2GO6wGRs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bottle-review_macallan15_main_720x720-9c8e519741384b3bb05f72138b615c86.jpg",
      category: categories[0]._id,
      price: 125,
      quantity: 10,
    },
    {
      name: "El Silencio Mezcal Espadín",
      description:
        "Crafted in the Mexican state of Oaxaca, El Silencio’s espadín expression was designed for mixing into cocktails, and our tasting panel indeed finds this to be the best use for the entry-level mezcal. At its price point, this expression is a good value as a mixing spirit. ",
      image: "https://www.liquor.com/thmb/QUTpan492mZEwKMdCndV4Z1SZvs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/LQR_Edit-BottleReview_ElSilencioMezcalEspadinPrimaryHero-4000x4000-3a50f77dce4b44b989041e4dcbe9ed3e.jpg",
      category: categories[0]._id,
      price: 125,
      quantity: 10,
    },
    {
      name: "Benedictine D.O.M.",
      description:
        "Prominently featured in a wide range of classic cocktails from the Vieux Carré to the Singapore Sling, Benedictine is steeped in history, having been first created over 500 years ago. A preeminent example of the herbal liqueur category, its recipe remains a closely guarded secret, but our tasting panel agrees that this standout bottling tastes as good served neat or on the rocks as it does in mixed drinks. ",
      image: "https://www.liquor.com/thmb/ZhfSJeILlkLNlZRNP1EZQn1ERA8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bottle-review_benedictine_1500x1500-84f7d11c0887490881f724015c11be85.jpg",
      category: categories[0]._id,
      price: 38,
      quantity: 15,
    },
    // Equipment data goes here //
    {
      name: "Cocktail Kingdom Essential Cocktail Set",
      description:"This kit is a great jumping-off point for setting up a bar. Start with these tools, and build on your arsenal as you continue to grow your business.",
      image: "https://www.liquor.com/thmb/pgcydbFwN67X3197i6-xzm6-0A8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/LIQUORS-10-best-bar-tools-5088952-recirc-4f4f985587f44b539915eb1df5da3f75.jpg",
      category: categories[1]._id,
      price: 130,
      quantity: 10,
    },
    {
      name: "Zulay Professional Heavy Duty Citrus Juicer",
      description:"This manual citrus squeezer uses leverage to squeeze citrus with ease. Pull down the handle (outfitted with an ergonomic grip), and the device powerfully crushes through fruits and vegetables—think lemons of all types, along with apples, pineapple, and limes. This option is great to keep on a counter or bar top and quickly juice citrus to order. It wipes clean easily, and the juicing component pops out for easy rinsing.",
      image: "https://www.liquor.com/thmb/mTlxpyQJ9fgh9vn_gUe-EJF23bY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/LIQUORS-8-best-citrus-juicers-5079106-recirc-33c8634cbe094b5da12a0abaaa4b3a66.jpg",
      category: categories[1]._id,
      price: 100,
      quantity: 10,
    },
    {
      name: "Barillio Big-Shot Hard Maple Muddler Mallet and Lewis Ice Bag Kit",
      description:"At a whopping 13.75 inches long, this muddler doubles as a mallet for crushing up ice cubes for the perfect Mojito or Julep. The 100% cotton bag is triple-stitched and designed to absorb extra liquids, ensuring your countertop won’t flood when crushing ice. Simply add up to 14-ounces of ice, swing the muddler, and add the ice to your favorite drink. The muddler is made with durable, high-density Canadian maple. A mineral oil finish showcases the handsome grain and protects the muddler from flaking. ",
      image: "https://www.liquor.com/thmb/jTTRZ35g4UQRmIxZ_RM5QRLxI0I=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BarillioBig-ShotHardMapleMuddletMalletandLewisIceBagKit-86f19406a55d4851bc7919ca67f2512b.jpg",
      category: categories[1]._id,
      price: 20,
      quantity: 20,
    },
    {
      name: "GE Profile Opal 2.0 Countertop Nugget Ice Maker with Side Tank",
      description:"Measuring 17.5 x 13.43 x 16.5 inches, this update of the GE Opal Countertop has Wi-Fi functionality and is designed to easily, quickly, and quietly meet your immediate nugget ice needs. Churning out a pound of crunchy ice for your tiki and tropical cocktails or blended drinks per hour, its storage bin can also store up to 3 pounds of ice.",
      image: "https://www.liquor.com/thmb/l9-ljNVQQDm1OCVJaD3TXb9MlrI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GE_Opal_Nugget_Ice_Maker_Hero5x4-3f9788b469b84a969aecb3b68dd7fe0e.jpg",
      category: categories[1]._id,
      price: 600,
      quantity: 5,
    },
    {
      name: "Cocktail Kingdom Leopold Jigger",
      description:"Cocktail Kingdom offers their signature Leopold jiggers in two sizes and a number of different finishes. A 1-ounce/2-ounce jigger is the go-to for many bartenders, so we’d recommend opting for the 30-milliliter/60-milliliter size. The stainless steel is classic, but if you opt for another finish, such as the copper-plated option, just know it's not dishwasher safe.",
      image: "https://www.liquor.com/thmb/eseXhB8g8r89jmNXwgHttWpEpV8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/LIQUORS-9-best-jiggers-5096043-primary-5c406e4019894934a84315dc36074ac4.jpg",
      category: categories[1]._id,
      price: 35,
      quantity: 50,
    },
    {
      name: "The Durand Corkscrew",
      description:"While pros love it, it does require a bit of a learning curve. Consider testing out a Durand with low-stakes bottles to get the hang of it (and read the instructions carefully, too). Wine collectors with high-end cellars swear by this corkscrew. The compact cork (cute!) carrying case helps protect the legs from bending or snapping. It's definitely not the least expensive option among this selection, but if you have an extensive wine cellar and don't ever want to gamble on breaking a cork, this is the go-to special tool.",
      image: "https://www.liquor.com/thmb/LENagZnsKweaZmH9lPyEM_tg6JA=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/the-durand-two-part-device-to-successfully-remove-older-and-fragile-wine-corks-whole-and-intact-da7860d673e248cdb489b70978f20310.jpg",
      category: categories[1]._id,
      price: 145,
      quantity: 15,
    },
    {
      name: "W&P Peak Silicone Everyday Ice Tray With Protective Lid",
      description:" Each cube is easily removed from the silicone mold; however, sometimes cubes stick to the bottom of the mold, producing less-than-perfect ice. We found that all these trays could be stacked nicely in the freezer and are dishwasher-safe. Plus, they come in neutral and fun ",
      image: "https://www.liquor.com/thmb/VJL6Q0TDj-BXv9mhXPVxzX2RCko=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wp-peak-silicone-everyday-ice-tray-with-protective-lid-adcb1a06a6944c63812c078f7ca2eeca.jpg",
      category: categories[1]._id,
      price: 20,
      quantity: 100,
    },
    {
      name: "Breville Smoking Gun Food Smoker",
      description:"If you’re looking for a versatile smoker, this smoking gun from Breville is the best overall option. At around $100, it’s not the cheapest, but it makes up for it with its reliability and efficiency.",
      image: "https://www.liquor.com/thmb/pjN_gqGYkN8mOTNMUI_VcmpgMYY=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/breville-smoking-gun-food-smoker-3668293a2b69422ebe36a9677666c437.jpg",
      category: categories[1]._id,
      price: 100,
      quantity: 5,
    },
    {
      name: "Hiware Bar Spoon Set of 3",
      description:"Can’t decide between European, American, or Japanese-style bar spoons? This set includes one of all of the above. All three bar spoons are made of premium-grade 18/10 stainless steel, making them durable, rust-proof, and easy to clean at the end of the night. The bar spoons come at 12-, 12-, and 11-inches long, ideal for working in a mixing glass, a shaker, or directly in the cocktail glass. The brand recommends picking your bar spoon from this set for the type of glass you’re using or the type of cocktail you’re building. Outside of cocktails, these extra-long spoons also double as excellent stirrers for larger coffees or cold brews. All the bar spoons are dishwasher safe, making it easy to clean up after a few rounds. ",
      image: "https://www.liquor.com/thmb/vdeQ8Nbrdp_FZMDgSxF61jclZ70=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ScreenShot2021-08-19at1.23.20PM-9ba33ff325d542a29ccf853d04230f1f.jpg://www.liquor.com/thmb/pjN_gqGYkN8mOTNMUI_VcmpgMYY=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/breville-smoking-gun-food-smoker-3668293a2b69422ebe36a9677666c437.jpg",
      category: categories[1]._id,
      price: 100,
      quantity: 5,
    },
    // Mixers data goes here //
    {
      name: "McClure's Bloody Mary Mixer",
      description:"McClure’s is known for making some tasty pickles, so this Bloody Mary mix incorporates some of those briny, salty flavors. McClure’s uses the pickle brine from its other products in the mix, along with dill, garlic, and black pepper for seasoning. There are two versions available, mild and spicy, and each delivers exactly what you are looking for in this classic drink at different levels on the spice spectrum.",
      image: "https://www.liquor.com/thmb/FE0AmoIvsMS-cbgMO6b45QyxMe8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/LIQUORS-10-best-bloody-mary-mixes-5111895-451960ef12ea405d8aafebdf6982deb5.jpg",
      category: categories[2]._id,
      price: 13,
      quantity: 100,
    },
    {
      name: "Q Mixers Ginger Beer",
      description:"Q’s lime-forward take on ginger beer brings out the citrus flavors in a Moscow Mule. Instead of using high-fructose corn syrup or sugar, it's made with a bit of organic agave for a refreshing taste. The addition of chili peppers and a boost of carbonation also helps give this cocktail component a little extra something.",
      image: "https://www.liquor.com/thmb/VAF_z6IyRyXViXuWIiGIkj-l59U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/LIQUORS-10-best-ginger-beers-5079796-5bc9f42250e5496584f0dc844864a65f.jpg",
      category: categories[2]._id,
      price: 22,
      quantity: 150,
    },
    {
      name: "Agalima Margarita Mix",
      description:"Agalima Margarita Mix is proof that simplicity is best, and this brand keeps things fresh and uncomplicated. Organic1 lime juice and blue agave syrup are the base of this mixer, which is bright, slightly sweet, and just acidic enough to work with any tequila. Try this mixer and see if you can tell the difference between the resulting margarita and one that's built from scratch. (Pro tip: you can play around with this mixer to try making other lime-heavy drinks as well, like a Gimlet or a Daiquiri.)",
      image: "https://www.liquor.com/thmb/-zGho6T07Ph6Q7sFkZuj-Wsd-Jk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/LIQUORS-8-best-margarita-mixes-5071955-5463e7c3c99f4ff48b01298763be9874.jpg",
      category: categories[2]._id,
      price: 18,
      quantity: 75,
    },
    {
      name: "Master of Mixes Daiquiri Mixer",
      description:"Master of Mixes is the number one purchased brand of cocktail mix flavors in the U.S. The brand’s mission is to help consumers master their cocktail adventures through premium one-step mixers and inspiration, ingredients and tricks to take at-home cocktails to the next level. For more than 40 years, Master of Mixes has hand-crafted authentic cocktails with more than 40 flavors that can be found at retailers and grocery stores nationwide and in more than 33 countries.",
      image: "https://www.liquor.com/thmb/UfiYwqEEk0OBWsUioV9_sWwb6OA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__06__23085840__MasterofMixes_720-813c4649e4ae4f3a91182c5928bdfbef.jpg",
      category: categories[2]._id,
      price: 25,
      quantity: 175,
    },
    {
      name: "The Pathfinder Hemp & Root",
      description:"A standout among the zero-proof field, this amaro-like beverage also works well with ginger ale and in cocktails that would benefit from bittersweet notes.",
      image: "https://www.liquor.com/thmb/M573IiW9WAKZ69n58qIXvQC8GIo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/na-with-soda_rev_1500x1500-4ceeb56e80b24df68e3863ed461700b9.jpg",
      category: categories[2]._id,
      price: 40,
      quantity: 25,
    },
    {
      name: "For Bitter For Worse Smoky No. 56",
      description:"The sweet-smoky profile makes a surprising match for tropical cocktails, and also works well in an Old Fashioned.",
      image: "https://www.liquor.com/thmb/h1D2x-T_fRIQ7kJ2WcdPPxM0yB4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/non-alcoholic-spirits-complex_1500x1500-2dc886c0133742dfa582aa5600ac58f0.jpg",
      category: categories[2]._id,
      price: 28,
      quantity: 25,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
