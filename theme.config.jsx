export default {
  logo: <span>eCrowne </span>,
  project: {
    link: 'https://github.com/eCrowneEng/ESP-SimHub'
  },
  chat: {
    link: 'https://discord.gg/CfvJySWTcE',
  },
  docsRepositoryBase: 'https://github.com/eCrowneEng/docs/tree/main/',

  footer: {
    text: 'eCrowne Docs © 2024'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – eCrowne Docs'
    }
  }
}
