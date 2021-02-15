export default [
  {
    key: 'multiple',
    ignore: true
  },
  {
    type: 'datagrid',
    input: true,
    label: 'الاسئلة',
    key: 'questions',
    tooltip: 'الاسئلة التي تود طرحها فى هذا الاستبيان',
    weight: 0,
    reorder: true,
    defaultValue: [{ label: '', value: '' }],
    components: [
      {
        label: 'النص',
        key: 'label',
        input: true,
        type: 'textfield'
      },
      {
        label: 'القيمة',
        key: 'value',
        input: true,
        type: 'textfield',
        allowCalculateOverride: true,
        calculateValue: { _camelCase: [{ var: 'row.label' }] }
      }
    ]
  },
  {
    type: 'datagrid',
    input: true,
    label: 'القيم',
    key: 'values',
    tooltip: 'القيم الذي سيتم الخيار منها',
    weight: 1,
    reorder: true,
    defaultValue: [{ label: '', value: '' }],
    components: [
      {
        label: 'النص',
        key: 'label',
        input: true,
        type: 'textfield'
      },
      {
        label: 'القيمة',
        key: 'value',
        input: true,
        type: 'textfield',
        allowCalculateOverride: true,
        calculateValue: { _camelCase: [{ var: 'row.label' }] }
      }
    ]
  }
];
