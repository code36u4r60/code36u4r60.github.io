import { v4 as uuid } from 'uuid'

export const WorkExperience = [
  {
    id: uuid(),
    name: 'Sargento de Infantaria - Exército ',
    place: 'Estado Maior das Forças Armadas ',
    dates: '07/2008 to 03/2015 ',
    details: `
    <p>Durante o meu percurso pelo Exército desempenhei as funções predestinadas aos cargos de Furriel e 2º Sargento de Infantaria com especialidade 031I-Atirador. Para além das normais funções foram desempenhas:</p>
    <ul>  
     <li>Comandante de secção do pelotão NBQR (Nuclear, Biológicos, Químicos e Radiológicos) </li>
     <li>Sargento Responsável pelo Reabastecimentos e Depósitos do Comando Pessoal</li> 
     <li>Elemento da equipa apoio a proteção civil com valências de Sapadores Florestais</li> 
    `,
  },
  {
    id: uuid(),
    name: 'Vogal de Assembleia',
    place: 'Junta de Freguesia de Candemil, Concelho de Amarante ',
    dates: '10/2005 to 07/2008',
    details: `
    <p>desconhecia, tomar decisões que impactam terceiros. Ter de encontrar soluções que fossem ao encontro dos reais problemas e os solucionassem, foi de entre outros coisas o que me deu mais prazer.</p> 
    <p>Esta passagem teve também relevância no aprendizado relativo a analise de orçamentos e relatórios de contas.  A participação na análise ou na elaboração de planos e projetos foi uma outra experiência enriquecedora.</p>
    `,
  },
]

export const OtherTraining = [
  {
    id: uuid(),
    name: 'Maratona Discover',
    place: 'Rocketseat',
    dates: '08/2022',
    details: `
    <p>A Maratona Discover é uma jornada de 41 horas de introdução a tecnologias de desenvolvimento web. O conteúdo está dividido em três cursos focados na introdução ao desenvolvimento web. Esta formação foi importante na mediada em que possibilitou rever alguns conceitos (Programação Orientada a Objetos, Programação Funcional, Front-end, Back-end, ...) bem como, rever e atualizar o meu conhecimento sobre algumas ferramentas (HTML, CSS, JavaScript, TypeScript, NodeJS, SQL (sqlite), ReactJS, Git).</p>
    `,
  },
  {
    id: uuid(),
    name: 'Web Fundamentals Learning Path',
    place: 'TryHackMe',
    dates: '08/2022',
    details: `
    <p>Esta formação tem duração de 32 horas e é dividida em vários módulos o foco é na análise de venerabilidades a aplicações web. O primeiro modulo consistiu numa revisão ao funcionamento da Internet. O segundo modulo é focado na exploração de algumas vulnerabilidades de aplicações web mais populares. O terceiro modulo é nós apresentado o Burp Suite, que consiste numa ferramenta padrão do setor para hacking de aplicações web.  A formação termina com um modulo essencialmente prático onde se realização vários exercícios de análise de venerabilidades apreendia no modulo anteriores.</p>
    `,
  },
  {
    id: uuid(),
    name: 'Pre Security Learning Path',
    place: 'TryHackMe',
    dates: '03/2022',
    details: `
    <p>Esta formação teve a duração de 40 horas e é pré-requisito dentro da plataforma para poder continuar os estudos. O curso é formado pelos seguintes módulos:</p>
    <ul>
    <li>Introduction to Cyber Security</li>
    <li>Network Fundamentals</li>
    <li>How The Web Works</li>
    <li>Linux Fundamentals</li>
    <li>Windows Fundamentals</li>
    </ul>
    `,
  },
  {
    id: uuid(),
    name: 'Arquitetura de Redes',
    place: 'Gabriel Torres - Udemy',
    dates: '03/2022',
    details: `
    <p>Durante as cerca de 20 horas tive a oportunidade de aprender entre muitas outras coisas: princípios de funcionamento de redes; transmissão e codificação e modulação de dados; topologias de rede; equipamentos de redes (hubs, switches, routers e balanceadores de carga); virtualização; protocolos e arquiteturas (modelo OSI e TCP/IP); rede WI-FI; segurança de redes.</p>
    `,
  },
  {
    id: uuid(),
    name: 'GoStack 14',
    place: 'Rocketseat',
    dates: '12/2020',
    details: `
    <p>Bootcamp de 160 horas formado por vários módulos onde o foco foram as tecnologias NodeJS, ReactJS e React Native. Fez também parte do curso: TypeScript, Base de Dados, ORM's com foco no TypeORM, Test-driven development (TDD), Clean Code e o SOLID.</p>
    <p>Conclui esta formação com nota máxima 10 em 10.</p>
    `,
  },
  {
    id: uuid(),
    name: 'Google IT Automation with Python',
    place: 'Google - Coursera ',
    dates: '09/2020  ',
    details: `
    <p>Este certificado de seis cursos, desenvolvido pelo Google, foi desenvolvido para fornecer aos profissionais de TI habilidades sob demanda, incluindo Python, Git e automação de TI. O currículo prático foi desenvolvido para ensinar os alunos a escrever código em Python, com foco especial em como isso se aplica à automação de tarefas no mundo do suporte de TI e administração de sistemas. Eles devem ter uma base sólida sobre como usar o Git e o GitHub, solucionar problemas e depurar problemas complexos e aplicar a automação em escala usando o gerenciamento de configuração e a nuvem para prepará-los para um suporte de TI mais avançado Cargos de Especialista ou Administrador de Sistemas Júnior.</p>
    <p>Todos os cursos foram concluídos com a classificação máxima, 100%.</p>
    <h3>Cursos:</h3>
    <ul>
      <li>Crash Course on Python</li>
      <li>Using Python to Interact with the Operating System</li>
      <li>Introduction to Git and GitHub</li>
      <li>Troubleshooting and Debugging Techniques</li>
      <li>Configuration Management and the Cloud</li>
      <li>Automating Real-World Tasks with Python</li>
    </ul>
    `,
  },
  {
    id: uuid(),
    name: 'Python for Everybody Specialization',
    place: 'University of Michigan - Coursera ',
    dates: '08/2020  ',
    details: `
    <p>Esta especialização é formada por 5 cursos. Durante as cerca de 77 horas de formação foram abordados conceitos fundamentais de programação, incluindo estruturas de dados, aplicações web e base de dados, usando a linguagem de programação Python.</p>
    <p>Todos os cursos foram concluídos com a classificação máxima, 100%.</p>
    <h3>Cursos:</h3>
    <ul>
      <li>Programming for Everybody (Getting Started with Python)</li>
      <li>Python Data Structures</li>
      <li>Using Python to Access Web Data</li>
      <li>Using Databases with Python</li>
      <li>Capstone: Retrieving, Processing, and Visualizing Data with Python</li>
    </ul>
    `,
  },
]

export const AcademicEducation = [
  {
    id: uuid(),
    name: 'Mestrado Integrado em Engenharia Eletrotécnica e de Computadores - Ramo Telemática',
    place: 'UTAD - Universidade Trás-os-Montes e Alto Douro',
    dates: 'In progress',
    details: ``,
  },
  {
    id: uuid(),
    name: 'Licenciatura em Ciências de Engenharia Eletrotécnica e de Computadores - Ramo Telemática',
    place: 'UTAD - Universidade Trás-os-Montes e Alto Douro',
    dates: '07/2022',
    details: `<p>A obtenção de este curso deve-se ao facto de ter completado com sucesso todas as unidades curriculares dos três primeiros anos do Mestrado Integrado em Engenharia Eletrotécnica e de Computadores - Ramo Telemática.</p>
    `,
  },
  {
    id: uuid(),
    name: 'Licenciatura em Engenharia Informática',
    place: 'UFP - Universidade Fernando Pessoa',
    dates: 'Interrupted',
    details: `<p>A breve passagem pela UFP possibilitou-me obter conhecimentos em áreas como: Investigação Operacional, Base Dados, Multimédia, Desenvolvimento de Jogos de Computadores, Organização e Gestão de Empresas, Análise de Sistemas, Sistemas de Informação, entre outras.</p>
    <p>Para além do conhecimento académico, obtive algo para mim de muito maior valor, tive o prazer de conhecer pessoas que se tornariam referência na minha vida. Infelizmente tive de interromper o ciclo.</p>
    `,
  },
  {
    id: uuid(),
    name: 'Curso Secundário Tecnologias de Eletrotecnia / Eletrónica, da dominante Científica e Natural.',
    place: 'Escola Secundária de Amarante',
    dates: '07/2004',
    details: `<p>Este curso tem como característica a sua componente tecnológica teórica e prática muito forte. Durante este curso foram transmitidas as bases do conhecimento de áreas como Eletricidade, Sistemas Digitais e tecnologias em geral.</p> 
    <p>Para além de outras experiências, foi durante este percurso que tive as primeiras aventuras com a automação e com a robótica.</p>
    
    `,
  },
]

export const Technologies = [
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

export const AboutMe = {
  name: 'Eduardo Queirós',
  career: 'Full Stack Developer',
  presentation:
    "I'm a recent graduate in Electrical and Computer Engineering and self-taught in web technologies. I am currently completing training in Node.js and React at Rocketseat. Academically, the next steps are to complete the Master in Electrical Engineering and the Master in Computer Engineering and Computer and Web Technology, with a focus on Cyber Security and Data Science. Professionally, my closest goal is to evolve professionally as a web developer. In the future, I hope to be able to work on something that can combine web development with data science and cybersecurity.",
  avatar_url: 'https://avatars.githubusercontent.com/u/17265214?v=4',
}
