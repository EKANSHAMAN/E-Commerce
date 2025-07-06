const products = [
  { id: 1, name: "Sneakers", price: 999, img: "assets/images/sneakers.jpg" },
  { id: 2, name: "Headphone", price: 1499, img: "assets/images/headphones.jpg" },
  { id: 3, name: "Blue-Jeans", price: 599, img: "assets/images/blue-jeans.jpg" },
  { id: 4, name: "Brown-Bag", price: 699, img: "assets/images/brown-bag.jpg" },
  { id: 5, name: "Sunglasses", price: 1199, img: "assets/images/sunglasses.jpg" },
  { id: 6, name: "T-Shirt", price: 399, img: "assets/images/tshirt.jpg" },
  { id: 7, name: "Beige-Trench", price: 1999, img: "assets/images/beige-trench.jpg" },
  { id: 8, name: "Hero-Dress", price: 2999, img: "assets/images/hero-dress.jpg" },
  { id: 9, name: "Macbook", price: 99999, img: "assets/images/Macbook.png" },
  { id: 10, name: "Smartwatch", price: 1999, img: "assets/images/smartwatch.jpg" },
  { id: 11, name: "Television", price: 9999, img: "assets/images/television.png" },
  { id: 12, name: "Charger", price: 499, img: "assets/images/Charger.jpg" }
];

const productGrid= document.getElementById("product-grid");
const cartCount= document.getElementById("cart-count");
const cartItems= document.getElementById("cart-items");
const cartTotal= document.getElementById("cart-total");

let cart=[];

products.forEach(product=> {
  const div= document.createElement("div");
  div.classList.add("product");
  div.innerHTML=`
                <img src="${product.img}" width="100% "
                <h4>${product.name}</h4>
                <p>₹${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>`;
                productGrid.appendChild(div);
});

function addToCart(productId)
{
  const product=products.find(p=>p.id ===productId);
  cart.push(product);
  upperCartUI();
}

function upperCartUI(){
  cartItems.innerHTML="";
  let total=0;
  cart.forEach(item=>{
    total+=item.price;
    const li=document.createElement("li");
    li.innerText=`${item.name}-₹${item.price}`;
    cartItems.appendChild(li);
  });
  cartCount.innerText=cart.length;
  cartTotal.innerText= total;
}

const button=document.getElementById("themeButton");
let isDark= true;

button.addEventListener("click",()=>{
  document.body.classList.toggle("light-theme");
  isDark=!isDark;
  button.innerHTML= isDark
   ? '<i class="fas fa-moon"></i> Toggle Dark/Light'
      : '<i class="fas fa-sun"></i> Toggle Dark/Light';
});