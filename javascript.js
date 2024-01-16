
const img = document.querySelector(".popup-product-image");
const circleOrange = document.querySelector(".popup-circle-orange");
const circleBlue = document.querySelector(".popup-circle-blue");
const addCart = document.querySelector(".add-to-cart");
const cartAdded = document.querySelector(".cart-added");

const contentNike = document.querySelector(".content-nike");
const contentPopup = document.querySelector(".content-popup");
const exit = document.getElementById("exit");



contentNike.addEventListener("click",()=>{
    contentPopup.style.display = "block";
  
})

exit.addEventListener("click",()=>{
    contentPopup.style.display = "none";
})


addCart.addEventListener("click",()=>{
    addCart.style.display = "none";
    cartAdded.style.display = "block";
})



function productObject(id,productname,price,colors,linkimage){

    this.id = id;
    this.productname = productname
    this.price = price
    this.colors = colors
    this.linkimage = linkimage
 
}

let nike = new productObject(1,"Metcon 9 Awp","4500",["orange","blue"],"./img/metcon-9-amp-orange.png");

const{id ,productname ,price ,colors ,linkimage } = nike

function createProduct(src,selectorClassImg,selectorContainerImg,selectorClassImgPopup,
    selectorContainerImgPopup,valueText,valuePrice,selectorClassText,selectorContainerText,colors,selectorClassColor,selectorContainerColor){

    const img = document.createElement("img");
    const imgPopup = document.createElement("img");

    const title = document.createElement("h4");
    const productPrice = document.createElement("h4");
    title.classList.add(selectorClassText);
    productPrice.classList.add(selectorClassText);
    img.classList.add(selectorClassImg);
    imgPopup.classList.add(selectorClassImgPopup);
    img.src = src;
    imgPopup.src = src;
    title.innerHTML = valueText;
    productPrice.innerHTML = " ฿ " + valuePrice;
    document.querySelector(selectorContainerImg).append(img);
    document.querySelector(selectorContainerText).append(title,productPrice);
    document.querySelector(selectorContainerImgPopup).append(imgPopup);

    for (let i = 0; i < colors.length; i++) {

        const pickColor = document.createElement("div");
        pickColor.classList.add(selectorClassColor)
        pickColor.style.backgroundColor = colors[i]
        document.querySelector(selectorContainerColor).append(pickColor)
        
    }

    
        

}

createProduct(linkimage,"product-image",".image","popup-product-image",".popup-image",productname,price,"title",".nike-text"
,colors,"popup-circle-color",".popup-circle");



    











