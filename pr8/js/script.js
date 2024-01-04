

const products = [
    {
        path: '<img src="images/pr-1.webp" alt="pr-1" width="85%">',
        name: 'SanDisk Cruze Blade SDCZ50 64 GB Pen Drive (Red, Black)',
        price: '₹449'
    },
    {
        path: '<img src="images/pr-2.webp" alt="pr-2" width="85%">',
        name: 'HP MI310 64 GB MicroSD Card Class 10 100 MB/s Memory Card (With Adapter)',
        price: '₹399'
    },
    {
        path: '<img src="images/pr-3.webp" alt="pr-3" width="85%">',
        name: 'beatXP Tune XPods with 50H Playtime, Quad Mic ENC, BT 5.3 Wireless Earbuds Bluetooth Headset  (Black, True Wireless)',
        price: '₹899'
    },
    {
        path: '<img src="images/pr-4.webp" alt="pr-4" width="85%">',
        name: 'ZEBRONICS Zeb Companion 200 Wireless Combo with Silent Operation Mouse, Power Saving Mode Wireless Desktop Keyboard  (White)',
        price: '₹799'
    },
    {
        path: '<img src="images/pr-5.webp" alt="pr-5" width="85%">',
        name: 'ASUS 24 inch Full HD IPS Panel Gaming Monitor (TUF Gaming)  (Response Time: 1 ms, 60 Hz Refresh Rate)',
        price: '₹13,999'
    },
    {
        path: '<img src="images/pr-6.webp" alt="pr-6" width="85%">',
        name: 'Men Printed Cotton Blend Straight Kurta  (Black)',
        price: '₹354'
    },
    {
        path: '<img src="images/pr-7.webp" alt="pr-7" width="85%">',
        name: 'Ethnic Premium Leather Brown Formal Peshawari sandals|Summer|Trendy Slip-On Outdoors For Men  (Brown)',
        price: '₹599'
    },
    {
        path: '<img src="images/pr-8.webp" alt="pr-8" width="85%">',
        name: 'Men Solid Single Breasted Casual Blazer  (Black)',
        price: '₹1,439'
    },
    {
        path: '<img src="images/pr-9.webp" alt="pr-9" width="85%">',
        name: 'Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens  (Black)',
        price: '₹33,990'
    },
    {
        path: '<img src="images/pr-10.webp" alt="pr-10" width="85%">',
        name: 'cleanQ Premium Foldable Spy Drone with HQ WiFi Camera Remote Control Quadcopter  (Gesture Selfie Flips Bounce Mode and App One Key Headless Mode)',
        price: '₹2,679'
    },
    {
        path: '<img src="images/pr-11.webp" alt="pr-11" width="85%">',
        name: 'CRADIAC TUNGSTEN VOLTCRUZE 27.5 inches Single Speed Lithium-ion (Li-ion) Electric Cycle',
        price: '₹24,999'
    },
    {
        path: '<img src="images/pr-12.webp" alt="pr-12" width="85%">',
        name: 'HP LaserJet M1005 MFP Multi-function Monochrome Laser Printer  (White, Black, Toner Cartridge)',
        price: '₹17,699'
    },
    {
        path: '<img src="images/pr-13.webp" alt="pr-13" width="85%">',
        name: 'realme 11 Pro 5G (Sunrise Beige, 256 GB)  (8 GB RAM)',
        price: '₹24,999'
    },
    {
        path: '<img src="images/pr-14.webp" alt="pr-14" width="85%">',
        name: 'HP Victus AMD Ryzen 5 Hexa Core 7535HS - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050) 15-fb1016AX Gaming Laptop  (15.6 Inch, Performance Blue, 2.37 kg, With MS Office)',
        price: '₹53,990'
    },
    {
        path: '<img src="images/pr-15.webp" alt="pr-15" width="85%">',
        name: 'APPLE iPhone 15 Pro (Blue Titanium, 128 GB)',
        price: '₹1,30,990'
    },
    {
        path: '<img src="images/pr-16.webp" alt="pr-16" width="85%">',
        name: 'APPLE 2023 MacBook Pro Apple M3 Pro - (18 GB/1 TB SSD/macOS Sonoma) MRX43HN/A  (14 Inch, Space Black, 1.61 kg)',
        price: '₹2,39,900'
    },
    {
        path: '<img src="images/pr-17.webp" alt="pr-17" width="85%">',
        name: 'Fire-Boltt Epic Plus with1.83" 2.5D Curved Glass,SPO2, Heart Rate tracking, Touchscreen Smartwatch  (Black Strap, Free Size)',
        price: '₹1,099'
    },
    {
        path: '<img src="images/pr-18.webp" alt="pr-18" width="85%">',
        name: 'Men Colorblock Hooded Neck Cotton Blend Red T-Shirt',
        price: '₹199'
    },
    {
        path: '<img src="images/pr-19.webp" alt="pr-19" width="85%">',
        name: 'Women Grey Hand-held Bag - Extra Spacious  (Pack of: 3)',
        price: '₹199'
    },
    {
        path: '<img src="images/pr-20.webp" alt="pr-20" width="85%">',
        name: 'SBMS Back Cover for Apple Iphone 14 Pro  (Blue, Shock Proof, Silicon, Pack of: 1)',
        price: '₹317'
    },
    {
        path: '<img src="images/pr-21.webp" alt="pr-21" width="85%">',
        name: 'KRISHTY Natraj Red Colour Pencils 50 Pencil  (Set of 50, Red)',
        price: '₹250'
    },
    {
        path: '<img src="images/pr-22.webp" alt="pr-22" width="85%">',
        name: 'DOMS Neon,X1,Y1+,Apsara Absolute,Platinum Pencil  (Multicolor)',
        price: '₹308'
    }
];



products.forEach((nm, ind) => {

    prd.innerHTML +=
        `<div class="pr-1 bg-light p-3 d-flex flex-wrap align-items-center my-5 rounded-3">
    <div class="col-5 box p-5">
        <div class="pr-img">
        ${nm.path}
        </div>
        <div class="pr-btn btnhv pt-4">
            <button class="btn1 p-3 me-2 btnhv1" onclick="return addToCart(${ind})">ADD TO CART</button>
            <button class="btn2 p-3">BUY NOW</button>
        </div>
    </div>
    <div class="col-7 p-5 ps-0">
        <h2 class="pr-h2">
            ${nm.name}
        </h2>
        <h4 class="pr-h4 pt-2">
            Special price
        </h4>
        <h1 class="pr-h1 pt-1">
            ${nm.price}
        </h1>
        <h4 class="pr-h4-2 pt-2">
            Available offers
        </h4>
        <h5 class="pr-h5 d-flex align-items-center">
            <span class="material-symbols-outlined pe-2">sell</span>Special PriceGet extra 18% off
            (price inclusive of cashback/coupon)
        </h5>
        <h5 class="pr-h5 d-flex align-items-center">
            <span class="material-symbols-outlined pe-2">sell</span>Combo OfferBuy 2 items save ₹20;
            Buy 3-4 save ₹30; Buy 5+ save ₹50
        </h5>
        <h5 class="pr-h5 d-flex align-items-center">
            <span class="material-symbols-outlined pe-2">sell</span>Buy this product and Get Extra
            ₹100 Off on Select Room Heaters
        </h5>
        <h5 class="pr-h5 d-flex align-items-center">
            <span class="material-symbols-outlined pe-2">sell</span>Buy this product and Get Extra
            ₹75 Off on Select Room Heaters
        </h5>
    </div>
</div> `

});



const printItems = () => {

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    crprd.innerHTML = '';

    cartItems.forEach((itm, ind) => {

        const printcount = itm.quantity || 1;

        crprd.innerHTML +=
            `<div class="allitems-1 my-4 p-2 w-100 d-flex flex-wrap align-items-center">
        <div class="col-4 ps-4 p-2">
            ${itm.path}
        </div>
        <div class="col-8 p-1">
            <h2 class="itm-h2 pb-1">
                ${itm.name}
            </h2>
            <h3 class="itm-h3 pb-2">
                ${itm.price}
            </h3>
        </div>
        <h3 class="itm-btn ps-5 pt-3">
            <button class="me-2"
            onclick="return sub('countDisplay${ind + 1}')">-</button>
            <span id="countDisplay${ind + 1}">${printcount}</span>
            <button class="ms-2"
            onclick="return add('countDisplay${ind + 1}')">+</button>
        </h3>
        <div class="btn-fn ps-5 ms-5 pt-3">
            <button class="ms-2 ms-4">SAVE FOR LATER</button>
            <button class="ms-2 btn-fn-2" onclick="return removeItem('countDisplay${ind + 1}')">REMOVE</button>
        </div>
    </div>`

    });



};



const addToCart = (pos) => {

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const productToAdd = { ...products[pos], quantity: 1 };
    const existingItemIndex = cartItems.findIndex(item => item.name === productToAdd.name);

    if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity++;
    } else {
        cartItems.push(productToAdd);
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));

    printItems();

    updateTotal();

};



const sub = (countDisplayId) => {

    let countDisplay = document.getElementById(countDisplayId);
    let count = parseInt(countDisplay.innerHTML);

    if (count > 1) {
        count--;
        countDisplay.innerHTML = count;
        updateQuantity(countDisplayId, count);
    }

};



const add = (countDisplayId) => {

    let countDisplay = document.getElementById(countDisplayId);
    let count = parseInt(countDisplay.innerHTML);

    count++;
    countDisplay.innerHTML = count;
    updateQuantity(countDisplayId, count);

};



const updateQuantity = (countDisplayId, newQuantity) => {

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const indexToUpdate = parseInt(countDisplayId.replace('countDisplay', '')) - 1;

    if (indexToUpdate >= 0 && indexToUpdate < cartItems.length) {
        cartItems[indexToUpdate].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    updateTotal();

};



const removeItem = (countDisplayId) => {

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const indexToRemove = parseInt(countDisplayId.replace('countDisplay', '')) - 1;

    if (indexToRemove >= 0 && indexToRemove < cartItems.length) {
        cartItems.splice(indexToRemove, 1);

        localStorage.setItem('cart', JSON.stringify(cartItems));

        printItems();
    }

};



const updateTotal = () => {

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    let itemsCount = 0;
    let totalPrice = 0;

    cartItems.forEach(item => {
        itemsCount += item.quantity || 0;
        const itemPrice = parseInt(item.price.replace('₹', '').replace(',', '')) || 0;
        totalPrice += itemPrice * (item.quantity || 0);
    });

    const discountPercentage = 10;
    const discount = (totalPrice * discountPercentage) / 100;

    const finalPrice = Math.floor(totalPrice - discount);

    document.getElementById('itemsCount').textContent = itemsCount;
    document.getElementById('totalPrice').textContent = `₹${totalPrice}`;
    document.getElementById('discount').textContent = `${discountPercentage}%`;
    document.getElementById('finalPrice').textContent = `₹${finalPrice}`;

};



printItems();



updateTotal();


