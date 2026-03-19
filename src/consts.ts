export const SITE = {
  title: 'exshak',
  desc: 'Personal website',
  url: 'https://exshak.com',
}

export const WORK = {
  w: [
    { name: 'GitHub',  link: 'https://github.com/github',          icon: 'i-fa:github' },
  ],
  m: [
    { name: 'Configs', link: 'https://github.com/exshak/dotfiles', icon: 'i-noto:sushi' },
    { name: 'Scripts', link: 'https://gist.github.com/exshak',     icon: 'i-noto:shopping-bags' },
  ],
}

export const BLOG = [
  { title: 'Venture Capital Extremism', date: 'Sep 12, 2024', link: 'https://vcinfodocs.com/venture-capital-extremism',           time: 20 },
  { title: 'How to Do Great Work',      date: 'Jul 01, 2023', link: 'https://paulgraham.com/greatwork.html',                      time: 53 },
  { title: 'The Butterfly Revolution',  date: 'Apr 07, 2022', link: 'https://graymirror.substack.com/p/the-butterfly-revolution', time: 11 },
  { title: 'The Network State',         date: 'Nov 11, 2021', link: 'https://balajis.com/p/the-network-state-2021',               time: 15 },
].map(post => ({...post, date: new Date(post.date)}))

export const PROJECTS = {
  Current: [
    { name: 'dotfiles',   desc: 'Configuration for unix systems', link: 'https://github.com/exshak/dotfiles',      icon: 'i-codicon:terminal-bash' },
    { name: 'dracula',    desc: 'Dracula theme for Neovim',       link: 'https://github.com/exshak/dracula.nvim',  icon: 'i-game-icons:vampire-dracula' },
    { name: 'blog',       desc: 'Personal website',               link: 'https://github.com/exshak/blog',          icon: 'i-fluent-mdl2:website' },
    { name: 'portfolio',  desc: 'Gatsby starter template',        link: 'https://github.com/exshak/portfolio',     icon: 'i-tabler:brand-gatsby' },
    { name: 'metrics',    desc: 'Infographics generator',         link: 'https://github.com/exshak/exshak',        icon: 'i-carbon:chart-multitype' },
    { name: 'scriptable', desc: 'iOS automation scripts',         link: 'https://github.com/exshak/scriptable',    icon: 'i-gravity-ui:curly-brackets-function' },
    { name: 'assets',     desc: 'Collection of image formats',    link: 'https://github.com/exshak/assets',        icon: 'i-mdi-light:image' },
    { name: 'usenet',     desc: 'Automated usenet pipeline',      link: 'https://github.com/exshak/docker-usenet', icon: 'i-carbon:arrow-shift-down' },
  ],
}
