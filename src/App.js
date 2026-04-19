import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronRight, Camera,
  PenTool, Smartphone, Users, Bot, TrendingUp,
  Target, CheckCircle, ArrowRight, Mail, Phone, MapPin,
  BarChart3, Zap, Globe, Share2, Link, ArrowLeft,
  Code, TabletSmartphone, Palette, Clapperboard,
  Cpu, Star, ExternalLink, Filter
} from 'lucide-react';

// ─── Portfolio Data ───────────────────────────────────────────────────────────

const PORTFOLIO = [
  {
    id: 'luxethreads',
    client: 'LuxeThreads',
    industry: 'Fashion E-commerce',
    tagline: 'Social Growth & Content Strategy',
    tags: ['Marketing', 'Social Media', 'Content'],
    gradient: 'from-orange-600/30 via-red-500/20 to-zinc-900',
    accent: 'text-orange-400',
    featured: true,
    challenge:
      'LuxeThreads was posting inconsistently with no content strategy. Their engagement rate had flatlined at under 1% and paid ads were burning budget without conversions.',
    solution:
      'We audited their brand, rebuilt their content calendar, introduced AI-assisted Reels scripts, and launched a targeted Meta ads campaign with retargeting funnels. A/B testing revealed the winning creative formats within 3 weeks.',
    services: ['Social Media Management', 'Digital Marketing & Strategy', 'AI-Assisted Content', 'Video Editing'],
    stats: [
      { label: 'Reach Growth', value: '↑ 340%' },
      { label: 'Engagement Rate', value: '4.7%' },
      { label: 'Social Revenue', value: '↑ 128%' },
      { label: 'Ad ROAS', value: '3.9x' },
    ],
    duration: '3 months',
    deliverables: ['30 Reels/month', 'Paid ad campaigns', 'Monthly analytics reports', 'Content calendar'],
  },
  {
    id: 'finlytics',
    client: 'Finlytics',
    industry: 'Fintech / Mobile App',
    tagline: 'Lead Generation & App Growth Campaign',
    tags: ['Marketing', 'Automation', 'App'],
    gradient: 'from-blue-600/30 via-indigo-500/20 to-zinc-900',
    accent: 'text-blue-400',
    featured: true,
    challenge:
      'A promising fintech app with high cost-per-install and very low qualified lead volume. Their onboarding funnel had a 78% drop-off and they had no CRM to follow up with prospects.',
    solution:
      'We rebuilt their acquisition funnel, set up GoHighLevel CRM with automated email sequences, launched targeted TikTok and Google UAC campaigns, and redesigned the onboarding flow landing page.',
    services: ['Digital Marketing & Strategy', 'Marketing Automation & Systems', 'Web Development'],
    stats: [
      { label: 'Cost Per Install', value: '↓ 42%' },
      { label: 'Qualified Leads', value: '↑ 500%' },
      { label: 'Ad Spend ROI', value: '4.8x' },
      { label: 'Onboarding Drop-off', value: '↓ 61%' },
    ],
    duration: '4 months',
    deliverables: ['CRM setup & automation', 'Landing page redesign', 'TikTok + Google campaigns', 'Weekly reporting'],
  },
  {
    id: 'glowco',
    client: 'GlowCo',
    industry: 'Skincare & Beauty',
    tagline: 'Viral Influencer & UGC Launch Campaign',
    tags: ['Influencer', 'Content', 'Social Media'],
    gradient: 'from-pink-600/30 via-rose-400/20 to-zinc-900',
    accent: 'text-pink-400',
    featured: true,
    challenge:
      'Launching a new product line on a limited budget with zero brand awareness. They needed high-impact content and organic reach without a large paid media spend.',
    solution:
      'We recruited 45 micro-influencers, created detailed UGC briefs, coordinated a simultaneous launch day post campaign, and seeded the product to food and lifestyle creators. The campaign went organically viral within 48 hours.',
    services: ['Influencer Marketing', 'AI-Assisted Content', 'Social Media Management', 'Photography & Production'],
    stats: [
      { label: 'Organic Impressions', value: '2.3M' },
      { label: 'UGC Posts', value: '12,000+' },
      { label: 'Sold Out In', value: '48 Hrs' },
      { label: 'Influencers Activated', value: '45' },
    ],
    duration: '6 weeks',
    deliverables: ['Influencer strategy & outreach', 'UGC briefs & coordination', 'Product shoot', 'Campaign reporting'],
  },
  {
    id: 'techvision',
    client: 'TechVision Summit',
    industry: 'Corporate Events',
    tagline: '360° Event Coverage & Real-time Content',
    tags: ['Production', 'Social Media', 'Content'],
    gradient: 'from-zinc-600/40 via-zinc-700/20 to-zinc-900',
    accent: 'text-zinc-300',
    featured: true,
    challenge:
      'A high-profile tech summit needed comprehensive content coverage that could generate real-time social buzz, provide professional media for sponsors, and produce post-event highlight material.',
    solution:
      'We deployed a 5-person production team for 2 days — photographers, videographers, and a dedicated social media manager posting live. Same-day highlight edits were published within hours of each session.',
    services: ['Photography & Production', 'Video Editing', 'Social Media Management'],
    stats: [
      { label: 'Content Pieces', value: '150+' },
      { label: 'Local Trending', value: '2 Days' },
      { label: 'Highlight Reel', value: 'Same Day' },
      { label: 'Client Rating', value: '5 / 5' },
    ],
    duration: '2-day event + 1 week post',
    deliverables: ['500+ edited photos', '3 highlight reels', 'Social media coverage', 'Sponsor content package'],
  },
  {
    id: 'novabite',
    client: 'NovaBite',
    industry: 'Restaurant & F&B',
    tagline: 'Brand Identity & Social Media Launch',
    tags: ['Branding', 'Production', 'Social Media'],
    gradient: 'from-amber-600/30 via-yellow-500/20 to-zinc-900',
    accent: 'text-amber-400',
    featured: false,
    challenge:
      'A new restaurant with a strong concept but zero visual identity and no digital presence. They needed a brand built from scratch before opening day — with a 6-week deadline.',
    solution:
      'We created a full brand identity including logo, colour system, typography, and brand guidelines. We then did a full food & interior photoshoot and launched their Instagram and TikTok with 12 ready-to-post pieces.',
    services: ['Branding & Design', 'Photography & Production', 'Social Media Management'],
    stats: [
      { label: 'Brand Assets Delivered', value: '60+' },
      { label: 'Opening Week Reach', value: '85K' },
      { label: 'Instagram Followers', value: '1,200' },
      { label: 'Turnaround Time', value: '6 Wks' },
    ],
    duration: '6 weeks',
    deliverables: ['Full brand identity kit', 'Menu & packaging design', 'Food & interior shoot', 'Social media launch'],
  },
  {
    id: 'peakfit',
    client: 'PeakFit',
    industry: 'Health & Fitness',
    tagline: 'Fitness Tracking App — MVP to Launch',
    tags: ['App', 'Branding', 'Marketing'],
    gradient: 'from-green-600/30 via-emerald-500/20 to-zinc-900',
    accent: 'text-green-400',
    featured: false,
    challenge:
      'A fitness startup needed a fully functional cross-platform mobile app within 12 weeks for an investor demo. They had a concept and wireframes but no development team.',
    solution:
      'We delivered a React Native MVP with workout tracking, progress charts, push notifications, and a social feed. App branding, App Store listing graphics, and a launch landing page were included in the project scope.',
    services: ['Mobile App Development', 'Branding & Design', 'Web Development'],
    stats: [
      { label: 'App Build Time', value: '11 Wks' },
      { label: 'Screens Designed', value: '42' },
      { label: 'Day-1 Downloads', value: '800+' },
      { label: 'App Store Rating', value: '4.6 ★' },
    ],
    duration: '11 weeks',
    deliverables: ['iOS & Android app', 'UI/UX design system', 'App Store submission', 'Launch landing page'],
  },
  {
    id: 'buildify',
    client: 'Buildify',
    industry: 'Construction & Real Estate',
    tagline: 'Corporate Website & Lead Generation System',
    tags: ['Web Dev', 'Marketing', 'Automation'],
    gradient: 'from-slate-600/30 via-gray-500/20 to-zinc-900',
    accent: 'text-slate-300',
    featured: false,
    challenge:
      'An established construction firm with zero digital presence and no way to capture leads online. All business came from referrals and they were losing competitive bids due to having no professional website.',
    solution:
      'We built a high-performance WordPress website with project portfolio, team pages, and service detail pages. We integrated a lead capture form connected to a GoHighLevel CRM with automated follow-up sequences.',
    services: ['Web Development', 'Branding & Design', 'Marketing Automation & Systems'],
    stats: [
      { label: 'Organic Leads / Month', value: '35+' },
      { label: 'Page Load Speed', value: '< 1.8s' },
      { label: 'Google Ranking', value: 'Page 1' },
      { label: 'Lead Conversion', value: '18%' },
    ],
    duration: '8 weeks',
    deliverables: ['12-page custom website', 'CRM + email automation', 'SEO setup', 'Brand refresh'],
  },
  {
    id: 'aurabeauty',
    client: 'AuraBeauty',
    industry: 'Beauty & Cosmetics',
    tagline: 'Full-Scale Social Media Transformation',
    tags: ['Social Media', 'Production', 'Branding'],
    gradient: 'from-rose-600/30 via-fuchsia-500/20 to-zinc-900',
    accent: 'text-rose-400',
    featured: false,
    challenge:
      'A cosmetics brand with a loyal but stagnant audience. Their feed was inconsistent, content was outdated, and they had no Reels strategy despite video being their biggest growth lever.',
    solution:
      'We rebranded their Instagram aesthetic, introduced a Reels-first content strategy, conducted monthly product shoots, and grew their TikTok from 0 to 15K followers in 90 days through trend-based content.',
    services: ['Social Media Management', 'Photography & Production', 'Branding & Design', 'Video Editing'],
    stats: [
      { label: 'TikTok Followers', value: '15K in 90d' },
      { label: 'Avg. Reel Views', value: '45K+' },
      { label: 'Profile Visits', value: '↑ 210%' },
      { label: 'DM Inquiries', value: '↑ 3x' },
    ],
    duration: 'Ongoing (3+ months)',
    deliverables: ['20 Reels/month', 'Monthly product shoot', 'TikTok management', 'Brand refresh'],
  },
  {
    id: 'clearmind',
    client: 'ClearMind',
    industry: 'Mental Wellness / SaaS',
    tagline: 'Wellness App + Acquisition Funnel',
    tags: ['App', 'Marketing', 'Automation'],
    gradient: 'from-violet-600/30 via-purple-500/20 to-zinc-900',
    accent: 'text-violet-400',
    featured: false,
    challenge:
      'A mental wellness startup needed an MVP app and a full acquisition funnel before a funding round. They had 8 weeks and a tight budget that had to cover both product and marketing.',
    solution:
      'We delivered a React Native meditation and mood-tracking app alongside a conversion-optimised landing page, email onboarding sequence, and a Meta ads campaign targeting therapy-curious millennials.',
    services: ['Mobile App Development', 'Web Development', 'Digital Marketing & Strategy', 'Marketing Automation & Systems'],
    stats: [
      { label: 'App Delivered In', value: '8 Wks' },
      { label: 'Free Trial Sign-ups', value: '2,400+' },
      { label: 'Email Open Rate', value: '38%' },
      { label: 'Funding Secured', value: '✓' },
    ],
    duration: '8 weeks',
    deliverables: ['Cross-platform app', 'Landing page', 'Email automation', 'Paid campaigns'],
  },
  {
    id: 'zestmarket',
    client: 'ZestMarket',
    industry: 'Grocery E-commerce',
    tagline: 'E-commerce Store & SEO Growth',
    tags: ['Web Dev', 'Marketing'],
    gradient: 'from-teal-600/30 via-cyan-500/20 to-zinc-900',
    accent: 'text-teal-400',
    featured: false,
    challenge:
      'A growing online grocery store built on a slow, poorly optimised platform that was losing customers at checkout. SEO was non-existent and they had no paid strategy.',
    solution:
      'We migrated the store to Shopify, rebuilt the UX for mobile-first checkout, implemented a full on-page SEO structure, and launched Google Shopping campaigns with smart bidding.',
    services: ['Web Development', 'Digital Marketing & Strategy'],
    stats: [
      { label: 'Checkout Abandonment', value: '↓ 38%' },
      { label: 'Organic Traffic', value: '↑ 290%' },
      { label: 'Google Shopping ROAS', value: '5.2x' },
      { label: 'Page Speed Score', value: '94/100' },
    ],
    duration: '10 weeks',
    deliverables: ['Shopify migration', 'SEO audit & implementation', 'Google Shopping setup', 'Conversion optimisation'],
  },
];

const PORTFOLIO_FILTERS = ['All', 'Marketing', 'Branding', 'Social Media', 'Production', 'Web Dev', 'App', 'Influencer', 'Automation', 'Content'];

// ─── Services Data ────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Strategy',
    tagline: 'Data-led strategies that drive measurable growth',
    icon: <Target size={28} />,
    brief: 'Full-funnel marketing strategies tailored to your brand goals — from audience research to paid campaigns.',
    description:
      "We don't guess — we plan. Our marketing strategists build data-driven growth plans that align with your business objectives. From brand positioning to multi-channel campaign execution, we ensure every marketing dollar works harder.",
    includes: [
      'Brand audit & competitor analysis',
      'Audience research & persona development',
      'Multi-channel marketing strategy (Meta, Google, TikTok, LinkedIn)',
      'Monthly content & campaign calendar',
      'Paid advertising setup & management',
      'A/B testing & conversion optimisation',
      'Monthly performance reports & KPI dashboards',
      'Quarterly strategy reviews',
    ],
    idealFor: ['E-commerce brands', 'SaaS companies', 'Startups', 'Retail businesses'],
    outcomes: ['Higher ROI on ad spend', 'Consistent lead generation', 'Stronger brand positioning', 'Predictable revenue growth'],
  },
  {
    id: 'ai-content',
    title: 'AI-Assisted Content Creation',
    tagline: 'Faster, smarter content powered by AI + human creativity',
    icon: <Bot size={28} />,
    brief: 'Scripts, visuals, reels, and concepts created at scale using the latest AI tools combined with creative expertise.',
    description:
      'We combine cutting-edge AI tools with our in-house creative team to produce high-quality content at scale. From viral reel scripts to ad copy and visual concepts, we help your brand stay consistent and relevant across all channels.',
    includes: [
      'AI-powered script writing for reels & ads',
      'Visual concept generation using generative AI',
      'UGC (User-Generated Content) ideation & briefs',
      'Short-form video scripts (Reels, TikToks, Shorts)',
      'AI-assisted caption & copywriting',
      'Monthly content calendar (30+ content ideas)',
      'Trend analysis & content repurposing',
      'Platform-specific content optimisation',
    ],
    idealFor: ['Content-heavy brands', 'Personal brands', 'E-commerce stores', 'Digital-first businesses'],
    outcomes: ['3x faster content production', 'Consistent brand voice', 'Higher engagement rates', 'Reduced content costs'],
  },
  {
    id: 'photography-production',
    title: 'Photography & Production',
    tagline: 'Studio-quality visuals that make your brand unforgettable',
    icon: <Camera size={28} />,
    brief: 'In-house photography and videography for products, brands, corporates, and events — all under one roof.',
    description:
      'Our in-house production team handles everything from product shoots to large-scale corporate events. We deliver polished, on-brand visuals that command attention on every screen — from social media to billboards.',
    includes: [
      'Product photography (white background, lifestyle, flat lay)',
      'Brand & lifestyle shoot direction',
      'Corporate headshots & team photography',
      'Event photography & videography',
      'Behind-the-scenes content capture',
      'Drone footage & aerial shots',
      'Styled shoots with props & set design',
      'Post-production retouching & colour correction',
    ],
    idealFor: ['Product brands', 'Restaurants & F&B', 'Corporate organizations', 'Event organizers'],
    outcomes: ['Professional brand imagery', 'Consistent visual identity', 'Content library for 3+ months', 'Higher social engagement'],
  },
  {
    id: 'branding-design',
    title: 'Branding & Design',
    tagline: 'Identities that communicate, captivate, and convert',
    icon: <PenTool size={28} />,
    brief: 'From logos to full brand systems — we design identities that are distinctive, scalable, and market-ready.',
    description:
      "Great brands are built, not born. Our design team crafts cohesive visual identities that resonate with your target audience and set you apart from competitors. Whether you're launching a new brand or refreshing an existing one, we deliver work that endures.",
    includes: [
      'Logo design (3 concepts, 2 revision rounds)',
      'Full brand guidelines document (colours, typography, tone)',
      'Business card, letterhead & stationery design',
      'Social media profile & cover templates',
      'Ad creatives — static & motion graphics',
      'Packaging design & label artwork',
      'Pitch deck & presentation design',
      'AI-assisted design exploration & moodboards',
    ],
    idealFor: ['New businesses', 'Rebranding companies', 'Product launches', 'Startups seeking investment'],
    outcomes: ['Memorable brand identity', 'Consistent visual language', 'Professional market presence', 'Investor-ready materials'],
  },
  {
    id: 'video-editing',
    title: 'Video Editing & Post-Production',
    tagline: 'Raw footage transformed into scroll-stopping content',
    icon: <Clapperboard size={28} />,
    brief: 'Professional editing for reels, ads, YouTube, and corporate videos — with motion graphics and AI-enhanced effects.',
    description:
      'Our video editors bring stories to life. From snappy social reels to polished brand films, we handle colour grading, motion graphics, sound design, and AI-enhanced effects — delivering content that performs on every platform.',
    includes: [
      'Instagram Reels & TikTok editing',
      'YouTube video editing (long-form & Shorts)',
      'Ad video editing (15s, 30s, 60s cuts)',
      'Corporate video & testimonial editing',
      'Motion graphics & animated text overlays',
      'Professional colour grading',
      'Sound design, music licensing & sync',
      'AI-enhanced effects & background removal',
    ],
    idealFor: ['Content creators', 'E-commerce brands', 'Corporate clients', 'Marketing agencies'],
    outcomes: ['Platform-optimised content', 'Higher video completion rates', 'Professional brand perception', 'Fast turnaround (48–72 hrs)'],
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    tagline: 'We run your socials so you can run your business',
    icon: <Smartphone size={28} />,
    brief: 'End-to-end management of your Instagram, Facebook, TikTok, and LinkedIn — content, community, and growth.',
    description:
      'Your social media presence is your digital storefront. We manage it with the same care you\'d put into your physical business — strategy-first, data-informed, and always on-brand. Our SMM team handles everything from creation to community management.',
    includes: [
      'Full account management (IG, FB, TikTok, LinkedIn)',
      'Monthly content strategy & planning',
      'Graphic design & caption writing',
      'Content scheduling & publishing (15–30 posts/month)',
      'Community management (comments, DMs, mentions)',
      'Hashtag research & trend monitoring',
      'Monthly analytics reports',
      'Growth hacking & engagement campaigns',
    ],
    idealFor: ['Small to mid-size businesses', 'Restaurants & lifestyle brands', 'Personal brands', 'Local services'],
    outcomes: ['Consistent posting schedule', 'Growing and engaged audience', 'Increased brand awareness', 'More inbound inquiries'],
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    tagline: 'Authentic collaborations that build trust at scale',
    icon: <Star size={28} />,
    brief: 'We identify, brief, and manage influencer partnerships that drive real brand awareness and measurable results.',
    description:
      'Consumers trust people over brands. Our influencer marketing team connects you with the right voices — from nano-influencers with hyper-engaged communities to macro creators with mass reach — and manages every detail of the collaboration.',
    includes: [
      'Influencer identification & vetting (reach, engagement, audience fit)',
      'Campaign strategy & creative brief development',
      'Contract negotiation & onboarding',
      'Content review & approval workflow',
      'Publishing coordination & go-live management',
      'Performance tracking (reach, engagement, conversions)',
      'UGC rights management & content licensing',
      'Post-campaign reporting & insights',
    ],
    idealFor: ['Product launches', 'FMCG & lifestyle brands', 'Fashion & beauty', 'Restaurants & F&B'],
    outcomes: ['Authentic brand endorsement', 'Extended organic reach', 'High-quality UGC content', 'Increased social proof'],
  },
  {
    id: 'automation',
    title: 'Marketing Automation & Systems',
    tagline: 'Scale your marketing without scaling your team',
    icon: <Cpu size={28} />,
    brief: 'CRMs, chatbots, email sequences, and sales funnels that generate and nurture leads on autopilot.',
    description:
      'The best marketing works while you sleep. We build automated systems that capture leads, nurture prospects, and close sales — so you can focus on delivering your product. From WhatsApp bots to full CRM pipelines, we engineer your growth engine.',
    includes: [
      'CRM setup & configuration (GoHighLevel, HubSpot, Zoho)',
      'WhatsApp & Instagram chatbot development',
      'Email marketing sequences (welcome, nurture, re-engagement)',
      'Lead generation landing pages',
      'Sales funnel design & setup',
      'Lead magnet creation & delivery automation',
      'Appointment booking & calendar integration',
      'Analytics dashboard & reporting setup',
    ],
    idealFor: ['Service-based businesses', 'Coaches & consultants', 'Real estate agencies', 'SaaS products'],
    outcomes: ['24/7 lead capture', 'Shorter sales cycles', 'Higher lead-to-client conversion', 'Reduced manual work'],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    tagline: 'Fast, beautiful websites built to convert visitors into clients',
    icon: <Code size={28} />,
    brief: 'Custom websites, landing pages, and e-commerce stores — responsive, SEO-optimised, and CMS-powered.',
    description:
      'Your website is your most powerful sales tool. We design and develop high-performance websites that not only look stunning but are engineered for speed, SEO, and conversions. From simple landing pages to full e-commerce platforms, we deliver digital experiences that work.',
    includes: [
      'Custom website design (UX/UI wireframes + final design)',
      'Responsive development (mobile, tablet, desktop)',
      'WordPress, Webflow, or custom React/Next.js build',
      'E-commerce store setup (Shopify or WooCommerce)',
      'On-page SEO foundation (meta tags, schema, sitemap)',
      'CMS setup for easy self-management',
      'Contact forms, booking systems & integrations',
      'Speed optimisation & Core Web Vitals compliance',
      'SSL, hosting setup & deployment',
      'Post-launch support (30 days included)',
    ],
    idealFor: ['New businesses', 'Businesses with outdated websites', 'E-commerce brands', 'Service providers'],
    outcomes: ['Higher search engine rankings', 'More leads from organic traffic', 'Lower bounce rates', 'Credible online presence'],
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    tagline: 'iOS & Android apps that users love and businesses rely on',
    icon: <TabletSmartphone size={28} />,
    brief: 'Cross-platform mobile apps built with React Native — from concept and design to App Store deployment.',
    description:
      'Mobile is where your customers spend most of their time. We build intuitive, high-performance mobile applications for iOS and Android using React Native — delivering a native-quality experience from a single codebase. From MVP to full-scale product, we take your app from idea to launch.',
    includes: [
      'Product discovery & requirements workshop',
      'UX/UI design (wireframes, prototypes, final screens)',
      'Cross-platform development with React Native',
      'Backend API development & third-party integrations',
      'Push notifications & in-app messaging',
      'User authentication & secure data handling',
      'App Store (iOS) & Google Play (Android) submission',
      'Performance testing & QA across devices',
      'Post-launch maintenance & update support',
      'Analytics integration (Firebase, Mixpanel)',
    ],
    idealFor: ['Startups building an MVP', 'Businesses digitising operations', 'E-commerce brands', 'Service platforms'],
    outcomes: ['Cross-platform reach (iOS + Android)', 'Faster time to market', 'Scalable app architecture', 'Engaged mobile user base'],
  },
];

// ─── Team Data ────────────────────────────────────────────────────────────────

const ALL_TEAMS = [
  {
    category: 'Leadership & Strategy', emoji: '🏆',
    members: [
      { name: 'Muntazir Mehdi', role: 'Founder & CGO',                    img: '/images/muntazir.png' },
      { name: 'Mudasir',        role: 'Co-Founder & CTO',                 img: '/images/mudassir.png' },
      { name: 'Rida Chaudhary', role: 'Co-Founder & Executive Director',  img: '/images/rida.png'     },
      { name: 'Sadia Parveen',  role: 'Managing Director',                img: '/images/sadia.png'    },
      { name: 'Inam ul Haq',     role: 'Co-Founder & CCO',                img: '/images/inam.png'     },
    ],
  },
  {
    category: 'Growth & Marketing', emoji: '📈',
    members: [
      { name: 'Waraq', role: 'Senior Growth Strategist' },
      { name: 'Bushra', role: 'SMM Executive' },
      { name: 'Adil', role: 'Social Media Manager' },
      { name: 'Kinza', role: 'Social Media Manager' },
      { name: 'Umar Khalil', role: 'Content Writer' },
      { name: 'Aneeqa', role: 'Content Writer' },
    ],
  },
  {
    category: 'Creative & Content', emoji: '🎨',
    members: [
      { name: 'Meher Fatima', role: 'Creative Director' },
      { name: 'Rimsha', role: 'PR Communication & Creative Strategist' },
    ],
  },
  {
    category: 'Production & Video Editing', emoji: '🎬',
    members: [
      { name: 'Inamy Raja', role: 'Lead Visual Producer' },
      { name: 'Javeria', role: 'Senior Video Editor' },
      { name: 'Tayab', role: 'Senior Video Editor' },
      { name: 'Zain Ullah', role: 'Video Editor' },
      { name: 'Arfa Anwar', role: 'Video Editor' },
      { name: 'Maryam', role: 'Junior Editor (Intern)' },
      { name: 'Meherab', role: 'Junior Visual Artist' },
    ],
  },
  {
    category: 'Design & Branding', emoji: '🖌️',
    members: [
      { name: 'Ameer Hamza', role: 'Senior Brand Designer' },
      { name: 'Laiba', role: 'Graphic Designer & Video Editor' },
      { name: 'Asim', role: 'Junior Designer & Project Ops' },
    ],
  },
  {
    category: 'Development', emoji: '💻',
    members: [{ name: 'Muneeb', role: 'Junior Developer' }],
  },
  {
    category: 'Brand Ambassadors & Influencers', emoji: '🌟',
    members: [
      { name: 'Zoha Malik', role: 'Lifestyle Influencer' },
      { name: 'Kiran Shahzadi', role: 'Influencer & Model' },
      { name: 'Laiba (Hoor Baloch)', role: 'Food Vlogger & Content Creator' },
    ],
  },
];

const MANAGEMENT_TEAM = ALL_TEAMS[0].members;

// ─── Shared Logo ───────────────
// ───────────────────────────────────────────────



function Logo({ onClick }) {
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
      <div className="w-8 h-8 bg-orange-600 rounded-sm flex items-center justify-center transform rotate-45">
        <div className="w-4 h-4 bg-zinc-950 rounded-sm transform -rotate-45"></div>
      </div>
      <span className="text-xl font-bold tracking-tight">
        Grit <span className="text-orange-500">Digital</span>
      </span>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({ currentPage, setCurrentPage, isScrolled, mobileMenuOpen, setMobileMenuOpen, scrollToSection }) {
  const goHome = () => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const navLinks = [
    { label: 'Home',      action: () => { setCurrentPage('home');      window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { label: 'Services',  action: () => { setCurrentPage('services');  window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { label: 'Portfolio', action: () => { setCurrentPage('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { label: 'Team',      action: () => { setCurrentPage('team');      window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { label: 'About Us',  action: () => { setCurrentPage('about');     window.scrollTo({ top: 0, behavior: 'smooth' }); } },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Logo onClick={goHome} />
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <button key={item.label} onClick={item.action}
              className={`text-sm font-medium transition-colors ${currentPage === item.label.toLowerCase().replace(' us', '') ? 'text-orange-500' : 'text-zinc-300 hover:text-orange-500'}`}>
              {item.label}
            </button>
          ))}
          <button onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 60); }}
            className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-orange-600/20">
            Book Consultation
          </button>
        </div>
        <button className="md:hidden text-zinc-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 py-4 px-4 flex flex-col space-y-1 shadow-2xl">
          {navLinks.map((item) => (
            <button key={item.label} onClick={() => { setMobileMenuOpen(false); item.action(); }}
              className="text-left text-base font-medium text-zinc-300 hover:text-orange-500 transition-colors py-2.5 border-b border-zinc-800/50 last:border-0">
              {item.label}
            </button>
          ))}
          <button onClick={() => { setMobileMenuOpen(false); setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 60); }}
            className="mt-2 w-full bg-orange-600 hover:bg-orange-500 text-white py-3 rounded-full font-bold text-sm transition-colors">
            Book Consultation
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── About Page ──────────────────────────────────────────────────────────────

function AboutPage({ setCurrentPage, scrollToSection }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">

      {/* Hero */}
      <div className="relative pt-32 pb-24 overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-400/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-400 mb-8 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            Full-Service Digital Agency
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl">
            We exist to help<br />
            brands <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">grow without limits.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Grit Digital is a full-service agency built for ambitious brands — combining sharp marketing strategy, in-house creative production, AI-powered workflows, and software development under one roof.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-b border-zinc-900 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-900">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '30+', label: 'Brand Clients' },
              { value: '25+', label: 'Team Experts' },
              { value: '3+', label: 'Years of Grit' },
            ].map((s, i) => (
              <div key={i} className="py-10 px-8 text-center">
                <div className="text-3xl font-extrabold text-orange-400 mb-1">{s.value}</div>
                <div className="text-sm text-zinc-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-24 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Our Story</h2>
              <h3 className="text-4xl font-extrabold mb-6 leading-tight">
                Built out of frustration with agencies that over-promise and under-deliver.
              </h3>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Grit Digital was founded by a team of marketers, creatives, and technologists who had seen too many brands waste budget on agencies that prioritised vanity metrics over real business results.
                </p>
                <p>
                  We set out to build something different — an agency that operates with the transparency of a consultancy, the creativity of a production house, and the technical capability of a software studio. No fluff. No jargon. Just focused, measurable growth.
                </p>
                <p>
                  Today, we serve clients across Pakistan and beyond — from early-stage startups to established enterprises — delivering strategies and execution that move the needle.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Founded', value: '2022', desc: 'Lahore, Pakistan' },
                { label: 'Team Size', value: '25+', desc: 'In-house experts' },
                { label: 'Industries', value: '10+', desc: 'Served successfully' },
                { label: 'Retention Rate', value: '90%', desc: 'Client retention' },
              ].map((item, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500/40 transition-colors">
                  <p className="text-xs text-zinc-600 uppercase tracking-wider font-semibold mb-2">{item.label}</p>
                  <p className="text-3xl font-extrabold text-orange-400 mb-1">{item.value}</p>
                  <p className="text-zinc-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-24 border-b border-zinc-900 bg-zinc-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-12 text-center">What Drives Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-orange-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6">
                <Target size={22} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                To help businesses grow faster and smarter by providing strategy, creativity, and technology in one seamless partnership — eliminating the chaos of working with multiple vendors.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-orange-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6">
                <TrendingUp size={22} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                To become the leading full-service digital growth partner for ambitious brands across South Asia and beyond — setting the standard for what a modern agency can deliver.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-24 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Our Values</h2>
            <h3 className="text-4xl font-extrabold">How we show up every day</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Grit Over Comfort', desc: "We do hard things well. When challenges arise, we lean in — not out. Persistence is part of our DNA, not just our name.", icon: '💪' },
              { title: 'Results, Not Vanity', desc: 'Likes and impressions are secondary. We measure success by leads generated, revenue grown, and businesses scaled.', icon: '📊' },
              { title: 'Radical Transparency', desc: 'No hidden fees. No inflated reports. No vague answers. You always know exactly what we\'re doing and why.', icon: '🔍' },
              { title: 'Creative Excellence', desc: 'We hold our creative work to a high standard — because mediocre content gets ignored and great content builds brands.', icon: '🎨' },
              { title: 'Always Evolving', desc: 'The digital landscape never stops changing, and neither do we. We invest in tools, training, and talent relentlessly.', icon: '🚀' },
              { title: 'Client Partnership', desc: 'We treat your business like our own. Your wins are our wins. We succeed only when you succeed.', icon: '🤝' },
            ].map((v, i) => (
              <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-7 hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-200">
                <span className="text-3xl mb-5 block">{v.icon}</span>
                <h4 className="font-bold text-white text-lg mb-2">{v.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What We Do — 3 Pillars */}
      <div className="py-24 border-b border-zinc-900 bg-zinc-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Our Approach</h2>
            <h3 className="text-4xl font-extrabold">Three pillars. One agency.</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                number: '01',
                title: 'Strategy & Marketing',
                desc: 'We don\'t start with tactics — we start with your goals. Every engagement begins with a deep audit of your brand, competitors, and audience. From there, we build a custom growth plan and execute across every channel that drives real ROI.',
                tags: ['Digital Marketing', 'Paid Ads', 'Social Media', 'Influencer', 'Automation'],
                icon: <Target size={24} />,
              },
              {
                number: '02',
                title: 'Creative & Production',
                desc: 'Our in-house team of designers, photographers, videographers, and editors produces content that commands attention. From product shoots and brand films to Reels and ad creatives — we handle every pixel and every frame.',
                tags: ['Photography', 'Video Editing', 'Branding', 'AI Content', 'Design'],
                icon: <Camera size={24} />,
              },
              {
                number: '03',
                title: 'Technology & Development',
                desc: 'Great marketing needs great infrastructure. We build the digital products and systems that power your growth — from marketing automation and CRMs to full-scale websites and mobile apps.',
                tags: ['Web Development', 'Mobile Apps', 'CRM & Automation', 'Landing Pages'],
                icon: <Code size={24} />,
              },
            ].map((p, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-orange-500/40 transition-colors flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                    {p.icon}
                  </div>
                  <span className="text-4xl font-extrabold text-zinc-800">{p.number}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{p.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-400">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Preview */}
      <div className="py-24 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Leadership</h2>
              <h3 className="text-4xl font-extrabold">The people behind the work</h3>
            </div>
            <button onClick={() => { setCurrentPage('team'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-semibold text-sm transition-colors shrink-0">
              Meet the Full Team <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {MANAGEMENT_TEAM.map((member, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500/40 transition-colors group">
                <div className="w-14 h-14 rounded-full overflow-hidden mb-4 border border-zinc-700 group-hover:border-orange-500/50 transition-colors">
                  {member.img
                    ? <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                    : <div className="w-full h-full bg-gradient-to-br from-orange-600/30 to-zinc-800 flex items-center justify-center text-xl font-bold text-orange-400">{member.name.charAt(0)}</div>
                  }
                </div>
                <h4 className="font-bold text-white text-sm leading-tight">{member.name}</h4>
                <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to work with us?</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed text-lg">
            Book a free 30-minute strategy call. We'll audit your digital presence, identify your biggest growth opportunities, and walk you through exactly what we'd do — no obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 80); }}
              className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group shadow-lg shadow-orange-600/20">
              Book Free Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => { setCurrentPage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white px-8 py-4 rounded-full font-bold transition-all">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

// ─── Portfolio Page ───────────────────────────────────────────────────────────

function PortfolioPage({ setCurrentPage, scrollToSection }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeFilter === 'All'
    ? PORTFOLIO
    : PORTFOLIO.filter((p) => p.tags.includes(activeFilter));

  if (selectedProject) {
    const p = selectedProject;
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        {/* Case Study Hero */}
        <div className={`relative pt-32 pb-20 bg-gradient-to-br ${p.gradient} border-b border-zinc-900 overflow-hidden`}>
          <div className="absolute inset-0 bg-zinc-950/60 pointer-events-none"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <button onClick={() => setSelectedProject(null)}
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-orange-500 transition-colors text-sm font-medium mb-8">
              <ArrowLeft size={16} /> Back to Portfolio
            </button>
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-700 text-xs font-semibold text-zinc-300">{tag}</span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">{p.client}</h1>
            <p className={`text-lg font-medium mb-2 ${p.accent}`}>{p.industry}</p>
            <p className="text-2xl font-bold text-zinc-200">{p.tagline}</p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-b border-zinc-900 bg-zinc-900/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {p.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`text-2xl font-extrabold mb-1 ${p.accent}`}>{stat.value}</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Body */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">The Challenge</h2>
                <p className="text-zinc-300 leading-relaxed text-base">{p.challenge}</p>
              </div>
              <div>
                <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Our Solution</h2>
                <p className="text-zinc-300 leading-relaxed text-base">{p.solution}</p>
              </div>

              {/* Results Grid */}
              <div>
                <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-5">Results</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {p.stats.map((stat, i) => (
                    <div key={i} className={`bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-orange-500/40 transition-colors`}>
                      <div className={`text-2xl font-extrabold mb-1 ${p.accent}`}>{stat.value}</div>
                      <div className="text-sm text-zinc-400 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Services Used</h3>
                <ul className="space-y-2.5">
                  {p.services.map((s, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircle size={14} className="text-orange-500 shrink-0" />{s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Project Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Industry</span>
                    <span className="text-zinc-300 font-medium text-right">{p.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Duration</span>
                    <span className="text-zinc-300 font-medium">{p.duration}</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Deliverables</h3>
                <ul className="space-y-2">
                  {p.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                      <ChevronRight size={13} className="text-orange-500 shrink-0" />{d}
                    </li>
                  ))}
                </ul>
              </div>

              <button onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 80); }}
                className="w-full bg-orange-600 hover:bg-orange-500 text-white py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group text-sm shadow-lg shadow-orange-600/20">
                Start a Similar Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero */}
      <div className="relative pt-32 pb-20 overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 right-1/3 w-[500px] h-[400px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0 }); }}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-orange-500 transition-colors text-sm font-medium mb-8">
            <ArrowLeft size={16} /> Back to Home
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300 mb-6">
            <BarChart3 size={14} className="text-orange-500" />
            <span>{PORTFOLIO.length} Projects · Real Results · Real Clients</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-5">
            Our Work &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Real Results</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Every project we take on has one goal: measurable growth. Browse our case studies across marketing, design, development, and production.
          </p>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="border-b border-zinc-900 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '30+', label: 'Brand Clients' },
            { value: '10', label: 'Service Categories' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-extrabold text-orange-400 mb-1">{s.value}</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="flex items-center gap-2 mb-2">
          <Filter size={14} className="text-zinc-500" />
          <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Filter by</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {PORTFOLIO_FILTERS.map((f) => (
            <button key={f} onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeFilter === f
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-orange-500/50 hover:text-orange-400'
              }`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-zinc-500">No projects found for this filter.</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((project) => (
              <button
                key={project.id}
                onClick={() => { setSelectedProject(project); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left bg-zinc-900/40 border border-zinc-800 rounded-3xl overflow-hidden hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Visual Banner */}
                <div className={`h-36 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-zinc-950/30"></div>
                  <div className="absolute bottom-4 left-6 flex gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-full bg-zinc-950/70 border border-zinc-700/50 text-xs font-semibold text-zinc-300">{tag}</span>
                    ))}
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-orange-600 text-xs font-bold text-white">Featured</div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${project.accent}`}>{project.industry}</p>
                      <h3 className="text-xl font-bold text-white">{project.client}</h3>
                    </div>
                    <div className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:border-orange-500 group-hover:text-orange-500 transition-colors shrink-0">
                      <ExternalLink size={15} />
                    </div>
                  </div>

                  <p className="text-zinc-400 font-medium text-sm mb-6">{project.tagline}</p>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3 pt-5 border-t border-zinc-800">
                    {project.stats.slice(0, 3).map((stat, i) => (
                      <div key={i}>
                        <div className={`text-base font-extrabold mb-0.5 ${project.accent}`}>{stat.value}</div>
                        <div className="text-xs text-zinc-600 font-semibold uppercase tracking-wide leading-tight">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="border-t border-zinc-900 py-20 mt-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to become our next success story?</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Book a free strategy call and we'll show you exactly what we'd do to grow your brand — with a custom plan, not a generic pitch.
          </p>
          <button onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 80); }}
            className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 mx-auto group shadow-lg shadow-orange-600/20">
            Book Free Strategy Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Services Page ────────────────────────────────────────────────────────────

function ServicesPage({ setCurrentPage, scrollToSection }) {
  const [activeService, setActiveService] = useState(null);
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="relative pt-32 pb-20 overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0 }); }}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-orange-500 transition-colors text-sm font-medium mb-8">
            <ArrowLeft size={16} /> Back to Home
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300 mb-6">
            <Zap size={14} className="text-orange-500" />
            <span>10 Services · End-to-End Digital Growth</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-5">
            Everything Your Brand<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Needs to Grow</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
            From brand identity to mobile apps — a complete suite of digital services designed for businesses at every stage of growth.
          </p>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <button key={s.id}
                onClick={() => { const el = document.getElementById(s.id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                className="px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-orange-500 hover:border-orange-500/50 text-xs font-semibold transition-colors">
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        {SERVICES.map((service, idx) => {
          const isOpen = activeService === service.id;
          return (
            <div key={service.id} id={service.id}
              className={`bg-zinc-900/50 border rounded-3xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-orange-500/50' : 'border-zinc-800 hover:border-zinc-700'}`}>
              <button className="w-full text-left px-8 py-7 flex items-center gap-5"
                onClick={() => setActiveService(isOpen ? null : service.id)}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-orange-600/20 text-orange-400' : 'bg-zinc-800 text-zinc-400'}`}>
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest">0{idx + 1}</span>
                  <h2 className="text-xl font-bold text-white">{service.title}</h2>
                  <p className="text-zinc-500 text-sm mt-0.5">{service.tagline}</p>
                </div>
                <div className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all ${isOpen ? 'border-orange-500 bg-orange-600/10 text-orange-500 rotate-45' : 'border-zinc-700 text-zinc-500'}`}>
                  <ArrowRight size={16} />
                </div>
              </button>

              {isOpen && (
                <div className="px-8 pb-10 border-t border-zinc-800/60">
                  <div className="pt-8 grid lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-1 space-y-6">
                      <div>
                        <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Overview</h3>
                        <p className="text-zinc-300 leading-relaxed text-sm">{service.description}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Ideal For</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.idealFor.map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-xs font-medium text-zinc-300">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Key Outcomes</h3>
                        <ul className="space-y-2">
                          {service.outcomes.map((o, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                              <CheckCircle size={14} className="text-orange-500 shrink-0" />{o}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-5">What's Included</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.includes.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-4">
                            <div className="w-6 h-6 rounded-full bg-orange-600/15 flex items-center justify-center shrink-0 mt-0.5">
                              <ChevronRight size={13} className="text-orange-500" />
                            </div>
                            <span className="text-sm text-zinc-300 leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                      <button onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 80); }}
                        className="mt-8 inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm transition-all group shadow-lg shadow-orange-600/20">
                        Get a Quote for {service.title}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="border-t border-zinc-900 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure which service you need?</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">Book a free 30-minute strategy call. We'll audit your digital presence and recommend exactly what will move the needle for your business.</p>
          <button onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 80); }}
            className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 mx-auto group shadow-lg shadow-orange-600/20">
            Book Free Strategy Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Team Page ────────────────────────────────────────────────────────────────

function TeamPage({ setCurrentPage, scrollToSection }) {
  const totalMembers = ALL_TEAMS.reduce((acc, g) => acc + g.members.length, 0);
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="relative pt-32 pb-16 overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0 }); }}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-orange-500 transition-colors text-sm font-medium mb-8">
            <ArrowLeft size={16} /> Back to Home
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300 mb-6">
            <Users size={14} className="text-orange-500" />
            <span>{totalMembers} Team Members · 7 Departments</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Team</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            A passionate, multi-disciplinary team of strategists, creatives, producers, developers, and growth experts — working together to scale your brand.
          </p>
        </div>
      </div>

      <div className="border-b border-zinc-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{ value: `${totalMembers}+`, label: 'Team Members' }, { value: '7', label: 'Departments' }, { value: '50+', label: 'Projects Delivered' }, { value: '3+', label: 'Years of Expertise' }].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-extrabold text-orange-400 mb-1">{s.value}</div>
              <div className="text-sm text-zinc-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {ALL_TEAMS.map((group, gIdx) => (
          <div key={gIdx}>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl">{group.emoji}</span>
              <h2 className="text-2xl font-bold text-white">{group.category}</h2>
              <div className="flex-1 h-px bg-zinc-800"></div>
              <span className="text-xs text-zinc-600 font-semibold uppercase tracking-wider">{group.members.length} member{group.members.length !== 1 ? 's' : ''}</span>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {group.members.map((member, mIdx) => (
                <div key={mIdx} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-200 group">
                  <div className="w-14 h-14 rounded-full overflow-hidden mb-4 border border-zinc-700 group-hover:border-orange-500/50 transition-colors">
                    {member.img
                      ? <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                      : <div className="w-full h-full bg-gradient-to-br from-orange-600/30 to-zinc-800 flex items-center justify-center text-xl font-bold text-orange-400">{member.name.charAt(0)}</div>
                    }
                  </div>
                  <h4 className="font-bold text-white text-sm leading-tight">{member.name}</h4>
                  <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-zinc-900 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to work with us?</h2>
          <p className="text-zinc-400 mb-8">Book a free strategy consultation and let our team build your growth engine.</p>
          <button onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 80); }}
            className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 mx-auto group shadow-lg shadow-orange-600/20">
            Book Free Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

function HomePage({ setCurrentPage, scrollToSection, formData, setFormData, formSubmitted, setFormSubmitted }) {
  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFormSubmit = (e) => { e.preventDefault(); setFormSubmitted(true); };

  const homeServices = [
    { title: 'Digital Marketing', icon: <Target size={22} />, desc: 'Strategy, paid ads & full-funnel campaigns' },
    { title: 'AI Content Creation', icon: <Bot size={22} />, desc: 'Scripts, visuals & reels at scale' },
    { title: 'Photography & Production', icon: <Camera size={22} />, desc: 'In-house shoots for products & brands' },
    { title: 'Branding & Design', icon: <Palette size={22} />, desc: 'Logos, identity & creative assets' },
    { title: 'Video Editing', icon: <Clapperboard size={22} />, desc: 'Reels, ads & motion graphics' },
    { title: 'Social Media Management', icon: <Smartphone size={22} />, desc: 'Full account management & growth' },
    { title: 'Influencer Marketing', icon: <Star size={22} />, desc: 'Authentic collaborations & UGC campaigns' },
    { title: 'Marketing Automation', icon: <Cpu size={22} />, desc: 'CRMs, chatbots & lead funnels' },
    { title: 'Web Development', icon: <Code size={22} />, desc: 'Fast, SEO-optimised websites & stores' },
    { title: 'Mobile App Development', icon: <TabletSmartphone size={22} />, desc: 'iOS & Android apps built to perform' },
  ];

  const featuredProjects = PORTFOLIO.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-zinc-800/50 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-orange-400/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300 mb-8">
              <Zap size={16} className="text-orange-500" />
              <span>Strategy · Creativity · AI · Development</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Grow Faster. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Scale Smarter.</span> <br />
              Dominate Digitally.
            </h1>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
              A full-service digital agency helping brands grow through powerful marketing, stunning design, high-performance websites, and custom mobile apps.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('contact')}
                className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group shadow-lg shadow-orange-600/20">
                Start Growing Today <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => { setCurrentPage('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white px-8 py-4 rounded-full font-bold transition-all">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Trust Bar */}
      <section id="about" className="border-y border-zinc-900 bg-zinc-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-900">
            {[
              { value: '50+', label: 'Projects Delivered', sub: 'Across 10+ industries' },
              { value: '30+', label: 'Brand Clients', sub: 'From startups to enterprises' },
              { value: '25+', label: 'Team Experts', sub: 'In-house, no outsourcing' },
              { value: '3+', label: 'Years of Grit', sub: 'And growing fast' },
            ].map((stat, i) => (
              <div key={i} className="py-10 px-8 text-center">
                <div className="text-4xl font-extrabold text-orange-400 mb-1">{stat.value}</div>
                <div className="text-sm font-bold text-white mb-0.5">{stat.label}</div>
                <div className="text-xs text-zinc-600">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="py-24 relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(234,88,12,0.08),_transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Bold Statement */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                We don't just run<br />
                campaigns —<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">we build growth engines.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Grit Digital is a full-service agency built for brands that are serious about scaling. We combine sharp marketing strategy, in-house creative production, cutting-edge AI tools, and software development — so you never have to juggle multiple vendors again.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Strategy-first', 'AI-powered', 'In-house team', 'Full-service', 'Result-driven'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-300 text-xs font-semibold">{tag}</span>
                ))}
              </div>
            </div>

            {/* Right: 3 Pillars */}
            <div className="space-y-4">
              {[
                {
                  number: '01',
                  title: 'Strategy & Marketing',
                  body: 'Every engagement starts with a deep-dive into your brand, market, and goals. We build a custom growth plan — then execute it across every channel that matters.',
                  icon: <Target size={20} />,
                },
                {
                  number: '02',
                  title: 'Creative & Production',
                  body: 'Our in-house team of designers, photographers, videographers, and editors produces content that stops the scroll and builds your brand identity from the ground up.',
                  icon: <Camera size={20} />,
                },
                {
                  number: '03',
                  title: 'Technology & Development',
                  body: 'From marketing automation and CRMs to full-scale web and mobile apps — we build the digital infrastructure your business needs to operate and scale.',
                  icon: <Code size={20} />,
                },
              ].map((pillar, i) => (
                <div key={i} className="flex gap-5 bg-zinc-900/40 border border-zinc-800 hover:border-orange-500/40 rounded-2xl p-6 transition-colors group">
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500 group-hover:bg-orange-600/20 transition-colors">
                      {pillar.icon}
                    </div>
                    <span className="text-xs font-bold text-zinc-700">{pillar.number}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1.5">{pillar.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{pillar.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Brief */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-zinc-400 text-lg">10 services. One agency. Everything your brand needs to compete and win.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {homeServices.map((service, idx) => (
              <button key={idx} onClick={() => { setCurrentPage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl hover:-translate-y-1 hover:border-orange-500/50 transition-all duration-200 group text-left">
                <div className="w-10 h-10 rounded-xl bg-orange-600/10 flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-600/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-bold text-sm text-white mb-1 leading-tight">{service.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{service.desc}</p>
              </button>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => { setCurrentPage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-3.5 rounded-full font-bold transition-all group shadow-lg shadow-orange-600/20">
              Explore All Services in Detail <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-zinc-400 text-lg">A systematic approach to predictable digital growth.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-800 via-orange-500/50 to-zinc-800 -translate-y-1/2"></div>
            <div className="grid lg:grid-cols-5 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understand your brand, audience, and goals' },
                { step: '02', title: 'Strategy', desc: 'Create a customized growth plan' },
                { step: '03', title: 'Production', desc: 'Content creation, shoots, and design' },
                { step: '04', title: 'Execution', desc: 'Launch campaigns and manage channels' },
                { step: '05', title: 'Optimization', desc: 'Improve continuously using data & AI' },
              ].map((phase, idx) => (
                <div key={idx} className="relative z-10 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center hover:border-orange-500 transition-colors">
                  <div className="w-12 h-12 mx-auto bg-zinc-950 border-2 border-orange-500 rounded-full flex items-center justify-center font-bold text-orange-500 mb-4 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{phase.title}</h3>
                  <p className="text-sm text-zinc-400">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio — Featured */}
      <section id="portfolio" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-3">Featured Work</h2>
              <p className="text-zinc-400 text-lg">A selection of results we're proud of.</p>
            </div>
            <button onClick={() => { setCurrentPage('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-semibold text-sm transition-colors shrink-0">
              View All {PORTFOLIO.length} Projects <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <button key={project.id}
                onClick={() => { setCurrentPage('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left bg-zinc-900/40 border border-zinc-800 rounded-3xl overflow-hidden hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 group">
                <div className={`h-32 bg-gradient-to-br ${project.gradient} relative`}>
                  <div className="absolute inset-0 bg-zinc-950/30"></div>
                  <div className="absolute bottom-4 left-6 flex gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-full bg-zinc-950/70 border border-zinc-700/50 text-xs font-semibold text-zinc-300">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${project.accent}`}>{project.industry}</p>
                      <h3 className="text-xl font-bold text-white">{project.client}</h3>
                    </div>
                    <div className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:border-orange-500 group-hover:text-orange-500 transition-colors shrink-0">
                      <ExternalLink size={15} />
                    </div>
                  </div>
                  <p className="text-zinc-400 font-medium text-sm mb-6">{project.tagline}</p>
                  <div className="grid grid-cols-3 gap-3 pt-5 border-t border-zinc-800">
                    {project.stats.slice(0, 3).map((stat, i) => (
                      <div key={i}>
                        <div className={`text-base font-extrabold mb-0.5 ${project.accent}`}>{stat.value}</div>
                        <div className="text-xs text-zinc-600 font-semibold uppercase tracking-wide leading-tight">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-10">
            <button onClick={() => { setCurrentPage('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-orange-500/50 text-white px-8 py-3 rounded-full font-semibold transition-all text-sm">
              See All {PORTFOLIO.length} Case Studies <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section id="team" className="py-24 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Meet the Team</h2>
            <p className="text-zinc-400 text-lg">Led by a passionate leadership team, backed by experts across design, production, development, and growth.</p>
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xl">🏆</span>
              <h3 className="text-xl font-bold text-orange-400">Leadership & Strategy</h3>
              <div className="flex-1 h-px bg-zinc-800"></div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {MANAGEMENT_TEAM.map((member, mIdx) => (
                <div key={mIdx} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500/40 transition-colors group">
                  <div className="w-14 h-14 rounded-full overflow-hidden mb-4 border border-zinc-700 group-hover:border-orange-500/50 transition-colors">
                    {member.img
                      ? <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                      : <div className="w-full h-full bg-gradient-to-br from-orange-600/30 to-zinc-800 flex items-center justify-center text-xl font-bold text-orange-400">{member.name.charAt(0)}</div>
                    }
                  </div>
                  <h4 className="font-bold text-white text-sm leading-tight">{member.name}</h4>
                  <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-zinc-500 text-sm mb-4">Growth, Creative, Production, Design, Dev & Influencer teams</p>
            <button onClick={() => { setCurrentPage('team'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-orange-500/50 text-white px-8 py-3 rounded-full font-semibold transition-all text-sm">
              View Full Team <ArrowRight size={16} />
            </button>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ value: '25+', label: 'Team Members' }, { value: '50+', label: 'Projects Delivered' }, { value: '30+', label: 'Brand Clients' }, { value: '3+', label: 'Years of Expertise' }].map((stat, idx) => (
              <div key={idx} className="text-center bg-zinc-900/50 border border-zinc-800 rounded-2xl py-8 px-4">
                <div className="text-4xl font-extrabold text-orange-400 mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Why Grit Digital?</h2>
            <p className="text-zinc-400 text-lg">One agency for marketing, design, production, and development. No handoffs. No silos. Just results.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'AI-Enhanced Workflows', desc: 'We integrate the latest AI tools to produce better content faster — giving you a competitive edge at every stage.', icon: <Bot size={24} /> },
              { title: 'In-House Production', desc: 'Photography, video, and design handled in-house — faster turnarounds, consistent quality, lower costs.', icon: <Camera size={24} /> },
              { title: 'Web & App Development', desc: 'Beyond marketing — we build the digital products your business needs to operate and scale effectively.', icon: <Code size={24} /> },
              { title: 'Data-Driven Decisions', desc: 'Every campaign is backed by analytics. We track, report, and optimise continuously for maximum ROI.', icon: <BarChart3 size={24} /> },
              { title: 'Dedicated Growth Teams', desc: 'You get a focused, committed team — not a revolving door of freelancers — fully invested in your brand.', icon: <Users size={24} /> },
              { title: 'Transparent Reporting', desc: "Regular reports, clear KPIs, and honest communication — you always know exactly what we're doing and why.", icon: <CheckCircle size={24} /> },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-5 bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500/40 transition-colors">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500">{item.icon}</div>
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Let's Grow Together</h2>
            <p className="text-zinc-400 text-lg">Book a free consultation and discover exactly how we can help your brand scale.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              <div className="space-y-6 mb-10">
                {[
                  { icon: <Mail size={20} />, label: 'Email', value: 'gritgrowthbymuntazir@gmail.com' },
                  { icon: <Phone size={20} />, label: 'Phone', value: '+92 330 3947050' },
                  { icon: <MapPin size={20} />, label: 'Location', value: 'Multan, Pakistan' },
                ].map((info, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">{info.icon}</div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-0.5">{info.label}</p>
                      <p className="text-zinc-200 font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-zinc-900/50 border border-orange-500/20 rounded-2xl p-6">
                <h4 className="font-bold text-orange-400 mb-3">Free Strategy Call</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">Book a free 30-minute strategy call. We'll audit your digital presence and outline a custom growth plan — no strings attached.</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {['Brand Audit', 'Growth Roadmap', 'No Obligation'].map((tag, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1">
                      <CheckCircle size={12} />{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-orange-600/20 border border-orange-500/40 flex items-center justify-center mb-6">
                    <CheckCircle className="text-orange-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                  <p className="text-zinc-400">Thanks for reaching out. Our team will get back to you within 24 hours.</p>
                  <button onClick={() => { setFormSubmitted(false); setFormData({ name: '', email: '', company: '', service: '', message: '' }); }}
                    className="mt-6 text-orange-500 hover:text-orange-400 text-sm font-semibold transition-colors">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold mb-6">Book Your Free Consultation</h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleFormChange} placeholder="Your name" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">Email Address *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleFormChange} placeholder="you@company.com" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Company / Brand</label>
                    <input type="text" name="company" value={formData.company} onChange={handleFormChange} placeholder="Your company or brand name" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Service Interested In</label>
                    <select name="service" value={formData.service || ''} onChange={handleFormChange} className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors text-sm">
                      <option value="">Select a service (optional)</option>
                      {SERVICES.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Tell us about your goals *</label>
                    <textarea name="message" required rows={4} value={formData.message} onChange={handleFormChange} placeholder="What are you looking to achieve? What challenges are you facing?" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors text-sm resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-orange-600 hover:bg-orange-500 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-orange-600/20">
                    Book Free Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-xs text-zinc-500">No spam. We'll only contact you about your request.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mt-4 mb-6">
                A full-service digital agency combining marketing, design, production, web development, and mobile apps — all under one roof.
              </p>
              <div className="flex gap-3">
                {[{ icon: <Globe size={18} />, label: 'Instagram' }, { icon: <Share2 size={18} />, label: 'LinkedIn' }, { icon: <Link size={18} />, label: 'Twitter' }].map((s, i) => (
                  <button key={i} aria-label={s.label} className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-orange-500 hover:border-orange-500/50 transition-colors">{s.icon}</button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-2">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <button onClick={() => { setCurrentPage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-zinc-400 hover:text-orange-500 text-sm transition-colors text-left">{s.title}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2.5">
                {[{ label: 'About Us', id: 'about' }, { label: 'Our Process', id: 'process' }, { label: 'Contact', id: 'contact' }].map((link) => (
                  <li key={link.label}><button onClick={() => scrollToSection(link.id)} className="text-zinc-400 hover:text-orange-500 text-sm transition-colors">{link.label}</button></li>
                ))}
                <li><button onClick={() => { setCurrentPage('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-zinc-400 hover:text-orange-500 text-sm transition-colors">Portfolio</button></li>
                <li><button onClick={() => { setCurrentPage('team'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-zinc-400 hover:text-orange-500 text-sm transition-colors">Our Team</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Grit Digital. All rights reserved.</p>
            <p className="text-zinc-600 text-sm">Built with <span className="text-orange-500">Grit</span>.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-orange-500 selection:text-white">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      {currentPage === 'about'     && <AboutPage     setCurrentPage={setCurrentPage} scrollToSection={scrollToSection} />}
      {currentPage === 'portfolio' && <PortfolioPage setCurrentPage={setCurrentPage} scrollToSection={scrollToSection} />}
      {currentPage === 'services'  && <ServicesPage  setCurrentPage={setCurrentPage} scrollToSection={scrollToSection} />}
      {currentPage === 'team'      && <TeamPage      setCurrentPage={setCurrentPage} scrollToSection={scrollToSection} />}
      {currentPage === 'home'      && (
        <HomePage
          setCurrentPage={setCurrentPage}
          scrollToSection={scrollToSection}
          formData={formData}
          setFormData={setFormData}
          formSubmitted={formSubmitted}
          setFormSubmitted={setFormSubmitted}
        />
      )}
    </div>
  );
}
