import { v4 as uuid } from 'uuid'

export const courses = []

export const technologies = [
  {
    tag: 'Operation System',
    list: [
      {
        id: uuid(),
        name: 'Linux',
      },
      {
        id: uuid(),
        name: 'Windows',
      },
      {
        id: uuid(),
        name: 'Mac OS',
      },
    ],
  },
  {
    tag: 'Programming Language',
    list: [
      {
        id: uuid(),
        name: 'C',
      },
      {
        id: uuid(),
        name: 'C++',
      },
      {
        id: uuid(),
        name: 'Java',
      },
      {
        id: uuid(),
        name: 'JavaScript',
      },
      {
        id: uuid(),
        name: 'Python',
      },
      {
        id: uuid(),
        name: 'TypeScript',
      },
    ],
  },
  {
    tag: 'Development Tools',
    list: [
      {
        id: uuid(),
        name: 'Anaconda',
      },
      {
        id: uuid(),
        name: 'CSS',
      },
      {
        id: uuid(),
        name: 'Bootstrap',
      },
      {
        id: uuid(),
        name: 'HTML',
      },
      {
        id: uuid(),
        name: 'Git',
      },
      {
        id: uuid(),
        name: 'Node.js',
      },
      {
        id: uuid(),
        name: 'React',
      },
      {
        id: uuid(),
        name: 'CLion',
      },
      {
        id: uuid(),
        name: 'Jupyter',
      },
      {
        id: uuid(),
        name: 'PyCharm',
      },
      {
        id: uuid(),
        name: 'VSCode',
      },
    ],
  },
  {
    tag: 'Databases',
    list: [
      {
        id: uuid(),
        name: 'Fauna',
      },
      {
        id: uuid(),
        name: 'MongoDB',
      },
      {
        id: uuid(),
        name: 'PostgreSQL',
      },
    ],
  },
  {
    tag: 'Others',
    list: [
      {
        id: uuid(),
        name: 'Arduino',
      },
      {
        id: uuid(),
        name: 'Docker',
      },
      {
        id: uuid(),
        name: 'LTSpice',
      },
      {
        id: uuid(),
        name: 'Latex',
      },
    ],
  },
]

export const aboutMe = {
  name: 'Eduardo Queirós',
  career: 'Full Stack Developer',
  presentation:
    "I'm a recent graduate in Electrical and Computer Engineering and self-taught in web technologies. I am currently completing training in Node.js and React at Rocketseat. Academically, the next steps are to complete the Master in Electrical Engineering and the Master in Computer Engineering and Computer and Web Technology, with a focus on Cyber Security and Data Science. Professionally, my closest goal is to evolve professionally as a web developer. In the future, I hope to be able to work on something that can combine web development with data science and cybersecurity.",
  avatar_url: 'https://avatars.githubusercontent.com/u/17265214?v=4',
}
