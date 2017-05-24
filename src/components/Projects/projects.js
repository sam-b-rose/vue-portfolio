import * as images from '../../assets/img/repos';
import * as placeholders from '../../assets/img/repos/placeholders';

const PERSONAL = 'personal';
const CAREER = 'career';

export default [
  /* Career */
  {
    name: 'GitLab CE',
    org: 'GitLab',
    orgLink: 'https://about.gitlab.com',
    orgImage: images.GitLab,
    date: new Date(2017, 4, 12),
    type: CAREER,
    url: 'https://about.gitlab.com/products/',
    repoUrl: 'https://gitlab.com/gitlab-org/gitlab-ce',
    imageSrc: images.GitLabCE,
    placeholderSrc: placeholders.GitLabCE,
    tags: ['ruby', 'rails', 'html', 'css', 'js', 'vue'],
    description: `
      GitLab is an online Git repository manager with a wiki, issue tracking, CI and CD. It is a great way to manage git repositories on a centralized server. GitLab gives you complete control over your repositories or projects and allows you to decide whether they are public or private for free.
    `,
  },
  {
    name: 'GitLab EE',
    org: 'GitLab',
    orgLink: 'https://about.gitlab.com',
    orgImage: images.GitLab,
    date: new Date(2017, 3, 28),
    type: CAREER,
    url: 'https://about.gitlab.com/products/',
    repoUrl: 'https://gitlab.com/gitlab-org/gitlab-ee',
    imageSrc: images.GitLabEE,
    placeholderSrc: placeholders.GitLabEE,
    tags: ['ruby', 'rails', 'html', 'css', 'js', 'vue', 'jquery'],
    description: `
      GitLab is an online Git repository manager with a wiki, issue tracking, CI and CD. It is a great way to manage git repositories on a centralized server. GitLab gives you complete control over your repositories or projects and allows you to decide whether they are public or private for free.
    `,
  },
  {
    name: 'PDFLab',
    org: 'GitLab',
    orgLink: 'https://about.gitlab.com',
    orgImage: images.GitLab,
    date: new Date(2017, 4, 11),
    type: CAREER,
    url: 'https://gitlab.com/samrose3/pdflab/blob/master/README.md',
    repoUrl: 'https://gitlab.com/samrose3/pdflab',
    imageSrc: images.PDFLab,
    placeholderSrc: placeholders.PDFLab,
    tags: ['html', 'js', 'vue'],
    description: `
      PDFLab is a Vue component that makes it easy to render PDF files. It's as simple as passing in the URL of the PDF or the file data and the component renders. Powered by the awesomeness of <a href="https://mozilla.github.io/pdf.js/" target="_blank" rel="noopener">pdf.js</a> ✨
    `,
  },
  {
    name: 'www-gitlab-com',
    org: 'GitLab',
    orgLink: 'https://about.gitlab.com',
    orgImage: images.GitLab,
    date: new Date(2017, 3, 28),
    type: CAREER,
    url: 'https://about.gitlab.com',
    repoUrl: 'https://gitlab.com/gitlab-com/www-gitlab-com',
    imageSrc: images.wwwGitLabCom,
    placeholderSrc: placeholders.wwwGitLabCom,
    tags: ['ruby', 'middleman', 'html', 'css', 'js', 'jquery'],
    description: 'The landing and info site GitLab.',
  },
  {
    name: 'RESolution',
    org: 'Cadre5',
    orgLink: 'https://www.cadre5.com',
    orgImage: images.Cadre5,
    date: new Date(2016, 11, 7),
    type: CAREER,
    url: 'http://web.ornl.gov/RES/',
    imageSrc: images.RESolution,
    placeholderSrc: placeholders.RESolution,
    tags: ['c#', 'html', 'css', 'js', 'angularjs'],
    description: `
      Played key role in development of AngularJS ASP.NET web app for Oak Ridge National Labs. Project involved highly customize UI and responsive design, requiring extensive knowledge of application architecture, component-based layout, and mobile design.
    `,
  },
  {
    name: 'Keurig GMCR',
    org: 'Cadre5',
    orgLink: 'https://www.cadre5.com',
    orgImage: images.Cadre5,
    date: new Date(2014, 7, 12),
    type: CAREER,
    url: 'http://www.keuriggreenmountain.com/',
    imageSrc: images.Keurig,
    placeholderSrc: placeholders.Keurig,
    tags: ['C#', 'html', 'css', 'js', 'knockoutjs'],
    description: `
      Designed and developed scheduling application for the production of Keurig K-Cups at Keurig Green Mountain factory in Knoxville. Software used custom predictive algorithm to optimize K-Cup production and minimize assembly line overhead
    `,
  },

  /* Personal */
  {
    name: 'vue-portfolio',
    org: 'samrose3',
    orgLink: 'https://github.com/samrose3',
    orgImage: images.samrose3,
    date: new Date(2017, 4, 22),
    type: PERSONAL,
    url: 'https://samrose.me',
    repoUrl: 'https://github.com/samrose3/vue-portfolio',
    imageSrc: images.VuePortfolio,
    placeholderSrc: placeholders.VuePortfolio,
    tags: ['node', 'webpack', 'html', 'css', 'js', 'vue', 'bulma'],
    description: `
      I wanted a more maintainable way to document and display my work experience and personal projects. After discovering the improved development workflow of using Vue, I was ready to move away from the unmanagable mess of a single-page HTML page and create something that would be easy to improve and update. This portfolio was build from the <a href="#">vue-loader</a> template and utilizes the <a href="#">Bulma</a> CSS framework for consistency and responsiveness. Feel to fork and remix it for your own project."
    `,
  },
  {
    name: 'queue.dj',
    org: 'PartyLab',
    orgLink: 'https://gitlab.com/partylab',
    date: new Date(2017, 4),
    type: PERSONAL,
    url: 'https://queue.dj',
    repoUrl: 'https://gitlab.com/partylab/queuedj',
    imageSrc: images.queueDj,
    placeholderSrc: placeholders.queueDj,
    tags: ['node', 'express', 'firebase', 'twilio', 'soundcloud', 'html', 'css', 'js', 'vue'],
    description: `
      Queue DJ is an audio queuing service that allows the audience to participate. The host or DJ can compose the perfect queue of music to be streamed for an event while also receiving real-time feedback and suggestions from the audience. Queue DJ amplifies the voice of the audience, providing a non-disruptive experience for the DJ and an easy interaction for the audience - a win-win for both the DJ and the audience. The music for Queue DJ is from SoundCloud, which provides free access to a wide range of music.\n
      Everyone can participate in the party! Crowd DJ-ing has never been easier. No logins, no downloads or configurations, and more time to party.
    `,
  },
  {
    name: 'dadjokes',
    org: 'samrose3',
    orgLink: 'https://github.com/samrose3',
    orgImage: images.DadjokesLogo,
    date: new Date(2016, 10),
    type: PERSONAL,
    url: 'https://dadjokes.samrose3.com',
    repoUrl: 'https://github.com/samrose3/dadjokes',
    imageSrc: images.dadjokes,
    placeholderSrc: placeholders.dadjokes,
    tags: ['python', 'django', 'postgres', 'reddit', 'html', 'css', 'js', 'react'],
    description: `
      An utterly fantastic Slack integration for classic dad jokes.\n
      The Slack channel was looking kinda boring and the <code>/giffy</code>'s where getting annoying. Time for a classic dad joke to lighten the mood!\n
      Add Slack dadjokes as a Slack integration to enable the <code>/dadjoke</code> slash command. This will grab a dad joke from Reddit's <a href="https://reddit.com/r/dadjokes" target="_blank" rel="noopener">r/dadjokes</a>.
    `,
  },
  {
    name: 'eventhunt',
    org: 'samrose3',
    orgLink: 'https://github.com/samrose3',
    date: new Date(2016, 9),
    type: PERSONAL,
    url: 'https://eventhunt-samrose.herokuapp.com',
    repoUrl: 'https://github.com/samrose3/eventhunt',
    imageSrc: images.eventhunt,
    placeholderSrc: placeholders.eventhunt,
    tags: ['python', 'django', 'eventbrite', 'html', 'css', 'js', 'react'],
    description: `
      Filter by categories of interest to find the right events for you in your area. This is a web app in progress. I created it for learning purposes, to practice and experiment with a Django and React stack. I've enjoyed working with the combination and find the development workflow to be my favorite so far.`,
  },
  {
    name: 'autocomplete-ascii-emoji',
    org: 'samrose3',
    orgLink: 'https://github.com/samrose3',
    date: new Date(2016, 6),
    type: PERSONAL,
    url: 'https://github.com/samrose3/autocomplete-ascii-emoji',
    repoUrl: 'https://github.com/samrose3/autocomplete-ascii-emoji',
    imageSrc: images.autocomplete,
    placeholderSrc: placeholders.autocomplete,
    tags: ['coffescript'],
    description: `
      Adds ASCII emoji autocompletion to autocomplete-plus ¯\\_(ツ)_/¯.
      Shows ASCII emojis as suggestions when typing <code>:</code> and a word. There is also an Atom command to open a <a href="https://gist.github.com/samrose3/37d15db8821fe1fc8edf01db24670ceb" target="_blank" rel="noopener">cheat sheet</a> for quick reference.
    `,
  },
  {
    name: 'trex-runner',
    org: 'samrose3',
    orgLink: 'https://github.com/samrose3',
    orgImage: images.Trex,
    date: new Date(2016, 3),
    type: PERSONAL,
    url: 'https://github.com/samrose3/trex-runner',
    repoUrl: 'https://github.com/samrose3/trex-runner',
    imageSrc: images.TrexRunner,
    placeholderSrc: placeholders.TrexRunner,
    tags: ['vhdl'],
    description: 'VHDL implementation of the T-Rex game from Google Chrome.',
  },
  {
    name: 'StudyLoop',
    org: 'samrose3',
    orgLink: 'https://github.com/samrose3',
    orgImage: images.StudyLoopLogo,
    date: new Date(2016, 0),
    type: PERSONAL,
    url: 'https://github.com/samrose3/studyloop-ios',
    repoUrl: 'https://github.com/samrose3/studyloop-ios',
    imageSrc: images.StudyLoop,
    placeholderSrc: placeholders.StudyLoop,
    tags: ['ios', 'swift', 'firebase', 'aws'],
    description: `
      StudyLoop is a group messaging app for your college classes. Instantly get help from other students in your class. Immediately reach all your classmates with organized, collaborative messaging. Simply select your university and add the courses you are in for the semester. Conversations are organized by assignment into what are called Loops. Create and join Loops within a course to discuss focused topics such as Homework #2 or Exam 1 Review. Message classmates within each loop. Send photo attachments, emojis, and links.
    `,
  },
];
