import Ember from 'ember';

const {
  computed,
  defineProperty,
  run
} = Ember;

export default Ember.Component.extend({
  model: null,
  value: null,
  rawInputValue: null,
  type: 'text',
  textarea: false,
  valuePath: '',
  placeholder: '',
  label: '',
  attributeValidation: null,
  showError: false,

  isValid: computed.oneWay('attributeValidation.isValid'),

  isInvalid: computed.oneWay('attributeValidation.isInvalid'),

  didInitAttrs() {
    this._super(...arguments);
    const valuePath = this.get('valuePath');
    defineProperty(this, 'attributeValidation', computed.oneWay(`model.validations.attrs.${valuePath}`));
    defineProperty(this, 'value', computed.alias(`model.${valuePath}`));
  },

  actions: {

    validate() {
      this.set('showError', this.get('isInvalid'));
    }
  }
});