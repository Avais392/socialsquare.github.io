import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { SquareCode, BrainCircuit, Code, DatabaseZap, MessageSquare, Users, Zap, Mail, Linkedin, MessageCircle, CalendarDays, Moon, Sun, ChevronLeft, ChevronRight, ExternalLink, Filter, Search, CheckCircle, Briefcase, Target, BarChart2, Lightbulb, Share2, Settings, Cloud, Bot as BotIconLucide, Globe, Server, HeartPulse, PawPrint, ShoppingCart, Smartphone, ShieldCheck, Activity, Package, BookOpen, LinkIcon, ArrowRight, Clock, UsersRound, Palette, TrendingUp, Sparkles, X, Send, User as UserIconLucide, RefreshCw } from 'lucide-react'; 

// --- FEATURE FLAG ---
const enableRecruitmentBot = false; // Set to true to enable the "Let's Build Together" bot page

/*
SEO & General Best Practices Notes:

1. Meta Tags in `public/index.html`:
   - Ensure your `public/index.html` file has:
     <title>SOCIALSQUARE - AI & IT Solutions for Workflow Optimization</title>
     <meta name="description" content="SOCIALSQUARE: Driving business growth with innovative IT solutions, AI automation, and expert workflow optimization. Partner with us for cutting-edge technology and creative strategies.">
     <meta name="keywords" content="digital agency, IT solutions, AI automation, workflow optimization, custom software, SOCIALSQUARE, AI development, tech agency, business automation, digital transformation">
     // Open Graph (Facebook, LinkedIn, etc.)
     <meta property="og:title" content="SOCIALSQUARE - AI & IT Solutions" />
     <meta property="og:description" content="Innovative IT solutions, AI automation, and workflow optimization to elevate your business." />
     <meta property="og:image" content="https://socialsquare.pk/og-image.jpg" /> // Replace with your actual OG image URL
     <meta property="og:url" content="https://socialsquare.pk" /> // Replace with your actual domain
     <meta property="og:type" content="website" />
     // Twitter Card
     <meta name="twitter:card" content="summary_large_image" />
     <meta name="twitter:title" content="SOCIALSQUARE - AI & IT Solutions" />
     <meta name="twitter:description" content="Innovative IT solutions, AI automation, and workflow optimization." />
     <meta name="twitter:image" content="https://socialsquare.pk/twitter-card-image.jpg" /> // Replace with your actual Twitter image URL
     // <meta name="twitter:site" content="@YourTwitterHandle" /> // Optional: Your Twitter handle


2. Content is King for SEO:
   - Replace all placeholder text with high-quality, keyword-rich, and user-focused content.
   - Use relevant H1-H6 tags to structure content logically.

3. Accessibility (A11y):
   - Ensure all images have descriptive alt text.
   - All interactive elements should be keyboard navigable and have clear focus states.
   - Use ARIA attributes where necessary to enhance semantic meaning for assistive technologies.

4. Performance:
   - Optimize all images (compression, modern formats like WebP).
   - Consider code splitting and lazy loading for larger components/routes if the app grows.

5. SSR/Prerendering for SPAs (Advanced):
   - For optimal SEO, especially for content-heavy SPAs, consider Server-Side Rendering (e.g., with Next.js) or Prerendering solutions. This helps search engines crawl content more effectively than purely client-side rendered apps.

6. Sitemap & Robots.txt:
   - Once live, create and submit a `sitemap.xml` to search engines.
   - Configure a `robots.txt` file to guide crawlers.
*/


// Mock Data
const portfolioItemsData = [
  {
    id: 'ai-chatbot-automation',
    title: "AI Customer Service Bot",
    category: "AI Bots",
    client: "E-commerce Giant", 
    industry: "Retail Tech", 
    services: ["AI Automation", "NLP Development"], 
    timeline: "4 Months", 
    image: "https://placehold.co/600x400/1A202C/E2E8F0?text=AI+Chatbot+Project",
    stack: ["Python", "Dialogflow", "Node.js", "Google Cloud AI"],
    description: "We revolutionized customer support for a major e-commerce platform using an AI-powered chatbot, reducing response times by 70%.",
    overview: "Our team developed a state-of-the-art AI chatbot to handle high volumes of customer inquiries for a leading e-commerce platform, significantly improving efficiency and customer satisfaction.",
    goal: "To automate customer inquiries and improve response efficiency, while maintaining a high level of customer satisfaction and freeing up human agents for complex issues.",
    challenge: "Handling a high volume of diverse customer queries 24/7, understanding nuanced language, and seamlessly escalating issues to human agents when necessary.",
    strategy: "We developed a sophisticated Natural Language Processing (NLP) model integrated with Dialogflow. The bot was meticulously trained on historical customer service data and designed with advanced intent recognition and context management. A key part of our strategy was creating a seamless handover protocol to human agents for complex or sensitive queries, ensuring a consistent user experience.",
    keyFeatures: [ 
        { text: "Advanced NLP for intent recognition", Icon: BrainCircuit },
        { text: "24/7 automated support", Icon: Clock },
        { text: "Seamless human agent escalation", Icon: UsersRound },
        { text: "Personalized response generation", Icon: Palette },
    ],
    visuals: ["https://placehold.co/800x450/334155/E2E8F0?text=Chatbot+Interface", "https://placehold.co/800x450/334155/E2E8F0?text=Integration+Flowchart", "https://placehold.co/800x450/334155/E2E8F0?text=Performance+Dashboard"],
    results: "Achieved a 70% reduction in average customer response time. Decreased human agent workload for routine queries by 40%. Resulted in a 25% increase in customer satisfaction scores related to support interactions.",
  },
  {
    id: 'workflow-optimization-platform',
    title: "Enterprise Workflow Optimizer",
    category: "Workflow Tools",
    client: "Logistics Corp",
    industry: "Supply Chain & Logistics",
    services: ["Custom Software Development", "Process Automation"],
    timeline: "9 Months",
    image: "https://placehold.co/600x400/1A202C/E2E8F0?text=Workflow+Platform",
    stack: ["React", "Django", "PostgreSQL", "AWS", "Docker"],
    description: "A custom platform our team built for a logistics company to streamline their supply chain management and automate repetitive tasks.",
    overview: "We engineered a bespoke enterprise platform that modernized supply chain operations for a major logistics firm, introducing significant automation and efficiency gains.",
    goal: "To create a centralized, intuitive platform for managing and optimizing complex logistical workflows, integrating legacy systems, and reducing manual data entry.",
    challenge: "Integrating multiple disparate legacy systems with varying data formats. Designing a user-friendly interface for non-technical staff to manage complex workflows. Ensuring high availability and scalability for critical operations.",
    strategy: "A modular, microservices-based architecture was implemented on AWS for scalability and resilience. Custom APIs were developed by our team to bridge legacy systems. The frontend was built with React for a responsive and intuitive user experience. AI-driven predictive analytics were incorporated for route optimization and demand forecasting.",
    keyFeatures: [
        { text: "Modular microservices architecture", Icon: Settings },
        { text: "AI-powered predictive analytics", Icon: Lightbulb },
        { text: "Intuitive drag-and-drop workflow builder", Icon: Share2 },
        { text: "Real-time tracking and reporting", Icon: BarChart2 },
    ],
    visuals: ["https://placehold.co/800x450/334155/E2E8F0?text=Platform+Dashboard+View", "https://placehold.co/800x450/334155/E2E8F0?text=Workflow+Editor+Screenshot", "https://placehold.co/800x450/334155/E2E8F0?text=System+Architecture+Diagram"],
    results: "Delivered a 30% improvement in overall operational efficiency. Achieved 99.9% system uptime, critical for logistics. Significantly reduced manual data entry errors and associated costs.",
  },
  {
    id: 'custom-web-platform',
    title: "Interactive E-learning Hub",
    category: "Web Platforms",
    client: "EduGrowth Inc.",
    industry: "Education Technology",
    services: ["Web Platform Development", "UI/UX Design"],
    timeline: "7 Months",
    image: "https://placehold.co/600x400/1A202C/E2E8F0?text=E-Learning+Hub",
    stack: ["Next.js", "Firebase", "Stripe API", "Tailwind CSS"],
    description: "Our agency developed a feature-rich e-learning platform with interactive courses, progress tracking, and community features.",
    overview: "We created a dynamic and engaging e-learning hub, providing users with interactive courses, robust progress tracking, and vibrant community features to enhance the learning experience.",
    goal: "To provide an engaging, accessible, and scalable online learning experience for a diverse user base, incorporating secure payments and community interaction.",
    challenge: "Ensuring platform scalability to accommodate a rapidly growing number of users and courses. Integrating a secure and seamless payment system. Designing an intuitive and motivating user interface to encourage course completion.",
    strategy: "Our team utilized Next.js for optimal performance through server-side rendering and static site generation. Firebase was chosen for its real-time database capabilities and robust authentication. Stripe integration ensured secure payment processing. Gamification elements and a carefully designed UI/UX were implemented to boost user engagement and motivation.",
     keyFeatures: [
        { text: "Interactive course modules", Icon: Lightbulb },
        { text: "Personalized learning paths", Icon: Share2 },
        { text: "Secure payment integration (Stripe)", Icon: ShieldCheck },
        { text: "Community forums & discussion groups", Icon: UsersRound },
    ],
    visuals: ["https://placehold.co/800x450/334155/E2E8F0?text=Course+Catalog+Page", "https://placehold.co/800x450/334155/E2E8F0?text=User+Progress+Dashboard", "https://placehold.co/800x450/334155/E2E8F0?text=Community+Forum+Mockup"],
    results: "Achieved a 50% increase in course completion rates. Saw a 200% growth in the user base within the first six months. Received overwhelmingly positive feedback on user experience and platform intuitiveness.",
  },
  {
    id: 'pukaar-mental-health',
    title: "Pukaar - Mental Health Platform",
    category: "Health Tech",
    client: "Pukaar Initiative",
    industry: "Healthcare Technology",
    services: ["Mobile App Development", "Platform Architecture"],
    timeline: "Ongoing Development",
    image: "https://placehold.co/600x400/1A202C/FBCFE8?text=Pukaar+Platform", 
    stack: ["React Native", "Firebase", "Video/Chat APIs", "Agora SDK"],
    description: "We architected a mental health platform for secure therapist-patient interactions (chat, audio, video), mood tracking, and scheduling.",
    overview: "Our team designed and implemented the core architecture for Pukaar, a vital mental health platform enabling secure and private interactions between therapists and patients, alongside tools for mood monitoring and session management.",
    goal: "To facilitate secure and accessible mental health support through a comprehensive digital platform, featuring mood diaries, session scheduling, and payment systems with strict privacy protocols.",
    challenge: "Ensuring HIPAA-level patient data privacy across all communication channels and data storage. Maintaining platform scalability for concurrent user sessions and growing data volumes. Creating an intuitive, empathetic user experience for individuals seeking mental health support.",
    strategy: "A solution architecture was designed by our team with a strong emphasis on secure communication channels (end-to-end encrypted chat, audio, video via Agora SDK). We developed distinct modules for mood diary entries, session scheduling, and integrated payment processing, all adhering to stringent privacy protocols. A centralized patient history module was built with interactive mood trend visualizations. The system was architected for scalability and responsiveness from the ground up.",
    keyFeatures: [
        { text: "Secure E2EE chat, audio & video calls", Icon: ShieldCheck },
        { text: "Interactive mood diary & trend analysis", Icon: HeartPulse },
        { text: "Confidential session scheduling", Icon: CalendarDays },
        { text: "Centralized patient history module", Icon: Briefcase },
    ],
    visuals: ["https://placehold.co/800x450/334155/FBCFE8?text=Pukaar+App+Interface", "https://placehold.co/800x450/334155/FBCFE8?text=Mood+Tracking+Feature", "https://placehold.co/800x450/334155/FBCFE8?text=Therapist+Dashboard+Mockup"],
    results: "Successfully ensured platform scalability and responsiveness, supporting numerous concurrent sessions. Implemented robust privacy and security protocols for all patient data and interactions, building user trust.",
  },
  {
    id: 'vetmap-vet-docs',
    title: "VetMap - Veterinary Documentation",
    category: "Veterinary Tech",
    client: "University Veterinary Research Dept.",
    industry: "Animal Health & Research",
    services: ["Mobile App Development", "Data Visualization"],
    timeline: "6 Months (Phase 1)",
    image: "https://placehold.co/600x400/1A202C/D9F99D?text=VetMap+App", 
    stack: ["React Native", "SQLite", "University DB API", "Chart.js"],
    description: "Our team developed a cross-platform mobile app for veterinarians to efficiently document, analyze, and visualize tumor data, integrating with university databases.",
    overview: "VetMap is a specialized cross-platform mobile application our team developed to empower veterinarians with tools for efficient tumor data documentation, photo annotation, and insightful data analysis through university database integration.",
    goal: "To provide veterinarians with a mobile-first tool for efficient tumor data documentation, including photo annotation, and to facilitate data-driven diagnostics through integration with university databases and visualization of trends.",
    challenge: "Architecting seamless and secure integration with existing university databases while maintaining data integrity and compliance. Designing effective data validation tools for specialized veterinary data. Creating clear, actionable visualizations from complex datasets to aid in diagnostics and research.",
    strategy: "We architected and developed a cross-platform mobile application using React Native for broad device compatibility. Our team implemented features for detailed tumor data entry, including photo annotation capabilities. Robust data validation tools were designed to ensure data accuracy. The application was integrated with university databases via a secure API for comprehensive data access. Visualization modules using Chart.js were developed to present data trends, thereby improving diagnostic capabilities and research insights.",
    keyFeatures: [
        { text: "Cross-platform mobile data entry", Icon: Smartphone },
        { text: "Photo annotation for tumor documentation", Icon: Palette },
        { text: "Secure university database integration", Icon: DatabaseZap },
        { text: "Trend visualization for diagnostics", Icon: TrendingUp },
    ],
    visuals: ["https://placehold.co/800x450/334155/D9F99D?text=VetMap+Data+Entry", "https://placehold.co/800x450/334155/D9F99D?text=Tumor+Data+Viz", "https://placehold.co/800x450/334155/D9F99D?text=Annotation+Tool"],
    results: "Enabled significantly more efficient and accurate documentation of tumor data in field settings. Provided valuable data visualizations, enhancing diagnostic precision and supporting ongoing veterinary research efforts.",
  },
  {
    id: 'agribazaar-agri-marketplace',
    title: "AgriBazaar - Agriculture Marketplace",
    category: "AgriTech",
    client: "AgriBazaar Initiative",
    industry: "Agriculture Technology",
    services: ["Mobile App Development", "Platform Development"],
    timeline: "12 Months",
    image: "https://placehold.co/600x400/1A202C/FEF08A?text=AgriBazaar+App", 
    stack: ["React Native", "Firebase", "Node.js", "Google Maps API"],
    description: "Our agency designed and implemented a mobile marketplace connecting farmers, vendors, and wholesalers, featuring listing, bidding, and integrated logistics.",
    overview: "AgriBazaar is a comprehensive mobile marketplace our team designed and implemented to connect farmers, vendors, and wholesalers. The platform streamlines agricultural transactions through features like product listings, a bidding system, and integrated logistics.",
    goal: "To streamline agricultural transactions and logistics by creating a comprehensive mobile marketplace for farmers, vendors, and wholesalers, including systems for listing/bidding, logistics management, and secure payments.",
    challenge: "Developing a dynamic, fair, and transparent listing and bidding system for diverse agricultural products. Integrating a reliable logistics management feature for product shipping across varied locations. Implementing real-time notifications for bids, purchases, and logistics updates, and architecting a secure payment and transaction tracking system.",
    strategy: "We designed and implemented a mobile-first marketplace using React Native to connect various agricultural stakeholders. A robust listing and bidding system was developed by our team to facilitate buying, selling, and pre-booking of agricultural products. Logistics management was integrated, enabling users to book transport for purchased goods directly within the app using Google Maps API for routing. Real-time notifications via Firebase Cloud Messaging and alerts for bids, purchases, and logistics updates were implemented. The system was architected to support secure payments and track all transactions for accountability.",
    keyFeatures: [
        { text: "Mobile-first marketplace for agri-products", Icon: ShoppingCart },
        { text: "Real-time listing and bidding system", Icon: Activity },
        { text: "Integrated logistics and ride booking", Icon: Package },
        { text: "Secure payment and transaction tracking", Icon: ShieldCheck },
    ],
    visuals: ["https://placehold.co/800x450/334155/FEF08A?text=AgriBazaar+App+UI", "https://placehold.co/800x450/334155/FEF08A?text=Bidding+System", "https://placehold.co/800x450/334155/FEF08A?text=Logistics+Tracking"],
    results: "Successfully connected thousands of farmers, vendors, and wholesalers, significantly streamlining agricultural trade. Implemented secure payment and real-time notification systems, enhancing user trust, engagement, and transaction efficiency.",
  },
  {
    id: 'makro-pro-mobile-b2b',
    title: "Mobile B2B Platform Solutions (Makro PRO)",
    category: "B2B E-commerce",
    client: "Makro PRO",
    industry: "Wholesale & Retail",
    services: ["Mobile App Development", "CI/CD Automation", "Security Architecture"],
    timeline: "Ongoing (Sr. Software Engineer Role - Agency Contribution)",
    image: "https://placehold.co/600x400/1A202C/7DD3FC?text=Makro+PRO+Mobile", 
    stack: ["React Native", "Bitrise", "Fastlane", "Doppler", "OCR Tech", "Secure WebViews"],
    description: "Our team contributed to mobile engineering efforts for Makro PRO's B2B platform, focusing on secure CI/CD pipelines, robust session management, and innovative OCR features.",
    overview: "As part of our engagement with Makro PRO, our mobile engineering team spearheaded initiatives for their B2B platform. Our focus was on establishing secure CI/CD pipelines, architecting robust session management between mobile and web-views, and delivering innovative features like OCR.",
    goal: "To enhance the mobile experience for Makro PRO's B2B marketplace users by establishing secure and efficient deployment pipelines, architecting secure data flows, and delivering value-added features like OCR for improved operational efficiency.",
    challenge: "Ensuring robust data security in mobile-webview interactions to prevent token leaks. Reducing deployment times for a rapidly evolving platform through automation. Integrating complex functionalities like OCR seamlessly into the existing user experience and backend systems.",
    strategy: "Our team established secure CI/CD pipelines using Bitrise and Fastlane, integrated with Doppler for dynamic configuration management. A key achievement was architecting secure session flows between the mobile app and web-views, mitigating token leak risks. We also led the development and delivery of OCR-based functionality to boost user engagement and streamline operations. This involved configuring automated test pipelines and scheduled Git tags for daily builds to ensure code stability.",
    keyFeatures: [
        { text: "Secure CI/CD with Bitrise & Fastlane", Icon: Settings },
        { text: "Robust mobile-webview session security", Icon: ShieldCheck },
        { text: "OCR for operational efficiency", Icon: Search },
        { text: "Automated testing & daily builds", Icon: CheckCircle },
    ],
    visuals: ["https://placehold.co/800x450/334155/7DD3FC?text=Makro+App+Flow", "https://placehold.co/800x450/334155/7DD3FC?text=CI/CD+Pipeline", "https://placehold.co/800x450/334155/7DD3FC?text=OCR+Feature"],
    results: "Significantly reduced deployment times through CI/CD automation. Enhanced data security for mobile users, particularly in webview interactions. Successfully launched OCR features that boosted user engagement and operational efficiency. Ensured consistent code stability and reliability through automated testing and daily build processes.",
  },
  {
    id: 'aimfit-fitness-app',
    title: "Real-Time Fitness & Community App (Aimfit)",
    category: "Health & Fitness",
    client: "Aimfit",
    industry: "Health, Wellness & Fitness",
    services: ["Mobile App Development", "Real-time Features", "Platform Migration"],
    timeline: "2 Years (Agency Contribution)",
    image: "https://placehold.co/600x400/1A202C/F472B6?text=Aimfit+App", 
    stack: ["React Native", "TypeScript", "Firebase", "MUX/Zoom SDK", "Bitrise", "Fastlane"],
    description: "Our agency engineered real-time features for Aimfit's women's fitness app, including workout streaming, nutrition tracking, and community engagement tools, significantly boosting user metrics.",
    overview: "SOCIALSQUARE played a key role in engineering core real-time features for Aimfit's women-centric fitness application. This included live workout streaming, nutrition tracking, and community engagement tools, all contributing to significant boosts in user activity and retention.",
    goal: "To significantly increase user engagement and retention on the Aimfit platform by designing and implementing compelling real-time interactive features, improving overall code maintainability through migration to TypeScript, and streamlining the app release process.",
    challenge: "Integrating multiple real-time services (live streaming, chat, leaderboards) to function smoothly and reliably. Managing the complexities of migrating a substantial existing codebase to TypeScript while ensuring minimal disruption. Efficiently handling cross-platform app deployments to Play Store and App Store.",
    strategy: "Our team designed and implemented key real-time features including workout streaming (using MUX & Zoom SDKs), comprehensive nutrition tracking, an interactive community chat, and dynamic leaderboards. A major initiative led by our agency was the migration of the app to TypeScript, employing modular design patterns for improved maintainability and scalability. We also implemented Firebase Dynamic Links and Push Notifications to enhance user re-engagement. Furthermore, our experts defined and managed CI/CD pipelines using Bitrise and Fastlane, which streamlined cross-platform releases. This involved close collaboration with Aimfit's cross-functional teams to drive data-informed optimizations.",
    keyFeatures: [
        { text: "Live workout streaming (MUX & Zoom)", Icon: Activity },
        { text: "TypeScript modular architecture", Icon: Code },
        { text: "Firebase dynamic links & push notifications", Icon: Smartphone },
        { text: "CI/CD with Bitrise & Fastlane", Icon: Settings },
    ],
    visuals: ["https://placehold.co/800x450/334155/F472B6?text=Aimfit+Live+UI", "https://placehold.co/800x450/334155/F472B6?text=Aimfit+Community", "https://placehold.co/800x450/334155/F472B6?text=Nutrition+Tracking"],
    results: "Contributed to boosting user engagement by an estimated 25% and improving retention rates by 20%. Increased app open rates by 20% through strategic use of push notifications and dynamic links. Reduced new developer onboarding time by 15% due to the improved codebase. Cut application release times by 40% through optimized CI/CD pipelines.",
    liveLink: "https://www.aimfit.com/",
  },
  {
    id: 'retailo-b2b-marketplace',
    title: "Retailo - B2B Digital Marketplace",
    category: "B2B E-commerce",
    client: "Retailo Technologies",
    industry: "Retail & FMCG",
    services: ["B2B Platform Development", "Mobile E-commerce"],
    timeline: "Founding Team Contribution (Implied - Agency Involvement)",
    image: "https://placehold.co/600x400/1A202C/5EEAD4?text=Retailo+Platform", 
    stack: ["React Native", "Node.js", "Cloud Platform (AWS/GCP)", "Multilingual Support", "Logistics Tech"],
    description: "Our agency contributed to the development of a digital B2B marketplace enabling retailers in the MENAP region to order inventory with next-day delivery, competitive pricing, and multilingual support.",
    overview: "Retailo is a pioneering B2B digital marketplace designed to empower SME retailers across the MENAP region. Our team contributed to the platform which facilitates seamless inventory procurement with features like next-day delivery, competitive pricing, and extensive multilingual support.",
    goal: "To empower SME retailers in the MENAP region by digitizing their inventory procurement process through a comprehensive, user-friendly B2B marketplace, offering a wide range of products, efficient logistics, and support in local languages (Arabic, English, Urdu).",
    challenge: "Building a highly scalable platform to handle a vast number of SKUs and a rapidly growing user base of retailers. Ensuring reliable next-day delivery logistics across diverse and challenging geographical areas within the MENAP region. Providing a seamless and intuitive user experience in multiple languages. Maintaining competitive pricing and inventory availability in a dynamic B2B market.",
    strategy: "Our team contributed to developing a mobile-first platform (iOS and Android using React Native) with a user-friendly interface for easy inventory discovery, management, and ordering. We assisted in implementing a robust backend (likely Node.js on a cloud platform like AWS/GCP) and sophisticated logistics system to support next-day delivery and manage a large catalog of SKUs. Our efforts also included integrating comprehensive multilingual capabilities to cater to diverse retailers. The project focused on establishing strong supplier relationships and efficient warehousing to offer competitive pricing and ensure product availability. Active customer support channels were established to build trust and drive adoption.",
    keyFeatures: [
        { text: "Extensive SKU catalog for retailers", Icon: ShoppingCart },
        { text: "Next-day delivery logistics", Icon: Package },
        { text: "Multilingual support (Arabic, English, Urdu)", Icon: Globe },
        { text: "Competitive pricing & real-time inventory", Icon: BarChart2 },
    ],
    visuals: ["https://placehold.co/800x450/334155/5EEAD4?text=Retailo+App", "https://placehold.co/800x450/334155/5EEAD4?text=Retailo+Logistics", "https://placehold.co/800x450/334155/5EEAD4?text=Retailo+Multilingual"],
    results: "Contributed to the successful launch and scaling of a leading B2B digital marketplace in the MENAP region, serving tens of thousands of retailers. Helped establish efficient next-day delivery capabilities across multiple countries and provided robust support in key local languages, significantly improving inventory management and business efficiency for small to medium-sized retailers.",
    liveLink: "https://retailo.co/", 
    appLinks: { 
        ios: "https://apps.apple.com/pk/app/retailo-b2b-retailer-app/id1607963433",
        android: "https://play.google.com/store/apps/details?id=com.retialo.app" 
    }
  },
  {
    id: 'heluss-blockchain-insurance',
    title: "Heluss - Blockchain Insurance Platform",
    category: "FinTech / InsurTech",
    client: "Heluss Inc.",
    industry: "Insurance Technology",
    services: ["Blockchain Development", "AI Solutions", "Mobile Platform Dev"],
    timeline: "Conceptualization to PoC",
    image: "https://placehold.co/600x400/1A202C/C4B5FD?text=Heluss+InsurTech", 
    stack: ["React Native", "Solidity", "Node.js", "Python (AI/ML)", "Ethereum/Hyperledger"],
    description: "Our agency developed a disruptive insurance platform utilizing blockchain for smart contracts, AI for claims management, and tokenized premiums.",
    overview: "Heluss aimed to disrupt the traditional insurance sector by introducing a transparent and efficient platform built on blockchain technology. Our team led the development of key innovations including smart contracts for policy automation, AI for streamlined claims management, and the concept of tokenized premiums.",
    goal: "To revolutionize the insurance industry by leveraging blockchain for transparent and automated policy management via smart contracts, AI for efficient and fair claims processing, and tokenization for innovative premium handling and potential reward systems.",
    challenge: "Integrating complex blockchain technologies (smart contracts, tokenization) with traditional insurance workflows and regulatory frameworks. Developing sophisticated AI models for accurate, unbiased, and rapid claims assessment. Ensuring utmost platform security for financial transactions and sensitive data. Educating users and stakeholders on a novel insurance model based on emerging technologies.",
    strategy: "Our team architected a hybrid platform combining a user-friendly mobile/web interface (likely React Native/React) with a secure and auditable blockchain backend (e.g., Solidity for Ethereum smart contracts). We developed AI algorithms for claims validation, fraud detection, and automated assessment. Our agency implemented a proof-of-concept for a tokenized system for premium payments. A strong emphasis was placed on robust security measures, data immutability, and creating a clear user education strategy to foster adoption.",
    keyFeatures: [
        { text: "Smart contracts for automated policy execution", Icon: ShieldCheck },
        { text: "AI-driven claims processing & fraud detection", Icon: BrainCircuit },
        { text: "Tokenized premiums and policy management", Icon: LinkIcon },
        { text: "Transparent and auditable transaction ledger", Icon: DatabaseZap },
    ],
    visuals: ["https://placehold.co/800x450/334155/C4B5FD?text=Heluss+Dashboard", "https://placehold.co/800x450/334155/C4B5FD?text=Smart+Contract+Flow", "https://placehold.co/800x450/334155/C4B5FD?text=AI+Claims+UI"],
    results: "Successfully demonstrated a proof-of-concept for a transparent, automated, and potentially more efficient insurance model. Developed AI-driven claims processing that showed potential to significantly reduce manual review time and bias. Created a foundational framework for tokenized premiums, opening avenues for new, flexible insurance products and services.",
    liveLink: "https://www.heliossolutions.co/", 
    blogLink: "https://www.heliossolutions.co/blog/" 
  },
  {
    id: 'yourdoctorsonline-telemedicine',
    title: "YourDoctorsOnline - Telemedicine Platform",
    category: "Health Tech / Telemedicine",
    client: "YourDoctorsOnline Corp.",
    industry: "Healthcare Technology",
    services: ["Telehealth Platform Development", "Mobile Health (mHealth)"],
    timeline: "Platform Build & Scale",
    image: "https://placehold.co/600x400/1A202C/6EE7B7?text=YourDoctorsOnline", 
    stack: ["React Native", "WebRTC", "Node.js/Express.js", "Firebase/MongoDB", "HIPAA/PIPEDA Compliance"],
    description: "Our agency developed a telemedicine platform providing 24/7 access to board-certified physicians for virtual consultations via chat, audio, and video.",
    overview: "YourDoctorsOnline is a leading telemedicine platform providing patients with 24/7 on-demand access to board-certified physicians for virtual medical consultations. Our team was instrumental in developing the platform which supports secure chat, audio, and video interactions, aiming to make healthcare more accessible and convenient.",
    goal: "To provide convenient, accessible, and secure 24/7 virtual medical consultations with board-certified physicians, thereby improving patient access to timely healthcare, reducing wait times, and offering a user-friendly experience for both patients and doctors.",
    challenge: "Ensuring stringent HIPAA/PIPEDA compliance and robust data security for sensitive patient health information (PHI). Providing reliable, high-quality real-time video/audio communication across various devices and network conditions. Scaling the platform to handle a large and fluctuating number of concurrent users and doctor availability. Creating an intuitive and trustworthy user experience for diverse patient demographics.",
    strategy: "Our team developed cross-platform mobile applications (React Native) and a web portal for broad accessibility. We integrated secure, encrypted real-time communication features (WebRTC and supporting SDKs) for video, audio, and chat consultations. We built a scalable backend infrastructure (e.g., Node.js with Express.js on a cloud platform) with a primary focus on data security and regulatory compliance. Our team also implemented features for easy doctor discovery, patient queue management, e-prescription capabilities (where legally permitted), and secure patient record management.",
    keyFeatures: [
        { text: "24/7 on-demand virtual doctor consultations", Icon: Clock },
        { text: "Secure & HIPAA/PIPEDA compliant communication", Icon: ShieldCheck },
        { text: "Cross-platform accessibility (iOS, Android, Web)", Icon: Smartphone },
        { text: "E-prescription and lab requisition capabilities", Icon: Briefcase },
    ],
    visuals: ["https://placehold.co/800x450/334155/6EE7B7?text=YDO+Patient+UI", "https://placehold.co/800x450/334155/6EE7B7?text=Doctor+Consult+UI", "https://placehold.co/800x450/334155/6EE7B7?text=Security+Architecture"],
    results: "Successfully launched and scaled a platform connecting hundreds of thousands of patients with doctors 24/7 across multiple regions. Achieved high patient satisfaction scores due to the convenience, speed, and quality of care. Maintained strict data security and regulatory compliance standards, building trust among users and healthcare professionals.",
    liveLink: "https://yourdoctors.online/",
  }
];

const servicesData = [
  {
    id: 1,
    title: "AI Workflow Design",
    Icon: BrainCircuit,
    accentColor: "sky",
    description: "We analyze your existing processes and design intelligent AI-driven workflows to boost efficiency and reduce manual intervention.",
    details: ["Process Analysis & Bottleneck Identification", "Custom AI Model Integration Strategy", "Scalable Workflow Architecture", "Performance Monitoring & Optimization"]
  },
  {
    id: 2,
    title: "Custom Software Development",
    Icon: Code,
    accentColor: "green",
    description: "From web platforms to mobile apps, we build bespoke software solutions tailored to your unique business needs and objectives.",
    details: ["Full-Stack Web Development", "Mobile Application Development (iOS & Android)", "API Design & Integration", "Legacy System Modernization"]
  },
  {
    id: 3,
    title: "IT Infrastructure & Cloud",
    Icon: DatabaseZap,
    accentColor: "purple",
    description: "Optimize your digital backbone with our robust IT infrastructure services, including cloud migration, management, and security.",
    details: ["Cloud Migration & Strategy (AWS, Azure, GCP)", "DevOps & CI/CD Implementation", "Cybersecurity Solutions", "Managed IT Services & Support"]
  },
  {
    id: 4,
    title: "Intelligent Automation",
    Icon: BotIconLucide,
    accentColor: "yellow",
    description: "Leverage RPA and AI to automate repetitive tasks, freeing up your team to focus on strategic initiatives and innovation.",
    details: ["Robotic Process Automation (RPA)", "AI-Powered Data Extraction", "Automated Reporting & Analytics", "Chatbot & Virtual Assistant Development"]
  }
];

const testimonialsData = [
  {
    id: 1,
    quote: "SOCIALSQUARE transformed our operations with their AI solutions. Incredible results and a fantastic team to work with!",
    name: "Alex Chen",
    title: "CEO, FutureTech Solutions",
    logo: "https://placehold.co/120x60/334155/94A3B8?text=FutureTech"
  },
  {
    id: 2,
    quote: "Their custom software solution was a game-changer for our productivity. The attention to detail and understanding of our needs was exceptional.",
    name: "Samantha Green",
    title: "COO, Innovate Hub",
    logo: "https://placehold.co/120x60/334155/94A3B8?text=InnovateHub"
  },
  {
    id: 3,
    quote: "Migrating to the cloud was seamless with their expertise. Our infrastructure is now more scalable and secure than ever before.",
    name: "David Miller",
    title: "IT Director, Global Logistics Co.",
    logo: "https://placehold.co/120x60/334155/94A3B8?text=GlobalLogistics"
  }
];

const clientLogos = [
    { id: 1, src: "https://placehold.co/150x75/334155/94A3B8?text=Client+Alpha", alt: "Client Alpha" },
    { id: 2, src: "https://placehold.co/150x75/334155/94A3B8?text=Client+Beta", alt: "Client Beta" },
    { id: 3, src: "https://placehold.co/150x75/334155/94A3B8?text=Client+Gamma", alt: "Client Gamma" },
    { id: 4, src: "https://placehold.co/150x75/334155/94A3B8?text=Client+Delta", alt: "Client Delta" },
    { id: 5, src: "https://placehold.co/150x75/334155/94A3B8?text=Client+Epsilon", alt: "Client Epsilon" },
];


// Theme Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); 

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light-theme-active'); 
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light-theme-active'); 
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const AnimatedBackground = () => {
  const { theme } = useTheme();
  const lightModeGradient = "bg-gradient-to-br from-sky-100 via-indigo-50 to-purple-100";
  const darkModeGradient = "bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 dark:from-slate-900 dark:via-black dark:to-slate-800";
  
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className={`absolute inset-0 animate-gradient-xy ${theme === 'light' ? lightModeGradient : darkModeGradient}`}></div>
      <style>{`
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradientXY 15s ease infinite;
        }
        @keyframes gradientXY {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

const FadeInOnScroll = ({ children, delay = 0, threshold = 0.1, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold });

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={domRef}
            className={`${className} transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const Navbar = ({ navigateToPage }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: "hero", label: "Home", action: () => { navigateToPage('home'); scrollToSection('hero'); setIsMenuOpen(false); }},
    { id: "about", label: "About Us", action: () => { navigateToPage('home'); scrollToSection('about'); setIsMenuOpen(false); }},
    { id: "services", label: "Services", action: () => { navigateToPage('home'); scrollToSection('services'); setIsMenuOpen(false); }},
    { id: "portfolio", label: "Portfolio", action: () => { navigateToPage('home'); scrollToSection('portfolio'); setIsMenuOpen(false); }},
  ];

  if (enableRecruitmentBot) {
    navLinks.push({ id: "letsBuild", label: "Let's Build", action: () => { navigateToPage('recruitmentBotPage'); setIsMenuOpen(false); }});
  }
  navLinks.push({ id: "contact", label: "Contact", action: () => { navigateToPage('home'); scrollToSection('contact'); setIsMenuOpen(false); }});


  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md shadow-lg ${theme === 'light' ? 'bg-white/80' : 'bg-slate-900/80 dark:bg-black/70'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <button onClick={() => { navigateToPage('home'); scrollToSection('hero'); setIsMenuOpen(false);}} className={`flex items-center flex-shrink-0 transition-colors ${theme === 'light' ? 'text-sky-600 hover:text-sky-700' : 'text-sky-400 dark:text-sky-300 hover:text-sky-500 dark:hover:text-sky-400'}`}>
              {/* LOGO: Replace <SquareCode/> with your <img src="/your-logo.png" alt="SOCIALSQUARE Logo" className="h-8 w-auto mr-2" /> or similar */}
              <SquareCode size={28} strokeWidth={1.5} className="mr-2"/> 
              <span className={`text-2xl font-bold ${theme === 'light' ? 'text-slate-800' : 'text-slate-100 dark:text-white'}`}>SOCIALSQUARE</span>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6"> 
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={link.action}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${theme === 'light' ? 'text-slate-600 hover:text-sky-600 hover:bg-sky-100/50' : 'text-slate-300 dark:text-slate-400 hover:text-white dark:hover:text-sky-300 hover:bg-slate-700/50 dark:hover:bg-slate-800/50'}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md transition-all ${theme === 'light' ? 'text-slate-600 hover:text-sky-600 hover:bg-sky-100/50' : 'text-slate-300 dark:text-slate-400 hover:text-white dark:hover:text-sky-300 hover:bg-slate-700/50 dark:hover:bg-slate-800/50'}`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className={`mr-2 p-2 rounded-md ${theme === 'light' ? 'text-slate-600 hover:text-sky-600' : 'text-slate-300 dark:text-slate-400 hover:text-white dark:hover:text-sky-300'}`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${theme === 'light' ? 'text-slate-600 hover:text-sky-600 focus:ring-sky-500' : 'text-slate-300 dark:text-slate-400 hover:text-white dark:hover:text-sky-300 focus:ring-sky-500'}`}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Zap size={24} />}  
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={`md:hidden absolute top-20 inset-x-0 backdrop-blur-sm pb-3 space-y-1 sm:px-3 ${theme === 'light' ? 'bg-white/95' : 'bg-slate-800/95 dark:bg-black/90'}`}>
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={link.action} 
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all ${theme === 'light' ? 'text-slate-700 hover:text-sky-700 hover:bg-sky-100/50' : 'text-slate-300 dark:text-slate-400 hover:text-white dark:hover:text-sky-300 hover:bg-slate-700/50 dark:hover:bg-slate-800/50'}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const HeroSection = ({ navigateToPage }) => {
  const {theme} = useTheme();
  const letsBuildTarget = enableRecruitmentBot ? 'recruitmentBotPage' : 'contact';
  const letsBuildAction = enableRecruitmentBot ? () => navigateToPage('recruitmentBotPage') : () => scrollToSection('contact');

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        {/* SEO: Hero headline should be H1 and contain primary keywords */}
        <FadeInOnScroll>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className={`block drop-shadow-md ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>Future-Proofing Your Vision.</span>
                <span className={`block drop-shadow-md ${theme === 'light' ? 'text-sky-600' : 'text-sky-400 dark:text-sky-300'}`}>AI-Powered. Human-Perfected.</span>
            </h1>
        </FadeInOnScroll>
        {/* SEO: Sub-headline should elaborate on keywords and value proposition */}
        <FadeInOnScroll delay={200}>
            <p className={`mt-6 max-w-lg mx-auto text-lg sm:text-xl md:max-w-2xl ${theme === 'light' ? 'text-slate-600' : 'text-slate-200 dark:text-slate-300'}`}>
                SOCIALSQUARE architects intelligent IT solutions, harnesses AI automation, and optimizes workflows to propel your business into the future.
            </p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={400}>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
                onClick={letsBuildAction} 
                className={`group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium border border-transparent rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme === 'light' ? 'text-white bg-sky-600 hover:bg-sky-700 focus:ring-offset-white focus:ring-sky-500' : 'text-white bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700 focus:ring-offset-slate-900 focus:ring-sky-500'}`}
            >
                Let's Build Together
                <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button
                onClick={() => scrollToSection('portfolio')}
                className={`group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium bg-transparent rounded-lg shadow-sm transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme === 'light' ? 'text-sky-600 hover:bg-sky-600/10 border-2 border-sky-600 focus:ring-offset-white focus:ring-sky-500' : 'text-sky-400 dark:text-sky-300 hover:bg-sky-500/10 dark:hover:bg-sky-400/10 border-2 border-sky-400 dark:border-sky-300 focus:ring-offset-slate-900 focus:ring-sky-500'}`}
            >
                Explore Our Work
            </button>
            </div>
        </FadeInOnScroll>
      </div>
       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ChevronRight size={32} className={`animate-bounce-vertical rotate-90 ${theme === 'light' ? 'text-slate-500' : 'text-slate-400'}`} />
      </div>
      <style>{`
        @keyframes bounce-vertical {
          0%, 100% { transform: translateY(-25%) rotate(90deg); animation-timing-function: cubic-bezier(0.8,0,1,1); }
          50% { transform: translateY(0) rotate(90deg); animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }
        .animate-bounce-vertical { animation: bounce-vertical 1.5s infinite; }
      `}</style>
    </section>
  );
};

const AboutUsSection = () => {
  const pillars = [
    { Icon: BotIconLucide, title: "AI Automation", description: "Intelligent systems that learn and adapt, transforming your business processes for peak efficiency.", color: "sky" },
    { Icon: Code, title: "Custom Development", description: "Tailored software solutions designed to meet your unique challenges and scale with your growth.", color: "green" },
    { Icon: Server, title: "Digital Infrastructure", description: "Robust, secure, and future-proof foundations for your digital operations and cloud strategy.", color: "purple" },
  ];
  // SEO: Ensure content is descriptive and includes relevant keywords for "About Us"
  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-100 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 dark:text-white mb-4">
                Smart Solutions, Purposeful Innovation
            </h2>
            <p className="text-lg text-center text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
                At SOCIALSQUARE, our mission is to fuse cutting-edge AI with bespoke technology and human-centric design. We transform complex business challenges into elegant, automated IT solutions that drive tangible results and foster growth.
            </p>
        </FadeInOnScroll>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <FadeInOnScroll key={pillar.title} delay={index * 150}>
                <div className={`group p-6 rounded-xl bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-${pillar.color}-500 dark:border-${pillar.color}-400`}>
                <div className={`inline-flex items-center justify-center p-3 rounded-full bg-${pillar.color}-100 dark:bg-${pillar.color}-500/20 mb-4 ring-4 ring-${pillar.color}-500/30`}>
                    <pillar.Icon size={32} className={`text-${pillar.color}-600 dark:text-${pillar.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{pillar.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{pillar.description}</p>
                </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

// Ideas Modal Component
const IdeasModal = ({ isOpen, onClose, title, ideas, isLoading }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999] p-4 transition-opacity duration-300 ease-in-out"> {/* Increased z-index */}
            <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300 ease-in-out scale-95 group-hover:scale-100">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                        <Sparkles size={24} className="inline mr-2 text-yellow-400" />
                        Project Ideas for: {title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                </div>
                {isLoading ? (
                    <div className="flex justify-center items-center h-32">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div>
                        <p className="ml-3 text-slate-600 dark:text-slate-300">Generating ideas...</p>
                    </div>
                ) : (
                    <div className="text-slate-600 dark:text-slate-300 space-y-3 text-sm sm:text-base max-h-[60vh] overflow-y-auto pr-2">
                        {ideas && ideas.length > 0 ? (
                            ideas.map((idea, index) => (
                                <p key={index} className="pb-2 border-b border-slate-200 dark:border-slate-700 last:border-b-0">
                                    {idea.startsWith(String(index + 1) + ".") ? idea : `${index + 1}. ${idea}`}
                                </p>
                            ))
                        ) : (
                            <p>No ideas generated, or there was an issue. Please try again.</p>
                        )}
                    </div>
                )}
                <button
                    onClick={onClose}
                    className="mt-6 w-full px-4 py-2.5 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
                >
                    Close
                </button>
            </div>
        </div>
    );
};


const ServicesSection = ({ openIdeasModal }) => {
  // SEO: Ensure service descriptions are detailed and use keywords like "AI workflow design services", "custom software development agency", etc.
  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">
                Our Expertise, Your Advantage
            </h2>
        </FadeInOnScroll>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <FadeInOnScroll key={service.id} delay={index * 150}>
                <div className={`group relative p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-transparent hover:border-${service.accentColor}-500 dark:hover:border-${service.accentColor}-400 flex flex-col justify-between`}>
                    <div>
                        <div className={`absolute -top-3 -right-3 w-16 h-16 bg-${service.accentColor}-500/10 dark:bg-${service.accentColor}-400/10 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-300 ease-out`}></div>
                        <div className="relative z-10">
                            <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-${service.accentColor}-100 dark:bg-${service.accentColor}-500/20 mb-4`}>
                                <service.Icon size={32} className={`text-${service.accentColor}-600 dark:text-${service.accentColor}-400`} />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{service.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 h-20 overflow-hidden">{service.description}</p>
                            <ul className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
                                {service.details.slice(0,2).map(detail => ( 
                                    <li key={detail} className="flex items-center">
                                        <CheckCircle size={14} className={`mr-2 text-${service.accentColor}-500 dark:text-${service.accentColor}-400`} />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="relative z-10 mt-auto pt-4">
                        <button 
                            onClick={() => openIdeasModal(service.title)}
                            className={`w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors bg-${service.accentColor}-500 text-white hover:bg-${service.accentColor}-600 dark:bg-${service.accentColor}-600 dark:hover:bg-${service.accentColor}-700`}
                        >
                            <Sparkles size={16} className="mr-2" /> Generate Project Ideas
                        </button>
                    </div>
                </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = ({ navigateToPage }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(portfolioItemsData.map(item => item.category))];

  const filteredItems = filter === 'All' ? portfolioItemsData : portfolioItemsData.filter(item => item.category === filter);
  // SEO: Portfolio item titles and descriptions should be unique and keyword-relevant. Alt text for images is crucial.
  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-slate-100 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 dark:text-white mb-6">
                Innovations We've Crafted
            </h2>
            <p className="text-lg text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">
                Explore a selection of projects where SOCIALSQUARE has transformed challenges into impactful digital solutions using AI, custom development, and workflow automation.
            </p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={150}>
            <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-12">
            {categories.map(category => (
                <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-200
                    ${filter === category 
                    ? 'bg-sky-500 dark:bg-sky-600 text-white shadow-md' 
                    : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'}`}
                >
                {category}
                </button>
            ))}
            </div>
        </FadeInOnScroll>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <FadeInOnScroll key={item.id} delay={index * 100}>
                <div className="group relative rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src={item.image} alt={item.title || "Portfolio project image"} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" onError={(e) => {e.target.src = 'https://placehold.co/600x400/1E293B/94A3B8?text=Image+Error';}} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6 relative">
                    <div className="absolute top-0 left-6 transform -translate-y-1/2 flex space-x-1.5">
                        {item.stack.slice(0,3).map(tech => (
                            <span key={tech} className="px-2 py-0.5 text-xs bg-sky-500 text-white rounded-full shadow-sm">{tech}</span>
                        ))}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 mt-2 group-hover:text-sky-300 transition-colors">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-16 overflow-hidden text-ellipsis">{item.description}</p>
                    <button
                        onClick={() => navigateToPage('caseStudy', item.id)}
                        className="inline-flex items-center text-sm font-medium text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
                    >
                        View Case Study <ExternalLink size={16} className="ml-1.5" />
                    </button>
                </div>
                </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

// Case Study Page
const CaseStudyPage = ({ caseStudyId, navigateToPage }) => {
  const item = portfolioItemsData.find(p => p.id === caseStudyId);

  useEffect(() => {
    // This hook runs on every render of CaseStudyPage
    if (item) { // Only set the title if the item exists
        document.title = `${item.title} - Case Study | SOCIALSQUARE`;
        window.scrollTo(0, 0);
    }
    // Cleanup function to reset title when component unmounts
    return () => {
        document.title = "SOCIALSQUARE - AI & IT Solutions for Workflow Optimization"; 
    };
  }, [caseStudyId, item]); // Re-run effect if caseStudyId or the found item changes

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 p-4 text-center">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Case Study Not Found</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">The requested case study could not be located.</p>
        <button
          onClick={() => {navigateToPage('home'); scrollToSection('portfolio');}}
          className="px-6 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition"
        >
          Back to Portfolio
        </button>
      </div>
    );
  }

  const SectionItem = ({ title, children, Icon, className = "" }) => (
    <FadeInOnScroll className={`mb-10 ${className}`}>
        <div className="flex items-center mb-4">
            {Icon && <Icon size={28} className="mr-3 text-sky-500 dark:text-sky-400 flex-shrink-0" />}
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">{title}</h3>
        </div>
        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {children}
        </div>
    </FadeInOnScroll>
  );

  const KeyInfoCard = ({ client, industry, services, timeline, stack }) => (
    <FadeInOnScroll className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl lg:sticky lg:top-24">
        <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Project Snapshot</h4>
        
        {client && <div className="mb-3"><strong className="text-slate-600 dark:text-slate-300">Client:</strong> {client}</div>}
        {industry && <div className="mb-3"><strong className="text-slate-600 dark:text-slate-300">Industry:</strong> {industry}</div>}
        {services && services.length > 0 && (
            <div className="mb-3">
                <strong className="text-slate-600 dark:text-slate-300">Services:</strong>
                <ul className="list-disc list-inside ml-1">
                    {services.map(service => <li key={service}>{service}</li>)}
                </ul>
            </div>
        )}
        {timeline && <div className="mb-3"><strong className="text-slate-600 dark:text-slate-300">Timeline:</strong> {timeline}</div>}
        
        {stack && stack.length > 0 && (
            <div>
                <strong className="text-slate-600 dark:text-slate-300">Tech Stack:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                    {stack.map(tech => (
                        <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300 rounded-full">{tech}</span>
                    ))}
                </div>
            </div>
        )}
    </FadeInOnScroll>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInOnScroll className="mb-10 text-center lg:text-left">
                <button
                onClick={() => { navigateToPage('home'); scrollToSection('portfolio'); }}
                className="mb-6 inline-flex items-center text-sky-600 dark:text-sky-400 hover:underline text-sm"
                aria-label="Back to Portfolio"
                >
                <ChevronLeft size={18} className="mr-1" /> Back to Portfolio
                </button>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 dark:text-white mb-3">{item.title}</h1>
                {item.client && <p className="text-lg text-slate-500 dark:text-slate-400 mb-6">Client: {item.client}</p>}
                 <div className="mb-8 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                    {item.liveLink && (
                        <a href={item.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 rounded-lg shadow-md transition-colors">
                            Visit Website <ExternalLink size={16} className="ml-2" />
                        </a>
                    )}
                    {item.blogLink && (
                        <a href={item.blogLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-500 hover:bg-purple-600 rounded-lg shadow-md transition-colors">
                            Read Blog <BookOpen size={16} className="ml-2" />
                        </a>
                    )}
                    {item.appLinks?.ios && (
                          <a href={item.appLinks.ios} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-slate-700 hover:bg-slate-600 rounded-lg shadow-md transition-colors">
                            iOS App <Smartphone size={16} className="ml-2" />
                        </a>
                    )}
                    {item.appLinks?.android && (
                          <a href={item.appLinks.android} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-md transition-colors">
                            Android App <Smartphone size={16} className="ml-2" />
                        </a>
                    )}
                </div>
            </FadeInOnScroll>

            <div className="grid lg:grid-cols-3 lg:gap-12">
                <article className="lg:col-span-2 space-y-10"> 
                    {item.overview && (
                        <SectionItem title="Project Overview" Icon={Lightbulb} className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl">
                            <p>{item.overview}</p>
                        </SectionItem>
                    )}
                    
                    <SectionItem title="The Challenge" Icon={Target} className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl">
                        <p>{item.challenge}</p>
                    </SectionItem>

                    <SectionItem title="Our Solution & Strategy" Icon={Share2} className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl">
                        <p>{item.strategy}</p>
                    </SectionItem>

                    {item.keyFeatures && item.keyFeatures.length > 0 && (
                        <SectionItem title="Key Features & Highlights" Icon={Zap} className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl">
                            <ul className="space-y-3">
                                {item.keyFeatures.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        {feature.Icon && <feature.Icon size={20} className="mr-3 mt-0.5 text-green-500 dark:text-green-400 flex-shrink-0" />}
                                        <span>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </SectionItem>
                    )}
                    
                    <SectionItem title="Results & Impact" Icon={TrendingUp} className="p-6 bg-sky-50 dark:bg-sky-900/30 rounded-xl shadow-xl border-l-4 border-sky-500 dark:border-sky-400">
                        <p className="text-lg font-semibold text-slate-700 dark:text-sky-300">{item.results}</p>
                    </SectionItem>

                    {item.visuals && item.visuals.length > 0 && (
                        <SectionItem title="Visual Showcase" Icon={Palette} className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {item.visuals.map((src, index) => (
                                    <img key={index} src={src} alt={`${item.title} visual ${index + 1}`} className="rounded-lg shadow-md w-full h-auto object-cover aspect-video" onError={(e) => {e.target.src = 'https://placehold.co/800x450/334155/94A3B8?text=Visual+Error';}}/>
                                ))}
                            </div>
                        </SectionItem>
                    )}
                </article>

                <aside className="lg:col-span-1 mt-10 lg:mt-0">
                     <KeyInfoCard 
                        client={item.client}
                        industry={item.industry}
                        services={item.services}
                        timeline={item.timeline}
                        stack={item.stack}
                    />
                </aside>
            </div>
        </div>
    </div>
  );
};


const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };
  
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000); 
    return () => clearInterval(timer);
  }, []);


  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">
                What Our Clients Say
            </h2>
        </FadeInOnScroll>
        <FadeInOnScroll delay={150}>
            <div className="relative max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-8 md:p-12">
                <MessageSquare size={48} className="absolute top-0 left-0 -mt-6 -ml-6 text-sky-300 dark:text-sky-500 opacity-30 transform rotate-[-15deg]" />
                <div className="text-center">
                    <img src={currentTestimonial.logo} alt={`${currentTestimonial.name} - ${currentTestimonial.title}`} className="h-12 mx-auto mb-6 filter grayscale hover:grayscale-0 transition duration-300" onError={(e) => {e.target.style.display='none';}} />
                    <p className="text-lg md:text-xl italic text-slate-700 dark:text-slate-300 mb-6 h-24 overflow-auto">"{currentTestimonial.quote}"</p>
                    <p className="font-semibold text-slate-800 dark:text-white">{currentTestimonial.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{currentTestimonial.title}</p>
                </div>
                <button onClick={prevTestimonial} aria-label="Previous testimonial" className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 sm:-translate-x-full p-2 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition text-slate-600 dark:text-slate-300">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={nextTestimonial} aria-label="Next testimonial" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 sm:translate-x-full p-2 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition text-slate-600 dark:text-slate-300">
                    <ChevronRight size={24} />
                </button>
            </div>
        </FadeInOnScroll>
         <FadeInOnScroll delay={300}>
            <div className="mt-16">
                <h3 className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-8">Trusted By Leading Innovators</h3>
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 sm:gap-x-12">
                    {clientLogos.map(logo => (
                        <img key={logo.id} src={logo.src} alt={logo.alt} className="h-10 sm:h-12 filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition duration-300" onError={(e) => {e.target.style.display='none';}}/>
                    ))}
                </div>
            </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formError) setFormError(''); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');
    if(formData.name && formData.email && formData.message) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormError("Please enter a valid email address.");
            return;
        }
        
        const subject = encodeURIComponent(`Contact Form Submission from ${formData.name} (SOCIALSQUARE Website)`);
        const body = encodeURIComponent(
`You have a new message from your website contact form:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}

Message:
${formData.message}`
        );
        
        const mailtoLink = `mailto:avais392@gmail.com?subject=${subject}&body=${body}`;
        
        const a = document.createElement('a');
        a.href = mailtoLink;
        a.style.display = 'none'; 
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a); 
        
        setIsSubmitted(true);
    } else {
        setFormError("Please fill in all required fields (Name, Email, Message).");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-100 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 dark:text-white mb-6">
                Let's Build Something Amazing
            </h2>
            <p className="text-lg text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">
                Have a project in mind or just want to explore possibilities? We're here to listen and collaborate.
            </p>
        </FadeInOnScroll>
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 p-8 sm:p-10 rounded-xl shadow-2xl">
            {isSubmitted ? (
                <div className="text-center py-10">
                    <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Thank You!</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-2">Your email client should have opened with a pre-filled message for avais392@gmail.com.</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Please review the email and click "Send" in your email application. If your email client did not open, please manually copy the details or use one of the direct contact methods below.</p>
                    <button 
                        onClick={() => {
                            setIsSubmitted(false);
                            setFormData({ name: '', email: '', company: '', message: '' });
                        }}
                        className="px-6 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition text-sm"
                        aria-label="Compose Another Message"
                    >
                        Compose Another Message
                    </button>
                </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
                {formError && (
                    <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                        {formError}
                    </div>
                )}
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required aria-required="true" className="w-full px-4 py-2.5 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required aria-required="true" className="w-full px-4 py-2.5 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition" />
                    </div>
                </div>
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Company (Optional)</label>
                    <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2.5 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Message</label>
                    <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} required aria-required="true" className="w-full px-4 py-2.5 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700 border border-transparent rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500">
                        Send Message
                        <MessageCircle size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </form>
            )}
            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-700">
                <h4 className="text-center text-sm font-semibold text-slate-600 dark:text-slate-400 mb-4">Or reach us directly:</h4>
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <a href="mailto:avais392@gmail.com" className="group inline-flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-600/50 rounded-md transition-colors">
                        <Mail size={18} className="mr-2 text-sky-500 dark:text-sky-400" /> Email Us
                    </a>
                    <a href="https://www.linkedin.com/company/socialsquare.pk" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-600/50 rounded-md transition-colors">
                        <Linkedin size={18} className="mr-2 text-sky-500 dark:text-sky-400" /> LinkedIn
                    </a>
                    <a href="https://calendly.com/avais392" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-600/50 rounded-md transition-colors">
                        <CalendarDays size={18} className="mr-2 text-sky-500 dark:text-sky-400" /> Book a Call
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ navigateToPage }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <footer className={`text-sm ${theme === 'light' ? 'bg-slate-200 text-slate-700' : 'bg-slate-800 dark:bg-black text-slate-300 dark:text-slate-400'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <button onClick={() => { navigateToPage('home'); scrollToSection('hero'); }} className={`flex items-center mb-4 transition-colors ${theme === 'light' ? 'text-sky-600 hover:text-sky-700' : 'text-sky-400 dark:text-sky-300 hover:text-sky-500 dark:hover:text-sky-400'}`}>
               {/* LOGO: Replace <SquareCode/> with your <img src="/your-logo.png" alt="SOCIALSQUARE Logo" className="h-8 w-auto mr-2" /> or similar */}
              <SquareCode size={28} strokeWidth={1.5} className="mr-2"/>
              <span className={`text-xl font-bold ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>SOCIALSQUARE</span>
            </button>
            <p className={`${theme === 'light' ? 'text-slate-600' : 'text-sm'}`}>Innovate. Automate. Elevate. <br/>Your partners in digital transformation.</p>
          </div>
          <div>
            <h5 className={`text-lg font-semibold mb-4 ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>Quick Links</h5>
            <ul className="space-y-2">
              <li><button onClick={() => { navigateToPage('home'); scrollToSection('about'); }} className={`hover:text-sky-500 dark:hover:text-sky-300 transition ${theme === 'light' ? 'text-slate-600 hover:text-sky-600' : ''}`}>About Us</button></li>
              <li><button onClick={() => { navigateToPage('home'); scrollToSection('services'); }} className={`hover:text-sky-500 dark:hover:text-sky-300 transition ${theme === 'light' ? 'text-slate-600 hover:text-sky-600' : ''}`}>Services</button></li>
              <li><button onClick={() => { navigateToPage('home'); scrollToSection('portfolio'); }} className={`hover:text-sky-500 dark:hover:text-sky-300 transition ${theme === 'light' ? 'text-slate-600 hover:text-sky-600' : ''}`}>Portfolio</button></li>
              <li><button onClick={() => { navigateToPage('home'); scrollToSection('contact'); }} className={`hover:text-sky-500 dark:hover:text-sky-300 transition ${theme === 'light' ? 'text-slate-600 hover:text-sky-600' : ''}`}>Contact</button></li>
            </ul>
          </div>
          <div>
            <h5 className={`text-lg font-semibold mb-4 ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>Connect</h5>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/company/socialsquare.pk" target="_blank" rel="noopener noreferrer" className={`transition ${theme === 'light' ? 'text-slate-600 hover:text-sky-600' : 'hover:text-sky-300'}`} aria-label="SOCIALSQUARE LinkedIn"><Linkedin size={20} /></a>
            </div>
            <h5 className={`text-lg font-semibold mb-2 mt-4 ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>Theme</h5>
            <button
              onClick={toggleTheme}
              className={`flex items-center px-3 py-1.5 rounded-md text-sm transition ${theme === 'light' ? 'bg-slate-300 hover:bg-slate-400 text-slate-700' : 'bg-slate-700 hover:bg-slate-600 text-slate-200'}`}
              aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              {theme === 'light' ? <Moon size={16} className="mr-2" /> : <Sun size={16} className="mr-2" />}
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </div>
        </div>
        <div className={`border-t pt-8 text-center text-sm ${theme === 'light' ? 'border-slate-300 text-slate-600' : 'border-slate-700 dark:border-slate-600'}`}>
          <p>&copy; {new Date().getFullYear()} SOCIALSQUARE. All Rights Reserved.</p>
          <p className="mt-1">
            <a href="#" className={`hover:text-sky-500 dark:hover:text-sky-300 transition ${theme === 'light' ? 'hover:text-sky-600' : ''}`}>Privacy Policy</a> | <a href="#" className={`hover:text-sky-500 dark:hover:text-sky-300 transition ${theme === 'light' ? 'hover:text-sky-600' : ''}`}>Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

// Recruitment Bot Component
const RecruitmentBot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [gatheredInfo, setGatheredInfo] = useState({
        goal: '', projectType: '', stage: '', targetAudience: '', 
        timelineBudget: '', coreProblem: '', additionalNotes: '', 
        name: '', email: '', company: '',
    });
    const [conversationStage, setConversationStage] = useState('greeting'); 
    const chatEndRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        if (conversationStage === 'greeting' && messages.length === 0) {
            addMessageToChat("Hi there! 👋 Welcome to SOCIALSQUARE. We're excited to learn about your project. To start, what's the main goal you're hoping to achieve?", 'bot');
            setConversationStage('gatheringDetails');
        }
    }, [conversationStage, messages.length]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const addMessageToChat = (text, sender, portfolioToShow = null) => {
        setMessages(prev => [...prev, { sender, text, portfolio: portfolioToShow, id: Date.now() + Math.random() }]);
    };
    
    const handleInputChange = (e) => { 
        setUserInput(e.target.value);
    };

    const handleSendMessageToAPI = async (currentMessages, latestUserInput) => {
        setIsLoading(true);
        addMessageToChat(latestUserInput, 'user');
        setUserInput('');
    
        const historyForAPI = currentMessages.map(msg => ({
            role: msg.sender === 'bot' ? 'model' : 'user',
            parts: [{ text: msg.text }]
        }));
        historyForAPI.push({ role: 'user', parts: [{ text: latestUserInput }] });
    
        let systemInstruction = `You are a friendly, professional, and product-oriented AI web assistant for SOCIALSQUARE, a digital agency specializing in IT solutions, AI automation, and workflow optimization. Your primary goal is to qualify inbound leads by gathering information about their project.
        Current information gathered: ${JSON.stringify(gatheredInfo)}.
        Conversation stage: ${conversationStage}.`;

        if (conversationStage === 'gatheringDetails') {
            systemInstruction += ` Ask relevant follow-up questions to understand the user's project goal, project type (Website, Mobile App, AI Automation, Branding, etc.), project stage (Idea, Prototype, Launched, Scaling), target audience, timeline/budget (ask gently, it's okay if they don't share yet), and the core problem they want to solve. If they mention "AI automation", respond confidently about our experience (GPT, LangChain, Zapier, Python, Node.js) and share 1-2 AI-related case studies. If appropriate, show other relevant case studies. Once you have a good understanding (e.g., goal, type, stage, and problem are somewhat clear), transition to 'collectingContactInfo'.`;
        } else if (conversationStage === 'collectingContactInfo') {
            systemInstruction += ` Ask for their Name, Email, and optionally Company. Once you have Name and Email, transition to 'summarizing'.`;
        } else if (conversationStage === 'summarizing') {
            systemInstruction += ` Provide a concise summary of all gathered project details and contact information. Ask for confirmation (e.g., "Does this look correct? Reply 'Yes' to submit."). If they confirm, the frontend will handle submission. If not, ask what they'd like to change or clarify.`;
        }
    
        const payload = {
            contents: [...historyForAPI], 
            systemInstruction: { parts: [{ text: systemInstruction }] },
            generationConfig: {
                 temperature: 0.6, // Slightly more deterministic for Q&A
                 topK: 40,
                 topP: 0.95,
            }
        };
        const apiKey = ""; 
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
    
            if (!response.ok) {
                const errorBody = await response.text();
                throw new Error(`API request failed with status ${response.status}: ${errorBody}`);
            }
    
            const result = await response.json();
    
            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const botResponseText = result.candidates[0].content.parts[0].text;
                
                // Basic parsing for structured data based on bot's likely questions (very simplified)
                // A more robust solution would involve function calling or more structured output from the LLM.
                const lowerBotResponse = botResponseText.toLowerCase();
                const lowerUserInput = latestUserInput.toLowerCase();

                let updatedInfo = { ...gatheredInfo };
                if (messages.length > 0) {
                    const lastBotQuestion = messages.filter(m => m.sender === 'bot').pop()?.text.toLowerCase();
                    if (lastBotQuestion) {
                        if (lastBotQuestion.includes("goal")) updatedInfo.goal = latestUserInput;
                        else if (lastBotQuestion.includes("type of project")) updatedInfo.projectType = latestUserInput;
                        else if (lastBotQuestion.includes("stage")) updatedInfo.stage = latestUserInput;
                        else if (lastBotQuestion.includes("target audience")) updatedInfo.targetAudience = latestUserInput;
                        else if (lastBotQuestion.includes("timeline") || lastBotQuestion.includes("budget")) updatedInfo.timelineBudget = latestUserInput;
                        else if (lastBotQuestion.includes("core problem")) updatedInfo.coreProblem = latestUserInput;
                        else if (lastBotQuestion.includes("additional notes") || lastBotQuestion.includes("share")) updatedInfo.additionalNotes = latestUserInput;
                        else if (lastBotQuestion.includes("name") && !lastBotQuestion.includes("company")) updatedInfo.name = latestUserInput;
                        else if (lastBotQuestion.includes("email")) updatedInfo.email = latestUserInput;
                        else if (lastBotQuestion.includes("company")) updatedInfo.company = latestUserInput;
                    }
                }
                setGatheredInfo(updatedInfo);

                // Portfolio showcase logic
                let portfolioToShow = null;
                if (lowerUserInput.includes("ai automation") || lowerUserInput.includes("artificial intelligence")) {
                     const aiPortfolio = portfolioItemsData.filter(p => 
                        p.category.toLowerCase().includes('ai') || 
                        (p.services && p.services.some(s => s.toLowerCase().includes('ai')))
                    ).slice(0, 1);
                    if(aiPortfolio.length > 0) portfolioToShow = aiPortfolio;
                } else if (updatedInfo.projectType && (lowerUserInput.includes("example") || lowerUserInput.includes("portfolio") || lowerUserInput.includes("work"))) {
                    const relevantPortfolio = portfolioItemsData.filter(p => 
                        p.category.toLowerCase().includes(updatedInfo.projectType.toLowerCase())
                    ).slice(0,2);
                    if(relevantPortfolio.length > 0) portfolioToShow = relevantPortfolio;
                }


                addMessageToChat(botResponseText, 'bot', portfolioToShow);
                
                // Stage transitions based on bot's response (or keywords in it)
                if (lowerBotResponse.includes("could i get your name") || lowerBotResponse.includes("what is your name")) {
                    setConversationStage('collectingContactInfo');
                } else if (lowerBotResponse.includes("does this look correct") && lowerBotResponse.includes("summary")) {
                    setConversationStage('summarizing');
                }


            } else {
                console.error("No content found in API response:", result);
                addMessageToChat("I'm having a little trouble thinking right now. Could you try rephrasing?", 'bot');
            }
        } catch (error) {
            console.error("Error calling Gemini API:", error);
            addMessageToChat(`Sorry, I encountered an error: ${error.message}. Please try again.`, 'bot');
        } finally {
            setIsLoading(false);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        if (conversationStage === 'submitted') return; 

        if (conversationStage === 'summarizing' && userInput.toLowerCase() === 'yes') {
            addMessageToChat(userInput, 'user');
            addMessageToChat("Perfect! Preparing your project brief for our team...", 'bot');
            
            const subject = encodeURIComponent(`Project Inquiry from ${gatheredInfo.name || 'Website User'} (SOCIALSQUARE Website)`);
            const body = encodeURIComponent(
`New Project Inquiry:

Project Goal: ${gatheredInfo.goal || 'Not specified'}
Project Type: ${gatheredInfo.projectType || 'Not specified'}
Stage: ${gatheredInfo.stage || 'Not specified'}
Target Audience: ${gatheredInfo.targetAudience || 'Not specified'}
Timeline/Budget: ${gatheredInfo.timelineBudget || 'Not specified'}
Core Problem: ${gatheredInfo.coreProblem || 'Not specified'}
Additional Notes: ${gatheredInfo.additionalNotes || 'None'}

Contact Details:
Name: ${gatheredInfo.name || 'Not specified'}
Email: ${gatheredInfo.email || 'Not specified'}
Company: ${gatheredInfo.company || 'N/A'}
`
            );
            const mailtoLink = `mailto:avais392@gmail.com?subject=${subject}&body=${body}`;
            
            const a = document.createElement('a');
            a.href = mailtoLink;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            addMessageToChat("Thanks! Your project brief has been prepared. Please check your default email client, as it should have opened with a pre-filled email for you to send to avais392@gmail.com. We’ll review it and get in touch within 24 hours.", 'bot');
            setConversationStage('submitted');
            setUserInput('');
            return;
        }
        
        handleSendMessageToAPI([...messages], userInput); 
    };
    
    const restartConversation = () => {
        setMessages([]);
        setGatheredInfo({
            goal: '', projectType: '', stage: '', targetAudience: '', 
            timelineBudget: '', coreProblem: '', additionalNotes: '', 
            name: '', email: '', company: '',
        });
        setConversationStage('greeting'); 
        setUserInput('');
    };

    return (
        <div className={`flex flex-col h-[calc(100vh-200px)] sm:h-[600px] max-w-2xl mx-auto shadow-xl rounded-lg border ${theme === 'light' ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-700'}`}>
            <div className={`p-4 border-b flex justify-between items-center ${theme === 'light' ? 'border-slate-200' : 'border-slate-700'}`}>
                <h2 className={`text-xl font-semibold ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>Let's Build Together!</h2>
                <button 
                    onClick={restartConversation} 
                    className={`p-2 transition-colors ${theme === 'light' ? 'text-slate-500 hover:text-sky-600' : 'text-slate-400 hover:text-sky-400'}`}
                    title="Restart Conversation"
                    aria-label="Restart Conversation"
                >
                    <RefreshCw size={20} />
                </button>
            </div>
            <div className={`flex-grow p-4 space-y-2 overflow-y-auto ${theme === 'light' ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
                {messages.map((msg) => ( 
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-3 rounded-lg max-w-[85%] shadow text-sm ${msg.sender === 'user' ? 'bg-sky-500 text-white rounded-br-none' : (theme === 'light' ? 'bg-slate-200 text-slate-800 rounded-bl-none' : 'bg-slate-700 text-slate-100 rounded-bl-none')}`}>
                            <div className="flex items-start space-x-2">
                                {msg.sender === 'bot' && <BotIconLucide className={`w-5 h-5 flex-shrink-0 mt-0.5 ${theme === 'light' ? 'text-sky-600' : 'text-sky-400'}`} />}
                                <p className="whitespace-pre-wrap">{msg.text}</p>
                                {msg.sender === 'user' && <UserIconLucide className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />}
                            </div>
                            {msg.portfolio && (
                                <div className="mt-3 space-y-2">
                                    {msg.portfolio.map(p => (
                                        <div key={p.name} className={`p-3 rounded-md border ${theme === 'light' ? 'bg-white border-slate-300' : 'bg-slate-600 border-slate-500'}`}>
                                            <h4 className={`font-semibold ${theme === 'light' ? 'text-slate-700' : 'text-white'}`}>{p.name}</h4>
                                            <p className={`text-xs ${theme === 'light' ? 'text-slate-500' : 'text-slate-300'}`}>{p.description}</p>
                                            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Outcome: {p.outcome}</p>
                                            <a href={p.link} target="_blank" rel="noopener noreferrer" className={`text-xs hover:underline mt-1 block ${theme === 'light' ? 'text-sky-700' : 'text-sky-400'}`}>View Case Study &rarr;</a>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                {isLoading && (
                     <div className="flex justify-start">
                        <div className={`p-3 rounded-lg max-w-[75%] shadow ${theme === 'light' ? 'bg-slate-200 text-slate-800 rounded-bl-none' : 'bg-slate-700 text-slate-100 rounded-bl-none'}`}>
                            <div className="flex items-center space-x-2">
                                <BotIconLucide className={`w-5 h-5 flex-shrink-0 ${theme === 'light' ? 'text-sky-600' : 'text-sky-400'}`} />
                                <div className="flex space-x-1">
                                    <span className={`w-2 h-2 rounded-full animate-pulse delay-75 ${theme === 'light' ? 'bg-slate-400' : 'bg-slate-500'}`}></span>
                                    <span className={`w-2 h-2 rounded-full animate-pulse delay-150 ${theme === 'light' ? 'bg-slate-400' : 'bg-slate-500'}`}></span>
                                    <span className={`w-2 h-2 rounded-full animate-pulse delay-300 ${theme === 'light' ? 'bg-slate-400' : 'bg-slate-500'}`}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={chatEndRef} />
            </div>
            {conversationStage !== 'submitted' && (
                <form onSubmit={handleSubmit} className={`p-4 border-t flex items-center space-x-2 ${theme === 'light' ? 'border-slate-200 bg-white' : 'border-slate-700 bg-slate-900'}`}>
                    <input
                        type="text"
                        value={userInput}
                        onChange={handleInputChange} 
                        placeholder={isLoading ? "Bot is typing..." : "Type your message..."}
                        className={`flex-grow p-2.5 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition text-sm ${theme === 'light' ? 'border-slate-300 bg-white text-slate-900' : 'border-slate-600 bg-slate-700 text-slate-100'}`}
                        disabled={isLoading}
                    />
                    <button 
                        type="submit" 
                        className="p-2.5 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors disabled:opacity-50"
                        disabled={isLoading || !userInput.trim()}
                        aria-label="Send message"
                    >
                        <Send size={20} />
                    </button>
                </form>
            )}
        </div>
    );
};


// New Page Component for the Recruitment Bot
const LetsBuildTogetherPage = () => {
  const { theme } = useTheme(); 
  useEffect(() => {
    document.title = "Let's Build Together | SOCIALSQUARE";
    return () => {
        document.title = "SOCIALSQUARE - AI & IT Solutions for Workflow Optimization"; 
    };
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-slate-900'} py-10 sm:py-16`}>
      <div className="container mx-auto px-4">
        <FadeInOnScroll>
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-6 ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
              Let's Build Your Next Project
            </h1>
            <p className={`text-lg text-center max-w-3xl mx-auto mb-10 sm:mb-12 ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
              Have an innovative idea or a business challenge? Our expert team at SOCIALSQUARE is ready to collaborate and bring your vision to life with cutting-edge technology. 
              Tell us about your project by answering a few questions below.
            </p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={200}>
            <RecruitmentBot />
        </FadeInOnScroll>
      </div>
    </div>
  );
};


const AppContent = ({ navigateToPage, currentPage, currentCaseStudyId }) => {
  const { theme } = useContext(ThemeContext);
  const [isIdeasModalOpen, setIsIdeasModalOpen] = useState(false);
  const [currentServiceForIdeas, setCurrentServiceForIdeas] = useState('');
  const [generatedIdeas, setGeneratedIdeas] = useState([]);
  const [isLoadingIdeas, setIsLoadingIdeas] = useState(false);

  const handleOpenIdeasModal = (serviceTitle) => {
    setCurrentServiceForIdeas(serviceTitle);
    setGeneratedIdeas([]); 
    setIsIdeasModalOpen(true);
    handleGenerateIdeas(serviceTitle); 
  };

  const handleCloseIdeasModal = () => {
    setIsIdeasModalOpen(false);
    setCurrentServiceForIdeas('');
    setGeneratedIdeas([]);
  };

  const handleGenerateIdeas = async (serviceTitle) => {
    setIsLoadingIdeas(true);
    setGeneratedIdeas([]); 

    const prompt = `You are an expert consultant for a top-tier digital agency called SOCIALSQUARE. A potential client is interested in our "${serviceTitle}" services. Briefly describe 3 innovative project ideas or use cases related to "${serviceTitle}" that would showcase our agency's expertise. Keep each idea to 1-2 sentences. Format the response as a numbered list.`;
    
    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });
    const payload = { contents: chatHistory };
    const apiKey = ""; 
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`; 

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`API request failed with status ${response.status}: ${errorBody}`);
        }

        const result = await response.json();

        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            const text = result.candidates[0].content.parts[0].text;
            const ideasArray = text.split('\n').map(idea => idea.trim()).filter(idea => idea.length > 0);
            setGeneratedIdeas(ideasArray);
        } else {
            console.error("No content found in API response:", result);
            setGeneratedIdeas(["Could not generate ideas at this time. Please try again later."]);
        }
    } catch (error) {
        console.error("Error generating project ideas:", error);
        setGeneratedIdeas([`Error: ${error.message}. Please check the console for details.`]);
    } finally {
        setIsLoadingIdeas(false);
    }
  };


  return (
    <div className={`min-h-screen font-sans antialiased ${
      theme === 'light' 
        ? 'bg-white text-slate-800' 
        : 'bg-slate-900 text-slate-100'
    }`}>
      <Navbar navigateToPage={navigateToPage} />
      <main>
        {currentPage === 'home' && (
          <>
            <HeroSection navigateToPage={navigateToPage}/>
            <AboutUsSection />
            <ServicesSection openIdeasModal={handleOpenIdeasModal} />
            <PortfolioSection navigateToPage={navigateToPage} />
            <TestimonialsSection />
            <ContactSection />
          </>
        )}
        {currentPage === 'caseStudy' && currentCaseStudyId && (
          <CaseStudyPage caseStudyId={currentCaseStudyId} navigateToPage={navigateToPage} />
        )}
        {currentPage === 'recruitmentBotPage' && enableRecruitmentBot && ( 
          <LetsBuildTogetherPage />
        )}
         {currentPage === 'recruitmentBotPage' && !enableRecruitmentBot && ( 
          // Optionally, redirect to home or show a "feature disabled" message
          // For now, it will just not render the bot page if the flag is false.
          // Consider adding a redirect in navigateToPage if !enableRecruitmentBot
          <div className="container mx-auto py-20 text-center">
            <h2 className="text-2xl font-semibold">This feature is currently unavailable.</h2>
            <button onClick={() => navigateToPage('home')} className="mt-4 px-6 py-2 bg-sky-500 text-white rounded-md">Go to Homepage</button>
          </div>
        )}
      </main>
      <Footer navigateToPage={navigateToPage} />
      <IdeasModal 
        isOpen={isIdeasModalOpen}
        onClose={handleCloseIdeasModal}
        title={currentServiceForIdeas}
        ideas={generatedIdeas}
        isLoading={isLoadingIdeas}
      />
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); 
  const [currentCaseStudyId, setCurrentCaseStudyId] = useState(null);

  const navigateToPage = (page, id = null) => {
    if (page === 'recruitmentBotPage' && !enableRecruitmentBot) {
        setCurrentPage('home'); // Or a specific "feature disabled" page
        alert("The 'Let's Build Together' feature is currently under maintenance. Please check back later or use our contact form.");
        return;
    }
    setCurrentPage(page);
    setCurrentCaseStudyId(id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, currentCaseStudyId]);

  return (
    <ThemeProvider>
      <AppContent 
        navigateToPage={navigateToPage}
        currentPage={currentPage}
        currentCaseStudyId={currentCaseStudyId}
      />
    </ThemeProvider>
  );
}

