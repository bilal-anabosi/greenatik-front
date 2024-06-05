// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Function to get the language from localStorage or default to 'en'
const getDefaultLanguage = () => {
  const savedLanguage = localStorage.getItem('language');
  return savedLanguage || 'en';
};

// Initialize i18n
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "navbar": {
          "currency": "Currency",
          "usd": "USD",
          "ils": "ILS",
          "language": "Language",
          "english": "English",
          "arabic": "Arabic",
          "profile": "Profile",
          "cart": "Cart",
          "checkout": "Checkout",
          "wishlist": "Wishlist",
          "posts": "Posts",
          "store": "Store",
          "addProduct": "Add New Product",
          "addPost": "Add New Post",
          "addBlog": "Add New Blog",
          "seePosts": "See Posts",
          "seeProducts": "See Products",
          "seeBlogs": "See Blogs",
          "postDelivery": "Post Delivery",
          "productDelivery": "Product Delivery",
          "logout": "Log Out",
          "login": "Log In",
          "signup": "Sign Up",
          "developed": "From concept to launch, this website was proudly developed in Palestine.",
          "home": "Home",
          "mainStore": "Main Store",
          "recycling": "Recycling",
          "blogs": "Blogs",
          "dashboard": "Dashboard",
          "delivery": "Delivery",
          "leaderboard": "Leader Board",
          "account": "Account",
          "signUp": "Sign Up",
          "login": "Login",
          "myAccount": "My Account",
          "aboutUs": "About us"
        },
        "home": {
          "whyGreeNatik": "Why GreeNatik?",
          "careAboutPlanet": "We understand you care about the planet!",
          "shopGuiltFree": "That's why we offer a curated selection of eco-friendly and sustainable products, rigorously vetted for their environmental and social impact. Shop guilt-free with complete transparency – detailed descriptions reveal each item's origin, materials, and sustainable practices. Plus, we've eliminated wasteful packaging! All orders ship in eco-friendly, recyclable materials, minimizing your footprint and maximizing your impact.",
          "viewStore": "View store for a greener future",
          "difficultyAcquiringMaterials": "Difficulty In Acquiring Materials?",
          "recycleMaterials": "Looking to responsibly recycle leftover materials from your sustainable products? Our innovative smart recycling system connects you directly with us!",
          "easySteps": "Here's how it's easy:",
          "postMaterials": "1. Post what you have! Let us know the specific materials you need to recycle (e.g., Plastic, Metal etc...).",
          "waitContributors": "2. Wait for contributors to reach out! People will review your post and provide you directly.",
          "recycleEase": "3. Recycle with ease! We'll arrange convenient pick-up or drop-off options for your recyclable materials.",
          "signUp": "Sign up now to create your first post.",
          "wantFastCash": "Want Fast Cash?",
          "recycleRewards": "Recycle and earn rewards for your eco-efforts!",
          "findCompanies": "Find companies needing your plastics, cans, and more right in your area.",
          "showRecycle": "We'll show you exactly what to recycle and estimate your points. Short on time? Partner delivery services might even pick it up.",
          "earnRewards": "Earning rewards is easy - we explain everything clearly. Want even more cool stuff? Reach higher tiers and redeem points at your GreeNatik store!",
          "winWin": "Recycle right, get rewarded - it's a win-win for you and the planet!",
          "makeRecyclingAwesome": "Let's make recycling awesome together!",
          "allPosts": "All posts",
          "ecoEnthusiast": "Eco-Enthusiast?",
          "recyclingMystery": "Feeling like recycling is a mystery? Unsure how to prep your materials or where to find composting hacks? We get it!",
          "vibrantBlogosphere": "GreeNatik has a vibrant blogosphere dedicated to making you a recycling rockstar. No matter your level of recycling knowledge, there's a blog waiting to empower you. Stay tuned for our launch and join the conversation! Together, let's turn recycling into a rewarding adventure - one blog post at a time!",
          "goToBlogs": "Go To Blogs",
          "title": "Guilt Free Shopping Get Cash From Your Waste",
          "greenProductMarketplace": "Green Product Marketplace",
          "greenProductMarketplaceDesc": "We offer a curated selection of eco-friendly, sustainable, and ethical products. Every item is rigorously vetted for its environmental and social impact. With transparent descriptions, you'll know exactly what you're buying.",
          "sustainablePackagingSolutions": "Sustainable Packaging Solutions",
          "sustainablePackagingSolutionsDesc": "Ditch the guilt, embrace green! We now use eco-friendly, recyclable packaging for all orders. Shop with confidence, knowing your sustainable choices extend to how your products arrive - minimizing waste and maximizing feel-good vibes.",
          "recycleRewardProgram": "Recycle and Reward Program",
          "recycleRewardProgramDesc": "Encourage people to participate in an eco-friendly lifecycle by providing a platform for them to return used material. In exchange, they receive points for future purchases.",
          "inspiringBlogs": "Inspiring Blogs",
          "inspiringBlogsDesc": "Offering a wealth of knowledge and resources for anyone interested in embracing a more sustainable lifestyle. Regular updates include a diverse range of content from eco-friendly living tips.",
          "offer":"This Is What We offer",
          "1":"shopper",
          "2":"Recycling company",
          "3":"A Recycler",
          "4":"Blogs",
          "howRecyclingWorks": {
            "sectionTitle": "How does Recycling work?",
            "steps": [
              {
                "badge": "Step 01",
                "title": "View all the posts",
                "description": "Let's turn those used materials into something fantastic! We can search through all the posts offering different resources. Think of it like filtering for the perfect match – something that complements what you already have. This way, you can bring to life products from your used materials!",
                "button": "Posts"
              },
              {
                "badge": "Step 02",
                "title": "Select a post and fill the form",
                "features": [
                  "Easy simple form to fill showing what you have",
                  "Fast response after submitting",
                  "We offer drop off or pick up for your materials"
                ]
              },
              {
                "badge": "Step 03",
                "title": "Get your points and compete with others",
                "description": "Get rewarded at GreeNatik! Every used material earns you points. Rack them up and redeem for discounts in our store! Compete with fellow upcyclers on our leaderboards – you might become the GreeNatik champion! Join the creative revolution, save money, save the planet!",
                "button": "Leaderboard"
              }
            ]
          }
        },
        "wishlistTable": {
          "title": "My Wishlist",
          "description": "You have {{count}} items in your wishlist.",
          "product": "Product",
          "price": "Price",
          "status": "Status",
          "actions": "Actions",
          "remove": "Remove",
          "inStock": "In Stock",
          "outOfStock": "Out of Stock",
          "addToCart": "Add to Cart",
          "delete": "Delete",
          "outOfStockMessage": "This product is out of stock and cannot be added to the cart.",
          "now": "now",
          "close": "Close"
        },
        
          "breadcrumb": {
            "home": "Home",
            "shop": "Shop",
            "myWishlist": "My Wishlist"
          }
          ,"checkout": {
            "title": "Checkout",
            "alreadyHaveAccount": "Already have an account?",
            "signIn": "Sign In",
          "shopCheckout":" Checkout"
          },
          "breadcrumb1": {
            "home": "Home",
            "shop": "Shop",
            "shopCheckout": "Checkout"
          },
          "address": {
            "addDeliveryAddress": "Add delivery address",
            "addAddress": "Add address",
            "newShippingAddress": "New Shipping Address",
            "addNewShippingAddress": "Add new shipping address for your order delivery.",
            "firstName": "First name",
            "lastName": "Last name",
            "addressLine1": "Address Line 1",
            "addressLine2": "Address Line 2",
            "city": "City",
            "country": "Country",
            "state": "State",
            "zipCode": "Zip Code",
            "businessName": "Business Name",
            "setDefault": "Set as Default",
            "cancel": "Cancel",
            "saveAddress": "Save Address",
            "deleteAddress": "Delete address",
            "areYouSureDelete": "Are you sure you want to delete this address?",
            "selectCountry": "Select country",
            "selectState": "Select state",
            "homeType": "Home",
            "officeType": "Office",
            "defaultAddress": "Default address",
            "delete": "Delete",
            "pleaseFillAllFields": "Please fill in all fields."
          },
          "deliveryInstructions": {
            "title": "Delivery instructions",
            "label": "Delivery instructions",
            "placeholder": "Write delivery instructions",
            "helpText": "Add instructions for how you want your order shopped and/or delivered",
            "nextButton": "Next"
          },
          "discount": {
            "title": "Discount",
            "usePoints": "Use points",
            "discountAmount": "Discount Amount",
            "totalPoints": "Total Points",
            "pointsToUse": "Points to Use",
            "applyButton": "Apply Discount",
            "notification": "The entered points exceed the available points!",
            "errorEmptyPoints": "Please enter points to use for the discount.",
            "errorZeroPoints": "Please select points to use for the discount.",
            "errorNoPoints": "No points available."
          },
           "Checkout2":{
            "button1":"Placing Order...",
            "button2":"Placing Order",
           "setErrorMessage1":"Failed to place order",
           "setErrorMessage2":"Order placed successfully. Order Number:",
          },
          "order": {
            "title": "Order Details",
            "unnamedItem": "Unnamed Item",
            "noDescription": "No description",
            "itemSubtotal": "Item Subtotal",
            "serviceFee": "Service Fee",
            "subTotal": "SubTotal",
            "totalAfterDiscount": "Total after Discount"
          }, "payment": {
            "title": "Payment Method",
            "paypal": "Payment with PayPal",
            "paypalDescription": "You will be redirected to the PayPal website to complete your purchase securely.",
            "creditCard": "Credit / Debit Card",
            "creditCardDescription": "Safe money transfer using your bank account. We support Mastercard, Visa, Discover, and Stripe.",
            "payoneer": "Pay with Payoneer",
            "payoneerDescription": "You will be redirected to the Payoneer website to complete your purchase securely.",
            "cashOnDelivery": "Cash on Delivery",
            "cashOnDeliveryDescription": "Pay with cash when your order is delivered.",
            "cardNumberLabel": "Card Number",
            "cardNumberRequired": "Card number is required",
            "cardNumberInvalid": "Invalid card number",
            "cardNameLabel": "Name on Card",
            "cardNameRequired": "Name on card is required",
            "cardNamePlaceholder": "Enter your first name",
            "expiryDateLabel": "Expiry date",
            "expiryDateRequired": "Expiry date is required",
            "selectDate": "Select Date",
            "cvvLabel": "CVV code",
            "cvvRequired": "CVV code is required",
            "cvvInvalid": "Invalid CVV code",
            "selectPaymentMethodWarning": "Please select a payment method",
            "prevButton": "Prev"
          },"Footer":
          {
            "categories": "Categories",
            "foodware": "Foodware",
            "laundry": "Laundry",
            "pets": "Pets",
            "electronics": "Electronics",
            "home": "Home",
            "skincare": "Skincare",
            "clothing": "Clothing",
            "office": "Office",
            "get_to_know_us": "Get to know us",
            "company": "Company",
            "about": "About",
            "blog": "Blog",
            "for_consumers": "For Consumers",
            "donate_for_recycling": "Donate for recycling",
            "shipping": "Shipping",
            "product_returns": "Product Returns",
            "shop_checkout": "Shop Checkout",
            "become_a_shopper": "Become a Shopper",
            "shopper_opportunities": "Shopper Opportunities",
            "earnings": "Earnings",
            "ideas_guides": "Ideas & Guides",
            "new_retailers": "New Retailers",
            "greenatik_programs": "Greenatik programs",
            "delivery": "Delivery",
            "recycling": "Recycling",
            "points": "Points",
            "payment_partners": "Payment Partners",
            "follow_us_on": "Follow us on",
            "all_rights_reserved": "All rights reserved"
          }, "orderList": {
            "order": "Order",
            "status": "Status",
            "product": "Product",
            "date": "Date",
            "quantity": "Quantity",
            "price": "Price",
            "totalAmount": "Total Amount",
            "notDelivered": "Not Delivered",
            "delivered": "Delivered",


          }
          
          
      }
    },
    ar: {
      translation: {
        "navbar": {
          "currency": "العملة",
          "usd": "دولار",
          "ils": "شيكل",
          "language": "اللغة",
          "english": "الإنجليزية",
          "arabic": "العربية",
          "profile": "الملف الشخصي",
          "cart": "عربة التسوق",
          "checkout": "الدفع",
          "wishlist": "أريد الحصول",
          "posts": "المنشورات",
          "store": "المتجر",
          "addProduct": "إضافة منتج جديد",
          "addPost": "إضافة منشور جديد",
          "addBlog": "إضافة مدونة جديدة",
          "seePosts": "عرض المنشورات",
          "seeProducts": "عرض المنتجات",
          "seeBlogs": "عرض المدونات",
          "postDelivery": "تسليم اعادة التدوير",
          "productDelivery": "تسليم المنتجات",
          "logout": "تسجيل الخروج",
          "login": "تسجيل الدخول",
          "signup": "إنشاء حساب",
          "developed": "من الفكرة إلى الإطلاق، تم تطوير هذا الموقع بفخر في فلسطين.",
          "home": "الصفحة الرئيسية",
          "mainStore": "المتجر الرئيسي",
          "recycling": "إعادة التدوير",
          "blogs": "المدونات",
          "dashboard": "لوحة القيادة",
          "delivery": "التوصيل",
          "leaderboard": "قائمة الصدارة",
          "account": "حساب",
          "signUp": "تسجيل",
          "login": "تسجيل دخول",
          "myAccount": "حسابي",
          "aboutUs": "من نحن"
        },
        "home": {
          "whyGreeNatik": "لماذا جرينتك؟",
          "careAboutPlanet": "نحن نفهم أنك تهتم بالكوكب",
          "shopGuiltFree": "لهذا السبب نقدم مجموعة مختارة بعناية من المنتجات الصديقة للبيئة والمستدامة، التي تم التحقق منها بدقة للتأكد من تأثيرها البيئي والاجتماعي. تسوق بدون شعور بالذنب مع الشفافية الكاملة – تكشف الأوصاف التفصيلية عن أصل كل منتج، ومواده، والممارسات المستدامة. بالإضافة إلى ذلك، لقد ألغينا التغليف المهدر! جميع الطلبات تُشحن بمواد صديقة للبيئة وقابلة لإعادة التدوير، مما يقلل من بصمتك ويزيد من تأثيرك.",
          "viewStore": "عرض المتجر لمستقبل أكثر خضرة",
          "difficultyAcquiringMaterials": "صعوبة في الحصول على المواد؟",
          "recycleMaterials": "هل تبحث عن إعادة تدوير بقايا المواد من منتجاتك المستدامة بمسؤولية؟ نظامنا الذكي المبتكر لإعادة التدوير يربطك بنا مباشرة!",
          "easySteps": "إليك كيف تكون العملية سهلة:",
          "postMaterials": "1. انشر ما لديك! دعنا نعرف المواد المحددة التي تحتاج إلى إعادة تدويرها (مثل البلاستيك، المعادن، إلخ).",
          "waitContributors": "2. انتظر المتبرعين للتواصل معك! سيراجع الناس منشورك ويوفرون لك مباشرة.",
          "recycleEase": "3. أعد التدوير بسهولة! سنرتب خيارات استلام أو توصيل مريحة لموادك القابلة لإعادة التدوير.",
          "signUp": "سجل الآن لإنشاء منشورك الأول.",
          "wantFastCash": "هل تريد كسب المال بسرعة؟",
          "recycleRewards": "أعد التدوير واحصل على مكافآت لجهودك البيئية!",
          "findCompanies": "اعثر على الشركات التي تحتاج إلى البلاستيك، العلب، وأكثر في منطقتك.",
          "showRecycle": "سنوضح لك بالضبط ما تحتاج إلى إعادة تدويره ونقدر نقاطك. هل تملك وقتًا قصيرًا؟ قد تقوم خدمات التوصيل الشريكة بالتقاطها.",
          "earnRewards": "كسب المكافآت سهل - نشرح كل شيء بوضوح. هل تريد المزيد من الأشياء الرائعة؟ وصل إلى مستويات أعلى واستبدل النقاط في متجرك GreeNatik!",
          "winWin": "أعد التدوير بشكل صحيح، واحصل على مكافآت - إنها مكسب لك وللكوكب!",
          "makeRecyclingAwesome": "لنجعل إعادة التدوير رائعة معًا!",
          "allPosts": "جميع المنشورات",
          "ecoEnthusiast": "محب للبيئة؟",
          "recyclingMystery": "هل تشعر أن إعادة التدوير لغز؟ غير متأكد من كيفية تجهيز موادك أو أين تجد حيل التسميد؟ نحن نفهم ذلك!",
          "vibrantBlogosphere": "لدى جرينتك مدونة حيوية مخصصة لجعلك نجماً في إعادة التدوير. بغض النظر عن مستوى معرفتك بإعادة التدوير، هناك مدونة تنتظرك لتمكينك. تابعنا لإطلاق المدونة وانضم إلى المحادثة! معًا، دعنا نحول إعادة التدوير إلى مغامرة مجزية - مقال مدونة في كل مرة!",
          "goToBlogs": "اذهب إلى المدونات",
          "title": "التسوق بدون شعور بالذنب احصل على نقود من نفاياتك",
          "greenProductMarketplace": "سوق المنتجات الخضراء",
          "greenProductMarketplaceDesc": "نحن نقدم مجموعة مختارة بعناية من المنتجات الصديقة للبيئة والمستدامة والأخلاقية. كل عنصر يتم التحقق منه بدقة لأثره البيئي والاجتماعي. مع الأوصاف الشفافة، ستعرف بالضبط ما الذي تشتريه.",
          "sustainablePackagingSolutions": "حلول التعبئة المستدامة",
          "sustainablePackagingSolutionsDesc": "تخلص من الشعور بالذنب، واعتمد اللون الأخضر! نحن نستخدم الآن التغليف الصديق للبيئة والقابل لإعادة التدوير لجميع الطلبات. تسوق بثقة، مع العلم أن اختياراتك المستدامة تمتد إلى كيفية وصول منتجاتك - تقليل النفايات وزيادة الشعور الجيد.",
          "recycleRewardProgram": "برنامج إعادة التدوير والمكافآت",
          "recycleRewardProgramDesc": "شجع الناس على المشاركة في دورة حياة صديقة للبيئة من خلال توفير منصة لهم لإعادة المواد المستخدمة. في المقابل، يحصلون على نقاط لعمليات الشراء المستقبلية.",
          "inspiringBlogs": "مدونات ملهمة",
          "inspiringBlogsDesc": "تقديم ثروة من المعرفة والموارد لأي شخص مهتم بتبني نمط حياة أكثر استدامة. تشمل التحديثات المنتظمة مجموعة متنوعة من المحتوى من نصائح الحياة الصديقة للبيئة.",
          "offer":"هذا ما نقدمه لك",
          "1":"مشتري",
          "2":"شركة اعادة تصنيع",
          "3":"مدور نفايات",
          "4":"مدونات",
          "howRecyclingWorks": {
            "sectionTitle": "منهجية إعادة التدوير لدينا",
            "steps": [
              {
                "badge": "الخطوة 01",
                "title": "عرض جميع المنشورات",
                "description": "لنحوّل تلك المواد المستخدمة إلى شيء رائع! يمكننا البحث في جميع المنشورات التي تقدم موارد مختلفة. فكّر في الأمر كأنك تصفّي للعثور على المطابقة المثالية – شيء يكمل ما لديك بالفعل. بهذه الطريقة، يمكنك إحياء المنتجات من موادك المستخدمة!",
                "button": "المنشورات"
              },
              {
                "badge": "الخطوة 02",
                "title": "اختر منشورًا واملأ النموذج",
                "features": [
                  "نموذج بسيط وسهل لملء ما لديك",
                  "استجابة سريعة بعد التقديم",
                  "نحن نقدم التوصيل أو الاستلام لموادك"
                ]
              },
              {
                "badge": "الخطوة 03",
                "title": "احصل على نقاطك وتنافس مع الآخرين",
                "description": "احصل على مكافآت في GreeNatik! كل مادة مستخدمة تمنحك نقاطًا. اجمعها واستبدلها بخصومات في متجرنا! تنافس مع محبي إعادة التدوير على لوحات الصدارة – قد تصبح بطل GreeNatik! انضم إلى الثورة الإبداعية، وفر المال، أنقذ الكوكب!",
                "button": "لوحة الصدارة"
              }
            ]
          }
        },
        "wishlistTable": {
          "title": "قائمة الأمنيات ",
          "description": "لديك {{count}} عناصر في قائمة الأمنيات الخاصة بك.",
          "product": "المنتج",
          "price": "السعر",
          "status": "الحالة",
          "actions": "الإجراءات",
          "remove": "إزالة",
          "inStock": "متوفر",
          "outOfStock": "غير متوفر",
          "addToCart": "أضف إلى السلة",
          "delete": "حذف",
          "outOfStockMessage": "هذا المنتج غير متوفر ولا يمكن إضافته إلى السلة.",
          "now": "الآن",
          "close": "إغلاق"
        }
        ,
          "breadcrumb": {
            "home": "الصفحة الرئيسية",
            "shop": "المتجر",
            "myWishlist": "قائمة الرغبات الخاصة بي"

          }
        ,  "checkout": {
          "title": "الدفع",
          "alreadyHaveAccount": "هل لديك حساب بالفعل؟",
          "signIn": "تسجيل الدخول",
          "shopCheckout":"الدفع"
        },
        
        "breadcrumb1": {
          "home": "الرئيسية",
          "shop": "المتجر",
          "shopCheckout": "الدفع"
        },
        "address": {
          "addDeliveryAddress": "أضف عنوان التسليم",
          "addAddress": "أضف عنوان",
          "newShippingAddress": "عنوان الشحن الجديد",
          "addNewShippingAddress": "أضف عنوان الشحن الجديد لتوصيل طلبك.",
          "firstName": "الاسم الأول",
          "lastName": "اسم العائلة",
          "addressLine1": "العنوان 1",
          "addressLine2": "العنوان 2",
          "city": "المدينة",
          "country": "البلد",
          "state": "المنطقة",
          "zipCode": "الرمز البريدي",
          "businessName": "اسم العمل",
          "setDefault": "تعيين كافتراضي",
          "cancel": "إلغاء",
          "saveAddress": "حفظ العنوان",
          "deleteAddress": "حذف العنوان",
          "areYouSureDelete": "هل أنت متأكد أنك تريد حذف هذا العنوان؟",
          "selectCountry": "اختر البلد",
          "selectState": "اختر المنطقة",
          "homeType": "المنزل",
          "officeType": "المكتب",
          "defaultAddress": "العنوان الافتراضي",
          "delete": "حذف",
          "pleaseFillAllFields": "يرجى ملء جميع الحقول."
        },"deliveryInstructions": {
          "title": "تعليمات التوصيل",
          "label": "تعليمات التوصيل",
          "placeholder": "اكتب تعليمات التوصيل",
          "helpText": "أضف تعليمات حول كيفية تسوق وتسليم طلبك",
          "nextButton": "التالي"
        },
        "discount": {
          "title": "خصم",
          "usePoints": "استخدام النقاط",
          "discountAmount": "مبلغ الخصم",
          "totalPoints": "مجموع النقاط",
          "pointsToUse": "النقاط المراد استخدامها",
          "applyButton": "تطبيق الخصم",
          "notification": "النقاط المدخلة تتجاوز النقاط المتاحة!",
          "errorEmptyPoints": "يرجى إدخال النقاط لاستخدامها في الخصم.",
          "errorZeroPoints": "يرجى تحديد النقاط لاستخدامها في الخصم.",
          "errorNoPoints": "لا توجد نقاط متاحة."
        },
        
           "Checkout2":{
            "button1":"تقديم الطلب...",
            "button2":"تقديم الطلب",
            "setErrorMessage1":"فشل في تقديم الطلب",
            "setErrorMessage2":":تم تقديم الطلب بنجاح. رقم الطلب"

          },
        "order": {
          "title": "تفاصيل الطلب",
          "unnamedItem": "عنصر بدون اسم",
          "noDescription": "لا يوجد وصف",
          "itemSubtotal": "إجمالي العناصر",
          "serviceFee": "رسوم الخدمة",
          "subTotal": "الإجمالي الفرعي",
          "totalAfterDiscount": "الإجمالي بعد الخصم"
        },"payment": {
          "title": "طريقة الدفع",
          "paypal": "الدفع بواسطة PayPal",
          "paypalDescription": "سيتم إعادة توجيهك إلى موقع PayPal لإكمال عملية الشراء بأمان.",
          "creditCard": "بطاقة الائتمان / الخصم",
          "creditCardDescription": "نقل الأموال بأمان باستخدام حسابك المصرفي. نحن ندعم Mastercard, Visa, Discover, و Stripe.",
          "payoneer": "الدفع بواسطة Payoneer",
          "payoneerDescription": "سيتم إعادة توجيهك إلى موقع Payoneer لإكمال عملية الشراء بأمان.",
          "cashOnDelivery": "الدفع عند التسليم",
          "cashOnDeliveryDescription": "الدفع نقدًا عند استلام طلبك.",
          "cardNumberLabel": "رقم البطاقة",
          "cardNumberRequired": "رقم البطاقة مطلوب",
          "cardNumberInvalid": "رقم البطاقة غير صالح",
          "cardNameLabel": "الاسم على البطاقة",
          "cardNameRequired": "الاسم على البطاقة مطلوب",
          "cardNamePlaceholder": "أدخل اسمك الأول",
          "expiryDateLabel": "تاريخ الانتهاء",
          "expiryDateRequired": "تاريخ الانتهاء مطلوب",
          "selectDate": "اختر التاريخ",
          "cvvLabel": "رمز CVV",
          "cvvRequired": "رمز CVV مطلوب",
          "cvvInvalid": "رمز CVV غير صالح",
          "selectPaymentMethodWarning": "يرجى اختيار طريقة الدفع",
          "prevButton": "السابق"
        },"Footer":{
          "categories": "الفئات",
          "foodware": "أدوات الطعام",
          "laundry": "الغسيل",
          "pets": "الحيوانات الأليفة",
          "electronics": "الإلكترونيات",
          "home": "المنزل",
          "skincare": "العناية بالبشرة",
          "clothing": "الملابس",
          "office": "المكتب",
          "get_to_know_us": "تعرف علينا",
          "company": "الشركة",
          "about": "حول",
          "blog": "المدونة",
          "for_consumers": "للمستهلكين",
          "donate_for_recycling": "التبرع لإعادة التدوير",
          "shipping": "الشحن",
          "product_returns": "إرجاع المنتجات",
          "shop_checkout": "إتمام الشراء",
          "become_a_shopper": "كن متسوقًا",
          "shopper_opportunities": "فرص المتسوقين",
          "earnings": "الأرباح",
          "ideas_guides": "الأفكار والإرشادات",
          "new_retailers": "تجار التجزئة الجدد",
          "greenatik_programs": "برامج جريناتيك",
          "delivery": "التوصيل",
          "recycling": "إعادة التدوير",
          "points": "النقاط",
          "payment_partners": "شركاء الدفع",
          "follow_us_on": "تابعنا على",
          "all_rights_reserved": "جميع الحقوق محفوظة"
        }, "orderList": {
          "order": "طلب",
          "status": "الحالة",
          "product": "المنتج",
          "date": "التاريخ",
          "quantity": "الكمية",
          "price": "السعر",
          "totalAmount": "المبلغ الإجمالي", "delivered": "تم التوصيل",
          "notDelivered": "لم يتم التوصيل",
        }
      
      }
    }
  },
  lng: getDefaultLanguage(), // Set the initial language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

// Listen for language change and store the new language in localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
