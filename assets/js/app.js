$(document).ready(function(){
    
    Page = Backbone.Model.extend({
        initialize: function() {
            console.log('Page model initialized')
        }
    });
    
    Pages = Backbone.Collection.extend({
        model: Page
    });
    
    PageView = Backbone.View.extend({
        
        el: $('#container'),
        
        template: _.template($('#page-template').html()),
        
        initialize: function(){
            this.model.on( 'change', this.render, this );
            this.model.on( 'destroy', this.remove, this );
        },
        
        render: function(){
            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        }
    })
});