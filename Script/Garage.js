;

//change of html font-size for smaller screens

(window.onload = function() { 
if (window.screen.width < 800) {
     document.documentElement.style.fontSize = "12px";
     document.getElementsByClassName('button')[0].style.marginLeft = "2.5rem";
     document.getElementsByClassName('button2')[0].style.marginLeft = "2.5rem";
    };
    if (window.screen.width > 1440) {
     document.documentElement.style.fontSize = "12px";
     document.getElementsByClassName('button')[0].style.marginLeft = "7rem";
     document.getElementsByClassName('button2')[0].style.marginLeft = "7rem";
};

//showing company information
var company = document.getElementsByClassName('company')[0];
var companyHidden = document.getElementsByClassName('company-hidden')[0];
company.onclick = function() {
companyHidden.style.transform = "translateY(-100%)";
companyHidden.style.transition = "transform 0.3s";
};
var logo = document.getElementsByClassName('logo_Garage_white')[0];
logo.onclick = function() {
  companyHidden.style.transform = "translateY(100%)";
  companyHidden.style.transition = "transform 1s";
};

//transition to project list on mousemove
var bottomline = document.getElementsByClassName('bottom-line')[0];
inner.addEventListener('mousemove', mouseshift);
function mouseshift(event) {
  if (!this.matches('[class^="transform"]')) {
    if (event.clientX < window.screen.width*0.2) {
      this.classList.add('drag-right');
      document.getElementsByClassName('arrow-left')[0].style.opacity = "0.4";
      company.style.transform = "translateY(4rem)";
      company.style.transition = "transform 0.2s";
      bottomline.style.transform = "translateY(4rem)";
      bottomline.style.transition = "transform 0.2s";
    } else if (event.clientX > window.screen.width*0.8) {
      this.classList.add('drag-left');
      document.getElementsByClassName('arrow-right')[0].style.opacity = "0.4";
      company.style.transform = "translateY(4rem)";
      company.style.transition = "transform 0.2s";
      bottomline.style.transform = "translateY(4rem)";
      bottomline.style.transition = "transform 0.2s";
    } else {
      this.classList.remove('drag-left');
      this.classList.remove('drag-right');
      document.getElementsByClassName('arrow-left')[0].style.opacity = "1";
      document.getElementsByClassName('arrow-right')[0].style.opacity = "1";
      company.style.transform = "translateY(0)";
      company.style.transition = "transform 0.2s";
      bottomline.style.transform = "translateY(0)";
      bottomline.style.transition = "transform 0.2s";
    }
  }
};
//transition to project list on arrow click
inner.addEventListener('click', arrowshift);
function arrowshift(event) {
  if (event.target.classList.contains('arrow-left')) {
    if (this.classList.contains('transform-left')) {
      this.classList.remove('transform-left');
      document.getElementsByClassName('arrow-right')[0].style.opacity = "1";
      company.style.transform = "translateY(0)";
      company.style.transition = "transform 0.2s";
      bottomline.style.transform = "translateY(0)";
      bottomline.style.transition = "transform 0.2s";
    } else {
      this.classList.add('transform-right');
      document.getElementsByClassName('arrow-left')[0].style.opacity = "0.4";
      company.style.transform = "translateY(4rem)";
      company.style.transition = "transform 0.2s";
      bottomline.style.transform = "translateY(4rem)";
      bottomline.style.transition = "transform 0.2s";
    }
  } else if (event.target.classList.contains('arrow-right')) {
    if (this.classList.contains('transform-right')) {
      this.classList.remove('transform-right');
      document.getElementsByClassName('arrow-left')[0].style.opacity = "1";
      company.style.transform = "translateY(0)";
      company.style.transition = "transform 0.2s";
      bottomline.style.transform = "translateY(0)";
      bottomline.style.transition = "transform 0.2s";

    } else {
    this.classList.add('transform-left');
    document.getElementsByClassName('arrow-right')[0].style.opacity = "0.4";
      company.style.transform = "translateY(4rem)";
      company.style.transition = "transform 0.2s";
      bottomline.style.transform = "translateY(4rem)";
      bottomline.style.transition = "transform 0.2s";
    } 
  } 
};

//project list height
var innercont = document.getElementsByClassName('innercont')[0];
var projects = document.getElementsByClassName('project');
var projects1 = document.getElementsByClassName('project1');
projectHeight = projects[0].clientHeight;
innercont.style.height = projectHeight*projects.length;
innercont1 = document.getElementsByClassName('innercont1')[0];
innercont1.style.height = innercont.offsetHeight;

//project list scroll
num = 0;
innercont.onwheel = function() {
  if (innercont.getBoundingClientRect().bottom > document.documentElement.clientHeight) {
    num+=180;
    innercont.style.transform = "translateY(" + -num + "px)";
  } else if (innercont.getBoundingClientRect().top < 0) {
    num=0;
    innercont.style.transform = "translateY(" + 0 + "px)";
  }
};

innercont1.onwheel = function() {
  if (innercont1.getBoundingClientRect().bottom > document.documentElement.clientHeight) {
    innercont1.style.transform = "translateY(" + -num + "px)";
    num+=180;
  } else if (innercont1.getBoundingClientRect().top < 0) {
    num=0;
    innercont1.style.transform = "translateY(" + 0 + "px)";
  }
};

//project opacity and image
var prjCount = 5;
function getOpacity(prj) {
  for (var i = 0; i<prj.length; ++i) {
    opacityNum = 1 - i*0.2;
    prj[i].style.opacity = opacityNum;
    prj[i].style.background = "url(" + prj[i].getAttribute('src') + ")";
    prj[i].style.backgroundSize = "cover";
    prj[i].onmouseenter = function() {
      this.classList.add("active");
    };
  }
}
getOpacity(projects);
getOpacity(projects1);

//on-hover project display
function displayPrj() {
  for (var i = 0; i<projects.length; i++) {
    projects[i].onmousemove = function(e) {
      var cover = this.getElementsByClassName("cover")[0];
      if (e.clientX > this.offsetWidth*0.2) { 
        cover.style.transform = "translateX(100%)";
      } else {
        cover.style.transform = "translateX(0)";
      }
    };
    projects[i].onmouseleave = function() {
      var cover = this.getElementsByClassName("cover")[0];
      this.classList.remove("active");
      cover.style.transform = "translateX(0)";
    };
  }
};
displayPrj(projects);

function displayPrj1() {
  for (var i = 0; i<projects1.length; i++) {
    projects1[i].onmousemove = function(e) {
      var cover1 = this.getElementsByClassName("cover1")[0];
      if (e.clientX > this.getBoundingClientRect().left + this.offsetWidth*0.2) { 
        cover1.style.transform = "translateX(100%)";
      } else {
        cover1.style.transform = "translateX(0)";
      }
    };
    projects1[i].onmouseleave = function() {
      var cover1 = this.getElementsByClassName("cover1")[0];
      this.classList.remove("active");
      cover1.style.transform = "translateX(0)";
    };
  }
};
displayPrj1(projects1);
}());