var data =[
    {
    image:"image/download.png197.jfif" ,
    heading:"Pumpkin",
    dis:"Scientists believe that pumpkins originated in North America about 9000 years ago. The oldest pumpkin seeds have been found in Mexico and date back to somewhere between 7000-5550 B.C.. Pumpkins (along with other ",

  },
    {
    image:"image/download.png198.jfif",
    heading:"Cucumber",
    dis:"It has been cultivated for at least 3000 years in Western Asia, including China, and was spread to Europe, first in Greece and Italy. Records of cucumber cultivation appear in France in the 9th century and England ",

  },
    {
    image:"image/download.png199.jfif",
    heading:"Cabbage",
    dis:"Cabbage was most likely domesticated somewhere in Europe in Ancient history before 1000 BC. Cabbage in the cuisine has been documented since Antiquity. It was described as a table luxury in the Roman Empire."

  },
    {
    image:"image/download.png200.jfif",
    heading:"Cauliflawer",
    dis:"Cauliflower was originally grown in Asia around the Mediterranean Sea. Cauliflower has been grown and eaten across Europe since the 1500s but did not start growing in the United States until the 1900s. Today, California produces "
    
  },
    {
    image:"image/download.png201.jfif",
    heading:"Tomato",
    dis:"The wild species originated in the Andes Mountains of South America, probably mainly in Peru and Ecuador, and is thought to have been domesticated in pre-Columbian Mexico  and is thought to have been"

  },
    {
    image:"image/download.png202.png",
    heading:"Bellpepper",
    dis:"Bell peppers originated in Mexico, Central America, and South America. Peppers were named by Christopher Columbus and Spanish explorers who were searching for peppercorn plants to produce black pepper"
  },
    {
    image:"image/download.png203.jfif",
    heading:"Radish",
    dis:" Radishes originated in China thousands of years ago and gradually spread west. They became an important food of ancient Egypt, Greece, and Rome. Radishes were extensively cultivated in Egypt during the time of the Pharaohs."

  },
    {
    image:"image/download.png204.png",
    heading:"Eggplant",
    dis:"Eggplants originated in China and India and have been cultivated there for thousands of years. The Spanish Moors introduced the eggplant into southern and Eastern Europe where it became very popular. The early explorers of the New "
  },
    {
    image:"image/download.png205.jfif",
    heading:"Garlic",
    dis:"In the Old World, Egyptian and Indian cultures referred to garlic 5000 years ago and there is clear historical evidence for its use by the Babylonians 4500 years ago and by the Chinese 2000 years ago  The early explorers of the New "

  },
    {
    image:"image/download.png206.jfif",
    heading:"Onion",
    dis:"An onion, also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium. The shallot is a botanical variety of the onion which was classified as a separate species until 2010. "

  },
    {
    image:"image/download.png207.jfif",
    heading:"Potato",
    dis:"The potato is a starchy food, a tuber of the plant Solanum tuberosum and is a root vegetable native to the Americas. The plant is a perennial in the nightshade family Solanaceae. Wild potato species can be found from the southern United"

  },
    {
    image:"image/download.png208.jfif",
    heading:"Loki",
    dis:"Some sources characterize Loki as the son of two giants, who abandoned him in battle with Odin, one of the leading gods in Norse mythology. Other sources indicate that Odin and Loki became blood brothers and undertook adventures "

  },
    {
    image:"image/download.png209.jfif",
    heading:"Bittergourd",
    dis:"Bitter gourd originated from Africa. It is first noted in Africa as a dry-season staple food of Kung hunter-gatherers. With time, it spread in Asia. At first, the Wild or semi-domesticated variants became famous undertook adventures "

  },
    {
    image:"image/download.png210.jfif",
    heading:"Spinach",
    dis:"Spinach is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthaceae, subfamily Chenopodioideae. Its leaves are a common edible vegetable consumed either fresh, "

  },
    {
    image:"image/download.png211.jfif",
    heading:"Pea",
    dis:"Cauliflower was originally grown in Asia around the Mediterranean Sea. Cauliflower has been grown and eaten across Europe since the 1500s but did not start growing in the United States until the 1900s. Today, California produces "

  },
    {
    image:"image/images.png97.jfif",
    heading:"Klin",
    dis:"The first mention of Klin was made in the Nikon Chronicle under the year 1317 when Prince Yuri Danilovich of Moscow arrived in Klin from Dmitrov. The city was founded on the banks of the River Sestra to the late Neolithic Perio"
  },
  ]
  for(var i = 0  ; i <data.length; i++)[
    document.getElementById("demo").innerHTML+=`
    <div class="col-lg-3 col-md-3 col-sm-3 pt-4">
    <div class="card text-center" id="aa">
      <div class="card image text-dark bg-light">
        <img src="${data[i].image}" id="ayyan">
      </div>
     <div class="heading">
      <h1>${data[i].heading}</h1>
     </div>
  
    </div>
  </div>`
  ]