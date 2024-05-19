import  Nasa  from "@/Utils/Assets/Projects/Nasa.jpeg";
import  ChatApp  from "@/Utils/Assets/Projects/ChatApp.jpg";
import  Alumni from "@/Utils/Assets/Projects/Alumni.png";


const projectData = [
    { 
      id: 1, 
      title: "MSIT Alumni Website", 
      image: Alumni , 
      techStack: ["Tailwind CSS" ,"Javascript", "React", "Node.js", "MongoDB" , "Express.js", "AWS", "Cloudinary"], 
      description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms." ,
      code: "https://github.com/Yashc885/Portfolio-"  
    },
    { 
      id: 2, 
      title: "Real-Time ChatApp", 
      image: ChatApp , 
      techStack: ["Tailwind CSS" ,"Javascript", "React", "Node.js", "MongoDB" , "Express.js"], 
      description: "Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms." ,
      code: "https://github.com/Yashc885/ChatApp"  
    },
    { 
      id: 3, 
      title: "NASA-APOD ", 
      image: Nasa , 
      techStack: ["Django", "Python", "MySQL", "Rest FrameWorks"], 
      description: "Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms. " ,
      code: "https://github.com/Yashc885/Nasa-APOD"  
    },
   
  ];
  
  export default projectData;
  