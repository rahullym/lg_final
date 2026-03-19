export const organizationSchema = {
 "@context": "https://schema.org",
 "@type": "EducationalOrganization",
 "@id": "https://www.logisticsgurukul.com/#organization",
 "name": "Logistics Gurukul",
 "url": "https://www.logisticsgurukul.com",
 "logo": "https://www.logisticsgurukul.com/logo.png",
 "description": "Kerala's first logistics institute offering a 1-year Diploma in International Logistics with 6 months of paid on-the-job training. ISO 9001:2015 certified. Located in Edappally, Kochi.",
 "telephone": "+917994446019",
 "email": "enquiry@logisticsgurukul.com",
 "address": {
   "@type": "PostalAddress",
   "streetAddress": "1st Floor, Profnet Plaza, Edappally",
   "addressLocality": "Kochi",
   "addressRegion": "Kerala",
   "postalCode": "682025",
   "addressCountry": "IN"
 },
 "sameAs": [
   "https://www.facebook.com/logisticsgurukulkochi/",
   "https://www.instagram.com/logisticsgurukul",
   "https://www.youtube.com/@LogisticsGurukul2025"
 ],
 "hasOfferCatalog": {
   "@type": "OfferCatalog",
   "name": "Logistics Courses",
   "itemListElement": [
     {
       "@type": "Offer",
       "itemOffered": {
         "@type": "Course",
         "name": "Diploma in International Logistics & Freight Management",
         "url": "https://www.logisticsgurukul.com/diploma-international-logistics"
       }
     },
     {
       "@type": "Offer",
       "itemOffered": {
         "@type": "Course",
         "name": "Short-Term Logistics Courses",
         "url": "https://www.logisticsgurukul.com/short-term-courses"
       }
     }
   ]
 }
};

export const localBusinessSchema = {
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 "@id": "https://www.logisticsgurukul.com/#localbusiness",
 "name": "Logistics Gurukul",
 "image": "https://www.logisticsgurukul.com/logo.png",
 "url": "https://www.logisticsgurukul.com",
 "telephone": "+917994446019",
 "email": "enquiry@logisticsgurukul.com",
 "priceRange": "₹₹",
 "address": {
   "@type": "PostalAddress",
   "streetAddress": "1st Floor, Profnet Plaza, Edappally, Mamangalam",
   "addressLocality": "Kochi",
   "addressRegion": "Kerala",
   "postalCode": "682025",
   "addressCountry": "IN"
 },
 "geo": {
   "@type": "GeoCoordinates",
   "latitude": 10.0159,
   "longitude": 76.3087
 },
 "openingHoursSpecification": [{
   "@type": "OpeningHoursSpecification",
   "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
   "opens": "09:00",
   "closes": "18:00"
 }],
 "hasMap": "https://maps.google.com/?q=Profnet+Plaza+Edappally+Kochi"
};

export const homeBreadcrumbSchema = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
   { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.logisticsgurukul.com/" }
 ]
};
