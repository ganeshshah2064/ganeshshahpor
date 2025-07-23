import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiCsharp,
  SiExpress
} from "react-icons/si";
import { 
  TbBrandFramerMotion, 
  TbBrandUnity, 
  TbBrandBlender, 
  TbBrandFigma, 
  TbBrandAdobe,
  TbBrandPhp,
  TbBrandMysql 
} from "react-icons/tb";
import { FiMail, FiLayers } from "react-icons/fi";

interface Skill {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
}

export const PROJECT_SKILLS = {
  // Development
  nextjs: {
    title: "Next.js",
    bg: "#000000",
    fg: "#ffffff",
    icon: <RiNextjsFill className="w-5 h-5" />,
  },
  typescript: {
    title: "TypeScript",
    bg: "#3178C6",
    fg: "#ffffff",
    icon: <SiTypescript className="w-5 h-5" />,
  },
  javascript: {
    title: "JavaScript",
    bg: "#F7DF1E",
    fg: "#000000",
    icon: <SiJavascript className="w-5 h-5" />,
  },
  react: {
    title: "React",
    bg: "#61DAFB",
    fg: "#000000",
    icon: <RiReactjsFill className="w-5 h-5" />,
  },
  nodejs: {
    title: "Node.js",
    bg: "#339933",
    fg: "#ffffff",
    icon: <RiNodejsFill className="w-5 h-5" />,
  },
  express: {
    title: "Express",
    bg: "#000000",
    fg: "#ffffff",
    icon: <SiExpress className="w-5 h-5" />,
  },
  mongodb: {
    title: "MongoDB",
    bg: "#47A248",
    fg: "#ffffff",
    icon: <SiMongodb className="w-5 h-5" />,
  },
  tailwind: {
    title: "Tailwind CSS",
    bg: "#38B2AC",
    fg: "#ffffff",
    icon: <SiTailwindcss className="w-5 h-5" />,
  },
  // Design
  figma: {
    title: "Figma",
    bg: "#F24E1E",
    fg: "#ffffff",
    icon: <TbBrandFigma className="w-5 h-5" />,
  },
  adobe: {
    title: "Adobe CC",
    bg: "#FF0000",
    fg: "#ffffff",
    icon: <TbBrandAdobe className="w-5 h-5" />,
  },
  // Game Development
  unity: {
    title: "Unity 3D",
    bg: "#000000",
    fg: "#ffffff",
    icon: <TbBrandUnity className="w-5 h-5" />,
  },
  blender: {
    title: "Blender",
    bg: "#EA7600",
    fg: "#000000",
    icon: <TbBrandBlender className="w-5 h-5" />,
  },
  csharp: {
    title: "C#",
    bg: "#239120",
    fg: "#ffffff",
    icon: <SiCsharp className="w-5 h-5" />,
  },
  // Backend
  php: {
    title: "PHP",
    bg: "#777BB4",
    fg: "#ffffff",
    icon: <TbBrandPhp className="w-5 h-5" />,
  },
  mysql: {
    title: "MySQL",
    bg: "#4479A1",
    fg: "#ffffff",
    icon: <TbBrandMysql className="w-5 h-5" />,
  },
  // UI/UX
  uiux: {
    title: "UI/UX",
    bg: "#1A73E8",
    fg: "#ffffff",
    icon: <FiLayers className="w-5 h-5" />,
  },
  // Other
  smtp: {
    title: "SMTP",
    bg: "#EA4335",
    fg: "#ffffff",
    icon: <FiMail className="w-5 h-5" />,
  }
} as const;

export interface Project {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: {
    frontend: Skill[];
    backend: Skill[];
  };
  github?: string;
  live: string;
  content: () => JSX.Element;
}

const projects: Project[] = [
  {
    id: "foodscan",
    category: "Restaurant SaaS Platform",
    title: "FoodScan – QR Code Menu & Restaurant POS",
    src: "/images/projects/1.png",
    screenshots: [
      "/images/projects/1.png",
      "/images/projects/2.png",
      "/images/projects/Frame_20.png"
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.nextjs,
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.react
      ],
      backend: [
        PROJECT_SKILLS.nodejs,
        PROJECT_SKILLS.mongodb,
        PROJECT_SKILLS.express
      ]
    },
    github: "#",
    live: "https://itaharihub.xyz",
    content: function() {
      return (
        <div className="space-y-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              QR Code Restaurant Menu Maker and Contactless Table Ordering System with Restaurant POS
            </h2>
            <p className="text-center text-lg text-gray-700 dark:text-gray-300">
              Efficient and Easy Digital Menu Ordering and Contactless Payment System for In-House Dining.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">QR Code Menu Maker</h3>
              <p className="mb-4">
                This feature allows restaurants to create digital menus in the form of QR codes. 
                Restaurants can input menu items, descriptions, prices, and images into the system. 
                The system generates a QR code for each table or the entire restaurant.
              </p>
              <Image 
                src="/images/projects/1.png" 
                alt="QR Code Menu Maker" 
                width={500} 
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contactless Table Ordering System</h3>
              <p className="mb-4">
                Customers can use their smartphones to scan the QR code on their table, which directs 
                them to the digital menu. The digital menu allows customers to browse through items, 
                select their choices, and place orders directly from their devices. Orders are sent 
                to the kitchen or bar, reducing the need for physical menus, paper order slips, and 
                direct interaction with waitstaff.
              </p>
              <Image 
                src="/images/projects/2.png" 
                alt="Contactless Ordering" 
                width={500} 
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2">Multiple Branches</h4>
                <p>Manage multiple restaurant locations from a single dashboard</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2">Unlimited Roles & Permissions</h4>
                <p>Customize access levels for staff members</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2">Restaurant POS</h4>
                <p>Complete point of sale system for order management</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2">Easy Payment System</h4>
                <p>Multiple payment gateways for seamless transactions</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2">Coupon & Vouchers</h4>
                <p>Create and manage promotional offers</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2">Multi-language Support</h4>
                <p>Reach a global audience with multiple language options</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Demo Access</h3>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Admin Panel</h4>
                  <p className="mb-2">🔗 <a href="https://itaharihub.xyz/admin" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Admin Dashboard</a></p>
                  <p>👤 Email: admin@ganesh.com</p>
                  <p>🔑 Password: 1234567</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Customer View</h4>
                  <p>🔗 <a href="https://itaharihub.xyz/menu/table-1" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Table 1 Menu</a></p>
                  <p className="mt-2">Scan the QR code at your table to view the digital menu and place orders.</p>
                </div>
              </div>
              <div className="mt-6">
                <Image 
                  src="/images/projects/Frame_20.png" 
                  alt="FoodScan Admin Panel" 
                  width={800} 
                  height={450}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    id: "vcard-saas",
    category: "Digital Business Card Platform",
    title: "vCard SaaS – NFC Digital Business Card Builder",
    src: "/images/projects/vcard.jpg",
    screenshots: [
      "/images/projects/vcard-1.jpg",
      "/images/projects/vcard-2.jpg"
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.laravel,
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.bootstrap,
        PROJECT_SKILLS.mysql
      ],
      backend: []
    },
    github: "#",
    live: "https://icard.itaharihub.xyz",
    content: function() {
      return (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Project Overview</h3>
            <p>A SaaS platform for creating and sharing digital NFC/QR business cards with 35+ pre-designed templates, contact forms, inquiry tracking, and subscription billing.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Key Features</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>35+ Pre-designed Templates</li>
              <li>NFC & QR Code Integration</li>
              <li>Contact Forms & Lead Capture</li>
              <li>Subscription Billing</li>
              <li>Multi-language Support</li>
              <li>Analytics Dashboard</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Demo</h3>
            <p>🔗 <a href="https://icard.itaharihub.xyz" target="_blank" rel="noopener" className="text-blue-400 hover:underline">Live Demo</a></p>
          </div>
        </div>
      );
    },
  },
  {
    id: "freefire-tournament",
    category: "E-sports Platform",
    title: "Free Fire Tournament Platform",
    src: "/images/projects/freefire.jpg",
    screenshots: [
      "/images/projects/freefire-1.jpg",
      "/images/projects/freefire-2.jpg"
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.html5,
        PROJECT_SKILLS.tailwind
      ],
      backend: []
    },
    github: "#",
    live: "#",
    content: function() {
      return (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Project Overview</h3>
            <p>Built for organizing Free Fire e-sports tournaments with player registration, custom match room setup, schedule display, and email verification.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Key Features</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Player Registration System</li>
              <li>Custom Match Room Setup</li>
              <li>Tournament Scheduling</li>
              <li>Email Verification</li>
              <li>Admin Dashboard</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>
      );
    },
  },
  {
    id: "ganesh-graphics",
    category: "Graphic Design Portfolio",
    title: "Ganesh Graphic Studio – Design Portfolio",
    src: "/images/projects/design-portfolio.jpg",
    screenshots: [
      "/images/projects/design-1.jpg",
      "/images/projects/design-2.jpg"
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.adobe,
        PROJECT_SKILLS.adobe
      ],
      backend: []
    },
    github: "#",
    live: "#",
    content: function() {
      return (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Project Overview</h3>
            <p>A collection of creative graphic design works including posters, thumbnails, banners, and social media creatives with a focus on bold layouts and clean branding.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Design Work Includes</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Social Media Graphics</li>
              <li>Marketing Materials</li>
              <li>Brand Identity</li>
              <li>Print Design</li>
              <li>Digital Illustrations</li>
            </ul>
          </div>
        </div>
      );
    },
  },
  {
    id: "sushma-esports",
    category: "E-sports Portal",
    title: "Sushma Organic E-Sports",
    src: "/images/projects/sushma-esports.jpg",
    screenshots: [
      "/images/projects/sushma-1.jpg",
      "/images/projects/sushma-2.jpg"
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.javascript,
        PROJECT_SKILLS.smtp
      ],
      backend: []
    },
    github: "#",
    live: "#",
    content: function() {
      return (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Project Overview</h3>
            <p>An e-sports portal for Sushma Godawari College featuring online player registration, ID verification, unique ID generation, and automated email notifications.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Key Features</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Player Registration System</li>
              <li>ID Verification</li>
              <li>Unique ID Generation</li>
              <li>Automated Email Notifications</li>
              <li>Admin Dashboard</li>
              <li>Tournament Management</li>
            </ul>
          </div>
        </div>
      );
    },
  },
  {
    id: "godawari-3d",
    category: "3D Game Development",
    title: "Godawari 3D Campus Game",
    src: "/images/projects/godawari-3d.jpg",
    screenshots: [
      "/images/projects/godawari-1.jpg",
      "/images/projects/godawari-2.jpg"
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.unity,
        PROJECT_SKILLS.csharp,
        PROJECT_SKILLS.blender
      ],
      backend: []
    },
    github: "#",
    live: "#",
    content: function() {
      return (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Project Overview</h3>
            <p>A 3D game simulation of the Sushma Godawari College campus where players can explore the virtual college ground and complete missions in a real-world inspired environment.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Technical Details</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Built with Unity 3D</li>
              <li>C# Scripting for Game Logic</li>
              <li>3D Modeling with Blender</li>
              <li>Interactive Environment</li>
              <li>Mission-based Gameplay</li>
            </ul>
          </div>
        </div>
      );
    },
  },
  {
    id: "social-media-design",
    category: "Graphic Design",
    title: "Social Media Campaign Design",
    src: "/images/projects/social-media.jpg",
    screenshots: [
      "/images/projects/social-1.jpg",
      "/images/projects/social-2.jpg"
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.adobe,
        PROJECT_SKILLS.adobe
      ],
      backend: []
    },
    github: "#",
    live: "#",
    content: function() {
      return (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Project Overview</h3>
            <p>Designed multiple attention-grabbing social media graphics for brand campaigns that significantly increased engagement and visibility across platforms like Facebook and Instagram.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Design Work Includes</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Social Media Posts</li>
              <li>Campaign Banners</li>
              <li>Event Graphics</li>
              <li>Promotional Materials</li>
              <li>Branded Content</li>
            </ul>
          </div>
        </div>
      );
    },
  },
  {
    id: "ecommerce-ui",
    category: "UI/UX Design",
    title: "E-commerce UI Design",
    src: "/images/projects/ecommerce-ui.jpg",
    screenshots: [
      "/images/projects/ecommerce-1.jpg",
      "/images/projects/ecommerce-2.jpg"
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.figma,
        PROJECT_SKILLS.adobe,
        PROJECT_SKILLS.uiux
      ],
      backend: []
    },
    github: "#",
    live: "#",
    content: function() {
      return (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Project Overview</h3>
            <p>Created a modern and responsive UI/UX design for an e-commerce platform with a focus on user flow, product highlights, and mobile-first design principles.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Design Features</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responsive Layout</li>
              <li>Intuitive Navigation</li>
              <li>Product Showcase</li>
              <li>Checkout Flow</li>
              <li>Mobile-First Approach</li>
              <li>Interactive Elements</li>
            </ul>
          </div>
        </div>
      );
    },
  }
];

export default projects;
