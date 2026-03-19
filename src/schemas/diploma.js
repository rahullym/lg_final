export const courseSchema = {
 "@context": "https://schema.org",
 "@type": "Course",
 "name": "Diploma in International Logistics & Freight Management",
 "description": "Kerala's only 1-year Diploma in International Logistics featuring 4 months of classroom training, 1 month internship, 1 month product training, and 6 months of paid on-the-job training. Globally recognized STED Council certification.",
 "url": "https://www.logisticsgurukul.com/diploma-international-logistics",
 "provider": {
   "@type": "EducationalOrganization",
   "@id": "https://www.logisticsgurukul.com/#organization",
   "name": "Logistics Gurukul",
   "url": "https://www.logisticsgurukul.com"
 },
 "educationalCredentialAwarded": "Diploma — STED Council Certified (Recognized in 150+ Countries)",
 "timeToComplete": "P1Y",
 "occupationalCategory": "Logistics, Supply Chain Management, Freight Forwarding",
 "inLanguage": "en",
 "hasCourseInstance": {
   "@type": "CourseInstance",
   "courseMode": "onsite",
   "location": {
     "@type": "Place",
     "name": "Logistics Gurukul",
     "address": {
       "@type": "PostalAddress",
       "streetAddress": "1st Floor, Profnet Plaza, Edappally",
       "addressLocality": "Kochi",
       "addressRegion": "Kerala",
       "postalCode": "682025",
       "addressCountry": "IN"
     }
   }
 },
 "teaches": [
   "International Logistics", "Freight Management", "Supply Chain Management",
   "Cargo Packaging", "Warehouse Management", "Dangerous Goods Handling",
   "Air Cargo Operations", "Shipping Documentation", "AI in Logistics", "IT Operations"
 ],
 "offers": {
   "@type": "Offer",
   "url": "https://www.logisticsgurukul.com/diploma-international-logistics",
   "availability": "https://schema.org/InStock",
   "validFrom": "2026-01-01"
 }
};

export const diplomaBreadcrumbSchema = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
   { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.logisticsgurukul.com/" },
   { "@type": "ListItem", "position": 2, "name": "Courses", "item": "https://www.logisticsgurukul.com/diploma-international-logistics" },
   { "@type": "ListItem", "position": 3, "name": "Diploma in International Logistics & Freight Management", "item": "https://www.logisticsgurukul.com/diploma-international-logistics" }
 ]
};
