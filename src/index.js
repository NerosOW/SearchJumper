import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const lang = navigator.appName === 'Netscape' ? navigator.language : navigator.userLanguage;
let config = {};
switch (lang) {
    case 'zh-CN':
    case 'zh-SG':
        config = {
            name: '搜索酱',
            description: '详细描述',
            rulesStore: '站点规则仓库',
            import: '导入配置',
            export: '导出配置',
            general: '常规设置',
            searchEngines: '搜索引擎',
            exportConfig: '导出设置',
            findInPage: '页内查找',
            about: '关于',
            showInSearchEngine: '高亮搜索引擎页面',
            showInSearchEngineTips: '在搜索引擎结果页高亮关键词',
            showInSearchJumpPage: '高亮搜索引擎页面打开的站点',
            showInSearchJumpPageTips: '在搜索引擎页面点击打开的站点内高亮关键词',
            limitInPageLen: '限制关键词最小长度',
            limitInPageLenTips: '不对长度小于此值的关键词进行高亮',
            ignoreWords: '忽略关键词列表',
            inPageWordsStyles: '关键词样式',
            inPageWordsAddStyles: '自定义关键词CSS，数组内按顺序指向对应关键词',
            defaultPicker: '自动开启元素选择',
            defaultPickerTips: '打开搜索输入框时自动开启元素选择',
            altToHighlight: 'Alt 划选立即高亮',
            altToHighlightTips: '使用页内搜索功能时使用 Alt 划选后立即高亮',
            disableInputOnWords: '在划选文字上不弹出搜索输入框',
            disableInputOnWordsTips: '存在划选文字时使用快捷键不弹出搜索输入框',
            inPageRule: '站点自动高亮规则',
            errorNoType: '请输入分组名',
            errorSameType: '分组名不能重复',
            editType: '编辑分组',
            typeName: '分组名',
            typeIcon: '分组图标',
            category: '分组',
            iconTips: '图标可使用 FontAwsome、图片链接或者 base64 代码',
            typeMatch: '匹配 URL，设为 0 隐藏该分组',
            typeEnableSelTxt: '对选择文字生效',
            typeEnableSelImg: '对图片生效',
            typeEnableSelAudio: '对音频生效',
            typeEnableSelVideo: '对视频生效',
            typeEnableSelLink: '对链接生效',
            typeEnableSelPage: '对页面生效',
            typeOpenInNewTab: '启用后该组链接将默认在新窗口打开',
            openSelect: '打开选项',
            openInNewTabOption: '新标签页打开',
            openInCurrentOption: '当前页打开',
            openInDefaultOption: '默认',
            showCurrent: '显示当前站点',
            showCurrentTips: '匹配到当前站点时，不隐藏当前站点图标',
            delete: '删除',
            cancel: '取消',
            edit: '编辑',
            add: '新增',
            editSite: '编辑站点',
            addSite: '新增站点',
            addType: '新增分组',
            siteName: '站点名',
            siteUrl: '站点 URL',
            siteIcon: '站点图标',
            siteKeywords: '搜索词正则',
            siteMatch: '匹配 URL，设为 0 强制隐藏该站',
            siteCharset: '站点编码',
            toolbarPosition: '工具栏位置',
            portrait: '纵向',
            horizontal: '横向',
            openInNewTab: '默认在新标签页打开链接',
            openInNewTabTips: '启用后链接将全部默认在新标签页打开',
            enableInPage: '启用划词搜索',
            enableInPageTips: '启用后选择文字并长按鼠标右键可调出工具长条',
            bindFunctionKey: '绑定工具栏唤出功能键，按住功能键单击鼠标即可唤出当前分组的磁贴',
            ctrlKey: 'Ctrl键',
            altKey: 'Alt键',
            shiftKey: 'Shift键',
            metaKey: 'meta键',
            configContent: '设置源码',
            batchOpenConfirm: '批量打开确认框',
            batchOpenConfirmDefault: '默认',
            batchOpenConfirmAlways: '总是需要确认',
            batchOpenConfirmNo: '不需要确认',
            copy: '复制',
            save: '保存',
            autoClose: '自动合上分组',
            autoDelay: '隐藏延时',
            needName: '需要名称',
            needUrl: '需要 URL',
            overOpen: '鼠标划过时分组自动展开',
            overOpenTips: '选中此项则当鼠标划过分组图标，对应分组将自动展开',
            selectToShow: '划选立即调用',
            selectToShowTips: '启用后无需长按鼠标，划选立即调出工具栏',
            autoCloseTips: '启用之后一旦鼠标离开搜索条，已打开的分组抽屉将会自动合上',
            enableShortcut: '启用站点快捷键',
            enableShortcutTips: '启用后，将使得所有为站点分配的快捷键生效',
            shortcut: '快捷键',
            siteShotcut: '搜索快捷键',
            initShow: '打开页面立即拉开工具栏，鼠标划过后再贴边隐藏',
            presetCss: '预置样式',
            presetCssTips: '选择后载入预置样式',
            customCss: '自定义样式',
            replaceCss: '确定要替换当前编辑的样式吗？',
            enableInInput: '监听输入框',
            enableInInputTips: '启用后，在输入框内生效',
            fontAwesomeCss: 'FontAwesome CDN地址',
            nobatch: '不参与批量打开',
            hideNotMatch: '网址不匹配则隐藏该项',
            typeMatchTips: '仅在匹配站点显示该分组',
            siteUrlTips: '%s 查询词; %t 目标链接; %u 页面地址; %h 页面域名',
            customSize: '缩放工具栏',
            typeOpenTime: '分组展开耗时',
            longPressTime: '长按时间',
            typeShotcut: '批量打开快捷键',
            enableRightMouse: '启用鼠标右键长按',
            enableRightMouseTips: '启用后，在目标对象上长按鼠标右键可唤出搜索条',
            enableLeftMouse: '启用鼠标左键长按',
            enableLeftMouseTips: '启用后，在目标对象上长按鼠标左键也能唤出搜索条',
            cacheSwitch: '缓存图标',
            sameSiteName: '在【#t#】下存在同名站点',
            sameShortcut: '【#t#】已经绑定了相同快捷键',
            noIcons: '纯文本模式',
            noIconsTips: '隐藏图标，仅显示纯文本',
            noAni: '禁止动画效果',
            noAniTips: '禁止所有动画效果',
            quickAddRule: '快速添加搜索引擎',
            quickAddRuleTips: '按住 Ctrl + Shift 点击任意搜索框快速添加搜索引擎',
            searchMycroft: '💎 在 mycroftproject 上搜索其他人编辑好的搜索引擎并一键导入，例如：“谷歌学术”',
            showSiteLists: '显示下拉列表',
            showSiteListsTips: '启用后将在分组图标旁启用下拉列表',
            alwaysShowSiteLists: '总是显示下拉列表',
            alwaysShowSiteListsTips: '启用后，分组抽屉打开时也会显示下拉列表',
            historyLength: '历史站点数',
            historyLengthTips: '在默认展开的分组中插入数个最近访问的站点',
            sortType: '自动排序分组',
            sortTypeTips: '自动按照访问次数重新排序分组',
            multiline: '多行搜索，选取多行文字时，以换行符分隔，按行搜索',
            multilineLabel: '开关',
            multilineGap: '搜索间隔',
            disable: '禁用',
            enable: '启用',
            ask: '询问',
            batchAction: '批量操作',
            selectAll: '全选',
            invert: '反选',
            deleteConfirm: '你确定要删除这些站点吗？',
            moveTo: '移动至',
            moveToConfirm: '你确定要将这些站点移动至【#t#】吗?',
            autoHide: '自动隐藏搜索条',
            autoHideTips: '达到上方设置延时之后，自动隐藏搜索条',
            autoHideAll: '完全隐藏',
            autoHideAllTips: '隐藏时使得搜索条完全消失',
            unsetTips: '未设置',
            resizePageTips: '不隐藏并且收缩页面',
            minSizeMode: '极简模式',
            minSizeModeTips: '开启后，搜索条将只显示当前分组，直至鼠标划过',
            dragToSearch: '开启拖拽搜索',
            dragToSearchTips: '开启后拖拽文字、链接或者图片进行搜索，内圈为当前分组前6个站点，外圈为最近使用的站点',
            sameSiteUrl: '站点Url不能重复',
            clone: '克隆',
            cloneConfirm: '你确定要将这些站点克隆至 【#t#】?',
            cloneAction: '你想要将它们克隆成一个集合吗?',
            groupName: '集合名',
            donate: '💞如果对你有帮助，请通过以下方式打赏，以勉励我继续维护',
            importBookmarks: '导入浏览器书签',
            sync: 'Webdav同步',
            host: '服务器地址',
            username: '用户名',
            password: '密码',
            syncTips: 'Webdav服务器需要支持自设cors',
            expandType: '展开分组',
            expandTypeTips: '不隐藏同一分组中超出10个之外的站点',
            jsonToolong: '站点数据过于庞大，是否继续格式化为JSON文本？',
            cacheSwitchTips: '浏览网页时在后台缓存图标为 base64 图片至配置，以免 icon 请求拉低性能，注意开启后会弹出跨域请求',
            searchFontawesome: '🚩 搜索 FontAwesome 图标用于分组项',
            keywordRegTips: '单个关键词：wd；多个：wd|qw|key；正则分组：(?:wd|w)=(.*?)(&|$)',
            localAppAddBtn: '添加自定义本地应用调用',
            localApp: '本地应用调用',
            localAppCall: '调用命令',
            localAppName: '自定义调用头，可留空，编辑前注意备份注册表',
            localAppUnknowCall: '无法分析此命令，请检查命令或者手动构造注册表',
            localAppWrongName: '调用头只能输入数字或者字母',
            callInputKey: '唤出搜索输入框的快捷键',
            showAllKey: '唤出全部展开模式的快捷键',
            defaultFindTab: '默认显示页内查找',
            defaultFindTabTips: '打开搜索输入框时默认显示页内查找，否则默认显示站点筛选',
            geneRegFile: '生成注册表补丁',
            targetTxt: '划词搜索分组',
            targetImg: '以图搜图分组',
            targetLink: '链接处理分组',
            targetPage: '当前页面分组',
            hideDragHistory: '隐藏拖拽轮盘外圈',
            hideDragHistoryTips: '隐藏拖拽轮盘中用于存放最近 10 个历史访问站点的外圈',
            disableAutoOpen: '禁用分组自动展开',
            disableAutoOpenTips: '启用后，调出搜索条之后，对应分组将不再自动展开',
            minPopup: '最小化搜索弹框',
            minPopupTips: '启用后，划词弹框将只显示一个分组图标，直至鼠标划过',
            hidePopup: '禁用搜索弹框',
            hidePopupTips: '开启后，划词弹框将会禁用，划词时以完整搜索条取代',
            hideOnSearchEngine: '在搜索引擎页面隐藏',
            hideOnSearchEngineTips: '启用后，在搜索引擎页面搜索条将不再自动显示',
            paramTitle: '搜索参数',
            param: '参数',
            details: '详述',
            param_s: '搜索关键词',
            param_S: '最近一次的搜索关键词',
            param_sl: '小写字母搜索词',
            param_su: '大写字母搜索词',
            param_sr: '未转码的搜索关键词',
            param_e: '当前页面编码',
            param_c: '客户端: pc,mobile',
            param_u: '当前网站 url',
            param_U: '当前网站 url 的 URI 编码',
            param_h: '当前网站 host',
            param_t: '指向对象的 src',
            param_T: '指向对象的 src 的 URI 编码',
            param_b: '指向对象 src 去 http头',
            param_B: '指向对象 src 去 http头 的 URI 编码',
            param_i: '指向图片的 base64',
            param_sre: '用正则替换搜索关键词/页面或链接url/图片src，例如 %sr.replace(/[^\\d]/g, "").replace(/(\\d)/g, "$1 ") 代表提取原始关键词中所有数字，并以空格分隔，支持 %s %sl %sr %su %t %u',
            param_p1: 'post 参数体，例如 %p{x=1&y=%s}',
            param_p2: 'post 但不跳转',
            param_p3: '页内 post，可在页面之内使用【css 选择器或者 xpath】填写参数提交查询，适用于不开放GET/POST接口的网站，例如 #p{#input=%u&sleep(500)&click(.submit)}, 代表在"#input"内输入指定url，然后等待500毫秒，最后点击".submit"。可在内容中使用 \\& \\= 来 表示 & =',
            param_input: '输入占位，例如%input{请输入您的三围,90 55 90}',
            param_group: '通过你已经创建的站点名批量打开，例如 ["雅虎搜索","谷歌搜索"]',
            param_ele: '通过 css 选择器或者 xpath 抓取元素并返回文字内容，例如 %element{.mainTitle}',
            param_elep: '获取抓取到元素的属性值，例如 %element{.mainTitle}.prop(href) %element{.mainTitle}.prop(innerHTML)',
            param_elere: '正则替换，例如 %element{.mainTitle}.prop(href).replace(/https/i,"")',
            param_cp: '在开头使用"c:"可以复制之后的所有字串',
            aboutContent: '平时工作中搜索引擎跳转功能用得很频繁，但尝试了相关的扩展，发现大多夹有私货。特别是国内公司做的插件，基本都有购物返链和隐私数据收集。\n\n而这只是一个简单功能，所以不如自己写一个啦。\n\n结果写配置页面耗费的精力数倍于脚本本身……🤦‍\n\n这个搜索引擎跳转支持自己拖拽定义位置，同时也支持站内搜索，多语言编码设置（例如shift-jis），划词搜索，以及配置导入导出。'
        }
        break;
    case 'zh-TW':
    case 'zh-HK':
        config = {
            name: '搜尋醬',
            description: '詳細描述',
            rulesStore: '站點規則倉庫',
            import: '導入配置',
            export: '導出配置',
            general: '常規設置',
            searchEngines: '搜尋引擎',
            exportConfig: '導出設置',
            findInPage: '頁内查找',
            about: '關於',
            showInSearchEngine: '高亮搜尋引擎頁面',
            showInSearchEngineTips: '在搜尋引擎結果頁高亮關鍵詞',
            showInSearchJumpPage: '高亮搜尋引擎頁面開啟的站點',
            showInSearchJumpPageTips: '在搜尋引擎頁面點選開啟的站點內高亮關鍵詞',
            limitInPageLen: '限制關鍵詞最小長度',
            limitInPageLenTips: '不對長度小於此值的關鍵詞進行高亮',
            ignoreWords: '忽略關鍵詞列表',
            inPageWordsStyles: '關鍵詞樣式',
            inPageWordsAddStyles: '自定義關鍵詞CSS，數組内按順序指向對應關鍵詞',
            defaultPicker: '自動開啟元素選擇',
            defaultPickerTips: '打開搜尋輸入框時自動開啟元素選擇',
            altToHighlight: 'Alt 劃選立即高亮',
            altToHighlightTips: '使用頁內搜尋功能時使用 Alt 劃選後立即高亮',
            disableInputOnWords: '在劃選文字上不彈出搜尋輸入框',
            disableInputOnWordsTips: '存在劃選文字時使用快捷鍵不彈出搜尋輸入框',
            inPageRule: '站點自動高亮規則',
            errorNoType: '請輸入分組名',
            errorSameType: '分組名不能重複',
            editType: '編輯分組',
            typeName: '分組名',
            typeIcon: '分組圖標',
            category: '分組',
            iconTips: '圖標可使用 FontAwsome、圖片連結或者 base64 代碼',
            typeMatch: '匹配 URL，設爲 0 隱藏該分組',
            typeEnableSelTxt: '對選擇文字生效',
            typeEnableSelImg: '對圖片生效',
            typeEnableSelAudio: '對音頻生效',
            typeEnableSelVideo: '對視頻生效',
            typeEnableSelLink: '對鏈接生效',
            typeEnableSelPage: '對頁面生效',
            typeOpenInNewTab: '啟用後該組連結將默認在新窗口打開',
            openSelect: '打開選項',
            openInNewTabOption: '新標簽頁打開',
            openInCurrentOption: '當前頁打開',
            openInDefaultOption: '默認打開選項',
            showCurrent: '顯示當前站點',
            showCurrentTips: '匹配到當前站點時，不隱藏當前站點圖標',
            delete: '刪除',
            cancel: '取消',
            edit: '編輯',
            add: '新增',
            editSite: '編輯站點',
            addSite: '新增站點',
            addType: '新增分組',
            siteName: '站點名',
            siteUrl: '站點 URL',
            siteIcon: '站點圖標',
            siteKeywords: '搜尋詞正則',
            siteMatch: '匹配 URL，設爲 0 强制隱藏該站',
            siteCharset: '站點編碼',
            toolbarPosition: '工具欄位置',
            portrait: '縱向',
            horizontal: '橫向',
            openInNewTab: '默認在新標籤頁打開連結',
            openInNewTabTips: '啟用後連結將全部默認在新標籤頁打開',
            enableInPage: '啟用劃詞搜尋',
            enableInPageTips: '啟用後選擇文字並長按滑鼠右鍵可調出工具長條',
            bindFunctionKey: '綁定工具欄喚出配合功能鍵，按住功能鍵單擊滑鼠即可喚出當前分組的磁貼',
            ctrlKey: 'Ctrl鍵',
            altKey: 'Alt鍵',
            shiftKey: 'Shift鍵',
            metaKey: 'meta鍵',
            configContent: '設置源碼',
            batchOpenConfirm: '批量打開確認框',
            batchOpenConfirmDefault: '默認',
            batchOpenConfirmAlways: '總是需要確認',
            batchOpenConfirmNo: '不需要確認',
            copy: '複製',
            save: '保存',
            autoClose: '自動合上分組',
            autoDelay: '隱藏延時',
            needName: '需要名稱',
            needUrl: '需要 URL',
            overOpen: '滑鼠划過時分組自動展開',
            overOpenTips: '選中此項則當滑鼠划過分組圖標，對應分組將自動展開',
            selectToShow: '劃選立即調用',
            selectToShowTips: '啟用後無需長按滑鼠，劃選立即調出工具欄',
            autoCloseTips: '啟用之後一旦滑鼠離開搜尋條，已打開的分組抽屜將會自動合上',
            enableShortcut: '啟用站點快捷鍵',
            enableShortcutTips: '啟用後，將使得所有為站點分配的快捷鍵生效',
            shortcut: '快捷鍵',
            siteShotcut: '搜尋快捷鍵',
            initShow: '打開頁面立即拉開工具欄，鼠標划過后再貼邊隱藏',
            presetCss: '預置樣式',
            presetCssTips: '選擇后載入預置樣式',
            customCss: '自定義樣式',
            replaceCss: '確定要替換當前編輯的樣式嗎？',
            enableInInput: '監聽輸入框',
            enableInInputTips: '啓用後，在輸入框内生效',
            fontAwesomeCss: 'FontAwesome CDN地址',
            nobatch: '不參與批量打開',
            hideNotMatch: '網址不匹配則隱藏該項',
            typeMatchTips: '僅在匹配站點顯示該分組',
            siteUrlTips: '%s 查詢詞; %t 目標連結; %u 頁面地址; %h 頁面域名',
            customSize: '縮放工具欄',
            typeOpenTime: '分組展開耗時',
            longPressTime: '長按時間',
            typeShotcut: '批量打開快捷鍵',
            enableRightMouse: '啟用滑鼠右鍵長按',
            enableRightMouseTips: '啟用後，在目標對象上長按滑鼠右鍵可喚出搜尋條',
            enableLeftMouse: '啟用滑鼠左鍵長按',
            enableLeftMouseTips: '啟用後，在目標對象上長按滑鼠左鍵也能喚出搜尋條',
            cacheSwitch: '緩存圖標',
            sameSiteName: '在【#t#】下存在同名站點',
            sameShortcut: '【#t#】已經綁定了相同快捷鍵',
            noIcons: '純文本模式',
            noIconsTips: '隱藏圖標，僅顯示純文本',
            noAni: '禁止動畫效果',
            noAniTips: '禁止所有動畫效果',
            quickAddRule: '快速添加搜尋引擎',
            quickAddRuleTips: '按住 Ctrl + Shift 點擊任意搜尋框快速添加搜尋引擎',
            searchMycroft: '💎 在 mycroftproject 上搜尋其他人編輯好的搜尋引擎並一鍵導入',
            showSiteLists: '顯示下拉列表',
            showSiteListsTips: '啓用後將在分組圖標旁啓用下拉列表',
            alwaysShowSiteLists: '總是顯示下拉列表',
            alwaysShowSiteListsTips: '啟用後，分組抽屜打開時也會顯示下拉列表',
            historyLength: '歷史站點數',
            historyLengthTips: '在默認展開的分組中插入數個最近訪問的站點',
            sortType: '自動排序分組',
            sortTypeTips: '自動按照訪問次數重新排序分組',
            multiline: '多行搜尋，選取多行文字時，以換行符分隔，按行搜尋',
            multilineLabel: '開關',
            multilineGap: '搜尋間隔',
            disable: '禁用',
            enable: '啟用',
            ask: '詢問',
            batchAction: '批量操作',
            selectAll: '全選',
            invert: '反選',
            deleteConfirm: '你確定要刪除這些站點嗎？',
            moveTo: '移動至',
            moveToConfirm: '你確定要將這些站點移動至【#t#】嗎?',
            autoHide: '自動隱藏搜尋條',
            autoHideTips: '達到上方設置延時之後，自動隱藏搜尋條',
            autoHideAll: '完全隱藏',
            autoHideAllTips: '隱藏時使得搜尋條完全消失',
            unsetTips: '未設置',
            resizePageTips: '不隱藏並收縮頁面',
            minSizeMode: '極簡模式',
            minSizeModeTips: '開啟後，搜尋條將只顯示當前分組，直至鼠標劃過',
            dragToSearch: '開啟拖拽搜尋',
            dragToSearchTips: '開啟後拖拽文字、連結或者圖片進行搜尋，內圈為當前分組前6個站點，外圈為最近使用的站點',
            sameSiteUrl: '站點Url不能重複',
            clone: '克隆',
            cloneConfirm: '你確定要將這些站點克隆至 【#t#】?',
            cloneAction: '你想要將它們克隆成一個集合嗎?',
            groupName: '集合名',
            donate: '💞如果對你有幫助，請通過以下方式打賞，以勉勵我繼續維護',
            importBookmarks: '導入瀏覽器書簽',
            sync: 'Webdav同步',
            host: '伺服器地址',
            username: '用戶名',
            password: '密碼',
            syncTips: 'Webdav伺服器需要支援自設cors',
            expandType: '展開分組',
            expandTypeTips: '不隱藏同一分組中超出10個之外的站點',
            jsonToolong: '站點數據過於龐大，是否繼續格式化為JSON文本？',
            cacheSwitchTips: '瀏覽網頁時在後台緩存圖標為base64圖片，注意開啟後會彈出跨域請求',
            searchFontawesome: '🚩 搜尋 FontAwesome 圖標用於分組項',
            keywordRegTips: '單個關鍵詞：wd；多個：wd|qw|key；正則分組：(?:wd|w)=(.*?)(&|$)',
            localAppAddBtn: '添加自定義本地應用調用',
            localApp: '本地應用調用',
            localAppCall: '調用命令',
            localAppName: '自定義調用頭，可留空，編輯前注意備份注冊表',
            localAppUnknowCall: '無法分析此命令，請檢查命令或者手動構造註冊表',
            localAppWrongName: '調用頭只能輸入數字或者字母',
            callInputKey: '喚出搜尋輸入框的快捷鍵',
            showAllKey: '喚出全部展開模式的快捷鍵',
            defaultFindTab: '默認顯示頁內查找',
            defaultFindTabTips: '打開搜尋輸入框時默認顯示頁內查找，否則默認顯示站點篩選',
            geneRegFile: '生成註冊表補丁',
            targetTxt: '劃詞搜尋分組',
            targetImg: '以圖搜圖分組',
            targetLink: '鏈接處理分組',
            targetPage: '當前頁面分組',
            hideDragHistory: '隱藏拖拽輪盤外圈',
            hideDragHistoryTips: '隱藏拖拽輪盤中用於存放最近 10 個歷史訪問站點的外圈',
            disableAutoOpen: '禁用分組自動展開',
            disableAutoOpenTips: '啓用後，調出搜尋條之後，對應分組將不再自動展開',
            minPopup: '最小化搜尋彈框',
            minPopupTips: '啟用後，劃詞彈框將只顯示一個分組圖標，直至鼠標劃過',
            hidePopup: '禁用搜尋彈框',
            hidePopupTips: '開啟後，劃詞彈框將會禁用，劃詞時以完整搜尋條取代',
            hideOnSearchEngine: '在搜尋引擎頁面隱藏',
            hideOnSearchEngineTips: '啓用後，在搜尋引擎頁面搜尋條將不再自動顯示',
            paramTitle: '搜尋參數',
            param: '參數',
            details: '詳述',
            param_s: '搜尋關鍵詞',
            param_S: '最近一次的搜尋關鍵詞',
            param_sl: '小寫字母搜尋詞',
            param_su: '大寫字母搜尋詞',
            param_sr: '未轉碼的搜尋關鍵詞',
            param_e: '當前頁面編碼',
            param_c: '客戶端: pc,mobile',
            param_u: '當前網站 url',
            param_U: '當前網站 url 的 URI 編碼',
            param_h: '當前網站 host',
            param_t: '指向對象的 src',
            param_T: '指向對象的 src 的 URI 編碼',
            param_b: '指向對象 src 去 http頭',
            param_B: '指向對象 src 去 http頭 的 URI 編碼',
            param_i: '指向圖片的 base64',
            param_sre: '用正則替換搜尋關鍵詞/頁面或鏈接url/圖片src，例如 %sr.replace(/[^\\d]/g, "").replace(/(\\d)/g, "$1 ") 代表提取原始關鍵詞中所有數字，並以空格分隔，支持 %s %sl %sr %su %t %u',
            param_p1: 'post 參數體，例如 %p{x=1&y=%s}',
            param_p2: 'post 但不跳轉',
            param_p3: '頁内 post，可在頁面之内使用【css 選擇器或者 xpath】填寫參數提交查詢，適用於不開放GET/POST接口的網站，例如 #p{#input=%u&sleep(500)&click(.submit)}, 代表在"#input"内輸入指定url，然後等待500毫秒，最後點擊".submit"。可在内容中使用 \\& \\= 來 表示 & =',
            param_input: '輸入占位，例如%input{請輸入您的三圍,90 55 90}',
            param_group: '透過你已經創建的站點名批量打開，例如 ["雅虎搜尋","谷歌搜尋"]',
            param_ele: '透過 css 選擇器或者 xpath 抓取元素並返回文字内容，例如 %element{.mainTitle}',
            param_elep: '獲取抓取到元素的屬性值，例如 %element{.mainTitle}.prop(href) %element{.mainTitle}.prop(innerHTML)',
            param_elere: '正則替換，例如 %element{.mainTitle}.prop(href).replace(/https/i,"")',
            param_cp: '在開頭使用"c:"可以複製之後的所有字串',
            aboutContent: '平時工作中搜尋引擎跳轉功能用得很頻繁，但嘗試了相關的擴展，發現大多夾有私貨。\n\n而這只是一個簡單功能，所以不如自己寫一個啦。\n\n結果寫配置頁面耗費的精力數倍於腳本本身……🤦‍\n\n這個搜尋引擎跳轉支持自己拖拽定義位置，同時也支持站內搜尋，多語言編碼設置（例如shift-jis），劃詞搜尋，以及配置導入導出。'
        }
        break;
    default:
        config = {
            name: 'SearchJumper',
            description: 'Description',
            rulesStore: 'Collection Store',
            import: 'Import config',
            export: 'Export JSON',
            general: 'General',
            searchEngines: 'Search Engines',
            exportConfig: 'Export Config',
            findInPage: 'Find In Page',
            about: 'About',
            showInSearchEngine: 'Highlight search engine page',
            showInSearchEngineTips: 'Highlight keywords on the search engine results page',
            showInSearchJumpPage: 'Highlight the site opened from the search engine',
            showInSearchJumpPageTips: 'Highlight keywords on the page opened by click on the search engine',
            limitInPageLen: 'Limit the minimum length of keywords',
            limitInPageLenTips: 'Do not highlight keywords whose length is less than this value',
            ignoreWords: 'Ignore keyword list',
            inPageWordsStyles: 'Keyword styles',
            inPageWordsAddStyles: 'Custom keyword CSS, input an array target each keyword',
            defaultPicker: 'Auto enable element selection',
            defaultPickerTips: 'Automatically enable element selection when opening the search input box',
            altToHighlight: 'Alt swipe to highlight immediately',
            altToHighlightTips: 'When using the in-page search function, use Alt to highlight immediately after selection',
            disableInputOnWords: 'No search input when something is selected',
            disableInputOnWordsTips: 'Do not pop up the search input with shortcut key when something is selected',
            inPageRule: 'Site auto-highlighting rules',
            errorNoType: 'Please enter the category name',
            errorSameType: 'Found same category name',
            editType: 'Edit category',
            typeName: 'Category name',
            typeIcon: 'Category icon',
            category: 'Category',
            iconTips: 'The icon can use FontAwsome, image link or base64 code',
            typeMatch: 'Match url, hide by set to 0',
            typeEnableSelTxt: 'Effect on text',
            typeEnableSelImg: 'Effect on image',
            typeEnableSelAudio: 'Effect on audio',
            typeEnableSelVideo: 'Effect on video',
            typeEnableSelLink: 'Effect on link',
            typeEnableSelPage: 'Effect on page',
            typeOpenInNewTab: 'After enabling, this group of links will be opened in a new window by default',
            openSelect: 'Open mode',
            openInNewTabOption: 'Open in new tab',
            openInCurrentOption: 'Open in current',
            openInDefaultOption: 'Open by default',
            showCurrent: 'Show current site',
            showCurrentTips: 'Show the site button of current when matched',
            delete: 'Delete',
            cancel: 'Cancel',
            edit: 'Edit',
            add: 'Add',
            editSite: 'Edit site',
            addSite: 'Add site',
            addType: 'Add type',
            siteName: 'Site name',
            siteUrl: 'Site URL',
            siteIcon: 'Site icon',
            siteKeywords: 'RegExp of search keywords',
            siteMatch: 'RegExp of match url, force hide by set to 0',
            siteCharset: 'Charset',
            toolbarPosition: 'Toolbar position',
            portrait: 'Portrait',
            horizontal: 'Horizontal',
            openInNewTab: 'Open links in new tabs by default',
            openInNewTabTips: 'When enabled, the link will be opened in a new tab by default',
            enableInPage: 'Enable select to search',
            enableInPageTips: 'After enabling, select some text and long press the right mouse to bring up the toolbar',
            bindFunctionKey: 'Bind function key for mouse to call out toolbar, then click to call out search tiles without long press',
            ctrlKey: 'Ctrl key',
            altKey: 'Alt key',
            shiftKey: 'Shift key',
            metaKey: 'Meta key',
            configContent: 'Config source code',
            batchOpenConfirm: 'Batch open confirm',
            batchOpenConfirmDefault: 'Default',
            batchOpenConfirmAlways: 'Always confirm',
            batchOpenConfirmNo: 'Without confirm',
            copy: 'Copy',
            save: 'Save',
            autoClose: 'Auto close type',
            autoDelay: 'Hide delay',
            needName: 'Require name',
            needUrl: 'Require url',
            overOpen: 'Mouse over to expand category automatically ',
            overOpenTips: 'If you select this item, when the mouse moves over the category icon, the corresponding category will be automatically expanded',
            selectToShow: 'Select to call',
            selectToShowTips: 'After enabling, no need to long-press mouse, select to bring up the toolbar immediately',
            autoCloseTips: 'When enabled, opened category drawer will be closed automatically once the mouse leaves the search bar',
            enableShortcut: 'Enable site shortcuts',
            enableShortcutTips: 'After enabling, all shortcut keys assigned to single site will take effect',
            shortcut: 'Shortcut key',
            siteShotcut: 'Search shortcut key',
            initShow: 'Pull out to show when page initializes',
            presetCss: 'Preset Css',
            presetCssTips: 'Select to load preset css',
            customCss: 'Custom Css',
            replaceCss: 'Do you confirm to replace current css?',
            enableInInput: 'Enable on input',
            enableInInputTips: 'Enable SearchJumper on input or textarea',
            fontAwesomeCss: 'FontAwesome CDN URL',
            nobatch: 'Do not open when batch open',
            hideNotMatch: 'Hide icon if don\'t macth',
            typeMatchTips: 'Show this category only when url matches',
            siteUrlTips: '%s keywords; %t target URL; %u site URL; %h hostname',
            customSize: 'Zoom toolbar',
            typeOpenTime: 'Category expansion time',
            longPressTime: 'Long press time',
            typeShotcut: 'Shortcut for batch open',
            enableRightMouse: 'Effect with right mouse',
            enableRightMouseTips: 'Effect after long press the right mouse button on target',
            enableLeftMouse: 'Also effect with left mouse',
            enableLeftMouseTips: 'Also effect after long press the left mouse button on target',
            cacheSwitch: 'Cache icons',
            sameSiteName: 'Site under 【#t#】 has the same name',
            sameShortcut: '【#t#】 has already bind the same shortcut',
            noIcons: 'Plain text mode',
            noIconsTips: 'Show only plain text without any icon',
            noAni: 'Disable animation effects',
            noAniTips: 'Disable all animation effects',
            quickAddRule: 'Quick Add Site',
            quickAddRuleTips: 'Click any search input box with Ctrl + Shift to add site quickly',
            searchMycroft: '💎 Search site config on mycroftproject for import by one click',
            showSiteLists: 'Show drop-down list',
            showSiteListsTips: 'After enabled, the drop-down list will be enabled next to the category icon',
            alwaysShowSiteLists: 'Always show drop-down lists',
            alwaysShowSiteListsTips: 'After enabled, the drop-down list will be enabled even when category opened',
            historyLength: 'Number of historical sites',
            historyLengthTips: 'Insert several recently visited sites in the default expanded category',
            sortType: 'Auto sort categories',
            sortTypeTips: 'Automatically reorder categories according to the number of visits',
            multiline: 'Multi-line text search, separated by line feed, search by single line',
            multilineLabel: 'Switch',
            multilineGap: 'Search Gap',
            disable: 'Disable',
            enable: 'Enable',
            ask: 'Ask',
            batchAction: 'Batch Action',
            selectAll: 'Select All',
            invert: 'Invert',
            deleteConfirm: 'Do you want to delete these sites?',
            moveTo: 'Move to',
            moveToConfirm: 'Do you want to move these sites to 【#t#】?',
            autoHide: 'Auto hide bar',
            autoHideTips: 'Auto hide search bar after hide delay set before',
            autoHideAll: 'Completely hide',
            autoHideAllTips: 'Hide the search bar completely',
            unsetTips: 'Unset',
            resizePageTips: 'Resize page without hide',
            minSizeMode: 'Minimalist Mode',
            minSizeModeTips: 'After opening, the search bar will only display the current category until the mouse is over',
            dragToSearch: 'Enable drag to search',
            dragToSearchTips: 'Drag text, link or image to search quickly, the inner circle contains the top 6 sites in the current category, and the outer circle contains the most recently used sites',
            sameSiteUrl: 'Found a site with same url',
            clone: 'Clone',
            cloneConfirm: 'Do you want to clone these sites to 【#t#】?',
            cloneAction: 'Do you want to clone as one group instead of a single site?',
            groupName: 'Group Name',
            donate: '💞Buy me a coffee if it helps you',
            importBookmarks: 'Import browser bookmarks',
            sync: 'Sync by Webdav',
            host: 'Host',
            username: 'Username',
            password: 'Password',
            syncTips: 'Webdav server need to support custom cors',
            expandType: 'Expand Type',
            expandTypeTips: 'Do not collapse sites under 10 in one type',
            jsonToolong: 'The sites data is too long, do you want to continue format to json?',
            cacheSwitchTips: 'The icons will cached with base64 images in the background when browsing, but some cross-domain requests will pop up',
            searchFontawesome: '🚩 Search icons for category from FontAwesome.com',
            keywordRegTips: 'Single: wd, Multiple: wd|qw|key, RegExp group: (?:wd|w)=(.*?)(&|$)',
            localAppAddBtn: 'Call local application',
            localApp: 'Local application call',
            localAppCall: 'Call command',
            localAppName: 'Custom call header, can be left blank',
            localAppUnknowCall: 'Unable to parse this command, please check the command or manually construct the registry',
            localAppWrongName: 'The call header can only enter with numbers or letters',
            callInputKey: 'Shortcut key for calling out the search input',
            showAllKey: 'Shortcut key for calling out Show-All-Mode',
            defaultFindTab: 'Default to display find in page',
            defaultFindTabTips: 'When the search input is opened, the find-in-page will be displayed by default, otherwise the site filter will be displayed by default',
            geneRegFile: 'Generate registry patch',
            targetTxt: 'Words search',
            targetImg: 'Image search',
            targetLink: 'Link Search',
            targetPage: 'Current page',
            hideDragHistory: 'Hide the outer ring of the drag wheel',
            hideDragHistoryTips: 'Hide the outer ring of the drag wheel which storing the last 10 historically visited sites',
            disableAutoOpen: 'Disable category auto-expansion',
            disableAutoOpenTips: 'After enabling, when Search Bar is called up, Category will no longer be expanded automatically',
            minPopup: 'Minimize the search popup',
            minPopupTips: 'When enabled, the popup box will only display a category icon until the mouse is over',
            hidePopup: 'Disable search popup',
            hidePopupTips: 'After opening, the popup box will be disabled, and the full search bar will be used to replace it',
            hideOnSearchEngine: 'Hide on search engine page',
            hideOnSearchEngineTips: 'After enabling, Search Bar on the search engine page will no longer be displayed automatically',
            paramTitle: 'Search params',
            param: 'Param',
            details: 'Details',
            param_s: 'Search keyword',
            param_S: 'Cached search keyword',
            param_sl: 'Search keyword with lower case letters',
            param_su: 'Search keyword with upper case letters',
            param_sr: 'Search keyword without doing any encoding',
            param_e: 'Charset',
            param_c: 'Client: pc,mobile',
            param_u: 'Current website url',
            param_U: 'Url with encodeURIComponent',
            param_h: 'Current website host',
            param_t: 'Target src',
            param_T: '%t with encodeURIComponent',
            param_b: 'Target src without http',
            param_B: '%b with encodeURIComponent',
            param_i: 'Base64 of target image',
            param_sre: 'Replace keywords/url/src with regexp, like %sr.replace(/[^\\d]/g, "").replace(/(\\d)/g, "$1 ") means replace raw keywords to numbers and then join all numbers with space, support %s %sl %sr %su %t %u',
            param_p1: 'Post body, like %p{x=1&y=%s}',
            param_p2: 'Post without navigation',
            param_p3: 'Post in page by selector or xpath, like #p{#input=%u&sleep(500)&click(.submit)}, means: input current url to "#input", then wait for 500ms, then click ".submit". use \\& \\= instead of & = in content',
            param_input: 'Input something, like %input{love who?,you}',
            param_group: 'Batch open by site name you\'ve created',
            param_ele: 'Query element for innerText from selector or xpath, like %element{.mainTitle}',
            param_elep: 'Return prop value for queried element, like %element{.mainTitle}.prop(href) %element{.mainTitle}.prop(innerHTML)',
            param_elere: 'Replace, same as above, like %element{.mainTitle}.prop(href).replace(/https/i,"")',
            param_cp: 'Put this at first then all words after will be copied to the clipboard',
            aboutContent: "I use the search engine jump function very frequently in my work, but I found that most of them contain trojans after tried many related extensions. \n\nThis is just a simple function, so why not write one by myself? \n\nThe result is that writing the configuration page takes several times more energy than the script itself... 🤦‍\n\nThis search engine jump supports dragging and dropping with defined location, and also supports in-site search, word-marking search, and configuration import and export."
        }
        break;
}
window.i18n = (name, param) => {
    return config[name]?config[name].replace("#t#",param):name;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
