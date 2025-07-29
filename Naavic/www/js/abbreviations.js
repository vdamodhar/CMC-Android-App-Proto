$(document).ready(function() {
	$(".abbr_accordion").delegate(".toggle_image", "click", function(e) {
        e.preventDefault();

        var $this = $(this);
        $(".inner_image").slideUp();
        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().find('.inner_image').removeClass('show');
            $this.parent().find('.inner_image').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });
}); 