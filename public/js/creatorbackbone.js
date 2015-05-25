/* define the application */
var app = new Backbone.Marionette.Application();

/* add the main region to the application */
app.addRegions({
	appRegion: '#AppBase'
});

/* define the module we will be using to create this app */
app.module('RouteTest', function(module, App, Backbone, Marionette, $, _){
	"use strict";

	/* the layout for the main view */
	module.AppLayoutView = Marionette.LayoutView.extend({
		tagName: 'div',
		id: 'AppLayoutView',
		template: '#template-AppLayoutView',

		regions: {
			'contentRegion' : '#ContentRegion'
		},
		ui: {
			'navStart' : '#nav-start',
			'navPage' : '#nav-page',
			'navChar' : '#nav-char',
			'navAnimator' : '#nav-animator',
			'navArt' : '#nav-art',
			'navItem' : '#nav-item',
			'navCoffee' : '#nav-coffee'
		},
		events: {
			'click #nav-start' : 'onNavStartClicked',
			'click #nav-page' : 'onNavPageClicked',
			'click #nav-char' : 'onNavCharClicked',
			'click #nav-animator' : 'onNavAnimatorClicked',
			'click #nav-art' : 'onNavArtClicked',
			'click #nav-item' : 'onNavItemClicked',
			'click #nav-coffee' : 'onNavCoffeeClicked'
		},

		/* when the view initializes, call initRouter to */
		initialize: function() {
			this.initRouter();
		},

		/* once the DOM is ready, start the Backbone history manager.
			This will cause the application to synch up with the
			current route of the browser, e.g. #home or #info.
			This must be called onRender instead of on initialize
			because it immediately tries to render the appropriate view
			into the contentRegion. Also: If you don't start the backbone
			history, the router won't work. */
		onRender: function() {
			if (!Backbone.History.started) Backbone.history.start();
		},

		/* initialize the AppRouter, which synchs the application
			to the browser navigation */
		initRouter: function() {

			// cache reference to 'this' in the module scope
			var capturedThis = this;

			// create a new instance of the AppRouter
			// and assign the routes and controller
			var appRouter = new Marionette.AppRouter({
				appRoutes: {
    				'' : 'onPageRoute',
					'start' : 'onStartRoute',
    				'page' : 'onPageRoute',
    				'char' : 'onCharRoute',
    				'animator' : 'onAnimatorRoute',
    				'art' : 'onArtRoute',
    				'item' : 'onItemRoute',
    				'coffee' : 'onCoffeeRoute'
    			},
				controller: {
					onStartRoute: function() {
    					capturedThis.onStartNavigated();
    				},
    				onPageRoute: function() {
    					capturedThis.onPageNavigated();
    				},
    				onCharRoute: function() {
    					capturedThis.onCharNavigated();
    				},
    				onAnimatorRoute: function() {
    					capturedThis.onAnimatorNavigated();
    				},
    				onArtRoute: function() {
    					capturedThis.onArtNavigated();
    				},
    				onItemRoute: function() {
    					capturedThis.onItemNavigated();
    				},
    				onCoffeeRoute: function() {
    					capturedThis.onCoffeeNavigated();
    				}
    			}
			});
		},

		/* called when the router sees that we have met the criteria
			to trigger the 'onStartRoute' handler */
		onStartNavigated: function() {

			// define and display an instance of the StartLayoutView
			var startLayoutView = new module.StartLayoutView();
			this.contentRegion.show(StartLayoutView);

			// update the navigation
			this.$el.find('.navButton.active').removeClass('active');
			this.ui.navStart.addClass('active');
		},
		onPageNavigated: function() {
			var layoutView = new module.PageLayoutView();
			this.contentRegion.show(layoutView);
			this.$el.find('.navButton.active').removeClass('active');
			this.ui.navPage.addClass('active');
		},

		onCharNavigated: function() {
			var layoutView = new module.CharLayoutView();
			this.contentRegion.show(layoutView);
			this.$el.find('.navButton.active').removeClass('active');
			this.ui.navChar.addClass('active');
		},
		onAnimatorNavigated: function() {
			var layoutView = new module.AnimatorLayoutView();
			this.contentRegion.show(layoutView);
			this.$el.find('.navButton.active').removeClass('active');
			this.ui.navAnimator.addClass('active');
		},
		onArtNavigated: function() {
			var layoutView = new module.ArtLayoutView();
			this.contentRegion.show(layoutView);
			this.$el.find('.navButton.active').removeClass('active');
			this.ui.navArt.addClass('active');
		},
		onItemNavigated: function() {
			var layoutView = new module.ItemLayoutView();
			this.contentRegion.show(layoutView);
			this.$el.find('.navButton.active').removeClass('active');
			this.ui.navItem.addClass('active');
		},
		onCoffeeNavigated: function() {
			var layoutView = new module.CoffeeLayoutView();
			this.contentRegion.show(layoutView);
			this.$el.find('.navButton.active').removeClass('active');
			this.ui.navCoffee.addClass('active');
		}
	});
	
	module.StartLayoutView = Marionette.LayoutView.extend({
		tagName: 'div',
		id: 'StartLayoutView',
		className: 'contentLayout',
		template: '#template-StartLayoutView'
	});

	module.PageLayoutView = Marionette.LayoutView.extend({
		tagName: 'div',
		id: 'PageLayoutView',
		className: 'contentLayout',
		template: '#template-PageLayoutView'
	});

	module.CharLayoutView = Marionette.LayoutView.extend({
		tagName: 'div',
		id: 'CharLayoutView',
		className: 'contentLayout',
		template: '#template-CharLayoutView'
	});

	module.AnimatorLayoutView = Marionette.LayoutView.extend({
		tagName: 'div',
		id: 'AnimatorLayoutView',
		className: 'contentLayout',
		template: '#template-AnimatorLayoutView'
	});

	module.ArtLayoutView = Marionette.LayoutView.extend({
		tagName: 'div',
		id: 'ArtLayoutView',
		className: 'contentLayout',
		template: '#template-ArtLayoutView'
	});

	module.ItemLayoutView = Marionette.LayoutView.extend({
		tagName: 'div',
		id: 'ItemLayoutView',
		className: 'contentLayout',
		template: '#template-ItemLayoutView'
	});

	module.CoffeeLayoutView = Marionette.LayoutView.extend({
		tagName: 'div',
		id: 'CoffeeLayoutView',
		className: 'contentLayout',
		template: '#template-CoffeeLayoutView'
	});

	/* add initializer, which fires when the app starts */
	module.addInitializer(function(){
		var layout = new module.AppLayoutView();

		/* show the layout in the region we created at the top of this file */
		app.appRegion.show(layout);
	});
});

/* when the DOM for this page is available, start the application */
$(document).ready(function() {
	app.start();
});