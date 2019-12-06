# Hahow Front End Recruit Project Documents

## **如何執行完成的 package**
請參閱 /docs folder 的 [running.md](https://github.com/brianwu291/hahow-recruit-project/tree/master/docs/running.md) 文件。

## **專案的架構，Web 的架構邏輯**
請參閱 /docs folder 中的 [structure.md](https://github.com/brianwu291/hahow-recruit-project/tree/master/docs/structure.md) 文件。

## 對於使用到的第三方 library 的理解，以及他們的功能簡介

* ###  **react:**
資料驅動的 JS 函式庫，負責打造 UI。透過資料的控制，讓開發者彈性地操作畫面邏輯，並以虛擬的 DOM 物件為基準，每次資料更新時，代替開發者實作更新成本更大的 DOM manipulate。

* ###  **redux:**
負責畫面的狀態管理。所有 state 由最上層唯一的 store 裡的資料決定，而 store 的 state 由 reducer function 決定。

redux 周邊的生態系，現今無論是使用 middleware，或是單純引用 react-redux 的 hooks api 都相當方便。
reducer function 為 pure function, 方便撰寫 unit test。

* ###  **jest:**
本身提供很多測試用的函數，此專案用來撰寫 unit test。

* ###  **react-router_dom:**
以 spa 為前提、react 為基礎，加入 browser history api，封裝成各式各樣的 HOC，讓開發者在 spa 上操作 route。

換句話說，因為是 spa，所以本質上是透過 URL 的變化，傳入封裝後的 HOC，來決定要 render 的 component。

* ###  **lodash:**
提供各式各樣的小 function，用在開發上常用到的動作例如取值、合併、陣列 or 物件操作等。
原先有使用，但只是想使用 get function，需求是當在對物件連續 .notation 的動作時，若中間有 undefined，程式將會直接報錯而無法繼續執行，因此需要一個保護機制。

後來索性自己寫一個，並將 lodash 移除。

* ###  **styled-components:**
封裝各式產生 html5 tag 的函數，以 `` 執行 function，將開發者撰寫的 css 的程式碼作為字串輸出，並產生 hash 作為 class name，達到 css in js 的目標。

## **Tools And Packages:**
* **UI Library:** React.
* **State Management:** Redux, Redux-Thunk.
* **CSS Library:** styled-component.
* **JavaScript Version:** ES6+, compiled by Babel.
* **Coding Style:** extends airbnb with eslint.
* **Bundler:** Webpack.
* **Unit test:** jest.
* **Version Control:** Git, Github.

## **Host** ##
On heroku server. Automatically deploy to production after pushed master branch to Github.

## 我在程式碼中寫註解的原則，遇到什麼狀況會寫註解？

給自己的的要求是盡力地拆分功能與邏輯，並透過命名達到註解的目的：程式一目瞭然，了解流程。

若實在由於過多的相依或複雜的事件交互，導致邏輯煩亂，或是大面積的情境 mapping，才會寫註解以幫助別人與未來的自己。

## 在這份專案中你遇到的困難、問題，以及解決的方法

* Webpack 設定上由於久未接觸，花了不少時間研讀文件。後來輔以 YouTube 影片與文章，讓自己盡量不要花太多時間在地毯式的看文件。

* 原先想要簡單 Host 在 Github Page，但之前有嘗試過，知道不同路由的實作在 github page 上的實現要馬採用 hash router，要馬 redirect 回 index.html。因此還是選用了 Heroku。

* 在使用 Express.js serve build 出來的靜態檔案時，一度因為 res.sendFile() 多寫了一個 sendFile() 去回傳 main.js 檔，自己沒注意得情況下，導致在不同 route 的回傳 header 中 content-length 與實際的文件資源不符，導致解析失敗，後來經過冷靜查找，才終於發現問題。
