export default [
  {
    key: 'multiple',
    ignore: true
  },
  {
    weight: 20,
    type: 'textfield',
    input: true,
    key: 'delimeter',
    label: 'الفاصل',
    tooltip: 'تحديد الفاصل الذي سيفصل الاوسمة</a>'
  },
  {
    weight: 22,
    type: 'number',
    input: true,
    key: 'maxTags',
    label: 'الحد الاقصى للاوسمة',
    defaultValue: 0,
    tooltip: 'الحد الاقصي للاوسمة المسموح به يمكن وضع 0 لتعطيل الحد الاعلى والسماح بكل الاوسمة'
  },
  {
    weight: 24,
    type: 'select',
    input: true,
    key: 'storeas',
    label: 'حفظ كـ',
    dataSrc: 'values',
    data: {
      values: [
        { label: 'نص (CSV)', value: 'string' },
        { label: 'مصفوفة من الاوسمة', value: 'array' }
      ]
    }
  }
];
