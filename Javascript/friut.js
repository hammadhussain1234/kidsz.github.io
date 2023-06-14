var data =[
    {
    image:"image/download.PNG214.jfif" ,
    heading:"Guava",
    dis:"The origins of guava are hazy, but archaeological evidence suggests the tree was domesticated at least 5,000 years ago, likely in northern South America. The plant spread throughout South and Central America"

  },
    {
    image:"image/download.png215.jfif",
    heading:"Orange",
    dis:"The orange originated in a region encompassing Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC. As of 1987, orange trees were found"

  },
    {
    image:"image/download.png216.jfif",
    heading:"Mango",
    dis:"A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It is believed to have originated in the region between northwestern Myanmar, Bangladesh, and northeastern India.[1] M. indica has been "

  },
    {
    image:"image/download.png217.jfif",
    heading:"Strawbery",
    dis:"The first garden strawberry was grown in Brittany, France, during the late 18th century. Prior to this, wild strawberries and cultivated selections from wild strawberry species were the common source of the fruit. The strawberry fruit"
  },
    {
    image:"image/download.png218.jfif",
    heading:"Kiwano Malon",
    dis:"Kiwano melons were introduced in the 1930s to New Zealand and Australia, where the plant became extensively cultivated as a novel commercial fruit and ornamental cultivar.  novel commercial fruit and ornamental cultivar."

  },
    {
    image:"image/download.png219.jfif",
    heading:"Melon",
    dis:"Melons originated in Africa or in the hot valleys of Southwest Asia, especially Iran and India, from where they gradually began to appear in Europe toward the end of the Western Roman Empire. Melons are known to have been grown by the ancient"

},
    {
    image:"image/download.png100.jfif",
    heading:"Pomegranat",
    dis:"We see it in the Middle East and India. The pomegranate was cultivated in Egypt before the time of Moses. It was found in the Indus valley so early that there is a word in Sanskrit for pomegranate. Indian royalty began their banquets with "

  },
    {
    image:"image/download.png103.jfif",
    heading:"Peach",
    dis:"Peaches originated in China, where they are native to northwest China. Archaeologists believe that peaches in China were first domesticated along the Yangzi River, where they have found fossilized peach stones  from 6000 BC"

},
    {
    image:"image/download.png220.jfif",
    heading:"Cheery",
    dis:"Cherries have pleased the palates of food lovers for centuries. Their ruby-red color and tangy taste won cherries a place on the tables of Roman conquerors, Greek citizens and Chinese noblemen. Cherries were brought to America by  the 1600s."

  },
    {
    image:"image/download.png221.jfif",
    heading:"Banana",
    dis:"Bananas are believed to have originated up to 10,000 years ago and some scientists believe they may have been the world's first fruit. The first bananas are thought to have grown in the region that includes the Malaya Peninsula, Indonesia,"

  },
    {
    image:"image/download.png222.jfif",
    heading:"Graps",
    dis:"Grape culture (or viticulture) is probably as old as civilization itself. Archeological evidence suggests humans began growing grapes as early as 6500 B.C. during the Neolithic era. By 4000 B.C., grape growing extended from Transcaucasia to Asia Minor "

  },
    {
    image:"image/download.png223.jfif",
    heading:" AvocadoHass",
    dis:"The Hass avocado is a variety of avocado with dark green, bumpy skin. It was first grown and sold by Southern California mail carrier and amateur"
  },
    {
    image:"image/images.png108.jfif",
    heading:"Pinapple",
    dis:"Pineapple is believed to have originated in the Brazilian rainforests. Pineapples were harvested by the native tribes and spread throughout South and Central America. When Christopher Columbus landed in the new world in 1493,"

  },
    {
    image:"image/images.png109.jfif",
    heading:"Guva",
    dis:"The origins of guava are hazy, but archaeological evidence suggests the tree was domesticated at least 5,000 years ago, likely in northern South America. The plant spread throughout South and Central America and the Caribbean"

  },
    {
    image:"image/download.png110.jfif",
    heading:"Mango",
    dis:"A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It is believed to have originated in the region between northwestern Myanmar, Bangladesh, and northeastern India.[1] M. indica has been cultivated in South and "

  },
    {
    image:"image/download.png111.jfif",
    heading:"Rock Melin",
    dis:"The cantaloupe, rockmelon (Australia and New Zealand, although cantaloupe is used in some states of Australia), sweet melon, or spanspek (Southern Africa) is a melon that is a variety of the muskmelon species (Cucumis melo) from the family"

},
  ]
  for(var i = 0  ; i <data.length; i++)[
    document.getElementById("demo").innerHTML+=`
    <div class="col-lg-3 col-md-3 col-sm-3 pt-4" >
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