//**************************************************//
//* MabiSkillSkin Config JavaScript                *//
//*  Update: 2015/02/10 17:41                      *//
//**************************************************//

//****************************************************************************************************//
// �e���ڂ̏ڂ��������́A�}�j���A���́u�X�L���̃I�v�V�������ځv���Q�Ƃ��Ă��������B
//****************************************************************************************************//
// �ݒ�

// �L�����N�^�[ �\���f�U�C�� (���f�U�C��=1 �V�f�U�C��=0)
//�@���f�U�C���ɂ���ꍇ�A���̍��ڂ��ύX����K�v������܂��̂Ń}�j���A�����������������B
// Character display design (old design = 1  new design = 0)
// If you want to the old design, please refer to the manual, you must also change the other items.
var CharaViewMode		= 0;

// �V�f�U�C���ŃL�����\�������̔w�i�𓧉߂��Ȃ� (���߂��Ȃ�=1 ���߂���=0)
// New Design's Character Display Background Transparency (Opaque=1 Transparent=0)
var CharaViewTransparent	= 0;

// �X�L�������E�B���h�E��\�����邩 (�\������=1 �\�����Ȃ�=0)
// View the skill description window? (Display=1 Do not Display=0)
var SkillInfoWindowFlg		= 1;

// �X�L�������ݒ�i�ڂ����̓}�j���A���Q�Ɓj
// Skill Blacklist (see the manual for more information)
var SkillBlackList		= "";

// �X�L��/�W���[�i�����̓E�B���h�E�\�����[�h (�E�B���h�E=1 �W��=0)
// Skills / journal entry window display mode (window = 1 standard = 0)
var DefaultWindowMode		= 0;

// �y�b�g���̓E�B���h�E�\�����[�h (�E�B���h�E=1 �W��=0)
// Pets input window display mode (window = 1 standard = 0)
var PetDefaultWindowMode	= 0;

// �y�b�g��o�^�E�\���\�ɂ��� (����=1 ���Ȃ�=0)
// Enable the Pet feature (Enable=1 Disable=0)
var PetMode			= 1;

// �W���[�i����o�^�E�\���\�ɂ��� (����=1 ���Ȃ�=0)
// Enable the Achievements feature (Enable=1 Disable=0)
var AchievementMode		= 1;

// �o�^�E�ύX�y�[�W�ŃX�N���[����JavaScript�Ő��䂷�� (���䂷��=1 ���䂵�Ȃ�=0)
//Javascript MouseWheel Page Scrolling Script (Control=1 No Control=0)
var jsPageScroll		= 0;

// jsPageScroll��1�̏ꍇ�AGoogle Chrome�ł̃X�N���[����
// If jsPageScroll is 1, Controls the amount of page scrolling in Google Chrome
var chrome_wheel_speed		= 0.834;

// jsPageScroll��1�̏ꍇ�AInternet Explorer�ł̃X�N���[����
// If jsPageScroll is 1, Controls the amount of page scrolling in Internet Explorer
var ie_wheel_speed		= 0.625;

// jsPageScroll��1�̏ꍇ�AMozilla Firefox�ł̃X�N���[����
// // If jsPageScroll is 1, Controls the amount of page scrolling in Firefox
var ff_wheel_speed		= 13;

// �e�t�@�C���̃o�[�W�����`�F�b�N���s�� (����=1 ���Ȃ�=0)
// Enables Version check of each file (Enable = 1 Disable = 0)
var VersionCheckFlg		= 1;

// JavaScript�̃G���[��\�� (�\������=1 �\�����Ȃ�=0)
// View the JavaScript errors (Display=1  Do not Display=0)
var ScriptErrorReport		= 0;

// �X�L��/�y�b�g���̓E�B���h�E �ǂݍ��݉��
// Skills and pet input window loading screen
var tb_pathToImage		= RGTSkinDir+"/imgs/loading.gif";

// �ݒ�
// Setting
//****************************************************************************************************//
// �ύX�s��
// Do not change
var config_loaded = function(){}
files_version_a["js_config"] = 20150210.000;
