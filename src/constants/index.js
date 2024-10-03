import Box from "../assets/svg/Box";
import Leaf from "../assets/svg/Leaf";
import Van from "../assets/svg/Van";
import Certified from "../assets/svg/Certified";
import Accessories from "../assets/svg/Accessories";
import Clothe from "../assets/svg/Clothe";
import Kitchen from "../assets/svg/Kitchen";
import Care from "../assets/svg/Care";
import Supplies from "../assets/svg/Supplies";
import Beauty from "../assets/svg/Beauty";
import House from "../assets/svg/House";
import Travel from "../assets/svg/Travel";
import Home from "../assets/svg/Home";
import Orders from "../assets/svg/Orders";
import Discount from "../assets/svg/Discount";
import Account from "../assets/svg/Account";

const sign_up_title = "Welcome to Fysi";
const sign_up_desc =
  "Type your  e-mail or phone number to log in or create a Fysi account";

const what_we_offer = [
  {
    title: "Eco Friendly Products",
    icon: Leaf,
  },
  {
    title: "Boxing",
    icon: Box,
  },
  {
    title: "Fastest Delivery",
    icon: Van,
  },
  {
    title: "Certified Vendors and Products",
    icon: Certified,
  },
];

const catalogue_links = [
  { title: "Accessories", icon: Accessories },
  { title: "Clothing", icon: Clothe },
  { title: "Kitchen Items", icon: Kitchen },
  { title: "Personal Care", icon: Care },
  { title: "Office Supplies", icon: Supplies },
  { title: "Beauty & Cosmetics", icon: Beauty },
  { title: "House hold items", icon: House },
  { title: "Outdoor & Travel", icon: Travel },
];

const support_links = [{ title: "Faq" }, { title: "Help Center" }];

const desktop_links = [
  {
    title: "Catalogue",
    selections: catalogue_links,
    dropDownClass:
      "bg-white rounded-[8px] w-[476px] grid grid-cols-1 md:grid-cols-2 px-10 py-5 gap-x-10 gap-y-6",
  },
  { title: "About Us", href: "/about" },
  {
    title: "Support",
    selections: support_links,
    dropDownClass: "rounded-[8px] py-6 px-3 bg-white w-[123px]",
  },
];

const categories = [
  {
    title: "House Hold Items",
    link: "/house",
    img: "/categories/house-hold.png",
  },
  {
    title: "Clothing",
    link: "/clothing",
    img: "/categories/clothing.png",
  },
  {
    title: "Personal Care",
    link: "/accessory",
    img: "/categories/accessories.png",
  },
];

const filter_group = [
  {
    label: "Categories",
    groupList: [
      { label: "Accessories", name: "accessories" },
      { label: "Clothing", name: "clothing" },
      { label: "Kitchen Items", name: "kitchen" },
      { label: "Personal Care", name: "care" },
      { label: "Office Supplies", name: "office" },
      { label: "Beauty & Cosmetics", name: "beauty" },
      { label: "House hold items", name: "house" },
      { label: "Outdoor & Travel", name: "travel" },
    ],
  },
  {
    label: "Color",
    groupList: [
      { color: "red", name: "Red" },
      { color: "black", name: "Black" },
      { color: "brown", name: "Brown" },
    ],
  },
  {
    label: "Availability",
    groupList: [
      { label: "Accessories", name: "accessories" },
      { label: "Clothing", name: "clothing" },
      { label: "Kitchen Items", name: "kitchen" },
    ],
  },
];

const about_pages = [
  {
    title: "About Us",
    brief:
      "Welcome to Fysi, your go-to marketplace for eco-friendly products that help you live a more sustainable lifestyle. At Fysi, we believe in the power of nature and the importance of making conscious choices that benefit both you and the planet.",
    img: "/hero_bg/palm.png",
    className: "flex flex-col md:flex-row items-center gap-10",
  },
  {
    title: "Our Mission",
    brief:
      "We are committed to connecting eco-conscious customers with vendors who share our passion for sustainability. Our mission is to make it easy for you to find and purchase products that are not only good for you but also good for the environment. Every item on our platform is carefully vetted and certified to meet our high standards of eco-friendliness.",
    img: "/hero_bg/palm.png",
    className:
      "flex flex-col md:flex-row-reverse items-center gap-10 flex-row-reverse",
  },
  {
    title: "Our Vendors",
    brief:
      "We partner with a diverse range of vendors who are dedicated to creating high-quality, sustainable products. From organic cotton clothing to handcrafted bamboo items, our vendors are at the forefront of the green movement. They are passionate about what they do, and we are proud to support them in their mission to make a positive impact on the world.",
    img: "/hero_bg/palm.png",
    className: "hidden md:flex items-center gap-10",
  },
  {
    title: "Eco Certification",
    brief:
      "At Fysi, we take sustainability seriously. That's why we have developed a rigorous eco-certification process to ensure that every product on our platform meets our strict criteria for environmental responsibility. When you shop with us, you can trust that you are making a choice that aligns with your values.",
    img: "/hero_bg/palm.png",
    className:
      "flex flex-col-reverse md:flex-row-reverse items-center gap-10 flex-row-reverse",
  },
  {
    title: "Why Fysi",
    brief:
      "At Fysi, we take sustainability seriously. That's why we have developed a rigorous eco-certification process to ensure that every product on our platform meets our strict criteria for environmental responsibility. When you shop with us, you can trust that you are making a choice that aligns with your values.",
    img: "/hero_bg/palm.png",
    className: "flex flex-col-reverse md:flex-row items-center gap-10",
  },
];

const returns_info = [
  {
    title: "Returns & Refunds",
    desc: "At Fysi, we want you to be completely satisfied with your purchase. If for any reason you are not, our Returns and Refunds policy is here to help.",
  },
  {
    title: "Easy Returns",
    desc: "If you wish to return an item, you can do so within 14 days of receiving your order. Please ensure that the product is unused, in its original packaging, and in the same condition you received it.",
  },
  {
    title: "How To Initiate Returns",
    desc: "If you wish to return an item, you can do so within 14 days of receiving your order. Please ensure that the product is unused, in its original packaging, and in the same condition you received it.",
    steps: [
      "Contact Us: Start by reaching out to our customer support team through our contact form or email.",
      "Receive Return Instructions: We’ll guide you through the return process, including how to ship the item back to us.",
      "Ship the Item: Pack the item securely and send it to the address provided by our team.",
    ],
  },
  {
    title: "Refund Process",
    desc: "If you wish to return an item, you can do so within 14 days of receiving your order. Please ensure that the product is unused, in its original packaging, and in the same condition you received it.",
  },
  {
    title: "Exceptions",
    desc: "Certain items, such as perishable goods or personalized products, may not be eligible for return. Please check the product description for specific return eligibility.",
  },
  {
    title: "Exchanges",
    desc: "If you received a defective or damaged item, we’re happy to offer a replacement. Contact us within 7 days of receiving your order, and we’ll arrange an exchange.",
  },
  {
    title: "Need Assistance?",
    desc: "If you have any questions or need help with your return, our customer support team is here for you. Reach out anytime, and we'll be glad to assist you!",
  },
];

const faq = [
  {
    question: "Why Fysi",
    answer: "There is an answer",
  },
  {
    question: "How do you knwo a product is truely eco-friendly?",
    answer: "Yes ask and you shall receive",
  },
  {
    question: "CAn I trust the vendor on fysi?",
    answer: "yess you can",
  },
];

const reviews = [
  {
    name: "Kriston Watson",
    rating: 3,
    reviewText:
      "The lamp looks great and fits my eco-conscious lifestyle, but I found the light a bit too dim for my liking. It’s fine for ambiance, but not ideal for detailed work. Still, a good choice for those looking for a sustainable option.",
  },
  {
    name: "Chinedu Maduka",
    rating: 1,
    reviewText:
      "I was pleasantly surprised by the quality of this lamp. It’s sturdy, well-made, and the bamboo is smooth to the touch. It’s a little smaller than I expected, but it fits perfectly on my desk without taking up too much space.",
  },
  {
    name: "Tunde Adebayo",
    rating: 2,
    reviewText:
      "The bamboo desk lamp is stylish and functional. It gives off the perfect amount of light for late-night work sessions. The only downside is that the cord could be a bit longer. But overall, a great eco-friendly choice!",
  },
  {
    name: "Grace Edwards",
    rating: 8,
    reviewText:
      "I absolutely love this bamboo desk lamp! It adds such a warm, natural feel to my workspace. The design is sleek and modern, yet it blends seamlessly with my home office decor. Plus, knowing that it’s eco-friendly makes me feel even better about my purchase. Highly recommend",
  },
];

const vendor_navlinks = [
  { title: "Dashboard", icon: Home, href: "/vendor/dashboard" },
  {
    title: "Product",
    icon: Box,
    lists: [
      { text: "Management", href: "/vendor/product/manage-product" },
      { text: "Add Products", href: "/vendor/product/add-products" },
    ],
  },
  {
    title: "Order",
    icon: Orders,
    lists: [{ text: "Track Orders", href: "/vendor/orders/order" }],
  },
  {
    title: "Discounts & Promotion",
    icon: Discount,
    lists: [
      { text: "Promotion Management", href: "/vendor/discount/promotion" },
      { text: "Monitor Promotions", href: "/vendor/discount/monitor" },
    ],
  },
  { title: "Account Statement", icon: Account, href: "/vendor/account" },
];

const vendor_footerlinks = [
  { title: "Settings", icon: Discount, href: "/vendor/discounts" },
  { title: "Help", icon: Account, href: "/vendor/accounts" },
];

const customer_navlinks = [
  { title: "My Account", icon: Home, href: "/customer/my-account" },
  { title: "Order History", icon: Box, href: "/customer/order-history" },
  { title: "Inbox", icon: Orders, href: "/customer/inbox" },
  { title: "Reviews", icon: Discount, href: "/customer/reviews" },
  { title: "Settings", icon: Account, href: "/customer/settings" },
];

const admin_navlinks = [
  { title: "Overview", icon: Home, href: "/admin/overview" },
  { title: "Products", icon: Box, href: "/admin/products" },
  { title: "Orders", icon: Orders, href: "/admin/orders" },
  { title: "Customers", icon: Discount, href: "/admin/customers" },
  { title: "Vendors", icon: Account, href: "/admin/vendors" },
  { title: "Analytics", icon: Account, href: "/admin/analytics" },
  { title: "Campaign", icon: Account, href: "/admin/campaign" },
];

const toggle_options = {
  orderIndex: [
    { title: "All Orders", show: true, digit: 200 },
    { title: "Shipped", show: false },
    { title: "Cancelled", show: false },
    { title: "Delivery Failed", show: false },
    { title: "Returned", show: false },
  ],
  tracking: [
    { title: "Tracking", show: true },
    { title: "Active", show: false },
    { title: "My Shipping", show: false },
  ],
  account: [
    { title: "All", show: true, digit: 5 },
    { title: "Open", show: false },
    { title: "Paid", show: false },
    { title: "Unpaid", show: false },
  ],
  promotion: [
    { title: "All", show: true, digit: 5 },
    { title: "Open", show: false },
    { title: "Ongoing", show: false },
    { title: "Cancelled", show: false },
    { title: "Expired", show: false },
  ],
  monitor: [
    { title: "All", show: true, digit: 5 },
    { title: "Cancelled", show: false },
    { title: "Expired", show: false },
  ],
  admin_order: [
    { title: "All Time", show: true },
    { title: "12 Months", show: false },
    { title: "30 Days", show: false },
    { title: "7 Days", show: false },
    { title: "24 Hours", show: false },
  ],
};

export {
  about_pages,
  admin_navlinks,
  categories,
  customer_navlinks,
  faq,
  filter_group,
  desktop_links,
  returns_info,
  reviews,
  sign_up_title,
  sign_up_desc,
  toggle_options,
  what_we_offer,
  vendor_navlinks,
  vendor_footerlinks,
};
