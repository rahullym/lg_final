export const aboutPageSchema = {
 "@context": "https://schema.org",
 "@type": "AboutPage",
 "name": "About Logistics Gurukul — Kerala's Premier Logistics Institute",
 "url": "https://www.logisticsgurukul.com/about",
 "description": "ISO 9001:2015 certified logistics training institute in Kochi. Kerala's first immersive logistics diploma with paid on-the-job training.",
 "mainEntity": {
   "@type": "EducationalOrganization",
   "@id": "https://www.logisticsgurukul.com/#organization",
   "name": "Logistics Gurukul",
   "foundingDate": "2023",
   "legalName": "Edify Logiwise Solutions Pvt Ltd",
   "description": "Kerala's first logistics institute with 1-year Diploma + 6 months paid OJT. ISO 9001:2015 & STED Council certified.",
   "award": "ISO 9001:2015 Certified",
   "numberOfEmployees": { "@type": "QuantitativeValue", "value": 20 },
   "alumni": { "@type": "QuantitativeValue", "description": "20,000+ students trained" }
 }
};

export const thrissurLocalBusinessSchema = {
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 "name": "Logistics Gurukul — Alive Academy (Thrissur)",
 "url": "https://www.logisticsgurukul.com/about",
 "telephone": "+919400828186",
 "email": "info@aliveacademy.co.in",
 "address": {
   "@type": "PostalAddress",
   "streetAddress": "1st Floor, EVU Complex, Near Govt. Hospital, Peechi Road (Jn), Pattikkad (P.O)",
   "addressLocality": "Thrissur",
   "addressRegion": "Kerala",
   "postalCode": "680652",
   "addressCountry": "IN"
 }
};

export const aboutBreadcrumbSchema = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
   { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.logisticsgurukul.com/" },
   { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.logisticsgurukul.com/about" }
 ]
};
