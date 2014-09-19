import DS from 'ember-data';

export default DS.Model.extend({
   title:DS.attr('string'),
   subject:DS.attr(),
   dt:DS.attr('date')
});
