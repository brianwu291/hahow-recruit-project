## **專案的架構，Web 的架構邏輯**

```
├── README.md                    # 文件總和，說明您該到哪裡找到想要的文件。
│
├── /docs                        # 存放文件們
│     │
│     ├── requireCredit.js       # 用戶想啟用調查服務，檢查金額是否足夠
│     └── requireLogin.js        # 檢查用戶是否登入
│
├── package.json                 # 這個 project 的基本資料，以及執行的指令。
│
├── yarn.lock                    # 紀錄各種 package 的安裝版本資訊、相依的套件等。
│
├── .eslintignore                # 紀錄不想被 eslint 控管 coding style 的文件名稱
│
├── .eslintrc                    # 制訂的 eslint coding style 規範 
│
├── .babelrc                     # 紀錄 babel 啟用的插件與設定
│
├── .gitignore                   # 紀錄不想被放入版本控管的文件名稱
│
├── .LICENSE                     # MIT licence
│
├── webpack.config.js            # webpack 的打包設定資訊(dev 和 prod 共通的)
│
├── webpack.dev.js               # 當在開發環境時，webpack 採用的資訊
│
├── webpack.prod.js              # 當在要打包正式資料，webpack 採用的資訊
│
├── server.js                    # 這個 App 的 entry point。
│
├── /node_modules                # 所有套件的 source code。
|
├── /build                       # 打包後的 production file
│      │
│      ├── index.html            # 正式版吐給瀏覽器的 html file
│      │
│      ├── /assets               # 靜態文件如: icon 
│      │
│      └── bundle.[hash].js      # App 執行時的主程式
│
├── /public 
│      └── index.html            # 開發與打包時所使用的 html 樣板
│
└── /src
     │
     ├── index.js                # App entry point
     │
     ├── RootContainer.js        # 一個 for index.js 的 HOC，在裡面設置好 redux store、devtool 等，使 index.js 中單純負責 routing 與資料的拿取
     │
     ├── /styledRoots            # 首頁元件樣式，以及全站的 css 設定。
     │
     ├── /ThemeContext           # 因應深色模式的共用 Context 
     │
     ├── /components             # 專案中會重複用到的共用元件    
     │  
     ├── /utils                  # 自己撰寫用來處理資料結構的函數
     │   │
     │   ├── __tests__           # 單位測試自己所寫的函數
     │   │
     │   ├── get.js              # 用來取物件的值，可以深層取、同時可以給預設值。
     │   │
     │   └── mapObjectToArray.js # 用以將物件轉換為陣列形式(每個項目保有原本的 key-value)
     │
     ├── /static                 # 開發時，所用到的靜態檔案
     │   │
     │   └── /images
     │        └── /main_icon.ico # 網頁 tab 上想用的小圖示
     │
     ├── APIManager.js           # 整合所有 API Endpoint
     │
     ├── /lib                    # 儲存 redux 的 action 與 reducer，以及一些特定地方用到的函數和元件
     │     │
     │     ├── /actions          # redux flow 裡的 action creator，以 api manager 的函數執行，接收到回傳的資料後，將其以定義好的類別(action type)組裝，並 dispatch 給 reducer。
     │     │ 
     │     ├── /reducers         # redux flow 裡的 reducer，接受來自 action dispatch 的資料們，並根據類別(action type)，把舊的資料更新後回傳給 store。
     │     │
     │     └── /helpers          # 一些特定場景或需求會用上的函數
     │         │
     │         ├── /HOC          # 常用到的共用 HOC，例如這裡包裹了 Loading component 的 hoc，可以用在資料顯示與 fetch 的邏輯分離。
     │         │
     │         ├── /mediaQuery   # css 切版時需要因應裝置大小做 RWD，這裏以 styled-component 為基礎，包裝出一個能快速產生 media query css 的函數    
     │         │
     │         └── /RouteTest    # 此專案有三個 route，因此撰寫了三支由 Regex 判定是否為合法 route 的函數，並以 jest 單元測試之。
     │ 
     │         
     └── /pages
         │
         ├── /HeroLists          # 頁面上方 always 顯示的英雄卡片列表
         │    │
         │    ├── index.js       # HeroList 元件的 entry point
         │    │
         │    ├── /styled        # HeroList 中使用到的樣式元件
         │    │
         │    └── /components    # 存放 HeroList 用到的 HeroCard 元件
         │
         └── /HeroProfile        # 頁面下方用來更新英雄能力值的複雜元件
              │
              ├── index.js       # HeroProfile 元件的 entry point
              │
              ├── /styled        # HeroProfile 中使用到的樣式元件
              │
              └── /components    # 存放 HeroProfile 用到的子元件們
                  │
                  ├── ProfileCount.js # 顯示英雄能力值項目、並有刪減按鈕的元件
                  │
                  ├── UpdateProfileButton.js # 顯示剩餘可分配的能力值，並有送出更新的按鈕
                  │
                  └── /hoc       # 為了使讓以上兩者成為單純的原件，因此把資料變動的邏輯抽出來，寫進這三個 hoc
                      │
                      ├── WithState.js  # 接收來自 store 的 current hero 資料，把處理能力值變動需要的 state、方法寫在這並以 Props 傳下去。
                      │
                      ├── WithUpdate.js # 接收來自 WithState 的 state 與方法，產生送出更新的函數，並以 Props 傳下去；同時在更新成功後，要顯示通知、並再次透過 api 更新 redux store 內對應英雄的資料。
                      │
                      └── WithProfileData.js # 當 url 變動為/heros/:id，這裏會成為 render 起點，抓到 heroId 後透過 api 抓取英雄能力值，更新 store 並把能力值資料向下傳遞。
```