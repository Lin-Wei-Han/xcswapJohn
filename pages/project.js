var Usrdata = document.querySelector('.box');

const projectDetail = [
    {
        title: "競賽活動網站",
        info: "針對年輕族群，設計風格、配色較多元且鮮豔，且喜歡加入動態效果，添加活潑的元素，不僅力求瀏覽體驗也加深了使用者的印象。",
        img: "../image/project/palcelantern.png",
        url: "https://lin-wei-han.github.io/Palace-Lantern/index.html?fbclid=IwAR0AS0zu7vIVZvwMUOh4uC2oq2X_R12JEvKQ9cgu7hvydXkQOaVkDrnwoXE"
    },
    {
        title: "即時物件偵測",
        info: "透過tensorflow官方所提供的深度學習框架，串接至React上，透過網站達到即時偵測的效果，並且能偵測多達80多件不同的物件。",
        img: "../image/project/reactobjectdetect.png",
        url: "https://computervisiontemplate.herokuapp.com/"
    },
    {
        title: "Covid-19 近況數據儀表版",
        info: "透過R語言、Data Visualization與R shiny，將Covid-19對於產業衝擊的影響製作成數據儀表板。並即時產生簡易的描述性統計，方便觀察者知道數據變動的意義。",
        img: "../image/project/shinydashboard.png",
        url: "https://shinycovid-19.herokuapp.com/"
    },
    {
        title: "麥索迪斯企業形象網站",
        info: "協助企業打造形象網站，瞄準目標客群，使客戶能夠迅速了解企業的服務項目。不僅網站資訊清晰，並加入動態元素，創造更具現代化的形象網站。",
        img: "../image/project/myosotis.png",
        url: "https://myosotis.online/"
    },
    {
        title: "六都房價趨勢與預測儀表板",
        info: "以內政部實價登陸公布隻交易紀錄，實現六都房價走勢儀表板，並且以隨機數森林創建預測模型，針對房價做預測。亦提供嚴謹的統計檢定結果，分析六都差異。",
        img: "../image/project/houseprice.png",
        url: "https://taiwanhouseprice.herokuapp.com/"
    },
]

document.getElementById('work').innerHTML = projectDetail.map(user =>
    `
    <div class="wrapper">
        <div class="card front-face">
        <img src="${user.img}">
        </div>
        <div class="card back-face">
        <div class="info">
            <div class="title"><a href="${user.url}">${user.title}</a></div>
            <p>${user.info}</p>
        </div>
        </div>
    </div>
    `
).join('')