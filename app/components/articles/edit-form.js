import Ember from 'ember';

export default Ember.Component.extend({
    isValid: Ember.computed.notEmpty('model.name'),
    actions: {
        save() {
            console.log('save action called in articles edit-form component');
            if (this.get('isValid')) {
                this.get('model').save().then((article) => {
                    return this.save(article);
                }, () => {
                    this.set('errorMessage', 'there was something wrong saving the model');
                });
            } else {
                this.set('errorMessage', 'You have to fill all the fields');
            }
        },
        cancel() {
            //
            // We are calling the cancel action passed down when rendering the
            // component: action=(action "cancel")
            //
            console.log('cancel action called in articles edit-form component');
            this.cancel(this.get('model'));
        }
    }
});
