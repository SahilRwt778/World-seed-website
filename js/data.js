 const data = [
    {
        Name: 'Long-Grain Rice',
        img:"images/long-grain-basmati-rice.png",
        example: 'Basmati, Jasmine, Carolina',
        characteristics: 'long slender grain typically 4-5 time longer than they are wide',
        para: 'When cooked, they remain separate and fluffy due to lower amylopectin content. Culinary Uses Ideal for pilafs, salads, and dishes requiring non- sticky rice. Used in suisines like Indian(Basmati for biryanis) and Thai(Jasmine for curries). Nutritional Aspect: Lower in starch, making it easier to digest for some people.Basmati and Jasmine varieties are aromatic, enhancing the dining experience.',
        harvesting:' October to November',
        price:'₹102 to 125₹ per kg',
        soil:'Rice is a resilient plant and can grow in almost all types of soil. As long as it is irrigated sufficiently (either by irrigation or by rainfall), it can grow in both wet or dry fields. However, since we expect a good yield from our field, we have to prepare the soil, so that it can welcome either the young rice plants (transplant method) or the pre-germinated and incubated seeds (direct seeding method).'
    },
    {
        Name:'Medium Grain Rice',
        example:'Arborio, Calrose',
        characteristics:'Shorter and wider than long-grain, with a length 2-3 times its width. Tends to be moist and slightly sticky when cooked, but not as much as short-grain rice.',
        para:"Culinary Uses: Used in risottos (Arborio), sushi, and other dishes where a creamy or slightly sticky texture is preferred. Calrose is common in California cuisine and sushi. Nutritional Aspects: Higher amylopectin content makes it creamier. Arborio's high starch content is perfect for absorbing flavors in risottos. "
    },
    {
        Name:'Short-Grain Rice',
        example:"Sushi rice, Arborio (when categorized as short-grain)",
        characteristics:" Almost round grains that are very sticky when cooked due to high amylopectin content.",
        para:"Culinary Uses: Ideal for sushi, paella, and rice puddings. Sushi rice is seasoned with rice vinegar, sugar, and salt for sushi preparation. Nutritional Aspects: Sticky texture helps it hold together, essential for dishes like sushi and onigiri."
    },
    {
        Name:"White Rice",
        example:"Long-grain, medium-grain, short-grain",
        characteristics:"Milled to remove the husk, bran, and germ, resulting in a polished, white kernel. This process reduces nutrients but increases shelf life.",
        para:"Culinary Uses: Versatile and widely used in global cuisines. Common in stir-fries, pilafs, and as a side dish. Nutritional Aspects: Lower in fiber and micronutrients compared to brown rice but often enriched with vitamins and minerals to compensate."
    },
    {
        Name:"Brown Rice",
        img:'',
        example:"Long-grain brown rice, short-grain brown rice",
        characteristics:"Only the husk is removed, retaining the bran and germ. This gives it a chewy texture and a nutty flavor.",
        para:"Culinary Uses: Used as a healthier alternative to white rice, suitable for a wide range of dishes including salads, pilafs, and as a side dish. Nutritional Aspects: Higher in fiber, vitamins (such as B vitamins), and minerals (like magnesium) than white rice, contributing to better digestive health and heart health.",
        harvesting:'Varies(Based on rice type)',
        price:'₹140 to 150₹ per kg '
    },
    {
        Name:"Parboiled Rice",
        img:'',
        example:"Converted rice",
        characteristics:"Partially boiled in the husk before milling, which causes some nutrients from the bran to be absorbed into the kernel, making it more nutritious than white rice.",
        para:"Culinary Uses: Less sticky than regular white rice, making it ideal for dishes where individual grains are preferred, such as pilafs and salads.Nutritional Aspects: Retains more nutrients than white rice due to the parboiling process. The grains remain separate, making it easier to reheat without losing texture.",
        harvesting:'May and October',
        price:'₹90 to 160₹ per kg '
    },
    {
        Name:"Instant Rice",
        example:"Quick-cooking rice",
        characteristics:"Fully cooked and then dehydrated. It rehydrates quickly with boiling water or microwaving, making it very convenient.",
        para:"Culinary Uses: Suitable for quick meals and recipes that require minimal cooking time. Common in camping and emergency food supplies. Nutritional Aspects: Similar to white or brown rice but can lose some nutrients during the processing. Often fortified to enhance nutritional value."
    },
    {
        Name:"Basmati Rice",
        img:"images/basmati.jpg",
        example:"",
        characteristics:"Long-grain, aromatic rice known for its distinct fragrance and flavor. It elongates rather than becomes sticky when cooked.",
        para:"Culinary Uses: Primarily used in Indian, Pakistani, and Middle Eastern cuisine, especially in biryanis, pilafs, and as a side for rich curries. Nutritional Aspects: Similar to other white rice but can be found in whole grain (brown) form as well. Contains a lower glycemic index compared to other white rices, making it a better option for managing blood sugar levels.",
        harvesting:' October to November',
        price:'₹102 to 125₹ per kg ',
        soil:'Rice is a resilient plant and can grow in almost all types of soil. As long as it is irrigated sufficiently (either by irrigation or by rainfall), it can grow in both wet or dry fields. However, since we expect a good yield from our field, we have to prepare the soil, so that it can welcome either the young rice plants (transplant method) or the pre-germinated and incubated seeds (direct seeding method).'

    },
    {
        Name:"Jasmine Rice",
        img:"images/jasmine.png",
        example:"",
        characteristics:"Long-grain, fragrant rice with a slightly sticky texture when cooked. It has a floral aroma and a soft, moist texture.",
        para:"Culinary Uses: Widely used in Thai and other Southeast Asian cuisines, often served with stir-fries, grilled meats, and curries. Nutritional Aspects: Comparable to other white rice but also available as brown Jasmine rice, which is more nutritious. Provides a fragrant, aromatic dining experience.",
        harvesting:'November(major), March(secondary)',
        price:'₹495 to 500₹ per kg ',
         soil:'Rice is a resilient plant and can grow in almost all types of soil. As long as it is irrigated sufficiently (either by irrigation or by rainfall), it can grow in both wet or dry fields. However, since we expect a good yield from our field, we have to prepare the soil, so that it can welcome either the young rice plants (transplant method) or the pre-germinated and incubated seeds (direct seeding method).'
    },
    {
        Name:"Arborio Rice",
        img:'',
        example:"",
        characteristics:"Short to medium-grain rice with a high starch content, giving it a creamy texture when cooked.",
        para:"Culinary Uses: Essential for making risotto, as its starchiness helps create the creamy consistency of the dish. Also used in rice puddings. Nutritional Aspects: Higher in carbohydrates and calories, providing a rich and creamy base for risotto dishes. Contains amylopectin, which gives risotto its characteristic texture.",
        harvesting:'August to September',
        price:'$1 to $2.50 per pound'

    },
    {
        Name:"Sushi Rice",
        example:"",
        characteristics:"Short-grain, very sticky when cooked. It is often seasoned with rice vinegar, sugar, and salt to enhance its flavor.",
        para:"Culinary Uses: Primarily used for making sushi and other Japanese dishes like onigiri. The sticky texture is essential for sushi rolls to hold their shape.Nutritional Aspects: Similar to other short-grain rice but with a sticky texture ideal for sushi. Contains essential minerals and provides a substantial energy source.",
        harvesting:'August to September',
        price:"$1.50 to $3 per pound"

    },
    {
        Name:"Black Rice",
        img:'',
        example:"Forbidden rice, black glutinous rice",
        characteristics:"Dark purple to black color, high in anthocyanins (antioxidants). It has a slightly sweet and nutty flavor.",
        para:"Culinary Uses: Used in both sweet and savory dishes, such as desserts, salads, and as a side dish. In Southeast Asia, black rice is used in various traditional desserts. Nutritional Aspects: Rich in fiber, antioxidants, and nutrients, making it a healthy choice. High in iron and vitamin E, contributing to its health benefits.",
        harvesting:' August to October',
        price:'$4 to $7 per pound'

    },
    {
        Name:"Red Rice",
        img:'',
        example:"Bhutanese red rice, Thai red cargo rice",
        characteristics:"Reddish bran layer, nutty flavor, and chewy texture.",
        para:"Culinary Uses: Common in traditional dishes from Bhutan and Thailand, often served with vegetables and meats. Adds color and texture to dishes. Nutritional Aspects: High in fiber, iron, and antioxidants due to the bran layer. The reddish pigment is due to anthocyanins, which have health-promoting properties.",
        harvesting:' September to November',
        price:'$2 to $6 per pound'

    },
    {
        Name:"Wild Rice",
        img:'',
        example:"",
        characteristics:"Not a true rice but a grain from aquatic grasses. Long, slender grains with a chewy texture and nutty flavor.",
        para:"Culinary Uses: Often mixed with other rice types in pilafs, salads, and soups for added texture and flavor. Popular in North American cuisine.Nutritional Aspects: High in protein, fiber, and minerals like magnesium and phosphorus. Offers a unique, nutty flavor and a chewy texture.",
        harvesting:'August to September',
        price:'$7 to $15 per pound'

    },
    {
        Name:"Sticky Rice (Glutinous Rice)",
        img:'',
        example:"Thai sticky rice, sweet rice",
        characteristics:" Very sticky when cooked, with opaque grains. It is often used in dishes that require the rice to hold together.",
        para:"Culinary Uses: Common in Southeast Asian desserts and savory dishes, such as mango sticky rice, dumplings, and Laos sticky rice. Nutritional Aspects: High in amylopectin, a type of starch that gives it its sticky texture. Contains less amylose, contributing to its stickiness."

    },
    {
        Name:"Wehani Rice",
        img:'',
        example:"",
        characteristics:" Heirloom variety of red rice with a nutty, earthy flavor and a chewy texture. It retains a reddish-brown color when cooked.",
        para:"Culinary Uses: Adds a robust flavor to salads, pilafs, and side dishes. Used for its unique taste and texture. Nutritional Aspects: Rich in fiber, antioxidants, and complex carbohydrates. Offers a nutritional profile similar to other whole grains.",
        harvesting:'Late summer to early autumn',
        price:'$3 to $5 per pound'

    },
    {
        Name:"Bomba Rice",
        img:'',
        example:"",
        characteristics:"Short-grain rice used in Spanish paella. It absorbs flavors well without becoming mushy, maintaining its firmness.",
        para:"Culinary Uses: Essential for making authentic Spanish paella and other Mediterranean rice dishes. Known for its ability to absorb liquids and flavors while maintaining structure. Nutritional Aspects: Provides a good balance of carbohydrates and nutrients, ideal for absorbing the rich flavors of paella.",
        harvesting:'Late summer to early autumn',
        price:'$5 to $8 per pound'

    },
    {
        Name:"Brown Rice",
        img:'',
        example:"",
        characteristics:"Whole grain with the bran and germ intact, giving it a tan color. It has a chewy texture and a nutty flavor.",
        para:"Culinary Uses: Versatile in a variety of dishes, from salads and pilafs to stir-fries and soups. Takes longer to cook than white rice. Nutritional Aspects: Higher in fiber, vitamins (such as B vitamins), and minerals (like magnesium) compared to white rice. Supports digestive health and provides sustained energy."

    },
    {
        Name:"White Rice",
        img:'',
        example:"",
        characteristics:"Milled to remove the bran and germ, resulting in a polished, white kernel. It has a longer shelf life and cooks quickly.",
        para:"Culinary Uses: Widely used in global cuisines as a base for numerous dishes, including stir-fries, curries, and sushi. Common in households worldwide. Nutritional Aspects: Lower in fiber and micronutrients compared to brown rice, but often enriched with vitamins and minerals. Provides a quick source of energy."

    },
    {
        Name:"Purple Rice",
        img:'',
        example:"Purple Rice",
        characteristics:"Dark purple color when cooked, high in anthocyanins and antioxidants.",
        para:"Culinary Uses: Used in both sweet and savory dishes, including desserts, salads, and as a side dish. Popular in Korean cuisine as a mixed rice (Japgokbap). Nutritional Aspects: Rich in fiber, antioxidants, and nutrients, making it a healthy choice. Offers additional health benefits due to its high antioxidant content."

    },
    {
        Name:"Carolina Rice",
        img:"images/caolina.jpg",
        example:"",
        characteristics:"Short to medium-grain rice with a high starch content, giving it a creamy texture when cooked.",
        para:"Culinary Uses: Essential for making risotto, as its starchiness helps create the creamy consistency of the dish. Also used in rice puddings. Nutritional Aspects: Higher in carbohydrates and calories, providing a rich and creamy base for risotto dishes. Contains amylopectin, which gives risotto its characteristic texture.",
        harvesting:'Late summer to early autumn',
        price:'$5 to $10 per pound',
         soil:'Rice is a resilient plant and can grow in almost all types of soil. As long as it is irrigated sufficiently (either by irrigation or by rainfall), it can grow in both wet or dry fields. However, since we expect a good yield from our field, we have to prepare the soil, so that it can welcome either the young rice plants (transplant method) or the pre-germinated and incubated seeds (direct seeding method).'
    },
    {
        Name:"Common Wheat",
        img:'images/common-wheat.jpg',
        example:"Typically sown in late October to November.",
        characteristics:"The grains are medium to large in size, usually light brown or amber in color. The texture can be soft or hard, depending on the specific variety of common wheat.",
        para:"Culinary Uses: Common wheat is the most widely grown variety and is primarily used for making bread, pastries, noodles, pasta, and various baked goods. It is also utilized in brewing and as animal feed. Nutritional Benefits: It is rich in carbohydrates, providing energy, and has a moderate protein content. Common wheat is also a good source of dietary fiber, which aids in digestion, and contains essential B vitamins (such as B1, B2, B3, and B9) that help in energy metabolism. It also provides important minerals like iron and magnesium.",
        harvesting:'Harvested from late April to June.',
        price:'Generally priced between ₹20-25 per kg',
        soil:'Grows best in well-drained loamy or clay-loam soil with a pH of 6-7. Fertile soil with good organic matter content is preferred for optimal growth. emperature Required: The optimal temperature range for growth is 21-24°C. Irrigation: Requires 4-6 irrigations throughout the growing season. Key stages for irrigation include tillering, jointing, heading, and grain filling to ensure proper moisture levels for growth.'
    },
    {
        Name:"Durum Wheat (Triticum durum)",
        img:'images/durum-wheat.jpg',
        example:"",
        characteristics:" Durum wheat grains are hard and translucent, usually amber-colored. The high gluten content gives pasta made from durum wheat its firm texture and elasticity. Sowing Period: Typically sown from November to December.",
        para:"Culinary Uses: Durum wheat is valued for its high protein and gluten content, making it ideal for producing semolina, which is used to make pasta, couscous, and some types of bread. It is highly prized in the culinary world for its ability to produce firm-textured pasta. Nutritional Benefits: This type of wheat has a higher protein content compared to common wheat. It is rich in carotenoids, which are antioxidants that give the wheat its characteristic amber color and provide health benefits. It also contains essential amino acids necessary for human health",
        harvesting:'Harvesting usually takes place from May to June.',
        price:'Durum wheat is generally priced between ₹25-30 per kg.',
        soil:'Soil Required: Prefers well-drained sandy loam soil with a pH of 6-7. It is well-adapted to semi-arid conditions. Temperature Required: The optimal temperature range for growth is 20-25°C. Irrigation: Requires 3-5 irrigations during the growing season. Critical irrigation stages include crown root initiation, tillering, booting, and milking to ensure adequate moisture and optimal yield.'

    },
    {
        Name:"Emmer Wheat (Triticum dicoccum)",
        img:'images/emmer-wheat.jpg',
        example:"Typically sown from November to December.",
        characteristics:" Emmer wheat is a hulled wheat variety, meaning the grains are encased in a tough outer husk that must be removed before consumption. The grains are smaller and harder than those of modern wheat varieties, providing better protection against pests and diseases.",
        para:"Culinary Uses: Emmer wheat, also known as farro, is used in traditional bread, porridges, and some specialty health foods. It can also be utilized to make beer and other fermented beverages. In various cultures, it is cherished for its rich, nutty flavor and chewy texture. Nutritional Benefits: Emmer wheat is rich in dietary fiber, which promotes digestive health. It has a moderate protein content and provides essential minerals such as magnesium, zinc, and iron. Emmer wheat is also known for its high antioxidant content and low glycemic index, making it a healthy choice for maintaining stable blood sugar levels.",

        harvesting:'Harvesting usually takes place from May to June.',
        price:'Emmer wheat is generally priced between ₹30-35 per kg.',
        soil:'Thrives in well-drained loamy soil with a pH of 6-7.5. It is well-suited for organic farming due to its hardiness and resistance to adverse conditions. Temperature Required: The optimal temperature range for growth is 20-22°C. Irrigation: Requires 3-4 irrigations during the growing season. Important stages for irrigation include CRI (Crown Root Initiation), jointing, and dough stage to ensure adequate moisture and optimal grain development.'

    },
    {
        Name:"Spelt Wheat (Triticum spelta)",
        img:'images/spelt-wheat.jpg',
        example:"Typically sown in late October to November.",
        characteristics:"Spelt is a hulled wheat variety with larger grains compared to other wheat types. The grains are encased in a tough outer husk that must be removed before processing. This husk helps protect the grain from pests and environmental damage.",
        para:"Culinary Uses: Spelt wheat is used in baking, particularly in bread and other specialty baked goods. It has gained popularity in health food markets due to its unique flavor and nutritional profile. Spelt can also be used to make pasta and other grain-based dishes. Nutritional Benefits: Spelt is high in protein, fiber, and essential nutrients. It contains a broader spectrum of nutrients compared to modern wheat varieties, including higher levels of vitamins and minerals. Spelt is known for its high digestibility and rich, nutty flavor, making it a preferred choice for health-conscious consumers.",
        harvesting:'Harvesting usually takes place from late April to June.',

        price:'Spelt wheat is generally priced between ₹40-45 per kg.',
        soil:'Prefers well-drained, fertile loamy soil with a pH of 6-7. Spelt is known for its ability to grow in poorer soils compared to other wheat varieties, making it a resilient crop. Temperature Required: The optimal temperature range for growth is 15-20°C. Irrigation: Requires 3-5 irrigations during the growing season. Key stages for irrigation include tillering, jointing, booting, and grain filling to ensure adequate moisture levels for growth and yield.'


    },
    {
        Name:"Khorasan Wheat (Triticum turgidum ssp. turanicum)",
        img:'images/khorasan-whea.jpg',
        example:"Typically sown from November to December.",
        characteristics:"The grains are larger than those of other wheat types, typically golden-colored, and known for their nutty flavor and chewy texture. Khorasan wheat has a higher protein content and gluten strength, making it suitable for baking and pasta production.",
        para:"Culinary Uses: Khorasan wheat, also known by the brand name Kamut, is used to make bread, pasta, and cereals. Its large grains and rich, nutty flavor make it popular in gourmet and health food markets. It is also used in making whole grain salads and pilafs. Nutritional Benefits: Khorasan wheat is rich in protein, fiber, and essential fatty acids. It contains higher levels of selenium, zinc, and magnesium compared to modern wheat varieties. The grain's high antioxidant content contributes to its health benefits, including anti-inflammatory properties.",

        harvesting:'Harvesting usually takes place from May to June.',
        price:'Khorasan wheat is generally priced between ₹50-55 per kg.',
        soil:'Prefers well-drained sandy loam soil with a pH of 6-7. It is well-suited for organic farming due to its natural resistance to pests and diseases. Temperature Required: The optimal temperature range for growth is 20-25°C. Irrigation: Requires 4-5 irrigations during the growing season. Critical stages for irrigation include tillering, jointing, booting, and grain filling to ensure proper moisture levels and optimal yield.'


    },
    {
        Name:"White Ragi (Eleusine coracana)",
        img:'images/white-ragi.jpg',
        example:"Typically sown from June to July for the kharif season.",
        characteristics:"This type of ragi has a pale, white to off-white color. The grains are small, round, and hard, and they can be ground into a fine flour. White ragi has a mild flavor compared to other varieties.",
        para:"Culinary Uses: White ragi is primarily used in making traditional South Indian dishes like ragi mudde (finger millet balls), ragi roti, and porridge. It is also used in baking, making ragi flour for bread, cookies, and other baked goods. Additionally, it is utilized in making malted beverages and infant foods. Nutritional Benefits: White ragi is an excellent source of calcium, making it ideal for bone health. It is rich in dietary fiber, which aids in digestion and helps manage blood sugar levels. White ragi is also packed with essential amino acids, iron, and antioxidants, contributing to overall health and wellness.",
        harvesting:'Harvesting occurs from October to November.',
        price:'Generally priced between ₹40-50 per kg.',
        soil:'Soil Required: Thrives in well-drained red, sandy loam soils with a pH of 5-7.5. It is drought-tolerant and can grow in poor soil conditions. Temperature Required: Optimal growth occurs at 25-30°C. Irrigation: Requires minimal irrigation; rain-fed conditions are sufficient. Supplemental irrigation is needed only during prolonged dry spells, especially during critical stages like flowering and grain filling.'
        

    },
    {
        Name:"Brown Ragi (Eleusine coracana)",
        img:'images/ragi.jpg',
        example:"Typically sown from June to July for the kharif season.",
        characteristics:"The grains are small, round, and hard with a brown color. Brown ragi has a slightly nutty flavor. It is more commonly available and widely cultivated compared to white ragi.",
        para:"Culinary Uses: Brown ragi is widely used in making ragi malt, a popular health drink. It is also used in making porridges, flatbreads, dosa, and idli. The flour is used in baking cookies, cakes, and other baked products. Brown ragi is often included in weaning foods for infants due to its high nutritional content.Nutritional Benefits: Brown ragi is rich in calcium, iron, and dietary fiber. It helps in maintaining healthy bones and teeth, aids in digestion, and helps control blood sugar levels. The high fiber content helps in weight management by providing a feeling of fullness. It also contains antioxidants that help in reducing oxidative stress.",

        harvesting:' Harvesting occurs from October to November. Harvesting occurs from October to November.',
        price:' Generally priced between ₹35-45 per kg.',
        soil:'Soil Required: Grows well in well-drained loamy to sandy loam soils with a pH of 5-7.5. It is tolerant of drought and can be cultivated in poor soil conditions. Temperature Required: Optimal growth occurs at 25-30°C. Irrigation: Minimal irrigation required; it is mostly grown under rain-fed conditions. Supplemental irrigation may be needed during prolonged dry periods, especially during flowering and grain filling stages.'


    },
    {
        Name:"Dent Corn (Zea mays indentata)",
        img:'images/dent-corn.jpg',
        example:"Typically sown in spring, from late April to early June.",
        characteristics:" Named for the distinctive dent on the top of each kernel, dent corn has a starchy texture. The kernels are usually yellow or white and can be harvested when mature for dry processing.",
        para:"Culinary Uses: Dent corn, also known as field corn, is primarily used in livestock feed, industrial products, and processed foods. It is ground into cornmeal for products like tortillas and cornbread. It’s also used in making corn syrup, starch, and ethanol. Nutritional Benefits: Dent corn is high in carbohydrates, providing a substantial source of energy. It also contains protein, fiber, and essential vitamins such as vitamin B3 (niacin), which supports metabolic functions, and minerals like magnesium and phosphorus.",

        harvesting:'Harvesting takes place from late September to November.',
        price:'Generally priced between ₹15-20 per kg.',
        soil:'Prefers well-drained, fertile loam soils with a pH between 5.8 and 7.0. Temperature Required: Optimal growing temperature ranges from 18°C to 24°C.Irrigation: Requires moderate irrigation. Essential during critical growth stages such as germination and flowering. Generally, needs about 500-800 mm of water during the growing season.'


    },
    {
        Name:"Flint Corn (Zea mays indurata)",
        img:'images/flint-corn.webp',
        example:"Sown in spring, typically from late April to early June.",
        characteristics:"Flint corn has hard, glossy kernels that come in a variety of colors, including red, blue, white, and yellow. The kernels have a tough outer layer, making them less susceptible to spoilage.",
        para:"Culinary Uses: Flint corn, also known as Indian corn, is used in making polenta, hominy, and masa for tortillas. It is also popular for decorative purposes due to its colorful kernels. Nutritional Benefits: Flint corn is rich in carbohydrates and provides a good source of fiber, which aids digestion. It contains essential vitamins such as B-complex vitamins and minerals like iron and zinc.",

        harvesting:'Harvesting occurs from late September to November.',
        price:'Generally priced between ₹20-25 per kg.',
        soil:'Soil Required: Grows well in well-drained loam soils with a pH between 5.8 and 7.0. Temperature Required: Optimal growth temperature ranges from 18°C to 24°C. Irrigation: Requires moderate irrigation, especially during critical growth stages like germination and flowering. Approximately 500-800 mm of water is needed throughout the growing season.'


    },
    {
        Name:"Sweet Corn (Zea mays saccharata)",
        img:'images/sweet-corn.jpg',
        example:"Typically sown from late spring to early summer, around April to June.",
        characteristics:"Known for its sweet taste due to a high sugar content, sweet corn has tender, juicy kernels that are usually yellow or bi-colored (yellow and white). The kernels are harvested when they are immature, at the milk stage.",
        para:"Culinary Uses: Sweet corn is widely consumed as a vegetable. It can be eaten raw, boiled, grilled, or used in soups, salads, and casseroles. Sweet corn is also used in making corn syrup and canned corn products. Nutritional Benefits: Sweet corn is high in carbohydrates, particularly sugars, making it a quick energy source. It also provides dietary fiber, vitamins A, B, and C, and essential minerals like magnesium and potassium.",

        harvesting:'Harvested from July to September, depending on the planting time.',
        price:'Generally priced between ₹30-40 per kg.',
        soil:'Prefers well-drained, fertile loam soils with a pH of 6.0 to 6.8. Temperature Required: Optimal growing temperature is 18°C to 24°C. Irrigation: Requires regular irrigation to maintain soil moisture, especially during the critical stages of tasseling, silking, and kernel development. About 500-600 mm of water is needed throughout the growing season.'

    },
    {
        Name:"Chickpeas (Cicer arietinum)",
        img:'images/chickpeas.jpg',
        example:"Typically sown in late autumn (October-November) in regions with a temperate climate.",
        characteristics:"Chickpeas are round, beige-colored legumes with a firm texture and nutty flavor. There are two main types: Desi, which has small, darker seeds with a rough coat, and Kabuli, which has larger, lighter-colored seeds with a smooth coat.",
        para:"Culinary Uses: Chickpeas, also known as garbanzo beans, are used in a variety of dishes including hummus, falafel, soups, stews, salads, and curries. Roasted chickpeas are a popular snack, and chickpea flour (besan) is used in baking and making dishes like socca and pakoras. Nutritional Benefits: Chickpeas are rich in protein, making them a valuable source of plant-based protein. They are also high in dietary fiber, which supports digestive health and helps regulate blood sugar levels. Chickpeas contain essential vitamins and minerals such as folate, iron, phosphorus, and magnesium.",
        harvesting:'Harvesting occurs in early spring (February-March) when the pods turn yellow-brown and the seeds are hard.',
        price:'The market price of chickpeas in India generally ranges between ₹70-100 per kg, depending on the variety and market conditions.',
        soil:'Chickpeas thrive in well-drained, loamy soils with a pH range of 6 to 7.5. They prefer soil with good organic matter content. Temperature Required: Optimal growing temperatures range from 15°C to 30°C. Chickpeas are sensitive to frost and excessive heat. Irrigation: Chickpe as require minimal irrigation. They are typically grown in rain-fed conditions, but supplementary irrigation may be necessary in case of prolonged dry periods, especially during the flowering and pod-filling stages.'

    },
    {
        Name:"Lentils (Lens culinaris)",
        img:'images/Lentils (Lens culinaris).jpg',
        example:"Lentils are typically sown in late autumn (November-December) in regions with cool growing seasons.",
        characteristics:"Lentils are small, lens-shaped legumes that come in various colors, including green, brown, red, and black. Each variety has a slightly different flavor and texture, with green and brown lentils holding their shape well when cooked, while red and yellow lentils tend to break down and become creamy.",
        para:"Culinary Uses: Lentils are a staple in many diets around the world, especially in South Asia, the Mediterranean, and the Middle East. They are commonly used in soups, stews, and salads. Lentils are also a key ingredient in Indian dal, a spiced lentil soup. They can be cooked with rice to make dishes like khichdi or used as a filling in vegetarian patties and lentil loaves. Nutritional Benefits: Lentils are an excellent source of plant-based protein and are high in dietary fiber, which aids in digestion and helps maintain stable blood sugar levels. They provide essential nutrients such as folate, iron, phosphorus, potassium, and magnesium. Lentils are also low in fat and calories, making them a heart-healthy food choice.",
        harvesting:'Harvesting occurs in late spring to early summer (May-June) when the plants turn yellow and the seeds have hardened.',
        price:'The market price of lentils in India generally ranges between ₹50-80 per kg, varying with the type and market demand.',
        soil:'Soil Required: Lentils grow best in well-drained, fertile loamy soils with a pH of 6 to 7. They prefer soil with moderate organic content and good aeration. Temperature Required: Optimal growing temperatures range from 18°C to 28°C. Lentils are tolerant of cool weather but can be affected by excessive heat and frost.Irrigation: Lentils require moderate irrigation, especially during critical growth stages such as flowering and pod filling. The total water requirement is around 350-500 mm, with well-timed irrigation improving yield and quality.'
    },
    {
        Name:"Black Gram (Vigna mungo)",
        img:'images/Black Gram (Vigna mungo).jpg',
        example:"Black gram is typically sown in the summer (June-July) or during the Rabi season (October-November).",
        characteristics:" Black gram has small, black seeds with a creamy white interior. It has a rich, earthy flavor and a soft texture when cooked. The plant is a short-duration crop with a bushy growth habit.",
        para:"Culinary Uses: Black gram, known as urad dal in India, is widely used in Indian cuisine. It is essential for making idli and dosa batter, traditional South Indian breakfast items. Black gram is also used in preparing dals, curries, and papads (crispy wafers). The whole beans can be sprouted and added to salads or stir-fried for a nutritious dish. Nutritional Benefits: Black gram is rich in protein and dietary fiber, supporting muscle development and digestive health. It is an excellent source of iron, potassium, magnesium, and folate, essential for maintaining cardiovascular health and reducing fatigue. The high content of antioxidants in black gram helps in reducing inflammation and boosting immunity.",
        harvesting:'Harvesting occurs in late summer (September-October) or in early spring (March-April) when the pods turn black and the seeds are fully mature.',
        price:' The market price of black gram in India generally ranges between ₹70-90 per kg, influenced by supply and demand.',
        soil:'Soil Required: Black gram prefers loamy or clay loam soils with good drainage and a pH of 6 to 7. It thrives in soils with adequate organic matter and good moisture retention. Temperature Required: Optimal growing temperatures range from 25°C to 35°C. Black gram is heat-tolerant but sensitive to excessive moisture and waterlogging.Irrigation: Black gram requires moderate irrigation, especially during flowering and pod development stages. The total water requirement is about 400-500 mm, with an emphasis on avoiding water stress during critical growth periods.'
    },
    {
        Name:"Green Gram (Vigna radiata)",
        img:'images/Green Gram (Vigna radiata).jpg',
        example:"Green gram is typically sown in the summer (June-July) or during the Rabi season (October-November).",
        characteristics:"Green gram has small, green seeds with a slightly sweet flavor. The seeds can be consumed whole, split, or sprouted. The plant is short and bushy, with a fast growth cycle.",
        para:"Culinary Uses: Green gram, commonly known as mung beans, is used in various culinary applications. It is popular in Indian cuisine for making dals, curries, and khichdi (a mixture of rice and lentils). Mung beans can be sprouted and added to salads or stir-fried dishes. They are also used in desserts such as moong dal halwa and as a filling in sweet and savory pastries. Nutritional Benefits: Green gram is a nutrient-dense legume, high in protein and dietary fiber. It contains essential vitamins and minerals such as vitamin A, vitamin C, vitamin K, iron, potassium, magnesium, and folate. They are also low in calories and fat, making them beneficial for weight management.",
        harvesting:'Harvesting occurs in late summer (September-October) or in early spring (March-April) when the pods are fully mature and dry.',
        price:'The market price of green gram in India generally ranges between ₹70-90 per kg, depending on the quality and market conditions.',
        soil:' Green gram thrives in well-drained, sandy loam to loamy soils with a pH of 6 to 7. It prefers soils with good fertility and organic content. Green gram is tolerant to high temperatures but sensitive to frost.Irrigation: Green gram requires moderate irrigation, especially during flowering and pod development stages. The total water requirement is about 400-500 mm, with proper water management crucial to avoid water stress during critical growth periods.'
    },
    {
        Name:"Pigeon Pea (Cajanus cajan)",
        img:'images/Pigeon Pea (Cajanus cajan).webp',
        example:"Pigeon peas are typically sown in the monsoon season (June-July) in tropical and subtropical regions.",
        characteristics:"Pigeon pea plants are perennial shrubs with deep taproots, making them drought-resistant. The seeds are small and oval-shaped, with colors ranging from cream to red. They have a mild, nutty flavor and a firm texture.",
        para:"Culinary Uses: Pigeon pea, also known as red gram or tur dal, is widely used in Indian and African cuisines. It is a key ingredient in dal, sambar, and other lentil-based dishes. Pigeon peas are also used in soups, stews, and as a side dish. The fresh green seeds can be used in salads or cooked as a vegetable. Nutritional Benefits: Pigeon pea is a rich source of protein, making it an essential food for vegetarians and vegans. It provides dietary fiber, which aids in digestion and helps control blood sugar levels. Pigeon peas are also high in essential nutrients such as iron, potassium, magnesium, and B vitamins, supporting overall health and well-being.",
        harvesting:' Harvesting occurs in late winter to early spring (January-March) when the pods are mature and dry.',
        price:' The market price of pigeon pea in India generally ranges between ₹60-90 per kg, influenced by seasonal availability and demand.',
        soil:'Soil Required: Pigeon peas thrive in well-drained, sandy loam to clay loam soils with a pH of 5.5 to 7.5. They can tolerate poor soil conditions but perform best in fertile soils with good organic content. Temperature Required: Optimal growing temperatures range from 20°C to 35°C. Pigeon peas are tolerant to high temperatures and drought conditions. Irrigation: Pigeon peas require minimal irrigation due to their deep-root system. They are often grown as a rain-fed crop, but supplementary irrigation may be needed during prolonged dry spells to ensure good yield.'
    },
    {
        Name:"Kidney Beans (Phaseolus vulgaris)",
        img:'images/Kidney Beans (Phaseolus vulgaris).jpg',
        example:"Sowing Period: Kidney beans are typically sown in spring (March-April) after the last frost, in temperate regions.",
        characteristics:" Kidney beans are large, kidney-shaped beans with a firm texture and a rich, meaty flavor. They are typically red, but there are also varieties in white and black.",
        para:"Culinary Uses: Kidney beans are a staple in many cuisines, especially in Latin American, Indian, and Caribbean dishes. They are commonly used in chili con carne, soups, stews, and salads. Kidney beans are also used in rice dishes like rajma chawal and as a filling in burritos and tacos. Nutritional Benefits: Kidney beans are high in protein and dietary fiber, making them excellent for muscle growth and digestive health. They are also a good source of iron, potassium, folate, and magnesium, which support heart health, red blood cell formation, and energy production. Kidney beans have a low glycemic index, helping to stabilize blood sugar levels.",
        harvesting:'Harvesting occurs in late summer (August-September) when the pods are dry and the seeds inside are hard.',
        price:'The market price of kidney beans in India generally ranges between ₹80-100 per kg, depending on the variety and market demand.',
        soil:'Kidney beans prefer well-drained loamy soils with a pH of 6 to 7. They thrive'
    },
    {
        Name:"Adzuki Beans (Vigna angularis)",
        img:'images/Adzuki Beans (Vigna angularis).jpg',
        example:"Sowing Period: Spring (April-May)",
        characteristics:" Small, red beans with a sweet flavor and creamy texture.",
        para:"Culinary Uses: Used in sweet and savory dishes, especially in Asian cuisine for red bean paste, soups, and salads. Nutritional Benefits: High in protein, fiber, iron, potassium, and B vitamins. Known to lower cholesterol and blood sugar levels.",
        harvesting:'Late summer (August-September).',
        price:'₹100-120 per kg.',
        soil:'Well-drained loamy soils, pH 6-7. Temperature Required: 20°C to 30°C. Irrigation: Moderate; critical during flowering and pod development.'
    },
    {
        Name:"Soybeans (Glycine max)",
        img:'images/Soybeans (Glycine max).webp',
        example:"Sowing Period: Late spring (May-June).",
        characteristics:" Small, round beans with colors ranging from yellow to black.",
        para:"Culinary Uses: Used in tofu, tempeh, soy milk, edamame, and soy sauce. Nutritional Benefits: High in protein, fiber, vitamins B, C, K, and minerals like calcium, iron, magnesium. Supports bone health and muscle growth.",
        harvesting:'Late summer to early autumn (September-October).',
        price:' ₹40-60 per kg.',
        soil:'Well-drained loamy soils, pH 6-7. Temperature Required: 20°C to 30°C. Irrigation: Moderate; important during flowering and pod development.'
    },
    {
        Name:"Black-eyed Peas (Vigna unguiculata)",
        img:'images/Black-eyed Peas (Vigna unguiculata).jpg',
        example:"Sowing Period: Spring (April-May).",
        characteristics:"Creamy white seeds with a black spot, nutty flavor.",
        para:"Culinary Uses: Used in salads, soups, stews, and traditional Southern U.S. dishes. Nutritional Benefits: High in protein, fiber, iron, potassium, and folate. Supports heart health and digestion.",
        harvesting:' Late summer (August-September).',
        price:'₹50-70 per kg.',
        soil:'Well-drained loamy soils, pH 5.5-6.5. Temperature Required: 25°C to 30°C. Irrigation: Moderate; critical during flowering and pod development.'
    },
    {
        Name:"Fava Beans (Vicia faba)",
        img:'images/Fava Beans (Vicia Faba).jpg',
        example:"Sowing Period: Late winter (February-March).",
        characteristics:"Large, flat, green seeds with a slightly sweet flavor.",
        para:"Culinary Uses: Used in soups, stews, salads, and as a side dish. Popular in Mediterranean cuisine. Nutritional Benefits: High in protein, fiber, iron, potassium, and folate. Supports heart health and digestion.",
        harvesting:'Late spring to early summer (May-June).',
        price:'₹80-100 per kg.',
        soil:' Well-drained loamy soils, pH 6-7.Temperature Required: 15°C to 25°C.Irrigation: Moderate; critical during flowering and pod development.'
    },
    {
        Name:"Moth Beans (Vigna aconitifolia)",
        img:'images/Moth Beans (Vigna aconitifolia).jpg',
        example:"Sowing Period: Monsoon (July-August).",
        characteristics:" Small, oval, brown seeds with a nutty flavor.",
        para:"Culinary Uses: Used in curries, salads, soups, and as a snack. Popular in Indian and African cuisines.Nutritional Benefits: High in protein, fiber, iron, and calcium. Supports muscle growth and bone health.",
        harvesting:' Late autumn (October-November).',
        price:' ₹50-70 per kg.',
        soil:'Well-drained sandy loam soils, pH 6-7. Temperature Required: 25°C to 35°C. Irrigation: Minimal; drought-resistant.'
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    },
    {
        Name:"",
        img:'',
        example:"",
        characteristics:"",
        para:"",
        harvesting:'',
        price:'',
        soil:''
    }
 ]

 const foodName=document.getElementById("foodName")

 const Rdata=document.getElementById("Rdata")

 const showMore=document.getElementById('show-more')
//  data.filter(item=>item.img).forEach(item=>{
//     const itemDiv = document.createElement('div');
//             itemDiv.className = 'data-item';
//             itemDiv.innerHTML = `<div class="row">
//             <div class="col-md-6 col-12 main_header_left" >
            
//                  <h1>${item.Name}</h1>
               

//                 <img src="${item.img}" class="d-block w-100" alt="#"/>
                 
//             </div>
//             <div class="col-md-6 col-12 main_header_right">
           
//                 <h1> ${item.example}</h2>
//                 <h2>Characteristics: ${item.characteristics}</h2>
//                 <h2> ${item.para}</h2>
//             </div>
//             </div>
//             `;
//             Rdata.appendChild(itemDiv);
//         }) 

let limit = 25;
function renderItems(item){
    Rdata.innerHTML='';
    item.forEach(item=>{
        if(item.img){
            const itemDiv=document.createElement('div')
            itemDiv.className = 'row';

            const imageContainer = document.createElement('div');
            const namePara = document.createElement('h1');
            namePara.className = 'Name';
            namePara.textContent = `${item.Name}`;
            imageContainer.className = 'col-md-6 col-12 main_header_left';
            const image=document.createElement('img')
            image.src=item.img;
            image.alt=item.Name;
            image.className='d-block w-100 rounded';
            image.style=' box-shadow: 0 8px 6px -6px #000;'
            
            imageContainer.appendChild(namePara)

            imageContainer.appendChild(image)

            const textContainer = document.createElement('div');
                    textContainer.className = 'col-md-6 col-12 main_header_right';

            const exPara = document.createElement('h1');
                    exPara.textContent = `${item.example}`;

                    const chPara = document.createElement('h2');
                    chPara.textContent = `Characteristics: ${item.characteristics}`;

                    const prPara = document.createElement('h2');
                    prPara.textContent = `${item.para}`;

                    const HrPara = document.createElement('h1');
                    HrPara.textContent = `Harvesting Season: ${item.harvesting}`;

                    const pricePara = document.createElement('h1');
                    pricePara.textContent = `Market Price: ${item.price}`;

                    const soilPara = document.createElement('h2');
                    soilPara.textContent = `Soil-Required: ${item.soil}`;

                    textContainer.appendChild(exPara);
                    textContainer.appendChild(chPara);
                    textContainer.appendChild(prPara);
                    textContainer.appendChild(HrPara);
                    textContainer.appendChild(pricePara);
                    textContainer.appendChild(soilPara);





                    itemDiv.appendChild(imageContainer);
                    itemDiv.appendChild(textContainer);

                    Rdata.appendChild(itemDiv);
        }
    })
}


function filterItems(query,limit){
    return data.filter(item=>item.Name.toLowerCase().includes(query.toLowerCase())).slice(0,limit)
}

function updateResults() {

    const query = foodName.value;
    const filteredItems = filterItems(query, limit);
    renderItems(filteredItems);
}


foodName.addEventListener('input', ()=>{
    limit=25; 
    updateResults();
});

updateResults();
showMore.addEventListener('click',()=>{
    limit+=10;
    updateResults();
})


//about

