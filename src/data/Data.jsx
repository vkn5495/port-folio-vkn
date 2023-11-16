import { BiHome } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import { BiFolderOpen } from 'react-icons/bi';
import { BiEnvelopeOpen } from 'react-icons/bi';
import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
  } from 'react-icons/fa';
import { FiExternalLink, FiFileText, FiUser } from 'react-icons/fi';

import Work1 from '../img/project-1.jpeg';
import Work2 from '../img/project-2.jpg';
import Work3 from '../img/project-3.jpeg';
import Work4 from '../img/project-4.jpeg';
import Work5 from '../img/project-5.jpg';
import Work6 from '../img/project-6.jpg';

import Theme1 from '../img/purple.png';
import Theme2 from '../img/red.png';
import Theme3 from '../img/blueviolet.png';
import Theme4 from '../img/blue.png';
import Theme5 from '../img/goldenrod.png';
import Theme6 from '../img/magenta.png';
import Theme7 from '../img/yellowgreen.png';
import Theme8 from '../img/orange.png';
import Theme9 from '../img/green.png';
import Theme10 from '../img/yellow.png';

export const Links = [
    {
        id: 1,
        name: 'home',
        icon: <BiHome />,
        path: '/',
    },
    {
        id: 2,
        name: 'about',
        icon: <BiUser />,
        path: '/about',
    },
    {
        id: 3,
        name: 'portfolio',
        icon: <BiFolderOpen />,
        path: '/portfolio',
    },
    {
        id: 4,
        name: 'contact',
        icon: <BiEnvelopeOpen />,
        path: '/contact',
    },
]


export const PersonalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Vivek',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Naik',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '28 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'India',
    },
  
    {
      id: 5,
      title: 'Freelance : ',
      description: 'Available',
    },
  
    {
      id: 6,
      title: 'Address : ',
      description: 'Kumta',
    },
  
    {
      id: 7,
      title: 'Phone : ',
      description: '+91 8880881814',
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: 'vkn5495@gmail.com',
    },
  
    {
      id: 9,
      title: 'Langages : ',
      description: 'Kannada, English',
    },
    {
      id: 10,
      title: 'gitHub-project: ',
      description: 'https://github.com/vkn5495/amazon-project-vkn',
    },
  ];
  
  export const Status = [
    {
      id: 1,
      no: 'fresher',
      title: 'Years of <br /> Experience',
    },
  
    {
      id: 2,
      no: '2+',
      title: 'Completed <br /> Projects',
    },
  
  //   {
  //     id: 3,
  //     no: '81+',
  //     title: 'Happy <br /> Customers',
  //   },
  // 
  //   {
  //     id: 4,
  //     no: '53+',
  //     title: ' Awards <br /> Won',
  //   },
  ];

  export const skills = [
    {
      id: 1,
      title: 'Html',
      percentage: '60',
    },
  
    {
      id: 2,
      title: 'Javascript',
      percentage: '65',
    },
  
    {
      id: 3,
      title: 'Css',
      percentage: '60',
    },
  
    {
      id: 4,
      title: 'React',
      percentage: '65',
    },
  
    {
      id: 5,
      title: 'graphic design',
      percentage: '95',
    },
  
    {
      id: 6,
      title: 'node',
      percentage: '10',
    },
  
    {
      id: 7,
      title: 'express',
      percentage: '5',
    },
  
    {
      id: 8,
      title: 'mongoDB',
      percentage: '5',
    },
  ];
  

  export const resume = [
    {
      id: 1,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2023 - PRESENT',
      title: 'Web Developer(front-end) <span> react js(visual studio code ) </span>',
      desc: 'i am currrently studing in react js and learned java script ,i am freasher in this field and present searching in job,',
    },
  
    {
      id: 2,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2019 - 2023',
      title: 'graphic Designer <span> PhotoShop </span>',
      desc: 'Over 3 years of photo editing experience for magazines, websites, and newspapers, knack in identifying colors, shades noise in photographs proficient in using latest photo editing software like Photoshop. Ability to handle multiple projects simultaneously and independently.',
    },
  
    {
      id: 3,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2017 - 2019',
      title: 'hospital reception-billing department <span>hospital management </span>',
      desc: 'i have 3 years experience in rajShekar multiSpecial hospital banglore, i worked hospital front-executive-officer and out patient department - in patient department.',
    },
  
    {
      id: 4,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2013-2016',
      title: 'Bachelor’s of Commerce <span>  Karnataka University Dharwad </span>',
      desc: 'Govt. First grade College, kumta(U.k)/ Karnataka University Dharwad',
    },
  
    {
      id: 5,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2010-2013',
      title: 'Senior Secondary (12th)  <span>  Pre-Univercity </span>',
      desc: 'Govt. H Benne PU College Kumat, Pre-Univercity ',
    },
  
    {
      id: 6,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2007-2010',
      title: 'Secondary School (SSLC)  <span> North-Canar </span>',
      desc: 'Janatha vidhyalaya Dhareshwar kumta(U.k), North-Canar',
    },
  ];

  export const portfolio = [
    {
      id: 1,
      img: Work1,
      title: 'Photo Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Photo',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'retouch',
          link:'https://drive.google.com/file/d/1y1vNpttBCZEp9hAR8kSb7aLwBYDP1W0T/view?usp=drive_link'
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Photoshop',
        },
      ],
    },
    {
      id: 2,
      img: Work4,
      title: 'photo Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'image',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'retouch and cc',
          link:'https://drive.google.com/file/d/144tptCNRvtTxdFFSPQW2VPZWWCiqA_HT/view?usp=drive_link'
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Premium',
        },
        
      ],
    },
    {
      id:2,
      img: Work5,
      title: 'web developing',
      details: [
        {
          title: 'Project : ',
          desc: 'Website',
        },
        {
          title: 'Client : ',
          desc: 'portFolio',
          link:'https://github.com/vkn5495/port-folio-vkn'
        },
        {
          title: 'Language : ',
          desc: 'React JS, Node JS',
        },
        {
          title: 'Client : ',
          desc: 'amazon-project',
          link:'https://github.com/vkn5495/amazon-project-vkn'
        },
      ],
    },
  ];

  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(252, 35%, 51%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: '#4169e1',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];
  