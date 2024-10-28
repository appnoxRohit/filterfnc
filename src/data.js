const phones = [
    {
      phoneName: "Galaxy S23",
      brand: "Samsung",
      price: "$799",
      url:"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/t/0/g/-original-imah4zp7fvqp8wev.jpeg?q=20&crop=false",
      color: "Red",
      battery: "4000mAh",
      screenSize: "6.1 inches",
      ram: "8GB",
      storage: "128GB"
    },
    {
      phoneName: "Galaxy Z Fold 5",
      brand: "Samsung",
      price: "$1799",
      color: "Blue",
      battery: "4400mAh",
      screenSize: "7.6 inches",
      ram: "12GB",
      storage: "256GB",
      url:"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/y/g/l/-original-imagztmghzuhz7kf.jpeg?q=90&crop=false"
    },
    {
      phoneName: "Galaxy A54",
      brand: "Samsung",
      price: "$499",
      color: "Green",
      battery: "5000mAh",
      screenSize: "6.4 inches",
      ram: "6GB",
      storage: "128GB",
      url:"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/2/a/t/-original-imagnrhknw9pbg3t.jpeg?q=20&crop=false"
    },
    {
      phoneName: "Galaxy S23 Ultra",
      brand: "Samsung",
      price: "$1199",
      color: "White",
      battery: "5000mAh",
      screenSize: "6.8 inches",
      ram: "12GB",
      storage: "256GB",
      url:"https://rukminim1.flixcart.com/image/300/300/xif0q/mobile/q/k/h/-original-imagzm8qmr7qxfhq.jpeg"
    },
    {
      phoneName: "iPhone 14 Pro",
      brand: "Apple",
      price: "$999",
      color: "Red",
      battery: "3095mAh",
      screenSize: "6.1 inches",
      ram: "6GB",
      storage: "256GB",
      url:"https://iplanet.one/cdn/shop/files/iPhone_14_Pro_Gold_PDP_Image_Position-1a__WWEN_baefabef-3836-414d-8670-8f7aed746e3c.jpg?v=1691141132&width=823"
    },
    {
      phoneName: "iPhone 14",
      brand: "Apple",
      price: "$799",
      color: "Blue",
      battery: "3279mAh",
      screenSize: "6.1 inches",
      ram: "6GB",
      storage: "128GB",
      url:"https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      phoneName: "iPhone 14 Plus",
      brand: "Apple",
      price: "$899",
      color: "Green",
      battery: "4325mAh",
      screenSize: "6.7 inches",
      ram: "6GB",
      storage: "128GB",
      url:"https://apple-store.ifuture.co.in/wp-content/uploads/2023/11/Buy-iPhone-15-Plus-128GB-Green.png"
    },
    {
      phoneName: "iPhone SE (3rd Gen)",
      brand: "Apple",
      price: "$429",
      color: "White",
      battery: "2018mAh",
      screenSize: "4.7 inches",
      ram: "6GB",
      storage: "64GB",
      url:"https://rukminim2.flixcart.com/image/850/1000/l0igvww0/mobile/a/y/t/-original-imagca676cvmaysg.jpeg?q=90&crop=false"
    },
    {
      phoneName: "Pixel 8",
      brand: "Google",
      price: "$699",
      color: "Red",
      battery: "4500mAh",
      screenSize: "6.2 inches",
      ram: "8GB",
      storage: "128GB",
      url:"https://www.reliancedigital.in/medias/GoogleGoogle-Pixel-8-494268284-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODIwMHxpbWFnZS9qcGVnfGltYWdlcy9oYWUvaDJmLzEwMjEyMTQ3MDM2MTkwLmpwZ3w2ZTdjNzk2NzA5YTU2OWYxZTdjODMxOGY2OWNhMzlhM2JkNzM1M2NmY2NlNmU4ZDg3MGFmNWZjMDMwMDMxMWJl"
    },
    {
      phoneName: "Pixel 8 Pro",
      brand: "Google",
      price: "$899",
      color: "Blue",
      battery: "5050mAh",
      screenSize: "6.7 inches",
      ram: "12GB",
      storage: "256GB",
      url:"https://www.designinfo.in/wp-content/uploads/2023/10/Google-Pixel-8-Pro-128GB-Unlocked-Bay-1.webp"
    },
    {
      phoneName: "Pixel 7",
      brand: "Google",
      price: "$599",
      color: "Green",
      battery: "4355mAh",
      screenSize: "6.3 inches",
      ram: "8GB",
      storage: "128GB",
      url:"https://rukminim2.flixcart.com/image/800/800/cms-rpd-img/1a0316ec8b444297a9a58e66b9094d9a_183ca49288f_image.jpeg?q=90"
    },
    {
      phoneName: "Pixel 7a",
      brand: "Google",
      price: "$499",
      color: "White",
      battery: "4385mAh",
      screenSize: "6.1 inches",
      ram: "8GB",
      storage: "128GB",
      url:"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/v/f/d/-original-imagpgx4g2m63gfh.jpeg?q=90&crop=false"
    },
    {
      phoneName: "OnePlus 11",
      brand: "OnePlus",
      price: "$649",
      color: "Red",
      battery: "5000mAh",
      screenSize: "6.7 inches",
      ram: "12GB",
      storage: "64GB",
      url:"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/v/q/4/11r-5g-5011102671-oneplus-original-imagu5h8x9h8qwrv.jpeg?q=90&crop=false"
    },
    {
      phoneName: "OnePlus Nord 3",
      brand: "OnePlus",
      price: "$499",
      color: "Blue",
      battery: "4500mAh",
      screenSize: "6.74 inches",
      ram: "8GB",
      storage: "128GB",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIf26ysDBgZtObacJ8XXZuoNvOZefeFIp7VA&s"
    },
    {
      phoneName: "OnePlus 10 Pro",
      brand: "OnePlus",
      price: "$799",
      color: "Green",
      battery: "5000mAh",
      screenSize: "6.7 inches",
      ram: "12GB",
      storage: "64GB",
      url:"https://cdn1.smartprix.com/rx-iG1bQDedP-w420-h420/oneplus-10-pro-5g.jpg"

    },
    {
      phoneName: "OnePlus Nord CE 3 Lite",
      brand: "OnePlus",
      price: "$349",
      color: "White",
      battery: "5000mAh",
      screenSize: "6.72 inches",
      ram: "8GB",
      storage: "128GB",
      url:"https://m.media-amazon.com/images/I/61LB+d0vheL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      phoneName: "Moto G Stylus 5G",
      brand: "Motorola",
      price: "$399",
      color: "Red",
      battery: "5000mAh",
      screenSize: "6.8 inches",
      ram: "6GB",
      storage: "128GB",
      url:"https://images-cdn.ubuy.co.in/665943cd6e634b21cd675483-moto-g-stylus-5g-2024-unlocked.jpg"
    },
    {
      phoneName: "Moto Edge 40",
      brand: "Motorola",
      price: "$599",
      color: "Blue",
      battery: "4600mAh",
      screenSize: "6.55 inches",
      ram: "8GB",
      storage: "64GB",
      url:"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/2/m/o/edge-40-pay40030in-motorola-original-imagpqzchzhg6fex.jpeg?q=90&crop=false"
    },
    {
      phoneName: "Mi 13 Pro",
      brand: "Xiaomi",
      price: "$749",
      color: "Green",
      battery: "4820mAh",
      screenSize: "6.73 inches",
      ram: "8GB",
      storage: "256GB",
      url:"https://i.gadgets360cdn.com/products/large/xiaomi-13-pro-db-709x800-1670825991.jpg"
    },
    {
      phoneName: "Redmi Note 12 Pro",
      brand: "Xiaomi",
      price: "$399",
      color: "White",
      battery: "5000mAh",
      screenSize: "6.67 inches",
      ram: "6GB",
      storage: "128GB",
      url:"https://rukminim2.flixcart.com/image/720/864/xif0q/mobile/b/r/f/-original-imaghkvuhzwge3za.jpeg?q=60&crop=false"
    }
  ];
  
  export default phones;