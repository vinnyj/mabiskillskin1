package rgtskin;
my $skindir = $rgt::skindir;
# ↑Do not Delete

#**************************************************#
#* MabiSkillSkin SkinConfig                       *#
#*  Update: 2015/02/10 18:16                      *#
#**************************************************#

#****************************************************************************************************#
# Skin Settings

# Main Page Skin
#　When it makes old design, please refer to “the option item of the skin” of the manual and set appropriately.
$mainhtml	= "$skindir/temp_main.html";

# Registration Page Skin
$reghtml	= "$skindir/temp_reg.html";

# Profile Modification Page Skin
$edithtml	= "$skindir/temp_edit.html";

# Style Sheet for Page style system
$syscss		= "$skindir/css_system.css";

# When images do not show up when viewing images of members to the main page, a placeholder image is shown
$nowp_img	= "<img src=\"$skindir/imgs/ss_noimage.jpg\" width=\"128\" height=\"256\" border=\"0\" alt=\"NowPrinting\" />";

#The picture which it indicates as the sample picture (with standard the picture of $nowp_img is adapted in the register/modification page)
$sample_img	= $nowp_img;
#$sample_img	= "<img src=\"$skindir/imgs/ss_sample.jpg\" width=\"128\" height=\"256\" border=\"0\" alt=\"Sample\" />";

# Uploaded image size [Unit ：Pixel]
#Be careful when resizing image, there may be issues that affect the rest of the skin　
@maxSize	= (128, 256); # (Width, height)

# Sunday - Saturday text
@weekdays	= ("SUN","MON","TUE","WED","THU","FRI","SAT");
#@weekdays	= ("日","月","火","水","木","金","土");

#January - December text
#@month		= ("1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月");

@month		= ("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");


# Top 10 in the month and day when you give it less than 0? (1 = Yes 0 = No)
#  Example: If one month and 01 show
$date_fig	= 1;

# Type and number of rank 
#  When editing this value, be careful it affects Js_common.js, as well!
@rank		= ("GuildMaster","SubMaster","Member");

# Each rank by the maximum number of registered
#  Cases：@rank     = ("GuildMaster", "Member");
#      @rank_max = (1, 0);
#      If you set「"Master" to maximum of 1」「"Member" to no restriction」 then you set it to
#     「0」 which means 「unrestricted」:
@rank_max	= (1, 1, 0);

#****************************************************************************************************#
# When there is a necessity only, please modify

# Name and number of items used
$name{"name"}		= "Name";
$name{"name_view"}	= "Show Name";
$name{"position"}	= "Position";
$name{"sex"}		= "Character Gender";
$name{"read"}		= "Read";
$name{"nickname"}	= "Nickname";
$name{"race"}		= "Race";
$name{"lv"}		= "Total Level";
$name{"exp_lv"}		= "Total Exploration Level";
$name{"lovetitle"}	= "Favorite Title";
$name{"logintime"}	= "Active Times";
$name{"appear"}		= "Usually seen";
$name{"appeal"}		= "Specialty";
$name{"allskill"}	= "All Skills";
$name{"skill"}		= "Main Skills";
$name{"achievement"}	= "Journal";
$name{"pet"}		= "Pets Owned";
$name{"cmt"}		= "Comment";

# Set menu items to the type
#  When editing these values, be careful it affects Js_common.js, as well!
$menu{"sex"}		.= "Male,Female";
$menu{"race"}		.= "Human,Elf,Giant";
$menu{"name_view"}	.= "Show, Hide";

# You verify whether those whose contents of each item which the user inputs when registering the article/modification are correct
$check{"read"}		= 0;
$check{"cmt"}		= 0;

# Set the line item to allow
$enter{"cmt"}		= 1;

#****************************************************************************************************#
# Do not change

#****************************************************************************************************#
# View rgt.cgi interrupt processing (implementation test)
#　I especially do not need to change, not sure how it is.

# View header
sub header{
}

# View Members
sub member{
	if($date_fig){
		if($rgt::day<10){ $rgt::day = "0$rgt::day"; }
		if($rgt::mon<10){ $rgt::mon = "0$rgt::mon"; }
	}
}

# Footer
sub footer{
}

#****************************************************************************************************#
# Change unnecessary

# Copyright information of skin (change, delete prohibited)
$ver = 'MabiSkillSkin_v2';

#****************************************************************************************************#
1;