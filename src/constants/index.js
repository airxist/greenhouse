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

export {
  about_pages,
  categories,
  filter_group,
  desktop_links,
  returns_info,
  sign_up_title,
  sign_up_desc,
  what_we_offer,
};
