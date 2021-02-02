export default [
  {
    type: 'textfield',
    input: true,
    key: 'defaultDate',
    label: 'التاريخ الافتراضي',
    placeholder: 'moment()',
    tooltip: 'يمكن استخدام دوال Moment.js لتحديد القيمة الافتراضية للحقل مثال: \n \n moment().subtract(10, \'days\')',
    weight: 6
  },{
    type: 'textarea',
    as: 'json',
    editor: 'ace',
    weight: 28,
    input: true,
    key: 'customOptions',
    label: 'Flatpickr خيارات',
    tooltip: 'الاعدادت الخاصة بـ (Flatpickr) باستخدام JSON ليتم تمريرها كإعدادات للاضافة.',
    defaultValue: {},
  },
];
