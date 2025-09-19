import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'rafiteugeuh24@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Rapz, I am reaching out to you because...',

    Roblox: 'https://www.roblox.com/users/8018529753/profile',
    upworkProfile:
        'https://www.upwork.com/freelancers/~0148981980a7a4639e?mp_source=share',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/444rapz' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/rafiteugeuh' },
    { name: 'Instagram', url: 'https://www.instagram.com/teugeuh24/' },
    { name: 'Discord', url: 'https://discord.com/users/1151601895639617647' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Html',
            icon: '/logo/html.jpeg',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'CSS',
            icon: '/logo/css.jpeg',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Java',
            icon: '/logo/java.png',
        },
        {
            name: 'PHP',
            icon: '/logo/php.png',
        },
        {
            name: 'Python',
            icon: '/logo/python.png',
        },
        {
            name: 'Lua',
            icon: '/logo/lua.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'Oracle',
            icon: '/logo/oracle.jpeg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Personal Portfolio',
        slug: 'personal-portfolio',
        liveUrl: 'https://ko-fi.com/rapz444',
        sourceCode: 'https://github.com/444rapz/portfolio-rapz',
        year: 2025,
        description: `
      My first personal portfolio website built to showcase my projects and skills as a beginner web developer. This project helped me learn the fundamentals of web development and modern frameworks. <br/> <br/>
      
      What I learned:<br/>
      <ul>
        <li>📱 Responsive Design: Making websites work on mobile and desktop</li>
        <li>🎨 CSS Styling: Learning Tailwind CSS for faster styling</li>
        <li>⚛️ React Basics: Understanding components and props</li>
        <li>🚀 Deployment: How to deploy websites using Vercel</li>
        <li>📝 Clean Code: Writing readable and organized code</li>
      </ul><br/>
      
      Challenges I faced:
      <ul>
        <li>Learning how to make responsive layouts</li>
        <li>Understanding React component structure</li>
        <li>Organizing project files properly</li>
        <li>Making smooth animations with basic CSS</li>
      </ul>
      `,
        role: `
      Frontend Developer (Learning) <br/>
      This was my first major project where I:
      <ul>
        <li>🎨 Designed simple layouts inspired by other portfolios</li>
        <li>⚛️ Built components using React and basic hooks</li>
        <li>📱 Made the site responsive using CSS media queries</li>
        <li>🔗 Added links to my social media and projects</li>
        <li>📚 Learned by watching tutorials and reading documentation</li>
      </ul>
      `,
        techStack: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Tailwind CSS',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/personal-portfolio.png',
        longThumbnail: '/projects/long/personal-portfolio.png',
        images: [
            '/projects/images/personal-portfolio-1.png',
            '/projects/images/personal-portfolio-2.png',
        ],
    },
    {
        title: 'WG STUDIO',
        slug: 'wg-studio',
        liveUrl:
            'https://www.roblox.com/games/98087702964261/UPDATE-YumePlaza-Voice',
        year: 2025,
        description: `
      My first Roblox game creation - a simple map voice chat. I built this to learn game development basics and Roblox Studio. <br/> <br/>
      
      Features I added:<br/>
      <ul>
        <li>🍃 WindShake</li>
        <li>🎵 Music System</li>
        <li>📩 Server Announcements</li>
      </ul><br/>
      
      What I learned:
      <ul>
        <li>How to use Roblox Studio tools</li>
        <li>Basic Lua scripting for game logic</li>
        <li>Working with Roblox physics and parts</li>
        <li>Creating simple UI elements</li>
      </ul>
      `,
        role: `
      Beginner Game Developer <br/>
      Learning game development through this project:
      <ul>
        <li>🗺️ Built terrain using Roblox Studio terrain tools</li>
        <li>📝 Wrote basic Lua scripts following online tutorials</li>
        <li>🎮 Tested the game with friends for feedback</li>
        <li>🔧 Fixed bugs by asking questions in developer forums</li>
        <li>📚 Learned from Roblox Developer Hub documentation</li>
      </ul>
      `,
        techStack: [
            'Roblox Studio',
            'Lua (Basic)',
            'Game Design',
            'Terrain Building',
        ],
        thumbnail: '/projects/thumbnail/roblox.jpeg',
        longThumbnail: '/projects/long/tumnnail.webp',
        images: ['/projects/images/roblox.png'],
    },
    {
        title: 'Recipe Finder',
        slug: 'recipe-finder',
        liveUrl: 'https://recipe-finder-rapit.netlify.app/',
        sourceCode: 'https://github.com/rapit/recipe-finder',
        year: 2024,
        description: `
      A simple website where users can search for recipes using ingredients they have at home. This was my second project to practice working with APIs and improve my JavaScript skills. <br/> <br/>
      
      Simple features:<br/>
      <ul>
        <li>🔍 Search recipes by ingredient name</li>
        <li>📖 Display recipe details with ingredients and instructions</li>
        <li>❤️ Save favorite recipes to local storage</li>
        <li>📱 Mobile-friendly design</li>
        <li>🎨 Simple and clean interface</li>
      </ul><br/>
      
      Learning experience:
      <ul>
        <li>First time working with external APIs</li>
        <li>Learning how to handle loading states</li>
        <li>Understanding local storage for saving data</li>
        <li>Practice with array methods like map and filter</li>
      </ul>
      `,
        role: `
      Frontend Developer (Still Learning) <br/>
      Built this project to practice:
      <ul>
        <li>🔌 API Integration: Used free recipe API (TheMealDB)</li>
        <li>📱 Responsive Design: Made it work on phones and computers</li>
        <li>💾 Local Storage: Saved user favorites in browser</li>
        <li>🎨 Basic Styling: Used CSS Grid and Flexbox</li>
        <li>🐛 Debugging: Learned to use browser dev tools</li>
      </ul>
      `,
        techStack: [
            'HTML',
            'CSS',
            'JavaScript',
            'API Integration',
            'Local Storage',
            'Netlify',
        ],
        thumbnail: '/projects/thumbnail/recipe.jpeg',
        longThumbnail: '/projects/long/recipe.webp',
        images: ['/projects/images/recipe.jpeg'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Junior Frontend Developer (Intern)',
        company: 'TechStart Solutions',
        duration: 'Mar 2024 - Present',
    },
    {
        title: 'Web Development Trainee',
        company: 'CodeBootcamp Indonesia',
        duration: 'Sep 2024 - Feb 2025',
    },
    {
        title: 'Freelance Web Developer',
        company: 'Self-employed',
        duration: 'Jun 2024 - Aug 2025',
    },
    {
        title: 'IT Support Assistant (Part-time)',
        company: 'KO-LAB',
        duration: 'Jan 2024 - Present',
    },
];
