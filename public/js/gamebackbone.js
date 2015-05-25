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
			'navHome' : '#nav-home',
			'navSkills' : '#nav-skills',
			'navInventory' : '#nav-inventory',
			'navRelationships' : '#nav-relationships',
			'navFriends' : '#nav-friends',
			'navMagic' : '#nav-magic'
		},
		events: {
			'click #nav-start' : 'onNavStartClicked',
			'click #nav-homeart' : 'onNavHomeClicked',
			'click #nav-skills' : 'onNavSkillsClicked',
			'click #nav-inventory' : 'onNavInventoryClicked',
			'click #nav-relationships' : 'onNavRelationshipsClicked',
			'click #nav-friends' : 'onNavFriendsClicked',
			'click #nav-magic' : 'onNavMagicClicked'
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
    				'' : 'onStartRoute',
					'start' : 'onStartRoute',
    				'home' : 'onHomeRoute',
    				'skills' : 'onSkillsRoute',
    				'inventory' : 'onInventoryRoute',
    				'relationships' : 'onRelationshipsRoute',
    				'friends' : 'onFriendsRoute',
    				'magic' : 'onMagicRoute'
    			},
				controller: {
					onStartRoute: function() {
    					capturedThis.onStartNavigated();
    				},
    				onHomeRoute: function() {
    					capturedThis.onHomeNavigated();
    				},
    				onSkillsRoute: function() {
    					capturedThis.onSkillsNavigated();
    				},
    				onInventoryRoute: function() {
    					capturedThis.onInventoryNavigated();
    				},
    				onRelationshipsRoute: function() {
    					capturedThis.onRelationshipsNavigated();
    				},
    				onFriendsRoute: function() {
    					capturedThis.onFriendsNavigated();
    				},
    				onMagicRoute: function() {
    					capturedThis.onMagicNavigated();
    				}
    			}
			});
		},

		/* called when the router sees that we have met the criteria
			to trigger the 'onStartRoute' handler */
		onStartNavigated: function() {

			// define and display an instance of the HomeLayoutView
			var layoutView = new module.StartLayoutView();
			this.contentRegion.show(layoutView);

			// update the navigation
			this.$el.find('.navButton.active').removeClass('active');
			this.ui.navStart.addClass('active');
		},
		onHomeNavigated: function() {

			// define and display an instance of the HomeLayoutView
			var layoutView = new module.HomeLayoutView();
			this.contentRegion.show(layoutView);

			// update the navigation
			this.$el.find('.navButton.active').removeClass('active');
			this.ui.navHome.addClass('active');
		},

		onSkillsNavigated: function() {
			var layoutView = new module.SkillsLayoutView();
			this.contentRegion.show(layoutView);
			this.$el.find('.navButton.active').removeClass('active');
			this.ui.navSkills.addClass('active');
		},
		onInventoryNavigated: function() {
			var layoutView = new module.InventoryLayoutView();
			this.contentRegion.show(layoutView);
			this.$el.find('.navButton.active').removeClass('active');
			this.ui.navInventory.addClass('active');
		},
		onFriendsNavigated: function() {
			var layoutView = new module.FriendsLayoutView();
			this.contentRegion.show(layoutView);
			this.$el.find('.navButton.active').removeClass('active');
			this.ui.navFriends.addClass('active');
		},
		onRelationshipsNavigated: function() {
			var layoutView = new module.RelationshipsLayoutView();
			this.contentRegion.show(layoutView);
			this.$el.find('.navButton.active').removeClass('active');
			this.ui.navRelationships.addClass('active');
		},
		onMagicNavigated: function() {
			var layoutView = new module.MagicLayoutView();
			this.contentRegion.show(layoutView);
			this.$el.find('.navButton.active').removeClass('active');
			this.ui.navMagic.addClass('active');
		}
	});
	
	module.StartLayoutView = Marionette.LayoutView.extend({
		tagName: 'div',
		id: 'StartLayoutView',
		className: 'contentLayout',
		template: '#template-StartLayoutView'
	});

	module.HomeLayoutView = Marionette.LayoutView.extend({
		tagName: 'div',
		id: 'HomeLayoutView',
		className: 'contentLayout',
		template: '#template-HomeLayoutView'
	});

	module.SkillsLayoutView = Marionette.LayoutView.extend({
		tagName: 'div',
		id: 'SkillsLayoutView',
		className: 'contentLayout',
		template: '#template-SkillsLayoutView'
	});

	module.InventoryLayoutView = Marionette.LayoutView.extend({
		tagName: 'div',
		id: 'InventoryLayoutView',
		className: 'contentLayout',
		template: '#template-InventoryLayoutView'
	});

	module.RelationshipsLayoutView = Marionette.LayoutView.extend({
		tagName: 'div',
		id: 'RelationshipsLayoutView',
		className: 'contentLayout',
		template: '#template-RelationshipsLayoutView'
	});

	module.FriendsLayoutView = Marionette.LayoutView.extend({
		tagName: 'div',
		id: 'FriendsLayoutView',
		className: 'contentLayout',
		template: '#template-FriendsLayoutView'
	});

	module.MagicLayoutView = Marionette.LayoutView.extend({
		tagName: 'div',
		id: 'MagicLayoutView',
		className: 'contentLayout',
		template: '#template-MagicLayoutView'
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