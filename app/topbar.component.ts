import {Component} from 'angular2/core';



@Component({
    selector: 'topbar',
    templateUrl: 'app/views/topbar.html'

})


export class TopBarComponent {
	

	ngAfterViewInit() {


		// page onload functions
		altair_page_onload.init();

		// main header
		altair_main_header.init();

		// main sidebar
		altair_main_sidebar.init();
		// secondary sidebar
		altair_secondary_sidebar.init();

		// top bar
		altair_top_bar.init();

		// page heading
		altair_page_heading.init();

		// material design
		altair_md.init();

		// forms
		altair_forms.init();

		// truncate text helper
		altair_helpers.truncate_text($('.truncate-text'));

		// full screen
		altair_helpers.full_screen();

/*
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

		*/
	}

}
