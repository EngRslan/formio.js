export default [
  {
    wieght: 200,
    type: 'select',
    datasrc: 'values',
    key: 'fields.month.type',
    label: 'نوع المدخل',
    data: {
      values: [
        {
          label: 'رقم',
          value: 'number'
        },
        {
          label: 'اختيار',
          value: 'select'
        },
      ]
    }
  },
  {
    weight: 210,
    type: 'textfield',
    input: true,
    key: 'fields.month.placeholder',
    label: 'النص الفارغ',
    placeholder: 'ادخل النص الفارغ للشهر',
    tooltip: 'هذا النص سوف يظهر فى حقل الشهر عندما يكون فارغ'
  },
  {
    weight: 215,
    type: 'checkbox',
    label: 'مخفى',
    tooltip: 'اخفاء حقل الشهر من التاريخ',
    key: 'fields.month.hide',
    input: true
  },
];
