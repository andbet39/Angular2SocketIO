import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES}   from 'angular2/router';


@Component({
    selector: 'mysidebar',
    templateUrl:'app/views/sidebar.html',
	directives: [ROUTER_DIRECTIVES]
})
	

export class MySideBarComponent{


  ngAfterViewInit() {
	  var $body = $('body'),
		  $document = $(document),
		  $window = $(window),
		  $page_content = $('#page_content'),
		  $page_content_inner = $('#page_content_inner'),
		  $sidebar_main = $('#sidebar_main'),
		  $sidebar_main_toggle = $('#sidebar_main_toggle');
  
	  if (!$body.hasClass('sidebar_mini') && localStorage.getItem("altair_sidebar_mini") === null) {
		  $sidebar_main_toggle.on('click', function(e) {
				  e.preventDefault();
			  ($body.hasClass('sidebar_main_active') || ($body.hasClass('sidebar_main_open') && $window.width() >= 1220)) ? altair_main_sidebar.hide_sidebar() : altair_main_sidebar.show_sidebar();
		  });
		  
		  // hide sidebar (outside click/esc key pressed)
		  $document.on('click keyup', function(e) {
			  if ($body.hasClass('sidebar_main_active') && $window.width() < 1220) {
				  if (
					  (!$(e.target).closest($sidebar_main).length && !$(e.target).closest($sidebar_main_toggle).length)
					  || (e.keyCode == 27)
				  ) {
					  altair_main_sidebar.hide_sidebar();
				  }
			  }
		  });

   	}	 



   	  $sidebar_main.find('.menu_section > ul').find('li').each(function() {
		  var hasChildren = $(this).children('ul').length;
		  if (hasChildren) {
			  $(this).addClass('submenu_trigger')
		  }
	  });
	  
	  // toggle sections
	  $('.submenu_trigger > a').on('click', function(e) {
		  e.preventDefault();
		  var $this = $(this);
		  var slideToogle = $this.next('ul').is(':visible') ? 'slideUp' : 'slideDown';
		  // accordion mode
		  var accordion_mode = $sidebar_main.hasClass('accordion_mode');
		  $this.next('ul')
			  .velocity(slideToogle, {
				  duration: 400,
				  easing: easing_swiftOut,
				  begin: function() {
					  if (slideToogle == 'slideUp') {
						  $(this).closest('.submenu_trigger').removeClass('act_section')
					  } else {
						  if (accordion_mode) {
							  $this.closest('li').siblings('.submenu_trigger').each(function() {
								  $(this).children('ul').velocity('slideUp', {
									  duration: 400,
									  easing: easing_swiftOut,
									  begin: function() {
										  $(this).closest('.submenu_trigger').removeClass('act_section')
									  }
								  })
							  })
						  }
						  $(this).closest('.submenu_trigger').addClass('act_section')
					  }
				  },
				  complete: function() {
					  if (slideToogle !== 'slideUp') {
						  var scrollContainer = $sidebar_main.find(".scroll-content").length ? $sidebar_main.find(".scroll-content") : $sidebar_main.find(".scrollbar-inner");
						  $this.closest('.act_section').velocity("scroll", {
							  duration: 500,
							  easing: easing_swiftOut,
							  container: scrollContainer
						  });
					  }
				  }
			  });
	  });


	  $sidebar_main
		  .find('.act_item')
		  .closest('.submenu_trigger')
		  .addClass('act_section current_section')
		  .children('a')
		  .trigger('click');



   	  var $lang_switcher = $('#lang_switcher');

	  if ($lang_switcher.length) {
		  $lang_switcher.selectize({
			  options: [
				  { id: 1, title: 'English', value: 'gb' },
				  { id: 2, title: 'French', value: 'fr' },
				  { id: 3, title: 'Chinese', value: 'cn' },
				  { id: 4, title: 'Dutch', value: 'nl' },
				  { id: 5, title: 'Italian', value: 'it' },
				  { id: 6, title: 'Spanish', value: 'es' },
				  { id: 7, title: 'German', value: 'de' },
				  { id: 8, title: 'Polish', value: 'pl' }
			  ],
			  render: {
				  option: function(data, escape) {
					  return '<div class="option">' +
						  '<i class="item-icon flag-' + escape(data.value).toUpperCase() + '"></i>' +
						  '<span>' + escape(data.title) + '</span>' +
						  '</div>';
				  },
				  item: function(data, escape) {
					  return '<div class="item"><i class="item-icon flag-' + escape(data.value).toUpperCase() + '"></i></div>';
				  }
			  },
			  valueField: 'value',
			  labelField: 'title',
			  searchField: 'title',
			  create: false,
			  hideSelected: true,
			  onDropdownOpen: function($dropdown) {
				  $dropdown
					  .hide()
					  .velocity('slideDown', {
						  begin: function() {
							  $dropdown.css({ 'margin-top': '-33px' })
						  },
						  duration: 200,
						  easing: easing_swiftOut
					  })
			  },
			  onDropdownClose: function($dropdown) {
				  $dropdown
					  .show()
					  .velocity('slideUp', {
						  complete: function() {
							  $dropdown.css({ 'margin-top': '' })
						  },
						  duration: 200,
						  easing: easing_swiftOut
					  })
			  }
		  });

		  $lang_switcher.next().children('.selectize-input').find('input').attr('readonly', true);

}
