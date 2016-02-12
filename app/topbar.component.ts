import {Component} from 'angular2/core';



@Component({
    selector: 'topbar',
    templateUrl: 'app/views/topbar.html'

})


export class TopBarComponent {
	

	ngAfterViewInit() {

		$('#main_search_btn').on('click', function(e) {
			e.preventDefault();
			altair_main_header.search_show();
		});
		// hide main search
		
		$(document).on('click keydown', function(e) {
			if ($body.hasClass('main_search_active')) {
				if (
					(!$(e.target).closest('.header_main_search_form').length && !$(e.target).closest('#main_search_btn').length)
					|| (e.which == 27)
				) {
					altair_main_header.search_hide();
				}
			}
		});

		$('.header_main_search_close').on('click', function() {
			altair_main_header.search_hide();
		});

	   $('#full_screen_toggle').on('click', function(e) {
			e.preventDefault();
			screenfull.toggle();
		})
	}
}
