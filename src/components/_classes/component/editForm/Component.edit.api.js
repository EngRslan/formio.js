export default [
  {
    weight: 0,
    type: 'textfield',
    input: true,
    key: 'key',
    label: 'اسم الخاصية',
    tooltip: 'الاسم الذي سوف يتم حفظ القيمة بداخله وارسالها للخادم',
    validate: {
      pattern: '(\\w|\\w[\\w-.]*\\w)',
      patternMessage: 'اسم الخاصية يمكن ان يحتوي فقط على ارقام او حروف او شرطة سفلية او شرطة علوية او نقطة ولا يمكن ان ينتهي بشرطة علوية او نقطة',
      required: true
    }
  },
  {
    weight: 100,
    type: 'tags',
    input: true,
    label: 'اوسمة الحقل',
    storeas: 'array',
    tooltip: 'الاوسمة الذي سوف تستخدم فى صفحة المنطق',
    key: 'tags'
  },
  {
    weight: 200,
    type: 'datamap',
    label: 'خصائص اضافية',
    tooltip: 'هذا يسمح لك بتكوين أي خصائص مخصصة لهذا الحقل. ',
    key: 'properties',
    keyLabel: 'المفتاح',
    valueComponent: {
      type: 'textfield',
      key: 'value',
      label: 'القيمة',
      placeholder: 'القيمة',
      input: true
    },
    addAnother: 'اضافة اخر',
  },
];
