//navSection
const menuOpen = document.querySelector("#mob #icon-mob > img");
const closeMenu = document.querySelector("#closeMenu");
const navigator = document.querySelector(".navigator");


//Add Tocart Section Cart
const cartSmall = document.querySelector("#cartSide #cartSmall");

const littleCart =document.querySelector(".littleCart");

const dispCart = document.querySelector(".littleCart .dispCart");

const counterSmall = document.querySelector("#cartSide #cartSmall small");

const deleteBtn = document.querySelector(".littleCart .dispCart #cartDetails img");


//confirm Section

const minus = document.querySelector("#detailsSection #confirm #quantity #minus");
const plus = document.querySelector("#detailsSection #confirm #quantity #plus")

const smallToCart = document.querySelector("#detailsSection #confirm #quantity small")

const confirmBtn = document.querySelector("#detailsSection #confirm #addToCart")

//

// cart add

const smallQuantity = document.querySelector(".littleCart .dispCart #cartDetails #details #pricing p small");

const pQuantity = document.querySelector(".littleCart .dispCart #cartDetails #details #pricing h6");

//photos
const bigImage = document.querySelector("#imagesShoes #bigImage #bigImge");

const next = document.querySelector("#next");
const previous = document.querySelector("#previous");


const photos = document.querySelector("#imagesShoes ul")

// LIGHTBOX HTML

const lightBox = document.querySelector(".lightBox")

const closeLighBox = document.querySelector(".lightBox #close__lightBox img")

const lightBoxBigImg = document.querySelector(".lightBox #__liggtBox-BigImage")

const liggtBoxUl = document.querySelector(".lightBox ul");

const liggtBoxLi = document.querySelectorAll(".lightBox ul li");

console.log(liggtBoxLi[0])
// LIGHT BOX

let liggtBoxImgs = [
  "./images/image-product-1-thumbnail.jpg",
  "./images/image-product-2-thumbnail.jpg",
  "./images/image-product-3-thumbnail.jpg",
  "./images/image-product-4-thumbnail.jpg"
  
  ];
  
  let srcPhotos = [
	"./images/image-product-1.jpg",
 "./images/image-product-2.jpg",
 "./images/image-product-3.jpg",
 "./images/image-product-4.jpg"
]



function lightBoxListener(){

bigImage.addEventListener("click",  bigImageEv=()=>{
  lightBox.style.display = "flex";
  
  
  
})


closeLighBox.addEventListener("click", ()=>{
  lightBox.style.display = "none"
})

console.log(window.screen.width)
if(window.screen.width < 400){
bigImage.removeEventListener("click", bigImageEv)
}

  

  
  console.log(liggtBoxLi.length);
  
  liggtBoxLi.forEach((li, index)=>{
    li.addEventListener("click", ()=>{
      lightBoxBigImg.innerHTML = `<img src="${srcPhotos[index]}" alt="product">`
    })
    
    li.innerHTML = `<img src="${liggtBoxImgs[index]}" alt="product">`
  })
  
  

}


lightBoxListener()
//photos events




function images (){
  
  
	let indexPhots = 0;
	
	next.addEventListener("click",()=>{
		if(indexPhots == 3){
		indexPhots = 3;
	}else{
		indexPhots += 1
		
	}
	
	
		const imageForBigImg = `	<img src="
		${srcPhotos[indexPhots]}" alt="product">`
	
	bigImage.innerHTML = imageForBigImg;
			
	})
	
	previous.addEventListener("click", ()=>{
	  
	if(indexPhots == 0){
		indexPhots = 0
	}else{
		indexPhots -= 1
		
	}
	  
	  
	  
	  const imageForBigImg = `	<img src="
		${srcPhotos[indexPhots]}" alt="product">`
	
	bigImage.innerHTML = imageForBigImg;
			
	  
	})
}

images()







console.log(pQuantity)
menuOpen.addEventListener("click", ()=>{
	navigator.classList.add("navigatorMobdisp")
});
closeMenu.addEventListener("click", ()=>{
  navigator.classList.remove("navigatorMobdisp")
})






//cart events
cartSmall.addEventListener("click", ()=>{
	
	if(littleCart.style.display == "none"){
	littleCart.style.display = "flex"
	}else{
		littleCart.style.display = "none"
	}
	
})


function  cartConfig () {
let product = {
	cart: 0,
	total : 0,
	price : 125
}



smallToCart.innerText = product.cart
minus.addEventListener("click", ()=>{
	
	
	if(product.cart == 0){
		product.cart = 0
	}else{
		product.cart -= 1
		
	}
	
	
	smallToCart.innerText = product.cart

});

plus.addEventListener("click", ()=>{
	product.cart += 1;
	smallToCart.innerText = product.cart
});

confirmBtn.addEventListener("click", ()=>{
	 
	 if(product.cart > 0){
	 	dispCart.style.display = "flex"
	 }else{
	 	dispCart.style.display = " none"
	 }
	 
	 product.total = product.price * product.cart;
	 
	 console.log(product.total)
	 smallQuantity.innerText = product.cart;
	 pQuantity.innerText = product.total;
	 counterSmall.innerText = product.cart;
});


deleteBtn.addEventListener("click", ()=>{
	product.cart = 0;
	dispCart.style.display = "none";
	smallToCart.innerText = product.cart;
	
})
}

cartConfig()
