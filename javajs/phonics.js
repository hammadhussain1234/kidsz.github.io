var data = [
  {img:"asscit/img/b1.png"},
  {img:"asscit/img/b2.png"},
  {img:"asscit/img/b3.png"},
  {img:"asscit/img/b4.png"},
  {img:"asscit/img/b5.png"},
  {img:"asscit/img/b6.png"},
  {img:"asscit/img/b7.png"},
  {img:"asscit/img/b8.png"},
  {img:"asscit/img/b9.png"},
  {img:"asscit/img/b10.png"},
  {img:"asscit/img/b11.png"},
  {img:"asscit/img/b12.png"},
  {img:"asscit/img/b13.png"},
  {img:"asscit/img/b15.png"},
  {img:"asscit/img/b14.png"},
  {img:"asscit/img/b16.png"},
  {img:"asscit/img/b17.png"},
  {img:"asscit/img/b18.png"},
  {img:"asscit/img/b19.png"},
  {img:"asscit/img/b20.png"},
  {img:"asscit/img/b21.png"},
  {img:"asscit/img/b22.png"},
  {img:"asscit/img/b23.png"},
  {img:"asscit/img/b24.png"},
  {img:"asscit/img/b25.png"},
  {img:"asscit/img/b26.png"},

]

console.log(data[0]);

for(var i =0; i<data.length; i++){
    document.getElementById("card").innerHTML += `

            <div class="swiper-slide" d="image">
                <img src="${data[i].img}" width="100%">
              </div>
    
            `}  
            
            
