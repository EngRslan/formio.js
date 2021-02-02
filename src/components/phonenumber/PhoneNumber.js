import TextFieldComponent from '../textfield/TextField';

export default class PhoneNumberComponent extends TextFieldComponent {
  static schema(...extend) {
    return TextFieldComponent.schema({
      type: 'phoneNumber',
      label: 'رقم جوال',
      key: 'phoneNumber',
      inputType: 'tel',
      inputMask: '0999999999'
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'رقم جوال',
      group: 'advanced',
      icon: 'phone-square',
      weight: 30,
      documentation: '/userguide/#phonenumber',
      schema: PhoneNumberComponent.schema()
    };
  }

  get defaultSchema() {
    return PhoneNumberComponent.schema();
  }
}
