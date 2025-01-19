var c=Object.defineProperty;var b=(o,e,t)=>e in o?c(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var i=(o,e,t)=>b(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const A of r.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&a(A)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function n(o){const e=document.querySelector("head");if(e){const t=document.createElement("link");t.rel="stylesheet",t.href=`/src/style/${o}.css`,document.querySelectorAll("link").forEach(s=>{s.className!="main"&&e.removeChild(s)}),e.appendChild(t)}}class g{constructor(){i(this,"html");i(this,"style");this.html=document.createElement("section"),this.style=""}render(){const e=document.querySelector("main");n(this.style),e?e.innerHTML=this.html.innerHTML:console.log("Нет секции main для страницы")}}const m={1:{description:"Петр I уезжает в Европу по важным делам. Задача Сената - следить за гос-вом., но они не знают, чем заняться",variants:[{label:"Со спокойной душой выполнять свой долг",nextDialog:"7"},{label:"Уйти с поста, разделив казну между всеми",nextDialog:"2"},{label:"Попытаться захватить власть",nextDialog:"9"}]},2:{description:"Вы забрали казну, что будете делать?",variants:[{label:"Сдамся царю, надеясь, что помилуют за такую ошибку",nextDialog:"3"},{label:"Буду скрываться до конца жизни",nextDialog:"4"}]},3:{description:"Царь не простил...",variants:[{label:"Переродиться и исправиться",nextDialog:"1"}]},4:{description:"Вы спрятались глубоко в лесу",variants:[{label:"Подождать и пойти купить себе дом",nextDialog:"5"},{label:"Скрываться дальше",nextDialog:"2"}]},5:{description:"Вас схватила стража. Пётр Казнил вас, когда приехал",variants:[{label:"Переродиться и исправить свои ошибки",nextDialog:"1"}]},6:{description:"Вы скрывались всю жизнь, в итоге ваша совесть давила на вас слишком сильно. Она получила физическое воплощение и раздавила вас своим весом",variants:[{label:"Переродиться и исправить свои ошибки",nextDialog:"1"}]},7:{description:"Ничего не происходит. Проходит время, Пётр I возвращается и всё. Ничего не произошло",variants:[{label:"Вы доживаете свою жизнь с чувством выполненного долга перед страной",nextDialog:"8"}]},8:{description:"Здраствуй, я бог. Хочешь посмотреть, что было бы, если бы ты сделал иначе?",variants:[{label:"Спрашиваешь, страый?",nextDialog:"1"}]},9:{description:"Вы воспользовались отсутсвием царя и захиватили власть. Что будете делать?",variants:[{label:"Всё. Начинаем веселье",nextDialog:"10"}]},10:{description:"Господа, будем решать как делить власть. Ваши идеи?",variants:[{label:"Турнир в камень-ножницы-бумага!",nextDialog:"11"},{label:"Вытаскиваем билетик на рандом",nextDialog:"15"},{label:"*не смогли договориться(",nextDialog:"11"}]},11:{description:"В итоге. Никто из Сената не победил. Приходит какой-то дед и побеждает всех в сухую и подряд",variants:[{label:"Сенат раздроблен, страна в упадке",nextDialog:"12"}]},12:{description:"Приезжает Пётр I, он сразу же идет разбираться",variants:[{label:"казнить деда и Сенат",nextDialog:"12"},{label:"победить деда в честном бою в камень-ножницы-бумага",nextDialog:"14"}]},13:{description:"Пётр выполняет, что обещал. И он снова собирает Сенат. Ему приходит срочное письмо подавить восстание в одной из стран Европы, ему опять нужно отъехать",variants:[{label:"Действовать за Сенат",nextDialog:"1"}]},14:{description:"Пётр зовёт деда один на один. Посмотреть, кто из них больше царь!",variants:[{label:"Пётр проигрывает деду. Петра в тюрьму, а у России настала очередная смута. Пётр выбирается из тюрьмы и свергает деда, пока не поздно",nextDialog:"1"}]},15:{description:"как и ожидалось, все результаты подделаны.",variants:[{label:"попытка #2",nextDialog:"16"}]},16:{description:"Господа, будем решать как делить власть. Ваши идеи?",variants:[{label:"Турнир в камень-ножницы-бумага!",nextDialog:"11"},{label:"*не смогли договориться*",nextDialog:"17"}]},17:{description:"Никто не смог договориться. Все просто раздробили страну. Теперь она была похожа на разбитое стекло. А каждый осколок - новая страна",variants:[{label:"Нет, так не надо! Не по канону!",nextDialog:"1"},{label:"*Пётр не смог вернуть власть и соеденить страну. Он прибегает к крайним мерам и зовёт на помощь Швецию*",nextDialog:"18"}]},18:{description:"Никто не смог договориться. Все просто раздробили страну. Теперь она была похожа на разбитое стекло. А каждый осколок - новая страна",variants:[{label:"Спустя много лет, вы всё же смогли соеденить страну одно целое. Вы отдали Швеции какие то территории, в качестве награды. Он обещает снова собрать нормальный Сенат и на этот раз, всё будет хорошо",nextDialog:"13"}]}};function u(o,e=""){const t=document.createElement("button"),a=document.createElement("h4");return t.className=e,a.innerText=o,t.appendChild(a),t}class k{constructor(e,t=70){i(this,"delay");i(this,"element");i(this,"interval");this.delay=t,this.element=e,this.interval=null}typing(e){let t=0;const a=this.element;this.interval=setInterval(function(){t<e.length?(a.innerHTML+=e.charAt(t),t++):clearInterval(this.interval)},this.delay)}stop(){clearInterval(this.interval)}}class p{constructor(e="1"){i(this,"id");i(this,"description");i(this,"variants");i(this,"text");this.id=e,this.variants=m[e].variants,this.description=m[e].description;const t=document.querySelector("#plot");this.text=new k(t,40)}change_dialog(e){this.id=e,this.variants=m[e].variants,this.description=m[e].description}start(){this.text.stop();const e=document.querySelector("#plot"),t=document.querySelector("#game_varios");if(e&&t){e.innerHTML="",t.innerHTML="",this.text.typing(this.description);for(let a of this.variants){const s=u(a.label,"varios");s.addEventListener("click",()=>{this.change_dialog(a.nextDialog),this.start()}),t.appendChild(s)}}}restart(){this.id="1",this.start()}}class E extends g{constructor(){super();i(this,"html");this.style="game",this.html=document.createElement("div"),this.html.innerHTML=`
        <div class="main_section_container">
            <div class="main_container">
                <div class="game_name">
                    <h1>Choise Of Russia</h1>
                </div>
                <div class="game_container">
                    <div class="game_text">
                        <h4 id="plot"></h4>
                    </div>
                    <div id="game_varios">

                    </div>
                </div>
            </div>
        </div>
        `}render(){const t=document.querySelector("main");n("game"),t&&(t.innerHTML=this.html.innerHTML,new p().start())}}class C extends g{constructor(t="Неизвестная Ошибка",a=404){super();i(this,"html");i(this,"error_name");i(this,"error_code");const s=document.createElement("div");s.className="error_container",this.error_name=t,this.error_code=a,s.innerHTML=`
        <div class = "error">
            <h2 class="error_text">${this.error_name}</h2>
            <h2 class="error_code">${this.error_code}</h2> 
        </div>
        `,this.html=s}render(){const t=document.querySelector("main");t?(t.innerHTML="",t.appendChild(this.html)):console.log("Нет секции main для страницы")}}class v extends g{constructor(){super();i(this,"html");this.style="about_us",this.html=document.querySelector("main"),this.html.innerHTML=`
        <section class="about_us">
            <div class="programmers">
                <div class="programmer">
                    <div class="photo-container">
                        <div class="laxerem-photo">
                        
                        </div>
                    </div>
                    <div class="about_him">
                        <div class="username-container">
                            <a class="username" href="https://github.com/Laxerem" target="_blank">Laxerem</a>
                        </div>
                        <div class="text-about">
                            <p class="zagolovok"><strong>TeamLeader, дизайнер</strong></p>
                            <div class="case">
                                <div class="work">
                                    <h3>Участие в создании страниц:</h3>
                                    <div class="container">
                                        <ul class="list">
                                            <li>Главная Страница (помощь в разработке)</li>
                                            <li>Игра (полностью)</li>
                                            <li>О нас (полностью)</li>
                                            <li>Страницы с темами (полностью)
                                        </ul>
                                    </div>
                                </div>
                                <div class="case-container">
                                    <h3>Задействованные языки:</h3>
                                        <div class="container">
                                            <ul class="list">
                                                <li>TypeScript</li>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                            </ul>
                                        </div>
                                </div>
                                <div class="feature">
                                    <p>Главный пинок команды</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="programmer">
                    <div class="oiwiio-photo">
                    
                    </div>
                    <div class="about_him">
                        <div class="username-container">
                            <a class="username" href="https://github.com/oiwiio" target="_blank">oiwiio</a>
                        </div>
                        <div class="text-about">
                            <p class="zagolovok"><strong>Верстальщик</strong> по макету</p>
                            <div class="case">
                                <div class="work">
                                    <h3>Участие в создании страниц:</h3>
                                    <div class="container">
                                        <ul class="list">
                                            <li>Главная Страница (ведущий в разработке)</li>
                                            <li>Исторический текст на страницах (полностью)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="case-container">
                                    <h3>Задействованные языки:</h3>
                                        <div class="container">
                                            <ul class="list">
                                                <li>HTML</li>
                                                <li>CSS</li>
                                            </ul>
                                        </div>
                                </div>
                                <div class="feature">
                                    <p>Следователь, копирайтер - батя текста</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="programmer">
                    <div class="devilsatu-photo">
                    
                    </div>
                    <div class="about_him">
                        <div class="username-container">
                            <a class="username" href="https://github.com/DevilSatu" target="_blank">DevilSatu</a>
                        </div>
                        <div class="text-about">
                            <p class="zagolovok"><strong>Верстальщик</strong></p>
                            <div class="case">
                                <div class="work">
                                    <h3>Участие в создании страниц:</h3>
                                    <div class="container">
                                        <ul class="list">
                                            <li>Главная Страница (помощь в разработке)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="case-container">
                                    <h3>Задействованные языки:</h3>
                                        <div class="container">
                                            <ul class="list">
                                                <li>HTML</li>
                                                <li>CSS</li>
                                            </ul>
                                        </div>
                                </div>
                                <div class="feature">
                                    <p>Разработчик сюжета игры</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `}}class w extends g{constructor(){super();i(this,"html");this.style="themes",this.html=document.createElement("div"),this.html.innerHTML=`
        <div class="themes_container">
            <div class="themes_catalog">
                <div class="theme reforms">
                    <div class="theme_name">
                        <h2>Реформы</h2>
                    </div>
                    <div class="theme_image">
                        <div class="comment">
                            <h2>Новые областные реформы, причины и цели</h2>
                        </div>
                    </div>
                </div>
                <div class="theme state_bodies">
                    <div class="theme_name">
                        <h2>Органы власти</h2>
                    </div>
                    <div class="theme_image">
                        <div class="comment">
                            <h2>Создание новых органов самоуправления</h2>
                        </div>
                    </div>
                </div>
                <div class="theme results">
                    <div class="theme_name">
                        <h2>Итоги</h2>
                    </div>
                    <div class="theme_image">
                        <div class="comment">
                            <h2>Итоги создания новых органов управления</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `}render(){n(this.style);const t=document.querySelector("main");t&&(t.innerHTML=this.html.innerHTML,document.querySelectorAll(".theme").forEach(s=>{s.addEventListener("click",()=>{window.location.href=`/#${s.classList[1]}`})}))}}class x extends g{constructor(){super();i(this,"html");this.style="home",this.html=document.createElement("div"),this.html.innerHTML=`
        <div class="home_container">
            <div class="main_home_container">
                <div class="topic_name">
                    <h2>Петр I: Государственные органы власти </h2>
                </div>
                <div class="flex_container">
                    <div class="petr_container">
                        <div class=" main_text">            
                            <h2>
                                Петр I провел значительные реформы в управлении государства,
                                создав новые органы власти для укрепления
                                централизованного государства.
                            </h2>
                        </div>
                        <div class="ava">
                            
                        </div>
                    </div>
                    <div class="bottom_main">
                        <button class="button_next"> <h3> Далее по теме </h3></button>
                    </div>
                </div>
            </div>
        </div>
        `}render(){n("home");const t=document.querySelector("main");if(t){t.innerHTML=this.html.innerHTML;const a=document.querySelector(".button_next");a&&a.addEventListener("click",()=>{window.location.href="/#themes"})}}}class I extends g{constructor(){super();i(this,"html");this.style="state_results",this.html=document.createElement("div"),this.html.innerHTML=`
        <div class="state_authorities_container">
          <div class="state_authorities_image">
            <div class="state_background_opacity">
            <a class="back" href="/#themes">Назад</a>
              <div class="main_state_text">
                <h2>Итоги реформ </h2>
                <br>
                <p>
                  Новые органы власти при Петре 1 показали себя эффективными, и просуществовали ещё долгое время, были введены новые реформы, созданы новые мануфактуры.
                </p>
              </div>
            </div>
          </div>
          <div class="state_main_content">
            <h1>Итоги</h1>
            <div class="results">
              <h2>Общие <span class="red">итоги</span> правления Петра I</h2>
              <div class="result">
                <h2>Россия стала империей</h2>
                <div class="text">
                  <p>В начале ноября, а именно 2 ноября 1721 года Петр 1 
                  принял статус Императора Всероссийского, следовательно - 
                  Россия стала империей.</p>
                </div>
              </div>
              <div class="result">
                <h2>Построение сильной армии и морского флота</h2>
                <div class="text">
                  <p>
                  Системные изменения в армии и созданный военно-морской 
                  флот сделали Россию одним из сильнейших военных 
                  держав Европы. Это оказало глубокое влияние 
                  на международный статус страны и связанные 
                  с этим политические, экономические и культурные 
                  изменения.
                   </p>
                </div>
              </div>
              <div class="cont"></div>
              <h2><span class="red">Итоги</span> во <span class="blue">внешней</span> политике</h2>
              <div class="result">
                <h2>Победа в Северной войне</h2>
                <div class="text">
                  <p>
                  Победа в Северной войне обеспечила России 
                  выход к балтийскому морю и установление влияния 
                  в Европе,основание Санкт-Петербурга как 
                  “окна в Европу” стало символом новой эпохи,
                   начало расширение на восток и укрепление власти 
                   в Сибири и на Дальнем Востоке.
                   </p>
                </div>
              </div>
              <div class="result">
                <h2>Заключение Ништадтского мира</h2>
                <div class="text">
                  <p>
                  Заключение Ништадтского мира в 1721 году, который 
                  подтвердил статус России как великой державы.
                   </p>
                </div>
              </div>
              <div class="cont"></div>
              <h2><span class="red">Итоги</span> во <span class="yellow">внутренней</span> политике</h2>
              <div class="result">
                <h2>Централизация власти</h2>
                <div class="text">
                  <p>
                  - Петр I укрепил абсолютную монархию, ограничив власть бояр и шляхты.
                  - Введение должности губернаторов способствовало централизованному управлению регионами.
                  - Создание Сената как высшего органа управления, что укрепило административную структуру.
                   </p>
                </div>
              </div>
              <div class="result">
                <h2>Введение новых органов самоуправления</h2>
                <div class="text">
                  <p>
                  Введение новых органов самоуправления в России 
                  играло важную роль в укреплении местного управления, 
                  повышении ответственности властей и активизации гражданского общества.
                  <br>
                  Было укреплено самодержавие и преобразована система гос-управления, а именно 
                  добавлен сенат и коллегии что облегчили работу Петру. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `}}const y=`<!--?xml version="1.0" encoding="UTF-8"?-->
<!-- Do not edit this file with editors other than draw.io -->

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="-0.5 -0.5 598 411" class="ge-export-svg-dark" content="<mxfile host=&quot;app.diagrams.net&quot; agent=&quot;Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36&quot; version=&quot;25.0.3&quot; scale=&quot;1&quot; border=&quot;0&quot;>
  <diagram name=&quot;Страница — 1&quot; id=&quot;0fnnJZN03J5C83n-OsDY&quot;>
    <mxGraphModel dx=&quot;842&quot; dy=&quot;451&quot; grid=&quot;1&quot; gridSize=&quot;10&quot; guides=&quot;1&quot; tooltips=&quot;1&quot; connect=&quot;1&quot; arrows=&quot;1&quot; fold=&quot;1&quot; page=&quot;1&quot; pageScale=&quot;1&quot; pageWidth=&quot;827&quot; pageHeight=&quot;1169&quot; math=&quot;0&quot; shadow=&quot;0&quot;>
      <root>
        <mxCell id=&quot;0&quot; />
        <mxCell id=&quot;1&quot; parent=&quot;0&quot; />
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-17&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fillColor=#f8cecc;strokeColor=#b85450;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;Gt4P2Vj7P7tmo7SZro1k-4&quot; target=&quot;Gt4P2Vj7P7tmo7SZro1k-10&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-19&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;Gt4P2Vj7P7tmo7SZro1k-4&quot; target=&quot;Gt4P2Vj7P7tmo7SZro1k-18&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-23&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;Gt4P2Vj7P7tmo7SZro1k-4&quot; target=&quot;Gt4P2Vj7P7tmo7SZro1k-18&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-24&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fillColor=#f8cecc;strokeColor=#b85450;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;Gt4P2Vj7P7tmo7SZro1k-4&quot; target=&quot;Gt4P2Vj7P7tmo7SZro1k-18&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-28&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;Gt4P2Vj7P7tmo7SZro1k-4&quot; target=&quot;Gt4P2Vj7P7tmo7SZro1k-6&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-29&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fillColor=#f8cecc;strokeColor=#b85450;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;Gt4P2Vj7P7tmo7SZro1k-4&quot; target=&quot;Gt4P2Vj7P7tmo7SZro1k-20&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-4&quot; value=&quot;Император&amp;lt;div&amp;gt;(с 1721)&amp;lt;/div&amp;gt;&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;400&quot; y=&quot;80&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-9&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;Gt4P2Vj7P7tmo7SZro1k-6&quot; target=&quot;Gt4P2Vj7P7tmo7SZro1k-8&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-13&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;Gt4P2Vj7P7tmo7SZro1k-6&quot; target=&quot;Gt4P2Vj7P7tmo7SZro1k-12&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-42&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=1;entryDx=0;entryDy=0;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;Gt4P2Vj7P7tmo7SZro1k-6&quot; target=&quot;Gt4P2Vj7P7tmo7SZro1k-31&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot;>
            <Array as=&quot;points&quot;>
              <mxPoint x=&quot;60&quot; y=&quot;140&quot; />
              <mxPoint x=&quot;60&quot; y=&quot;450&quot; />
              <mxPoint x=&quot;460&quot; y=&quot;450&quot; />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-6&quot; value=&quot;Генерал-прокурор&amp;lt;div&amp;gt;(с 1722)&amp;lt;/div&amp;gt;&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;90&quot; y=&quot;120&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-11&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;Gt4P2Vj7P7tmo7SZro1k-8&quot; target=&quot;Gt4P2Vj7P7tmo7SZro1k-10&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-8&quot; value=&quot;Обер-прокурор&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;90&quot; y=&quot;205&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-16&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;Gt4P2Vj7P7tmo7SZro1k-10&quot; target=&quot;Gt4P2Vj7P7tmo7SZro1k-14&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-10&quot; value=&quot;Правительствующий Сенат&amp;lt;div&amp;gt;(с 1711)&amp;lt;/div&amp;gt;&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;280&quot; y=&quot;200&quot; width=&quot;120&quot; height=&quot;50&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-15&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;Gt4P2Vj7P7tmo7SZro1k-12&quot; target=&quot;Gt4P2Vj7P7tmo7SZro1k-14&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-12&quot; value=&quot;Прокурор&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;90&quot; y=&quot;380&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-14&quot; value=&quot;Коллегии&amp;lt;div&amp;gt;(1718-1721)&amp;lt;/div&amp;gt;&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;280&quot; y=&quot;380&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-18&quot; value=&quot;Тайная канцелярия&amp;lt;div&amp;gt;(с 1718)&amp;lt;/div&amp;gt;&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;520&quot; y=&quot;200&quot; width=&quot;130&quot; height=&quot;50&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-20&quot; value=&quot;Святейший Синод&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d79b00;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;400&quot; y=&quot;260&quot; width=&quot;120&quot; height=&quot;50&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-46&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=1;entryDx=0;entryDy=0;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;Gt4P2Vj7P7tmo7SZro1k-31&quot; target=&quot;Gt4P2Vj7P7tmo7SZro1k-20&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-31&quot; value=&quot;Обер-прокурор&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;410&quot; y=&quot;350&quot; width=&quot;100&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-35&quot; value=&quot;&amp;lt;font color=&amp;quot;#3d3d00&amp;quot;&amp;gt;Назначает&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fillColor=none;gradientColor=none;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;260&quot; y=&quot;70&quot; width=&quot;60&quot; height=&quot;30&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-39&quot; value=&quot;&amp;lt;font color=&amp;quot;#3d3d00&amp;quot;&amp;gt;Назначает&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fillColor=none;gradientColor=none;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;470&quot; y=&quot;125&quot; width=&quot;60&quot; height=&quot;30&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-40&quot; value=&quot;&amp;lt;font color=&amp;quot;#3d3d00&amp;quot;&amp;gt;Назначает&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fillColor=none;gradientColor=none;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;80&quot; y=&quot;290&quot; width=&quot;60&quot; height=&quot;30&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-43&quot; value=&quot;&amp;lt;font color=&amp;quot;#3d3d00&amp;quot;&amp;gt;Назначает&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fillColor=none;gradientColor=none;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;80&quot; y=&quot;170&quot; width=&quot;60&quot; height=&quot;30&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-44&quot; value=&quot;&amp;lt;font color=&amp;quot;#3399ff&amp;quot;&amp;gt;Надзор&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;210&quot; y=&quot;200&quot; width=&quot;60&quot; height=&quot;30&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-45&quot; value=&quot;&amp;lt;font color=&amp;quot;#3399ff&amp;quot;&amp;gt;Надзор&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;460&quot; y=&quot;310&quot; width=&quot;60&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-47&quot; value=&quot;&amp;lt;font color=&amp;quot;#3399ff&amp;quot;&amp;gt;Надзор&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;210&quot; y=&quot;370&quot; width=&quot;70&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-48&quot; value=&quot;&amp;lt;font color=&amp;quot;#ea6b66&amp;quot;&amp;gt;Назначает президентов и вице-пре&amp;lt;span style=&amp;quot;background-color: initial;&amp;quot;&amp;gt;зидентов&amp;lt;/span&amp;gt;&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;235&quot; y=&quot;280&quot; width=&quot;105&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;Gt4P2Vj7P7tmo7SZro1k-50&quot; value=&quot;&amp;lt;font color=&amp;quot;#3d3d00&amp;quot;&amp;gt;Назначает&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fillColor=none;gradientColor=none;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;240&quot; y=&quot;450&quot; width=&quot;60&quot; height=&quot;30&quot; as=&quot;geometry&quot; />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
"><defs><style type="text/css">svg.ge-export-svg-dark:not(mjx-container &gt; svg) { filter: invert(100%) hue-rotate(180deg); }
svg.ge-export-svg-dark foreignObject img,
svg.ge-export-svg-dark image:not(svg.ge-export-svg-dark switch image),
svg.ge-export-svg-dark svg:not(mjx-container &gt; svg)
{ filter: invert(100%) hue-rotate(180deg) }</style></defs><g><g data-cell-id="0"><g data-cell-id="1"><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-17"><g><path d="M 407 50 L 407 90.03 L 287 90.03 L 287 123.63" fill="none" stroke="#b85450" stroke-miterlimit="10" pointer-events="stroke" class="svg-1-1"></path><path d="M 287 128.88 L 283.5 121.88 L 287 123.63 L 290.5 121.88 Z" fill="#b85450" stroke="#b85450" stroke-miterlimit="10" pointer-events="all" class="svg-1-2"></path></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-19"><g><path d="M 407 50 L 407 90.03 L 532.03 90.03 L 532.03 123.63" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke" class="svg-1-3"></path><path d="M 532.03 128.88 L 528.53 121.88 L 532.03 123.63 L 535.53 121.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all" class="svg-1-4"></path></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-23"><g><path d="M 407 50 L 407 90.03 L 532.03 90.03 L 532.03 123.63" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke" class="svg-1-5"></path><path d="M 532.03 128.88 L 528.53 121.88 L 532.03 123.63 L 535.53 121.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all" class="svg-1-6"></path></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-24"><g><path d="M 407 50 L 407 90.03 L 532.03 90.03 L 532.03 123.63" fill="none" stroke="#b85450" stroke-miterlimit="10" pointer-events="stroke" class="svg-1-7"></path><path d="M 532.03 128.88 L 528.53 121.88 L 532.03 123.63 L 535.53 121.88 Z" fill="#b85450" stroke="#b85450" stroke-miterlimit="10" pointer-events="all" class="svg-1-8"></path></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-28"><g><path d="M 347 29.97 L 97 29.97 L 97 43.63" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke" class="svg-1-9"></path><path d="M 97 48.88 L 93.5 41.88 L 97 43.63 L 100.5 41.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all" class="svg-1-10"></path></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-29"><g><path d="M 407 50 L 407 183.63" fill="none" stroke="#b85450" stroke-miterlimit="10" pointer-events="stroke" class="svg-1-11"></path><path d="M 407 188.88 L 403.5 181.88 L 407 183.63 L 410.5 181.88 Z" fill="#b85450" stroke="#b85450" stroke-miterlimit="10" pointer-events="all" class="svg-1-12"></path></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-4"><g><rect x="347" y="10" width="120" height="40" fill="#f8cecc" stroke="#b85450" pointer-events="all" class="svg-1-13"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 30px; margin-left: 348px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">Император<div>(с 1721)</div></div></div></div></foreignObject><text x="407" y="34" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;" font-size="12px" text-anchor="middle">Император
(с 1721)</text></switch></g></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-9"><g><path d="M 97 90 L 97 128.63" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke" class="svg-1-14"></path><path d="M 97 133.88 L 93.5 126.88 L 97 128.63 L 100.5 126.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all" class="svg-1-15"></path></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-13"><g><path d="M 97 90 L 97 303.63" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke" class="svg-1-16"></path><path d="M 97 308.88 L 93.5 301.88 L 97 303.63 L 100.5 301.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all" class="svg-1-17"></path></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-42"><g><path d="M 37 70.03 L 7 70.03 L 7 380.03 L 407 380.03 L 407 326.37" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke" class="svg-1-18"></path><path d="M 407 321.12 L 410.5 328.12 L 407 326.37 L 403.5 328.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all" class="svg-1-19"></path></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-6"><g><rect x="37" y="50" width="120" height="40" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" pointer-events="all" class="svg-1-20"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 70px; margin-left: 38px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">Генерал-прокурор<div>(с 1722)</div></div></div></div></foreignObject><text x="97" y="74" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;" font-size="12px" text-anchor="middle">Генерал-прокурор...</text></switch></g></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-11"><g><path d="M 157 155 L 220.63 155" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke" class="svg-1-21"></path><path d="M 225.88 155 L 218.88 158.5 L 220.63 155 L 218.88 151.5 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all" class="svg-1-22"></path></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-8"><g><rect x="37" y="135" width="120" height="40" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" pointer-events="all" class="svg-1-23"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 155px; margin-left: 38px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">Обер-прокурор</div></div></div></foreignObject><text x="97" y="159" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;" font-size="12px" text-anchor="middle">Обер-прокурор</text></switch></g></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-16"><g><path d="M 287 180 L 287 303.63" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke" class="svg-1-24"></path><path d="M 287 308.88 L 283.5 301.88 L 287 303.63 L 290.5 301.88 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all" class="svg-1-25"></path></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-10"><g><rect x="227" y="130" width="120" height="50" fill="#dae8fc" stroke="#6c8ebf" pointer-events="all" class="svg-1-26"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 155px; margin-left: 228px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">Правительствующий Сенат<div>(с 1711)</div></div></div></div></foreignObject><text x="287" y="159" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;" font-size="12px" text-anchor="middle">Правительствующий Сенат...</text></switch></g></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-15"><g><path d="M 157 330 L 220.63 330" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke" class="svg-1-27"></path><path d="M 225.88 330 L 218.88 333.5 L 220.63 330 L 218.88 326.5 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all" class="svg-1-28"></path></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-12"><g><rect x="37" y="310" width="120" height="40" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" pointer-events="all" class="svg-1-29"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 330px; margin-left: 38px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">Прокурор</div></div></div></foreignObject><text x="97" y="334" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;" font-size="12px" text-anchor="middle">Прокурор</text></switch></g></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-14"><g><rect x="227" y="310" width="120" height="40" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" pointer-events="all" class="svg-1-30"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 330px; margin-left: 228px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">Коллегии<div>(1718-1721)</div></div></div></div></foreignObject><text x="287" y="334" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;" font-size="12px" text-anchor="middle">Коллегии
(1718-1721)</text></switch></g></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-18"><g><rect x="467" y="130" width="130" height="50" fill="#d5e8d4" stroke="#82b366" pointer-events="all" class="svg-1-31"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 128px; height: 1px; padding-top: 155px; margin-left: 468px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">Тайная канцелярия<div>(с 1718)</div></div></div></div></foreignObject><text x="532" y="159" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;" font-size="12px" text-anchor="middle">Тайная канцелярия...</text></switch></g></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-20"><g><rect x="347" y="190" width="120" height="50" fill="#ffe6cc" stroke="#d79b00" pointer-events="all" class="svg-1-32"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 215px; margin-left: 348px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">Святейший Синод</div></div></div></foreignObject><text x="407" y="219" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;" font-size="12px" text-anchor="middle">Святейший Синод</text></switch></g></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-46"><g><path d="M 407 280 L 407 246.37" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke" class="svg-1-33"></path><path d="M 407 241.12 L 410.5 248.12 L 407 246.37 L 403.5 248.12 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all" class="svg-1-34"></path></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-31"><g><rect x="357" y="280" width="100" height="40" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" pointer-events="all" class="svg-1-35"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 98px; height: 1px; padding-top: 300px; margin-left: 358px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">Обер-прокурор</div></div></div></foreignObject><text x="407" y="304" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;" font-size="12px" text-anchor="middle">Обер-прокурор</text></switch></g></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-35"><g><rect x="207" y="0" width="60" height="30" fill="none" stroke="none" pointer-events="all" class="svg-1-36"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 15px; margin-left: 208px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><font color="#3d3d00">Назначает</font></div></div></div></foreignObject><text x="237" y="19" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;" font-size="12px" text-anchor="middle">Назначает</text></switch></g></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-39"><g><rect x="417" y="55" width="60" height="30" fill="none" stroke="none" pointer-events="all" class="svg-1-37"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 70px; margin-left: 418px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><font color="#3d3d00">Назначает</font></div></div></div></foreignObject><text x="447" y="74" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;" font-size="12px" text-anchor="middle">Назначает</text></switch></g></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-40"><g><rect x="27" y="220" width="60" height="30" fill="none" stroke="none" pointer-events="all" class="svg-1-38"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 235px; margin-left: 28px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><font color="#3d3d00">Назначает</font></div></div></div></foreignObject><text x="57" y="239" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;" font-size="12px" text-anchor="middle">Назначает</text></switch></g></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-43"><g><rect x="27" y="100" width="60" height="30" fill="none" stroke="none" pointer-events="all" class="svg-1-39"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 115px; margin-left: 28px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><font color="#3d3d00">Назначает</font></div></div></div></foreignObject><text x="57" y="119" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;" font-size="12px" text-anchor="middle">Назначает</text></switch></g></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-44"><g><rect x="157" y="130" width="60" height="30" fill="none" stroke="none" pointer-events="all" class="svg-1-40"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 145px; margin-left: 158px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><font color="#3399ff">Надзор</font></div></div></div></foreignObject><text x="187" y="149" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;" font-size="12px" text-anchor="middle">Надзор</text></switch></g></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-45"><g><rect x="407" y="240" width="60" height="40" fill="none" stroke="none" pointer-events="all" class="svg-1-41"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 260px; margin-left: 408px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><font color="#3399ff">Надзор</font></div></div></div></foreignObject><text x="437" y="264" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;" font-size="12px" text-anchor="middle">Надзор</text></switch></g></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-47"><g><rect x="157" y="300" width="70" height="40" fill="none" stroke="none" pointer-events="all" class="svg-1-42"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 68px; height: 1px; padding-top: 320px; margin-left: 158px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><font color="#3399ff">Надзор</font></div></div></div></foreignObject><text x="192" y="324" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;" font-size="12px" text-anchor="middle">Надзор</text></switch></g></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-48"><g><rect x="182" y="210" width="105" height="40" fill="none" stroke="none" pointer-events="all" class="svg-1-43"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 103px; height: 1px; padding-top: 230px; margin-left: 183px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><font color="#ea6b66">Назначает президентов и вице-пре<span style="background-color: initial;">зидентов</span></font></div></div></div></foreignObject><text x="235" y="234" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;" font-size="12px" text-anchor="middle">Назначает президентов и вице-президентов</text></switch></g></g></g><g data-cell-id="Gt4P2Vj7P7tmo7SZro1k-50"><g><rect x="187" y="380" width="60" height="30" fill="none" stroke="none" pointer-events="all" class="svg-1-44"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 395px; margin-left: 188px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><font color="#3d3d00">Назначает</font></div></div></div></foreignObject><text x="217" y="399" fill="rgb(0, 0, 0)" font-family="&quot;Helvetica&quot;" font-size="12px" text-anchor="middle">Назначает</text></switch></g></g></g></g></g></g></svg>
`,B=`

@-webkit-keyframes animate-svg-stroke-1 {
  0% {
    stroke-dashoffset: 195.6300048828125px;
    stroke-dasharray: 195.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 195.6300048828125px;
  }
}

@keyframes animate-svg-stroke-1 {
  0% {
    stroke-dashoffset: 195.6300048828125px;
    stroke-dasharray: 195.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 195.6300048828125px;
  }
}

.svg-1-1 {
  -webkit-animation: animate-svg-stroke-1 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s both,
                       animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
          animation: animate-svg-stroke-1 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s both,
               animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
}

@-webkit-keyframes animate-svg-stroke-2 {
  0% {
    stroke-dashoffset: 25.478727340698242px;
    stroke-dasharray: 25.478727340698242px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478727340698242px;
  }
}

@keyframes animate-svg-stroke-2 {
  0% {
    stroke-dashoffset: 25.478727340698242px;
    stroke-dasharray: 25.478727340698242px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478727340698242px;
  }
}

@-webkit-keyframes animate-svg-fill-2 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(184, 84, 80);
  }
}

@keyframes animate-svg-fill-2 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(184, 84, 80);
  }
}

.svg-1-2 {
  -webkit-animation: animate-svg-stroke-2 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s both,
                       animate-svg-fill-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
          animation: animate-svg-stroke-2 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s both,
               animate-svg-fill-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
}

@-webkit-keyframes animate-svg-stroke-3 {
  0% {
    stroke-dashoffset: 200.6600341796875px;
    stroke-dasharray: 200.6600341796875px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 200.6600341796875px;
  }
}

@keyframes animate-svg-stroke-3 {
  0% {
    stroke-dashoffset: 200.6600341796875px;
    stroke-dasharray: 200.6600341796875px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 200.6600341796875px;
  }
}

.svg-1-3 {
  -webkit-animation: animate-svg-stroke-3 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s both,
                       animate-svg-fill-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
          animation: animate-svg-stroke-3 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s both,
               animate-svg-fill-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
}

@-webkit-keyframes animate-svg-stroke-4 {
  0% {
    stroke-dashoffset: 25.478727340698242px;
    stroke-dasharray: 25.478727340698242px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478727340698242px;
  }
}

@keyframes animate-svg-stroke-4 {
  0% {
    stroke-dashoffset: 25.478727340698242px;
    stroke-dasharray: 25.478727340698242px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478727340698242px;
  }
}

@-webkit-keyframes animate-svg-fill-4 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

@keyframes animate-svg-fill-4 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

.svg-1-4 {
  -webkit-animation: animate-svg-stroke-4 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s both,
                       animate-svg-fill-4 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
          animation: animate-svg-stroke-4 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s both,
               animate-svg-fill-4 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
}

@-webkit-keyframes animate-svg-stroke-5 {
  0% {
    stroke-dashoffset: 200.6600341796875px;
    stroke-dasharray: 200.6600341796875px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 200.6600341796875px;
  }
}

@keyframes animate-svg-stroke-5 {
  0% {
    stroke-dashoffset: 200.6600341796875px;
    stroke-dasharray: 200.6600341796875px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 200.6600341796875px;
  }
}

.svg-1-5 {
  -webkit-animation: animate-svg-stroke-5 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s both,
                       animate-svg-fill-5 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s both;
          animation: animate-svg-stroke-5 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s both,
               animate-svg-fill-5 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s both;
}

@-webkit-keyframes animate-svg-stroke-6 {
  0% {
    stroke-dashoffset: 25.478727340698242px;
    stroke-dasharray: 25.478727340698242px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478727340698242px;
  }
}

@keyframes animate-svg-stroke-6 {
  0% {
    stroke-dashoffset: 25.478727340698242px;
    stroke-dasharray: 25.478727340698242px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478727340698242px;
  }
}

@-webkit-keyframes animate-svg-fill-6 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

@keyframes animate-svg-fill-6 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

.svg-1-6 {
  -webkit-animation: animate-svg-stroke-6 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s both,
                       animate-svg-fill-6 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both;
          animation: animate-svg-stroke-6 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s both,
               animate-svg-fill-6 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both;
}

@-webkit-keyframes animate-svg-stroke-7 {
  0% {
    stroke-dashoffset: 200.6600341796875px;
    stroke-dasharray: 200.6600341796875px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 200.6600341796875px;
  }
}

@keyframes animate-svg-stroke-7 {
  0% {
    stroke-dashoffset: 200.6600341796875px;
    stroke-dasharray: 200.6600341796875px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 200.6600341796875px;
  }
}

.svg-1-7 {
  -webkit-animation: animate-svg-stroke-7 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s both,
                       animate-svg-fill-7 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s both;
          animation: animate-svg-stroke-7 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s both,
               animate-svg-fill-7 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s both;
}

@-webkit-keyframes animate-svg-stroke-8 {
  0% {
    stroke-dashoffset: 25.478727340698242px;
    stroke-dasharray: 25.478727340698242px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478727340698242px;
  }
}

@keyframes animate-svg-stroke-8 {
  0% {
    stroke-dashoffset: 25.478727340698242px;
    stroke-dasharray: 25.478727340698242px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478727340698242px;
  }
}

@-webkit-keyframes animate-svg-fill-8 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(184, 84, 80);
  }
}

@keyframes animate-svg-fill-8 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(184, 84, 80);
  }
}

.svg-1-8 {
  -webkit-animation: animate-svg-stroke-8 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s both,
                       animate-svg-fill-8 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both;
          animation: animate-svg-stroke-8 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s both,
               animate-svg-fill-8 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both;
}

@-webkit-keyframes animate-svg-stroke-9 {
  0% {
    stroke-dashoffset: 265.6600036621094px;
    stroke-dasharray: 265.6600036621094px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 265.6600036621094px;
  }
}

@keyframes animate-svg-stroke-9 {
  0% {
    stroke-dashoffset: 265.6600036621094px;
    stroke-dasharray: 265.6600036621094px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 265.6600036621094px;
  }
}

.svg-1-9 {
  -webkit-animation: animate-svg-stroke-9 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.96s both,
                       animate-svg-fill-9 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s both;
          animation: animate-svg-stroke-9 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.96s both,
               animate-svg-fill-9 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s both;
}

@-webkit-keyframes animate-svg-stroke-10 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@keyframes animate-svg-stroke-10 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@-webkit-keyframes animate-svg-fill-10 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

@keyframes animate-svg-fill-10 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

.svg-1-10 {
  -webkit-animation: animate-svg-stroke-10 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.08s both,
                       animate-svg-fill-10 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s both;
          animation: animate-svg-stroke-10 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.08s both,
               animate-svg-fill-10 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s both;
}

@-webkit-keyframes animate-svg-stroke-11 {
  0% {
    stroke-dashoffset: 135.6300048828125px;
    stroke-dasharray: 135.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 135.6300048828125px;
  }
}

@keyframes animate-svg-stroke-11 {
  0% {
    stroke-dashoffset: 135.6300048828125px;
    stroke-dasharray: 135.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 135.6300048828125px;
  }
}

.svg-1-11 {
  -webkit-animation: animate-svg-stroke-11 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s both,
                       animate-svg-fill-11 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s both;
          animation: animate-svg-stroke-11 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s both,
               animate-svg-fill-11 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s both;
}

@-webkit-keyframes animate-svg-stroke-12 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@keyframes animate-svg-stroke-12 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@-webkit-keyframes animate-svg-fill-12 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(184, 84, 80);
  }
}

@keyframes animate-svg-fill-12 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(184, 84, 80);
  }
}

.svg-1-12 {
  -webkit-animation: animate-svg-stroke-12 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3199999999999998s both,
                       animate-svg-fill-12 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.9000000000000001s both;
          animation: animate-svg-stroke-12 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3199999999999998s both,
               animate-svg-fill-12 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.9000000000000001s both;
}

@-webkit-keyframes animate-svg-stroke-13 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@keyframes animate-svg-stroke-13 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@-webkit-keyframes animate-svg-fill-13 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(248, 206, 204);
  }
}

@keyframes animate-svg-fill-13 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(248, 206, 204);
  }
}

.svg-1-13 {
  -webkit-animation: animate-svg-stroke-13 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.44s both,
                       animate-svg-fill-13 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2s both;
          animation: animate-svg-stroke-13 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.44s both,
               animate-svg-fill-13 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2s both;
}

@-webkit-keyframes animate-svg-stroke-14 {
  0% {
    stroke-dashoffset: 40.6300048828125px;
    stroke-dasharray: 40.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 40.6300048828125px;
  }
}

@keyframes animate-svg-stroke-14 {
  0% {
    stroke-dashoffset: 40.6300048828125px;
    stroke-dasharray: 40.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 40.6300048828125px;
  }
}

.svg-1-14 {
  -webkit-animation: animate-svg-stroke-14 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.56s both,
                       animate-svg-fill-14 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.1s both;
          animation: animate-svg-stroke-14 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.56s both,
               animate-svg-fill-14 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.1s both;
}

@-webkit-keyframes animate-svg-stroke-15 {
  0% {
    stroke-dashoffset: 25.478734970092773px;
    stroke-dasharray: 25.478734970092773px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478734970092773px;
  }
}

@keyframes animate-svg-stroke-15 {
  0% {
    stroke-dashoffset: 25.478734970092773px;
    stroke-dasharray: 25.478734970092773px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478734970092773px;
  }
}

@-webkit-keyframes animate-svg-fill-15 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

@keyframes animate-svg-fill-15 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

.svg-1-15 {
  -webkit-animation: animate-svg-stroke-15 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.68s both,
                       animate-svg-fill-15 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.2s both;
          animation: animate-svg-stroke-15 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.68s both,
               animate-svg-fill-15 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.2s both;
}

@-webkit-keyframes animate-svg-stroke-16 {
  0% {
    stroke-dashoffset: 215.6300048828125px;
    stroke-dasharray: 215.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 215.6300048828125px;
  }
}

@keyframes animate-svg-stroke-16 {
  0% {
    stroke-dashoffset: 215.6300048828125px;
    stroke-dasharray: 215.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 215.6300048828125px;
  }
}

.svg-1-16 {
  -webkit-animation: animate-svg-stroke-16 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7999999999999998s both,
                       animate-svg-fill-16 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.3s both;
          animation: animate-svg-stroke-16 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7999999999999998s both,
               animate-svg-fill-16 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.3s both;
}

@-webkit-keyframes animate-svg-stroke-17 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@keyframes animate-svg-stroke-17 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@-webkit-keyframes animate-svg-fill-17 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

@keyframes animate-svg-fill-17 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

.svg-1-17 {
  -webkit-animation: animate-svg-stroke-17 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.92s both,
                       animate-svg-fill-17 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.4000000000000004s both;
          animation: animate-svg-stroke-17 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.92s both,
               animate-svg-fill-17 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.4000000000000004s both;
}

@-webkit-keyframes animate-svg-stroke-18 {
  0% {
    stroke-dashoffset: 795.6600341796875px;
    stroke-dasharray: 795.6600341796875px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 795.6600341796875px;
  }
}

@keyframes animate-svg-stroke-18 {
  0% {
    stroke-dashoffset: 795.6600341796875px;
    stroke-dasharray: 795.6600341796875px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 795.6600341796875px;
  }
}

.svg-1-18 {
  -webkit-animation: animate-svg-stroke-18 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.04s both,
                       animate-svg-fill-18 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.5s both;
          animation: animate-svg-stroke-18 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.04s both,
               animate-svg-fill-18 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.5s both;
}

@-webkit-keyframes animate-svg-stroke-19 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@keyframes animate-svg-stroke-19 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@-webkit-keyframes animate-svg-fill-19 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

@keyframes animate-svg-fill-19 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

.svg-1-19 {
  -webkit-animation: animate-svg-stroke-19 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.16s both,
                       animate-svg-fill-19 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.6s both;
          animation: animate-svg-stroke-19 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.16s both,
               animate-svg-fill-19 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.6s both;
}

@-webkit-keyframes animate-svg-stroke-20 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@keyframes animate-svg-stroke-20 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@-webkit-keyframes animate-svg-fill-20 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

@keyframes animate-svg-fill-20 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

.svg-1-20 {
  -webkit-animation: animate-svg-stroke-20 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.28s both,
                       animate-svg-fill-20 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.7s both;
          animation: animate-svg-stroke-20 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.28s both,
               animate-svg-fill-20 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.7s both;
}

@-webkit-keyframes animate-svg-stroke-21 {
  0% {
    stroke-dashoffset: 65.6300048828125px;
    stroke-dasharray: 65.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 65.6300048828125px;
  }
}

@keyframes animate-svg-stroke-21 {
  0% {
    stroke-dashoffset: 65.6300048828125px;
    stroke-dasharray: 65.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 65.6300048828125px;
  }
}

.svg-1-21 {
  -webkit-animation: animate-svg-stroke-21 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.4s both,
                       animate-svg-fill-21 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.8s both;
          animation: animate-svg-stroke-21 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.4s both,
               animate-svg-fill-21 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.8s both;
}

@-webkit-keyframes animate-svg-stroke-22 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@keyframes animate-svg-stroke-22 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@-webkit-keyframes animate-svg-fill-22 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

@keyframes animate-svg-fill-22 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

.svg-1-22 {
  -webkit-animation: animate-svg-stroke-22 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.52s both,
                       animate-svg-fill-22 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.9000000000000004s both;
          animation: animate-svg-stroke-22 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.52s both,
               animate-svg-fill-22 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.9000000000000004s both;
}

@-webkit-keyframes animate-svg-stroke-23 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@keyframes animate-svg-stroke-23 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@-webkit-keyframes animate-svg-fill-23 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

@keyframes animate-svg-fill-23 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

.svg-1-23 {
  -webkit-animation: animate-svg-stroke-23 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.6399999999999997s both,
                       animate-svg-fill-23 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3s both;
          animation: animate-svg-stroke-23 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.6399999999999997s both,
               animate-svg-fill-23 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3s both;
}

@-webkit-keyframes animate-svg-stroke-24 {
  0% {
    stroke-dashoffset: 125.6300048828125px;
    stroke-dasharray: 125.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 125.6300048828125px;
  }
}

@keyframes animate-svg-stroke-24 {
  0% {
    stroke-dashoffset: 125.6300048828125px;
    stroke-dasharray: 125.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 125.6300048828125px;
  }
}

.svg-1-24 {
  -webkit-animation: animate-svg-stroke-24 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.76s both,
                       animate-svg-fill-24 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.1000000000000005s both;
          animation: animate-svg-stroke-24 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.76s both,
               animate-svg-fill-24 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.1000000000000005s both;
}

@-webkit-keyframes animate-svg-stroke-25 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@keyframes animate-svg-stroke-25 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@-webkit-keyframes animate-svg-fill-25 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

@keyframes animate-svg-fill-25 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

.svg-1-25 {
  -webkit-animation: animate-svg-stroke-25 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.88s both,
                       animate-svg-fill-25 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.2s both;
          animation: animate-svg-stroke-25 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.88s both,
               animate-svg-fill-25 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.2s both;
}

@-webkit-keyframes animate-svg-stroke-26 {
  0% {
    stroke-dashoffset: 342px;
    stroke-dasharray: 342px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 342px;
  }
}

@keyframes animate-svg-stroke-26 {
  0% {
    stroke-dashoffset: 342px;
    stroke-dasharray: 342px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 342px;
  }
}

@-webkit-keyframes animate-svg-fill-26 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(218, 232, 252);
  }
}

@keyframes animate-svg-fill-26 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(218, 232, 252);
  }
}

.svg-1-26 {
  -webkit-animation: animate-svg-stroke-26 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3s both,
                       animate-svg-fill-26 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.3s both;
          animation: animate-svg-stroke-26 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3s both,
               animate-svg-fill-26 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.3s both;
}

@-webkit-keyframes animate-svg-stroke-27 {
  0% {
    stroke-dashoffset: 65.6300048828125px;
    stroke-dasharray: 65.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 65.6300048828125px;
  }
}

@keyframes animate-svg-stroke-27 {
  0% {
    stroke-dashoffset: 65.6300048828125px;
    stroke-dasharray: 65.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 65.6300048828125px;
  }
}

.svg-1-27 {
  -webkit-animation: animate-svg-stroke-27 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.12s both,
                       animate-svg-fill-27 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.4000000000000004s both;
          animation: animate-svg-stroke-27 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.12s both,
               animate-svg-fill-27 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.4000000000000004s both;
}

@-webkit-keyframes animate-svg-stroke-28 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@keyframes animate-svg-stroke-28 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@-webkit-keyframes animate-svg-fill-28 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

@keyframes animate-svg-fill-28 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

.svg-1-28 {
  -webkit-animation: animate-svg-stroke-28 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.2399999999999998s both,
                       animate-svg-fill-28 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.5s both;
          animation: animate-svg-stroke-28 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.2399999999999998s both,
               animate-svg-fill-28 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.5s both;
}

@-webkit-keyframes animate-svg-stroke-29 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@keyframes animate-svg-stroke-29 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@-webkit-keyframes animate-svg-fill-29 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

@keyframes animate-svg-fill-29 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

.svg-1-29 {
  -webkit-animation: animate-svg-stroke-29 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.36s both,
                       animate-svg-fill-29 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.6000000000000005s both;
          animation: animate-svg-stroke-29 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.36s both,
               animate-svg-fill-29 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.6000000000000005s both;
}

@-webkit-keyframes animate-svg-stroke-30 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@keyframes animate-svg-stroke-30 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@-webkit-keyframes animate-svg-fill-30 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

@keyframes animate-svg-fill-30 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

.svg-1-30 {
  -webkit-animation: animate-svg-stroke-30 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.48s both,
                       animate-svg-fill-30 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.7s both;
          animation: animate-svg-stroke-30 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.48s both,
               animate-svg-fill-30 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.7s both;
}

@-webkit-keyframes animate-svg-stroke-31 {
  0% {
    stroke-dashoffset: 362px;
    stroke-dasharray: 362px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 362px;
  }
}

@keyframes animate-svg-stroke-31 {
  0% {
    stroke-dashoffset: 362px;
    stroke-dasharray: 362px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 362px;
  }
}

@-webkit-keyframes animate-svg-fill-31 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(213, 232, 212);
  }
}

@keyframes animate-svg-fill-31 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(213, 232, 212);
  }
}

.svg-1-31 {
  -webkit-animation: animate-svg-stroke-31 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.5999999999999996s both,
                       animate-svg-fill-31 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.8s both;
          animation: animate-svg-stroke-31 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.5999999999999996s both,
               animate-svg-fill-31 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.8s both;
}

@-webkit-keyframes animate-svg-stroke-32 {
  0% {
    stroke-dashoffset: 342px;
    stroke-dasharray: 342px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 342px;
  }
}

@keyframes animate-svg-stroke-32 {
  0% {
    stroke-dashoffset: 342px;
    stroke-dasharray: 342px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 342px;
  }
}

@-webkit-keyframes animate-svg-fill-32 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 230, 204);
  }
}

@keyframes animate-svg-fill-32 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 230, 204);
  }
}

.svg-1-32 {
  -webkit-animation: animate-svg-stroke-32 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.7199999999999998s both,
                       animate-svg-fill-32 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.9000000000000004s both;
          animation: animate-svg-stroke-32 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.7199999999999998s both,
               animate-svg-fill-32 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.9000000000000004s both;
}

@-webkit-keyframes animate-svg-stroke-33 {
  0% {
    stroke-dashoffset: 35.6300048828125px;
    stroke-dasharray: 35.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 35.6300048828125px;
  }
}

@keyframes animate-svg-stroke-33 {
  0% {
    stroke-dashoffset: 35.6300048828125px;
    stroke-dasharray: 35.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 35.6300048828125px;
  }
}

.svg-1-33 {
  -webkit-animation: animate-svg-stroke-33 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.84s both,
                       animate-svg-fill-33 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4s both;
          animation: animate-svg-stroke-33 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.84s both,
               animate-svg-fill-33 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4s both;
}

@-webkit-keyframes animate-svg-stroke-34 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@keyframes animate-svg-stroke-34 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@-webkit-keyframes animate-svg-fill-34 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

@keyframes animate-svg-fill-34 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

.svg-1-34 {
  -webkit-animation: animate-svg-stroke-34 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.96s both,
                       animate-svg-fill-34 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.1000000000000005s both;
          animation: animate-svg-stroke-34 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.96s both,
               animate-svg-fill-34 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.1000000000000005s both;
}

@-webkit-keyframes animate-svg-stroke-35 {
  0% {
    stroke-dashoffset: 282px;
    stroke-dasharray: 282px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 282px;
  }
}

@keyframes animate-svg-stroke-35 {
  0% {
    stroke-dashoffset: 282px;
    stroke-dasharray: 282px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 282px;
  }
}

@-webkit-keyframes animate-svg-fill-35 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

@keyframes animate-svg-fill-35 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

.svg-1-35 {
  -webkit-animation: animate-svg-stroke-35 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.08s both,
                       animate-svg-fill-35 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.2s both;
          animation: animate-svg-stroke-35 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.08s both,
               animate-svg-fill-35 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.2s both;
}

@-webkit-keyframes animate-svg-stroke-36 {
  0% {
    stroke-dashoffset: 182px;
    stroke-dasharray: 182px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 182px;
  }
}

@keyframes animate-svg-stroke-36 {
  0% {
    stroke-dashoffset: 182px;
    stroke-dasharray: 182px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 182px;
  }
}

.svg-1-36 {
  -webkit-animation: animate-svg-stroke-36 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.2s both,
                       animate-svg-fill-36 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.3s both;
          animation: animate-svg-stroke-36 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.2s both,
               animate-svg-fill-36 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.3s both;
}

@-webkit-keyframes animate-svg-stroke-37 {
  0% {
    stroke-dashoffset: 182px;
    stroke-dasharray: 182px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 182px;
  }
}

@keyframes animate-svg-stroke-37 {
  0% {
    stroke-dashoffset: 182px;
    stroke-dasharray: 182px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 182px;
  }
}

.svg-1-37 {
  -webkit-animation: animate-svg-stroke-37 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.32s both,
                       animate-svg-fill-37 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.4s both;
          animation: animate-svg-stroke-37 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.32s both,
               animate-svg-fill-37 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.4s both;
}

@-webkit-keyframes animate-svg-stroke-38 {
  0% {
    stroke-dashoffset: 182px;
    stroke-dasharray: 182px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 182px;
  }
}

@keyframes animate-svg-stroke-38 {
  0% {
    stroke-dashoffset: 182px;
    stroke-dasharray: 182px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 182px;
  }
}

.svg-1-38 {
  -webkit-animation: animate-svg-stroke-38 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.4399999999999995s both,
                       animate-svg-fill-38 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.5s both;
          animation: animate-svg-stroke-38 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.4399999999999995s both,
               animate-svg-fill-38 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.5s both;
}

@-webkit-keyframes animate-svg-stroke-39 {
  0% {
    stroke-dashoffset: 182px;
    stroke-dasharray: 182px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 182px;
  }
}

@keyframes animate-svg-stroke-39 {
  0% {
    stroke-dashoffset: 182px;
    stroke-dasharray: 182px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 182px;
  }
}

.svg-1-39 {
  -webkit-animation: animate-svg-stroke-39 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.56s both,
                       animate-svg-fill-39 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.6000000000000005s both;
          animation: animate-svg-stroke-39 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.56s both,
               animate-svg-fill-39 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.6000000000000005s both;
}

@-webkit-keyframes animate-svg-stroke-40 {
  0% {
    stroke-dashoffset: 182px;
    stroke-dasharray: 182px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 182px;
  }
}

@keyframes animate-svg-stroke-40 {
  0% {
    stroke-dashoffset: 182px;
    stroke-dasharray: 182px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 182px;
  }
}

.svg-1-40 {
  -webkit-animation: animate-svg-stroke-40 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.68s both,
                       animate-svg-fill-40 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.7s both;
          animation: animate-svg-stroke-40 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.68s both,
               animate-svg-fill-40 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.7s both;
}

@-webkit-keyframes animate-svg-stroke-41 {
  0% {
    stroke-dashoffset: 202px;
    stroke-dasharray: 202px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 202px;
  }
}

@keyframes animate-svg-stroke-41 {
  0% {
    stroke-dashoffset: 202px;
    stroke-dasharray: 202px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 202px;
  }
}

.svg-1-41 {
  -webkit-animation: animate-svg-stroke-41 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.8s both,
                       animate-svg-fill-41 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.8s both;
          animation: animate-svg-stroke-41 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.8s both,
               animate-svg-fill-41 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.8s both;
}

@-webkit-keyframes animate-svg-stroke-42 {
  0% {
    stroke-dashoffset: 222px;
    stroke-dasharray: 222px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 222px;
  }
}

@keyframes animate-svg-stroke-42 {
  0% {
    stroke-dashoffset: 222px;
    stroke-dasharray: 222px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 222px;
  }
}

.svg-1-42 {
  -webkit-animation: animate-svg-stroke-42 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.92s both,
                       animate-svg-fill-42 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.9s both;
          animation: animate-svg-stroke-42 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.92s both,
               animate-svg-fill-42 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.9s both;
}

@-webkit-keyframes animate-svg-stroke-43 {
  0% {
    stroke-dashoffset: 292px;
    stroke-dasharray: 292px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 292px;
  }
}

@keyframes animate-svg-stroke-43 {
  0% {
    stroke-dashoffset: 292px;
    stroke-dasharray: 292px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 292px;
  }
}

.svg-1-43 {
  -webkit-animation: animate-svg-stroke-43 1s cubic-bezier(0.47, 0, 0.745, 0.715) 5.04s both,
                       animate-svg-fill-43 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5s both;
          animation: animate-svg-stroke-43 1s cubic-bezier(0.47, 0, 0.745, 0.715) 5.04s both,
               animate-svg-fill-43 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5s both;
}

@-webkit-keyframes animate-svg-stroke-44 {
  0% {
    stroke-dashoffset: 182px;
    stroke-dasharray: 182px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 182px;
  }
}

@keyframes animate-svg-stroke-44 {
  0% {
    stroke-dashoffset: 182px;
    stroke-dasharray: 182px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 182px;
  }
}

.svg-1-44 {
  -webkit-animation: animate-svg-stroke-44 1s cubic-bezier(0.47, 0, 0.745, 0.715) 5.16s both,
                       animate-svg-fill-44 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.1s both;
          animation: animate-svg-stroke-44 1s cubic-bezier(0.47, 0, 0.745, 0.715) 5.16s both,
               animate-svg-fill-44 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.1s both;
}
`,q=`<!--?xml version="1.0" encoding="UTF-8"?-->
<!-- Do not edit this file with editors other than draw.io -->

<svg xmlns="http://www.w3.org/2000/svg" style="background: #FFFFFF; background-color: light-dark(#FFFFFF, #000000); color-scheme: light dark;" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="-0.5 -0.5 561 431" content="<mxfile host=&quot;app.diagrams.net&quot; agent=&quot;Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36&quot; version=&quot;26.0.5&quot; scale=&quot;1&quot; border=&quot;0&quot;>
  <diagram name=&quot;Страница — 1&quot; id=&quot;scg_mAQOxQY4BNk7g-rR&quot;>
    <mxGraphModel dx=&quot;752&quot; dy=&quot;374&quot; grid=&quot;1&quot; gridSize=&quot;10&quot; guides=&quot;1&quot; tooltips=&quot;1&quot; connect=&quot;1&quot; arrows=&quot;1&quot; fold=&quot;1&quot; page=&quot;0&quot; pageScale=&quot;1&quot; pageWidth=&quot;827&quot; pageHeight=&quot;1169&quot; background=&quot;light-dark(#FFFFFF,#000000)&quot; math=&quot;0&quot; shadow=&quot;0&quot;>
      <root>
        <mxCell id=&quot;0&quot; />
        <mxCell id=&quot;1&quot; parent=&quot;0&quot; />
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-4&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fillColor=#fad9d5;strokeColor=#ae4132;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;V49WjdoVIYyU1U5crHTs-2&quot; target=&quot;V49WjdoVIYyU1U5crHTs-3&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-18&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fillColor=#fad9d5;strokeColor=#ae4132;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;V49WjdoVIYyU1U5crHTs-2&quot; target=&quot;V49WjdoVIYyU1U5crHTs-17&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-24&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=1;entryY=0.5;entryDx=0;entryDy=0;fillColor=#fad9d5;strokeColor=#ae4132;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;V49WjdoVIYyU1U5crHTs-2&quot; target=&quot;V49WjdoVIYyU1U5crHTs-19&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot;>
            <Array as=&quot;points&quot;>
              <mxPoint x=&quot;710&quot; y=&quot;135&quot; />
              <mxPoint x=&quot;710&quot; y=&quot;298&quot; />
              <mxPoint x=&quot;660&quot; y=&quot;298&quot; />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-2&quot; value=&quot;Император&amp;lt;div&amp;gt;(с 1721)&amp;lt;/div&amp;gt;&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;360&quot; y=&quot;110&quot; width=&quot;120&quot; height=&quot;50&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-6&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fillColor=#d0cee2;strokeColor=#56517e;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;V49WjdoVIYyU1U5crHTs-3&quot; target=&quot;V49WjdoVIYyU1U5crHTs-5&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-10&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fillColor=#d0cee2;strokeColor=#56517e;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;V49WjdoVIYyU1U5crHTs-3&quot; target=&quot;V49WjdoVIYyU1U5crHTs-9&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-3&quot; value=&quot;8 губернаторов&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#d0cee2;strokeColor=#56517e;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;355&quot; y=&quot;200&quot; width=&quot;130&quot; height=&quot;45&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-8&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;V49WjdoVIYyU1U5crHTs-5&quot; target=&quot;V49WjdoVIYyU1U5crHTs-7&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-5&quot; value=&quot;Губернии&amp;lt;div&amp;gt;(с 1708 г)&amp;lt;/div&amp;gt;&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;160&quot; y=&quot;202.5&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-13&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;V49WjdoVIYyU1U5crHTs-7&quot; target=&quot;V49WjdoVIYyU1U5crHTs-12&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-7&quot; value=&quot;Провинции&amp;lt;br&amp;gt;(с 1719 г)&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;160&quot; y=&quot;292.5&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-11&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;V49WjdoVIYyU1U5crHTs-9&quot; target=&quot;V49WjdoVIYyU1U5crHTs-7&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-15&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;V49WjdoVIYyU1U5crHTs-9&quot; target=&quot;V49WjdoVIYyU1U5crHTs-14&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-9&quot; value=&quot;50 коммендантов&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;357.5&quot; y=&quot;290&quot; width=&quot;125&quot; height=&quot;45&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-12&quot; value=&quot;Уезды&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;160&quot; y=&quot;388.75&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-16&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;V49WjdoVIYyU1U5crHTs-14&quot; target=&quot;V49WjdoVIYyU1U5crHTs-12&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-14&quot; value=&quot;Земские комиссары&amp;lt;div&amp;gt;(назначаются камер-коллегией)&amp;lt;/div&amp;gt;&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;357.5&quot; y=&quot;380&quot; width=&quot;125&quot; height=&quot;57.5&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-20&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fillColor=#b1ddf0;strokeColor=#10739e;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;V49WjdoVIYyU1U5crHTs-17&quot; target=&quot;V49WjdoVIYyU1U5crHTs-19&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-17&quot; value=&quot;Сенат&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#b1ddf0;strokeColor=#10739e;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;530&quot; y=&quot;170&quot; width=&quot;120&quot; height=&quot;50&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-22&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fillColor=#fad9d5;strokeColor=#ae4132;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;V49WjdoVIYyU1U5crHTs-19&quot; target=&quot;V49WjdoVIYyU1U5crHTs-21&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-19&quot; value=&quot;Главный Магистрат&amp;lt;div&amp;gt;(с 1720)&amp;lt;/div&amp;gt;&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#fad9d5;strokeColor=#ae4132;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;530&quot; y=&quot;270&quot; width=&quot;120&quot; height=&quot;55&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-26&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;V49WjdoVIYyU1U5crHTs-21&quot; target=&quot;V49WjdoVIYyU1U5crHTs-25&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-21&quot; value=&quot;Городские Магистраты&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;530&quot; y=&quot;370&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-25&quot; value=&quot;Старосты и старейшены&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;530&quot; y=&quot;450&quot; width=&quot;120&quot; height=&quot;35&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-28&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;shape=link;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;V49WjdoVIYyU1U5crHTs-27&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot;>
            <mxPoint x=&quot;160&quot; y=&quot;480&quot; as=&quot;targetPoint&quot; />
          </mxGeometry>
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-29&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;shape=link;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;V49WjdoVIYyU1U5crHTs-27&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot;>
            <mxPoint x=&quot;490&quot; y=&quot;480&quot; as=&quot;targetPoint&quot; />
          </mxGeometry>
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-27&quot; value=&quot;Области&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#fff2cc;gradientColor=#ffd966;strokeColor=#d6b656;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;270&quot; y=&quot;460&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-35&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;shape=link;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;V49WjdoVIYyU1U5crHTs-30&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot;>
            <mxPoint x=&quot;680.0000000000002&quot; y=&quot;520&quot; as=&quot;targetPoint&quot; />
          </mxGeometry>
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-36&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;shape=link;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;V49WjdoVIYyU1U5crHTs-30&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot;>
            <mxPoint x=&quot;500&quot; y=&quot;520&quot; as=&quot;targetPoint&quot; />
          </mxGeometry>
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-30&quot; value=&quot;Города&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#ffff88;strokeColor=#36393d;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;530&quot; y=&quot;510&quot; width=&quot;120&quot; height=&quot;20&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-38&quot; value=&quot;&amp;lt;font color=&amp;quot;#3d3d00&amp;quot;&amp;gt;Назначает&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fillColor=none;gradientColor=none;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;510&quot; y=&quot;110&quot; width=&quot;60&quot; height=&quot;30&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-39&quot; value=&quot;&amp;lt;font color=&amp;quot;#3d3d00&amp;quot;&amp;gt;Назначает&amp;lt;/font&amp;gt;&amp;lt;div&amp;gt;&amp;lt;font color=&amp;quot;#3d3d00&amp;quot;&amp;gt;обер-президента&amp;lt;/font&amp;gt;&amp;lt;/div&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fillColor=none;gradientColor=none;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;610&quot; y=&quot;100&quot; width=&quot;110&quot; height=&quot;30&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-41&quot; value=&quot;&amp;lt;font color=&amp;quot;#3d3d00&amp;quot;&amp;gt;Назначает&amp;lt;/font&amp;gt;&amp;lt;div&amp;gt;&amp;lt;font color=&amp;quot;#3d3d00&amp;quot;&amp;gt;президента&amp;lt;/font&amp;gt;&amp;lt;/div&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fillColor=none;gradientColor=none;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;590&quot; y=&quot;230&quot; width=&quot;70&quot; height=&quot;30&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-42&quot; value=&quot;&amp;lt;font style=&amp;quot;color: light-dark(rgb(61, 61, 0), rgb(255, 63, 50));&amp;quot;&amp;gt;Управляет&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fillColor=none;gradientColor=none;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;290&quot; y=&quot;200&quot; width=&quot;60&quot; height=&quot;30&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-43&quot; value=&quot;&amp;lt;font style=&amp;quot;color: light-dark(rgb(61, 61, 0), rgb(255, 63, 50));&amp;quot;&amp;gt;Управляет&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fillColor=none;gradientColor=none;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;290&quot; y=&quot;290&quot; width=&quot;60&quot; height=&quot;30&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-44&quot; value=&quot;&amp;lt;font style=&amp;quot;color: light-dark(rgb(61, 61, 0), rgb(255, 63, 50));&amp;quot;&amp;gt;Управляет&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fillColor=none;gradientColor=none;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;290&quot; y=&quot;380&quot; width=&quot;60&quot; height=&quot;38.75&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-46&quot; value=&quot;&amp;lt;font color=&amp;quot;#3d3d00&amp;quot;&amp;gt;Назначает&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fillColor=none;gradientColor=none;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;425&quot; y=&quot;160&quot; width=&quot;60&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-47&quot; value=&quot;&amp;lt;font style=&amp;quot;color: light-dark(rgb(61, 61, 0), rgb(0, 0, 255));&amp;quot;&amp;gt;Контроль&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fillColor=none;gradientColor=none;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;422.5&quot; y=&quot;245&quot; width=&quot;60&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-48&quot; value=&quot;&amp;lt;font style=&amp;quot;color: light-dark(rgb(61, 61, 0), rgb(0, 0, 255));&amp;quot;&amp;gt;Контроль&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fillColor=none;gradientColor=none;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;420&quot; y=&quot;340&quot; width=&quot;60&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-49&quot; value=&quot;&amp;lt;font style=&amp;quot;color: light-dark(rgb(61, 61, 0), rgb(0, 0, 255));&amp;quot;&amp;gt;Контроль&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fillColor=none;gradientColor=none;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;590&quot; y=&quot;330&quot; width=&quot;60&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-50&quot; value=&quot;&amp;lt;font color=&amp;quot;#3d3d00&amp;quot;&amp;gt;Утверждает на должности&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fillColor=none;gradientColor=none;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;600&quot; y=&quot;411.25&quot; width=&quot;85&quot; height=&quot;38.75&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-51&quot; value=&quot;&amp;lt;font color=&amp;quot;#3d3d00&amp;quot;&amp;gt;Назначает&amp;lt;/font&amp;gt;&quot; style=&quot;text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fillColor=none;gradientColor=none;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;515&quot; y=&quot;220&quot; width=&quot;50&quot; height=&quot;30&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;V49WjdoVIYyU1U5crHTs-53&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fillColor=#fad9d5;strokeColor=light-dark(#AE4132,#2D45FF);entryX=1;entryY=0.5;entryDx=0;entryDy=0;&quot; edge=&quot;1&quot; parent=&quot;1&quot; target=&quot;V49WjdoVIYyU1U5crHTs-9&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot;>
            <mxPoint x=&quot;530&quot; y=&quot;195&quot; as=&quot;sourcePoint&quot; />
            <mxPoint x=&quot;640&quot; y=&quot;230&quot; as=&quot;targetPoint&quot; />
          </mxGeometry>
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
"><defs><linearGradient x1="0%" y1="0%" x2="0%" y2="100%" id="drawio-svg-MZsynysKWGX0pQVtGdfA-gradient-light-dark_fff2cc_281d00_-1-light-dark_ffd966_543300_-1-s-0"><stop offset="0%" stop-color="#fff2cc" stop-opacity="1" style="stop-color: light-dark(rgb(255, 242, 204), rgb(40, 29, 0)); stop-opacity: 1;"></stop><stop offset="100%" stop-color="#ffd966" stop-opacity="1" style="stop-color: light-dark(rgb(255, 217, 102), rgb(84, 51, 0)); stop-opacity: 1;"></stop></linearGradient></defs><rect fill="#FFFFFF" width="100%" height="100%" x="0" y="0" style="fill: light-dark(rgb(255, 255, 255), rgb(0, 0, 0));" class="svg-2-1"></rect><g><g data-cell-id="0"><g data-cell-id="1"><g data-cell-id="V49WjdoVIYyU1U5crHTs-4"><g><path d="M 260 60 L 260 93.63" fill="none" stroke="#ae4132" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(174, 65, 50), rgb(236, 143, 130));" class="svg-2-2"></path><path d="M 260 98.88 L 256.5 91.88 L 260 93.63 L 263.5 91.88 Z" fill="#ae4132" stroke="#ae4132" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(174, 65, 50), rgb(236, 143, 130)); stroke: light-dark(rgb(174, 65, 50), rgb(236, 143, 130));" class="svg-2-3"></path></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-18"><g><path d="M 320 35.03 L 430 35.03 L 430 63.63" fill="none" stroke="#ae4132" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(174, 65, 50), rgb(236, 143, 130));" class="svg-2-4"></path><path d="M 430 68.88 L 426.5 61.88 L 430 63.63 L 433.5 61.88 Z" fill="#ae4132" stroke="#ae4132" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(174, 65, 50), rgb(236, 143, 130)); stroke: light-dark(rgb(174, 65, 50), rgb(236, 143, 130));" class="svg-2-5"></path></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-24"><g><path d="M 320 35.03 L 550 35.03 L 550 198 L 500 198 L 496.36 197.82" fill="none" stroke="#ae4132" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(174, 65, 50), rgb(236, 143, 130));" class="svg-2-6"></path><path d="M 491.12 197.56 L 498.28 194.41 L 496.36 197.82 L 497.93 201.4 Z" fill="#ae4132" stroke="#ae4132" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(174, 65, 50), rgb(236, 143, 130)); stroke: light-dark(rgb(174, 65, 50), rgb(236, 143, 130));" class="svg-2-7"></path></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-2"><g><rect x="200" y="10" width="120" height="50" fill="#f8cecc" stroke="#b85450" pointer-events="all" style="fill: light-dark(rgb(248, 206, 204), rgb(81, 45, 43)); stroke: light-dark(rgb(184, 84, 80), rgb(215, 129, 126));" class="svg-2-8"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 35px; margin-left: 201px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Император<div>(с 1721)</div></div></div></div></foreignObject><image x="201" y="21" width="118" height="32" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-6"><g><path d="M 195 122.5 L 126.37 122.5" fill="none" stroke="#56517e" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(86, 81, 126), rgb(164, 160, 198));" class="svg-2-9"></path><path d="M 121.12 122.5 L 128.12 119 L 126.37 122.5 L 128.12 126 Z" fill="#56517e" stroke="#56517e" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(86, 81, 126), rgb(164, 160, 198)); stroke: light-dark(rgb(86, 81, 126), rgb(164, 160, 198));" class="svg-2-10"></path></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-10"><g><path d="M 260 145 L 260 183.63" fill="none" stroke="#56517e" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(86, 81, 126), rgb(164, 160, 198));" class="svg-2-11"></path><path d="M 260 188.88 L 256.5 181.88 L 260 183.63 L 263.5 181.88 Z" fill="#56517e" stroke="#56517e" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(86, 81, 126), rgb(164, 160, 198)); stroke: light-dark(rgb(86, 81, 126), rgb(164, 160, 198));" class="svg-2-12"></path></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-3"><g><rect x="195" y="100" width="130" height="45" fill="#d0cee2" stroke="#56517e" pointer-events="all" style="fill: light-dark(rgb(208, 206, 226), rgb(59, 57, 74)); stroke: light-dark(rgb(86, 81, 126), rgb(164, 160, 198));" class="svg-2-13"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 128px; height: 1px; padding-top: 123px; margin-left: 196px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">8 губернаторов</div></div></div></foreignObject><image x="196" y="116.5" width="128" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-8"><g><path d="M 60 142.5 L 60 186.13" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-14"></path><path d="M 60 191.38 L 56.5 184.38 L 60 186.13 L 63.5 184.38 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-15"></path></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-5"><g><rect x="0" y="102.5" width="120" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-16"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 123px; margin-left: 1px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Губернии<div>(с 1708 г)</div></div></div></div></foreignObject><image x="1" y="109" width="118" height="32" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-13"><g><path d="M 60 232.5 L 60 282.38" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-17"></path><path d="M 60 287.63 L 56.5 280.63 L 60 282.38 L 63.5 280.63 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-18"></path></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-7"><g><rect x="0" y="192.5" width="120" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-19"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 213px; margin-left: 1px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Провинции<br>(с 1719 г)</div></div></div></foreignObject><image x="1" y="199" width="118" height="32" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-11"><g><path d="M 197.5 212.5 L 126.37 212.5" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-20"></path><path d="M 121.12 212.5 L 128.12 209 L 126.37 212.5 L 128.12 216 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-21"></path></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-15"><g><path d="M 260 235 L 260 273.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-22"></path><path d="M 260 278.88 L 256.5 271.88 L 260 273.63 L 263.5 271.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-23"></path></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-9"><g><rect x="197.5" y="190" width="125" height="45" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-24"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 123px; height: 1px; padding-top: 213px; margin-left: 199px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">50 коммендантов</div></div></div></foreignObject><image x="199" y="206.5" width="123" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-12"><g><rect x="0" y="288.75" width="120" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-25"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 309px; margin-left: 1px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Уезды</div></div></div></foreignObject><image x="1" y="302.5" width="118" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-16"><g><path d="M 197.5 308.74 L 158.74 308.74 L 126.37 308.79" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-26"></path><path d="M 121.12 308.8 L 128.11 305.29 L 126.37 308.79 L 128.12 312.29 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-27"></path></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-14"><g><rect x="197.5" y="280" width="125" height="57.5" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-28"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 123px; height: 1px; padding-top: 309px; margin-left: 199px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Земские комиссары<div>(назначаются камер-коллегией)</div></div></div></div></foreignObject><image x="199" y="288" width="123" height="46" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-20"><g><path d="M 430 120 L 430 163.63" fill="none" stroke="#10739e" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(16, 115, 158), rgb(84, 169, 206));" class="svg-2-29"></path><path d="M 430 168.88 L 426.5 161.88 L 430 163.63 L 433.5 161.88 Z" fill="#10739e" stroke="#10739e" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(16, 115, 158), rgb(84, 169, 206)); stroke: light-dark(rgb(16, 115, 158), rgb(84, 169, 206));" class="svg-2-30"></path></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-17"><g><rect x="370" y="70" width="120" height="50" fill="#b1ddf0" stroke="#10739e" pointer-events="all" style="fill: light-dark(rgb(177, 221, 240), rgb(23, 61, 77)); stroke: light-dark(rgb(16, 115, 158), rgb(84, 169, 206));" class="svg-2-31"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 95px; margin-left: 371px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Сенат</div></div></div></foreignObject><image x="371" y="88.5" width="118" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-22"><g><path d="M 430 225 L 430 263.63" fill="none" stroke="#ae4132" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(174, 65, 50), rgb(236, 143, 130));" class="svg-2-32"></path><path d="M 430 268.88 L 426.5 261.88 L 430 263.63 L 433.5 261.88 Z" fill="#ae4132" stroke="#ae4132" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(174, 65, 50), rgb(236, 143, 130)); stroke: light-dark(rgb(174, 65, 50), rgb(236, 143, 130));" class="svg-2-33"></path></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-19"><g><rect x="370" y="170" width="120" height="55" fill="#fad9d5" stroke="#ae4132" pointer-events="all" style="fill: light-dark(rgb(250, 217, 213), rgb(68, 39, 36)); stroke: light-dark(rgb(174, 65, 50), rgb(236, 143, 130));" class="svg-2-34"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 198px; margin-left: 371px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Главный Магистрат<div>(с 1720)</div></div></div></div></foreignObject><image x="371" y="184" width="118" height="32" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-26"><g><path d="M 430 310 L 430 343.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-35"></path><path d="M 430 348.88 L 426.5 341.88 L 430 343.63 L 433.5 341.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-36"></path></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-21"><g><rect x="370" y="270" width="120" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-37"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 290px; margin-left: 371px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Городские Магистраты</div></div></div></foreignObject><image x="371" y="276" width="118" height="32" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-25"><g><rect x="370" y="350" width="120" height="35" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-38"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 368px; margin-left: 371px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Старосты и старейшены</div></div></div></foreignObject><image x="371" y="354" width="118" height="32" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-28"><g><path d="M 110 382 L 55.49 382 L 0 382 M 0 378 L 55.49 378 L 110 378 M 0 378" fill="none" stroke="#000000" stroke-miterlimit="1.42" pointer-events="all" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-39"></path></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-29"><g><path d="M 230 378 L 280 378 L 330 378 M 330 382 L 280 382 L 230 382 M 330 382" fill="none" stroke="#000000" stroke-miterlimit="1.42" pointer-events="all" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-40"></path></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-27"><g><rect x="110" y="360" width="120" height="40" fill="url(#drawio-svg-MZsynysKWGX0pQVtGdfA-gradient-light-dark_fff2cc_281d00_-1-light-dark_ffd966_543300_-1-s-0)" stroke="#d6b656" pointer-events="all" style="fill: url(&quot;#drawio-svg-MZsynysKWGX0pQVtGdfA-gradient-light-dark_fff2cc_281d00_-1-light-dark_ffd966_543300_-1-s-0&quot;); stroke: light-dark(rgb(214, 182, 86), rgb(109, 81, 0));" class="svg-2-41"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 380px; margin-left: 111px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Области</div></div></div></foreignObject><image x="111" y="373.5" width="118" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-35"><g><path d="M 490 418 L 510 418 L 520 418 M 520 422 L 510 422 L 490 422 M 520 422" fill="none" stroke="#000000" stroke-miterlimit="1.42" pointer-events="all" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-42"></path></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-36"><g><path d="M 370 422 L 350 422 L 340 422 M 340 418 L 350 418 L 370 418 M 340 418" fill="none" stroke="#000000" stroke-miterlimit="1.42" pointer-events="all" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-2-43"></path></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-30"><g><rect x="370" y="410" width="120" height="20" fill="#ffff88" stroke="#36393d" pointer-events="all" style="fill: light-dark(rgb(255, 255, 136), rgb(33, 33, 0)); stroke: light-dark(rgb(54, 57, 61), rgb(186, 189, 192));" class="svg-2-44"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 420px; margin-left: 371px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Города</div></div></div></foreignObject><image x="371" y="413.5" width="118" height="17" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdgAAABECAYAAAAiCiQVAAAAAXNSR0IArs4c6QAAD/9JREFUeF7tnQWwNEcVhU9wdw0OwQlOgrsFp3ApCBrc3YN7cHcqWIDg7g4hBHcIEggQgge3+ajuqptmdrdndnr3vbfnVlFF/jfT8s28d+bevn17F9lMwARMwARMwAQmJ7DL5C26QRMwARMwARMwAVlg/RKYgAmYgAmYQAMCFtgGUN2kCZiACZiACVhg/Q6YgAmYgAmYQAMCFtgGUN2kCZiACZiACVhg/Q6YgAmYgAmYQAMCFtgGUN2kCZiACZiACVhg/Q6YgAmYgAmYQAMCFtgGUN2kCZiACZiACVhg/Q6YgAmYgAmYQAMCFtgGUN3kYAI3kHTg4Lvm3/ADSbtN3KabMwETMIFqAhbYalS+sCEBC2xDuG7aBExgPQQssOvh7l6PTsAC6zfCBExgxxGwwO64R7otJ9QnsB+U9IclZnO4pHsucb9vNQETMIGlCFhgl8Lnmyci0Cewu0v6+kTtuxkTMAETWDkBC+zKkbvDHgIWWL8WJmACO46ABXbHPdJtOSEL7LZ8bB60CZjAPAIWWL8fW4HAKgX2xJKuJekqkvaQdCpJp5T0r27N9khJv5L0WUkfkfReSX+rBPRKSXuHax8m6Unhv68m6eapzzNLOoGk30n6haRPSXqrJNadx9gx0nzo43KSTpfmdWxJv0nzOkTSRyW9S9IRYzpJ9/xM0q4j72d8Hxpw7/kl8W7sKem86Tnx/P6e2P1Y0kGS3tnN+8OS/jOgbV9qAs0JWGCbI3YHFQRWIbDHSUlPD0niUzEsHSbp8Z2gvKTij/dziqSqp0l6UBK7/SVduaJDROLOkn5YcW2+BHZPkHS+ynuO6ub/PElPHJFEdrxuTn+WNPbvRq3AMpf9JF29ck5c9i1Jd0gfRwNu86Um0I7A2F+UdiNyy5tIoLXAnjR5iDUi18f/9ck7xXOaZQjqA8IPX9B5xY9Mf/DPNeCh4iHihR664B5+d58i6YED2o6Xfk3SXpLor9bwIr9Ze3HPdTUCe01JB0g60Yh+iELcsvvYeNOIe32LCUxOwAI7OVI3OIJAS4E9VgrBEmaM9iNJeJafSGHaYyZvExG+jaTTFNcjsvzxnmWEg/GOs71a0gm7TOgbp39A0N4i6RudEP8pedGXknQLSScvGv2qpIumsPWs/p7ReaD3K374xzSnD3Te3E8l/SXNg7nfStIFiuu/31XQulDySmseG6H1d4cLmctV59xINS1C4dkWCSyVtw6WdJJwD2Hf96f/MV7YHV/SWdIHwnUkESLPRkj/YolzzZx8jQk0I2CBbYbWDQ8g0FJgH92N4zHFWPAu8TYRoD5D8BDI6xY/RCwRyT4j5PrQ8APWBxEBvKp7d0JHn31rhKyX0uali0bvIunFM/q6Ylojjr+/rOOyxjvLI+UDAo8aHtEIF9fuF+Y6QuHZWDe+0ZznjBjykZFtkcC+Ln1w5OsRS57BvLXpK6V15Sjkb5N0wwHvny81gSYELLBNsLrRgQRaCeyppf+to7L+mo3w4c0qxsd64+e70PIFw7XfTsk2fbezVvvwnh+UyU5995JohTcYvWb2ALMXuM++JOki4Qff6zzLS0j6fcW8EG3WebPxAcCHQE2oGDG+e7j3qd1HyoPn9DlEYEleIiGLiEM2ogLwW2SEyRlLtn92HwKnkIRHbzOBtRGwwK4NvTsOBFoJLF4qa6PZ8IgIQyK6NUb4kQzVaJfpkm8+03Nzn8CSrHSeTnj/UdEZQvXk4jrWPBH1aBdPmbPx327ShX/fXNEHlyDihMcJs2bjwwAPfJHhScaQ8J0kvWzOTUMElsSmZ6XxMUY+Ovho+MqiQaV7fllcx1ouoWWbCayNgAV2bejdcSDQSmBLT+/tadtHLXzW9ti2wzaebM/sPKP79zTQJ7A13mtu6qw9iU33kPT8oi/6v2/4N7w+BAlPtNYIoV4/XAwn1i0X2U8knSlcRDIWoelZNkRgyzb42zRk283Pu5D66UMjt+88c7ZO2UxgbQQssGtD744DgRYCS4iXEGEMOe6TttwMgU9IGQ8x28ckse5XWp/AXrjSA8tt4VkSrs3Gum0MyfLvny7WaxclX/XN9W6FcJMdnfeXzmLDzwlBx78ZhOB/3UhghzwjriWkzr7ZbHwE8TFiM4G1EbDArg29Ow4EWgjsJXv2RJK1+7mB5PeV9KhwDyJzsgqBJRxNgs8Qz7IMwVLsgoIY2UhU4gCEmNBDYlUZWl40RT4QaDsaa7pfnnMjofHorSKsCOw8W8aDXTSH8ueMnYzobKzLPn1oI77eBKYkYIGdkqbbGkughcCSyPSGYkCLPK6+8bNlh4ziaHhziEe00oP9rqRzDwTy0m59+I7hHrb2xCSr06YtRbHZIeuv+T4qSZHlHI1sXao8zbK7pkzo/PNS/PvuW0Zg2bvMmNiuxPYi5g539sfGbTm5Xz56+ADJZoEd+PL58ukJWGCnZ+oWhxNoIbBkypbbXCgdSIbpEOsb2xm6TFzW/KKVAvvJzku8/JCOUkgzrq8SMj5baIOCFd8p2iTpiApQQwwx+m1xA/tk2SYzy8rsYxKS4linEljWk/HI2R9MmH+sWWDHkvN9kxGwwE6G0g0tQaCFwJZbNwjZjvmDzd5NCjdEI+OV0nzzBJYMVjJZh1gp0mUYlqzaLxQNjgl786FRVqViXfaFcwZLLWPWlLPdVtJrFkxuqAdLohWs2WKzrFlglyXo+5cmYIFdGqEbmIBAC4Ett+ggKMcdMVbq4ZbbPdh6U3qSpThyUACVj4YYNYXjvk+2nlCIIlvfFh0KVHA4wRBjX3B5iMG8whZs6WHtNyaMkVC0qGziEIElKkAFq1Jc2eP7ojRHPHo8b8ZeZhh7DXbIG+BrV0LAArsSzO5kAYEWAsseTYr0RxsTIqYiEBWLorEdhFNwopUC+3FJVFwaYuUWHEoDnjM0wP9nbTfaoupIff1TqYrtPdEIyZZr1vnnhLqZTzayswkz/3vB5IYI7Ku6bUp4xdHYm0vlqZqwvgV2yJvma1dCwAK7EszuZAGBFgJ7067q0huLfkmUYV/rELudpFcUN5DFW5ZZLAWWkCoJOkOsTHJCNGLFJtYny4IKJHMNLW7Pum55Yg/eNl53n1FqMpZYJNu55qSbWoGFJ4IfIwxDtx8RsieykM0h4iFvnq9tQsAC2wSrGx1IoIXAsp73xWIciwoj9A27rDGMQCPUpZUCO2s7zzw0rD/ikWajitT1wn/z+8oZsrEYPvWF6XuI9YW9+9aVc5t4rzFhi21Lj6vosFZg+8bDxwkfKTVGVjEh7Fj32AJbQ87XNCVggW2K141XEmghsISDCWVGr4hi9dTTHWKIHCUTs3GaTPzv/O99hSbOWFnjN7eBVxmzhjmOLp7Qw3Ucmh5DzxwUkE/sqZ0XRRjiHtF5IV9CwXxUwDPbrHKRZf+1AkvVpZeHmyktSULaohB0vuWy3X5hsrajWWBr3wZf14yABbYZWjc8gEALgaV7agaTZZvtfemIs9qhIc5HFp7RLI+xT2A5ALwML8/qGzHmiLlot07Hz8V/Kz1qPDfq9tbUO87tsK0nno3Lf886do4xvDYMAA+a/moKaNQKLKcNse0nG1ugSHqqNcLJnCRkga0l5utWQsACuxLM7mQBgVYCWxZHIFmGdTrOKa0xkm5IvslG5iqJRn339wksZ81eoaajdGRcPAoOASODuCxF2Hfoec2WmTyMc6QDBGJG8Ly6vaUHz15Z9szWWK3A7l3UDT4qhcFrPNhrpwMZyr9ltQcY1MzD15jAKAIW2FHYfNPEBFoJLGuVHMNG9Z9s70gF/xcVkifTljXAWBt43t7WWcfVcV5qmYVc4mPtkOPqYl+EgqOXGe9BuFlPzkZVJtYsy8zgsh9+3w8sCv3jke4642xcvEjajhWSyKrmsIAaqxXYvrKWNWFoPpYo38hhDGR1xy1N+/UcSF8zZl9jApMRsMBOhtINLUGglcAypHtJenYxNvZV3qdnL2i+jBNjyMzlD3829l7ukfZq9k21FNgjUq1evDHKGc7K0EX8CXGW67rzjltDTDmrNnqhhMPpp6wwlcdKpi5hWLYvRZt3AEIZjkbAEeNyD+2sR18rsKzvss4bazyzt5cPjL/OaJwscY7Ko3wi/EgqYy9vtoPS81ritfStJrAcAQvscvx89zQEWgos7zieZ8zOZdTsMSX8y+k0/HFHgKjRe40UAo0ZqVyPIJdCHWdfCizns7KtJmffvqc7QJ2EJLaT4DXideGlIQocVRetpkjFI3oyeWmXusnMF8+duePVEaZmLTUeNUd/eKJ4pNGyF4hwcYxd9P7hxeECtUYoPR5MgCjmZCSEk/FmK8Wcf6fwBAepU72K6+G5Z5pLXlun+AQFONjH+9xiYBzYzvoxHyJc5wPYa5+cr5uEgAV2EoxuZEkCLQWWoVGJ6IDuoHLW64Ya64DU3I3ro31tlALL2bNkLeNZksBUaxy7hiiXtYL77me7DKf9jLH9JbH2Gksmkrlb7u8d03bNPeXZvAgxXifbhWrt8HTaEB8tZ08fTbP+plFmsty2VduPrzOBUQQssKOw+aaJCbQWWIaLF0O9XTy/Rces5enh3eKxlVtAagQ272HFK8arrKnqxEcA578SXq61vboPCLbz7F55A57cY2ccRr5OgWX4eM94+ZR/XGTsGSZL+7BwIbWUY5g4tmGBXUTUP5+cgAV2cqRucASBVQhsHhYhTzxZQsGEFhFb6t+yrkjGLltlOFSdLT1DavyWHixHv3HcWjbWE9lKwrouIWE8NrxU1kzpj6pTeLtjjEILtM+6LclPlHJkKw3GNiOqP9E2FZiY16wtPesWWMbL3ySKa1ChinAwRT3YLkV4l7A+86CkY9+5viRjsceXIwZ3S/NEgOGLtz/kw2XMc/A9JnA0AhZYvxAmMA2BUmBnFaSYprc2rZQCe3D6CJmiNz4qDg0NlSHiKfpwGyawpQhYYLfU4/BgtjEBC+z8h2eB3cYvt4c+joAFdhw332UCJQELrAXWvxUm4BCx3wETaEDAAmuBbfBaucntTMAe7HZ+eh77ViJggbXAbqX30WPZAgQssFvgIXgIO4KABdYCuyNeZE9iOgIW2OlYuqXNJmCBtcBu9m+AZ/9/BCywfilMYBoCFlgL7DRvklvZMQQssDvmUXoiayZggbXArvkVdPdbjYAFdqs9EY9nuxKwwFpgt+u763E3ImCBbQTWzZqACZiACWw2AQvsZj9/z94ETMAETKARAQtsI7Bu1gRMwARMYLMJWGA3+/l79iZgAiZgAo0IWGAbgXWzJmACJmACm03AArvZz9+zNwETMAETaETAAtsIrJs1ARMwARPYbAIW2M1+/p69CZiACZhAIwIW2EZg3awJmIAJmMBmE7DAbvbz9+xNwARMwAQaEbDANgLrZk3ABEzABDabgAV2s5+/Z28CJmACJtCIgAW2EVg3awImYAImsNkELLCb/fw9exMwARMwgUYE/gugW85j36wvgQAAAABJRU5ErkJggg=="></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-38"><g><rect x="350" y="10" width="60" height="30" fill="none" stroke="none" pointer-events="all" class="svg-2-45"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 25px; margin-left: 351px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><font color="#3d3d00" style="color: light-dark(rgb(61, 61, 0), rgb(193, 193, 141));">Назначает</font></div></div></div></foreignObject><image x="351" y="18.5" width="58" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-39"><g><rect x="450" y="0" width="110" height="30" fill="none" stroke="none" pointer-events="all" class="svg-2-46"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 108px; height: 1px; padding-top: 15px; margin-left: 451px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><font color="#3d3d00" style="color: light-dark(rgb(61, 61, 0), rgb(193, 193, 141));">Назначает</font><div><font color="#3d3d00" style="color: light-dark(rgb(61, 61, 0), rgb(193, 193, 141));">обер-президента</font></div></div></div></div></foreignObject><image x="451" y="1" width="108" height="32" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-41"><g><rect x="430" y="130" width="70" height="30" fill="none" stroke="none" pointer-events="all" class="svg-2-47"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 68px; height: 1px; padding-top: 145px; margin-left: 431px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><font color="#3d3d00" style="color: light-dark(rgb(61, 61, 0), rgb(193, 193, 141));">Назначает</font><div><font color="#3d3d00" style="color: light-dark(rgb(61, 61, 0), rgb(193, 193, 141));">президента</font></div></div></div></div></foreignObject><image x="431" y="131" width="68" height="32" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-42"><g><rect x="130" y="100" width="60" height="30" fill="none" stroke="none" pointer-events="all" class="svg-2-48"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 115px; margin-left: 131px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><font style="color: light-dark(rgb(61, 61, 0), rgb(255, 63, 50));">Управляет</font></div></div></div></foreignObject><image x="131" y="108.5" width="58" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-43"><g><rect x="130" y="190" width="60" height="30" fill="none" stroke="none" pointer-events="all" class="svg-2-49"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 205px; margin-left: 131px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><font style="color: light-dark(rgb(61, 61, 0), rgb(255, 63, 50));">Управляет</font></div></div></div></foreignObject><image x="131" y="198.5" width="58" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-44"><g><rect x="130" y="280" width="60" height="38.75" fill="none" stroke="none" pointer-events="all" class="svg-2-50"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 299px; margin-left: 131px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><font style="color: light-dark(rgb(61, 61, 0), rgb(255, 63, 50));">Управляет</font></div></div></div></foreignObject><image x="131" y="292.5" width="58" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-46"><g><rect x="265" y="60" width="60" height="40" fill="none" stroke="none" pointer-events="all" class="svg-2-51"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 80px; margin-left: 266px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><font color="#3d3d00" style="color: light-dark(rgb(61, 61, 0), rgb(193, 193, 141));">Назначает</font></div></div></div></foreignObject><image x="266" y="73.5" width="58" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-47"><g><rect x="262.5" y="145" width="60" height="40" fill="none" stroke="none" pointer-events="all" class="svg-2-52"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 165px; margin-left: 264px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><font style="color: light-dark(rgb(61, 61, 0), rgb(0, 0, 255));">Контроль</font></div></div></div></foreignObject><image x="264" y="158.5" width="58" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-48"><g><rect x="260" y="240" width="60" height="40" fill="none" stroke="none" pointer-events="all" class="svg-2-53"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 260px; margin-left: 261px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><font style="color: light-dark(rgb(61, 61, 0), rgb(0, 0, 255));">Контроль</font></div></div></div></foreignObject><image x="261" y="253.5" width="58" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-49"><g><rect x="430" y="230" width="60" height="40" fill="none" stroke="none" pointer-events="all" class="svg-2-54"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 250px; margin-left: 431px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><font style="color: light-dark(rgb(61, 61, 0), rgb(0, 0, 255));">Контроль</font></div></div></div></foreignObject><image x="431" y="243.5" width="58" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-50"><g><rect x="440" y="311.25" width="85" height="38.75" fill="none" stroke="none" pointer-events="all" class="svg-2-55"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 83px; height: 1px; padding-top: 331px; margin-left: 441px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><font color="#3d3d00" style="color: light-dark(rgb(61, 61, 0), rgb(193, 193, 141));">Утверждает на должности</font></div></div></div></foreignObject><image x="441" y="317" width="83" height="32" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-51"><g><rect x="355" y="120" width="50" height="30" fill="none" stroke="none" pointer-events="all" class="svg-2-56"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 48px; height: 1px; padding-top: 135px; margin-left: 356px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; "><font color="#3d3d00" style="color: light-dark(rgb(61, 61, 0), rgb(193, 193, 141));">Назначает</font></div></div></div></foreignObject><image x="356" y="128.5" width="48" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="V49WjdoVIYyU1U5crHTs-53"><g><path d="M 370 95 L 346.23 95.49 L 346.23 212.51 L 328.87 212.5" fill="none" stroke="#ae4132" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(174, 65, 50), rgb(45, 69, 255));" class="svg-2-57"></path><path d="M 323.62 212.5 L 330.62 209 L 328.87 212.5 L 330.62 216 Z" fill="#ae4132" stroke="#ae4132" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(174, 65, 50), rgb(45, 69, 255)); stroke: light-dark(rgb(174, 65, 50), rgb(45, 69, 255));" class="svg-2-58"></path></g></g></g></g></g></svg>
`,S=`
@-webkit-keyframes animate-svg-stroke-1 {
  0% {
    stroke-dashoffset: 1986px;
    stroke-dasharray: 1986px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 1986px;
  }
}

@keyframes animate-svg-stroke-1 {
  0% {
    stroke-dashoffset: 1986px;
    stroke-dasharray: 1986px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 1986px;
  }
}

@-webkit-keyframes animate-svg-fill-1 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

@keyframes animate-svg-fill-1 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(0, 0, 0);
  }
}

.svg-2-1 {
  -webkit-animation: animate-svg-stroke-1 1s cubic-bezier(0.19, 1, 0.22, 1) 0s both,
                       animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
          animation: animate-svg-stroke-1 1s cubic-bezier(0.19, 1, 0.22, 1) 0s both,
               animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
}

@-webkit-keyframes animate-svg-stroke-2 {
  0% {
    stroke-dashoffset: 35.62999725341797px;
    stroke-dasharray: 35.62999725341797px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 35.62999725341797px;
  }
}

@keyframes animate-svg-stroke-2 {
  0% {
    stroke-dashoffset: 35.62999725341797px;
    stroke-dasharray: 35.62999725341797px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 35.62999725341797px;
  }
}

.svg-2-2 {
  -webkit-animation: animate-svg-stroke-2 1s cubic-bezier(0.19, 1, 0.22, 1) 0.12s both,
                       animate-svg-fill-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
          animation: animate-svg-stroke-2 1s cubic-bezier(0.19, 1, 0.22, 1) 0.12s both,
               animate-svg-fill-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
}

@-webkit-keyframes animate-svg-stroke-3 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@keyframes animate-svg-stroke-3 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@-webkit-keyframes animate-svg-fill-3 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(236, 143, 130);
  }
}

@keyframes animate-svg-fill-3 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(236, 143, 130);
  }
}

.svg-2-3 {
  -webkit-animation: animate-svg-stroke-3 1s cubic-bezier(0.19, 1, 0.22, 1) 0.24s both,
                       animate-svg-fill-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
          animation: animate-svg-stroke-3 1s cubic-bezier(0.19, 1, 0.22, 1) 0.24s both,
               animate-svg-fill-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
}

@-webkit-keyframes animate-svg-stroke-4 {
  0% {
    stroke-dashoffset: 140.60000610351562px;
    stroke-dasharray: 140.60000610351562px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 140.60000610351562px;
  }
}

@keyframes animate-svg-stroke-4 {
  0% {
    stroke-dashoffset: 140.60000610351562px;
    stroke-dasharray: 140.60000610351562px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 140.60000610351562px;
  }
}

.svg-2-4 {
  -webkit-animation: animate-svg-stroke-4 1s cubic-bezier(0.19, 1, 0.22, 1) 0.36s both,
                       animate-svg-fill-4 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
          animation: animate-svg-stroke-4 1s cubic-bezier(0.19, 1, 0.22, 1) 0.36s both,
               animate-svg-fill-4 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
}

@-webkit-keyframes animate-svg-stroke-5 {
  0% {
    stroke-dashoffset: 25.47870635986328px;
    stroke-dasharray: 25.47870635986328px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.47870635986328px;
  }
}

@keyframes animate-svg-stroke-5 {
  0% {
    stroke-dashoffset: 25.47870635986328px;
    stroke-dasharray: 25.47870635986328px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.47870635986328px;
  }
}

@-webkit-keyframes animate-svg-fill-5 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(236, 143, 130);
  }
}

@keyframes animate-svg-fill-5 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(236, 143, 130);
  }
}

.svg-2-5 {
  -webkit-animation: animate-svg-stroke-5 1s cubic-bezier(0.19, 1, 0.22, 1) 0.48s both,
                       animate-svg-fill-5 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s both;
          animation: animate-svg-stroke-5 1s cubic-bezier(0.19, 1, 0.22, 1) 0.48s both,
               animate-svg-fill-5 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s both;
}

@-webkit-keyframes animate-svg-stroke-6 {
  0% {
    stroke-dashoffset: 448.6144714355469px;
    stroke-dasharray: 448.6144714355469px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 448.6144714355469px;
  }
}

@keyframes animate-svg-stroke-6 {
  0% {
    stroke-dashoffset: 448.6144714355469px;
    stroke-dasharray: 448.6144714355469px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 448.6144714355469px;
  }
}

.svg-2-6 {
  -webkit-animation: animate-svg-stroke-6 1s cubic-bezier(0.19, 1, 0.22, 1) 0.6s both,
                       animate-svg-fill-6 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both;
          animation: animate-svg-stroke-6 1s cubic-bezier(0.19, 1, 0.22, 1) 0.6s both,
               animate-svg-fill-6 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both;
}

@-webkit-keyframes animate-svg-stroke-7 {
  0% {
    stroke-dashoffset: 25.46282196044922px;
    stroke-dasharray: 25.46282196044922px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.46282196044922px;
  }
}

@keyframes animate-svg-stroke-7 {
  0% {
    stroke-dashoffset: 25.46282196044922px;
    stroke-dasharray: 25.46282196044922px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.46282196044922px;
  }
}

@-webkit-keyframes animate-svg-fill-7 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(236, 143, 130);
  }
}

@keyframes animate-svg-fill-7 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(236, 143, 130);
  }
}

.svg-2-7 {
  -webkit-animation: animate-svg-stroke-7 1s cubic-bezier(0.19, 1, 0.22, 1) 0.72s both,
                       animate-svg-fill-7 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s both;
          animation: animate-svg-stroke-7 1s cubic-bezier(0.19, 1, 0.22, 1) 0.72s both,
               animate-svg-fill-7 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s both;
}

@-webkit-keyframes animate-svg-stroke-8 {
  0% {
    stroke-dashoffset: 342px;
    stroke-dasharray: 342px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 342px;
  }
}

@keyframes animate-svg-stroke-8 {
  0% {
    stroke-dashoffset: 342px;
    stroke-dasharray: 342px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 342px;
  }
}

@-webkit-keyframes animate-svg-fill-8 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(81, 45, 43);
  }
}

@keyframes animate-svg-fill-8 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(81, 45, 43);
  }
}

.svg-2-8 {
  -webkit-animation: animate-svg-stroke-8 1s cubic-bezier(0.19, 1, 0.22, 1) 0.84s both,
                       animate-svg-fill-8 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both;
          animation: animate-svg-stroke-8 1s cubic-bezier(0.19, 1, 0.22, 1) 0.84s both,
               animate-svg-fill-8 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both;
}

@-webkit-keyframes animate-svg-stroke-9 {
  0% {
    stroke-dashoffset: 70.62999725341797px;
    stroke-dasharray: 70.62999725341797px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 70.62999725341797px;
  }
}

@keyframes animate-svg-stroke-9 {
  0% {
    stroke-dashoffset: 70.62999725341797px;
    stroke-dasharray: 70.62999725341797px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 70.62999725341797px;
  }
}

.svg-2-9 {
  -webkit-animation: animate-svg-stroke-9 1s cubic-bezier(0.19, 1, 0.22, 1) 0.96s both,
                       animate-svg-fill-9 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s both;
          animation: animate-svg-stroke-9 1s cubic-bezier(0.19, 1, 0.22, 1) 0.96s both,
               animate-svg-fill-9 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s both;
}

@-webkit-keyframes animate-svg-stroke-10 {
  0% {
    stroke-dashoffset: 25.47869300842285px;
    stroke-dasharray: 25.47869300842285px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.47869300842285px;
  }
}

@keyframes animate-svg-stroke-10 {
  0% {
    stroke-dashoffset: 25.47869300842285px;
    stroke-dasharray: 25.47869300842285px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.47869300842285px;
  }
}

@-webkit-keyframes animate-svg-fill-10 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(164, 160, 198);
  }
}

@keyframes animate-svg-fill-10 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(164, 160, 198);
  }
}

.svg-2-10 {
  -webkit-animation: animate-svg-stroke-10 1s cubic-bezier(0.19, 1, 0.22, 1) 1.08s both,
                       animate-svg-fill-10 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s both;
          animation: animate-svg-stroke-10 1s cubic-bezier(0.19, 1, 0.22, 1) 1.08s both,
               animate-svg-fill-10 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s both;
}

@-webkit-keyframes animate-svg-stroke-11 {
  0% {
    stroke-dashoffset: 40.6300048828125px;
    stroke-dasharray: 40.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 40.6300048828125px;
  }
}

@keyframes animate-svg-stroke-11 {
  0% {
    stroke-dashoffset: 40.6300048828125px;
    stroke-dasharray: 40.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 40.6300048828125px;
  }
}

.svg-2-11 {
  -webkit-animation: animate-svg-stroke-11 1s cubic-bezier(0.19, 1, 0.22, 1) 1.2s both,
                       animate-svg-fill-11 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s both;
          animation: animate-svg-stroke-11 1s cubic-bezier(0.19, 1, 0.22, 1) 1.2s both,
               animate-svg-fill-11 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s both;
}

@-webkit-keyframes animate-svg-stroke-12 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@keyframes animate-svg-stroke-12 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@-webkit-keyframes animate-svg-fill-12 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(164, 160, 198);
  }
}

@keyframes animate-svg-fill-12 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(164, 160, 198);
  }
}

.svg-2-12 {
  -webkit-animation: animate-svg-stroke-12 1s cubic-bezier(0.19, 1, 0.22, 1) 1.3199999999999998s both,
                       animate-svg-fill-12 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.9000000000000001s both;
          animation: animate-svg-stroke-12 1s cubic-bezier(0.19, 1, 0.22, 1) 1.3199999999999998s both,
               animate-svg-fill-12 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.9000000000000001s both;
}

@-webkit-keyframes animate-svg-stroke-13 {
  0% {
    stroke-dashoffset: 352px;
    stroke-dasharray: 352px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 352px;
  }
}

@keyframes animate-svg-stroke-13 {
  0% {
    stroke-dashoffset: 352px;
    stroke-dasharray: 352px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 352px;
  }
}

@-webkit-keyframes animate-svg-fill-13 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(59, 57, 74);
  }
}

@keyframes animate-svg-fill-13 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(59, 57, 74);
  }
}

.svg-2-13 {
  -webkit-animation: animate-svg-stroke-13 1s cubic-bezier(0.19, 1, 0.22, 1) 1.44s both,
                       animate-svg-fill-13 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2s both;
          animation: animate-svg-stroke-13 1s cubic-bezier(0.19, 1, 0.22, 1) 1.44s both,
               animate-svg-fill-13 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2s both;
}

@-webkit-keyframes animate-svg-stroke-14 {
  0% {
    stroke-dashoffset: 45.6300048828125px;
    stroke-dasharray: 45.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 45.6300048828125px;
  }
}

@keyframes animate-svg-stroke-14 {
  0% {
    stroke-dashoffset: 45.6300048828125px;
    stroke-dasharray: 45.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 45.6300048828125px;
  }
}

.svg-2-14 {
  -webkit-animation: animate-svg-stroke-14 1s cubic-bezier(0.19, 1, 0.22, 1) 1.56s both,
                       animate-svg-fill-14 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.1s both;
          animation: animate-svg-stroke-14 1s cubic-bezier(0.19, 1, 0.22, 1) 1.56s both,
               animate-svg-fill-14 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.1s both;
}

@-webkit-keyframes animate-svg-stroke-15 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@keyframes animate-svg-stroke-15 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@-webkit-keyframes animate-svg-fill-15 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

@keyframes animate-svg-fill-15 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

.svg-2-15 {
  -webkit-animation: animate-svg-stroke-15 1s cubic-bezier(0.19, 1, 0.22, 1) 1.68s both,
                       animate-svg-fill-15 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.2s both;
          animation: animate-svg-stroke-15 1s cubic-bezier(0.19, 1, 0.22, 1) 1.68s both,
               animate-svg-fill-15 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.2s both;
}

@-webkit-keyframes animate-svg-stroke-16 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@keyframes animate-svg-stroke-16 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@-webkit-keyframes animate-svg-fill-16 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(18, 18, 18);
  }
}

@keyframes animate-svg-fill-16 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(18, 18, 18);
  }
}

.svg-2-16 {
  -webkit-animation: animate-svg-stroke-16 1s cubic-bezier(0.19, 1, 0.22, 1) 1.7999999999999998s both,
                       animate-svg-fill-16 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.3s both;
          animation: animate-svg-stroke-16 1s cubic-bezier(0.19, 1, 0.22, 1) 1.7999999999999998s both,
               animate-svg-fill-16 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.3s both;
}

@-webkit-keyframes animate-svg-stroke-17 {
  0% {
    stroke-dashoffset: 51.8800048828125px;
    stroke-dasharray: 51.8800048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 51.8800048828125px;
  }
}

@keyframes animate-svg-stroke-17 {
  0% {
    stroke-dashoffset: 51.8800048828125px;
    stroke-dasharray: 51.8800048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 51.8800048828125px;
  }
}

.svg-2-17 {
  -webkit-animation: animate-svg-stroke-17 1s cubic-bezier(0.19, 1, 0.22, 1) 1.92s both,
                       animate-svg-fill-17 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.4000000000000004s both;
          animation: animate-svg-stroke-17 1s cubic-bezier(0.19, 1, 0.22, 1) 1.92s both,
               animate-svg-fill-17 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.4000000000000004s both;
}

@-webkit-keyframes animate-svg-stroke-18 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@keyframes animate-svg-stroke-18 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@-webkit-keyframes animate-svg-fill-18 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

@keyframes animate-svg-fill-18 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

.svg-2-18 {
  -webkit-animation: animate-svg-stroke-18 1s cubic-bezier(0.19, 1, 0.22, 1) 2.04s both,
                       animate-svg-fill-18 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.5s both;
          animation: animate-svg-stroke-18 1s cubic-bezier(0.19, 1, 0.22, 1) 2.04s both,
               animate-svg-fill-18 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.5s both;
}

@-webkit-keyframes animate-svg-stroke-19 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@keyframes animate-svg-stroke-19 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@-webkit-keyframes animate-svg-fill-19 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(18, 18, 18);
  }
}

@keyframes animate-svg-fill-19 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(18, 18, 18);
  }
}

.svg-2-19 {
  -webkit-animation: animate-svg-stroke-19 1s cubic-bezier(0.19, 1, 0.22, 1) 2.16s both,
                       animate-svg-fill-19 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.6s both;
          animation: animate-svg-stroke-19 1s cubic-bezier(0.19, 1, 0.22, 1) 2.16s both,
               animate-svg-fill-19 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.6s both;
}

@-webkit-keyframes animate-svg-stroke-20 {
  0% {
    stroke-dashoffset: 73.12999725341797px;
    stroke-dasharray: 73.12999725341797px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 73.12999725341797px;
  }
}

@keyframes animate-svg-stroke-20 {
  0% {
    stroke-dashoffset: 73.12999725341797px;
    stroke-dasharray: 73.12999725341797px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 73.12999725341797px;
  }
}

.svg-2-20 {
  -webkit-animation: animate-svg-stroke-20 1s cubic-bezier(0.19, 1, 0.22, 1) 2.28s both,
                       animate-svg-fill-20 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.7s both;
          animation: animate-svg-stroke-20 1s cubic-bezier(0.19, 1, 0.22, 1) 2.28s both,
               animate-svg-fill-20 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.7s both;
}

@-webkit-keyframes animate-svg-stroke-21 {
  0% {
    stroke-dashoffset: 25.47869300842285px;
    stroke-dasharray: 25.47869300842285px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.47869300842285px;
  }
}

@keyframes animate-svg-stroke-21 {
  0% {
    stroke-dashoffset: 25.47869300842285px;
    stroke-dasharray: 25.47869300842285px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.47869300842285px;
  }
}

@-webkit-keyframes animate-svg-fill-21 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

@keyframes animate-svg-fill-21 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

.svg-2-21 {
  -webkit-animation: animate-svg-stroke-21 1s cubic-bezier(0.19, 1, 0.22, 1) 2.4s both,
                       animate-svg-fill-21 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.8s both;
          animation: animate-svg-stroke-21 1s cubic-bezier(0.19, 1, 0.22, 1) 2.4s both,
               animate-svg-fill-21 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.8s both;
}

@-webkit-keyframes animate-svg-stroke-22 {
  0% {
    stroke-dashoffset: 40.6300048828125px;
    stroke-dasharray: 40.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 40.6300048828125px;
  }
}

@keyframes animate-svg-stroke-22 {
  0% {
    stroke-dashoffset: 40.6300048828125px;
    stroke-dasharray: 40.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 40.6300048828125px;
  }
}

.svg-2-22 {
  -webkit-animation: animate-svg-stroke-22 1s cubic-bezier(0.19, 1, 0.22, 1) 2.52s both,
                       animate-svg-fill-22 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.9000000000000004s both;
          animation: animate-svg-stroke-22 1s cubic-bezier(0.19, 1, 0.22, 1) 2.52s both,
               animate-svg-fill-22 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.9000000000000004s both;
}

@-webkit-keyframes animate-svg-stroke-23 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@keyframes animate-svg-stroke-23 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@-webkit-keyframes animate-svg-fill-23 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

@keyframes animate-svg-fill-23 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

.svg-2-23 {
  -webkit-animation: animate-svg-stroke-23 1s cubic-bezier(0.19, 1, 0.22, 1) 2.6399999999999997s both,
                       animate-svg-fill-23 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3s both;
          animation: animate-svg-stroke-23 1s cubic-bezier(0.19, 1, 0.22, 1) 2.6399999999999997s both,
               animate-svg-fill-23 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3s both;
}

@-webkit-keyframes animate-svg-stroke-24 {
  0% {
    stroke-dashoffset: 342px;
    stroke-dasharray: 342px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 342px;
  }
}

@keyframes animate-svg-stroke-24 {
  0% {
    stroke-dashoffset: 342px;
    stroke-dasharray: 342px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 342px;
  }
}

@-webkit-keyframes animate-svg-fill-24 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(18, 18, 18);
  }
}

@keyframes animate-svg-fill-24 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(18, 18, 18);
  }
}

.svg-2-24 {
  -webkit-animation: animate-svg-stroke-24 1s cubic-bezier(0.19, 1, 0.22, 1) 2.76s both,
                       animate-svg-fill-24 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.1000000000000005s both;
          animation: animate-svg-stroke-24 1s cubic-bezier(0.19, 1, 0.22, 1) 2.76s both,
               animate-svg-fill-24 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.1000000000000005s both;
}

@-webkit-keyframes animate-svg-stroke-25 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@keyframes animate-svg-stroke-25 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@-webkit-keyframes animate-svg-fill-25 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(18, 18, 18);
  }
}

@keyframes animate-svg-fill-25 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(18, 18, 18);
  }
}

.svg-2-25 {
  -webkit-animation: animate-svg-stroke-25 1s cubic-bezier(0.19, 1, 0.22, 1) 2.88s both,
                       animate-svg-fill-25 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.2s both;
          animation: animate-svg-stroke-25 1s cubic-bezier(0.19, 1, 0.22, 1) 2.88s both,
               animate-svg-fill-25 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.2s both;
}

@-webkit-keyframes animate-svg-stroke-26 {
  0% {
    stroke-dashoffset: 73.13003540039062px;
    stroke-dasharray: 73.13003540039062px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 73.13003540039062px;
  }
}

@keyframes animate-svg-stroke-26 {
  0% {
    stroke-dashoffset: 73.13003540039062px;
    stroke-dasharray: 73.13003540039062px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 73.13003540039062px;
  }
}

.svg-2-26 {
  -webkit-animation: animate-svg-stroke-26 1s cubic-bezier(0.19, 1, 0.22, 1) 3s both,
                       animate-svg-fill-26 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.3s both;
          animation: animate-svg-stroke-26 1s cubic-bezier(0.19, 1, 0.22, 1) 3s both,
               animate-svg-fill-26 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.3s both;
}

@-webkit-keyframes animate-svg-stroke-27 {
  0% {
    stroke-dashoffset: 25.46531105041504px;
    stroke-dasharray: 25.46531105041504px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.46531105041504px;
  }
}

@keyframes animate-svg-stroke-27 {
  0% {
    stroke-dashoffset: 25.46531105041504px;
    stroke-dasharray: 25.46531105041504px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.46531105041504px;
  }
}

@-webkit-keyframes animate-svg-fill-27 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

@keyframes animate-svg-fill-27 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

.svg-2-27 {
  -webkit-animation: animate-svg-stroke-27 1s cubic-bezier(0.19, 1, 0.22, 1) 3.12s both,
                       animate-svg-fill-27 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.4000000000000004s both;
          animation: animate-svg-stroke-27 1s cubic-bezier(0.19, 1, 0.22, 1) 3.12s both,
               animate-svg-fill-27 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.4000000000000004s both;
}

@-webkit-keyframes animate-svg-stroke-28 {
  0% {
    stroke-dashoffset: 367px;
    stroke-dasharray: 367px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 367px;
  }
}

@keyframes animate-svg-stroke-28 {
  0% {
    stroke-dashoffset: 367px;
    stroke-dasharray: 367px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 367px;
  }
}

@-webkit-keyframes animate-svg-fill-28 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(18, 18, 18);
  }
}

@keyframes animate-svg-fill-28 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(18, 18, 18);
  }
}

.svg-2-28 {
  -webkit-animation: animate-svg-stroke-28 1s cubic-bezier(0.19, 1, 0.22, 1) 3.2399999999999998s both,
                       animate-svg-fill-28 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.5s both;
          animation: animate-svg-stroke-28 1s cubic-bezier(0.19, 1, 0.22, 1) 3.2399999999999998s both,
               animate-svg-fill-28 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.5s both;
}

@-webkit-keyframes animate-svg-stroke-29 {
  0% {
    stroke-dashoffset: 45.6300048828125px;
    stroke-dasharray: 45.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 45.6300048828125px;
  }
}

@keyframes animate-svg-stroke-29 {
  0% {
    stroke-dashoffset: 45.6300048828125px;
    stroke-dasharray: 45.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 45.6300048828125px;
  }
}

.svg-2-29 {
  -webkit-animation: animate-svg-stroke-29 1s cubic-bezier(0.19, 1, 0.22, 1) 3.36s both,
                       animate-svg-fill-29 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.6000000000000005s both;
          animation: animate-svg-stroke-29 1s cubic-bezier(0.19, 1, 0.22, 1) 3.36s both,
               animate-svg-fill-29 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.6000000000000005s both;
}

@-webkit-keyframes animate-svg-stroke-30 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@keyframes animate-svg-stroke-30 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@-webkit-keyframes animate-svg-fill-30 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(84, 169, 206);
  }
}

@keyframes animate-svg-fill-30 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(84, 169, 206);
  }
}

.svg-2-30 {
  -webkit-animation: animate-svg-stroke-30 1s cubic-bezier(0.19, 1, 0.22, 1) 3.48s both,
                       animate-svg-fill-30 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.7s both;
          animation: animate-svg-stroke-30 1s cubic-bezier(0.19, 1, 0.22, 1) 3.48s both,
               animate-svg-fill-30 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.7s both;
}

@-webkit-keyframes animate-svg-stroke-31 {
  0% {
    stroke-dashoffset: 342px;
    stroke-dasharray: 342px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 342px;
  }
}

@keyframes animate-svg-stroke-31 {
  0% {
    stroke-dashoffset: 342px;
    stroke-dasharray: 342px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 342px;
  }
}

@-webkit-keyframes animate-svg-fill-31 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(23, 61, 77);
  }
}

@keyframes animate-svg-fill-31 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(23, 61, 77);
  }
}

.svg-2-31 {
  -webkit-animation: animate-svg-stroke-31 1s cubic-bezier(0.19, 1, 0.22, 1) 3.5999999999999996s both,
                       animate-svg-fill-31 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.8s both;
          animation: animate-svg-stroke-31 1s cubic-bezier(0.19, 1, 0.22, 1) 3.5999999999999996s both,
               animate-svg-fill-31 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.8s both;
}

@-webkit-keyframes animate-svg-stroke-32 {
  0% {
    stroke-dashoffset: 40.6300048828125px;
    stroke-dasharray: 40.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 40.6300048828125px;
  }
}

@keyframes animate-svg-stroke-32 {
  0% {
    stroke-dashoffset: 40.6300048828125px;
    stroke-dasharray: 40.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 40.6300048828125px;
  }
}

.svg-2-32 {
  -webkit-animation: animate-svg-stroke-32 1s cubic-bezier(0.19, 1, 0.22, 1) 3.7199999999999998s both,
                       animate-svg-fill-32 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.9000000000000004s both;
          animation: animate-svg-stroke-32 1s cubic-bezier(0.19, 1, 0.22, 1) 3.7199999999999998s both,
               animate-svg-fill-32 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.9000000000000004s both;
}

@-webkit-keyframes animate-svg-stroke-33 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@keyframes animate-svg-stroke-33 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@-webkit-keyframes animate-svg-fill-33 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(236, 143, 130);
  }
}

@keyframes animate-svg-fill-33 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(236, 143, 130);
  }
}

.svg-2-33 {
  -webkit-animation: animate-svg-stroke-33 1s cubic-bezier(0.19, 1, 0.22, 1) 3.84s both,
                       animate-svg-fill-33 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4s both;
          animation: animate-svg-stroke-33 1s cubic-bezier(0.19, 1, 0.22, 1) 3.84s both,
               animate-svg-fill-33 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4s both;
}

@-webkit-keyframes animate-svg-stroke-34 {
  0% {
    stroke-dashoffset: 352px;
    stroke-dasharray: 352px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 352px;
  }
}

@keyframes animate-svg-stroke-34 {
  0% {
    stroke-dashoffset: 352px;
    stroke-dasharray: 352px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 352px;
  }
}

@-webkit-keyframes animate-svg-fill-34 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(68, 39, 36);
  }
}

@keyframes animate-svg-fill-34 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(68, 39, 36);
  }
}

.svg-2-34 {
  -webkit-animation: animate-svg-stroke-34 1s cubic-bezier(0.19, 1, 0.22, 1) 3.96s both,
                       animate-svg-fill-34 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.1000000000000005s both;
          animation: animate-svg-stroke-34 1s cubic-bezier(0.19, 1, 0.22, 1) 3.96s both,
               animate-svg-fill-34 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.1000000000000005s both;
}

@-webkit-keyframes animate-svg-stroke-35 {
  0% {
    stroke-dashoffset: 35.6300048828125px;
    stroke-dasharray: 35.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 35.6300048828125px;
  }
}

@keyframes animate-svg-stroke-35 {
  0% {
    stroke-dashoffset: 35.6300048828125px;
    stroke-dasharray: 35.6300048828125px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 35.6300048828125px;
  }
}

.svg-2-35 {
  -webkit-animation: animate-svg-stroke-35 1s cubic-bezier(0.19, 1, 0.22, 1) 4.08s both,
                       animate-svg-fill-35 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.2s both;
          animation: animate-svg-stroke-35 1s cubic-bezier(0.19, 1, 0.22, 1) 4.08s both,
               animate-svg-fill-35 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.2s both;
}

@-webkit-keyframes animate-svg-stroke-36 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@keyframes animate-svg-stroke-36 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@-webkit-keyframes animate-svg-fill-36 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

@keyframes animate-svg-fill-36 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(255, 255, 255);
  }
}

.svg-2-36 {
  -webkit-animation: animate-svg-stroke-36 1s cubic-bezier(0.19, 1, 0.22, 1) 4.2s both,
                       animate-svg-fill-36 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.3s both;
          animation: animate-svg-stroke-36 1s cubic-bezier(0.19, 1, 0.22, 1) 4.2s both,
               animate-svg-fill-36 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.3s both;
}

@-webkit-keyframes animate-svg-stroke-37 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@keyframes animate-svg-stroke-37 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@-webkit-keyframes animate-svg-fill-37 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(18, 18, 18);
  }
}

@keyframes animate-svg-fill-37 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(18, 18, 18);
  }
}

.svg-2-37 {
  -webkit-animation: animate-svg-stroke-37 1s cubic-bezier(0.19, 1, 0.22, 1) 4.32s both,
                       animate-svg-fill-37 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.4s both;
          animation: animate-svg-stroke-37 1s cubic-bezier(0.19, 1, 0.22, 1) 4.32s both,
               animate-svg-fill-37 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.4s both;
}

@-webkit-keyframes animate-svg-stroke-38 {
  0% {
    stroke-dashoffset: 312px;
    stroke-dasharray: 312px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 312px;
  }
}

@keyframes animate-svg-stroke-38 {
  0% {
    stroke-dashoffset: 312px;
    stroke-dasharray: 312px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 312px;
  }
}

@-webkit-keyframes animate-svg-fill-38 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(18, 18, 18);
  }
}

@keyframes animate-svg-fill-38 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(18, 18, 18);
  }
}

.svg-2-38 {
  -webkit-animation: animate-svg-stroke-38 1s cubic-bezier(0.19, 1, 0.22, 1) 4.4399999999999995s both,
                       animate-svg-fill-38 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.5s both;
          animation: animate-svg-stroke-38 1s cubic-bezier(0.19, 1, 0.22, 1) 4.4399999999999995s both,
               animate-svg-fill-38 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.5s both;
}

@-webkit-keyframes animate-svg-stroke-39 {
  0% {
    stroke-dashoffset: 222px;
    stroke-dasharray: 222px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 222px;
  }
}

@keyframes animate-svg-stroke-39 {
  0% {
    stroke-dashoffset: 222px;
    stroke-dasharray: 222px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 222px;
  }
}

.svg-2-39 {
  -webkit-animation: animate-svg-stroke-39 1s cubic-bezier(0.19, 1, 0.22, 1) 4.56s both,
                       animate-svg-fill-39 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.6000000000000005s both;
          animation: animate-svg-stroke-39 1s cubic-bezier(0.19, 1, 0.22, 1) 4.56s both,
               animate-svg-fill-39 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.6000000000000005s both;
}

@-webkit-keyframes animate-svg-stroke-40 {
  0% {
    stroke-dashoffset: 202px;
    stroke-dasharray: 202px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 202px;
  }
}

@keyframes animate-svg-stroke-40 {
  0% {
    stroke-dashoffset: 202px;
    stroke-dasharray: 202px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 202px;
  }
}

.svg-2-40 {
  -webkit-animation: animate-svg-stroke-40 1s cubic-bezier(0.19, 1, 0.22, 1) 4.68s both,
                       animate-svg-fill-40 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.7s both;
          animation: animate-svg-stroke-40 1s cubic-bezier(0.19, 1, 0.22, 1) 4.68s both,
               animate-svg-fill-40 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.7s both;
}

@-webkit-keyframes animate-svg-stroke-41 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@keyframes animate-svg-stroke-41 {
  0% {
    stroke-dashoffset: 322px;
    stroke-dasharray: 322px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 322px;
  }
}

@-webkit-keyframes animate-svg-fill-41 {
  0% {
    fill: transparent;
  }

  100% {
    fill: url("#drawio-svg-MZsynysKWGX0pQVtGdfA-gradient-light-dark_fff2cc_281d00_-1-light-dark_ffd966_543300_-1-s-0");
  }
}

@keyframes animate-svg-fill-41 {
  0% {
    fill: transparent;
  }

  100% {
    fill: url("#drawio-svg-MZsynysKWGX0pQVtGdfA-gradient-light-dark_fff2cc_281d00_-1-light-dark_ffd966_543300_-1-s-0");
  }
}

.svg-2-41 {
  -webkit-animation: animate-svg-stroke-41 1s cubic-bezier(0.19, 1, 0.22, 1) 4.8s both,
                       animate-svg-fill-41 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.8s both;
          animation: animate-svg-stroke-41 1s cubic-bezier(0.19, 1, 0.22, 1) 4.8s both,
               animate-svg-fill-41 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.8s both;
}

@-webkit-keyframes animate-svg-stroke-42 {
  0% {
    stroke-dashoffset: 62px;
    stroke-dasharray: 62px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 62px;
  }
}

@keyframes animate-svg-stroke-42 {
  0% {
    stroke-dashoffset: 62px;
    stroke-dasharray: 62px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 62px;
  }
}

.svg-2-42 {
  -webkit-animation: animate-svg-stroke-42 1s cubic-bezier(0.19, 1, 0.22, 1) 4.92s both,
                       animate-svg-fill-42 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.9s both;
          animation: animate-svg-stroke-42 1s cubic-bezier(0.19, 1, 0.22, 1) 4.92s both,
               animate-svg-fill-42 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.9s both;
}

@-webkit-keyframes animate-svg-stroke-43 {
  0% {
    stroke-dashoffset: 62px;
    stroke-dasharray: 62px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 62px;
  }
}

@keyframes animate-svg-stroke-43 {
  0% {
    stroke-dashoffset: 62px;
    stroke-dasharray: 62px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 62px;
  }
}

.svg-2-43 {
  -webkit-animation: animate-svg-stroke-43 1s cubic-bezier(0.19, 1, 0.22, 1) 5.04s both,
                       animate-svg-fill-43 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5s both;
          animation: animate-svg-stroke-43 1s cubic-bezier(0.19, 1, 0.22, 1) 5.04s both,
               animate-svg-fill-43 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5s both;
}

@-webkit-keyframes animate-svg-stroke-44 {
  0% {
    stroke-dashoffset: 282px;
    stroke-dasharray: 282px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 282px;
  }
}

@keyframes animate-svg-stroke-44 {
  0% {
    stroke-dashoffset: 282px;
    stroke-dasharray: 282px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 282px;
  }
}

@-webkit-keyframes animate-svg-fill-44 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(33, 33, 0);
  }
}

@keyframes animate-svg-fill-44 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(33, 33, 0);
  }
}

.svg-2-44 {
  -webkit-animation: animate-svg-stroke-44 1s cubic-bezier(0.19, 1, 0.22, 1) 5.16s both,
                       animate-svg-fill-44 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.1s both;
          animation: animate-svg-stroke-44 1s cubic-bezier(0.19, 1, 0.22, 1) 5.16s both,
               animate-svg-fill-44 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.1s both;
}

@-webkit-keyframes animate-svg-stroke-45 {
  0% {
    stroke-dashoffset: 182px;
    stroke-dasharray: 182px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 182px;
  }
}

@keyframes animate-svg-stroke-45 {
  0% {
    stroke-dashoffset: 182px;
    stroke-dasharray: 182px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 182px;
  }
}

.svg-2-45 {
  -webkit-animation: animate-svg-stroke-45 1s cubic-bezier(0.19, 1, 0.22, 1) 5.279999999999999s both,
                       animate-svg-fill-45 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.2s both;
          animation: animate-svg-stroke-45 1s cubic-bezier(0.19, 1, 0.22, 1) 5.279999999999999s both,
               animate-svg-fill-45 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.2s both;
}

@-webkit-keyframes animate-svg-stroke-46 {
  0% {
    stroke-dashoffset: 282px;
    stroke-dasharray: 282px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 282px;
  }
}

@keyframes animate-svg-stroke-46 {
  0% {
    stroke-dashoffset: 282px;
    stroke-dasharray: 282px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 282px;
  }
}

.svg-2-46 {
  -webkit-animation: animate-svg-stroke-46 1s cubic-bezier(0.19, 1, 0.22, 1) 5.3999999999999995s both,
                       animate-svg-fill-46 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.3s both;
          animation: animate-svg-stroke-46 1s cubic-bezier(0.19, 1, 0.22, 1) 5.3999999999999995s both,
               animate-svg-fill-46 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.3s both;
}

@-webkit-keyframes animate-svg-stroke-47 {
  0% {
    stroke-dashoffset: 202px;
    stroke-dasharray: 202px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 202px;
  }
}

@keyframes animate-svg-stroke-47 {
  0% {
    stroke-dashoffset: 202px;
    stroke-dasharray: 202px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 202px;
  }
}

.svg-2-47 {
  -webkit-animation: animate-svg-stroke-47 1s cubic-bezier(0.19, 1, 0.22, 1) 5.52s both,
                       animate-svg-fill-47 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.4s both;
          animation: animate-svg-stroke-47 1s cubic-bezier(0.19, 1, 0.22, 1) 5.52s both,
               animate-svg-fill-47 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.4s both;
}

@-webkit-keyframes animate-svg-stroke-48 {
  0% {
    stroke-dashoffset: 182px;
    stroke-dasharray: 182px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 182px;
  }
}

@keyframes animate-svg-stroke-48 {
  0% {
    stroke-dashoffset: 182px;
    stroke-dasharray: 182px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 182px;
  }
}

.svg-2-48 {
  -webkit-animation: animate-svg-stroke-48 1s cubic-bezier(0.19, 1, 0.22, 1) 5.64s both,
                       animate-svg-fill-48 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.5s both;
          animation: animate-svg-stroke-48 1s cubic-bezier(0.19, 1, 0.22, 1) 5.64s both,
               animate-svg-fill-48 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.5s both;
}

@-webkit-keyframes animate-svg-stroke-49 {
  0% {
    stroke-dashoffset: 182px;
    stroke-dasharray: 182px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 182px;
  }
}

@keyframes animate-svg-stroke-49 {
  0% {
    stroke-dashoffset: 182px;
    stroke-dasharray: 182px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 182px;
  }
}

.svg-2-49 {
  -webkit-animation: animate-svg-stroke-49 1s cubic-bezier(0.19, 1, 0.22, 1) 5.76s both,
                       animate-svg-fill-49 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.6000000000000005s both;
          animation: animate-svg-stroke-49 1s cubic-bezier(0.19, 1, 0.22, 1) 5.76s both,
               animate-svg-fill-49 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.6000000000000005s both;
}

@-webkit-keyframes animate-svg-stroke-50 {
  0% {
    stroke-dashoffset: 199.5px;
    stroke-dasharray: 199.5px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 199.5px;
  }
}

@keyframes animate-svg-stroke-50 {
  0% {
    stroke-dashoffset: 199.5px;
    stroke-dasharray: 199.5px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 199.5px;
  }
}

.svg-2-50 {
  -webkit-animation: animate-svg-stroke-50 1s cubic-bezier(0.19, 1, 0.22, 1) 5.88s both,
                       animate-svg-fill-50 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.7s both;
          animation: animate-svg-stroke-50 1s cubic-bezier(0.19, 1, 0.22, 1) 5.88s both,
               animate-svg-fill-50 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.7s both;
}

@-webkit-keyframes animate-svg-stroke-51 {
  0% {
    stroke-dashoffset: 202px;
    stroke-dasharray: 202px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 202px;
  }
}

@keyframes animate-svg-stroke-51 {
  0% {
    stroke-dashoffset: 202px;
    stroke-dasharray: 202px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 202px;
  }
}

.svg-2-51 {
  -webkit-animation: animate-svg-stroke-51 1s cubic-bezier(0.19, 1, 0.22, 1) 6s both,
                       animate-svg-fill-51 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.8s both;
          animation: animate-svg-stroke-51 1s cubic-bezier(0.19, 1, 0.22, 1) 6s both,
               animate-svg-fill-51 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.8s both;
}

@-webkit-keyframes animate-svg-stroke-52 {
  0% {
    stroke-dashoffset: 202px;
    stroke-dasharray: 202px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 202px;
  }
}

@keyframes animate-svg-stroke-52 {
  0% {
    stroke-dashoffset: 202px;
    stroke-dasharray: 202px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 202px;
  }
}

.svg-2-52 {
  -webkit-animation: animate-svg-stroke-52 1s cubic-bezier(0.19, 1, 0.22, 1) 6.12s both,
                       animate-svg-fill-52 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.9s both;
          animation: animate-svg-stroke-52 1s cubic-bezier(0.19, 1, 0.22, 1) 6.12s both,
               animate-svg-fill-52 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 5.9s both;
}

@-webkit-keyframes animate-svg-stroke-53 {
  0% {
    stroke-dashoffset: 202px;
    stroke-dasharray: 202px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 202px;
  }
}

@keyframes animate-svg-stroke-53 {
  0% {
    stroke-dashoffset: 202px;
    stroke-dasharray: 202px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 202px;
  }
}

.svg-2-53 {
  -webkit-animation: animate-svg-stroke-53 1s cubic-bezier(0.19, 1, 0.22, 1) 6.24s both,
                       animate-svg-fill-53 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6s both;
          animation: animate-svg-stroke-53 1s cubic-bezier(0.19, 1, 0.22, 1) 6.24s both,
               animate-svg-fill-53 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6s both;
}

@-webkit-keyframes animate-svg-stroke-54 {
  0% {
    stroke-dashoffset: 202px;
    stroke-dasharray: 202px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 202px;
  }
}

@keyframes animate-svg-stroke-54 {
  0% {
    stroke-dashoffset: 202px;
    stroke-dasharray: 202px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 202px;
  }
}

.svg-2-54 {
  -webkit-animation: animate-svg-stroke-54 1s cubic-bezier(0.19, 1, 0.22, 1) 6.359999999999999s both,
                       animate-svg-fill-54 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.1000000000000005s both;
          animation: animate-svg-stroke-54 1s cubic-bezier(0.19, 1, 0.22, 1) 6.359999999999999s both,
               animate-svg-fill-54 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.1000000000000005s both;
}

@-webkit-keyframes animate-svg-stroke-55 {
  0% {
    stroke-dashoffset: 249.5px;
    stroke-dasharray: 249.5px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 249.5px;
  }
}

@keyframes animate-svg-stroke-55 {
  0% {
    stroke-dashoffset: 249.5px;
    stroke-dasharray: 249.5px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 249.5px;
  }
}

.svg-2-55 {
  -webkit-animation: animate-svg-stroke-55 1s cubic-bezier(0.19, 1, 0.22, 1) 6.4799999999999995s both,
                       animate-svg-fill-55 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.2s both;
          animation: animate-svg-stroke-55 1s cubic-bezier(0.19, 1, 0.22, 1) 6.4799999999999995s both,
               animate-svg-fill-55 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.2s both;
}

@-webkit-keyframes animate-svg-stroke-56 {
  0% {
    stroke-dashoffset: 162px;
    stroke-dasharray: 162px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 162px;
  }
}

@keyframes animate-svg-stroke-56 {
  0% {
    stroke-dashoffset: 162px;
    stroke-dasharray: 162px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 162px;
  }
}

.svg-2-56 {
  -webkit-animation: animate-svg-stroke-56 1s cubic-bezier(0.19, 1, 0.22, 1) 6.6s both,
                       animate-svg-fill-56 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.3s both;
          animation: animate-svg-stroke-56 1s cubic-bezier(0.19, 1, 0.22, 1) 6.6s both,
               animate-svg-fill-56 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.3s both;
}

@-webkit-keyframes animate-svg-stroke-57 {
  0% {
    stroke-dashoffset: 160.15505981445312px;
    stroke-dasharray: 160.15505981445312px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 160.15505981445312px;
  }
}

@keyframes animate-svg-stroke-57 {
  0% {
    stroke-dashoffset: 160.15505981445312px;
    stroke-dasharray: 160.15505981445312px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 160.15505981445312px;
  }
}

.svg-2-57 {
  -webkit-animation: animate-svg-stroke-57 1s cubic-bezier(0.19, 1, 0.22, 1) 6.72s both,
                       animate-svg-fill-57 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.4s both;
          animation: animate-svg-stroke-57 1s cubic-bezier(0.19, 1, 0.22, 1) 6.72s both,
               animate-svg-fill-57 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.4s both;
}

@-webkit-keyframes animate-svg-stroke-58 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@keyframes animate-svg-stroke-58 {
  0% {
    stroke-dashoffset: 25.478713989257812px;
    stroke-dasharray: 25.478713989257812px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 25.478713989257812px;
  }
}

@-webkit-keyframes animate-svg-fill-58 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(45, 69, 255);
  }
}

@keyframes animate-svg-fill-58 {
  0% {
    fill: transparent;
  }

  100% {
    fill: rgb(45, 69, 255);
  }
}

.svg-2-58 {
  -webkit-animation: animate-svg-stroke-58 1s cubic-bezier(0.19, 1, 0.22, 1) 6.84s both,
                       animate-svg-fill-58 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.5s both;
          animation: animate-svg-stroke-58 1s cubic-bezier(0.19, 1, 0.22, 1) 6.84s both,
               animate-svg-fill-58 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 6.5s both;
}
`,Y=`<!--?xml version="1.0" encoding="UTF-8"?-->
<!-- Do not edit this file with editors other than draw.io -->

<svg xmlns="http://www.w3.org/2000/svg" style="background: transparent; background-color: transparent; color-scheme: light dark;" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="-0.5 -0.5 558 422" content="<mxfile host=&quot;app.diagrams.net&quot; agent=&quot;Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36&quot; version=&quot;26.0.5&quot; scale=&quot;1&quot; border=&quot;0&quot;>
  <diagram name=&quot;Страница — 1&quot; id=&quot;DBAxyq7ISSYvHVMwThGb&quot;>
    <mxGraphModel dx=&quot;1195&quot; dy=&quot;631&quot; grid=&quot;1&quot; gridSize=&quot;10&quot; guides=&quot;1&quot; tooltips=&quot;1&quot; connect=&quot;1&quot; arrows=&quot;1&quot; fold=&quot;1&quot; page=&quot;1&quot; pageScale=&quot;1&quot; pageWidth=&quot;827&quot; pageHeight=&quot;1169&quot; math=&quot;0&quot; shadow=&quot;0&quot;>
      <root>
        <mxCell id=&quot;0&quot; />
        <mxCell id=&quot;1&quot; parent=&quot;0&quot; />
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-5&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;strokeColor=light-dark(#000000,#FF6114);&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;IUbEIiO6durk_TbwgAcF-2&quot; target=&quot;IUbEIiO6durk_TbwgAcF-3&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-16&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeColor=light-dark(#000000,#FF6114);&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;IUbEIiO6durk_TbwgAcF-2&quot; target=&quot;IUbEIiO6durk_TbwgAcF-15&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-2&quot; value=&quot;Император&amp;lt;div&amp;gt;(с 1721)&amp;lt;/div&amp;gt;&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;360&quot; y=&quot;110&quot; width=&quot;120&quot; height=&quot;50&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-7&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeColor=light-dark(#000000,#3F83FF);&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;IUbEIiO6durk_TbwgAcF-3&quot; target=&quot;IUbEIiO6durk_TbwgAcF-6&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-3&quot; value=&quot;Сенат&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#b1ddf0;strokeColor=#10739e;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;360&quot; y=&quot;200&quot; width=&quot;120&quot; height=&quot;50&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-12&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;IUbEIiO6durk_TbwgAcF-4&quot; target=&quot;IUbEIiO6durk_TbwgAcF-11&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-4&quot; value=&quot;Главный Магистрат&amp;lt;div&amp;gt;(с 1720)&amp;lt;/div&amp;gt;&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#fad9d5;strokeColor=#ae4132;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;570&quot; y=&quot;272.5&quot; width=&quot;120&quot; height=&quot;55&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-8&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;IUbEIiO6durk_TbwgAcF-6&quot; target=&quot;IUbEIiO6durk_TbwgAcF-4&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-14&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;IUbEIiO6durk_TbwgAcF-6&quot; target=&quot;IUbEIiO6durk_TbwgAcF-13&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-20&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;IUbEIiO6durk_TbwgAcF-6&quot; target=&quot;IUbEIiO6durk_TbwgAcF-19&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-6&quot; value=&quot;Юстиц-коллегия&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;360&quot; y=&quot;280&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-11&quot; value=&quot;Магистраты&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;570&quot; y=&quot;360&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-29&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;IUbEIiO6durk_TbwgAcF-13&quot; target=&quot;IUbEIiO6durk_TbwgAcF-23&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot;>
            <Array as=&quot;points&quot;>
              <mxPoint x=&quot;140&quot; y=&quot;300&quot; />
              <mxPoint x=&quot;140&quot; y=&quot;355&quot; />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-30&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;IUbEIiO6durk_TbwgAcF-13&quot; target=&quot;IUbEIiO6durk_TbwgAcF-28&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot;>
            <mxPoint x=&quot;140&quot; y=&quot;520&quot; as=&quot;targetPoint&quot; />
            <Array as=&quot;points&quot;>
              <mxPoint x=&quot;140&quot; y=&quot;300&quot; />
              <mxPoint x=&quot;140&quot; y=&quot;515&quot; />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-31&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;IUbEIiO6durk_TbwgAcF-13&quot; target=&quot;IUbEIiO6durk_TbwgAcF-25&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot;>
            <Array as=&quot;points&quot;>
              <mxPoint x=&quot;140&quot; y=&quot;300&quot; />
              <mxPoint x=&quot;140&quot; y=&quot;395&quot; />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-32&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;IUbEIiO6durk_TbwgAcF-13&quot; target=&quot;IUbEIiO6durk_TbwgAcF-26&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot;>
            <Array as=&quot;points&quot;>
              <mxPoint x=&quot;140&quot; y=&quot;300&quot; />
              <mxPoint x=&quot;140&quot; y=&quot;435&quot; />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-33&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;IUbEIiO6durk_TbwgAcF-13&quot; target=&quot;IUbEIiO6durk_TbwgAcF-27&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot;>
            <Array as=&quot;points&quot;>
              <mxPoint x=&quot;140&quot; y=&quot;300&quot; />
              <mxPoint x=&quot;140&quot; y=&quot;475&quot; />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-13&quot; value=&quot;Специальные суды&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#fad7ac;strokeColor=#b46504;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;160&quot; y=&quot;280&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-15&quot; value=&quot;Тайная канцелярия розыскных дел&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#fad7ac;strokeColor=#b46504;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;570&quot; y=&quot;170&quot; width=&quot;120&quot; height=&quot;50&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-22&quot; value=&quot;&quot; style=&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;&quot; edge=&quot;1&quot; parent=&quot;1&quot; source=&quot;IUbEIiO6durk_TbwgAcF-19&quot; target=&quot;IUbEIiO6durk_TbwgAcF-21&quot;>
          <mxGeometry relative=&quot;1&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-19&quot; value=&quot;Надворные суды&amp;lt;div&amp;gt;(1719 - 1727)&amp;lt;/div&amp;gt;&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;360&quot; y=&quot;355&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-21&quot; value=&quot;Нижние суды&amp;lt;div&amp;gt;(до 1722)&amp;lt;/div&amp;gt;&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;360&quot; y=&quot;430&quot; width=&quot;120&quot; height=&quot;40&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-23&quot; value=&quot;Кригсрехт&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#d0cee2;strokeColor=#56517e;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;160&quot; y=&quot;340&quot; width=&quot;120&quot; height=&quot;30&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-25&quot; value=&quot;Для духовенства&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#d0cee2;strokeColor=#56517e;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;160&quot; y=&quot;380&quot; width=&quot;120&quot; height=&quot;30&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-26&quot; value=&quot;Генеральный&amp;lt;span style=&amp;quot;color: rgba(0, 0, 0, 0); font-family: monospace; font-size: 0px; text-align: start; text-wrap: nowrap;&amp;quot;&amp;gt;%3CmxGraphModel%3E%3Croot%3E%3CmxCell%20id%3D%220%22%2F%3E%3CmxCell%20id%3D%221%22%20parent%3D%220%22%2F%3E%3CmxCell%20id%3D%222%22%20value%3D%22%D0%94%D0%BB%D1%8F%20%D0%B4%D1%83%D1%85%D0%BE%D0%B2%D0%B5%D0%BD%D1%81%D1%82%D0%B2%D0%B0%22%20style%3D%22rounded%3D0%3BwhiteSpace%3Dwrap%3Bhtml%3D1%3B%22%20vertex%3D%221%22%20parent%3D%221%22%3E%3CmxGeometry%20x%3D%22160%22%20y%3D%22410%22%20width%3D%22120%22%20height%3D%2240%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3C%2Froot%3E%3C%2FmxGraphModel%3E&amp;lt;/span&amp;gt;&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#d0cee2;strokeColor=#56517e;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;160&quot; y=&quot;420&quot; width=&quot;120&quot; height=&quot;30&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-27&quot; value=&quot;Полковой&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#d0cee2;strokeColor=#56517e;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;160&quot; y=&quot;460&quot; width=&quot;120&quot; height=&quot;30&quot; as=&quot;geometry&quot; />
        </mxCell>
        <mxCell id=&quot;IUbEIiO6durk_TbwgAcF-28&quot; value=&quot;Для крепостных крестьян&quot; style=&quot;rounded=0;whiteSpace=wrap;html=1;fillColor=#d0cee2;strokeColor=#56517e;&quot; vertex=&quot;1&quot; parent=&quot;1&quot;>
          <mxGeometry x=&quot;160&quot; y=&quot;500&quot; width=&quot;120&quot; height=&quot;30&quot; as=&quot;geometry&quot; />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
"><defs></defs><g><g data-cell-id="0"><g data-cell-id="1"><g data-cell-id="IUbEIiO6durk_TbwgAcF-5"><g><path d="M 287 50 L 287 83.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 97, 20));" class="svg-elem-1"></path><path d="M 287 88.88 L 283.5 81.88 L 287 83.63 L 290.5 81.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 97, 20)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 97, 20));" class="svg-elem-2"></path></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-16"><g><path d="M 347 25 L 497 25 L 497 53.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 97, 20));" class="svg-elem-3"></path><path d="M 497 58.88 L 493.5 51.88 L 497 53.63 L 500.5 51.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 97, 20)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 97, 20));" class="svg-elem-4"></path></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-2"><g><rect x="227" y="0" width="120" height="50" fill="#f8cecc" stroke="#b85450" pointer-events="all" style="fill: light-dark(rgb(248, 206, 204), rgb(81, 45, 43)); stroke: light-dark(rgb(184, 84, 80), rgb(215, 129, 126));" class="svg-elem-5"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 25px; margin-left: 228px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Император<div>(с 1721)</div></div></div></div></foreignObject><image x="228" y="11" width="118" height="32" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-7"><g><path d="M 287 140 L 287 160 L 287 150 L 287 163.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(63, 131, 255));" class="svg-elem-6"></path><path d="M 287 168.88 L 283.5 161.88 L 287 163.63 L 290.5 161.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(63, 131, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(63, 131, 255));" class="svg-elem-7"></path></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-3"><g><rect x="227" y="90" width="120" height="50" fill="#b1ddf0" stroke="#10739e" pointer-events="all" style="fill: light-dark(rgb(177, 221, 240), rgb(23, 61, 77)); stroke: light-dark(rgb(16, 115, 158), rgb(84, 169, 206));" class="svg-elem-8"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 115px; margin-left: 228px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Сенат</div></div></div></foreignObject><image x="228" y="108.5" width="118" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-12"><g><path d="M 497 217.5 L 497 237.5 L 497 230 L 497 243.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-9"></path><path d="M 497 248.88 L 493.5 241.88 L 497 243.63 L 500.5 241.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-10"></path></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-4"><g><rect x="437" y="162.5" width="120" height="55" fill="#fad9d5" stroke="#ae4132" pointer-events="all" style="fill: light-dark(rgb(250, 217, 213), rgb(68, 39, 36)); stroke: light-dark(rgb(174, 65, 50), rgb(236, 143, 130));" class="svg-elem-11"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 190px; margin-left: 438px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Главный Магистрат<div>(с 1720)</div></div></div></div></foreignObject><image x="438" y="176" width="118" height="32" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdgAAACACAYAAACoc3i3AAAAAXNSR0IArs4c6QAAIABJREFUeF7tnQX09EiVxR/u7u6Ds/jg7m4Dg7u7u7u7w8DgroMu7gzO4O7uDK757abYt+9EqtKpdPfX950zB75/VyqVm0rdelqHMIkQEAJCQAgIASEwOwKHmL1HdSgEhIAQEAJCQAiYCFaTQAgIASEgBIRABQREsBVAVZdCQAgIASEgBESwmgNCQAgIASEgBCogIIKtAKq6FAJCQAgIASEggtUcEAJCQAgIASFQAQERbAVQ1aUQEAJCQAgIARGs5sAuIfBlMztd+8D/NLPDmdnfRwB4ppndyrW5mJm9d5dA07MKASEwDQER7DTcdNV2IvAuM7u4G/qZzewLI4/yATO7oGtzWjP72nY+vkYtBITAkgiIYJdEW/daNwKPMLN7u0E8uPn/DxoY1InM7Ntmdpi2zS/N7LhmhvYrEQJCQAgMIlCLYK9iZq+fGftvmtmpZ+5T3e0WAucyswPdI//ezM5tZl/pgOGQZvZqM7ua++0FZnaTSpA9yczu2NH3wxsz9v1mvOeNzWy/jv4eb2Z3m/E+6koI7DwCItidnwI7B8BbGpK9nHvqX5nZQ8zsjWb2QzM7kpnt3Wq6F3bt/toQ7hnN7BuVEOsjWMZ00hm15veb2YVEsJXeoroVAg4BEaymw64hgIn3Y2Z2ioIH/5eZ3cjMXlRwTWnTPoKlHzYEbyvtsKP9KdsNQtd3Lw12BoDVhRDwCCxJsP9tZr9bAf4fm9ntV7helwqBhMCxzexZrfl37Bv4rpnd0szeURm+IYJ9jZntM8P90dTv39OPCHYGgNWFEFgXweZEbOrtCIElEdirJVn8sAQ0HbUxDf+l2cgRzPT5xpT6nsZH+9aGlP6xwKAiwX7dzE7T3hfzNOP7xQrjYCNBwNbJ2j74/16LF8GuAK4uFQJdCIzt3qei1hXkJIKdiqau2wUEIsE+3cxu6x78zmZGm6lCehJpSklebGbXd/8WwU5FVtcJgR4ERLCaGkJgMxCIBHvd1ox9lHZ4aNT/tcJQIdTrtdf/yczuaWZPEcGugKguFQIjCOwJBIt57+MrvmkiSNG6c4Qo08ua2aXN7EytmY1F8LCtj5mo1M+Z2YcbE99LzexnOZ22bTABHiujPSbDg83sp41v7otm9iEze62Z/SDj2ts193iqa/cpMztnxnWpCQFCRNkmGdKs4vNcsbnXAQX3Gmp6BTN7s2uAWRffapfEZ35lk5qzb+Y4iBzmfR7KtX93g/klMq/PbRYJ9tpmdiUz43+TkGb0ydwOXTvm50/M7Ijt397UFM/gGZ7s2pRqsJvwHaThd6Xwrfud840w3y/amvcJriNYjvWB4iZEc+/f+PeJLekS1paDJrzroUuiFRE3wcndBedr1rWPtv9mPUtz8KzNZu/4bT74z9t15p1mxnc0VqilbzwnMLMrN1XRiNTnG+PfzFM46TftfGVtwk1DDMKfBx4sd93MhZNYn6flNh5qtycQLAvly1cEI4dgyYu8S5u+cczM+0GEmPruMzJBUnerTBT8hM81s3uYGfmdfSKC/d+FIZdg395upjyeSxDsDdv3+Dp3Y8o23iZz7vlmN2vnRvobEdFsRh43gWA38TuYm2BXeecQ4xOaDfYlM94TZTpZyMlz/kNovwTBYhWBdJNcvo05YHPAmjoWaU/BFYIFWXPi+Pse/xiNMkLBl5u6Ai5jULEp4R7P72m4yrrZ1aUI1qECeZGMv4qMESy7OQpn+PzJkvuhYVPD9o8jF80xUT7d7pr7IrZFsPkEe6me6OElCBZSxAKCxnDkdt6ws2enP7Sb75piWFPQThCCuNBGiIx+VCHBbup3MCfBrvLOWR/Qto5Qsji0FhLu661dSxDsJ4L16ppNIZXvtdYNLBS5gpYJOY/NS7RlskmmFgxiM9KVSTLHuumfVQTr0GBX46vrkKuIf2lISFe4uWswRrDPaMyxtw4d/qgpHP+KxowHofFhsBvFvHv2NnjkxKH9S0JQSdf44kThOT7S0ZAPmIX2PGaGr47oVy/sKuN40+8i2DyCxST82dYNEF/BEgSLporG+rJgJsaPCvHmCpHIvnZySvmJG9McE/G6vgOCsXyAVnx2vr0YYT3FRLzKO8cUTCpXKqvJGLFg8bf3te4cfqOW9dVdhHh6FsyhbIK4Bjn0gMuD3/n+WXu8sPb0mZxpB0b+cAvMwawhSQiqQ1Mk0hxzNmZgxv+t9jruiWsMdxrj84KlDsz7hM0ZigbmZi+4X3BvfampZPbrpugLFhLuQ/1vTNRpc5muYeMZNVnM71zXJzynN4UzTu7ZJygnY8rQwOX/99OeYCLmZJOLuKeFlB4z8vTR3zVEsJy+gp/Tv0CqAbHb63sJECCE6svsMWH5AFi0+2SKz5L0jQ8Gcw47yeO0ftp4LxFsHsHeovnQn93zopYg2LSLjhoV2oI/sGDsQ4/1l5MZELPkQ93FYwS76d/B2DzPcQtMfeeQAP5Sv4jzb9aIvjKc1MGOJTCpi83fc4QN/PdDw5NkxmGky9i8n9f1Qc435Mo6xCaAgy66hFgAYikgtiS4qAjCY63ski5sH9AQ9cNaMu+6hrFA8GxKkrCBoGDKmLbs+6P62qncH9iwsT5Xlz2BYDFpMLGSMDG836oLxBKCfXS7q0v94GugdB1+gSEhoIQJ6wNv6OteAxdNIVi6Q4uNE4bgga4PRAQ7TrAEW5CHerz2XbGB8SfqLEmwbOwIRmHOIWzUWGC+k7E6cC1zMFlTWJz4VlgMSwl2G74DD0mpBrvKO39gc2N/aARm/bO0gTpDr+mFzbvF154EDY73k+PPnINgCY48fxggflXWDn4bEsptEqjlpc+ESxu0VwJSk6BVJrfF0H1i/XDaEmSKnzxXRLC5SIV2mB1IOfDaJSYIzA5DUkKw+HfRkNmt8R8axFUzxxtNakTg+h1j7GYqwRKMgBnHS99GQwQ7TrC8c0yoCD5LLBFYLZIsSbDcE62G3X4SXBws6mMStV+/wSsl2G34DjwepQQ79Z2z9rDZ8Zt8Dk3AIjAmbJrYPPn1i7mWc1BKLYIlnesGYwNvf6d852VcWzZwWNTYBHrB9I7Sc8J2DcW6xqlWPop96JaYj0/vGhA74E/FGhuuCHYMoZ7fqcTz1fAb5pqxHWAJwcZbo/XHCdQ3/GgWQdtOlXS6rplKsHzc9O2FTUHcYfK7CHaYYMGSOZUCVSAlFjw2R0mWJlhMj2ygksWJd82mauzYPCJBfbQ0i1QyWZYS7DZ8B1MJdpV3ju+VTbcXiGTIF+rbMreIrCXNjO+ff+doZ7UI1qfqjC3LXSczEZzVZyb2/ZWsozEOgTgbr/mPjVMEO4ZQz++YCihll4RJzeQek1UIdqxv//s12iPP0t9In4kBSb79VIKNmgq+YbTtro2GCHaYYDG1Y3JHCF4jSIg8YUh1XQTLfeNh8QSbEITSJ0drTZSHbxtEk9yqBLuJ34EfU4kGu8o7R5PCz50EbYu8ztpSg2Bxe6Fdjm3c0rOx8UMD94LfmWMe5xRMz76qGfnv5Ijnigg2F6nQLn5E+Bz9EWN93S5FsLFkJIQXo+L8GKcQLJGJBAKwk04ydIaoCLafYPH34CtKmiKpLM9pfT5+I7e0Bst7JaKSnXySsaCdW7VRyKk91hTypJMsSbBLfAfxW88l2FXfOdGoPpgRDdT/e+LSNnpZDYItndd8J7joDudGiyvDB8+NPkhGg7he466h0EyuiGBzkQrtnthU/biT+9vzQvpNDYJFm6GKDwnaaDdopARI+EmW7ouPOJW6429zECyTmgAqPjBC7FlIfCUmPvBrmdnfeh5eBNtPsGzQUjATFWrw5xMQFKtGlS5EOdM7LiIxFw9NlNQwzIkIvmHSGQiM6RJfcQuLBm19bvSqBLvu72AM01yCXfWdkypzNjcY1iQK0tSWGgTLZpJNZYkQDOjzWqkSd4eRDkjxoRAH5mjWUXzRrJP8F9N/6Iqc3GSJ4d8i2A5HfY1i/2gVmImT3D1Up5mTYDH3ohni950qpQRbch9MU1TmITJxyEccF56Se3S1LSmVSGh9PJmGsYIL5nMiXvHfkIyO+TPlBHbdd+5SiQSFkSOaBLM740A2gWAZRzSV9SXEk1LzZfcsXYErUwl2Hd/BlBKbOQQ7xzvHN+4rHuUGoK363dUgWDRPH0yXM8a4wWD9wTfbJSgcrNEoRX1lTXPuKYJdiGCj6p/7IZaYiInwQzPumzQ5EyK1qUWwb2jrmkJKYwnS6yTYEqxIdSBSlqIZXRuGOQmWD58NSsqVix/wphAsedQUJEjymTa3OuIaU2qoIka+uJdSgl3nd5D7XfvnGyPYud45wUm+dCppeOBfW2oQLP5kX90r5xliqk/f2cVgRByB1/Zz+u9qI4JdgGD5QCATX4QdUwVl08akhGCZcLEyFNVQ8IdRoAJTIoXUGYuvksIYVvU9jT1H/B0tEC2WoIs4ltR2Wwg2jZcdMZW6IsnOSbCY9FJaBbhhbfEFAjaFYMEEUvXVcCBd/paE74ECBJiEEVJIyJuN+JUS7Dq/gxoEO9c7jwR73xD0VPoN57avQbA5RXri+HwZTn7rig1gc0Yuecx7pfQnG2hcLpia2VRj5YpBVvLBBtSXOA+WRZBi1UlwthNAlBMBl0uw+FgxWfryZ6RIkPvlTXB9H8WqBEs0a4wUxQdLCgnRfoTEE1ARI+rIT2NR6jooPBIsOcM+l23sA2f3yKKepMRE3LVQgi0Rr5g1qTJEtKD3W3OfGKDD31YhWEoNpqPb2FljCUm+za5k+U0iWMzC/pi5OF7q4fqc3b7qQCUEu+7vYA6CrfXOo4l4KMBw7Nsq+b0GwZJv7Qtm5Iwnmoi74mA4XOIFoTMCMwnc64sh8M1FsGsg2HiKTsmxa7kEi0/ClzODvCG1HHIFEoKNqFecpNREnLuwUPiCaEZfmasv2X3Tg5ywQpBS4n00XfnDqxCsXwRIdk9BGeyouT9aiZdNIlg2BAQ7paA6UitITSPoCXlVsyncp/3/Q1WfSgh2W74D/87iPK/1zqNFgfKaRHDXlhoEOyVAKwY5sbay6faC9noB9wesjChIKEU5Qk1uj6lMxAuYiKPJigLQFILOkVyCjbU6OUeTMwxzBZOL92nUIljGE9MFyE/DNBhl0wmW8d61I1gtJrCvQrAp0jFqZtyXo8aibBLBMjY2bWzekjA+Fh20cNwVuE+QobrFJQS7Td9BwiTO81rvnApFvrIbvm583rWlBsGOHXoSn6krTSd+Q1jbcF15Vx7mecg8V2LFKBHsAgRLhKc/9DrlLOa8tFyCjXWOS3O8YnGAmgTL6TmUZvRCsQn8Gl62gWDxMXq/IuNPJOJJZeqB6xwGweaH4LC0YcJMTIGArsjlTSNYUhy864D8VszosbLOUFHzEoLdpu+gj2BrvfN4KlFpsQbcIf5oOCwROWbTGgTLN8CmM1dIryHy30usE8wmP8bFUMcYrTZHIOifBreRCLYywZIrxUT2vrrcEl281FyCZaIf3c2CLl9g3yShLB0BUL7OaE2CxSyIedALp1D4o8r4bRsItqu28nXaQ6DnIFh8TWgaHCOWBC0Ewu2STSNY5hS+v1R2E60VMzE50GnDQM4rgU59UeUlBLtN30EfwdZ652irvsoX96eAftcxk11zi6Agqh8lSZulMfKpQbDck0j6WNe8byzEMZAC5oVx/dD9gRN24glipDpiWs4RFCcCobyIYCsTLMUA/EkxLDApajLnpeUSLBGYvnZwbpQdGwDqAMeoObSjroIUacxTKjmla7smIufTxlN/toFgORAhLlA+L5VnXsVEjNZBDuQ5WvB4V/7IwziHNo1gGR/BKL7gP5hhMUna0NhCXUKw2/Qd9BFsrXeO6RMtjiL3STDhE8AzJhRPgIx8mg9WCCLnx6QWwZbk8Ua3FEGnEKqXrnKKe5vZgWMP2B6ggCWLdcwL1kvWg1xRJadcpNp2HO7LgdRJ9mtSE25a0EcuwVJ0m5qvSXJeLH4JojwhMoj/+GFcRMz6ijr+51UINvqC+HDjoe/caxsIljMiSXdIQrAOC5gvoL4KwRIQl8iVwDWqEkWTtH8vm0iwbPzws6fANs7n9OXjxoq2lxDsNn0H6b11zfNa7xxSur+bMMwp1o2hQ+JpzjVcmwQLF5aIvvXBz8laBIu/lACkaPqNyyvH8fHNeAsdGz7/PFyDskHwoDeD56QyUSGPecfGMa6jffnffRQggi0gRyYWp51QLjAJPqmxyexvkUuwROI+NoyN1BuCAbqEnRYnPZAqQalC/BFxXOnA667rpxIs5mFMTT6KmGAdAg6ibDrBQnaYbv0HSTK7P4+VZ1qFYD0mpA+QZzskm0iwjDfGIaRn4Psg7WlISgh2W74D/7xD+d5zv3PIAHeQP7Lut+2xbwRGRoGUCPTBL+y/2Ue6YxJHXt//bJ5XPXA9FokgXoP0P+YPqX/RvZTGhAuHdc0HUbIpIAI/xnxwDZs/1r0kWNX4zuNBAel3yJuCFfiDMVcTxe7TfFhbGScY54gIdgQldp74ktBiIA52WEkOas0SuUfIcV0uwWK6YSfnC/RTiAANlRMjftDWyMSnAJlyhFLyC6doOiacTznB4U/IOf9LtKc/bi8SLD7fWIGH8XMdY8PPC+FD6F64Jwts16Hwm0aw5MES/UqAEX5Qntmb0Xmv+LRI3fEyB8GiMfARjx0ttqkEGw8ASPjkVBMqIdh1fwe56Wp+fvQRbK13jsmS0q0+WpbxcHgEPkPWCsiU75Lc9VQ1LI2ZfHRMpyndaow4ahAsbgdS1njfjIPcYZ6JNZCUGrRrcub5RuOhJUPus3jaF8/GGkWGBZtE1iliXSBWsGEdAEdcahzecnDj0mGd9wKm+NXRjuEG7/eN2IlgR2ZTjMb1zUsi0tJ1uQRLe0gzxyfix+Rzwbi27+zC6KyPBDv2kXX9zmRlQvuSekMLT0n+MP34IvL8u6TQROnzQK43bzQDUrCizEGwuVHhm0qw8QAAMKK4CNGd5MoOSQnBrvs7mJNga75zNrv4X4fiLLreCeRx8R7tr+8d1iBYvmVy/NG6U6pXzjdLoBNr3JCSgwZKwYlcQUul0A6KDBsTNFn8uV0yVoNeBDuBYHmZ7FJjakrOCywhWPpjx4bWOvbhYLK4R3vEWRoHGhIkFqsT8fvcBIvpmh1oPHx9GwmWClpUdeo6NJ7nWZVg0SiwPOQku28qwYJDPAAAjcOb4/q+h1KCXed3MBfBLvHOqbWLlW0oaC69E0iE9YsawDnz0L/LGgSbrG4oLfsPEFoaBxomWigm3L7SrKktlirmKmvpmBBhTLAXZRiTxMJCvg8RbGvWxU8xRZIGy0tkZ/7JtnZsbih8vGcpwXI95hFMu+w0WZgxafCBkKNF9BwOeUwqXQEKmLQxZzBx8ddQKQgs0Mx8padcDZbNBWYT0icgIrTKl2eGvq/TRNz37jHxsDlhp8lmhHQZosSHdsSrEuxQjmgc5yYTLAs65eqS4I/3pwLNSbDr+g7mItgl3zlBZmx0OKcZ1xY+QzQxvn2+WeIMsG6NuSf63l8NgvXV39BgSR8i7Ys5xvpHwBKmXUzGbOSox56b0pOeg74oCMRayDOgePD9409mXUdJ4L+uMq+MhTGSJw9hE/yECZ44Ga7tkz1Og51CorpGCAgBISAElkMgBjmNaYLLjWwPuZOPYNtDHkmPIQSEgBAQAhkIiGAzQFqliQh2FfR0rRAQAkJgexEQwVZ+dyLYygCreyEgBITAhiIggq38YkSwlQFW90JACAiBDUVABFv5xYhgKwOs7oWAEBACG4qACLbyixHBVgZY3QsBISAENhQBEWzlFyOCrQywuhcCQkAIbCgCItjKL0YEWxlgdS8EhIAQ2FAERLCVX4wItjLA6l4ICAEhsKEIiGArvxgRbGWA1b0QEAJCQAjsJgIi2N1873pqISAEhIAQqIyACLYywOpeCAgBISAEdhMBEexuvnc9tRAQAkJACFRGQARbGWB1LwSEgBAQAruJgAh2N9+7nloICAEhIAQqIyCCrQywuhcCQkAICIHdREAEu5vvXU8tBISAEBAClREQwVYGWN0LASEgBITAbiIggt3N966nFgJCQAgIgcoIiGArA6zuhYAQEAJCYDcREMHu5nvfhKc+nJm928zO3w7mn2Z2ZTM7YBMGpzFsLQJXNbPXmlla2z5gZpc0s79u7RNp4FuLgAh2a1/d1g/8JWZ2XfcU9zGzR279U+15D3CEZtNzTjM7jZkd08wOY2a/NbOfm9mnzeybMz7yKc3sbGZ2UjM7UkuKPzGzL5jZZ82MTViOPKAh2Ae7hi80sxvnXKg2QmBOBESwc6KpvnIRuFcg09eY2T65F294u3OZ2YvN7LRunE82szsVjvtRZnbPwmtyml/WzN6e0fASZnZ7M7ucmR16oD0EuJ+ZPd3MfpTRb2yCJeNWZnbrgFlsB6FDlI9uxvXLkfuwrr2+tYikpnc3s8dNGJ8uEQKTERDBToZOF05EAG3oI60mRBc/NrMzmdmvJva3KZdBQvdvtC408UhI20SwxzGzZ5rZ1QuB/V2j1d7WzLBM5MpZzOzVZrZX7gXtPLmemb1t5JpjN5u2L5rZcdt2f2s2Fudpte6C26mpEJiOgAh2Ona6shyBIzZaxWfCgnp5M3treVcbdcUZzOxFZnaOnlFtC8Ge0MzeM6JJjgGPJvqssUZmdvb2XkfraftnMzt8z2//MLNrmtnrRu6DT/8Nrs1X2nf0x4zxqYkQWBkBEezKEKqDAgTwsWIeTvIqM7tWwfWb1pTvB9PvIwbIgDFPIdirtebZVZ8ZP3ciqn+1Ps7PdXSKb/XAhpDOGn77XuN7fUqrMX7LzNAE0QrPZ2a3MbOLhfb4STGT45/tk6ObGWPA1+oFs+6z23H8uh03pvYbtPfyhPuH1jcMaQ4JJEzgU5KHm9n9VgVV1wuBHAREsDkoqc0cCJyiIdMvN75XfG4IUZ2nbxZPFu1tlJO1PsGLhMHjJzyBmV3a/X0Kwc6ByU3M7PmuI8gLf2eX3LcxbT8s/EA07o3M7OCBwdy1w7f5DjO7zMA1EDb+3SRopIwVK0CfQNpEmCeTL+2IQsdXPCSYnzEVJ7M9mvHpmqCn784BsPoQAkMIiGA1P5ZCAG3VBzI9qYlGvfNSN5/5Pvgpv2FmR3X9onHdsvUpErTlfZjrINgTtcSSTLAEIGHKJgI4ymHN7PuBvPCTX7jR9v6egR2bihu6dmixEGFXMNLxG9L+jttocRlRvw/NuA8BV28J7S7YkOyHRq4lAAttO8nLzew6GfdTEyGwEgIi2JXg08WZCJzazL5qZods26OxoNGyqG+jnLwhlG+7gb+/SVe5vnueTSBYtD3820kwk3p/pMeddjH/+LyNFvqxzJeDJeJLoS0bjC4f6b1bk3pq/oN2LuQQOdcQ3OS145eFdK+uITPX2BD5+UfakX+HmY+qZkIgHwERbD5WajkdgahBrJKWs7eZXdHMLmpmaGloSvgWiUImXxKy27+NTp4+4uErE8Hij3xgmzriczTXTbCQvTe34tvEp9snD2kjoNPv+F0xgZfIL8zsWO6COzT/fmpHB/hmyXVNkqu9pvZXaVNw0r/xxXLfv4wMls0FQU9JMFPfseQB1VYIlCIggi1FTO1LESBy+Gdt4YB0LYEx7y3siFSeJ7RVecYuRRt6WhvMwgI8t0Cw72zNjJ/s6HydBEsxCKwFpKkgPD8a5pC14CRtZPfxmhQd/sPcjdm3RNBguU+SLuJkTMwFv+4QTUxkea5Q+AIzN0FZJfPpUmaGbzjJ79vNGT5ZiRCogoAItgqs6tQhgN8V/2sSCgYQBISZOFfwvUFaLK4lQqQqCyuL+pzCODA39pH3Ogn2GW3RhvS8FKt4zJwP39PXT4MPl2Aqgqq8RB8qwVNEFJfMBfr7RBtBnPomQItI7iEhyIkxsgFJglaPdi8RAlUQEMFWgVWdOgRe2eYspj89z8xuXoAQpmA0D6+xEIHM397XLpr8RjoHfj98a14+1aaULFmLdl0ES4oNz5t8jaSwUMwBU3ZNIZDqN+EGXVaKWMHro+27KR3bc8IcYo7tm9FJDMbK8d9mdKsmQqAbARGsZkZNBJhfRJIeY6LWcOSGNA9qzJWYZJPwb4oMdOU/QizUoI15jg8KtWlrPjN9r4NgwfqD7vAExrFUEY/bBX8r/lisFDFwaSoxxvdFxSz8xkkw05PGMybMG8g4CXMzmdLHrtXvQqAYARFsMWS6oACBruhSqgVRHjFHCCCCHJNgXkYjo/7tkERNBZ8ifsYa/tiucayDYCnY8Qo3GHzEPhc3B+8pbfCxf76pv3wqdzE1f6n9G4WKXdRCTtLXbmwc5Oa+wDXC9Ev6z5hQ2CLmv5In+/WxC/W7EJiCgAh2Cmq6JhcBTjChEHwSAm1i9Z6+vtBGyZeEGJPczcwen3Fz7kEKRjKVcsmS/ralCfZQbc5rOmCAqGrMxRBfbSFSGA02CdorZvpoMub3jzdlMc/t2ub4TrvGH0sgYgInlzdHyAdGu05C/u5QgYucPtVGCHQiIILVxKiJAFG/vpjEm0KqxNC98b1SF9dLifZL8AqmacyALPr8O+cUmTnwWJpg40Ym1ye56rNSWCPWHaaAA4UcuiRGGlMFijlSKmjm8V0SeJYTERy1aDZsbNwkQmB2BESws0OqDh0CsQ5sSe5hLEjA4nzGLUF3SYJFc/uay1tFewUnylLWFOoDY6b1VgLIEtLsE4o9eFMy1ZU4uadULtTmO/vriEbuqlIV+45R1pSDvEbpANReCOQgIILNQUltpiIQiwrcxcyemNkZC58vjjBWLCGz20WaLUmwUXt9c1No/0qVnxKNj9Qfv37wvvADD6XcRIJFAybwqVQ4aODD4SKsFV1m6dj3PdrCIOnvRF1zhKJECMyOgAh2dkjVoUMg+rtYgH1O7BBYkZwhZgh6G2RJgqV+egW+AAAJOUlEQVRIgz8BB9M66Us1BG0ZDfCmoXNMwmi0Y+UO8Qmf2V1LJSWsGqVycTN7V7iIVK2x+3MJpwv5M2t/aGYnLh2A2guBHAREsDkoqc1UBDDZ+YL4lDiMNW/7+uaUHWrIJiEtg6jibZClCJZi/J5MqeDESTE1hAMOMPlfIHTOQQb42TFNjwkHCFDjOMnUIhhXaM51RVNPQpnEvrNj45ioyexrJKP1+jSysWfQ70IgGwERbDZUajgBAaI70zFhXI7mEQOX+rolOMlX3aFIwaMnjGEdlyxFsPE+mD8fW+GB8elCaH7DgykYYu2qN9w3BFKHLul+5AQdSiqWyrWb0o4UiUhSks8aA6QoQJKOUCwdh9oLgUEERLCaILUQYG75Avjc5/xN6UK0mByJBDs1pSPnXnO3WYJgCeoh/zOlp6BBktKEyXNOobwhJmBvifhdU+8YkiMit0Re3Jxqcz13AUFSnANbKtGPyiEP3vQ81F9XgBSBWjkaeOk41X7HERDB7vgEqPz4UYMtKfIfTcQP76jQVHn4k7tfgmBjcBNBP9F8O/kB2gtv3Wqo5NkmIVCJIKopUcr3aUpe8h6T5ByY3vUMHORwW/cDfn38+zkSi/6X5NDm9K82QuA/CIhgNRlqIhB9sPjO4oHZffePwTsUjqeA/DbIEgRLHqiv1DTVn9mHJ+bfmKPKCUiktHA04BSJ/k/OgvWFRHL7xM1AMFcSymP6il9D/cQxMEexBkiEwOwIiGBnh1QdOgRWiSKOObQs7mjA2yC1CfZI7ZFy/gAEzlj97Ezg3L4jupfIW8y5qxwccMrmYPpvhjFy7iznz+YKz0xgEiUakwwdJh/7jVHEzFHOFZYIgdkREMHODqk6dAiskgcbzYloTUSyRr9uH+BHCWfQEmlKTeIlpDbBRjMnz8Wh43P4Eck9fnUoIFESKTyGL4c0pJKOtKWu8P5jF7nfow+V6k0U7M+tMx39t8zRcxTcX02FQDYCIthsqNRwAgKrVHJCW8VH56UkSCoek/dcM7vFhGeYckltgsWPyQYkCUf3XWbKQMM1HGrPWas+5aWk+lbOEIgEh+SScAIQpJkraNJooUlKym9yTazkxBzlmEOJEJgdARHs7JCqQ4cAdV59cYiSxZDAGk4+8eY7ToshenVMIAiiaX2aD0FBnLKzhNQm2PcHUnpkINwpz0iqyoHtaUXpelJzKKw/h2ac+uQ0JEzZfu2BYCHaMUHz/VxIq4EcfV7rWB/EABAZnUS1iMcQ0++TERDBToZOF2YgEI8Vw9eGzy1XKC7B2Z9JMA8T2BOr+MT+4nmhmA85KID0kiWkNsFyeAEm4SSlZtYuDB5hZtR/ToKvFNNpTn3fUkyJ+t3HXcSpSZQrJDWrT/C5srHwZQ05B5bTeUo2AGy8mAtJltx4leKk9luOgAh2y1/ghg8fjSMejM5RYWPnuabHIveSHEcfacqCT1k+tOEo5DOiMcc6uXNoeCVQ1yRYiBWC9XJBM/tQyQBDW85ShVB94BCaaxfGK9zmP5cyLw5qUnZ8kBbHC5Ij25UnfYa2vCGBXF5K0r64rus8WCpfUQFLIgRmR0AEOzuk6tAhwPyCDLyptiTik64I6KGggc/F5O+cLYq5j1QP7sNCSYCOP62FdpgU9260M4Kc5hBIf+yINSpWndzd7IuNj/RjAzfHPJob6EOpwUhCp+6Izi15VvysRA4nIXDopSUd9LQlraqvPnBXpDLdkJ7Fu2UTRvASJuUuHy2+XKp7lcg1zQzffBIC57wloKQvtRUCowiIYEchUoMVEaAK0L6ujynBRldpCBT/a2lJO7QkyO7nKz6Dvxxt78cz9kdXz282CjfL7DMeNs5lkP7vM6/vaoaVoMZRgGNntEZTfu4jUJ6RgwJKTMP0jQ+eA9aTMDc5v1YiBKogIIKtAqs6dQigVXKUWZKfmRlm4tx0m3Qd5kE0x4tkoEuuJtGi+BT/lNG+pMm6CRYzKiUHvaDdl+Lpr18XwTKGy7fVonyd4773wcaG82b7DnQfeo/UxKa0pLemMDc5BlEiBKogIIKtAqs6dQigxUCqR3Z/W+VINc4CZVGmDyKMyY1lHhMggymW02XQVObWMtPw102wlC9k85AEE6z3ZU6ZfOskWMYL+aGZU4KRICZ8pfiD2RzhAsBsTEQzG7Wppv6YO3xwg+NxK2zApuCva/ZQBESwe+iL3bDHij6+ktqxG/YoGs6WIvCGlsTT8DEz32FLn0XD3hIERLBb8qK2fJiUyPu6qw6E1kUQ0Nwnv2w5TBp+JQRIDePwCKLMEY7aO03jjyVyWSIEqiEggq0GrToOCBCk5E88eWIoQiHAhEAtBNBWb+c6V3BTLaTV7/9DQASrCbEUAmis5MSmSGAOuia1RlrEUm9gN++DpopvPvmpSUFi3lElTCIEqiIggq0KrzoPCMRqQeQk+hQeASYE5kaAwCiihZM8LFQHm/t+6k8I/AcBEawmw5IIEBlKROhe7qZEBFNIQiIE5kaAqOQ3uk6xoFD+8Y9z30j9CYEuBESwmhdLI0AaBpWIksmOdBqKHCx1lNzSz6v7rQcBqkCRfnS89vbkRp+nSQXieDqJEFgEARHsIjDrJgGBezZHoj3K/Y3zRyljJxECcyDAusYJO1QAS3L3Jhf7cXN0rj6EQC4CIthcpNRubgTiuZ6cb0pRfokQWBWBBzTFRx7sOqHOMycOSYTAogiIYBeFWzdzCBBNzIHqHKKOUOqPaj4HCCUhsAICaK1or2lt4yCFSzTn5RK1LhECiyIggl0Ubt1MCAgBISAEdgUBEeyuvGk9pxAQAkJACCyKgAh2Ubh1MyEgBISAENgVBESwu/Km9ZxCQAgIASGwKAIi2EXh1s2EgBAQAkJgVxAQwe7Km9ZzCgEhIASEwKIIiGAXhVs3EwJCQAgIgV1BQAS7K29azykEhIAQEAKLIiCCXRRu3UwICAEhIAR2BQER7K68aT2nEBACQkAILIqACHZRuHUzISAEhIAQ2BUERLC78qb1nEJACAgBIbAoAiLYReHWzYSAEBACQmBXEBDB7sqb1nMKASEgBITAogiIYBeFWzcTAkJACAiBXUFABLsrb1rPKQSEgBAQAosiIIJdFG7dTAgIASEgBHYFARHsrrxpPacQEAJCQAgsisC/ASd7GxeS+k5VAAAAAElFTkSuQmCC"></image></switch></g></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-8"><g><path d="M 347 190 L 430.63 190" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-12"></path><path d="M 435.88 190 L 428.88 193.5 L 430.63 190 L 428.88 186.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-13"></path></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-14"><g><path d="M 227 190 L 153.37 190" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-14"></path><path d="M 148.12 190 L 155.12 186.5 L 153.37 190 L 155.12 193.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-15"></path></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-20"><g><path d="M 287 210 L 287 230 L 287 225 L 287 238.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-16"></path><path d="M 287 243.88 L 283.5 236.88 L 287 238.63 L 290.5 236.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-17"></path></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-6"><g><rect x="227" y="170" width="120" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-18"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 190px; margin-left: 228px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Юстиц-коллегия</div></div></div></foreignObject><image x="228" y="183.5" width="118" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-11"><g><rect x="437" y="250" width="120" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-19"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 270px; margin-left: 438px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Магистраты</div></div></div></foreignObject><image x="438" y="263.5" width="118" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-29"><g><path d="M 27 190 L 7 190 L 7 245 L 20.63 245" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-20"></path><path d="M 25.88 245 L 18.88 248.5 L 20.63 245 L 18.88 241.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-21"></path></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-30"><g><path d="M 27 190 L 7 190 L 7 405 L 20.63 405" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-22"></path><path d="M 25.88 405 L 18.88 408.5 L 20.63 405 L 18.88 401.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-23"></path></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-31"><g><path d="M 27 190 L 7 190 L 7 285 L 20.63 285" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-24"></path><path d="M 25.88 285 L 18.88 288.5 L 20.63 285 L 18.88 281.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-25"></path></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-32"><g><path d="M 27 190 L 7 190 L 7 325 L 20.63 325" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-26"></path><path d="M 25.88 325 L 18.88 328.5 L 20.63 325 L 18.88 321.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-27"></path></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-33"><g><path d="M 27 190 L 7 190 L 7 365 L 20.63 365" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-28"></path><path d="M 25.88 365 L 18.88 368.5 L 20.63 365 L 18.88 361.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-29"></path></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-13"><g><rect x="27" y="170" width="120" height="40" fill="#fad7ac" stroke="#b46504" pointer-events="all" style="fill: light-dark(rgb(250, 215, 172), rgb(75, 45, 8)); stroke: light-dark(rgb(180, 101, 4), rgb(201, 133, 49));" class="svg-elem-30"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 190px; margin-left: 28px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Специальные суды</div></div></div></foreignObject><image x="28" y="183.5" width="118" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-15"><g><rect x="437" y="60" width="120" height="50" fill="#fad7ac" stroke="#b46504" pointer-events="all" style="fill: light-dark(rgb(250, 215, 172), rgb(75, 45, 8)); stroke: light-dark(rgb(180, 101, 4), rgb(201, 133, 49));" class="svg-elem-31"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 85px; margin-left: 438px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Тайная канцелярия розыскных дел</div></div></div></foreignObject><image x="438" y="71" width="118" height="32" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-22"><g><path d="M 287 285 L 287 305 L 287 300 L 287 313.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-32"></path><path d="M 287 318.88 L 283.5 311.88 L 287 313.63 L 290.5 311.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(rgb(0, 0, 0), rgb(255, 255, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-33"></path></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-19"><g><rect x="227" y="245" width="120" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-34"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 265px; margin-left: 228px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Надворные суды<div>(1719 - 1727)</div></div></div></div></foreignObject><image x="228" y="251" width="118" height="32" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-21"><g><rect x="227" y="320" width="120" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" class="svg-elem-35"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 340px; margin-left: 228px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Нижние суды<div>(до 1722)</div></div></div></div></foreignObject><image x="228" y="326" width="118" height="32" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-23"><g><rect x="27" y="230" width="120" height="30" fill="#d0cee2" stroke="#56517e" pointer-events="all" style="fill: light-dark(rgb(208, 206, 226), rgb(59, 57, 74)); stroke: light-dark(rgb(86, 81, 126), rgb(164, 160, 198));" class="svg-elem-36"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 245px; margin-left: 28px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Кригсрехт</div></div></div></foreignObject><image x="28" y="238.5" width="118" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-25"><g><rect x="27" y="270" width="120" height="30" fill="#d0cee2" stroke="#56517e" pointer-events="all" style="fill: light-dark(rgb(208, 206, 226), rgb(59, 57, 74)); stroke: light-dark(rgb(86, 81, 126), rgb(164, 160, 198));" class="svg-elem-37"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 285px; margin-left: 28px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Для духовенства</div></div></div></foreignObject><image x="28" y="278.5" width="118" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-26"><g><rect x="27" y="310" width="120" height="30" fill="#d0cee2" stroke="#56517e" pointer-events="all" style="fill: light-dark(rgb(208, 206, 226), rgb(59, 57, 74)); stroke: light-dark(rgb(86, 81, 126), rgb(164, 160, 198));" class="svg-elem-38"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 325px; margin-left: 28px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Генеральный<span style="color: light-dark(rgba(0, 0, 0, 0), rgb(237, 237, 237)); font-family: monospace; font-size: 0px; text-align: start; text-wrap: nowrap;">%3CmxGraphModel%3E%3Croot%3E%3CmxCell%20id%3D%220%22%2F%3E%3CmxCell%20id%3D%221%22%20parent%3D%220%22%2F%3E%3CmxCell%20id%3D%222%22%20value%3D%22%D0%94%D0%BB%D1%8F%20%D0%B4%D1%83%D1%85%D0%BE%D0%B2%D0%B5%D0%BD%D1%81%D1%82%D0%B2%D0%B0%22%20style%3D%22rounded%3D0%3BwhiteSpace%3Dwrap%3Bhtml%3D1%3B%22%20vertex%3D%221%22%20parent%3D%221%22%3E%3CmxGeometry%20x%3D%22160%22%20y%3D%22410%22%20width%3D%22120%22%20height%3D%2240%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3C%2Froot%3E%3C%2FmxGraphModel%3E</span></div></div></div></foreignObject><image x="28" y="318.5" width="118" height="17" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdgAAABECAYAAAAiCiQVAAAAAXNSR0IArs4c6QAAE/lJREFUeF7tnQXUPkUVxi92B3YHWKBiodgcsDCwW4+B2BiIWCACiootWKjYih3YjYXdHhMxsbvb/ekM/8tld9/Zd3f2e7/3PPccDuf/vbOzM8/O7jM3ZyuTCAEhIASEgBAQApMjsNXkPapDISAEhIAQEAJCwESwWgRCQAgIASEgBCogIIKtAKq6FAJCQAgIASEggtUaEAJCQAgIASFQAQERbAVQ1aUQEAJCQAgIARGs1oAQEAJCQAgIgQoIiGArgKouhYAQEAJCQAiIYLUGhIAQEAKrj8DzzOy+bpi7mtkHFwz79mZ2lGtzkJkdsPpTXZ8RimDX51lqJkJACKwvAvuZ2cFuenuZ2eELpguh7u/a3MfMjlhfiFZvZiLY1XsmGpEQEAJCICJwAzN7j/vjMWa2cw9MfNu/YmbbuzY7mNmXBe18CIhg58OaOz3TzB488S1fbGb3mrhPdScEhMBqIXA6M/uxmW3thnUXM3tVxzAfYmbPcL9918y2Wa0prf9oRLDzPmMR7Lx4625CYJ0QeLiZHeom9K+GcJ9tZi8xs2+b/a8yHxrrvRsy3jNM/G5m9vJ1AmMzzEUEO+9TEsHOi7fuJgTWCYFTmNmbzWz3gZM60sz2GHiNmk+AgAh2AhAHdBEJ9u9mdvSA69uavt/Mnj+yD10uBITA5kDgVCkSeB8zw2zcJ39otNoDzezpzTX/2RzTW69RimDnfZ6RYH/VRAKec94h6G5CQAisAQLnMLPbNYFPV0++1bOmOf3GzL5lZh8zszeYGSQr2SAERLDzAi+CnRdv3U0ICAEhsGEIiGDnhV4EOy/eupsQEAJCYMMQEMHOC/2cBHs2M7upmd3QzK5gZudKIf6YjH5pZseZ2fvM7O0pArEUCcxOt3aNn2Zm+INKBJ/RX0LDK5rZF0suNjP8T+QDMqdrmtl5kon9n2b2i5TG8GEze1fT7hOFfdKMKMy7u/aPNrMnun9f38zuYGZXNbMLN5GcZzCz3zaVdX6aTHFvSlgOuOWJTc9oZrulOV3WzC5mZmc2s9OY2e/N7Ndm9iUz+3hKyfj5MjdJ17wz3WtEF9b1vBg7eZdemMcfx9wsXDv2Hk9q1t8jXJ9vbdbeLTrGN2adL5rymVpMt5czs6+2XBjn/LMm5uK8i26Qfj+tmX2zWd8Xce2JPOY9ksyAgAh2BpDdLeYgWEhsbzPbt8mDy36Zvln+u/HhvMLMHpMIahEiYz48YwiWsm+PN7NtFw0w/f7RRPyfLmhPqgOVcbI8JeHHh4w8w10K+vhASo8g37BEiAjlOT0q5Db2XUtQ3HPMjA3AX0tuEtp8w8wutcR1/hIR7EgAzWwugn1k2CgychHs+OdX3IMIthiqSRrWJlgCH9BId1pitGhGaIdoS30yN8GeMpWE83VYS6eHZnvPtIHouwZC9Vr4c1OJuWPN7JKlN0sblGub2fELrkE7Jd3ixgP69k0/lUj/zwOu513HeoBWM0ZEsGPQ+/+1cxAsFqvvNBHEZwnDFcGOf37FPYhgi6GapGFNgsXUiLa2XRgppdFIMOejTNQyL9ylk2ns5ik5PV+C2XPH9GJ2TXhugn1pQ1gkyXthM/CiplQc5uCfJHMqZjBMubTFhJuF9ATMu6/reYKYg9ntZ3mZmYHnbdIfMH2+0cy+lkyeRH4TvXlHMzt7C95XSppC1y0h8PuFH09Ihdk/b2bMj80BGyb6umsz3wuG9q9Mfy9dmBdqNhs/CI0vn0zrXX2wVjAxehHBliLe3W4Ogo2HA+TRiGDHP7/iHkSwxVBN0rAmwZILSzFvTyyYH9HOMAO3CX5M/Ifndj9CWphEu/Lm5iRYiPE1YeCvT0nzXekH50/aIf7SLPicL5N8z204HJJMtfm37ye/FR8jSltCiG14YEKGeK8ROkXbfkEH5mxuIGpMxFnekVIuujTS0zemcQj1VuH5Qr6l/uvrpg1J7oJ7sYnoE/z4pH14EcEuAK3g59oEy1pnU4j1J4oItuABTdVEBDsVkmX91CJYPrSfC0OIgTpdI4SIyJk7tWtAEBPE2yZzESymTDQuT/4ELxG41bVhyOOFGDB1E5CU5bAmYOhBHXPCt4sPOkoJhmizEKYfJ8EqBK20yZOTfzf/9qc0ToKZ+gStHOL3edP05TXvvusxlVO3OgsfYDTYPhHBbkFnSDDfAlirm4h9MFu2WuR3QQS76OlM+LsIdkIwC7qqRbB8OPmAZkGruXIBEeX2aFvUL83CC3qTjvnMRbCYRX3t1L+lCFtMwiWC+fbVriGa2PkaTZV+orQRLMFKaJv/KLgZkalEqHpBiyCoKMoT0ikoEDL/cabnLQvuQZNoWv5kMlWXXB7n+JaC+4pgtyC7WQj2eiGinffgWW4DKIIteVsmaiOCnQjIwm5qECyaHuSBGTELKSf4EUuFNJ4vuMa8hJARqS9R5iJYonJ99C6+2HuUTiilIpBGgx8zS5dm3kawJdpr7veiLYFND0wRv4uGzDtYWsaOTZA3PaOd+BSMvnux2eBjm+WpZkbx+D4RwW5BZzMQLG4H3uNsmcgbMILbcllFEeyiN3LC30WwE4JZ0FUNgr2amfEiZeFjjW9wSL4k6wDNkLzSLGiwaLJR5iBYfEe/Cz5CysLhfx0ir02+zXxNTr+JfbQRLJuORRHVvp/vBbJD23zAkMEWtCXoymOAHzpGiXZ1Q5Cb90uXHL4tgt1cBMuxlS90C4BAPAIfIdUsItiCF22qJiLYqZAs66cGweJXxASUhTMjY8Rpyeg4zJk0nSz7NX5ZzJlR5iBYduCR3C6xILq5bY4EeRHAlIWDEYg0jhIJFjMyAUD+w7QIQ4p2YJ7Lgul310UXDfydogik92TBf0vATIkQ6OW1eawDH1pwoQh2C0CrrsGyDjiyLhehIDjwTsmy5YPnRLAlb8tEbUSwEwFZ2E0NguVQZQ5XzsJL5v2phUOzh6UAotyeAgsc6BxlDoIlfQgfoRc06iF5n1wLwbFRyNK1+YgES7H0oQUZ0Bz8wfclQUSM6yqJmAmKYhOBRkoFpLZ8VfJn+S1LKcFScIQULC9swsCjT0SwW9BZdYI92K11ipCwfnEhxIhlEWzpF3GCdiLYCUAc0EUNgo1l/gYMp7cpqSNE7EaJBDv2fm1pH+Sy4nOdWroIKRIsVaCuM/DmHAn2UHcNJmPKHnYJ5l4sBEMKWcS+SgkW0zAm4iyl140lWO4TBRcGPkHM27gliMA+Jh3buOjkl7ZSiQMf00maDymVSLAblbS8MBfIjHFTwpC5UNKSzWFMb/LXTZ2mw2aJTWGOw8Bqk6PiRbBjVsjIa0WwIwEceHkNgiWdpjQKdchwu0hmDoKNZu8h417Uljqs0fQbCRZz+Y0WdRR+j31gkqWaThQCUSiSMSRgq2sopUSJJYJymFlI6UJzXiRjCXZR//53rBNoiZBDVxnIjSTYIXOBiA9PZ7FSTzrK1ARLtD1R9wiBfVhCcg1oEeyQJzdxWxHsxIAu6K4GwVKh6LYVpkE0Ivm1UeYg2PsXRuAuM23MpfGjF8mRfNuhZQzRRok8ztJVlD0WnKc9VZuI8kWjIoeWjySEw9+9LOuD9eZD+iutAjUnweZ5fiSliLUdErBZCDbPhXcInz8V1LxMSbCk433GVWTbM23g8v1EsMt8JSa6RgQ7EZCF3dQg2Oj7I3ClpDh94ZAXEiwl2Q4q7Ay/IqZTL20m4jsnEsjtKCyB5lmazlI4nBObRYLFZLnzwE6iiZg6sGgSXvg3ZkRf1AM/Gdry1wvutyzBUm3KV4Ei+Cvm7bbdfizBtp2mQ4Q4f98m+ciplEX1LS8cvsDfo7QRLP2U+uYxm5I+lWWIibjNB8tcIDBcAVTKYszRLcDGifXsZQzBxjgCKq9xb4TAQDbFvhCLCLbgxarVRARbC9n2fmsQbCxUTy1bdrW1ZI4gJwKaOLTAC8E/i3x0y845EmyX9t7Xf9zoUOyDzYOXqEnyIYQ0SsiVfjhR6CjXYamJOJ6ic7MWfNvmVoNg432o5YzWCg5Z0NwpwhH9mKt+XB3Vtogmj6UzLx7ypMcQrN+44RryFdeIYid/3IsIdtmvwgTXiWAnAHFAFzUINhYfwBzly+kNGF5R0zkIlsCfWGSe1J143mjRgAsaRYIlBxdyGSLvDSlAR5vZ7qEDzqglNzHL25rCAERMl0qsGFVCsHz02Zj42scU/v9RwU3nIFiGwfm+7w7joQ41ecxeVp1gGSub28+GcceiI2MINkenYwXBGpKtJG3rjWGIYAsWeq0mIthayLb3W4Ng0ZLQWr1gpoqm2KlmOgfBsi6pzetJjqCgGpHF4NJWaKIkjcVjSmlFbx5sqxOMORhyy/LYpiA7Wm2pkMfrc2tLCJYDHag1nYXI3WiS7br/XARL+hGBTf57RI1lMNxsBMt4SYnyZzHHqlljCJbCERSXITWPFD2ECGc2H0QSRxHBlr5dFdqJYCuA2tNlDYLFNwkZ+fxIclrxCdaQOQiWcRNo5CN5u3boU8yxjWD3aIrwH1nYOWT8w9CWyF1yib1g8vSbBqwPvvJO3+2obUwAlNdESwg2ar08v9KguLkIlnkzF3/MoE81ybhsBg2WsXIogz9o4ohw0tUYgiU+ANMwpuKtEzAUmvG58H4diWALX+IazUSwNVDt7rMGwXK3eFTdcU1Jve07Ctt3jQ6fJx85TJ38FwkjXzcXwcaj6vDLUYyhrYB+15wOaHxiaHB5TpyN2yZtBItfMAePLFolezUfOwJzspAGREUdUnW8xHKKkN+hizpPAV58WKNvj3SQRQeox5rOnEPLeimRuQiWzWGM7N7baWibiWAJfGIufZuFMQSLKZ13IBMqm7Zt0ya77ZmKYEtWeqU2IthKwHZ0W4tgd2g5F3RI5ZlIEJgRKSLfdpLMXASL2RCTqq+PTBI/JtK2E3Ei5OR5Yhr1BNTlx+06rq7v2L58P0oq4gvzRfe7Irn5OOJvzEJAjC9P2bZseEchb/x4pO/kUni5bVvaUf6NAxvYKPlzQRlnPHi96y2Yi2Dbzv1tC9jZDBpsPM0GbKM/eQzB4oOlShPvBwLR+lKp8VmKYOf9xp/kbiLYecGvRbDMgnQZDvr2gu9n/57EfQIl0KJIs/Froe8kmLkIlnlQ4D8GukBKVHrqO7YOExpH+BGhmqXPNBoJllOEKBKBRo85FXN1m/DxouZrrHiFaZtiFVH2aWocE/XthdQb0kXahNrBFBEgJ5fNzm5mhh/WS9ehDLThw+vPwGWDcq0BS34Ogr1Aqn7kNyjgz9/jBm/VCZbnheVjO4cxawift9fQxxCsf3z4XMGk70hFEeyABT91UxHs1Ij291eTYDFJkXDuX25Gg7ZCLh4RrBQ/wIfHC0/5PHbW8bgzzKkQRFfO6ZwEy/jbSkFShIB0Fcj2hKTREjmNhorWuWN4DOQOkh/YdcJQJFjmSJpILpfIqULkkpJOQwALH1JMz2xoOKrOS1+RCnxm+Od8gX5M32ionJJDZC/HihFFDZmykci+9exXh3x8lDjuAMbB/xkzqT/khbIxIIjKv+OUZ2QepVKDYNGmSblCC2OdsQHwGyHGRk1nfzh8Hu+qESzvEs+HSF4KSpAH6y0ujLstWGsqgiUCnUj0PhHBlq72Cu1EsBVA7emyJsFyWz78BAP5VJAhM0Q7QqNqqyGb+5mbYPkgH9ZsDvAdLiMQGmbYtgjL3F8kWDRKzOZsSoacTEQQEqTcV4d2mTrLrJtc55hIavpok2N7nn3XSUJ9mI4l2GWeF8F5bCbaZCMJdpm58KwIlvOFH+hnCoItPa1JBLvMk5voGhHsREAWdlObYBkGGhB+mX1bNIOuYaLZEbUJkcWPQbxmboLN90cjI6Wl9JQb0j7Qgihf2FYP1s8rEmyOWCYSlIPrS6o6oYFy/mvbIfURQ6KH0VoXBSiRj8tzJAo1C9oStYR91Hj+rYtgCe5ik4EFY4jMSbCY/DGhY23pks1CsOSis+6IEG+zBI0lWN5RLDIl5xWLYIes+InbimAnBnRBd3MQbB4CZjj8c5iuSH7Hp4iGywsP4RyfXlB8hZyc01VgfVUIlnGgzRJEAlngSyTgh3mRqoTZGFMwAUfs7jnRpPTQ+UiwRFRT7SgLpScxp++UTMKY49FSMU9Tqg4/MdruEMFMj2mXoC1MwpAZvjRIEEIkIIo0n7bNAdHUByZtmefMBx3tmaCux6VBQM48Y0zpHP6+TBWsWgTLWmNeWBfI4casjhm+z5fItFaRYAm4Yy4Ek1G9i/cJC0hfIN5YgmXj6I9G7Ft3Itghb+XEbUWwEwOq7jYlApFgu47q25ST06CFgBDYGAREsBuDu+66WgiIYFfreWg0QmAtEBDBrsVj1CRGIiCCHQmgLhcCQuDkCIhgtSqEwMlrEctErFUhBITAaAREsKMhVAdrgIA02DV4iJqCEFg1BESwq/ZENJ6NQEAEuxGo655CYM0REMGu+QPW9IoQEMEWwaRGQkAIDEFABDsELbVdVwREsOv6ZDUvIbCBCIhgNxB83XplEBDBrsyj0ECEwPogIIJdn2epmSyPgAh2eex0pRAQAh0IiGC1NISAEBACQkAIVEBABFsBVHUpBISAEBACQkAEqzUgBISAEBACQqACAiLYCqCqSyEgBISAEBACIlitASEgBISAEBACFRAQwVYAVV0KASEgBISAEBDBag0IASEgBISAEKiAgAi2AqjqUggIASEgBISACFZrQAgIASEgBIRABQREsBVAVZdCQAgIASEgBESwWgNCQAgIASEgBCogIIKtAKq6FAJCQAgIASEggtUaEAJCQAgIASFQAQERbAVQ1aUQEAJCQAgIgf8CQkrlgfuo4RQAAAAASUVORK5CYII="></image></switch></g></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-27"><g><rect x="27" y="350" width="120" height="30" fill="#d0cee2" stroke="#56517e" pointer-events="all" style="fill: light-dark(rgb(208, 206, 226), rgb(59, 57, 74)); stroke: light-dark(rgb(86, 81, 126), rgb(164, 160, 198));" class="svg-elem-39"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 365px; margin-left: 28px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Полковой</div></div></div></foreignObject><image x="28" y="358.5" width="118" height="17" xlink:href="data:image/png;base64,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"></image></switch></g></g></g><g data-cell-id="IUbEIiO6durk_TbwgAcF-28"><g><rect x="27" y="390" width="120" height="30" fill="#d0cee2" stroke="#56517e" pointer-events="all" style="fill: light-dark(rgb(208, 206, 226), rgb(59, 57, 74)); stroke: light-dark(rgb(86, 81, 126), rgb(164, 160, 198));" class="svg-elem-40"></rect></g><g><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 405px; margin-left: 28px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: &quot;Helvetica&quot;; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Для крепостных крестьян</div></div></div></foreignObject><image x="28" y="391" width="118" height="32" xlink:href="data:image/png;base64,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"></image></switch></g></g></g></g></g></g></svg>
`,Q=`/***************************************************
 * Generated by SVG Artista on 1/14/2025, 12:47:39 AM
 * MIT license (https://opensource.org/licenses/MIT)
 * W. https://svgartista.net
 **************************************************/

svg .svg-elem-1 {
  stroke-dashoffset: 71.25999450683594px;
  stroke-dasharray: 35.62999725341797px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s;
}

svg.active .svg-elem-1 {
  stroke-dashoffset: 35.62999725341797px;
  fill: transparent;
}

svg .svg-elem-2 {
  stroke-dashoffset: 50.957427978515625px;
  stroke-dasharray: 25.478713989257812px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s;
}

svg.active .svg-elem-2 {
  stroke-dashoffset: 25.478713989257812px;
  fill: transparent;
}

svg .svg-elem-3 {
  stroke-dashoffset: 361.260009765625px;
  stroke-dasharray: 180.6300048828125px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s;
}

svg.active .svg-elem-3 {
  stroke-dashoffset: 180.6300048828125px;
  fill: transparent;
}

svg .svg-elem-4 {
  stroke-dashoffset: 50.957427978515625px;
  stroke-dasharray: 25.478713989257812px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s;
}

svg.active .svg-elem-4 {
  stroke-dashoffset: 25.478713989257812px;
  fill: transparent;
}

svg .svg-elem-5 {
  stroke-dashoffset: 684px;
  stroke-dasharray: 342px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s;
}

svg.active .svg-elem-5 {
  stroke-dashoffset: 342px;
  fill: transparent;
}

svg .svg-elem-6 {
  stroke-dashoffset: 91.260009765625px;
  stroke-dasharray: 45.6300048828125px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s;
}

svg.active .svg-elem-6 {
  stroke-dashoffset: 45.6300048828125px;
  fill: transparent;
}

svg .svg-elem-7 {
  stroke-dashoffset: 50.957427978515625px;
  stroke-dasharray: 25.478713989257812px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s;
}

svg.active .svg-elem-7 {
  stroke-dashoffset: 25.478713989257812px;
  fill: transparent;
}

svg .svg-elem-8 {
  stroke-dashoffset: 684px;
  stroke-dasharray: 342px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s;
}

svg.active .svg-elem-8 {
  stroke-dashoffset: 342px;
  fill: transparent;
}

svg .svg-elem-9 {
  stroke-dashoffset: 86.260009765625px;
  stroke-dasharray: 43.1300048828125px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.96s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.96s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s;
}

svg.active .svg-elem-9 {
  stroke-dashoffset: 43.1300048828125px;
  fill: transparent;
}

svg .svg-elem-10 {
  stroke-dashoffset: 50.957427978515625px;
  stroke-dasharray: 25.478713989257812px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.08s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.08s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s;
}

svg.active .svg-elem-10 {
  stroke-dashoffset: 25.478713989257812px;
  fill: transparent;
}

svg .svg-elem-11 {
  stroke-dashoffset: 704px;
  stroke-dasharray: 352px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s;
}

svg.active .svg-elem-11 {
  stroke-dashoffset: 352px;
  fill: transparent;
}

svg .svg-elem-12 {
  stroke-dashoffset: 171.260009765625px;
  stroke-dasharray: 85.6300048828125px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3199999999999998s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.9000000000000001s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3199999999999998s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.9000000000000001s;
}

svg.active .svg-elem-12 {
  stroke-dashoffset: 85.6300048828125px;
  fill: transparent;
}

svg .svg-elem-13 {
  stroke-dashoffset: 50.957427978515625px;
  stroke-dasharray: 25.478713989257812px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.44s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.44s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2s;
}

svg.active .svg-elem-13 {
  stroke-dashoffset: 25.478713989257812px;
  fill: transparent;
}

svg .svg-elem-14 {
  stroke-dashoffset: 151.260009765625px;
  stroke-dasharray: 75.6300048828125px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.56s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.1s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.56s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.1s;
}

svg.active .svg-elem-14 {
  stroke-dashoffset: 75.6300048828125px;
  fill: transparent;
}

svg .svg-elem-15 {
  stroke-dashoffset: 50.957427978515625px;
  stroke-dasharray: 25.478713989257812px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.68s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.2s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.68s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.2s;
}

svg.active .svg-elem-15 {
  stroke-dashoffset: 25.478713989257812px;
  fill: transparent;
}

svg .svg-elem-16 {
  stroke-dashoffset: 81.260009765625px;
  stroke-dasharray: 40.6300048828125px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7999999999999998s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.3s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7999999999999998s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.3s;
}

svg.active .svg-elem-16 {
  stroke-dashoffset: 40.6300048828125px;
  fill: transparent;
}

svg .svg-elem-17 {
  stroke-dashoffset: 50.957427978515625px;
  stroke-dasharray: 25.478713989257812px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.92s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.4000000000000004s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.92s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.4000000000000004s;
}

svg.active .svg-elem-17 {
  stroke-dashoffset: 25.478713989257812px;
  fill: transparent;
}

svg .svg-elem-18 {
  stroke-dashoffset: 644px;
  stroke-dasharray: 322px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.04s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.5s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.04s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.5s;
}

svg.active .svg-elem-18 {
  stroke-dashoffset: 322px;
  fill: transparent;
}

svg .svg-elem-19 {
  stroke-dashoffset: 644px;
  stroke-dasharray: 322px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.16s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.6s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.16s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.6s;
}

svg.active .svg-elem-19 {
  stroke-dashoffset: 322px;
  fill: transparent;
}

svg .svg-elem-20 {
  stroke-dashoffset: 181.25999450683594px;
  stroke-dasharray: 90.62999725341797px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.28s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.7s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.28s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.7s;
}

svg.active .svg-elem-20 {
  stroke-dashoffset: 90.62999725341797px;
  fill: transparent;
}

svg .svg-elem-21 {
  stroke-dashoffset: 50.957427978515625px;
  stroke-dasharray: 25.478713989257812px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.4s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.8s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.4s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.8s;
}

svg.active .svg-elem-21 {
  stroke-dashoffset: 25.478713989257812px;
  fill: transparent;
}

svg .svg-elem-22 {
  stroke-dashoffset: 501.260009765625px;
  stroke-dasharray: 250.6300048828125px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.52s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.9000000000000004s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.52s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.9000000000000004s;
}

svg.active .svg-elem-22 {
  stroke-dashoffset: 250.6300048828125px;
  fill: transparent;
}

svg .svg-elem-23 {
  stroke-dashoffset: 50.957427978515625px;
  stroke-dasharray: 25.478713989257812px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.6399999999999997s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.6399999999999997s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3s;
}

svg.active .svg-elem-23 {
  stroke-dashoffset: 25.478713989257812px;
  fill: transparent;
}

svg .svg-elem-24 {
  stroke-dashoffset: 261.260009765625px;
  stroke-dasharray: 130.6300048828125px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.76s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.1000000000000005s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.76s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.1000000000000005s;
}

svg.active .svg-elem-24 {
  stroke-dashoffset: 130.6300048828125px;
  fill: transparent;
}

svg .svg-elem-25 {
  stroke-dashoffset: 50.957427978515625px;
  stroke-dasharray: 25.478713989257812px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.88s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.2s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 2.88s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.2s;
}

svg.active .svg-elem-25 {
  stroke-dashoffset: 25.478713989257812px;
  fill: transparent;
}

svg .svg-elem-26 {
  stroke-dashoffset: 341.260009765625px;
  stroke-dasharray: 170.6300048828125px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.3s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.3s;
}

svg.active .svg-elem-26 {
  stroke-dashoffset: 170.6300048828125px;
  fill: transparent;
}

svg .svg-elem-27 {
  stroke-dashoffset: 50.957427978515625px;
  stroke-dasharray: 25.478713989257812px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.12s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.4000000000000004s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.12s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.4000000000000004s;
}

svg.active .svg-elem-27 {
  stroke-dashoffset: 25.478713989257812px;
  fill: transparent;
}

svg .svg-elem-28 {
  stroke-dashoffset: 421.260009765625px;
  stroke-dasharray: 210.6300048828125px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.2399999999999998s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.5s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.2399999999999998s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.5s;
}

svg.active .svg-elem-28 {
  stroke-dashoffset: 210.6300048828125px;
  fill: transparent;
}

svg .svg-elem-29 {
  stroke-dashoffset: 50.957427978515625px;
  stroke-dasharray: 25.478713989257812px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.36s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.6000000000000005s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.36s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.6000000000000005s;
}

svg.active .svg-elem-29 {
  stroke-dashoffset: 25.478713989257812px;
  fill: transparent;
}

svg .svg-elem-30 {
  stroke-dashoffset: 644px;
  stroke-dasharray: 322px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.48s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.7s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.48s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.7s;
}

svg.active .svg-elem-30 {
  stroke-dashoffset: 322px;
  fill: transparent;
}

svg .svg-elem-31 {
  stroke-dashoffset: 684px;
  stroke-dasharray: 342px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.5999999999999996s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.8s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.5999999999999996s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.8s;
}

svg.active .svg-elem-31 {
  stroke-dashoffset: 342px;
  fill: transparent;
}

svg .svg-elem-32 {
  stroke-dashoffset: 81.260009765625px;
  stroke-dasharray: 40.6300048828125px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.7199999999999998s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.9000000000000004s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.7199999999999998s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 3.9000000000000004s;
}

svg.active .svg-elem-32 {
  stroke-dashoffset: 40.6300048828125px;
  fill: transparent;
}

svg .svg-elem-33 {
  stroke-dashoffset: 50.957427978515625px;
  stroke-dasharray: 25.478713989257812px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.84s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.84s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4s;
}

svg.active .svg-elem-33 {
  stroke-dashoffset: 25.478713989257812px;
  fill: transparent;
}

svg .svg-elem-34 {
  stroke-dashoffset: 644px;
  stroke-dasharray: 322px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.96s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.1000000000000005s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.96s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.1000000000000005s;
}

svg.active .svg-elem-34 {
  stroke-dashoffset: 322px;
  fill: transparent;
}

svg .svg-elem-35 {
  stroke-dashoffset: 644px;
  stroke-dasharray: 322px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.08s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.2s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.08s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.2s;
}

svg.active .svg-elem-35 {
  stroke-dashoffset: 322px;
  fill: transparent;
}

svg .svg-elem-36 {
  stroke-dashoffset: 604px;
  stroke-dasharray: 302px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.2s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.3s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.2s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.3s;
}

svg.active .svg-elem-36 {
  stroke-dashoffset: 302px;
  fill: transparent;
}

svg .svg-elem-37 {
  stroke-dashoffset: 604px;
  stroke-dasharray: 302px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.32s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.4s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.32s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.4s;
}

svg.active .svg-elem-37 {
  stroke-dashoffset: 302px;
  fill: transparent;
}

svg .svg-elem-38 {
  stroke-dashoffset: 604px;
  stroke-dasharray: 302px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.4399999999999995s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.5s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.4399999999999995s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.5s;
}

svg.active .svg-elem-38 {
  stroke-dashoffset: 302px;
  fill: transparent;
}

svg .svg-elem-39 {
  stroke-dashoffset: 604px;
  stroke-dasharray: 302px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.56s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.6000000000000005s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.56s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.6000000000000005s;
}

svg.active .svg-elem-39 {
  stroke-dashoffset: 302px;
  fill: transparent;
}

svg .svg-elem-40 {
  stroke-dashoffset: 604px;
  stroke-dasharray: 302px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.68s,
                        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.7s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 4.68s,
                fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4.7s;
}

svg.active .svg-elem-40 {
  stroke-dashoffset: 302px;
  fill: transparent;
}
`;class z extends g{constructor(){super();i(this,"html");this.style="state_bodies",this.html=document.createElement("div"),this.html.innerHTML=`
        <div class="state_authorities_container">
            <div class="state_authorities_image">
                <div class="state_background_opacity">
                    <a class="back" href="/#themes">Назад</a>
                    <div class="main_state_text">
                        <h2>Создание новых органов управления</h2>
                        <br>
                        <p>1700-1725 годы</p>
                        <br>
                        <p>
                            Пётр I оставил после себя полностью преображённую систему 
                            государственного правления. Между тем она во многом отвечала 
                            нуждам военного времени, которые требовали больших материальных 
                            затрат и мобилизации населения.
                        </p>
                    </div>
                </div>
        </div>
        <div class="state_main_content">
            <div class="state_authorities">
                <h1>Органы управления</h1>
                <br>
                <div class="authorities central">
                    <div class="img img-1">
                        <div class="shadow_container">
                            <div class="text-zagolovok">
                                <h2>Центральные органы управления</h2>
                            </div>
                        </div>
                    </div>
                        <div class="definition">
                            <p class="note">Отвечали за реализацию законов и управление внутренними и 
                                внешними делами государства.
                            </p>
                        </div>
                    <div class="text">
                        <div class="auth-text">
                            <div class="img img-5">

                            </div>
                            <div>
                                <h2><span class="red bad opacity">Царь (император)</span></h2>
                                <p>
                                    Верховный правитель, в руках которого сосредоточивалась законодательная, исполнительная и судебная власть.
                                </p>
                            </div>
                        </div>
                        <div class="border_line"></div>
                        <div class="auth-text rev">
                            <div>
                                <h2><span class="blue bad opacity">Правительствующий сенат <br>(1711 - 1722)</span></h2>
                                <p>
                                    Высшее правительственное учреждение, 
                                    которое обладало законодательными, распорядительными и судебными функциями, 
                                    а также контролировало работу государственного аппарата в центре и на местах.
                                    <br><br>
                                    В <b>1718—1722 гг</b>. <span class="blue opacity">Сенат</span> был <b>реформирован</b>. 
                                    В частности, его членами стали все
                                    <b>президенты коллегий</b>. Была введена должность <b>генерал-прокурора</b>.
                                </p>
                            </div>
                            <div class="img img-6">

                            </div>
                        </div>
                        <div class="border_line revers"></div>
                        <div class="auth-text">
                            <div class="img img-7">

                            </div>
                            <div>
                                <h2><span class="yellow bad opacity">Святе́йший прави́тельствующий сино́д <br>(1721 - 1917)</span></h2>
                                <p>
                                    Высший орган церковно-государственного управления Русской церковью в синодальный период. 
                                    Святейший синод был высшей административной и судебной инстанцией Русской церкви.
                                </p>
                            </div>
                        </div>
                        <div class="border_line"></div>
                        <div class="auth-text rev">
                            <div>
                                <h2><span class="green bad">Тайная канцелярия <br>(1718 - 1762)</span></h2>
                                <p>
                                    Орган политического сыска и суда по делам чрезвычайной важности в России образованный в 1718 году.
                                    Занималась делами о государственных преступлениях.
                                </p>
                            </div>
                            <div class="img img-8">

                            </div>
                        </div>
                        <div class="border_line revers"></div>
                        <div class="auth-text">
                            <div class="img img-9">

                            </div>
                            <div>
                                <h2><span class="brown bad">Коллегии <br> (1717 - 1802)</span></h2>
                                <p>
                                    Высшие органы отраслевого управления в Российской империи, 
                                    в основе работы которых лежал коллегиальный (совместный) принцип управления.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="graph-map">
                        <div class="graph-name">
                            <h2>Центральные органы управления</h2>
                        </div>
                        <div class="graph svg-1">
                            ${y}
                        </div>
                    </div>
                </div>
                <div class="authorities local">
                    <div class="img img-2">
                        <div class="shadow_container">
                            <div class="text-zagolovok">
                                <h2>Местные органы управления</h2>
                            </div>
                        </div>
                    </div>
                    <div class="definition">
                        <p class="note">Отвечали за исполнение указов центральной власти и управление местными делами.</p>
                    </div>
                    <div class="text">
                        <div class="auth-text">
                            <div class="img img-10">

                            </div>
                            <div>
                                <h2><span class="blue-2 bad">Губернаторы</span></h2>
                                <p>
                                    <b>Командовали</b> расположенными в <span class="blue-2">губернии</span> войсками и в то же 
                                    время были <b>главными</b> начальниками <b>гражданского управления</b>.
                                    <br><br>
                                    В <b>1708 году</b> вся территория <b>России</b> была разделена на <b>восемь</b> <span class="blue-2">губерний</span>. Во главе каждой стоял назначавшийся царем  
                                    <span class="blue-2">губернатор</span>, в руках которого была сосредоточена вся <b>военная</b> и <b>гражданская</b> власть.
                                </p>
                            </div>
                        </div>
                        <div class="border_line"></div>
                        <div class="auth-text rev">
                            <div>
                                <h2><span class="red bad">Магистраты</span></h2>
                                <p>
                                    Выборные органы местного управления городского населения.
                                    <br><br> 
                                    Управление ими осуществлял <b>созданный в 1720 году</b> в Петербурге <span class="red">главный Магистрат</span>, 
                                    которому <b>были подчинены</b> <span class="red">местные магистраты</span> во главе с <b>бурмистрами</b> 
                                    и <b>ратманами</b>, 
                                    избираемыми от городского населения.
                                </p>
                            </div>
                            <div class="img img-11">

                            </div>
                        </div>
                    </div>
                    <div class="graph-map map-2">
                        <div class="graph-name">
                            <h2>Местные органы управления</h2>
                        </div>
                        <div class="graph svg-2 svg-1 ">
                            ${q}
                        </div>
                    </div>
                </div>
                <div class="authorities judicial">
                    <div class="img img-3">
                        <div class="shadow_container">
                            <div class="text-zagolovok">
                                <h2>Судебные органы</h2>
                            </div>
                        </div>
                    </div>
                    <div class="definition">
                        <p class="note">Занимались разрешением споров и наказанием правонарушителей</p>
                    </div>
                    <div class="text">
                        <div class="auth-text">
                            <div class="img img-12">

                            </div>
                            <div>
                                <h2><span class="brown bad">Коллегии</span></h2>
                                <p>
                                    <span class="brown"><b>Канцелярия юстиции</b></span> - занималась <span class="brown">судебными</span> делами, включая <b>гражданские</b> и <b>уголовные</b> дела.<br>
                                    <br>
                                    <span class="brown"><b>Юстиц-коллегия</b></span> - контролировала <span class="brown">суды</span> и являлась высшей <b>апелляционной инстанцией</b>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="graph-map map-2">
                        <div class="graph-name">
                            <h2>Судебные органы управления</h2>
                        </div>
                        <div class="graph svg-3 svg-1 ">
                            ${Y}
                        </div>
                    </div>
                </div>
                <div class="authorities voen">
                    <div class="img img-4">
                        <div class="shadow_container">
                            <div class="text-zagolovok">
                                <h2>Военные органы</h2>
                            </div>
                        </div>
                    </div>
                    <div class="definition">
                        <p class="note">Организация и управление армией</p>
                    </div>
                    <div class="text">
                        <div class="auth-text">
                            <div class="img img-12">

                            </div>
                            <div>
                                <span class="brown bad"><h2>Коллегии</h2></span>
                                <p>
                                    <span class="brown"><b>Военная коллегия</b></span> - управление сухопутными войсками <b>Российской империи</b>, разработка и 
                                    утверждение <b>военных уставов</b>, инструкций и <b>правил</b> службы.
                                    <br>
                                    <br>
                                    <span class="brown"><b>Адмиралтейская коллегия</b></span> - организация и управление <b>морскими войсками</b> и <b>флотом</b>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style id="graph_animation">

            </style>
        </div>
        `}render(){const t={"svg-1":B,"svg-2":S,"svg-3":Q},a=document.querySelector("main");if(n(this.style),a){a.innerHTML=this.html.innerHTML;const s=document.querySelectorAll(".authorities"),r=document.getElementById("graph_animation");console.log(r),s.forEach(A=>{const l=A.querySelector(".graph");l&&A.addEventListener("click",()=>{r.innerHTML="",r.innerHTML=t[l.classList[1]]})})}}}class J extends g{constructor(){super();i(this,"html");this.style="state_reforms",this.html=document.createElement("div"),this.html.innerHTML=`
        <div class="state_authorities_container">
            <div class="state_authorities_image">
                <div class="state_background_opacity">
                <a class="back" href="/#themes">Назад</a>
                    <div class="main_state_text">
                        <h2>Реформы</h2>
                        <br>
                        <p>1696 по 1725 годы</p>
                        <br>
                        <p>
                            Реформы Петра I в области госуправления имели очень прогрессивный характер. 
                            Были уничтожены старые учреждения, созданы новые, Россия превратилась в империю, 
                            а Петр - в императора, система управления имела четкую структуру, а положение каждого 
                            человека во многом предопределено.
                        </p>
                    </div>
                </div>
            </div>
        <div class="state_main_content">
            <div class="state_reasons">
                <h1>На что были направлены реформы</h1>
                <br>
                <br>
                <ol>
                    <li><h2>Укрепление центральной власти:</h2> <br> 
                    
                    <b>Царь</b> пытался переустроить <b>Россию</b> на принципах <b>рациональности</b>, построить <b>регулярное государство</b>, 
                    в котором все стороны жизни общества были поставлены под <b>государственный контроль</b>.
                    </li>
                    <li><h2>Модернизация экономики:</h2><br>
                    
                        <b>Российская экономика</b> конца <b>XVII века</b> была слаборазвитой и зависела от <b>сельского хозяйства</b>. 
                        <b>Пётр I</b> понимал, что для успешной конкуренции с западными странами необходима <b>индустриализация 
                        и развитие промышленности</b>.
                    </li>
                    <li><h2>Необходимость укрепления военной мощи:</h2> <br>
                    
                        <b>Россия</b> в начале <b>XVIII века</b> находилась в состоянии постоянного <b>конфликта</b> с соседними странами, 
                        такими как <b>Швеция, Польша и Османская империя</b>. Для успешного ведения войн требовалась современная 
                        <b>армия и флот</b>, а также развитая <b>военная промышленность</b>.
                    </li>
                </ol>
            </div>
            <div class="main_reforms_content">
                <div class="border_line">

                </div>

                <h1 class="reforms-zag"><span class="bad">Реформы <span class="red">органов</span> управления</span></h1>

                <div class="reforms">
                    <div class="ref zem">
                        <div class="img img-4">
                            <div class="navigation-image">
                                <div class="nav top"></div>
                                <div class="nav bottom"></div>
                            </div>
                            <div>
                                <div class="reform-date">30 января 1699 год</div>
                            </div>
                        </div>
                        <div class="text">
                            <h2><span class="green">Земские учреждения</span></h2>
                            <br>
                            <h3>Как было:</h3>
                            <p>
                                До создания <span class="green">земских учреждений</span> при <b>Петре I</b> в России местное управление осуществлялось на основе 
                                старой модели воеводского управления и системы областных приказов.
                            </p>
                            <br>
                            <h3>Как стало:</h3>
                            <p>
                                В <b>1699 году</b> по указу <b>Петра I</b> во всех городах страны были созданы 
                                выборные органы власти — <span class="green">земские избы</span> или <b>ратуши</b>. 
                                <br>Они стали 
                                подчиняться не воеводской или приказной администрации, а 
                                напрямую <b>Бурмистрской палате</b> (Ратуше) в <b>Москве</b>. <br><br>
                                <b>Главная цель</b> этой реформы состояла в том, чтобы превратить <span class="green">земские избы</span> в 
                                ответственных сборщиков прямых и косвенных налогов, а 
                                Ратушу в центральное казначейство страны.
                            </p>
                        </div>
                    </div>
                    <div class="ref gub">
                        <div class="img img-1">
                            <div class="navigation-image">
                                <div class="nav top"></div>
                                <div class="nav bottom"></div>
                            </div>
                            <div class="reform-date">1708–1715, 1719 годов</div>
                        </div>
                        <div class="text">
                            <h2><span class="blue-2">Губернская реформа</span></h2>
                            <br>
                            <h3>Как было:</h3>
                            <p>
                                До <b>1708</b> года территория Российского государства делилась на 
                                различные по размеру и статусу <b>уезды</b>, такая система была 
                                устаревшей,  и отношения между центром и провинцией стали 
                                крайне сложными и запутанными, а само управление уездами 
                                из центра — крайне громоздким.
                            </p>
                            <br>
                            <h3>Как стало:</h3>
                            <div class="ref-text">
                                <div class="img img-9"></div>
                                <p>
                                    Вся страна была разделена на восемь крупных <span class="blue-2">губерний</span>: <b>Московская, Ингерманландская (Санкт-Петербургская), Киевская, Смоленская, Архангелогородская, Казанская, Азовская и Сибирская</b>.<br>
                                    <br>Во главе <span class="blue-2">губерний</span> были поставлены <b><span class="blue-2">губернаторы</span></b>.
                                    <br>Они должны были: собирать казённые сборы, блюсти за тем, чтобы все повинности, падавшие на <span class="blue-2">губернию</span>, были исполнены, чтобы определённое с <span class="blue-2">губернии</span> количество рекрутов и работных людей было доставлено в срок.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="ref sen">
                        <div class="img img-5">
                            <div class="navigation-image">
                                <div class="nav top"></div>
                                <div class="nav bottom"></div>
                            </div>
                            <div class="reform-date">22 февраля 1711 г</div>
                        </div>
                        <div class="text">
                            <h2>Создание <span class='blue'>Cената</span></h2>
                            <br>
                            <h3>Как было:</h3>
                            <p>
                                <b>Пётр I</b> во время своих постоянных отлучек, часто мешавших ему заниматься текущими делами управления, неоднократно 
                                (в <b>1706, 1707 и 1710 годах</b>) вручал дела нескольким <span class="red">избранным</span> лицам, от которых требовал, чтобы они, не обращаясь к нему 
                                ни за какими разъяснениями, вершили дела, <em>"как им дать ответ в день судный"</em>.
                            </p>
                            <br>
                            <h3>Как стало:</h3>
                            <p>
                                Появилось новое учреждение, названное <span class='yellow'>правительствующим</span> <span class='blue'>Сенатом</span>. <span class='blue'>Сенат</span> осуществлял всю 
                                полноту власти в стране в отсутствие государя и координировал работу других <span class='yellow'>государственных</span> 
                                учреждений.
                            </p>
                        </div>
                    </div>
                    <div class="ref kol">
                        <div class="img img-2">
                            <div class="navigation-image">
                                <div class="nav top"></div>
                                <div class="nav bottom"></div>
                            </div>
                            <div class="reform-date">1718 - 1721 года</div>
                        </div>
                        <div class="text">
                            <h2>Создание <span class="yellow">коллегий</span></h2>
                            <br>
                            <h3>Как было:</h3>
                            <p>
                                Управление различными отраслями государства осуществлялось 
                                через <b>приказы</b> – центральные учреждения, каждое из которых 
                                отвечало за свою <b>сферу деятельности</b>.
                            </p>
                            <br>
                            <h3>Как стало:</h3>
                            <p>
                                Создание <span class="yellow"><b>коллегий</b></span> — центральных <b>государственных учреждений</b>, отвечающих за различные отрасли управления.
                                <br>Каждая <span class="yellow">коллегия</span> занималась конкретными вопросами: 
                                <b>военная, адмиралтейская, иностранная</b> и так далее. Всего было создано около <b>десяти <span class="yellow">коллегий</span></b>.
                            </p>
                        </div>
                    </div>
                    <div class="ref mag">
                        <div class="img img-3">
                            <div class="navigation-image">
                                <div class="nav top"></div>
                                <div class="nav bottom"></div>
                            </div>
                            <div class="reform-date">1720 год</div>
                        </div>
                        <div class="text">
                            <h2>Создание <span class="red">Магистрата</span></h2>
                            <br>
                            <h3>Как было:</h3>
                            <p>
                                До создания <span class="red">Магистратов</span> при Петре I в управлении городами использовались 
                                бурмистерские палаты. Они были учреждены указом от 30 января 1699 года. 
                                Бурмистерская палата учреждалась в Москве, а затем такие же появились и в других 
                                городах России. Ей подчинялись земские избы всех городов, которые должны были заменить собой приказные избы и воевод
                            </p>
                            <br>
                            <h3>Как стало:</h3>
                            <p>
                                <span class="red">Главный Магистрат</span> стал главным органом городского управления, сосредоточившим в своих руках контроль за основными 
                                областями жизни столицы. Он контролировал организации гильдий, цехов, содействовал 
                                развитию ремёсел, торговли, мануфактур, городского хозяйства. 
                                <br>Также <span class="red">Магистрат</span> осуществлял функции суда для торгово-промышленного населения 
                                и некоторые полицейские функции.
                            </p>
                        </div>
                    </div>
                    <div class="ref sin">
                        <div class="img img-8">
                            <div class="navigation-image">
                                <div class="nav top"></div>
                                <div class="nav bottom"></div>
                            </div>
                            <div class="reform-date">25 января 1721 год</div>
                        </div>
                        <div class="text">
                            <h2>Учреждение <span class="yellow">священного</span> правительствующего <span class="orange">Синода</span></h2>
                            <br>
                            <h3>Как было:</h3>
                            <p> 
                                До <b>1721 года</b> Русская православная <span class="yellow">церковь</span> управлялась <b>патриархом</b>, который имел значительное влияние 
                                не только в религиозной, но и в политической сферах. Это отношение вызывало конфликты между 
                                <span class="yellow">церковной</span> и государственной властью.
                            </p>
                            <br>
                            <h3>Как стало:</h3>
                            <p>
                                Создание <span class="yellow">Святейшего</span> <span class="orange">Синода</span> привело к подчинению Церкви — государству, т.к. все члены Синода назначались императором и присягали ему на верность.
                                Лишённая <b>Патриарха</b> <span class="yellow">церковь</span> уже не могла конкурировать с <b>Петром I</b> за власть над гражданами.
                                <br><br>Для дополнительного надзора за деятельностью <span class="orange">Синода</span> учреждена должность <b>обер-прокурора</b>.
                            </p>
                        </div>
                    </div>
                    <div class="ref sud">
                        <div class="img img-6">
                            <div class="navigation-image">
                                <div class="nav top"></div>
                                <div class="nav bottom"></div>
                            </div>
                            <div class="reform-date">1697, 1719 и 1722 годах</div>
                        </div>
                        <div class="text">
                            <h2><span class="brown">Судебная</span> реформа</h2>
                            <br>
                            <h3>Как было:</h3>
                            <p>
                                До <span class="brown">судебной</span> реформы Петра I в России существовал <b>суд целовальников</b>, 
                                который выполнял функции аналога суда присяжных. Большое количество <span class="brown">судебных органов</span> 
                                и лиц, осуществлявших <span class="brown">судебную</span> деятельность (сам император, губернаторы, воеводы и другие), 
                                вносило в судопроизводство сумбур и неразбериху.
                            </p>
                            <br>
                            <h3>Как стало:</h3>
                            <p>
                                Были созданы 10 <span class="brown">судебных</span> округов, над которыми руководили <b>надворные <span class="brown">суды</span></b>. 
                                В их подчинении были <em>провинциальные</em> и <em>городовые</em> <span class="brown">суды</span>. <br><br><span class="red">Магистрат</span> стал 
                                <span class="brown">судебной инстанцией</span> для ремесленников и мелких торговцев, записанных 
                                в посады. <br><br><b>Органом управления</b> над всеми <span class="brown">судами</span> являлась <span class="yellow">Юстиц-коллегия</span>, 
                                которая была апелляционным судом по отношению к надворным судам.
                            </p>
                        </div>
                    </div>
                    <div class="ref tab">
                        <div class="img img-7">
                            <div class="navigation-image">
                                <div class="nav top"></div>
                                <div class="nav bottom"></div>
                            </div>
                            <div class="reform-date">24 января 1722 год</div>
                        </div>
                        <div class="text">
                            <h2><span class="green-2">Табель о рангах</span></h2>
                            <br>
                            <h3>Как было:</h3>
                            <p>
                                Авторитет и власть рода передавались по наследству.
                            </p>
                            <br>
                            <h3>Как стало:</h3>
                            <p>
                                <span class="green-2">Табель</span> обязывала всех дворян служить и объявляла службу единственным способом получения любого <span class="yellow">государственного</span> чина. <br>
                                <br>После появления 14 ступенчатой системы рангов, где 14 - самая низшая, даже самый низкий дворянский род мог добиться высот. 
                                Всё решали лишь свои качества и преданность <b>царю</b>. 
                                <br><br><b>Родовое дворянство</b> начинает передаваться с 9 ступени.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        `}render(){const t=document.querySelector("main");n(this.style),t?t.innerHTML=this.html.innerHTML:console.log("Нет секции main для страницы");const a=document.querySelectorAll(".top"),s=document.querySelectorAll(".bottom"),r=document.querySelectorAll(".img");a&&s&&r&&r.forEach(l=>{const d=l.querySelector(".navigation-image");if(d){const f=d.querySelector(".top"),h=d.querySelector(".bottom");f&&h&&(f.addEventListener("mouseenter",()=>{l.style.backgroundPosition="top"}),h.addEventListener("mouseenter",()=>{l.style.backgroundPosition="bottom"}),l.classList[1]!="img-3"&&l.classList[1]!="img-2"?(f.addEventListener("mouseleave",()=>{l.style.backgroundPosition="center"}),h.addEventListener("mouseleave",()=>{l.style.backgroundPosition="center"})):h.addEventListener("mouseleave",()=>{l.style.backgroundPosition="top"}))}}),document.querySelectorAll(".ref").forEach(l=>{l.addEventListener("click",()=>{l.scrollIntoView({block:"center",behavior:"smooth"})})})}}const M={game:E,about_us:v,themes:w,home:x,results:I,state_bodies:z,reforms:J};class R{constructor(){i(this,"page");i(this,"body");this.page=null,this.body=document.body}change_page(e){const t=M[e];t?(this.page=new t,this.page.render()):(console.log("ERROR PAGE NOT FOUND"),this.page=new C("Такой страницы не существует :(",404),this.page.render())}}class L{constructor(){i(this,"hash");i(this,"main_page");this.main_page=new R,this.hash=window.location.hash.slice(1),this.main_page.change_page(this.hash),window.addEventListener("hashchange",()=>{const e=window.location.hash.slice(1);this.hash=e,this.main_page.change_page(this.hash)})}}class G{constructor(){i(this,"router");this.router=new L}}new G;
