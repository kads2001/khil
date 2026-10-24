/**
 * Kamat Hotels India Limited (KHIL) - Blogs & Media Data
 * Usable via ES Module import:
 *   import { blogsData } from './assets/js/blogs.js';
 *   or: import blogsData from './assets/js/blogs.js';
 * Or via script tag:
 *   <script type="module" src="assets/js/blogs.js"></script>
 */

export const blogsData = [
  {
    id: "hospibuz-ram-navami-fadnavis",
    title: "Maharashtra CM Devendra Fadnavis Does Ram Navami Pooja at The Orchid Hotel, Pune",
    source: "Hospibuz",
    category: "In The News",
    meta: "Hospibuz · Events & Celebrations",
    image: "assets/images/blogs/image copy 6.png",
    url: "https://hospibuz.com/hotel/Hotel-listicles/maharashtra-cm-devendra-fadnavis-does-ram-navami-pooja-at-the-orchid-hotel-pune-8935330",
    description: "On the auspicious occasion of Shri Ram Navami, Maharashtra CM Devendra Fadnavis offered prayers and performed a special pooja at The Orchid Hotel, Pune, joined by Vishal Vithal Kamat.",
    details: "Following a state revenue workshop at the property, CM Devendra Fadnavis participated in festive celebrations and took darshan of Lord Ram at the hotel's temple setup.",
    featured: true
  },
  {
    id: "costar-nifty-tourism-index",
    title: "Launch of Nifty Tourism Index puts India’s hotel industry in the spotlight",
    source: "CoStar",
    category: "In The News",
    meta: "CoStar · Industry Spotlight",
    image: "assets/images/blogs/image copy 7.png",
    url: "https://www.costar.com/article/1906361982/launch-of-nifty-tourism-index-puts-indias-hotel-industry-in-the-spotlight",
    description: "The launch of the Nifty India Tourism Index puts a long-overdue spotlight on the country's hospitality sector, establishing a formal benchmark and tracking industry growth.",
    details: "Highlighting how the index formalizes valuation and shifts perceptions of tourism and hospitality into recognized economic growth drivers, industry leaders including Vishal Vithal Kamat share insights on accountability and expansion.",
    featured: true
  },
  {
    id: "hospibuz-kamat-legacy",
    title: "The Kamat Legacy: A Father-Son Duo Redefining Indian Hospitality",
    source: "Hospibuz",
    category: "In The News",
    meta: "Hospibuz · The Kamat Legacy",
    image: "assets/images/blogs/image.png",
    url: "https://hospibuz.com/the-kamat-legacy-a-father-son-duo-redefining-indian-hospitality/",
    description: "The inspiring story of Dr. Vithal Venkatesh Kamat, Chairman, Kamat Hotels India Ltd (KHIL) and his son, Vishal Vithal Kamat, Executive Director at KHIL, stands as a testament to the power of mentorship, tradition, and innovation.",
    details: "From pioneering eco-friendly luxury with The Orchid to restoring historic Fort JadhavGADH, this Hospibuz special chronicles the dynamic synergy between Dr. Vithal Kamat and Vishal Kamat.",
    featured: true
  },
  {
    id: "corporate-citizen",
    title: "Mastering the art of relaxation and revelation",
    source: "Corporate Citizen",
    category: "In The News",
    meta: "Corporate Citizen · Leadership Insights",
    image: "assets/images/blogs/image copy.png",
    url: "https://fliphtml5.com/check/ottei/bugq/#p=46",
    description: "Vishal Kamat, Director at Kamat Hotels, shares candid insights on leadership, work culture, and mindful living in Corporate Citizen.",
    details: "In an in-depth conversation, Vishal Kamat shares his perspective on the hotel industry, work-life balance, and finding inspiration from timeless screen characters.",
    featured: true
  },
  {
    id: "cii-entrepreneurship",
    title: "Fostering entrepreneurship in Maharashtra",
    source: "Chandran M Iyer",
    category: "In The News",
    meta: "CII · Chandran M Iyer",
    image: "assets/images/blogs/image copy 2.png",
    url: "https://www.linkedin.com/posts/chandran-m-iyer-17589228_hospitalitysector-hospitalityindustry-cii-activity-7193599107104419840-vDK2",
    description: "Spotlighting hospitality leadership, sustainable enterprise growth, and empowering regional entrepreneurship across Maharashtra at CII.",
    details: "Key discussions on strengthening tourism, infrastructure, and entrepreneurship opportunities across Maharashtra presented at the CII forum.",
    featured: true
  },
  {
    id: "delhi-hc-trademark",
    title: "Delhi High Court Directs OTAs to Remove 22 Listings in Kamat Hotels' 'The Orchid' Trademark Case",
    source: "The Realty Today",
    category: "Regulatory News",
    meta: "The Realty Today · Regulatory News",
    image: "assets/images/blogs/image copy 3.png",
    url: "https://therealtytoday.com/news/regulatory/delhi-high-court-directs-otas-to-remove-22-listings-in-kamat-hotels-the-orchid-trademark-case/",
    description: "The Delhi High Court has directed major online travel agencies to remove 22 unauthorized hotel listings infringing on Kamat Hotels' registered trademark 'The Orchid'.",
    details: "In a landmark intellectual property ruling, the Delhi High Court ordered OTAs to immediately delist infringing entities misusing Kamat Hotels' reputed brand identity, protecting brand equity.",
    featured: true
  },
  {
    id: "irc-restaurant-congress",
    title: "Vishal Kamat at Indian Restaurant Congress: Driving Innovation in Hospitality",
    source: "Indian Restaurant Congress",
    category: "Leadership",
    meta: "Indian Restaurant Congress · Leadership",
    image: "assets/images/blogs/image copy 4.png",
    url: "https://x.com/IndianRestCong/status/2102680773228683527?s=48&t=JxCQ9KDdvrM3d8fgLnTi7Q",
    description: "Vishal Kamat, Executive Director of Kamat Hotels India Ltd, addresses the Indian Restaurant Congress on culinary evolution, sustainable dining, and restaurant innovation.",
    details: "Spotlighting industry insights, regional cuisine heritage, and next-gen dining experiences shared by Vishal Kamat at the Indian Restaurant Congress (IRC) annual convention.",
    featured: true
  },
  {
    id: "hotelier-india-gujarat",
    title: "Kamat Hotels Expands in Gujarat with Two New IRA by Orchid Properties",
    source: "Hotelier India",
    category: "Expansion",
    meta: "Hotelier India · Expansion",
    image: "assets/images/blogs/image copy 5.png",
    url: "https://www.hotelierindia.com/development/kamat-hotels-expands-in-gujarat-with-two-new-ira-by-orchid-properties",
    description: "Kamat Hotels India continues its aggressive growth across Western India by adding two new IRA by Orchid properties in key commercial and tourist corridors of Gujarat.",
    details: "Strengthening KHIL's presence in Western India, the addition of two new IRA by Orchid hotels in Gujarat brings upscale accommodations, modern banquet facilities, and eco-sensitive operations to travellers.",
    featured: true
  }
];

// Helper functions
export const getFeaturedBlogs = (limit = 3) => blogsData.slice(0, limit);
export const getBlogById = (id) => blogsData.find((blog) => blog.id === id);
export const getBlogsByCategory = (category) =>
  blogsData.filter((blog) => blog.category.toLowerCase() === category.toLowerCase());

// Global window exposure for browser scripts
if (typeof window !== "undefined") {
  window.blogsData = blogsData;
  window.KHIL_BLOGS = blogsData;
  window.getFeaturedBlogs = getFeaturedBlogs;
  window.getBlogById = getBlogById;
  window.getBlogsByCategory = getBlogsByCategory;
}

export default blogsData;
