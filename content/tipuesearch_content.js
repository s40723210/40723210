var tipuesearch = {"pages": [{'title': '簡介', 'text': '班級倉儲: https://github.com/scrum-1/wcm2019a 個人倉儲: https://github.com/s40723210/40723210 個人blogger:  https://40723210.blogspot.com/ 組的blogger:  https://wcm2019-task-g2.blogspot.com/ \n 各組組員請依照各頁面主題, 分別利用各自帳號下的 CMSimfly, Reveal 與 Pelican (Blogger) 內容, 引用至各相關頁面外, 再分別依據各頁面所執行的操作內容, 拍成影音說明影片, 以"國立虎尾科技大學-機械設計工程系-網際內容管理-學號-影片主題"為名稱, 上傳到各自的 Youtube 帳號下後, 嵌入到下列各頁面中, 以作為期末課程評分依據. \n 各學員將資料推送到各組網站時, 必須引用 Github 上版本提交號或連結, 並在影片內容中提供相關資料的說明與連結. \n 網路連線設定 \n 配置可攜程式環境 \n 倉儲改版 \n 靜態 CMSimfly \n Mobile 網站內容 \n Virtual Host \n 分組網站 \n https://github.com/mdewcm2019/wcm2019-task-g1 https://github.com/mdewcm2019/wcm2019-task-g2 https://github.com/mdewcm2019/wcm2019-task-g3 https://github.com/mdewcm2019/wcm2019-task-g4 https://github.com/mdewcm2019/wcm2019-task-g5 https://github.com/mdewcm2019/wcm2019-task-g6 https://github.com/mdewcm2019/wcm2019-task-g7 \n', 'tags': '', 'url': '簡介.html'}, {'title': 'vi 與 vim 的指令整理', 'text': '編輯模式 \n \n \n \n 指令 \n 說明 \n \n \n i \n 在游標位置進入編輯模式 \n \n \n I \n 在游標行的第一個非空白字元進入編輯模式 \n \n \n a \n 在游標位置後進入編輯模式 \n \n \n A \n 在游標行的最後一個字元進入編輯模式 \n \n \n o \n 向下新增一行，並進入編輯模式 \n \n \n O \n 向上新增一行，並進入編輯模式 \n \n \n cc \n 刪除游標行，並進入編輯模式 \n \n \n h 或 向左方向鍵 \n 游標向左移動一個字元 \n \n \n j 或 向下方向鍵 \n 游標向下移動一個字元 \n \n \n k 或 向上方向鍵 \n 游標向上移動一個字元 \n \n \n l 或 向右方向鍵 \n 游標向右移動一個字元 \n \n \n [ESC] \n 取消指令或退出編輯模式 \n \n \n \n 刪除 \n \n \n \n 指令 \n 說明 \n \n \n dd \n 刪除游標行 \n \n \n 行數 \xa0 → dd \n 刪除 n 行 \n \n \n dG \n 刪除游標行到最後一行 \n \n \n d1G \n 刪除游標行到第一行 \n \n \n d$ \n 刪除游標處到最後一個字元 \n \n \n d0 \n 刪除游標處到第一個字元 \n \n \n \n 檔案功能 \n \n \n \n 指令 \n 說明 \n \n \n :w \n 存檔 (加 ! 表示強制存檔) \n \n \n :w \xa0 檔案名稱 \n 另存新檔 \n \n \n :q \n 退出 vi (加 ! 表示不存檔強制退出) \n \n \n :wq \n 存檔並退出 vi \n \n \n : x \n 存檔並退出 vi \n \n \n :e \xa0 檔案名稱 \n 編輯其它檔案 \n \n \n :e! \n 還原至檔案編修前的狀態 \n \n \n :r \xa0 檔案名稱 \n 讀入檔案內容，並加到游標行的後面 \n \n \n :n \n 切換到下一個開啟的檔案 \n \n \n :N \n 切換到上一個開啟的檔案 \n \n \n :set nu \n 顯示行號 \n \n \n :set nonu \n 取消行號顯示 \n \n \n :files \n 列出所有開啟的檔案 \n \n \n :Ex \n 開啟檔案瀏覽器 \n \n \n :Ex \xa0 路徑 \n 於指定路徑開啟檔案瀏覽器 \n \n \n \n', 'tags': '', 'url': 'vi 與 vim 的指令整理.html'}, {'title': 'git基本指令', 'text': '\n mkdir name 創建一個文檔夾 \n rm file 刪除 \n cd name 進入文檔夾 \n pwd 查看當前目錄 \n git init \xa0 把當前目錄變成 git 可以管理的倉庫 生成 .git 文檔夾 \n git add name \xa0 把文檔添加到暫存區 stage \n git commit -m “\xa0” \xa0 把暫存區所有文檔提交到 git 當前分支上（本地倉庫） \n git status \xa0 查看當前 git 倉庫狀態 \n git diff file \xa0 查看修改的文檔內容 \n git log \xa0 查看從最近到最遠的提交日誌 \n git reset --hard \xa0 版本號 \xa0回退到某版本（ HEAD 指向當前版本） \n git push origin HEAD --force 上傳目前(hard)版本 \n git reflog \xa0 查看命令操作歷史 \n git checkout -- file \xa0 \xa0 丟棄工作區文檔的修改 \n git reset HEAD file \xa0 \xa0 丟棄暫存區的文檔 \n git rm file \xa0 刪除工作區文檔後還需刪除 git 中的文檔 \n git checkout --file \xa0 恢復誤刪的 git 文檔 \n 關聯一個遠程倉庫 \xa0 git remote add origin address \n 第一次推送代碼到遠程倉庫 git push -u origin master \n （ -u 會把本地倉庫 master 分支和遠程倉庫的 master 分支 關聯起來） \n 從遠程倉庫克隆代碼到本地 git clone address \n 創建分支 git branch name \n 切換分支 git checkout name\xa0 \xa0 \xa0 \n 查看分支 git branch \n 創建分支並切換到分支上\u3000\u3000git checkout -b name \n 合併指定分支到當前分支上 git merge name \n 合併後刪除分支 git branch -d name \n 合併時出現衝突要手動解決衝突，再提交，最後合併 。 \n 將寫到一半的代碼從工作區拿走存起來 git stash \n 恢復隱藏的代碼到工作區並刪除隱藏位置的代碼 \xa0 \xa0git stash pop \n 強行刪除一個沒有合併過的分支 git branch -D name \n', 'tags': '', 'url': 'git基本指令.html'}, {'title': 'python基本語法', 'text': "● ”#”符號後是註解（comment），可以在一列的開頭或中間加入 ● reserved word or built-in function (變數取名請避開！) ○\xa0 \xa0 \xa0and, exec, not, as, finally, or, assert, for, pass, except ○\xa0 \xa0 \xa0break, from, print, class, global, raise, continue, if, return ○\xa0 \xa0 \xa0def, import, try, del, in, while, elif, is, with, else, lambda, yield ● 縮排視為不同的block (在IF判斷式或迴圈的段落中使用) ○\xa0 \xa0 \xa0縮排可以用tab或是數個空格(至少一個空格)。 ○\xa0 \xa0 \xa0空格的數量不同，視為不同的block (bug很容易因為這一點而發生) ● python的每個變數視為一個object。 \n Python variables \n ● 不需要事先宣告變數，直接用”=“ assign value（賦值）即可。 ○\xa0 \xa0 \xa0x=3.14 → 實數變數 ● 變數類型（data type）根據被賦予的值決定（之後如果被assign不同類型的數 值，該變數的類型就會直接改變） ○\xa0 \xa0 \xa0x=‘text’ → 字串變數 ● 確認變數的data type: type(x) ● 變數名稱中的大小寫要完全一致（a、A會當作不同的變數） ● python可以在同一個指令中對多個變數賦值 ○\xa0 \xa0 \xa0x, y = 2, 1 → x = 2, y = 1 ● 若想要移除變數，使用del x y ● 常見的data type: number, string, list, tuple, boolean \n Simple input/output \n ● input(“…”) 在螢幕上顯示字串，並等待使用者輸入字串 ○\xa0 \xa0 \xa0x = input (“input your name: “) \uf0e0 螢幕上會顯示訊息 input your name:， \xa0 \xa0 \xa0 \xa0使用者輸入的內容，會用字串類型存到x變數 ○\xa0 \xa0 就算使用者輸入數字，仍然是以字串類型儲存（之後會介紹如何切割字串 \xa0 \xa0 \xa0（split），轉為數值） ● print (...) 顯示在螢幕上 ○\xa0 \xa0 \xa0e.g. print (“Hello World!!”) ○\xa0 \xa0 \xa0若要一次輸出多個變數至螢幕上，直接以逗號分開 e.g. print(x,y,z) ○\xa0 \xa0 \xa0也可以format output \n Python variable types \n ● Number 數值 ○\xa0 \xa0 \xa0int : a = 11 ○\xa0 \xa0 \xa0float: a = 1.1e-18 ○\xa0 \xa0 \xa0complex: a = 4. + 7j ● String 字串 （ 用“ “ 或 ‘ ‘夾起） ○\xa0 \xa0 \xa0e.g. x = “Hello World!” or x = ‘Hello World!’ ○\xa0 \xa0 \xa0取出字串的局部：x [0:3] ■\xa0 \xa0 \xa0 \xa0 \xa0注意：index 從 0 開始計算！ ■\xa0 \xa0 \xa0 \xa0 \xa0[a:b] -- begin at index a and end before index b (e.g., x[0:3] -> “Hel”) ○\xa0 \xa0 \xa0不可以對字串的局部做更改，e.g. x[0:3] =”Yo!” (這個是錯誤的語法) ● Boolean 邏輯 ○\xa0 \xa0 \xa0只有True, False兩種值，根據邏輯判斷（IF condition）的結果決定 ○\xa0 \xa0 \xa0兩個boolean 變數做運算，會以True=1, False=0 做整數運算 \n Python variables: list and tuple \n ● list, tuple ○\xa0 \xa0 \xa0類似陣列的概念，但可以混雜儲存不同型態的資料，如下所示 ○\xa0 \xa0 \xa0List： x = [ 'abcd', 786 , 2.23, 'john', 70.2] ○\xa0 \xa0 \xa0Tuple: y = ( 'abcd', 786 , 2.23, 'john', 70.2) ○\xa0 \xa0 \xa0assignment: list 使用 [], tuple 使用(), 每個元素都用”，”分開 ○\xa0 \xa0 \xa0list 的大小及元素可以改變。tuple則不行 (類似常數陣列) ○\xa0 \xa0 \xa0sub-list 或是 sub-tuple語法類似取出字串局部： \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 x[0:2] \uf0e0 ['abcd', 786 ] \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 y[2:4] \uf0e0 (786, 2.23 ) \n Convert data type \n 有時候需要不同型態的資料轉換，例如將字串”10”轉成整數10 下列為常用的built-in function ● int (x) ● float (x) ● str (x) \n Arithmetic Operators \n ● 加法 + ○\xa0 \xa0 \xa0string 相加：形成新的字串\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ● 次方 ** ■\xa0 \xa0 \xa0 \xa0 \xa0x = “Hello”, y = “World”\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ● 取餘數 % ■\xa0 \xa0 \xa0 \xa0 \xa0c = x + y → c = “HelloWorld”\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ● 整除至最近整數 // ● 減法 -\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ○相除後取最接近的整數(整實數)， ● 乘法 *\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 結果的類型取決於兩個變數的類型： ○\xa0 \xa0 \xa0string 乘一個數字(int)：字串重複幾次\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa09//2 = 4 ■\xa0 \xa0 \xa0 \xa0 \xa0x = “Yo!”\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 9.0//2.0 = 4.0 ■\xa0 \xa0 \xa0 \xa0 \xa0y = x * 3 → y = “Yo!Yo!Yo!”\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 11.0//3 = 4.0 ● 除法 / ○\xa0 \xa0 \xa0注意：兩個整數相除，結果是實數 ■\xa0 \xa0 \xa0 \xa0 \xa0x = 21, y = 10 ■\xa0 \xa0 \xa0 \xa0 \xa0c = x / y → c = 2.1 \n Arithmetic Operators \n ● 如果要進行下面的運算 a= a+b （用a+b的結果為a重新賦值） ● 在python可以改寫成： a += b ● 所以算術運算符號可以有 \xa0 \xa0 \xa0 \xa0 +=\xa0 \xa0 \xa0-=\xa0 \xa0 \xa0*=\xa0 \xa0 \xa0/=\xa0 \xa0 \xa0%=\xa0 \xa0 \xa0**=\xa0 \xa0 \xa0//= \n Modules or package （也稱為library） \n ● ”modules” or “packages”：通常是其他人寫好的函數或指令，打包成一個「工具庫」 \xa0方便分享使用。（非python內建，可能會需要下載安裝） ○\xa0 \xa0 \xa0本課程會用到的library: numpy (array), matplotlib (基本繪圖), basemap (地圖), \xa0 \xa0 \xa0 \xa0 \xa0netCDF (讀nc檔) ● 使用方式：import module_name ○\xa0 \xa0 \xa0在執行工具庫內的指令之前，就要先把modules 引進來（不然python不會認得 \xa0 \xa0 \xa0 \xa0 非內建的指令） ○\xa0 \xa0 \xa0使用工具庫內的指令：module_name.function (or module_name.constant) ○\xa0 \xa0 \xa0可以使用import module_name as xxx (xxx是你自己取的縮寫） \xa0 \xa0 \xa0 \xa0 使用指令的語法就簡化成xxx.function，例如: \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0import math as m \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0x=m.cos(m.pi) \n", 'tags': '', 'url': 'python基本語法.html'}, {'title': 'Dos 基本指令', 'text': '1. cd (Change Directory): 移動到某個資料夾 2. cd..:回上一層 3. cd\\(斜線代表「根目錄(root)):回 c 槽 4. cd 資料夾名稱:切換至某個資料夾 5. 切換到其他硬碟 d: 6. dir : 顯示資料夾底下的內容 7. dir/w: 橫向排列 8. dir/p: 分頁 9. nslookup 域名: 域名(Nomain name)查 IP 10. copy con: 建立檔案 copy con test.bat (enter) (檔案要副檔名) → this is line one (enter) (輸入內容) → this is line two (結束時 ctrl + z) (enter) 11. del 檔案名稱: 刪除檔案 12. md (Make Directery) 目錄名稱:建立目錄 13. rd 目錄名稱: 刪除一個空目錄 /s:刪除目錄下的所有子目錄和檔案 /q 取消系統詢問刪除與否的確認訊息 14. copy 原檔名 新檔名: 複製檔案 15. xcopy 原目錄名 新目錄名: 複製目錄 /D:只複製比目的檔還新的檔案 /s: 複製所有子目錄和檔案除空目錄外 16. type: 顯示檔案內容 17. ren 原檔名 新檔名:更改檔名 18. help: 顯示目前版本 DOS 的幫助資訊 19. move: 移動檔案，或重新命名一個檔案或目錄 移動檔案: move 檔案名稱 目錄名稱 重新命名檔案: move 原檔名 新檔名 重新命名目錄: move 原目錄名 新目錄名 20. 呼叫程式 exployer 檔案總管 taskmgr 工作管理員 logoff 登出 devmgmt.msc 裝置管理員 calc 計算機 control 控制台 notepad 記事本 wordpad write mspaint 小畫家 charmap 字元對應表 magnify 放大鏡 clean mgr 磁碟清理 osk 螢幕小鍵盤 msinfo32 系統資訊 compmgmt.msc 電腦管理 msconfig 系統設定公用程式 \n', 'tags': '', 'url': 'Dos 基本指令.html'}, {'title': '網路連線設定', 'text': '了解機械設計系電腦輔助設計室電腦的網路設定, 其中包括 IPv4 網路與 IPv6 網路設定. 正常情況下, 電腦輔助設計室中的 64 台電腦透過 IPv4 協定下的 DHCP 與 NAT 上網, 各電腦以 DHCP client 取得 192.168.1.* 的網路位址, 然後以 NAT 的一組外部 IP 上網, 通常必須設定 Proxy Server 為 http://proxy.kmol.info:3128 後上網會比較順暢, 但若 8 台 Proxy Servers 無法正常運作時, 則取消 Proxy Server 的設定. 瀏覽器代理主機設定 了解如何設定 Google Chrome 與 Firefox 瀏覽器的代理主機設定. 申請 Github 帳號 利用 Gmail 帳號申請 Github 帳號, 申請後利用電子郵箱收信進行確認後, 就可以在 Github 上建立倉儲. \n \n 我的blogger文章: https://40723210.blogspot.com/2019/05/github.html \n 操作流程和影片: \n 1.進入網頁之後在按右上角符號裡的設定 \n 2.滾到最下面>按進階>點擊 (開啟proxy設定) \n 3.點選LAN設定>打開proxy>輸入140.130.17.32>3128即可 \n 4.創建github帳戶，帳號是s加上學號，email是用學校給的 \n 我的教學影片: https://youtu.be/T6CIPW9ujT0 \n IPv6 環境設定 操作過程: \n 1.進入控制台開啟網路連線 \n 2.選擇自己所用的網路 > 右鍵內容 \n 3.勾選IPV6並取消IPV4，點選進入IPV6 \n 4.使用DNS輸入 2001:b000:168::1 \n 5.在網頁的proxy中設定完即可 \n 我的教學影片: https://youtu.be/uw8-NoNFpm0 \n \n \n', 'tags': '', 'url': '網路連線設定.html'}, {'title': '配置可攜程式環境', 'text': '取得 Windows 10 64 位元環境下的可攜程式環境 (下載\xa0 2019_cdb_w5.7z), 下載後解開目錄, 放入 USB3.0 規格以上的隨身碟或隨身硬碟. 以滑鼠點擊 start.bat 開啟可攜隨身系統, 以 stop.bat 關閉可攜隨身系統, 隨身碟必須在關閉所有應用程式執行下, 才可正常退出. 了解基本的 DOS (Disk Operating System) 指令 C:\\> 符號為 DOS 命令列視窗的回應 (Prompt), 表示目前在 C 槽硬碟的 \\ 根目錄, 若要切換到 Y 槽, 則在電腦的回應後, 輸入 Y:, 命令列將轉為 Y:\\> 若要更換目錄, 則使用 cd, 也就是 change directory 的意思, 例如: Y:\\>cd tmp 表示要從 Y 槽的根目錄更換到 tmp 目錄, 也就是 Y:\\tmp> 若要再回到 Y 槽的根目錄, 可以使用 cd .. 表示要從目前所在目錄, 往上跳回一個目錄, 也就是重新回到 Y 槽的根目錄. 另外, 無論目前位於哪一個子目錄, 也可以使用 cd \\ 直接回到根目錄. 或者從 Y:\\> 直接使用 cd \\tmp\\repo\\ssh\\wcm2019 直接從 Y 槽的根目錄, 跳進 Y:\\tmp\\repo\\ssh\\wcm2019> 此外, 常用的 DOS 指令有: dir - 列出目前所在目錄的內容 mkdir - 隨後加上要建立目錄的名稱, 可以建立目錄 cls - clear screen, 清除目前的命令列顯示的內容 \n \n \n 我的blogger文章: https://40723210.blogspot.com/2019/05/blog-post_39.html \n 操作流程和影片: \n 1.進入老師的blogger點選 2019_cdb_w13.7z 連結 \n 2.下載完成以後，解壓縮放進自己的隨身碟 \n 3.點選start.bat來開啟程式 \n 4.輸入d: >\xa0cd tmp >\xa0cd 40723210(你的資料夾) \n 5.進入後就可以進行改動了 \n ★git指令可參照簡介內的重點筆記 ★DOS指令可參照簡介內的重點筆記 \n 我的教學影片: https://youtu.be/lt86JkoTHnU \n \n', 'tags': '', 'url': '配置可攜程式環境.html'}, {'title': '倉儲改版', 'text': '建立 Git 倉儲, 並 clone 倉儲至近端工作後, 對遠端倉儲改版 可攜程式系統中已經內建 git, 可以在啟動 start.bat 後, 透過 path 的設定, 直接執行 git 指令. 建立 Git 倉儲, 共分為兩類, 一類是直接在 Github 網際介面下建立倉儲時, 要求建立 README.md 檔案, 之後可以直接在近端, 以 git clone 加上倉儲連線 URL, 將倉儲克隆一份到近端, 並以最新版本作為工作目錄, 使用者改版後, 可以直接透過 git add, commit 與 push 對遠端倉儲改版. 另一類則是故意在 Github 網際介面下建立倉儲時, 不要建立任何檔案, 而是在近端自行利用 git 指令建立倉儲架構, 新增內容後, 以 git remote add 設法在近端倉儲中納入 origin URL 後, 將近端倉儲版本新增提交推送到遠端. git add git add 可以用來新增一個檔案, 數個檔案, 或在之前提交後所新增的所有內容. git add 在 GIT 架構下, 是對所新增或修改的內容拍快照: git add . adds all modified and new (untracked) files in the current directory and all subdirectories to the staging area (a.k.a. the index), thus preparing them to be included in the next git commit . Any files matching the patterns in the .gitignore file will be ignored by git add git commit  git commit 執行之前, 必須使用 git config 建立臨時或永久的身分註記, 因為 GIT 在展開所有改版內容時, 必須明確登錄這些變更的作者與時間. 當使用者採用 git commit -m "改版說明訊息", 此次提交到 .git 目錄下的更動內容, 均會綁定使用者身分與改版所輸入的說明訊息. git push git push 在隨後沒有輸入遠端 URL 代號時, 表示要推送到 origin, 若透過 git remote add 設定其他代號與 URL 對應時, git push 加上代號, 就可以將此次的提交內容, 推送到指定的 URL 所在遠端倉儲. \n \n 我的blogger文章: https://40723210.blogspot.com/2019/05/blog-post_21.html \n 操作流程和影片: \n 1.先登入自己的github帳號。 \n 2.創建一個新的倉儲repositories。 \n 3.git clone\xa0 https://github.com/s40723210/40723210 \xa0。 \n 4.進入要存放該資料的資料夾tmp。 \n 5.開啟倉儲設定，點選要推送的branch。 \n 6.進入該倉儲資料夾，開始更新或變動。 \n 7.git status > git add . > git commit -m "標題" > git push。 \n ★git指令可參照簡介內的重點筆記 \n 我的教學影片: https://youtu.be/QBcUQYGy554 \n 我的blogger文章: https://40723210.blogspot.com/2019/04/ssh-keygit-clone-git-push.html \n 使用ssh key來進行git clone 與git push: \n \n 1.先把git config --edit --system裡面的helper = manager刪除後輸入:wq(是儲存後退出)。 \n 2.進入控制台>使用者帳戶>認證管理員>windows認證>刪除現存的github帳號。 \n 3.輸入ssh-keygen -t rsa -b 4096 -C "github的email"。 \n 4.輸入你想存放的位子例如:Y:\\home\\.ssh/id_rsa。 \n 5.一直案Enter到結束。 \n 6.打開id_rsa並且全部複製>進入setting>SSH and\xa0GPG\xa0keys 。 \n 7.案New ssh key 貼上>輸入想要的名子儲存。 \n ★vi指令可參照簡介內的重點筆記 \n 我的教學影片: https://youtu.be/SJHMm3o5uEw \n \n \n', 'tags': '', 'url': '倉儲改版.html'}, {'title': '靜態 CMSimfly', 'text': '利用 CMSimfly (https://github.com/chiamingyen/cmsimfly) 內容, 建立自己的 Github Pages 網站 設法利用  HTML5 CSS 與 Javascript , 納入與機械設計相關的靜態網頁內容 \n 我的Javascript裡面有許多納入與機械設計相關的靜態網頁內容 \n  for site wrap  \n 我的blogger文章: https://40723210.blogspot.com/2019/05/cmsimfly.html \n 操作流程和影片: \n 1.進入自己的倉儲資料夾 2.輸入python wsgi.py來開啟動態 3.進行改版或更新save 4.完成後按generate_pages來儲存 5.輸入git status > git add . > git commit -m "標題" > git push 6.到自己的倉儲檢查沒問題後即可 我的教學影片: https://youtu.be/z8sUoVAqmDo \n  <script src="../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n            <script src="../cmsimde/static/chimper/js/typed.js"></script>\n                    <script>\n                    var typed = new Typed(\'.typed-words\', {\n                    strings: ["Web Apps"," WordPress"," Mobile Apps"],\n                    typeSpeed: 80,\n                    backSpeed: 80,\n                    backDelay: 4000,\n                    startDelay: 1000,\n                    loop: true,\n                    showCursor: true\n                    });\n                    </script>\n             \n \n', 'tags': '', 'url': '靜態 CMSimfly.html'}, {'title': 'Mobile 網站內容', 'text': '學習如何使用 CMSimfly, 在網站中加入各種內容 (導入 Bootstrap frontend framework) 使用 Flask, bs4 與 lxml 模組 了解 CMSimfly 如何建構, 並且嘗試修改現有功能, 除錯或建立自己的網際內容管理系統 \n \n 我的blogger文章: https://40723210.blogspot.com/2019/05/mobile.html \n 操作流程和影片: \n 1.要使用老師模板的話，先進到老師的Github 2.點選系統開發 > Mobile 網站內容 > 套用模板一 3.進到連結後下載zip > 解壓縮 >改名成chimper 4.進到要改的倉儲 >\xa0 將資料夾放入static資料夾內 5.開起一個老師的新模板倉儲 > 以Raw打開cmsimfly.leo 6.複製全部 > 到自己的倉儲cmsimfly.leo > 貼上並儲存 7.以Raw打開老師的flaskapp.py > 一樣步驟貼上並儲存 8.進入動態更改 > 直接按generate_pages儲存即可 我的教學影片: https://youtu.be/DKVSZYUkotI \n', 'tags': '', 'url': 'Mobile 網站內容.html'}, {'title': 'Virtual Host', 'text': 'Fossil SCM 如何利用 Fossil SCM, 在 Virtualbox 中的 Ubuntu 18.04-2 (8.5 GB) 建立類似 Github 的系統, 可以放入 CMSimfly 的靜態網頁 Ubuntu 18.04 (https://www.ubuntu.com/about/release-cycle), 配置網路連線, 然後架構 uwsgi 環境下的 CMSimfly 動態網站, 或建立 Fossil SCM 用來伺服管理 CMSimfly 下有版次管理的靜態網頁, 或利用 nginx 伺服無版次管理的 CMSimfly 靜態網頁. \n \n 我的blogger文章: https://40723210.blogspot.com/2019/05/virtual-host.html \n 操作流程和影片: \n 1.google輸入ubuntu > 點選官網 > 下載 ubuntu server 2.打開virtualbox > New > 輸入名子 > 4096 MB 3.Cearte > VMDK > Dynamically > 500.00 GB 4.Sttings > Network > bridged Adapter > 進入網路中心 5.選擇電腦所使用的連接網路 > ok > Start 6.選取剛剛所下載的ubuntu > 開始 > 選取語言 7.Enter >\xa0 Enter > 輸入proxy :http://140.130.17.3:3128 8. Enter \xa0>\xa0 Enter \xa0>\xa0 Enter \xa0> continue > 全部都打一樣的 9.space >\xa0 Enter \xa0>\xa0 Enter \xa0> 再輸入帳密 > 即可開始設定 10. \xa0輸入 sudo apt install uwsgi 來安裝uwsgi 我的教學影片: https://youtu.be/03R3tUvTyIQ \xa0 \n 開始設定的流程 \n 我的blogger文章: https://40723210.blogspot.com/2019/06/virtual-host-2.html \n 根據老師的教學步驟: 1. 安裝最新版的 Virtualbox 2. 建立 Ubuntu 18.04 虛擬主機 3. 以網路卡橋接啟動 Ubuntu 伺服器 4. 以 sudo apt install nginx 安裝 nginx WWW 伺服器 5. 以 ifconfig 查 Ubuntu 伺服器的 IP, 測試 nginx 伺服器是否可以連線 6. 以 Windows 10\xa0 下的 Filezilla client, 將編輯好的 nginx 設定檔案送到 Ubuntu 7.\xa0利用 Ubuntu 指令將設定檔案搬至設定位置後, 以 /etc/init.d/nginx restart 重新啟動 nginx 8. 在 Ubuntu 中以 sudo apt install uwsgi 安裝 uwsgi 9. 在 Windows 10 編輯 uwsgi 與 nginx 所需的設定檔案, 完成後以 filezilla 送至 Ubuntu. 10. 將 CMSimfly 程式碼送到 Ubuntu 伺服器中對應目錄後. 11. 在 Ubuntu 建立 cmsimfly 服務, 並設定隨機啟動. 12. 完成後, 在 Windows 10 以瀏覽器連線至 CMSimfly, 確認動態網頁與靜態網頁可以在虛擬主機中正常啟動. 老師的blogger: https://2019wcm.blogspot.com/ 最後我完成的虛擬主機連結:192.168.56.102 我的操作影片1: https://youtu.be/Aj-_ISvdLGI 我的操作影片2: https://youtu.be/SVL-Hk0yNew \n', 'tags': '', 'url': 'Virtual Host.html'}, {'title': 'Javascript', 'text': '這裡是利用\xa0 HTML5 CSS 與 Javascript , 納入與機械設計相關的靜態網頁內容 \n', 'tags': '', 'url': 'Javascript.html'}, {'title': 'First game', 'text': 'Try it \n \n \n \n \n \n \n \n  Your browser doesn\'t support the HTML5 element canvas.      Throw dice  \n Stage:   Point:   Outcome:  \n <script type="text/javascript">// <![CDATA[\nvar cwidth = 400;\n    var cheight = 300;\n    var dicex = 50;\n    var dicey = 50;\n    var dicewidth = 100;\n    var diceheight = 100;\n    var dotrad = 6;\n    var ctx;\n    var dx;\n    var dy;\n    var firstturn = true;\n    var point;\nfunction throwdice() {\n    var sum;\n    var ch = 1+Math.floor(Math.random()*6);\n    sum = ch;\n    dx = dicex;\n    dy = dicey;\n    drawface(ch);\n    dx = dicex + 150;\n    ch=1 + Math.floor(Math.random()*6);\n    sum += ch;\n    drawface(ch);\n    if (firstturn) {\n        switch(sum) {\n            case 7:\n            case 11:\n              document.f.outcome.value="You win!";\n              break;\n            case 2:\n            case 3:\n            case 12:\n              document.f.outcome.value="You lose!";\n              break;\n            default:\n              point = sum;\n              document.f.pv.value=point;\n              firstturn = false;\n              document.f.stage.value="Need follow-up throw.";\n              document.f.outcome.value="   ";\n        }\n    }\n    else {\n        switch(sum) {\n        case point:\n           document.f.outcome.value="You win!";\n           document.f.stage.value="Back to first throw.";\n           document.f.pv.value=" ";\n           firstturn = true;\n           break;\n        case 7:\n           document.f.outcome.value="You lose!";\n           document.f.stage.value="Back to first throw.";\n           document.f.pv.value=" ";\n           firstturn = true;\n        }\n            }\n}\nfunction drawface(n) {\n  ctx = document.getElementById(\'canvas\').getContext(\'2d\');  \n  ctx.lineWidth = 5;\n  ctx.clearRect(dx,dy,dicewidth,diceheight);\n  ctx.strokeRect(dx,dy,dicewidth,diceheight)\n  var dotx;\n  var doty;\n  ctx.fillStyle = "#009966";\n    switch(n) {\n        case 1:\n         draw1();\n         break;\n        case 2:\n         draw2();\n         break;\n        case 3:\n         draw2();\n         draw1();\n         break;\n        case 4:\n         draw4();\n         break;\n        case 5:\n         draw4();\n         draw1();\n         break;\n        case 6:\n         draw4();\n         draw2mid();\n         break;\n         \n    }\n}\nfunction draw1() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + .5*dicewidth;\n    doty = dy + .5*diceheight;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n}\nfunction draw2() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + 3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy+diceheight-3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n}\nfunction draw4() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + 3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy+diceheight-3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + diceheight-3*dotrad;  //no change\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy+ 3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill(); \n}\nfunction draw2mid() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + .5*diceheight;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy + .5*diceheight; //no change\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n}\n// ]]></script>\n<p><canvas height="300" id="canvas" width="400"> Your browser doesn\'t support the HTML5 element canvas. </canvas> <br> <button onclick="throwdice();">Throw dice </button></p>\n<form id="f" name="f">Stage: <input name="stage" type="text" value="First Throw"> Point: <input name="pv" type="text" value="   "> Outcome: <input name="outcome" type="text" value="     "></form>\n \n', 'tags': '', 'url': 'First game.html'}, {'title': 'canvas', 'text': '\n  Your browser doesn\'t support the HTML5 element canvas.  \n \n 繪圖   清除 \n <p><canvas height="300" id="canvas" width="400"> Your browser doesn\'t support the HTML5 element canvas. </canvas></p>\n<script>\ncanvas = document.getElementById("canvas");\nctx = canvas.getContext(\'2d\');\n \nfunction draw(){\n ctx.beginPath();\n ctx.strokeStyle = "rgb(200,0,0)";\n ctx.arc(200, 200,50,0,2*Math.PI, false);\n ctx.closePath();\n ctx.stroke();\n}\n \nfunction clear_canvas(){\n// Store the current transformation matrix\n// The save() method pushes the current state onto the stack..\nctx.save();\n \n// Use the identity matrix while clearing the canvas\n// the setTransform() method lets you scale, rotate, move, and skew the current context.\n// setTransform(Horizontal scaling, Horizontal skewing,Vertical skewing, Vertical scaling, Horizontal moving, Vertical moving)\nctx.setTransform(1, 0, 0, 1, 0, 0);\nctx.clearRect(0, 0, canvas.width, canvas.height);\n// Restore the transform\n// The restore() method pops the top state on the stack, restoring the context to that state.\nctx.restore();\n}\n</script>\n<p><button onclick="draw()">繪圖</button> <button onclick="clear_canvas()">清除</button></p> \n', 'tags': '', 'url': 'canvas.html'}, {'title': 'Spur Gear1', 'text': '\n  啟動 Brython  \n \n \n  以下實際利用  Brython 繪圖 \n \n  for Brython  \n \n \n  啟動 brython()  \n \n \n \n  以下製作 button \n \n   Set Number of Gears \n <!-- 導入 Brython 標準程式庫 -->\n<script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<p></p>\n<!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\n// 設定 data/py 為共用程式路徑\nbrython({debug:1, pythonpath:[\'./../data/py\']});\n}\n</script>\n<p><canvas height="600" id="onegear" width="800"></canvas></p>\n<!-- 以下製作 button-->\n<div height="20" id="onegear_div" width="800"></div>\n<p><input id="n" type="text" value="22"><br> <button id="button">Set Number of Gears</button></p>\n<!-- 以下實際利用  Brython 繪圖-->\n<script type="text/python3">\nfrom browser import document as doc\nimport math\n# deg 為角度轉為徑度的轉換因子\ndeg = math.pi/180.\n# 定義 Spur 類別\nclass Spur(object):\n    def __init__(self, ctx):\n        self.ctx = ctx\n  \n    def create_line(self, x1, y1, x2, y2, width=3, fill="red"):\n        self.ctx.beginPath()\n        self.ctx.lineWidth = width\n        self.ctx.moveTo(x1, y1)\n        self.ctx.lineTo(x2, y2)\n        self.ctx.strokeStyle = fill\n        self.ctx.stroke()\n  \n    # 定義一個繪正齒輪的繪圖函式\n    # midx 為齒輪圓心 x 座標\n    # midy 為齒輪圓心 y 座標\n    # rp 為節圓半徑, n 為齒數\n    # pa 為壓力角 (deg)\n    # rot 為旋轉角 (deg)\n    # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷\n    def Gear(self, midx, midy, rp, n=20, pa=20, color="black"):\n        # 齒輪漸開線分成 15 線段繪製\n        imax = 15\n        # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線\n        self.create_line(midx, midy, midx, midy-rp)\n        # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數\n        # 模數也就是齒冠大小\n        a=2*rp/n\n        # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍\n        d=2.5*rp/n\n        # ra 為齒輪的外圍半徑\n        ra=rp+a\n        # rb 則為齒輪的基圓半徑\n        # 基圓為漸開線長齒之基準圓\n        rb=rp*math.cos(pa*deg)\n        # rd 為齒根圓半徑\n        rd=rp-d\n        # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd\n        # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小\n        # 將圓弧分成 imax 段來繪製漸開線\n        # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd\n        if rd>rb:\n            dr = (ra-rd)/imax\n        else:\n            dr=(ra-rb)/imax\n        # tan(pa*deg)-pa*deg 為漸開線函數\n        sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg\n        for j in range(n):\n            ang=-2.*j*math.pi/n+sigma\n            ang2=2.*j*math.pi/n+sigma\n            lxd=midx+rd*math.sin(ang2-2.*math.pi/n)\n            lyd=midy-rd*math.cos(ang2-2.*math.pi/n)\n            for i in range(imax+1):\n                # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd\n                if rd>rb:\n                    r=rd+i*dr\n                else:\n                    r=rb+i*dr\n                theta=math.sqrt((r*r)/(rb*rb)-1.)\n                alpha=theta-math.atan(theta)\n                xpt=r*math.sin(alpha-ang)\n                ypt=r*math.cos(alpha-ang)\n                xd=rd*math.sin(-ang)\n                yd=rd*math.cos(-ang)\n                # i=0 時, 繪線起點由齒根圓上的點, 作為起點\n                if(i==0):\n                    last_x = midx+xd\n                    last_y = midy-yd\n                # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點\n                self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color)\n                # 最後一點, 則為齒頂圓\n                if(i==imax):\n                    lfx=midx+xpt\n                    lfy=midy-ypt\n                last_x = midx+xpt\n                last_y = midy-ypt\n            # the line from last end of dedendum point to the recent\n            # end of dedendum point\n            # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標\n            # 下列為齒根圓上用來近似圓弧的直線\n            self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color)\n            for i in range(imax+1):\n                # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd\n                if rd>rb:\n                    r=rd+i*dr\n                else:\n                    r=rb+i*dr\n                theta=math.sqrt((r*r)/(rb*rb)-1.)\n                alpha=theta-math.atan(theta)\n                xpt=r*math.sin(ang2-alpha)\n                ypt=r*math.cos(ang2-alpha)\n                xd=rd*math.sin(ang2)\n                yd=rd*math.cos(ang2)\n                # i=0 時, 繪線起點由齒根圓上的點, 作為起點\n                if(i==0):\n                    last_x = midx+xd\n                    last_y = midy-yd\n                # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點\n                self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color)\n                # 最後一點, 則為齒頂圓\n                if(i==imax):\n                    rfx=midx+xpt\n                    rfy=midy-ypt\n                last_x = midx+xpt\n                last_y = midy-ypt\n            # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標\n            # 下列為齒頂圓上用來近似圓弧的直線\n            self.create_line(lfx,lfy,rfx,rfy,fill=color)\ncanvas = doc[\'onegear\']\nctx = canvas.getContext("2d")\n  \n# 以 button 驅動的事件函式\ndef setgearnumber(e):\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n    x = (canvas.width)/2\n    y = (canvas.height)/2\n    if doc["n"].value.isdigit():\n        n1 = int(doc["n"].value)\n    else:\n        n1= 25\n    # 設定齒輪參數\n    x = (canvas.width)/2\n    y = (canvas.height)/2\n    r = 0.6*(canvas.height/2)\n    pa = 20\n    # 繪出齒輪\n    Spur(ctx).Gear(x, y, r, n1, pa, "blue")\n#判定 button\nsetgearnumber(True)\ndoc[\'button\'].bind(\'click\',setgearnumber)\n</script> \n', 'tags': '', 'url': 'Spur Gear1.html'}, {'title': 'Spur Gears', 'text': '\n  啟動 Brython  \n \n \n \n       Set Number of Gears \n \n', 'tags': '', 'url': 'Spur Gears.html'}, {'title': '國旗-改', 'text': '\n \n \n  以下利用 Brython 程式執行繪圖  \n \n \n \n \n \n  for Brython  \n \n \n  啟動 brython()  \n \n \n \n <!-- for Brython -->\n<script src="./../static/brython.js"></script>\n<script src="./../static/brython_stdlib.js"></script>\n<!-- 啟動 brython() -->\n<p>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython(1);\n}\n// ]]></script>\n</p>\n<!-- 以下利用 Brython 程式執行繪圖 -->\n<p><canvas height="400" id="taiwan_flag" width="600"></canvas></p>\n<p>\n<script type="text/python3">// <![CDATA[\n# 導入 doc\nfrom browser import document as doc\nimport math\n  \n# 準備繪圖畫布\ncanvas = doc["taiwan_flag"]\nctx = canvas.getContext("2d")\n# 進行座標轉換, x 軸不變, y 軸反向且移動 canvas.height 單位光點\n# ctx.setTransform(1, 0, 0, -1, 0, canvas.height)\n# 以下採用 canvas 原始座標繪圖\nflag_w = canvas.width\nflag_h = canvas.height\ncircle_x = flag_w/2\ncircle_y = flag_h/2\n# 先畫滿地紅\nctx.fillStyle=\'rgb(255, 0, 0)\'\nctx.fillRect(0,0,flag_w,flag_h)\n# 再畫青天\nctx.fillStyle=\'rgb(0, 0, 150)\'\nctx.fillRect(flag_w/4,flag_h/4,300,200)\n# 畫十二道光芒白日\nctx.beginPath()\nstar_radius = flag_w/8\nangle = 0\nfor i in range(24):\n    angle += 5*math.pi*2/12\n    toX = circle_x + math.cos(angle)*star_radius\n    toY = circle_y + math.sin(angle)*star_radius\n    # 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo\n    if (i):\n        ctx.lineTo(toX, toY)\n    else:\n        ctx.moveTo(toX, toY)\nctx.closePath()\n# 將填色設為白色\nctx.fillStyle = \'#fff\'\nctx.fill()\n# 白日:藍圈\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w*17/240, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為藍色\nctx.fillStyle = \'rgb(0, 0, 149)\'\nctx.fill()\n# 白日:白心\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w/16, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為白色\nctx.fillStyle = \'#fff\'\nctx.fill()\n// ]]></script>\n</p>\n<p></p>\n<!-- for Brython -->\n<script src="./../static/brython.js"></script>\n<script src="./../static/brython_stdlib.js"></script>\n<!-- 啟動 brython() -->\n<p>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython(1);\n}\n// ]]></script> \n \n  for Brython  \n \n \n  啟動 brython()  \n \n \n \n \n', 'tags': '', 'url': '國旗-改.html'}, {'title': '國旗-改2', 'text': '\n \n \n  以下利用 Brython 程式執行繪圖  \n \n \n \n \n <!-- for Brython -->\n<script src="./../static/brython.js"></script>\n<script src="./../static/brython_stdlib.js"></script>\n<!-- 啟動 brython() -->\n<p>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython(1);\n}\n// ]]></script>\n</p>\n<!-- 以下利用 Brython 程式執行繪圖 -->\n<p><canvas height="400" id="taiwan_flag" width="600"></canvas></p>\n<p>\n<script type="text/python3">// <![CDATA[\n# 導入 doc\nfrom browser import document as doc\nimport math\n  \n# 準備繪圖畫布\ncanvas = doc["taiwan_flag"]\nctx = canvas.getContext("2d")\n# 進行座標轉換, x 軸不變, y 軸反向且移動 canvas.height 單位光點\n# ctx.setTransform(1, 0, 0, -1, 0, canvas.height)\n# 以下採用 canvas 原始座標繪圖\nflag_w = canvas.width\nflag_h = canvas.height\ncircle_x = flag_w/2\ncircle_y = flag_h/2\n# 先畫滿地紅\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w/3, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為紅色\nctx.fillStyle = \'#ff0000\'\nctx.fill()\n# 再畫青天\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w/5, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為藍色\nctx.fillStyle = \'#0000dd\'\nctx.fill()\n# 畫十二道光芒白日\nctx.beginPath()\nstar_radius = flag_w/8\nangle = 0\nfor i in range(24):\n    angle += 5*math.pi*2/12\n    toX = circle_x + math.cos(angle)*star_radius\n    toY = circle_y + math.sin(angle)*star_radius\n    # 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo\n    if (i):\n        ctx.lineTo(toX, toY)\n    else:\n        ctx.moveTo(toX, toY)\nctx.closePath()\n# 將填色設為白色\nctx.fillStyle = \'#fff\'\nctx.fill()\n# 白日:藍圈\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w*17/240, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為藍色\nctx.fillStyle = \'rgb(0, 0, 149)\'\nctx.fill()\n# 白日:白心\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w/16, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為白色\nctx.fillStyle = \'#fff\'\nctx.fill()\n// ]]></script>\n</p>\n<p></p>\n<!-- for Brython -->\n<script src="./../static/brython.js"></script>\n<script src="./../static/brython_stdlib.js"></script>\n<!-- 啟動 brython() -->\n<p>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython(1);\n}\n// ]]></script> \n \n  for Brython  \n \n \n  啟動 brython()  \n \n \n \n', 'tags': '', 'url': '國旗-改2.html'}, {'title': '國旗-改3', 'text': '\n \n \n  以下利用 Brython 程式執行繪圖  \n \n \n \n \n \n  for Brython  \n \n \n  啟動 brython()  \n \n \n', 'tags': '', 'url': '國旗-改3.html'}, {'title': '貪食蛇', 'text': '參考資料: http://www.w3school.com.cn/tags/html_ref_canvas.asp \n  for Brython  \n \n \n  啟動 brython()  \n \n \n \n 0 \n  以下利用 Brython 程式執行繪圖  \n \n \n', 'tags': '', 'url': '貪食蛇.html'}, {'title': '打磚塊', 'text': '參考資料: https://developer.mozilla.org/en-US/docs/Games \n  for Brython  \n \n \n  啟動 brython()  \n \n \n \n  以下利用 Brython 程式執行繪圖  \n \n \n \n', 'tags': '', 'url': '打磚塊.html'}, {'title': '程式嵌入', 'text': '打字練習射飛字 \n \n', 'tags': '', 'url': '程式嵌入.html'}, {'title': '問題探討與解決', 'text': '網頁無法顯示Brython，Spur Gear 導入錯誤，案F12來開啟Console檢查錯誤。 \n 問題(一)如下圖 \n \n 解決方法: \n 開啟本倉儲資料夾，打開flaskapp.py，案ctrl+f來找到 page_content = request.form[\'page_content\']，有2個地方都在底下加入 \n page_content = page_content.replace(\'//  <![CDATA[\', \'\') \n page_content = page_content.replace(\'// ]]> \', \'\') \n \n save後即可解決問題。 \n \n ==================================================================== \n 問題(二)如下圖 \n \n \n 解決方法: \n \n 檢查本倉儲資料夾static底下是否有brython.js與 brython_stdlib.js，沒有的話就必須加入這2個js檔案，有的話就是導入指令錯誤如: \n \n \n <!-- 導入 Brython 標準程式庫 --> \n < script   src = "./../cmsimde/static/brython.js" ></ script > \n < script   src = "./../cmsimde/static/brython_stdlib.js" ></ script > \n \n 必須改為: \n \n \n <!-- 導入 Brython 標準程式庫 --> \n < script \xa0 src = "/static/brython.js" ></ script > \n < script \xa0 src = "/static/brython_stdlib.js" ></ script > \n \n \n 即可解決顯示問題。 \n \n', 'tags': '', 'url': '問題探討與解決.html'}, {'title': '期中報告', 'text': 'PPT檔案: 40723210期中報告.pdf \n 影片: https://youtu.be/avqyumgR6a8 \n', 'tags': '', 'url': '期中報告.html'}, {'title': '期末報告', 'text': '影片連結: https://youtu.be/AluWz93FsKE \n', 'tags': '', 'url': '期末報告.html'}]};