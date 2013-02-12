TXE.Router = Backbone.Router.extend({ 

  routes: {
    '' : 'home',
    'projects/:id'  : 'showProject'
  },

  initialize: function(){
    var user = $('#user').val();

    this.user = {
      logged: user === 'null' ? false : true,
      email:  user
    };

  },

  home: function(){
    if(this.user.logged){
      this.homeView = new TXE.Views.HomeView({el: '.projects-list'});
    }
  },

  showProject: function(id){
  }

});

