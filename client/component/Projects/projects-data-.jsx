import ayla from './ayla.jpg';
import crefin from './crefin.jpg';
import realEstate from './real-estate.jpg';
import travel from './travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'MSIT Alumni Association',
        description: "My team and I developed a comprehensive full-stack website using the MERN stack for our college. The primary objective of this platform was to enhance the interconnectedness between students and alumni, facilitating assistance, referrals, and other collaborative interactions.",
        tools: [ 'React' , 'Javascript' , 'Tailwind/CSS','Express', 'MongoDB', 'Node', 'cloudinary' , 'REST API' , 'AWS S3', 'Node Mailer', 'Joi', 'EC2', 'PM2', 'Nginx'],
        role: 'Software Engineer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'HealthCare',
        description: 'At a hackathon, we designed a healthcare website that analyzes lab reports to predict disease severity. It features a map and list view of nearby healthcare facilities and hospitals, along with an AI-driven virtual assistant for medical inquiries.',
        tools: ['ReactJS', 'Tailwind CSS', "Google Maps", "Node", "Express" , "JavaScript", "Mongo", "AWS S3",  "Leaflet" , "OpenAI" , "Vercel" , "Gmail Passkey"],
        role: 'Frontend-Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'ChatApp',
        description: 'We developed a responsive chat application using Socket.io for real-time conversations and integrated Google authentication for seamless user login.Along with user online status , typing and avatars',
        tools: ['React', 'Tailwind/CSS', 'Node', 'Mongo', 'Express', 'JavaScript', 'MongoDB', 'Netlify', 'SocketIO', 'Replicate AI', 'Cloudinary', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Avensis Tech-Fest',
        description: "My team and I developed a tech fest website for our college using the MERN stack, featuring an admin panel, registration, pass generation, and event management. Deployed on AWS EC2, it handled around 10,000 visits in 2 days.",
        tools: ['React' , 'Javascript' , 'Tailwind/CSS','Express', 'MongoDB', 'Figma' ,'Node', 'cloudinary' , 'REST API' , 'AWS S3', 'Node Mailer', 'Joi', 'EC2', 'PM2', 'Nginx'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];

