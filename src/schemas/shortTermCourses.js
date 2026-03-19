export const shortTermItemListSchema = {
 "@context": "https://schema.org",
 "@type": "ItemList",
 "name": "Short-Term Logistics Courses — Logistics Gurukul",
 "url": "https://www.logisticsgurukul.com/short-term-courses",
 "itemListElement": [
   {
     "@type": "ListItem", "position": 1,
     "item": {
       "@type": "Course",
       "name": "Diploma in Procurement and Inventory Management",
       "description": "3-month program covering procurement, supplier selection, stock planning, cost control, and warehousing basics.",
       "provider": { "@type": "EducationalOrganization", "@id": "https://www.logisticsgurukul.com/#organization" },
       "timeToComplete": "P3M",
       "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "onsite" }
     }
   },
   {
     "@type": "ListItem", "position": 2,
     "item": {
       "@type": "Course",
       "name": "Diploma in Export and Import Management",
       "description": "3-month course: export-import procedures, trade documents, customs clearance, and payment methods.",
       "provider": { "@type": "EducationalOrganization", "@id": "https://www.logisticsgurukul.com/#organization" },
       "timeToComplete": "P3M",
       "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "onsite" }
     }
   },
   {
     "@type": "ListItem", "position": 3,
     "item": {
       "@type": "Course",
       "name": "Diploma in Shipping Documentation",
       "description": "3-month course: commercial invoices, bills of lading, packing lists, customs docs, Incoterms.",
       "provider": { "@type": "EducationalOrganization", "@id": "https://www.logisticsgurukul.com/#organization" },
       "timeToComplete": "P3M",
       "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "onsite" }
     }
   },
   {
     "@type": "ListItem", "position": 4,
     "item": {
       "@type": "Course",
       "name": "Diploma in Air Cargo Management",
       "description": "3-month course: air freight operations, airway bills, cargo and customs basics.",
       "provider": { "@type": "EducationalOrganization", "@id": "https://www.logisticsgurukul.com/#organization" },
       "timeToComplete": "P3M",
       "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "onsite" }
     }
   },
   {
     "@type": "ListItem", "position": 5,
     "item": {
       "@type": "Course",
       "name": "Diploma in Hazardous Goods Management",
       "description": "3-month course: hazard classification, labelling, packing, and safety regulations for dangerous materials.",
       "provider": { "@type": "EducationalOrganization", "@id": "https://www.logisticsgurukul.com/#organization" },
       "timeToComplete": "P3M",
       "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "onsite" }
     }
   }
 ]
};

export const shortTermBreadcrumbSchema = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
   { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.logisticsgurukul.com/" },
   { "@type": "ListItem", "position": 2, "name": "Courses", "item": "https://www.logisticsgurukul.com/short-term-courses" },
   { "@type": "ListItem", "position": 3, "name": "Short-Term Logistics Courses", "item": "https://www.logisticsgurukul.com/short-term-courses" }
 ]
};
