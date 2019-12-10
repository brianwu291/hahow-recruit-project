## **Web 的架構邏輯**
  
### HeroList 部分:
 * 進入頁面 --> url redirect 到 /heroes --> call api 抓取所有英雄資料 --> render HeroList
 * 當 url 為 /heroes --> user 點擊 HeroCard --> 把 heroId 帶上 --> 觸發 url 變成 /heroes/:id
 * 當 url 為 /heroes/:id --> user 點擊同一個 Hero Card --> 將
 url 導回 /heroes --> 將 current hero 設為空值
 * Regex 測試 url --> 判定為不合法 HeroProfile --> 轉到 Error404 page 
### HeroProfile 部分:
 * 監聽 url 的變化 --> Regex 測試 url --> 判定為合法 HeroProfile --> 獲取 url 上的 heroId，call api --> 設定 current Hero --> 開始 render
 * Regex 測試 url --> 判定為不合法 HeroProfile --> 轉到 Error404 page 
### HeroProfile 能力值變化:
 * current Hero 設定完成 --> 將每個能力值設定 init state --> 算出最大值 --> 宣告當某項能力值 +/- 1 時的處理函數 --> 宣告儲存按鈕的函數(call patch api 更新英雄能力值)
 * 玩轉各項能力值 --> 送出更新 --> 返回 ok --> 更新 current hero
<br>
<br>

## **專案的架構**
```
├── README.md                # 文件總和，說明您該到哪裡找到想要的文件。
│
├── /docs                    # 存放文件們
│   │
│   ├── running.md           # 專案環境參考文件
│   └── structure.nd         # 專案架構圖文件
│
├── package.json             # 這個 project 的基本資料，以及執行的指令。
│
├── yarn.lock                # 紀錄各種 package 的安裝版本資訊、相依的套件等。
│
├── .eslintignore            # 紀錄不想被 eslint 控管 coding style 的文件名稱
│
├── .eslintrc                # 制訂的 eslint coding style 規範 
│
├── .babelrc                 # 紀錄 babel 啟用的插件與設定
│
├── .gitignore               # 紀錄不想被放入版本控管的文件名稱
│
├── .LICENSE                 # MIT licence
│
├── webpack.config.js        # webpack 的打包設定資訊(dev 和 prod 共通的)
│
├── webpack.dev.js           # 當在開發環境時，webpack 採用的資訊
│
├── webpack.prod.js          # 當在要打包正式資料，webpack 採用的資訊
│
├── server.js                # 這個 App 的 entry point。
│
├── /node_modules            # 所有套件的 source code。
|
├── /build                   # 打包後的 production file
│      │
│      ├── index.html        # 正式版吐給瀏覽器的 html file
│      │
│      ├── /assets           # 靜態文件如: icon 
│      │
│      └── bundle.[hash].js  # App 執行時的主程式
│
├── /public 
│      └── index.html        # 開發與打包時所使用的 html 樣板
│
└── /src                     # 專案主程式
  │
  ├── index.js               # App entry point
  │
  ├── RootContainerWithRedux.js   # 一個設置好 redux store、devtool 等，並採用 Render Props 包裹 index.js，使其單純負責 routing 與資料的拿取。
  │
  ├── /styledRoots           # 首頁元件樣式，以及全站的 css 設定。
  │
  ├── /components            # 專案中會重複用到的共用元件    
  │  
  ├── /utils                 # 自己撰寫用來處理資料結構的函數
  │  │
  │  ├── __tests__           # 單位測試自己所寫的函數
  │  │
  │  ├── get.js              # 用來取物件的值，可以深層取、同時可以給預設值。
  │  │
  │  └── mapObjectToArray.js # 用以將物件轉換為陣列形式(每個項目保有原本的 key-value)
  │
  ├── /static          # 開發時，所用到的靜態檔案
  │  │
  │  └── /images
  │   └── /main_icon.ico     # 網頁 tab 上想用的小圖示
  │
  ├── APIManager.js          # 整合所有 API Endpoint
  │
  ├── /lib             # 儲存 redux 的 action 與 reducer，以及一些特定地方用到的函數和元件
  │     │
  │     ├── /actions       # redux 的 action，call api、收到回傳資料後，以定義好的類別(actionType)組裝，並 dispatch 給 reducer。
  │     │ 
  │     ├── /reducers      # redux 的 reducer，接受來自 action 的資料，根據類別(actionType)，把 store 資料更新並通知組件更新。
  │     │
  │     └── /helpers            # 一些特定場景或需求會用上的函數
  │         │
  │         ├── /HOC            # 常用到的共用 HOC，例如這裡包裹了 Loading component 的 hoc，可以用在資料顯示與 fetch 的邏輯分離。
  │         │
  │         ├── /mediaQuery     # css 切版時需要因應裝置大小做 RWD，這裏以 styled-component 為基礎，包裝出一個能快速產生 media query css 的函數    
  │         │
  │         └── /RouteTest      # 此專案有三個 route，因此撰寫了三支由 Regex 判定是否為合法 route 的函數，並以 jest 單元測試之。
  │ 
  └── /pages
      │
      ├── /HeroLists              # 頁面上方 always 顯示的英雄卡片列表
      │    │
      │    ├── index.js           # HeroList 元件的 entry point
      │    │
      │    ├── /styled            # HeroList 中使用到的樣式元件
      │    │
      │    └── /components               # 存放 HeroLists 用到的子元件們
      │      │
      │      ├── WithRouter.js           # 存放包裹 HeroList，專職 handle routing
      │      │
      │      └── HeroCard.js             # 存放 HeroList 用到的 HeroCard 元件
      │
      │
      │
      └── /HeroProfile            # 頁面下方用來更新英雄能力值的複雜元件
          │
          ├── index.js            # HeroProfile 元件的 entry point
          │
          ├── /styled             # HeroProfile 中使用到的樣式元件
          │
          └── /components              # 存放 HeroProfile 用到的子元件們
            │
            ├── /ProfileCount              # 顯示英雄能力值項目、並有刪減按鈕的元件
            │
            ├── /SubmitProfileButton       # 顯示剩餘可分配的能力值，並有送出更新的按鈕
            │
            └── /hoc              # 為了使讓以上兩者成為單純的原件，因此把資料變動的邏輯抽出來，寫進這四個 hoc
             │
             ├── WithState.js     # 接收來自 store 的 current hero 資料，把處理能力值變動需要的 state、方法寫在這並以 Props 傳下去。
             │
             ├── WithUpdate.js    # 接收來自 WithState 的資料與方法，並以 Props 傳下去。
             │
             ├── WithProfileData.js  # 抓取 heroId 後透過 api 抓取英雄能力值，更新 store 並把能力值資料向下傳遞。
             │
             └── WithRouter.js    # 存放包裹 HeroList，專職 handle routing
```