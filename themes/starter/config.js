/**
 * 另一个落地页主题
 */
const CONFIG = {

  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '/images/starter/logo/unicom_white.png', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '/images/starter/logo/unicon_caise.png', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '惠州市唯一的信创政务云、商密服务提供商', // 英雄区文字
  STARTER_HERO_TITLE_2: '成熟经验高效交付，全力夯实数字政府基座', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '详情', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL: 'https://docs.tangly1024.com/article/vercel-deploy-notion-next', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '政务云手册', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://github.com/tangly1024/NotionNext', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/detail_product.png', // 产品预览图 ，默认读取public目录下图片

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: '',//Sign In
  STARTER_NAV_BUTTON_1_URL: '',///signin

  STARTER_NAV_BUTTON_2_TEXT: '',//Sign Up
  STARTER_NAV_BUTTON_2_URL: '',///signup

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '优势', // 特性
  STARTER_FEATURE_TEXT_1: '成熟经验高效交付，全力夯实数字政府基座  ', // 特性
  STARTER_FEATURE_TEXT_2: '让信创信息化服务更便捷高效、安全可靠', // 特性

  STARTER_FEATURE_1_TITLE_1: '运营商机房资源', // 特性1
  STARTER_FEATURE_1_TEXT_1: '依托惠州联通IDC机房的优质基础设施和网络资源，实现了政务云服务的高效、稳定运行', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://github.com/tangly1024/NotionNext', // 特性1

  STARTER_FEATURE_2_TITLE_1: '严格遵循政务云建设规范分区', // 特性2
  STARTER_FEATURE_2_TEXT_1: '区域内互联互通，区域间硬隔离，建成政务外网区与互联网区(区内均建有信创专区、X86专区）', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL: 'https://docs.tangly1024.com/article/notion-next-themes', // 特性2

  STARTER_FEATURE_3_TITLE_1: 'IaaS、PaaS、SaaS资源丰富', // 特性3
  STARTER_FEATURE_3_TEXT_1: '一期共建成vCPU 7704核,提供内网Yum软件源、NTP时间同步服务；', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://docs.tangly1024.com/article/next-js', // 特性3

  STARTER_FEATURE_4_TITLE_1: '双重防护保障政务云安全底线', // 特性4
  STARTER_FEATURE_4_TEXT_1: '云采用“平台安全+租户安全”相结合的安全能力体系，为用户提供双重保障。', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://xiaotan.tech', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '一整套信创适配改造上云服务',
  STARTER_ABOUT_TEXT: '数字化引领，云服务升级， 惠州联通政务云打造信创适配上云新体验  <br /> <br /> 未来，我们还将进一步强化信创云平台的生态建设，横向拓展、纵向贯通，持续打造更多产品和服务、提升功能和性能，进一步推动信创云创新，构建可靠的信创云体系。',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: 'https://xiaotan.tech',
  STARTER_ABOUT_IMAGE_1: '',
  STARTER_ABOUT_IMAGE_2: '/images/starter/hero/zhiban.png',
  STARTER_ABOUT_TIPS_1: '2500+',
  STARTER_ABOUT_TIPS_2: 'vCPU',
  STARTER_ABOUT_TIPS_3: '政务系统累计使用量',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: '服务内容',
  STARTER_PRICING_TEXT_1: '丰富政务云计算资源',
  STARTER_PRICING_TEXT_2: '根据惠州市政务云服务目录，我们制定了丰富的服务项目，您可以按需选择。（如有其他需求咨询，请与我们取得联系）',

  STARTER_PRICING_1_TITLE: '基础计算',
  STARTER_PRICING_1_PRICE: '基础架构即服务',
  STARTER_PRICING_1_PRICE_CURRENCY: '',
  STARTER_PRICING_1_PRICE_PERIOD: 'IaaS',
  STARTER_PRICING_1_HEADER: '服务内容',
  STARTER_PRICING_1_FEATURES: '标准型虚拟服务器服务,高性能型虚拟服务器服务,国产化物理主机服务器,块存储服务,文件存储服务,对象存储服务,负载均衡服务,国产化等保二级安全服务包,国产化等保三级安全服务包,·······', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '查看详情',
  STARTER_PRICING_1_BUTTON_URL: 'https://xiaotan.techcheckout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG: '',
  STARTER_PRICING_2_TITLE: '平台计算',
  STARTER_PRICING_2_PRICE: '平台即服务',
  STARTER_PRICING_2_PRICE_CURRENCY: '',
  STARTER_PRICING_2_PRICE_PERIOD: 'PaaS',
  STARTER_PRICING_2_HEADER: '服务内容',
  STARTER_PRICING_2_FEATURES: '国产关系型数据库,国产非关系型数据库,内存数据库服务,消息中间件,容器引擎,数据仓库,管控计算节点,离线计算节点,性能计算节点,·····', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '查看详情',
  STARTER_PRICING_2_BUTTON_URL: 'https://xiaotan.techcheckout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: '软件授权',
  STARTER_PRICING_3_PRICE: '软件即服务',
  STARTER_PRICING_3_PRICE_CURRENCY: '',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '达梦数据库管理系统,神通数据库管理系统,金仓数据库管理系统,瀚高数据库管理系统,南大通用数据库管理系统,以上均包含单机版、集群、主备版,电信teleDB（包含主备、集群组件）,金蝶天燕应用服务器中间件,东方通应用服务器中间件,宝兰德应用服务器中间件,中创应用服务器中间件,普元应用服务器中间件,TAS应用服务器中间件', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '查看详情',
  STARTER_PRICING_3_BUTTON_URL: 'https://xiaotan.techcheckout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '用户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  STARTER_TESTIMONIALS_TEXT_2: '数千位站长选择用NotionNext搭建他们的网站,通过帮助手册、交流社群以及技术咨询，大家成功上线了自己的网站',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '惠州联通提供的政务云使用体验非常好！我之前一直头疼如何部署复杂的IT系统，服务水平真的让我眼前一亮，部署过程非常简单明了，对于我这种才接触政府项目的开发来说非常友好 ',
      STARTER_TESTIMONIALS_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '开发商',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '我要给惠州联通政务云点赞！之前因为担心运维难度大而犹豫不决，但他们的服务真的让我刮目相看。不仅及时响应，而且帮助解决一些本来属于我们的问题，非常适合我们这种不懂技术的政府部门使用。',
      STARTER_TESTIMONIALS_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits（昵称）',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '局办',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '一直想找一个简单易用的云计算来支持我们的政务工作，惠州联通的政务云计算正好满足了我们的需求。整个迁移过程简单明了，功能强大且易于操作，真的是我们政府部门的好帮手！',
      STARTER_TESTIMONIALS_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'DWIND（昵称）',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '集成商',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '之前我们一直在寻找能够进行信创适配改造的厂商，惠州联通完美符合我们的需求。他们的专业团队不仅提供了优质的服务，还积极协助我们完成信创适配，让我们在保障数据安全的同时，也实现了技术的自主可控。',
      STARTER_TESTIMONIALS_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '局办',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '有任何问题吗？请看这里',
  STARTER_FAQ_TEXT_2: '我们收集了常见的用户疑问',

  STARTER_FAQ_1_QUESTION: '政务云（信创）有帮助文档吗？',
  STARTER_FAQ_1_ANSWER: '政务云（信创）提供了<a href="https://xiaotan.tech" className="underline">帮助文档</a>，操作<a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">演示视频</a>，以及<a href="https://docs.tangly1024.com/article/chat-community" className="underline">交流社群</a>来协助您完成网站的搭建部署',

  STARTER_FAQ_2_QUESTION: '出现问题怎么和您们联系',
  STARTER_FAQ_2_ANSWER: '当您在使用惠州联通政务云计算服务过程中遇到问题时，您可以通过页面下方的电话和邮箱与我们取得联系',

  STARTER_FAQ_3_QUESTION: '网络策略打通、开放端口、公网IP等怎么申请',
  STARTER_FAQ_3_ANSWER: '网络策略打通、开放端口、公网IP等申请，',

  STARTER_FAQ_4_QUESTION: '平台是什么架构',
  STARTER_FAQ_4_ANSWER: '平台底层采用HCS8.X版本运管平台，提供ARM、X86双芯供给能力，同时提供大量国产化服务。',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '我们的开发者团队',
  STARTER_TEAM_TEXT_2: 'NotionNext 由众多开源技术爱好者们共同合作完成，感谢每一位<a className="underline" href="https://github.com/tangly1024/NotionNext/graphs/contributors">贡献者</a>',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa06c61bb-980e-4180-bc18-c15f92c78bb4%2Ftangly1024.jpg?table=collection&id=8e7acf17-de09-4fa1-abde-b5b80ad4a813&t=8e7acf17-de09-4fa1-abde-b5b80ad4a813&width=100&cache=v2',
      STARTER_TEAM_ITEM_NICKNAME: 'Tangly',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Developer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Melissa Tatcher',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Stuard Ferrel',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Digital Marketer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Eva Hudson',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Creative Designer'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: false, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的博客',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2: '这里会发布一些关于NotionNext的最新动态，包括新的动向、新的未来计划，以及新功能的特性',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，广东惠州',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: 'tanzc11@chinaunicom.cn',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/yfctc7', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: true, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '关于我们',
      LINK_GROUP: [
        { TITLE: '官方主页', URL: '/#home' },
        { TITLE: '操作文档', URL: 'xiaotan' },
        { TITLE: '帮助支持', URL: 'https://docs.tangly1024.com/article/how-to-question' },
        { TITLE: '合作申请', URL: 'https://docs.tangly1024.com/article/my-service' }
      ]
    },
    {
      TITLE: '功能特性',
      LINK_GROUP: [
        { TITLE: '部署指南', URL: 'https://docs.tangly1024.com/article/vercel-deploy-notion-next' },
        { TITLE: '升级指南', URL: 'https://docs.tangly1024.com/article/how-to-update-notionnext' },
        { TITLE: '最新版本', URL: 'https://docs.tangly1024.com/article/latest' }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://xiaotan.tech', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
