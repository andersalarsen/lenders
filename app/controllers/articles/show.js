import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        delete(article) {
            article.destroyRecord().then(() => {
                this.transitionToRoute('articles.index'); 
            });
        }
    }
});
