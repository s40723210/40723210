var tipuesearch = {"pages": [{'title': '簡介', 'text': '各組組員請依照各頁面主題, 分別利用各自帳號下的 CMSimfly, Reveal 與 Pelican (Blogger) 內容, 引用至各相關頁面外, 再分別依據各頁面所執行的操作內容, 拍成影音說明影片, 以"國立虎尾科技大學-機械設計工程系-網際內容管理-學號-影片主題"為名稱, 上傳到各自的 Youtube 帳號下後, 嵌入到下列各頁面中, 以作為期末課程評分依據. \n 各學員將資料推送到各組網站時, 必須引用 Github 上版本提交號或連結, 並在影片內容中提供相關資料的說明與連結. \n 網路連線設定 \n 配置可攜程式環境 \n 倉儲改版 \n 靜態 CMSimfly \n Mobile 網站內容 \n Virtual Host \n 分組網站 \n https://github.com/mdewcm2019/wcm2019-task-g1 https://github.com/mdewcm2019/wcm2019-task-g2 https://github.com/mdewcm2019/wcm2019-task-g3 https://github.com/mdewcm2019/wcm2019-task-g4 https://github.com/mdewcm2019/wcm2019-task-g5 https://github.com/mdewcm2019/wcm2019-task-g6 https://github.com/mdewcm2019/wcm2019-task-g7 \n', 'tags': '', 'url': '簡介.html'}, {'title': '網路連線設定', 'text': '了解機械設計系電腦輔助設計室電腦的網路設定, 其中包括 IPv4 網路與 IPv6 網路設定. 正常情況下, 電腦輔助設計室中的 64 台電腦透過 IPv4 協定下的 DHCP 與 NAT 上網, 各電腦以 DHCP client 取得 192.168.1.* 的網路位址, 然後以 NAT 的一組外部 IP 上網, 通常必須設定 Proxy Server 為 http://proxy.kmol.info:3128 後上網會比較順暢, 但若 8 台 Proxy Servers 無法正常運作時, 則取消 Proxy Server 的設定. 瀏覽器代理主機設定 了解如何設定 Google Chrome 與 Firefox 瀏覽器的代理主機設定. 申請 Github 帳號 利用 Gmail 帳號申請 Github 帳號, 申請後利用電子郵箱收信進行確認後, 就可以在 Github 上建立倉儲. \n', 'tags': '', 'url': '網路連線設定.html'}, {'title': '配置可攜程式環境', 'text': '取得 Windows 10 64 位元環境下的可攜程式環境 (下載\xa0 2019_cdb_w5.7z), 下載後解開目錄, 放入 USB3.0 規格以上的隨身碟或隨身硬碟. 以滑鼠點擊 start.bat 開啟可攜隨身系統, 以 stop.bat 關閉可攜隨身系統, 隨身碟必須在關閉所有應用程式執行下, 才可正常退出. 了解基本的 DOS (Disk Operating System) 指令 C:\\> 符號為 DOS 命令列視窗的回應 (Prompt), 表示目前在 C 槽硬碟的 \\ 根目錄, 若要切換到 Y 槽, 則在電腦的回應後, 輸入 Y:, 命令列將轉為 Y:\\> 若要更換目錄, 則使用 cd, 也就是 change directory 的意思, 例如: Y:\\>cd tmp 表示要從 Y 槽的根目錄更換到 tmp 目錄, 也就是 Y:\\tmp> 若要再回到 Y 槽的根目錄, 可以使用 cd .. 表示要從目前所在目錄, 往上跳回一個目錄, 也就是重新回到 Y 槽的根目錄. 另外, 無論目前位於哪一個子目錄, 也可以使用 cd \\ 直接回到根目錄. 或者從 Y:\\> 直接使用 cd \\tmp\\repo\\ssh\\wcm2019 直接從 Y 槽的根目錄, 跳進 Y:\\tmp\\repo\\ssh\\wcm2019> 此外, 常用的 DOS 指令有: dir - 列出目前所在目錄的內容 mkdir - 隨後加上要建立目錄的名稱, 可以建立目錄 cls - clear screen, 清除目前的命令列顯示的內容 \n', 'tags': '', 'url': '配置可攜程式環境.html'}, {'title': '倉儲改版', 'text': '建立 Git 倉儲, 並 clone 倉儲至近端工作後, 對遠端倉儲改版 可攜程式系統中已經內建 git, 可以在啟動 start.bat 後, 透過 path 的設定, 直接執行 git 指令. 建立 Git 倉儲, 共分為兩類, 一類是直接在 Github 網際介面下建立倉儲時, 要求建立 README.md 檔案, 之後可以直接在近端, 以 git clone 加上倉儲連線 URL, 將倉儲克隆一份到近端, 並以最新版本作為工作目錄, 使用者改版後, 可以直接透過 git add, commit 與 push 對遠端倉儲改版. 另一類則是故意在 Github 網際介面下建立倉儲時, 不要建立任何檔案, 而是在近端自行利用 git 指令建立倉儲架構, 新增內容後, 以 git remote add 設法在近端倉儲中納入 origin URL 後, 將近端倉儲版本新增提交推送到遠端. git add git add 可以用來新增一個檔案, 數個檔案, 或在之前提交後所新增的所有內容. git add 在 GIT 架構下, 是對所新增或修改的內容拍快照: git add . adds all modified and new (untracked) files in the current directory and all subdirectories to the staging area (a.k.a. the index), thus preparing them to be included in the next git commit . Any files matching the patterns in the .gitignore file will be ignored by git add git commit  git commit 執行之前, 必須使用 git config 建立臨時或永久的身分註記, 因為 GIT 在展開所有改版內容時, 必須明確登錄這些變更的作者與時間. 當使用者採用 git commit -m "改版說明訊息", 此次提交到 .git 目錄下的更動內容, 均會綁定使用者身分與改版所輸入的說明訊息. git push git push 在隨後沒有輸入遠端 URL 代號時, 表示要推送到 origin, 若透過 git remote add 設定其他代號與 URL 對應時, git push 加上代號, 就可以將此次的提交內容, 推送到指定的 URL 所在遠端倉儲. \n \n', 'tags': '', 'url': '倉儲改版.html'}, {'title': '靜態 CMSimfly', 'text': '利用 CMSimfly (https://github.com/chiamingyen/cmsimfly) 內容, 建立自己的 Github Pages 網站 設法利用  HTML5 CSS 與 Javascript , 納入與機械設計相關的靜態網頁內容 \n  for site wrap  \n \n  <script src="../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n            <script src="../cmsimde/static/chimper/js/typed.js"></script>\n                    <script>\n                    var typed = new Typed(\'.typed-words\', {\n                    strings: ["Web Apps"," WordPress"," Mobile Apps"],\n                    typeSpeed: 80,\n                    backSpeed: 80,\n                    backDelay: 4000,\n                    startDelay: 1000,\n                    loop: true,\n                    showCursor: true\n                    });\n                    </script>\n             \n \n', 'tags': '', 'url': '靜態 CMSimfly.html'}, {'title': 'Mobile 網站內容', 'text': '學習如何使用 CMSimfly, 在網站中加入各種內容 (導入 Bootstrap frontend framework) 使用 Flask, bs4 與 lxml 模組 了解 CMSimfly 如何建構, 並且嘗試修改現有功能, 除錯或建立自己的網際內容管理系統 \n \n', 'tags': '', 'url': 'Mobile 網站內容.html'}, {'title': 'Virtual Host', 'text': 'Fossil SCM 如何利用 Fossil SCM, 在 Virtualbox 中的 Ubuntu 18.04-2 (8.5 GB) 建立類似 Github 的系統, 可以放入 CMSimfly 的靜態網頁 Ubuntu 18.04 (https://www.ubuntu.com/about/release-cycle), 配置網路連線, 然後架構 uwsgi 環境下的 CMSimfly 動態網站, 或建立 Fossil SCM 用來伺服管理 CMSimfly 下有版次管理的靜態網頁, 或利用 nginx 伺服無版次管理的 CMSimfly 靜態網頁. \n', 'tags': '', 'url': 'Virtual Host.html'}, {'title': 'Javascript', 'text': '這裡是利用\xa0 HTML5 CSS 與 Javascript , 納入與機械設計相關的靜態網頁內容 \n', 'tags': '', 'url': 'Javascript.html'}, {'title': 'test1', 'text': 'Try it \n \n \n \n \n \n \n \n  Your browser doesn\'t support the HTML5 element canvas.      Throw dice  \n Stage:   Point:   Outcome:  \n <script type="text/javascript">// <![CDATA[\nvar cwidth = 400;\n    var cheight = 300;\n    var dicex = 50;\n    var dicey = 50;\n    var dicewidth = 100;\n    var diceheight = 100;\n    var dotrad = 6;\n    var ctx;\n    var dx;\n    var dy;\n    var firstturn = true;\n    var point;\nfunction throwdice() {\n    var sum;\n    var ch = 1+Math.floor(Math.random()*6);\n    sum = ch;\n    dx = dicex;\n    dy = dicey;\n    drawface(ch);\n    dx = dicex + 150;\n    ch=1 + Math.floor(Math.random()*6);\n    sum += ch;\n    drawface(ch);\n    if (firstturn) {\n        switch(sum) {\n            case 7:\n            case 11:\n              document.f.outcome.value="You win!";\n              break;\n            case 2:\n            case 3:\n            case 12:\n              document.f.outcome.value="You lose!";\n              break;\n            default:\n              point = sum;\n              document.f.pv.value=point;\n              firstturn = false;\n              document.f.stage.value="Need follow-up throw.";\n              document.f.outcome.value="   ";\n        }\n    }\n    else {\n        switch(sum) {\n        case point:\n           document.f.outcome.value="You win!";\n           document.f.stage.value="Back to first throw.";\n           document.f.pv.value=" ";\n           firstturn = true;\n           break;\n        case 7:\n           document.f.outcome.value="You lose!";\n           document.f.stage.value="Back to first throw.";\n           document.f.pv.value=" ";\n           firstturn = true;\n        }\n            }\n}\nfunction drawface(n) {\n  ctx = document.getElementById(\'canvas\').getContext(\'2d\');  \n  ctx.lineWidth = 5;\n  ctx.clearRect(dx,dy,dicewidth,diceheight);\n  ctx.strokeRect(dx,dy,dicewidth,diceheight)\n  var dotx;\n  var doty;\n  ctx.fillStyle = "#009966";\n    switch(n) {\n        case 1:\n         draw1();\n         break;\n        case 2:\n         draw2();\n         break;\n        case 3:\n         draw2();\n         draw1();\n         break;\n        case 4:\n         draw4();\n         break;\n        case 5:\n         draw4();\n         draw1();\n         break;\n        case 6:\n         draw4();\n         draw2mid();\n         break;\n         \n    }\n}\nfunction draw1() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + .5*dicewidth;\n    doty = dy + .5*diceheight;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n}\nfunction draw2() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + 3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy+diceheight-3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n}\nfunction draw4() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + 3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy+diceheight-3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + diceheight-3*dotrad;  //no change\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy+ 3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill(); \n}\nfunction draw2mid() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + .5*diceheight;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy + .5*diceheight; //no change\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n}\n// ]]></script>\n<p><canvas height="300" id="canvas" width="400"> Your browser doesn\'t support the HTML5 element canvas. </canvas> <br> <button onclick="throwdice();">Throw dice </button></p>\n<form id="f" name="f">Stage: <input name="stage" type="text" value="First Throw"> Point: <input name="pv" type="text" value="   "> Outcome: <input name="outcome" type="text" value="     "></form>\n \n', 'tags': '', 'url': 'test1.html'}, {'title': 'test2', 'text': '\n  Your browser doesn\'t support the HTML5 element canvas.  \n \n 繪圖   清除 \n <p><canvas height="300" id="canvas" width="400"> Your browser doesn\'t support the HTML5 element canvas. </canvas></p>\n<script>\ncanvas = document.getElementById("canvas");\nctx = canvas.getContext(\'2d\');\n \nfunction draw(){\n ctx.beginPath();\n ctx.strokeStyle = "rgb(200,0,0)";\n ctx.arc(200, 200,50,0,2*Math.PI, false);\n ctx.closePath();\n ctx.stroke();\n}\n \nfunction clear_canvas(){\n// Store the current transformation matrix\n// The save() method pushes the current state onto the stack..\nctx.save();\n \n// Use the identity matrix while clearing the canvas\n// the setTransform() method lets you scale, rotate, move, and skew the current context.\n// setTransform(Horizontal scaling, Horizontal skewing,Vertical skewing, Vertical scaling, Horizontal moving, Vertical moving)\nctx.setTransform(1, 0, 0, 1, 0, 0);\nctx.clearRect(0, 0, canvas.width, canvas.height);\n// Restore the transform\n// The restore() method pops the top state on the stack, restoring the context to that state.\nctx.restore();\n}\n</script>\n<p><button onclick="draw()">繪圖</button> <button onclick="clear_canvas()">清除</button></p> \n', 'tags': '', 'url': 'test2.html'}, {'title': 'test3', 'text': '\n  啟動 Brython  \n \n \n  以下製作 button \n \n   Set Number of Gears \n <!-- 導入 Brython 標準程式庫 -->\n<script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<p></p>\n<!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\n// 設定 data/py 為共用程式路徑\nbrython({debug:1, pythonpath:[\'./../data/py\']});\n}\n</script>\n<p><canvas height="600" id="onegear" width="800"></canvas></p>\n<!-- 以下製作 button-->\n<div height="20" id="onegear_div" width="800"></div>\n<p><input id="n" type="text" value="22"><br> <button id="button">Set Number of Gears</button></p>\n<!-- 以下實際利用  Brython 繪圖-->\n<script type="text/python3">\nfrom browser import document as doc\nimport math\n# deg 為角度轉為徑度的轉換因子\ndeg = math.pi/180.\n# 定義 Spur 類別\nclass Spur(object):\n    def __init__(self, ctx):\n        self.ctx = ctx\n  \n    def create_line(self, x1, y1, x2, y2, width=3, fill="red"):\n        self.ctx.beginPath()\n        self.ctx.lineWidth = width\n        self.ctx.moveTo(x1, y1)\n        self.ctx.lineTo(x2, y2)\n        self.ctx.strokeStyle = fill\n        self.ctx.stroke()\n  \n    # 定義一個繪正齒輪的繪圖函式\n    # midx 為齒輪圓心 x 座標\n    # midy 為齒輪圓心 y 座標\n    # rp 為節圓半徑, n 為齒數\n    # pa 為壓力角 (deg)\n    # rot 為旋轉角 (deg)\n    # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷\n    def Gear(self, midx, midy, rp, n=20, pa=20, color="black"):\n        # 齒輪漸開線分成 15 線段繪製\n        imax = 15\n        # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線\n        self.create_line(midx, midy, midx, midy-rp)\n        # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數\n        # 模數也就是齒冠大小\n        a=2*rp/n\n        # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍\n        d=2.5*rp/n\n        # ra 為齒輪的外圍半徑\n        ra=rp+a\n        # rb 則為齒輪的基圓半徑\n        # 基圓為漸開線長齒之基準圓\n        rb=rp*math.cos(pa*deg)\n        # rd 為齒根圓半徑\n        rd=rp-d\n        # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd\n        # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小\n        # 將圓弧分成 imax 段來繪製漸開線\n        # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd\n        if rd>rb:\n            dr = (ra-rd)/imax\n        else:\n            dr=(ra-rb)/imax\n        # tan(pa*deg)-pa*deg 為漸開線函數\n        sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg\n        for j in range(n):\n            ang=-2.*j*math.pi/n+sigma\n            ang2=2.*j*math.pi/n+sigma\n            lxd=midx+rd*math.sin(ang2-2.*math.pi/n)\n            lyd=midy-rd*math.cos(ang2-2.*math.pi/n)\n            for i in range(imax+1):\n                # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd\n                if rd>rb:\n                    r=rd+i*dr\n                else:\n                    r=rb+i*dr\n                theta=math.sqrt((r*r)/(rb*rb)-1.)\n                alpha=theta-math.atan(theta)\n                xpt=r*math.sin(alpha-ang)\n                ypt=r*math.cos(alpha-ang)\n                xd=rd*math.sin(-ang)\n                yd=rd*math.cos(-ang)\n                # i=0 時, 繪線起點由齒根圓上的點, 作為起點\n                if(i==0):\n                    last_x = midx+xd\n                    last_y = midy-yd\n                # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點\n                self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color)\n                # 最後一點, 則為齒頂圓\n                if(i==imax):\n                    lfx=midx+xpt\n                    lfy=midy-ypt\n                last_x = midx+xpt\n                last_y = midy-ypt\n            # the line from last end of dedendum point to the recent\n            # end of dedendum point\n            # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標\n            # 下列為齒根圓上用來近似圓弧的直線\n            self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color)\n            for i in range(imax+1):\n                # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd\n                if rd>rb:\n                    r=rd+i*dr\n                else:\n                    r=rb+i*dr\n                theta=math.sqrt((r*r)/(rb*rb)-1.)\n                alpha=theta-math.atan(theta)\n                xpt=r*math.sin(ang2-alpha)\n                ypt=r*math.cos(ang2-alpha)\n                xd=rd*math.sin(ang2)\n                yd=rd*math.cos(ang2)\n                # i=0 時, 繪線起點由齒根圓上的點, 作為起點\n                if(i==0):\n                    last_x = midx+xd\n                    last_y = midy-yd\n                # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點\n                self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color)\n                # 最後一點, 則為齒頂圓\n                if(i==imax):\n                    rfx=midx+xpt\n                    rfy=midy-ypt\n                last_x = midx+xpt\n                last_y = midy-ypt\n            # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標\n            # 下列為齒頂圓上用來近似圓弧的直線\n            self.create_line(lfx,lfy,rfx,rfy,fill=color)\ncanvas = doc[\'onegear\']\nctx = canvas.getContext("2d")\n  \n# 以 button 驅動的事件函式\ndef setgearnumber(e):\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n    x = (canvas.width)/2\n    y = (canvas.height)/2\n    if doc["n"].value.isdigit():\n        n1 = int(doc["n"].value)\n    else:\n        n1= 25\n    # 設定齒輪參數\n    x = (canvas.width)/2\n    y = (canvas.height)/2\n    r = 0.6*(canvas.height/2)\n    pa = 20\n    # 繪出齒輪\n    Spur(ctx).Gear(x, y, r, n1, pa, "blue")\n#判定 button\nsetgearnumber(True)\ndoc[\'button\'].bind(\'click\',setgearnumber)\n</script> \n \n  以下實際利用  Brython 繪圖 \n \n  for Brython  \n \n \n  啟動 brython()  \n \n \n \n  以下利用 Brython 程式執行繪圖  \n \n \n \n \n <!-- for Brython -->\n<script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<!-- 啟動 brython() -->\n<p>\n<script>\nwindow.onload=function(){\nbrython(1);\n}\n</script>\n</p>\n<!-- 以下利用 Brython 程式執行繪圖 -->\n<p><canvas height="400" id="taiwan_flag" width="600"></canvas></p>\n<p>\n<script type="text/python3">\n# 導入 doc\nfrom browser import document as doc\nimport math\n  \n# 準備繪圖畫布\ncanvas = doc["taiwan_flag"]\nctx = canvas.getContext("2d")\n# 進行座標轉換, x 軸不變, y 軸反向且移動 canvas.height 單位光點\n# ctx.setTransform(1, 0, 0, -1, 0, canvas.height)\n# 以下採用 canvas 原始座標繪圖\nflag_w = canvas.width\nflag_h = canvas.height\ncircle_x = flag_w/4\ncircle_y = flag_h/4\n# 先畫滿地紅\nctx.fillStyle=\'rgb(255, 0, 0)\'\nctx.fillRect(0,0,flag_w,flag_h)\n# 再畫青天\nctx.fillStyle=\'rgb(0, 0, 150)\'\nctx.fillRect(0,0,flag_w/2,flag_h/2)\n# 畫十二道光芒白日\nctx.beginPath()\nstar_radius = flag_w/8\nangle = 0\nfor i in range(24):\n    angle += 5*math.pi*2/12\n    toX = circle_x + math.cos(angle)*star_radius\n    toY = circle_y + math.sin(angle)*star_radius\n    # 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo\n    if (i):\n        ctx.lineTo(toX, toY)\n    else:\n        ctx.moveTo(toX, toY)\nctx.closePath()\n# 將填色設為白色\nctx.fillStyle = \'#fff\'\nctx.fill()\n# 白日:藍圈\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w*17/240, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為藍色\nctx.fillStyle = \'rgb(0, 0, 149)\'\nctx.fill()\n# 白日:白心\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w/16, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為白色\nctx.fillStyle = \'#fff\'\nctx.fill()\n</script> \n test4\n', 'tags': '', 'url': 'test3.html'}, {'title': 'test4', 'text': '\n \n \n  以下利用 Brython 程式執行繪圖  \n \n \n \n \n <!-- for Brython -->\n<script src="./../static/brython.js"></script>\n<script src="./../static/brython_stdlib.js"></script>\n<!-- 啟動 brython() -->\n<p>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython(1);\n}\n// ]]></script>\n</p>\n<!-- 以下利用 Brython 程式執行繪圖 -->\n<p><canvas height="400" id="taiwan_flag" width="600"></canvas></p>\n<p>\n<script type="text/python3">// <![CDATA[\n# 導入 doc\nfrom browser import document as doc\nimport math\n  \n# 準備繪圖畫布\ncanvas = doc["taiwan_flag"]\nctx = canvas.getContext("2d")\n# 進行座標轉換, x 軸不變, y 軸反向且移動 canvas.height 單位光點\n# ctx.setTransform(1, 0, 0, -1, 0, canvas.height)\n# 以下採用 canvas 原始座標繪圖\nflag_w = canvas.width\nflag_h = canvas.height\ncircle_x = flag_w/2\ncircle_y = flag_h/2\n# 先畫滿地紅\nctx.fillStyle=\'rgb(255, 0, 0)\'\nctx.fillRect(0,0,flag_w,flag_h)\n# 再畫青天\nctx.fillStyle=\'rgb(0, 0, 150)\'\nctx.fillRect(flag_w/4,flag_h/4,300,200)\n# 畫十二道光芒白日\nctx.beginPath()\nstar_radius = flag_w/8\nangle = 0\nfor i in range(24):\n    angle += 5*math.pi*2/12\n    toX = circle_x + math.cos(angle)*star_radius\n    toY = circle_y + math.sin(angle)*star_radius\n    # 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo\n    if (i):\n        ctx.lineTo(toX, toY)\n    else:\n        ctx.moveTo(toX, toY)\nctx.closePath()\n# 將填色設為白色\nctx.fillStyle = \'#fff\'\nctx.fill()\n# 白日:藍圈\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w*17/240, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為藍色\nctx.fillStyle = \'rgb(0, 0, 149)\'\nctx.fill()\n# 白日:白心\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w/16, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為白色\nctx.fillStyle = \'#fff\'\nctx.fill()\n// ]]></script>\n</p>\n<p></p>\n<!-- for Brython -->\n<script src="./../static/brython.js"></script>\n<script src="./../static/brython_stdlib.js"></script>\n<!-- 啟動 brython() -->\n<p>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython(1);\n}\n// ]]></script> \n \n  for Brython  \n \n \n  啟動 brython()  \n \n \n', 'tags': '', 'url': 'test4.html'}, {'title': 'test5', 'text': '\n \n \n  以下利用 Brython 程式執行繪圖  \n \n \n \n \n <!-- for Brython -->\n<script src="./../static/brython.js"></script>\n<script src="./../static/brython_stdlib.js"></script>\n<!-- 啟動 brython() -->\n<p>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython(1);\n}\n// ]]></script>\n</p>\n<!-- 以下利用 Brython 程式執行繪圖 -->\n<p><canvas height="400" id="taiwan_flag" width="600"></canvas></p>\n<p>\n<script type="text/python3">// <![CDATA[\n# 導入 doc\nfrom browser import document as doc\nimport math\n  \n# 準備繪圖畫布\ncanvas = doc["taiwan_flag"]\nctx = canvas.getContext("2d")\n# 進行座標轉換, x 軸不變, y 軸反向且移動 canvas.height 單位光點\n# ctx.setTransform(1, 0, 0, -1, 0, canvas.height)\n# 以下採用 canvas 原始座標繪圖\nflag_w = canvas.width\nflag_h = canvas.height\ncircle_x = flag_w/2\ncircle_y = flag_h/2\n# 先畫滿地紅\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w/3, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為紅色\nctx.fillStyle = \'#ff0000\'\nctx.fill()\n# 再畫青天\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w/5, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為藍色\nctx.fillStyle = \'#0000dd\'\nctx.fill()\n# 畫十二道光芒白日\nctx.beginPath()\nstar_radius = flag_w/8\nangle = 0\nfor i in range(24):\n    angle += 5*math.pi*2/12\n    toX = circle_x + math.cos(angle)*star_radius\n    toY = circle_y + math.sin(angle)*star_radius\n    # 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo\n    if (i):\n        ctx.lineTo(toX, toY)\n    else:\n        ctx.moveTo(toX, toY)\nctx.closePath()\n# 將填色設為白色\nctx.fillStyle = \'#fff\'\nctx.fill()\n# 白日:藍圈\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w*17/240, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為藍色\nctx.fillStyle = \'rgb(0, 0, 149)\'\nctx.fill()\n# 白日:白心\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w/16, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為白色\nctx.fillStyle = \'#fff\'\nctx.fill()\n// ]]></script>\n</p>\n<p></p>\n<!-- for Brython -->\n<script src="./../static/brython.js"></script>\n<script src="./../static/brython_stdlib.js"></script>\n<!-- 啟動 brython() -->\n<p>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython(1);\n}\n// ]]></script> \n \n  for Brython  \n \n \n  啟動 brython()  \n \n \n', 'tags': '', 'url': 'test5.html'}, {'title': '期中報告', 'text': 'PPT檔案: 40723210期中報告.pdf \n 影片: https://youtu.be/avqyumgR6a8 \n', 'tags': '', 'url': '期中報告.html'}, {'title': '期末報告', 'text': '', 'tags': '', 'url': '期末報告.html'}]};