import { images } from "../constants";

const Abouts = [
  {
    title: "Core Contributor & Lead Frontend Engineer",
    subtitle: "AmanaDefi (ZetaChain)",
    description: `Led frontend development for a cross-chain DeFi aggregator with native BTC support. Built real-time analytics dashboards, multi-chain wallet systems, and vault UI with live APY data. Architected full transaction flow management with wallet auth and gas control.`,
    metrics: "Production DeFi Platform",
    imgUrl: images.amanaExperienceImage,
    videoUrl: images.amanaExperienceVideo,
    highlight: "Cross-Chain DeFi Platform"
  },
  {
    title: "Web3 Innovation",
    subtitle: "3+ Years Building dApps",
    description: `Built multiple production dApps since 2021: NFT games, crowdfunding apps, DeFi dashboards. Early contributor to multi-protocol DeFi UX on ZetaChain. Known for fast delivery and full-stack Web3 mindset.`,
    metrics: "3+ Years Experience",
    imgUrl: images.threeYearExperienceImage,
    videoUrl: images.threeYearExperienceVideo,
    highlight: "Web3 Pioneer"
  },
  {
    title: "Performance Optimization",
    subtitle: "27% Responsiveness Boost",
    description: `Developed Web3 game with real-time blockchain event handling, achieving 27% improvement in responsiveness. Enhanced frontend performance with optimized API calls and seamless wallet integration.`,
    metrics: "27% Faster Response",
    imgUrl: images.performanceImprovementImage,
    videoUrl: images.performanceImprovementVideo,
    highlight: "Performance Expert"
  },
  {
    title: "User Retention Growth",
    subtitle: "13% Increase Achieved",
    description: `Drove 13% increase in user retention through optimized API calls and MetaMask wallet integration. Built responsive, performance-optimized interfaces with Next.js 14, Zustand, and TailwindCSS.`,
    metrics: "13% More Users",
    imgUrl: images.userRetentionImage,
    videoUrl: images.userRetentionVideo,
    highlight: "Growth Driver"
  },
 
];

const FilterWorks = [
  {
    title: "AmanaDefi",
    description:
      "Led frontend development for a cross-chain DeFi aggregator with native BTC support. Built real-time analytics dashboards, multi-chain wallet systems, and vault UI with live APY data. Architected full transaction flow management with wallet auth and gas control.",
    imgUrl: images.amana_page,
    name: "Web3 DApp",
    projectLink: "https://amanadefi.com/",
    codeLink: "app.amanadefi.com",
    tags: "Web3 DApp",
    tech: ["Next JS, TypeScript, Viem, Ether.js, Zustand, Thirdweb, TailwindCSS"],
  },
  {
    title: "Metaversus",
    description:
      " Step into the future with this stunning Web3 agency website! Built with Next.js and brought to life with Framer Motion animations, this project showcases the perfect blend of modern design and cutting-edge technology. Every interaction is smooth, every transition is buttery, and every pixel screams 'innovation'!",
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
      " Ready for the ultimate gaming experience? This multiplayer NFT card game runs on Avalanche blockchain for lightning-fast, gas-efficient gameplay! Built with bulletproof smart contracts and the latest Hardhat framework. Challenge me to a game and let's see who's the real champion! 🏆",
    imgUrl: images.nft_game,
    name: "Web3 DApp",
    projectLink: "https://rohit-nft-card-game.vercel.app/",
    codeLink: "https://github.com/RohitKS7/NFT_card_game",
    tags: "Web3 DApp",
    tech: ["React, Avalanche, Solidity, Hardhat, Tailwind"],
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
    title: "CrowdFunding Web3 Dapp",
    description:
      " Revolutionizing fundraising with true decentralization! This platform empowers anyone to raise funds for their cause without intermediaries. Built with ThirdWeb's powerful infrastructure, it's secure, transparent, and puts the power back in the people's hands. No more middlemen, just pure blockchain magic! ✨",
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
    projectLink: "https://helpai-chatgpt-clone.vercel.app/",
    codeLink: "https://github.com/RohitKS7/chatgpt-clone",
    tags: "Web App",
    tech: ["React, OpenAI, ChatGPT, Express, Mern, Render"],
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
      "ShopIt is a ecommerce Admin Dashboard to manage all your orders, employees and customers with features like - 'In-App Chat', 'Calender', 'Kanban', 'Theme-Changer' and much more. Using syncfusion components to built rapid fast charts. ",
    imgUrl: images.dashboard,
    name: "Web App",
    projectLink: "https://shopit-admin-dashboard.vercel.app/",
    codeLink: "https://github.com/RohitKS7/Admin_Dashboard",
    tags: "Web App",
    tech: ["React, Sycnfusion, Charts"],
  },

  {
    title: "NFT Marketplace",
    description:
      "NFT Marketplace built on lastest Next 13 framework, deployed on goerli. Using  THEGRAPH Protocol to fetch events from blockchain and show on Frontend to make user's life easier.",
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
    description: "Built on React, using weather api.",
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
      "Beautiful and responsive design, built with vanilla Html, Css, and Javascript",
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
      "Agency website with Stunning Cube Animation built with only Html, Css and Javascript",
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
    title: "TypeScript",
    icon: images.typescript,
    bgColor: "#EFE8FA",
  },
  {
    title: "Tailwind CSS",
    icon: images.tailwind,
    bgColor: "#12c9b729",
  },
  {
    title: "Javascript",
    icon: images.javascript,
    bgColor: "#FDF7D1",
  },
  {
    title: "Cursor",
    icon: images.cursor,
    bgColor: "#DDE8EE",
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
    title: "Framer Motion",
    icon: images.framer_motion,
    bgColor: "#e1cbf9b8",
  },
];

const SkillsList = [
  {
    title: "Viem",
    icon: images.viem,
    bgColor: "#e1cbf9b8",
  },
  {
    title: "Ethers.js",
    icon: images.ethersjs,
    bgColor: "#e1cbf9b8",
  },
  {
    title: "IPFS",
    icon: images.ipfs,
    bgColor: "#FFF4F2",
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
    title: "Chainlink",
    icon: images.chainlink,
    bgColor: "#ECFCFF",
  },
  {
    title: "Next.js",
    icon: images.nextjs,
    bgColor: "#ECFCFF",
  },

    {
      title: "Metamask",
      icon: images.metamask,
      bgColor: "#FFF4F2",
    },
    {
      title: "Node.js",
      icon: images.nodejs,
      bgColor: "#ECFCFF",
    },
    {
      title: "MongoDB",
      icon: images.mongodb,
      bgColor: "#ECFCFF",
    },

];

const Testimonials = [
  {
    name: "Richard @JamoDefi",
    imgUrl: images.richard,
    feedback: `I had the pleasure of working with Rohit as our frontend engineer at Amana DeFi, where we’re building an omnichain yield aggregator to simplify DeFi investing. Rohit was responsible for building and maintaining our React + TypeScript frontend, and played a critical role in integrating our UI with smart contracts for both same-chain and cross-chain transactions.

He also worked on:

- Wallet integrations

- On-chain rating providers

- Real-time APY data via DefiLlama

- User onboarding and interface improvements

Rohit was enthusiastic, proactive, and always eager to contribute beyond his core responsibilities. He often made thoughtful suggestions across both product and technical areas — a true team player. I’d gladly recommend him to any team looking for a skilled and dependable frontend developer in the Web3 space.`,
   company: "Founder @AmanaDefi",
  },
  {
    name: "Quirin Pius Huber @cryptoq22",
    imgUrl: images.quirin,
    feedback:
      `Thank you for the 6 months together!

I had the pleasure of working side by side with Rohit. During our time, I quickly realized that he’s not only great at executing tasks – he also comes up with ideas that push things forward in moments of conflict or during important decisions.

As a Web3 FE at Amana, Rohit faced complex tech challenges like cross-chain mechanisms, but he dug into and solved them and always showed up, even at late hours.

Having Rohit as a colleague or partner on your side brings many, many benefits!

Thank's for the time and all the best, champ!`,
    company: "Founder NextFlow Digital",
  },
  {
    name: "Sharath @sharatkrml",
    imgUrl: images.twitter1,
    feedback:
      "Rohit is a very helpful and fast to respond guy. He has good knowledge of the stuff he's building. This guy can deliver create killing applications. ",
    company: "Co-Founder 'Stealth Startup'",
  },
  {
    name: "Param @Param_eth",
    imgUrl: images.twitter2,
    feedback:
      "I can always count on Rohit, Whenever I need something done immediately.",
    company: "Contributor @zkPass",
  },
];

export { Abouts, FilterWorks, SkillsList, Testimonials, Web2SkillsList };
