import  Nasa  from "@/Utils/Assets/Projects/Nasa.jpeg";
import  ChatApp  from "@/Utils/Assets/Projects/ChatApp.jpg";
import  Alumni from "@/Utils/Assets/Projects/Alumni.png";


const projectData = [
    { 
      id: 1, 
      title: "MSIT Alumni Website", 
      image: Alumni , 
      techStack: ["Tailwind CSS" ,"Javascript", "React", "Node.js", "MongoDB" , "Express.js", "AWS", "Cloudinary"], 
      description: "My team and I developed a full-fledged dynamic website to enhance the interconnection among students and alumni of the college. As a front-end developer, I worked on creating the dashboard and the complete UI of the website with a responsive design for all screen sizes using ReactJS, Redux, and other necessary npm libraries. We used React Redux to manage the application's state, React Hook Form for handling forms, and Sun Editor for rich text editing. Additionally, we integrated Cloudinary to store images, reducing the complexity of the website." ,
      code: "https://github.com/Yashc885/Portfolio-"  
    },
    { 
      id: 2, 
      title: "Real-Time ChatApp", 
      image: ChatApp , 
      techStack: ["Tailwind CSS" ,"Javascript", "React", "Node.js", "MongoDB" , "Express.js"], 
      description: "Developed a real-time chat application using the MERN stack with integrated database storage for messages, robust authentication, and session management via cookies. The application leverages Socket.IO to facilitate real-time communication across different servers. It also features lazy loading, optimized performance, and seamless user experience without page reloads. Additionally, the app includes online status indicators and unique random profile pictures for all users." ,
      code: "https://github.com/Yashc885/ChatApp"  
    },
    { 
      id: 3, 
      title: "NASA-APOD ", 
      image: Nasa , 
      techStack: ["Django", "Python", "MySQL", "Rest FrameWorks"], 
      description: " Developed a dynamic application using a Python framework that changes the PC's background image by fetching it from the NASA APOD API. The application features a user interface created with Tkinter, allowing users to select the date with proper error handling to ensure no image pixelation. This unique application also incorporates an SQL database and a REST framework, providing a fast, no-reload experience." ,
      code: "https://github.com/Yashc885/Nasa-APOD"  
    },
   
  ];
  
  export default projectData;
  