/*
  MabiSkillSkin -MemberList 編集-のホイールスクロールスクリプト
  (c)2010 CJ？ごろう

  (2010-06-23T20:40)

  Edit by MSS.D.Team (19:59 2010/08/06)
*/

/*
  変数の宣言。
  その他。
*/
var mabiskillform_wheel_speed = 1;
var mabiskillform_mouseover_flag = false;
var mabiskillform_flag_lock = true;

var userAgent = window.navigator.userAgent.toLowerCase();

var dom_body,dom_mabiskillform,dom_skill_window_button,dom_pet_window_button;

var mabiskillform_add_scroll, mabiskillform_remove_scroll;
var mabiskillform_add_mouseover, mabiskillform_remove_mouseover;
var mabiskillform_add_mouseout, mabiskillform_remove_mouseout;


/*
  マウス座標がフォーム内にあるかの判定処理。
*/
var mabiskillform_mouse_check = function(event)
{
  if (!event) { event = window.event; }
  var sc_x = document.documentElement.scrollLeft || document.body.scrollLeft;
  var sc_y = document.documentElement.scrollTop || document.body.scrollTop;
  var ms_x = event.pageX || event.clientX + sc_x;
  var ms_y = event.pageY || event.clientY + sc_y;
  var msf_p = dom_mabiskillform.getBoundingClientRect();
  var msf_p_l = msf_p.left + sc_x;
  var msf_p_t = msf_p.top + sc_y;
  if (ms_x < msf_p_l || ms_y < msf_p_t) { return 0; }
  var msf_p_r = msf_p.left + dom_mabiskillform.offsetWidth;
  var msf_p_b = msf_p.top + dom_mabiskillform.offsetHeight;
  if (ms_x >= msf_p_r || ms_y >= msf_p_b) { return 0; }
  return 1;
};


/*
  スクロール処理。
*/
var mabiskillform_scroll = function(event)
{
  if (mabiskillform_flag_lock)
  {
    mabiskillform_flag_lock = false;
    if (mabiskillform_mouse_check(event)) { return; }
    mabiskillform_mouseover_flag = false;
  }
  if (mabiskillform_mouseover_flag) { return; }
  if (!event) { event = window.event; }
  var wD = (event.wheelDelta || (event.preventDefault(), -event.detail)) * mabiskillform_wheel_speed;
  dom_mabiskillform.scrollTop -= wD;
};


/*
  マウスオーバー処理。
*/
var mabiskillform_mouseover = function()
{
  mabiskillform_mouseover_flag = true;
};


/*
  マウスアウト処理。
*/
var mabiskillform_mouseout = function(event)
{
  if (mabiskillform_mouse_check(event)) { return; }
  mabiskillform_mouseover_flag = false;
};


/*
  イベントの追加＆消去処理の準備など。
*/
var mabiskillform_scrollevents = function(){
  var mousewheel_event = 'mousewheel'; // ブラウザ判定とともに前に移動
  if (userAgent.indexOf('firefox') > -1)
  {
    mabiskillform_wheel_speed = ff_wheel_speed;
    mousewheel_event = 'DOMMouseScroll';
  }
  else if (userAgent.indexOf('chrome') > -1)
  {
    mabiskillform_wheel_speed = chrome_wheel_speed;
  }
  else if (userAgent.indexOf('msie') > -1)
  {
    mabiskillform_wheel_speed = ie_wheel_speed;
  }

  if (window.addEventListener)
  {
    mabiskillform_add_mouseover    = function() { dom_mabiskillform.addEventListener('mouseover', mabiskillform_mouseover, false); };
    mabiskillform_remove_mouseover = function() { dom_mabiskillform.removeEventListener('mouseover', mabiskillform_mouseover, false); };
    mabiskillform_add_mouseout     = function() { dom_mabiskillform.addEventListener('mouseout', mabiskillform_mouseout, false); };
    mabiskillform_remove_mouseout  = function() { dom_mabiskillform.removeEventListener('mouseout', mabiskillform_mouseout, false); };
    mabiskillform_add_scroll    = function() { window.addEventListener(mousewheel_event, mabiskillform_scroll, false); };
    mabiskillform_remove_scroll = function() { window.removeEventListener(mousewheel_event, mabiskillform_scroll, false); };

    dom_skill_window_button.removeEventListener('click', mabiskillform_remove_scroll, false);
    dom_pet_window_button.removeEventListener('click', mabiskillform_remove_scroll, false);
  }
  else if (dom_body.attachEvent) // 一応チェック
  {
    mabiskillform_add_mouseover    = function() { dom_mabiskillform.attachEvent('onmouseover', mabiskillform_mouseover); };
    mabiskillform_remove_mouseover = function() { dom_mabiskillform.detachEvent('onmouseover', mabiskillform_mouseover); };
    mabiskillform_add_mouseout     = function() { dom_mabiskillform.attachEvent('onmouseout', mabiskillform_mouseout); };
    mabiskillform_remove_mouseout  = function() { dom_mabiskillform.detachEvent('onmouseout', mabiskillform_mouseout); };
    mabiskillform_add_scroll    = function() { dom_body.attachEvent('onmousewheel', mabiskillform_scroll); };
    mabiskillform_remove_scroll = function() { dom_body.detachEvent('onmousewheel', mabiskillform_scroll); };

    dom_skill_window_button.attachEvent('onclick', mabiskillform_remove_scroll);
    dom_pet_window_button.attachEvent('onclick', mabiskillform_remove_scroll);
  }
  else
  {
    return 0; // 「addEventListener」と「attachEvent」に未対応
  }
  return 1;
};

/*
  js_jquery.js内のtb_removeを書き換え。(edit 13:20 2010/08/06)
*/
var tb_remove_interrupt;
if (typeof(tb_remove) == 'function')
{
  tb_remove_interrupt = tb_remove;
  tb_remove = function()
  {
    tb_remove_interrupt();
    mabiskillform_flag_lock = true;
    mabiskillform_add_scroll();
  };
};

/*
  ページ表示時の処理。
*/
var mabiskillform_scroll_onload = function()
{
  dom_body = document.getElementsByTagName('body').item(0);
  dom_mabiskillform = document.getElementById('MabiSkill_form_area');
  dom_skill_window_button = document.getElementById('skill_window_button1');
  dom_pet_window_button = document.getElementById('pet_window_button1');

  if (mabiskillform_scrollevents()) // mabiskillform_scrollevents()の結果をチェック
  {
    mabiskillform_add_mouseover();
    mabiskillform_add_mouseout();
    mabiskillform_add_scroll();
  }
};

// 変更不可
files_version_a["js_scroll"] = 20100910.004;
