import { v4 as uuid } from 'uuid'

export const AboutMe = {
  name: 'Eduardo Queirós',
  career: 'Full Stack Developer',
  presentation:
    "I'm a recent graduate in Electrical and Computer Engineering and self-taught in web technologies. I am currently completing training in Node.js and React at Rocketseat. Academically, the next steps are to complete the Master in Electrical Engineering and the Master in Computer Engineering and Computer and Web Technology, with a focus on Cyber Security and Data Science. Professionally, my closest goal is to evolve professionally as a web developer. In the future, I hope to be able to work on something that can combine web development with data science and cybersecurity.",
  avatar_url: 'https://avatars.githubusercontent.com/u/17265214?v=4',
}

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
    tag: 'Frameworks and Libraries',
    list: [
      {
        id: uuid(),
        name: 'Bootstrap',
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
        name: 'Vue.js',
      },
      {
        id: uuid(),
        name: 'VuePress',
      },
    ],
  },
  {
    tag: 'Code Editors',
    list: [
      {
        id: uuid(),
        name: 'CLion',
      },
      {
        id: uuid(),
        name: 'IntelliJ IDEA',
      },
      {
        id: uuid(),
        name: 'Jupyter Notebook',
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
        name: 'CSS',
      },
      {
        id: uuid(),
        name: 'Docker',
      },
      {
        id: uuid(),
        name: 'Git',
      },
      {
        id: uuid(),
        name: 'HTML',
      },
      {
        id: uuid(),
        name: 'LTSpice',
      },
      {
        id: uuid(),
        name: 'Latex',
      },
      {
        id: uuid(),
        name: 'Markdown',
      },
    ],
  },
]

export const WorkExperience = [
  {
    id: uuid(),
    name: 'Sargento de Infantaria - Exército ',
    place: 'Estado Maior das Forças Armadas ',
    dates: '07/2008 to 03/2015 ',
    details: `
    <p>Durante o meu percurso pelo Exército desempenhei as funções predestinadas aos cargos de Furriel e 2º Sargento de Infantaria com especialidade 031I-Atirador. Para além das normais funções foram desempenhas:</p>
    <ul>  
     <li>Comandante de secção do pelotão NBQR (Nuclear, Biológicos, Químicos e Radiológicos)</li>
     <li>Sargento Responsável pelo Reabastecimentos e Depósitos do Comando Pessoal</li> 
     <li>Elemento da equipa apoio a proteção civil com valências de Sapadores Florestais</li> 
    </ul>
    `,
  },
  {
    id: uuid(),
    name: 'Vogal de Assembleia',
    place: 'Junta de Freguesia de Candemil, Concelho de Amarante ',
    dates: '10/2005 to 07/2008',
    details: `
    <p>O cargo desempenhado possibilitou o contacto com uma realidade que até a data desconhecia, tomar decisões que impactam terceiros. Ter de encontrar soluções que fossem ao encontro dos reais problemas e que os solucionassem, foi, entre outras coisas, o que me deu mais gosto de fazer.</p> 
    <p>Esta passagem teve também relevância no aprendizado relativo a análise de orçamentos e relatórios de contas.  A participação na análise ou na elaboração de planos e projetos foi outra experiência enriquecedora.</p>
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
    dates: '09/2011 to 07/2022 ',
    details: `
    <h4>Média Final: 13/20 Valores</h4>

    <p>Esta formação caracteriza-se por transmitir uma base solida em áreas como, Matemática e Estatística, Física, Telecomunicações, Eletricidade e Energia, Eletrónica, Telecomunicações, Computadores.</p>
    
    <p>Contudo, durante a formação houve áreas mais relevantes para mim e, consequentemente, obtive melhores resultados. Aproveito para referir algumas conquistas que considero mais relevantes na minha formação.</p>
    <ul>
      <li>
        <p><strong>Programação Orientada a Objetos</strong></p>
        <p>O paradigma foi-nos apresentado recorrendo a linguagem de programação Java.</p> 
        <p>Nesta componente obtive <strong>20/20 valores</strong>.</p>
      </li>
      <li>
        <p><strong>Redes de Computadores</strong></p>
        <p>A unidade apresentou-se em duas componentes, teórica e prática. Durante a componente prática foi-nos apresentado dois desafios, um exercício prático de Routing e o desenvolvimento de solução usando RMI (remote method invocation) ou sockets.</p> 
        <p>Para o desafio de routing foi-nos pedido para configurar uma rede em ambiente de stress, onde se colocou em prática todo o conhecimento adquirido.</p>
        <p>Nesse desafio obtive <strong>20/20 valores</strong>.</p>
        <p>Para o desafio da solução RMI ou sockets, optei por desenvolver um “Jogo do Galo” multiplayer online usando o JavaRMI. Optei por usar RMI por nunca ter trabalhado ao contrário da abordagem usando sockets com qual já havia desenvolvido.</p>
        <p>O projeto pode ser consultado através do link:
          <a href="https://github.com/code36u4r60/jogo-do-galo"
          target="_blank"
          rel="noopener noreferrer">https://github.com/code36u4r60/jogo-do-galo<a/></p>
        <p>Nesse desafio obtive <strong>20/20 valores.</strong></p>
      </li>
      <li>
        <p><strong>Instrumentação e Sensores</strong></p>
        <p>Esta unidade curricular foi a porta de entrada no mundo do IOT (internet of things). Durante esta unidade curricular desenvolvi um projeto que visa a monitorização em tempo real de um conjunto de sensores. Para este projeto foi usado: Arduíno, o protocolo comunicação LoRa, a plataforma TheThingsNetwork e a ThingsSpeak.</p>
        <p>O projeto pode ser consultado através do link:
        <a href="https://github.com/code36u4r60/water-sensor-utad"
        target="_blank"
        rel="noopener noreferrer">https://github.com/code36u4r60/water-sensor-utad<a/></p>
        <p>Obtive a classificação <strong>19/20 valores</strong> quer no projeto como nota final da unidade.</p>
      </li>
      <li>
        <p><strong>Projeto em Engenharia Eletrotécnica e de Computadores</strong></p>
        <p>No âmbito do projeto foi desenvolvido um sistema de caracterização de gases. A realização do projeto levou em conta os seguintes pontos:</p> 
        <ul>
            <li>
              Preferencialmente usar sensores de baixo custo de mercado.
            </li>

            <li>
              Desenvolver uma interface (biblioteca em c++) com o objetivo de facilitar a interação com os sensores mais acessível.
            </li>
            <li>
              Desenvolver uma plataforma que garanta um maior controlo dos gases durante os testes. 
            </li>
        </ul>
        <p>O projeto pode ser consultado através do link:
        <a href="https://github.com/code36u4r60/sensors-mq-project"
        target="_blank"
        rel="noopener noreferrer">https://github.com/code36u4r60/sensors-mq-project<a/></p>
        <p>Obtive a classificação <strong>17/20 valores</strong>.</p>
      </li>
    </ul>    
    `,
  },
  {
    id: uuid(),
    name: 'Licenciatura em Engenharia Informática',
    place: 'UFP - Universidade Fernando Pessoa',
    dates: '09/2013 Interrupted',
    details: `
    <p>A breve passagem pela UFP possibilitou-me obter conhecimentos em áreas como: 
    Investigação Operacional, Base Dados, Multimédia, Desenvolvimento de Jogos de Computadores, 
    Organização e Gestão de Empresas, Análise de Sistemas, Sistemas de Informação, entre outras.</p>
    <p>Para além do conhecimento académico, obtive algo para mim de muito maior valor, tive o prazer 
    de conhecer pessoas que se tornariam referência na minha vida. Infelizmente tive de interromper o ciclo.</p>
    `,
  },
  {
    id: uuid(),
    name: 'Curso Formação de Sargentos Contratados - 031 Atirador de Infantaria',
    place: 'Ministério da Defesa Nacional',
    dates: '07/2008 to 12/2008',
    details: `
    <h4>Média Final: 14/20 Valores</h4>
    <p>Esta formação para além de dotar os militares com os conhecimentos referentes à especialidade, 
    também prepara os mesmos para desempenhar funções de liderança e de formadores, características 
    essas, que são fundamentais no desempenho das funções de sargento.</p>
    `,
  },
  {
    id: uuid(),
    name: 'Curso Secundário Tecnologias de Eletrotecnia / Eletrónica, da dominante Científica e Natural.',
    place: 'Escola Secundária de Amarante',
    dates: '09/2000 to 07/2004',
    details: `
    <h4>Média Final: 13/20 Valores</h4>
    <p>Este curso tem como característica a sua componente tecnológica teórica e prática muito forte. Durante este curso foram transmitidas as bases do conhecimento de áreas como Eletricidade, Sistemas Digitais e tecnologias em geral.</p> 
    <p>Para além de outras experiências, foi durante este percurso que tive as primeiras aventuras com a automação e com a robótica.</p>
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
    <h4>Duração: 41 Horas</h4> 
    <p>A Maratona Discover é uma jornada de introdução a tecnologias de desenvolvimento web. O conteúdo está dividido em três cursos focados na introdução ao desenvolvimento web. Esta formação foi importante na medida em que possibilitou rever alguns conceitos (Programação Orientada a Objetos, Programação Funcional, Front-end, Back-end, ...) bem como, rever e atualizar o meu conhecimento sobre algumas ferramentas (HTML, CSS, JavaScript, TypeScript, NodeJS, SQL (sqlite), ReactJS, Git).</p>
    
    `,
  },
  {
    id: uuid(),
    name: 'Web Fundamentals Learning Path',
    place: 'TryHackMe',
    dates: '08/2022',
    details: `
    <h4>Duração: 32 Horas</h4> 
    <p>Esta formação é dividida em vários módulos o foco é na análise de vulnerabilidades a aplicações web. O primeiro módulo consistiu numa revisão ao funcionamento da Internet. O segundo módulo é focado na exploração de algumas vulnerabilidades de aplicações web mais populares. O terceiro módulo é-nos apresentado o Burp Suite, que consiste numa ferramenta padrão do setor para hacking de aplicações web.  A formação termina com um módulo essencialmente prático onde se realizam vários exercícios de análise de vulnerabilidades apreendia nos módulos anteriores.</p>
    `,
  },
  {
    id: uuid(),
    name: 'Pre Security Learning Path',
    place: 'TryHackMe',
    dates: '03/2022',
    details: `
    <h4>Duração: 40 Horas</h4>
    <p>Esta formação é pré-requisito dentro da plataforma para poder continuar os estudos. O curso é formado pelos seguintes módulos:</p> 
    <ul>
      <li>Introduction to Cyber Security</li>
      <li>Network Fundamentals</li>
      <li>How The Web Works</li>
      <li>Linux Fundamentals</li>
      <li>Windows Fundamentals</li>
    </lu>
    `,
  },
  {
    id: uuid(),
    name: 'Arquitetura de Redes',
    place: 'Gabriel Torres - Udemy',
    dates: '03/2022',
    details: `
    <h4>Duração: 20.5 Horas</h4> 
    <p>Durante a formação tive a oportunidade de aprender entre muitas outras coisas: princípios de funcionamento de redes; transmissão e codificação e modulação de dados; topologias de rede; equipamentos de redes (hubs, switches, routers e balanceadores de carga); virtualização; protocolos e arquiteturas (modelo OSI e TCP/IP); rede WI-FI; segurança de redes.</p>
    `,
  },
  {
    id: uuid(),
    name: 'Google IT Automation with Python',
    place: 'Google - Coursera ',
    dates: '09/2020  ',
    details: ` 
    <h4>Média Final: 100%</h4> 
    <h4>Duração: 115 Horas</h4>
    <p>Este certificado de seis cursos, desenvolvido pelo Google, foi desenvolvido para fornecer aos profissionais de TI habilidades sob demanda, incluindo Python, Git e automação de TI. O currículo prático foi desenvolvido para ensinar os alunos a escrever código em Python, com foco em automação de tarefas no mundo do suporte de TI e administração de sistemas. Capacitar com sólidos conhecimentos em Git e o GitHub, solucionar problemas e depurar problemas complexos e aplicar a automação em escala usando o gerenciamento de configuração e a nuvem para prepará-los para um suporte de TI mais avançado Cargos de Especialista ou Administrador de Sistemas Júnior.</p>
    <p><strong>Cursos:</strong></p>
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
    name: 'Suporte em TI do Google',
    place: 'Google - Coursera ',
    dates: '09/2020',
    details: ` 
    <h4>Média Final: 100%</h4> 
    <h4>Duração: 138 Horas</h4>
    <p>Este certificado profissional composto por cinco cursos e desenvolvido pelo Google, tem o objetivo capacitar com o nível básico em suporte de TI.</p>
    <p><strong>Cursos:</strong></p>
    <ul>
      <li>Estrutura e Funcionamento das Redes de Computadores</li>
      <li>Segurança de TI: Defesa Contra as Artes Obscuras do Mundo Digital</li>
      <li>Sistemas Operacionais e Você: Tornando-se um Usuário Avançado</li>
      <li>Administração de Sistemas e Serviços de Infraestrutura de TI</li>
      <li>Fundamentos do Suporte Técnico</li>
    </ul>
    `,
  },
  {
    id: uuid(),
    name: 'Python for Everybody Specialization',
    place: 'University of Michigan - Coursera ',
    dates: '08/2020  ',
    details: `
    <h4>Média Final: 100%</h4> 
    <h4>Duração: 77 Horas</h4>
    <p>Esta especialização é formada por 5 cursos. Durante a formação foram abordados conceitos fundamentais de programação, incluindo estruturas de dados, aplicações web e base de dados, usando a linguagem de programação Python.</p>
    <p><strong>Cursos:</strong></p>
    <ul>
      <li>Programming for Everybody (Getting Started with Python)</li>
      <li>Python Data Structures</li>
      <li>Using Python to Access Web Data</li>
      <li>Using Databases with Python</li>
      <li>Capstone: Retrieving, Processing, and Visualizing Data with Python</li>
    </ul>
    `,
  },
  {
    id: uuid(),
    name: 'GoStack 14',
    place: 'Rocketseat',
    dates: '08/2020',
    details: `
    <h4>Média Final: 10/10 Valores</h4> 
    <h4>Duração: 160 Horas</h4>
    <p>Bootcamp formado por vários módulos onde o foco foram as tecnologias NodeJS, ReactJS e React Native. Fez também parte do curso: TypeScript, Base de Dados, ORM's com foco no TypeORM, Test-driven develpement (TDD), Clean Code e o SOLID.
    Conclui esta formação com nota máxima 10 em 10.</p>
    `,
  },
  {
    id: uuid(),
    name: 'JavaScript Funcional e Reativo',
    place: 'Cod3r Cursos Online - Udemy',
    dates: '08/2020',
    details: `
    <h4>Duração: 17 Horas</h4>
    <p>O curso aborda a programação JavaScript seguindo o paradigma Funcional e a programação Reativa com RxJS</p>
    `,
  },
  {
    id: uuid(),
    name: 'Fundamentos de Expressões Regulares (REGEX)',
    place: 'Cod3r Cursos Online - Udemy',
    dates: '08/2020',
    details: `
    <h4>Duração: 5.5 Horas</h4>
    <p>O curso ensina Expressões Regulares (Regex) e como as aplicar na diversas linguagens de programação (JavaScript, Go, Ruby, Python, Java..).</p>
    `,
  },
  {
    id: uuid(),
    name: 'Curso Web Moderno com JavaScript 2019 Completo + Projetos',
    place: 'Cod3r Cursos Online - Udemy',
    dates: '09/2019',
    details: `
    <h4>Duração: 76.5 Horas</h4>
    <p>Formação programador FullStack onde são abordadas as seguintes tecnologias: HTML, CSS, JavaScript, jQuery, Bootstrap, Webpack, Gulp, MySQL, Angular, React, Next, Vue.js, Node.js, entre outras.  </p>
    `,
  },
]

export const Portfolio = [
  {
    id: uuid(),
    name: 'The Zen Of Python',
    url: 'https://the-zen-of-python.netlify.app/',
    description: 'It is a javascript text animation',
    image_url:
      'https://raw.githubusercontent.com/code36u4r60/the-zen-of-python/main/.github/captura.gif',
    technologies: ['HTML, CSS, JavaScript'],
  },
]
