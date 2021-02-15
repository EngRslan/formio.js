export default [
  {
    type: 'select',
    input: true,
    weight: 40,
    tooltip: 'اختر المساعد الذي تود استخدامه فى هذا الحقل',
    key: 'inputType',
    defaultValue: 'time',
    label: 'نوع المدخل',
    dataSrc: 'values',
    data: {
      values: [
        { label: 'HTML5 الادخال باستخدام', value: 'time' },
        { label: 'حقل نصل مع قناع ادخال', value: 'text' },
      ],
    },
  },
  {
    type: 'textfield',
    input: true,
    key: 'format',
    label: 'الصيغة',
    placeholder: 'ادخل الصيغة',
    tooltip: 'صيغة مكتبة moment الذي سوف يتم حفظها فى هذا الحقل',
    weight: 50,
    defaultValue: 'HH:mm',
    conditional: {
      json: {
        '===': [
          { var: 'data.inputType' },
          'text',
        ],
      },
    },
  },
  {
    key: 'placeholder',
    ignore: true,
  }
];
