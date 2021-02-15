export default [
  {
    wieght: 200,
    type: 'select',
    datasrc: 'values',
    key: 'fields.year.type',
    label: 'نوع الادخال',
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
    weight: 203,
    type: 'number',
    input: true,
    key: 'fields.year.minYear',
    label: 'اقل سنة',
    placeholder: '1900',
    tooltip: 'اقل سنة يمكن ان يقبلها الحقل'
  },
  {
    weight: 204,
    type: 'number',
    input: true,
    key: 'fields.year.maxYear',
    label: 'اكبر سنة',
    placeholder: '2030',
    tooltip: 'اكبر سنة يمكن ان يقبلها الحقل'
  },
  {
    weight: 210,
    type: 'textfield',
    input: true,
    key: 'fields.year.placeholder',
    label: 'النص الفارغ',
    placeholder: 'ادخل النص الفارغ للسنة',
    tooltip: 'ادخل النص الفارغ للسنة الذي سوف يظهر فى حالة كان الحقل فارغ'
  },
  {
    weight: 215,
    type: 'checkbox',
    label: 'مخفى',
    tooltip: 'اخفاء السنة من حقل التاريخ',
    key: 'fields.year.hide',
    input: true
  },
];
