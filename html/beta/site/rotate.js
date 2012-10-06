var bannerImg = new Array();
  // Enter the names of the images below
  bannerImg[0]="http://becauseofhope.org/images/banner_logo.png";
  bannerImg[1]="http://becauseofhope.org/images/banner_ladies.png";
  bannerImg[2]="http://becauseofhope.org/images/banner_store.png";

var newBanner = 0;
var totalBan = bannerImg.length;

function cycleBan() {
  newBanner++;
  if (newBanner == totalBan) {
    newBanner = 0;
  }
  document.banner.src=bannerImg[newBanner];
  // set the time below for length of image display
  // i.e., "4*1000" is 4 seconds
  setTimeout("cycleBan()", 6*1000);
}
window.onload=cycleBan;




