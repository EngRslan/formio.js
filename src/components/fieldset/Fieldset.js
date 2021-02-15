import NestedComponent from '../_classes/nested/NestedComponent';

export default class FieldsetComponent extends NestedComponent {
  static schema(...extend) {
    return NestedComponent.schema({
      label: 'حزمة حقول',
      key: 'fieldSet',
      type: 'fieldset',
      legend: '',
      components: [],
      input: false,
      persistent: false
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'حزمة حقول',
      icon: 'th-large',
      group: 'layout',
      documentation: '/userguide/#fieldset',
      weight: 20,
      schema: FieldsetComponent.schema()
    };
  }

  get defaultSchema() {
    return FieldsetComponent.schema();
  }

  get className() {
    return `form-group ${super.className}`;
  }

  get templateName() {
    return 'fieldset';
  }

  constructor(...args) {
    super(...args);
    this.noField = true;
  }
}
