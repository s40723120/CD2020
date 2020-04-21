var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '每周進度', 'text': '', 'tags': '', 'url': '每周進度.html'}, {'title': 'Week1', 'text': '建立倉儲git clone後 \n 在小黑窗輸入git submodule add\xa0 https://github.com/mdecourse/cmsimde \n', 'tags': '', 'url': 'Week1.html'}, {'title': 'Week2', 'text': 'Python升級到3.8.2 \n 到 https://www.python.org/downloads/release/python-382/ 下載安裝檔 \n 把pip取消勾選 \n \n 安裝完後使用python wsgi.py將無法近端啟用 \n 此時使用下列指令 \n pip install\xa0 Flask \n pip install\xa0 Markdown \n pip install\xa0 lxml \n pip install\xa0 bs4 \n pip install\xa0 flask_cors \n pip install\xa0 pelican \n pip install\xa0 leo \n 這些python3.8.2缺少的模組給安裝下來 \n', 'tags': '', 'url': 'Week2.html'}, {'title': 'Week3', 'text': '閱讀電子書 https://www.coppeliarobotics.com/helpFiles/index.html \n 從中了解關於Coppeliasim的功能 \n Coppeliasim有非常完善的物理仿真 引擎、支持多種類型機器人。還有許多額外的物件可以導入包 含完整的運動學計算器，路徑規劃，嵌入式圖像處理的視覺傳感器。 可以通過Solidwork，AutoCAD之類的三維繪圖軟件符合需求的模型，再轉換成stl文件導入即可。 \n Coppeliasim支持的程式語言有C++.Python.Java.Lua.Matlab.Octave。 \n', 'tags': '', 'url': 'Week3.html'}, {'title': 'Week4', 'text': '', 'tags': '', 'url': 'Week4.html'}, {'title': 'Week5', 'text': '', 'tags': '', 'url': 'Week5.html'}, {'title': 'Week6', 'text': '', 'tags': '', 'url': 'Week6.html'}, {'title': 'Week7', 'text': '', 'tags': '', 'url': 'Week7.html'}, {'title': 'Week8', 'text': '\n', 'tags': '', 'url': 'Week8.html'}, {'title': 'Coppeliasim', 'text': 'CoppeliaSim 高度可定制的模擬器，可以自定義模擬的每個方面。此外對於機器人學習者可以大大降低學習成本。 \n 機器人設計工具可以透過v-rep裡的模擬平台，加入相關引擎、物理碰撞等旋轉功能。 \n v-rep是一款靈活、可拓展的通用機器人模擬器，支持六種不同的編程或編碼方法，每種方法都具有相對於其他方法的特殊優點（顯然還有缺點），但所有六種方法都是相互兼容的（即可以同時使用，甚至可以協同使用）。 \n 這可以通過精心設計的應用程序編程接口（API）來實現。 \n', 'tags': '', 'url': 'Coppeliasim.html'}, {'title': 'Entities', 'text': 'Entities 實體 An entity is a term that refers to a scene object or a collection. 實體是指 場景物件 或 集合體 的專業術語 \n', 'tags': '', 'url': 'Entities.html'}, {'title': 'Scene objects', 'text': 'Scene objects \xa0 場景物件 The main elements in CoppeliaSim that are used for building a simulation scene are scene objects (objects in short). CoppeliaSim中用於構建模擬場景的主要元素是場景物件（簡而言之） Objects are visible in the scene hierarchy and in the scene view. 物件在場景層次結構和場景視圖中可見。 In the scene view, objects have a three dimensional representation as illustrated in following figure: 在物件視圖中，物件具有三維表示，如下圖所示： Following list gives a brief functional description of each object type: 以下列表簡要介紹了每種物件類型的功能： \n ● Shapes : a shape is a rigid mesh that is composed of triangular faces. 形狀：形狀是由三角形面組成的剛性網格。 ● Joints : a joint object is a joint or actuator. Four types are supported: revolute joints, prismatic joints, screws and spherical joints. 關節：關節物件是關節或執行器。四種類型支持架：旋轉接頭，棱柱接頭，螺釘和球形接頭。 ● Graphs : a graph is used to record and visualize simulation data. 圖形：圖形用於記錄和可視化模擬數據。 ● Dummies : a dummy is a point with orientation. Dummies are multipurpose objects that can have many different applications. 假人：假人是具有定向的點。假人是可以具有許多不同應用程序的多用途對象。 ● Proximity sensor s : a proximity sensor detects objects in a geometrically exact fashion within its detection volume. CoppeliaSim supports pyramid-, cylinder-, disk-, cone- and ray-type proximity sensors. 接近傳感器：接近傳感器以幾何精確的方式在其檢測範圍內檢測物體。 CoppeliaSim支持金字塔型，圓柱型，圓盤型，圓錐型和射線型接近傳感器。 ● Vision sensors : a vision sensor is a camera-type sensor, reacting to light, colors and images. 視覺傳感器：視覺傳感器是一種相機型傳感器，對光線，顏色和圖像有反應。 ● Force sensors : a force sensor is an object able to measure forces and torques that are applied to it. It also has the ability to break if a given threashold is overshot. 力傳感器：力傳感器是能夠測量施加到其上的力和扭矩的對象。 如果給定的閾值被超出，它也具有打破的能力。 ● Cameras : a camera is an object that allows seeing the simulation scene from various view points. 攝影機：攝影機是一個可以從各個角度查看模擬場景的對象。 ● Lights : a light is an object that allows illuminating the simulation scene. 燈光：燈光是一個可以照亮模擬場景的對象。 ● Paths : a path is an object that defines a path or trajectory in space. It can be used for various purposes, also as a customized joint or actuator. 路徑：路徑是在空間中定義路徑或軌蹟的對象。 它可以用於各種目的，也可以用作定制的接頭或執行器。 ● OC trees : an OC tree is a spacial partitioning data structure made up by voxels. OC樹：OC樹是由體素組成的空間分區數據結構。 ● Point clouds : a point cloud is an OC tree structure that contains points. 點雲：點雲是包含點的OC樹結構。 Some of above objects can have special properties allowing other objects or calculation modules to interact with them. Objects can be: 以上某些物件可以具有特殊的屬性，從而允許其他物件或計算模塊與它們進行交互。物件可以是： ● Collidable \xa0 \xa0 \xa0 \xa0可碰撞 ● Measurable \xa0 \xa0 可衡量的 ● Detectable \xa0 \xa0 \xa0可檢測的 ● Renderable \xa0 \xa0 可呈現 ● Viewable \xa0 \xa0 \xa0 \xa0 可見的 \n', 'tags': '', 'url': 'Scene objects.html'}, {'title': 'Collections', 'text': 'Collections \xa0 集合 A collection is a user-defined collection of scene objects. 集合是場景物件的用戶定義集合。 A collection has to contain at least one object and is considered to be an entity (objects are also entities) 集合必須包含至少一個物件，並且被認為是一個實體（物件也是實體）。 Collections are useful when referring to several objects like a robot for instance 當引用多個物件（例如機器人）時，集合很有用 CoppeliaSim supports calculations based not only on objects, but also on collections CoppeliaSim支持不僅基於物件而且還基於集合的計算 For instance the collision detection module allows registering following collision pair(collection A; object B 例如，碰撞檢測模塊允許註冊以下碰撞(集合A；物件B) The collision checking algorithm will then check whether the collection A (any object composing it) collides with object B. 然後，碰撞檢查算法將檢查集合A（組成它的任何對象）是否與物件B碰撞。 Collections are collidable, measurable, detectable and renderable entities. 集合是可碰撞，可測量，可檢測和可渲染的實體。 \n', 'tags': '', 'url': 'Collections.html'}, {'title': 'Calculation modules', 'text': 'CoppeliaSim offers powerful calculation functionalities or calculation modules CoppeliaSim提供強大的計算功能或計算模塊 that are not directly encapsulated in objects(like proximity sensors or vision sensors for instance) 沒有直接封裝在物件中(例如接近傳感器或視覺傳感器) but that rather operate on one or several objects. 而是對一個或幾個物件進行操作。 Calculation modules include: 計算模塊包括： ● the collision detection module 碰撞檢測模塊 ● the minimum distance calculation module 最小距離計算模塊 ● the inverse kinematics calculation module 逆運動學計算模塊 ● the dynamics module 動力學模塊 Other, similar functionality, might be offered via a plugin, as was done with the path/motion planning plugin for instance. 其他類似功能也可以通過插件提供，例如使用路徑/運動計劃插件。 Some calculation module allow registering calculation objects that are user defined. Calculation objects are different from scene objects, but are indirectly linked to them by operating on them. This means that calculation objects cannot exist by themselves: 一些計算模塊允許註冊用戶定義的計算物件。計算物件不同於場景物件，但是通過對其進行操作而間接鏈接到它們。 這意味著計算物件本身不能存在： Collision detection objects (or collision objects) rely on collidable objects. Minimum distance calculation objects (or distance objects) rely on measurable objects. Inverse kinematics calculation objects (or IK groups) rely mainly on dummies and kinematic chains, where joint objects play a central role. 碰撞檢測對象（或碰撞對象）依賴於可碰撞對象。 最小距離計算對象（或距離對象）依賴於可測量的對象。 逆運動學計算對象（或IK組）主要依賴於虛擬對象和運動鏈，其中關節對象起著核心作用。 \n', 'tags': '', 'url': 'Calculation modules.html'}, {'title': 'Writing code', 'text': 'CoppeliaSim is a highly customizable simulator: every aspect of a simulation can be customized CoppeliaSim是高度可定制的模擬器：可以自定義模擬的每個方面。 Moreover, the simulator itself can be customized and tailored so as to behave exactly as desired. 此外，模擬器本身可以進行定制和定制，以使其性能完全符合要求。 This is allowed through an elaborate Application Programming Interface (API). 這可以通過精心設計的應用程序編程接口（API）來實現。 Six different programming or coding approaches are supported, 支持六種不同的編程或編碼方法， each having particular advantages (and obviously also disadvantages) over the others 每個都比其他的具有特殊的優勢（顯然也有劣勢） but all six are mutually compatible (i.e. can be used at the same time, or even hand-in-hand) 但所有六種方法都是相互兼容的（即可以同時使用，甚至可以穿插使用）。 The control entity of a model, scene, or the simulator itself can be located inside: 模型，場景或模擬器本身的控制實體可以位於以下位置： \n ● embedded scrip t \xa0 \xa0 \xa0嵌入式腳本 ● an add-on\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 附加組件 ● a plugin \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 插件 ● remote API client \xa0 \xa0\xa0 遠程API客戶端 ● ROS node ● BlueZero node \n', 'tags': '', 'url': 'Writing code.html'}, {'title': 'Webots', 'text': 'webots相關資料 https://cyberbotics.com/doc/guide/development-environments \n webot載點 \n 可攜版本 \n 電腦版本 \n', 'tags': '', 'url': 'Webots.html'}, {'title': 'Programming Fundamentals', 'text': '編程基礎 \n 本章介紹使用Webots編程的基本概念。Webots控制器可以用C / C ++，Java，Python或 MATLAB \xa0 TM 編寫。 \n \n', 'tags': '', 'url': 'Programming Fundamentals.html'}, {'title': 'Controller Programming', 'text': '控制器編程 \n 主要介紹關於輸出、讀取、控制等程式碼的使用方式以及編寫例子。 \n', 'tags': '', 'url': 'Controller Programming.html'}, {'title': 'Supervisor Programming', 'text': 'Supervisor編程 \n 介紹Supervisor指令的獨特之處， wb_supervisor_* 可以被用來控制所述模擬處理和修改場景樹，例如可以代替人工操作，測量機器人行進的距離或將其移回其初始位置等‧‧‧也可以用於拍攝屏幕快照或模擬視頻，重新啟動或可以終止仿真等。它可以讀取或修改“場景樹”中每個字段的值，例如讀取或更改機器人的位置，對象的顏色或打開或關閉光源，以及執行許多其他有用的操作。 \n 內有追蹤機器人路徑與設定機器人位置的範例 \n', 'tags': '', 'url': 'Supervisor Programming.html'}, {'title': 'Using Numerical Optimization Methods', 'text': '使用數值優化方法 \n 數值優化 \n 使用單個控制器 \n 使用兩種不同類型的控制器 \n 使用優化算法時，您可能需要在每次適應性評估之後或之前重置機器人。 有幾種重置機器人的方法: \n 使用wb_supervisor_field_set_ *和wb_supervisor_simulation_reset_physics函數 \n 使用wb_supervisor_world_reload函數 \n 使用wb_supervisor_world_reset函數 \n 通過啟動和退出Webots \n \n', 'tags': '', 'url': 'Using Numerical Optimization Methods.html'}, {'title': 'C++、Java、Python', 'text': '本節說明C API與C ++ / Java / Python API之間的主要區別。 \n Java和Python API是使用SWIG從C ++ API自動生成的。 因此，在這三種語言中，類和方法的名稱以及參數的數量及其類型非常相似。 \n C ++示例 \n Java示例 \n Python範例 \n', 'tags': '', 'url': 'C++、Java、Python.html'}, {'title': 'MATLAB', 'text': 'MATLAB \n 用於Webot \xa0 的 MATLAB \xa0 \xa0 API與C API非常相似。 函數名稱相同，在某些情況下僅參數的類型和數量略有不同。 《 Webots \xa0 參考手冊》 中介紹了MATLAB函數和原型 。 請注意，與C API不同， MATLAB API \xa0 中沒有 wb_robot_init 和 wb_robot_cleanup 函數。 在輸入控制器代碼之前和之後，分別自動進行必要的初始化和清除。 \n', 'tags': '', 'url': 'MATLAB.html'}, {'title': 'Controller Plugin', 'text': '控制器插件 \n 控制器功能可以通過用戶實現的插件進行擴展。控制器插件的目的是簡化機器人特定的機器人窗口和遠程控制包裝程序的編程。 \n 對控制器插件進行編程而不是直接在控制器中進行編程更加方便，因為它大大提高了代碼的模塊化和可伸縮性。 例如，一個機器人窗口可以用於多個機器人。 \n 基本原理 \n 機器人窗口 \n 遠程控制插件 \n', 'tags': '', 'url': 'Controller Plugin.html'}, {'title': 'Webots Plugin', 'text': 'Webots插件 \n Webots可以通過用戶的插件進行功能擴展。 \n 一個 物理 插件報價添加自定義ODE指令Webots的默認物理行為的可能性。 例如，可以增加或測量力。 加力時，可以模擬新型的環境或設備。 例如，可以將風模擬為施加到世界上每個對象的恆定單向力，並與該對象的大小成比例。 飛機的反應堆可以通過添加變化強度等來模擬。 \n', 'tags': '', 'url': 'Webots Plugin.html'}, {'title': 'Web Interface', 'text': '網頁界面 \n 本章介紹如何導出為X3D格式和網頁。 \n', 'tags': '', 'url': 'Web Interface.html'}, {'title': 'X3D and Web Scene', 'text': 'X3D和Web場景 \n X3D 是一種現代 XML 的文件格式，用於表示3D計算機圖形。 可以將其導入許多3D建模或可視化應用程序中。可以在任何最新的Web瀏覽器中打開它，可使用鼠標或觸摸屏在播放器中進行3D導航。 \n 如何導出Web場景 \n 如何在您的網站中嵌入Web場景 \n 局限性 \n 關於二手技術及其局限性的評論 \n', 'tags': '', 'url': 'X3D and Web Scene.html'}, {'title': 'Web Animation', 'text': '網絡動畫 \n Webot可以將模擬記錄到交互式3D\xa0 HTML 頁面。 結果類似於具有播放控件的電影，不同之處在於您可以隨時更改視點。 \n 如何導出網絡動畫 \n 局限性 \n 場景刷新率 \n \n', 'tags': '', 'url': 'Web Animation.html'}, {'title': 'Web Streaming', 'text': '網絡串流媒體 \n 在此模式下，用戶可以觀看已經運行的仿真並進入場景，但不能與仿真交互，即控制仿真的執行並修改機器人控制器程序。 \n 如何進行Webots模擬 \n 網絡設置 \n 如何在您的網站中嵌入Web場景 \n 場景刷新率 \n 局限性 \n 技術與局限性 \n', 'tags': '', 'url': 'Web Streaming.html'}, {'title': 'Web Simulation', 'text': '網絡模擬 \n 這樣的系統可以分佈在幾台機器上。 一台機器運行一個會話服務器，該會話服務器與多個模擬服務器進行通信。 每台機器都運行一個模擬服務器實例，該實例從會話服務器接收請求，並為每個連接的客戶端實例化一個新的Webots實例，該實例直接與客戶端進行通信。 \n 流媒體服務器 \n 網站託管 \n 場景刷新率 \n 局限性 \n 技術與局限性 \n', 'tags': '', 'url': 'Web Simulation.html'}, {'title': 'Tutorials', 'text': '講解 \n 本章的目的是解釋創建自己的模擬所需的Webot的基本概念。 學習的重點是機器人及其環境的建模以及機器人控制器的編程， 了解在何處可以找到文檔。 \n', 'tags': '', 'url': 'Tutorials.html'}, {'title': 'Tutorial 1-Your First Simulation in Webots', 'text': '教程1：您第一次進行Webot模擬 \n 本教程的目的是使您熟悉用戶界面和Webots的基本概念。 您將創建第一個包含簡單環境的模擬：一個有地板和牆壁的競技場，幾個盒子，一個電子冰球機器人以及一個使機器人運動的控制器程序。 \n 啟動Webots \n 創造新世界 \n 添加電子冰球機器人 \n 創建一個新的控制器 \n 將控制器擴展到速度控制 \n 結論 \n', 'tags': '', 'url': 'Tutorial 1-Your First Simulation in Webots.html'}, {'title': 'Tutorial 2-Modification of the Environment', 'text': '教程2：修改環境 \n 在本教程中，我們將教您如何在環境中創建簡單物件。 第一步將是創建一個與環境互動的球。我們將處理與節點有關的幾個概念：它們的含義是什麼，如何創建它們，必須如何關聯它們，等等。此外，我們還將了解如何設置物理學。 \n 新的模擬 \n 修改地板 \n 實體節點 \n 創建一個球 \n 幾何形狀 \n 定義使用機制 \n 添加牆 \n 解決方案 World文件 \n 效率 \n 結論 \n', 'tags': '', 'url': 'Tutorial 2-Modification of the Environment.html'}, {'title': 'Tutorial 3-Appearance', 'text': '教程3：外觀 \n 本教程的目的是使您熟悉與圖形渲染有關的一些節點。 當這些節點得到充分使用時，可以很快創建美觀的仿真。 良好的圖形質量不僅可以提高用戶的體驗，而且對於機器人感知其環境的模擬（相機圖像處理，行跟踪等）也至關重要。 \n 新模擬 \n 燈光 \n 修改牆的外觀 \n 向球添加紋理 \n 渲染選項 \n 解決方案：World文件 \n 結論 \n', 'tags': '', 'url': 'Tutorial 3-Appearance.html'}, {'title': 'Tutorial 4-More about Controllers', 'text': '教程4：有關控制器的更多信息 \n 我們將設計一個簡單的控制器，避免前面教程中創建的障礙。 本教程將向您介紹Webots中機器人編程的基礎。 在本章的最後，您應該了解場景樹節點和控制器API之間的鏈接是什麼，如何初始化和清理機器人控制器，如何初始化機器人設備，如何獲取傳感器值，如何命令執行器，以及如何編寫簡單的反饋迴路。 \n 新世界和新控制者 \n 了解電子冰球模型 \n 編程控制器 \n 控制器代碼 \n 解決方案：World文件 \n 結論 \n', 'tags': '', 'url': 'Tutorial 4-More about Controllers.html'}, {'title': 'Tutorial 5-Compound Solid and Physics Attributes', 'text': '教程5：複合固體和物理屬性 \n 本教程的目的是通過創建帶有多個邊界對象的實體來更詳細地探索物理模擬：一個由兩個球體和一個圓柱體組成的啞鈴。 \n 新模擬 \n 複合固體 \n 物理屬性 \n 旋轉場 \n 如何選擇邊界對象？ \n 接觸 \n basicTimeStep，ERP和CFM \n 次要物理參數 \n 解決方案：World 文件 \n 結論 \n', 'tags': '', 'url': 'Tutorial 5-Compound Solid and Physics Attributes.html'}, {'title': 'Tutorial 6-4-Wheels Robot', 'text': '教程6：4輪機器人 \n 本教程的目的是從頭開始創建您的第一個機器人。 該機器人將由一個身體，四個輪子和兩個距離傳感器組成。 \n 新模擬 \n 在實體節點中分離機器人 \n 鉸鏈連接 \n 感測器 \n 控制者 \n 控制器代碼 \n 解決方案：World文件 \n 結論 \n', 'tags': '', 'url': 'Tutorial 6-4-Wheels Robot.html'}, {'title': 'Tutorial 7-Your First PROTO', 'text': '教程7：您的第一個PROTO \n 本教程的目的是創建一個與上一教程中的四輪機器人相對應的PROTO文件。 \n 複製機器人定義 \n 使用PROTO節點。 \n 新增欄位 \n 解決方案：PROTO文件 \n 結論 \n', 'tags': '', 'url': 'Tutorial 7-Your First PROTO.html'}, {'title': 'Tutorial 8-Using ROS', 'text': '', 'tags': '', 'url': 'Tutorial 8-Using ROS.html'}, {'title': 'Going Further', 'text': '', 'tags': '', 'url': 'Going Further.html'}, {'title': 'Robots', 'text': '\n', 'tags': '', 'url': 'Robots.html'}, {'title': '開會紀錄', 'text': '', 'tags': '', 'url': '開會紀錄.html'}, {'title': 'W3', 'text': '\n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '\n', 'tags': '', 'url': 'W4.html'}]};