export default [
  {
    wieght: 200,
    type: 'select',
    datasrc: 'values',
    key: 'fields.day.type',
    label: 'النوع',
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
    key: 'fields.day.placeholder',
    label: 'النص الفارخ',
    placeholder: 'ادخل النص الفاريغ',
    tooltip: 'النص الفارغ هوا النص الظاهر عندما يكون الحقل فارغ'
  },
  {
    weight: 215,
    type: 'checkbox',
    label: 'مخفى',
    tooltip: 'اخفاء اليوم من التاريخ',
    key: 'fields.day.hide',
    input: true
  },
  {
    weight: 214,
    type: 'checkbox',
    label: 'اليوم اولا',
    tooltip: 'اظهار اليوم اولا قبل الشهر.',
    key: 'dayFirst',
    input: true
  },
];
