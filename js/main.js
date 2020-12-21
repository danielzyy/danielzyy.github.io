$(document).ready(() => {
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 70;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
        document.body.appendChild(css);
    };
    
	// $('.gallery-item .thumbnail').on('mouseenter', event => {
	// 	$(event.currentTarget).animate({
	// 		opacity:1,
	// 		height:"22rem",
	// 		width: "31rem"
	// 	},290);
	// });
	// $('.thumbnail').on('mouseleave', event => {
	// 	$(event.currentTarget).animate({
	// 		opacity:0.9,
	// 		height:"21rem",
	// 		width: "30rem"
	// 	},290);
	// });
	// $('#academics').on('click', () => {
	// 	$('#academics').fadeOut(500);
	// 	$('.academicsinfo').delay(500).slideDown(500); 
	// });
	// $('#sports').on('click', () => {
	// 	$('#sports').fadeOut(500);
	// 	$('.sportsinfo').delay(500).slideDown(500); 
	// });
	// $('#extracurriculars').on('click', () => {
	// 	$('#extracurriculars').fadeOut(500);
	// 	$('.extrainfo').delay(500).slideDown(500); 
	// });
	// $('.academicsinfo .closebutton').on('click', () => {
	// 	$('.academicsinfo').slideUp(500); 
	// 	$('#academics').delay(500).fadeIn(500);	
	// });
	// $('.sportsinfo .closebutton').on('click', () => {
	// 	$('.sportsinfo').slideUp(500); 
	// 	$('#sports').delay(500).fadeIn(500);	
	// });
	// $('.extrainfo .closebutton').on('click', () => {
	// 	$('.extrainfo').slideUp(500); 
	// 	$('#extracurriculars').delay(500).fadeIn(500);	
	// });
	// function goToByScroll(id){
	//           // Remove "link" from the ID
	//         id = id.replace("link", "");
	//           // Scroll
	//         $('html,body').animate({
	//             scrollTop: $("#"+id).offset().top},
	//             'slow');
	//     }
    // $('.bar a').click(function(e) { 
    //       // Prevent a page reload when a link is pressed
    //     e.preventDefault(); 
    //       // Call the scroll function
    //     goToByScroll($(this).attr("id"));           
    // });
    // $('.sidenav a').click(function(e) { 
    //       // Prevent a page reload when a link is pressed
    //     e.preventDefault(); 
    //       // Call the scroll function
    //     goToByScroll($(this).attr("id"));           
    // });
});