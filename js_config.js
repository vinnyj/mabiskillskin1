//**************************************************//
//* MabiSkillSkin Config JavaScript                *//
//*  Update: 2015/02/10 17:41                      *//
//**************************************************//

//****************************************************************************************************//
// 各項目の詳しい説明は、マニュアルの「スキンのオプション項目」を参照してください。
//****************************************************************************************************//
// 設定

// キャラクター 表示デザイン (旧デザイン=1 新デザイン=0)
//　旧デザインにする場合、他の項目も変更する必要がありますのでマニュアルをご覧ください。
// Character display design (old design = 1  new design = 0)
// If you want to the old design, please refer to the manual, you must also change the other items.
var CharaViewMode		= 0;

// 新デザインでキャラ表示部分の背景を透過しない (透過しない=1 透過する=0)
// New Design's Character Display Background Transparency (Opaque=1 Transparent=0)
var CharaViewTransparent	= 0;

// スキル説明ウィンドウを表示するか (表示する=1 表示しない=0)
// View the skill description window? (Display=1 Do not Display=0)
var SkillInfoWindowFlg		= 1;

// スキル無効設定（詳しくはマニュアル参照）
// Skill Blacklist (see the manual for more information)
var SkillBlackList		= "";

// スキル/ジャーナル入力ウィンドウ表示モード (ウィンドウ=1 標準=0)
// Skills / journal entry window display mode (window = 1 standard = 0)
var DefaultWindowMode		= 0;

// ペット入力ウィンドウ表示モード (ウィンドウ=1 標準=0)
// Pets input window display mode (window = 1 standard = 0)
var PetDefaultWindowMode	= 0;

// ペットを登録・表示可能にする (する=1 しない=0)
// Enable the Pet feature (Enable=1 Disable=0)
var PetMode			= 1;

// ジャーナルを登録・表示可能にする (する=1 しない=0)
// Enable the Achievements feature (Enable=1 Disable=0)
var AchievementMode		= 1;

// 登録・変更ページでスクロールをJavaScriptで制御する (制御する=1 制御しない=0)
//Javascript MouseWheel Page Scrolling Script (Control=1 No Control=0)
var jsPageScroll		= 0;

// jsPageScrollが1の場合、Google Chromeでのスクロール量
// If jsPageScroll is 1, Controls the amount of page scrolling in Google Chrome
var chrome_wheel_speed		= 0.834;

// jsPageScrollが1の場合、Internet Explorerでのスクロール量
// If jsPageScroll is 1, Controls the amount of page scrolling in Internet Explorer
var ie_wheel_speed		= 0.625;

// jsPageScrollが1の場合、Mozilla Firefoxでのスクロール量
// // If jsPageScroll is 1, Controls the amount of page scrolling in Firefox
var ff_wheel_speed		= 13;

// 各ファイルのバージョンチェックを行う (する=1 しない=0)
// Enables Version check of each file (Enable = 1 Disable = 0)
var VersionCheckFlg		= 1;

// JavaScriptのエラーを表示 (表示する=1 表示しない=0)
// View the JavaScript errors (Display=1  Do not Display=0)
var ScriptErrorReport		= 0;

// スキル/ペット入力ウィンドウ 読み込み画面
// Skills and pet input window loading screen
var tb_pathToImage		= RGTSkinDir+"/imgs/loading.gif";

// 設定
// Setting
//****************************************************************************************************//
// 変更不可
// Do not change
var config_loaded = function(){}
files_version_a["js_config"] = 20150210.000;
