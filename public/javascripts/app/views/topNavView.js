define([

  'Backbone',

  //Template
  'text!templates/topNavTemplate.html'
], function(

  Backbone,

  //Template
  topNavTemplate

){

  var TopNavView = Backbone.View.extend({

    events: {
      'click a'       : 'preventDefault',
      'click .logout' : 'logout',
      'click .login'  : 'login'
    },

    template: _.template(topNavTemplate),

    initialize: function(){
      this.model.bind('change', this.render, this);
    },

    preventDefault: function(event){
      event.preventDefault();
    },

    logout: function(){
      var router = this.options.router;
      this.model.logout(function(){
        router.navigate('', true);
      });
    },

    login: function(){
      this.model.clear({silent: true});
      var form = $('#login-form').serialize();
      this.model.login(form);
    },

    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
    }
  });

  return TopNavView;

});
