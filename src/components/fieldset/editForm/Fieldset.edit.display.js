export default [
  {
    key: 'labelPosition',
    ignore: true
  },
  {
    key: 'placeholder',
    ignore: true
  },
  {
    key: 'description',
    ignore: true
  },
  {
    key: 'hideLabel',
    ignore: true
  },
  {
    key: 'autofocus',
    ignore: true
  },
  {
    key: 'tableView',
    ignore: true
  },
  {
    key: 'label',
    hidden: true,
    calculateValue(context) {
      return context.data.legend;
    }
  },
  {
    weight: 1,
    type: 'textfield',
    input: true,
    key: 'legend',
    label: 'العنوان',
    placeholder: 'ادخل العنوان',
    tooltip: 'عنوان مجموعة الحقول'
  },
];
