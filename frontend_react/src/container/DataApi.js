import { images } from "../constants";

const Abouts = [
  {
    title: "Frontend",
    description: `Frontend Developer takes the responsiblity to create an applications which is beautiful, responsive and hooks user's attention. As the saying goes
          "𝙁𝙞𝙧𝙨𝙩 𝙄𝙢𝙥𝙧𝙚𝙨𝙨𝙞𝙤𝙣 𝙞𝙨 𝙩𝙝𝙚 𝙇𝙖𝙨𝙩 𝙄𝙢𝙥𝙧𝙚𝙨𝙨𝙞𝙤𝙣"
        `,
    imgUrl: images.frontend,
  },
  {
    title: "Modern UI/UX",
    description: `Eye Catchy and Animation Rich 𝙐𝙄 with functional 𝙐𝙓 Websites`,
    imgUrl: images.ui_ux,
  },
  {
    title: "Web Applications",
    description:
      "I love to build Web applications most of all. Using 𝘼𝙋𝙄𝙨 are so much fun for fetching 𝘿𝘼𝙏𝘼.",
    imgUrl: images.webapp,
  },
  {
    title: "FullStack Web3 / DApp ",
    description:
      "A Fullstack Web3 Developer 𝙘𝙤𝙣𝙣𝙚𝙘𝙩𝙨 the 2 whole different worlds of 𝙒𝙚𝙗_2 and 𝘽𝙡𝙤𝙘𝙠𝙘𝙝𝙖𝙞𝙣. And create something unique",
    imgUrl: images.web3dapp,
  },
  {
    title: "Smart Contract Development",
    description:
      "As a Smart Contract Developer, I'll take the responsiblity to produce easy to understand and  𝙨𝙚𝙘𝙪𝙧𝙞𝙩𝙮 𝙧𝙞𝙘𝙝 𝙘𝙤𝙙𝙚 𝙗𝙖𝙨𝙚",
    imgUrl: images.smart_contract,
  },
];

const FilterWorks = [
  {
    title: "Metaversus",
    description:
      "Modern UI/UX website for Web3 agencies. Build on React from Figma design. Beautiful animations, responsive layout and expressive designs",
    imgUrl: images.metaversus,
    name: "UI/UX",
    projectLink: "https://metaversus-by-rohit.vercel.app/",
    codeLink: "https://bootstraphub.com/RohitKS7/Metaverse-Modern-NEXT-13-Site",
    tags: "UI/UX",
    tech: ["Next JS, Figma, Framer-motion"],
  },
  {
    title: "Multiplayer NFT Card Game",
    description:
      "This Game is build on Avalanche Chain which makes it gas efficient and fast to play. Security rich smart contract build on lastest hardhat version. Connect with me to play together :)",
    imgUrl: images.nft_game,
    name: "Web3 DApp",
    projectLink: "https://rohit-nft-card-game.vercel.app/",
    codeLink: "https://github.com/RohitKS7/NFT_card_game",
    tags: "Web3 DApp",
    tech: ["React, Avalanche, Solidity, Hardhat, Tailwind"],
  },
  {
    title: "CrowdFunding Web3 Dapp",
    description:
      "An Truly Decentralized application to raise funds for any cause. Contract Created  and Deployed on ThirdWeb.",
    imgUrl: images.crowdfunding,
    name: "Web3 DApp",
    projectLink: "https://crowdfunding-by-rohit.netlify.app/",
    codeLink: "https://github.com/RohitKS7/Crowd-Funding-Web3-App",
    tags: "Web3 DApp",
    tech: ["React, ThirdWeb, Ethereum"],
  },
  {
    title: "OpenAI ChatGPT",
    description:
      "The most famous AI is here for you as your everyday helper for any need. My first Mern application, express server deployed on Render.",
    imgUrl: images.chatgpt,
    name: "Web App",
    projectLink: "https://github.com/RohitKS7/chatgpt-clone",
    codeLink: "https://helpai-chatgpt-clone.vercel.app/",
    tags: "Web App",
    tech: ["React, OpenAI, ChatGPT, Express, Mern, Render"],
  },
  {
    title: "CryptoVerse",
    description:
      "CryptoVerse is a Web Application which provides real-time information related to Crypto-Universe. i.e, Price, About, News and more.",
    imgUrl: images.cryptoverse,
    name: "Web App",
    projectLink: "https://cryptoverse-by-rohit.vercel.app/",
    codeLink: "https://github.com/RohitKS7/Cryptoverse",
    tags: "Web App",
    tech: ["React, Crypto, API, Redux ToolKit"],
  },
  {
    title: "All-Links - My Personal Linktree",
    description:
      "Just to save some bucks and for fun, I created my own awesome looking linktree website. Feel free to explore it.",
    imgUrl: images.linktree,
    name: "UI/UX",
    projectLink: "https://all-links-my-personal-linktree.vercel.app/",
    codeLink: "https://github.com/RohitKS7/All-Links__My-Personal-Linktree",
    tags: "UI/UX",
    tech: ["React, CSS Animations, Hover Effects"],
  },
  {
    title: "Lyrics - Spotify Clone",
    description:
      "This Application is better than spotify and free too. Listen your favorite songs as much as you want but be warned the API has a limit :) .",
    imgUrl: images.lyrics,
    name: "Web App",
    projectLink: "https://lyrics-a-free-spotify-alternative.netlify.app/",
    codeLink:
      "https://github.com/RohitKS7/Lyriks-A-Free-Alternative-Of-Spotify",
    tags: "Web App",
    tech: ["Vite, API, Music Player, RapidAPI, Redux"],
  },
  {
    title: "ShopIt",
    description:
      "ShopIt is a ecommerce Admin Dashboard to manage all your orders, employees and customers with features like - 'In-App Chat', 'Calender', 'Kanban', 'Theme-Changer' and much more. Using syncfusion components to build rapid fast charts. ",
    imgUrl: images.dashboard,
    name: "Web App",
    projectLink: "https://shopit-admin-dashboard.vercel.app/",
    codeLink: "https://github.com/RohitKS7/Admin_Dashboard",
    tags: "Web App",
    tech: ["React, Sycnfusion, Charts"],
  },
  {
    title: "MyTube",
    description:
      "It's a Youtube clone but without Ads :) Watch your favorite videos anywhere for free.It has a beautiful UI too.",
    imgUrl: images.mytube,
    name: "Web App",
    projectLink: "https://mytube-a-youtube-clone.vercel.app/",
    codeLink: "https://github.com/RohitKS7/Mytube____A-Youtube-Clone",
    tags: "Web App",
    tech: ["React, API, Video Player"],
  },
  {
    title: "NFT Marketplace",
    description:
      "NFT Marketplace build on lastest Next 13 framework, deployed on goerli. Using  THEGRAPH Protocol to fetch events from blockchain and show on Frontend to make user's life easier.",
    imgUrl: images.nft_marketplace,
    name: "Web3 DApp",
    projectLink:
      "https://thegraph-nextjs-frontend-for-nft-marketplace.vercel.app/",
    codeLink:
      "https://github.com/RohitKS7/thegraph_nextjs_frontend_for_nft-marketplace",
    tags: "Web3 DApp",
    tech: ["Next JS, Solidity, Ethereum, Ethers.js, Hardhat, TheGraph"],
  },
  {
    title: "API Weather App",
    description: "Build on React, using weather api.",
    imgUrl: images.weather,
    name: "Web App",
    projectLink: "https://react-weather-app-xi-liart.vercel.app/",
    codeLink: "https://github.com/RohitKS7/react-weather-app",
    tags: "Web App",
    tech: ["React, API"],
  },
  {
    title: "Blogging Site",
    description:
      "Beautiful and responsive design, build with vanilla Html, Css, and Javascript",
    imgUrl: images.blogging_site,
    name: "UI/UX",
    projectLink: "https://tcbloggingsite.netlify.app/",
    codeLink: "https://github.com/RohitKS7/Blogging-Site",
    tags: "UI/UX",
    tech: ["HTML, CSS, Javascript"],
  },
  {
    title: "Web3 Agency Site",
    description:
      "Agency website with Stunning Cube Animation build with only Html, Css and Javascript",
    imgUrl: images.web3_agency,
    name: "UI/UX",
    projectLink: "https://non-standard.netlify.app/",
    codeLink: "https://github.com/RohitKS7/non-stranded-site",
    tags: "UI/UX",
    tech: ["HTML, CSS, Javascript"],
  },
  {
    title: "Uniswap Clone 2.0",
    description:
      "Uniswap Clone with features of 'Pool Creation', 'Token Fetching' and 'Token Swap' deployed on goerli testnet.",
    imgUrl: images.uniswap2_0,
    name: "Web3 DApp",
    projectLink: "https://uniswap-2-0.vercel.app/",
    codeLink: "https://github.com/RohitKS7/Uniswap-2.0",
    tags: "Web3 DApp",
    tech: ["Vite, Cranq, Solidity, Hardhat"],
  },
];

const Web2SkillsList = [
  {
    title: "HTML",
    icon: images.html,
    bgColor: "#FFF4F2",
  },
  {
    title: "CSS",
    icon: images.css,
    bgColor: "#DDE8EE",
  },
  {
    title: "Javascript",
    icon: images.javascript,
    bgColor: "#FDF7D1",
  },
  {
    title: "REACT",
    icon: images.react,
    bgColor: "#ECFCFF",
  },
  {
    title: "Next JS",
    icon: images.nextjs,
    bgColor: "#EFE8FA",
  },
  {
    title: "Vite JS",
    icon: images.vitejs,
    bgColor: "#FDF7D1",
  },
  {
    title: "Visual Studio",
    icon: images.visual_studio,
    bgColor: "#DDE8EE",
  },
  {
    title: "SCSS",
    icon: images.scss,
    bgColor: "#FFF4F2",
  },
  {
    title: "API",
    icon: images.api,
    bgColor: "#EFE8FA",
  },
  {
    title: "Redux",
    icon: images.redux,
    bgColor: "#e1cbf9b8",
  },
  {
    title: "Tailwind CSS",
    icon: images.tailwind,
    bgColor: "#12c9b729",
  },
  {
    title: "Bootstrap",
    icon: images.bootstrap,
    bgColor: "#e1cbf9b8",
  },
  {
    title: "Framer Motion",
    icon: images.framer_motion,
    bgColor: "#e1cbf9b8",
  },
  {
    title: "Material UI",
    icon: images.material,
    bgColor: "#ECFCFF",
  },
];

const SkillsList = [
  {
    title: "Solidity",
    icon: images.solidity,
    bgColor: "#EFE8FA",
  },
  {
    title: "BlockChain",
    icon: images.blockchain,
    bgColor: "#DDE8EE",
  },
  {
    title: "Alchemy",
    icon: images.alchemy,
    bgColor: "#ECFCFF",
  },
  {
    title: "ThirdWeb",
    icon: images.thirdweb,
    bgColor: "#FFF4F2",
  },
  {
    title: "Avalanche",
    icon: images.avalanche,
    bgColor: "#FFF4F2",
  },
  {
    title: "Chainlink",
    icon: images.chainlink,
    bgColor: "#ECFCFF",
  },
  {
    title: "Ethereum",
    icon: images.ethereum,
    bgColor: "#EFE8FA",
  },
  {
    title: "Ethers.js",
    icon: images.ethersjs,
    bgColor: "#e1cbf9b8",
  },
  {
    title: "Ganache",
    icon: images.ganache,
    bgColor: "#FFF4F2",
  },
  {
    title: "Hardhat",
    icon: images.hardhat,
    bgColor: "#FDF7D1",
  },
  {
    title: "Wallet Connect",
    icon: images.walletconnect,
    bgColor: "#DDE8EE",
  },
  {
    title: "Metamask",
    icon: images.metamask,
    bgColor: "#FFF4F2",
  },
  {
    title: "Sanity",
    icon: images.sanity,
    bgColor: "#FFF4F2",
  },
  {
    title: "Moralis",
    icon: images.moralis,
    bgColor: "#12c9b729",
  },
  {
    title: "NFT",
    icon: images.nft,
    bgColor: "#ECFCFF",
  },
  {
    title: "Openzeppelin",
    icon: images.openzeppelin,
    bgColor: "#ECFCFF",
  },
  {
    title: "The Graph Protcol",
    icon: images.thegraph,
    bgColor: "#ECFCFF",
  },
  {
    title: "Truffle",
    icon: images.truffle,
    bgColor: "#EFE8FA",
  },
  {
    title: "Uniswap",
    icon: images.uniswap,
    bgColor: "#FFF4F2",
  },
  {
    title: "Aave",
    icon: images.aave,
    bgColor: "#DDE8EE",
  },
];

const Testimonials = [
  {
    name: "Sharath @sharatkrml",
    imgUrl: images.twitter1,
    feedback:
      "Rohit is a very helpful and fast to respond guy. He has good knowledge of the stuff he's building. This guy can deliver create killing applications. ",
    company: "Web3 Dev @airstack_xyz",
  },
  {
    name: "Param.eth @Param_eth",
    imgUrl: images.twitter2,
    feedback:
      "I can always count on Rohit, Whenever I need something done immediately.",
    company: "Founder @MintWriterHQ & @web3verse_",
  },
];

export { Abouts, FilterWorks, SkillsList, Testimonials, Web2SkillsList };
