import { useConfig } from 'nextra-theme-docs'

export default {
  logo: <span>eCrowne </span>,
  project: {
    link: 'https://github.com/eCrowneEng/ESP-SimHub'
  },
  chat: {
    link: 'https://discord.gg/CfvJySWTcE',
  },
  docsRepositoryBase: 'https://github.com/eCrowneEng/docs/tree/main',

  footer: {
    text: 'eCrowne Docs © 2024'
  },
  head: () => {
    const { frontMatter } = useConfig()
 
    return (
      <>
        <title>{frontMatter.title} – eCrowne Docs</title>
      </>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – eCrowne Docs',
    }
  }
}
