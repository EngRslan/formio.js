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
    key: 'autofocus',
    ignore: true
  },
  {
    key: 'tooltip',
    ignore: true
  },
  {
    key: 'tabindex',
    ignore: true
  },
  {
    key: 'disabled',
    ignore: true
  },
  {
    key: 'tableView',
    ignore: true
  },
  {
    type: 'number',
    label: 'عدد الصفوف',
    key: 'numRows',
    input: true,
    weight: 1,
    placeholder: 'ادخل عدد صفوف الجدول',
    tooltip: 'ادخل عد الصفوف الذي سيظهر بها الجدول'
  },
  {
    type: 'number',
    label: 'عدد الاعمدة',
    key: 'numCols',
    input: true,
    weight: 2,
    placeholder: 'ادخل عدد الاعمدة',
    tooltip: 'ادخل عدد الاعمدة الذي سيظهر بها الجدول'
  },
  {
    type: 'checkbox',
    label: 'نسخ محتويات الصف الاول',
    key: 'cloneRows',
    input: true,
    weight: 3,
    tooltip: 'اختار فى حالة كنت تود نسخ محتويات الصف الاول الى جميع الصفوف الفارغة'
  },
  {
    type: 'select',
    label: 'محاذاة الخلية',
    key: 'cellAlignment',
    input: true,
    tooltip: 'المحاذاة الافقية للخلية',
    dataSrc: 'values',
    data: {
      values: [
        { label: 'يسار', value: 'left' },
        { label: 'وسط', value: 'center' },
        { label: 'يمين', value: 'right' }
      ]
    },
    defaultValue: 'right',
    weight: 3
  },
  {
    type: 'checkbox',
    label: 'مخطط',
    key: 'striped',
    tooltip: 'فى حالة تحديد هذا الخيار سيتم تخطيط صفوف الجدول حسب الفردي و الزوجي',
    input: true,
    weight: 701
  },
  {
    type: 'checkbox',
    label: 'اظهار حدود الخلايا',
    key: 'bordered',
    input: true,
    tooltip: 'عند تحديد هذا الخيار سوف يتم رسم حدود الخلايا',
    weight: 702
  },
  {
    type: 'checkbox',
    label: 'تأثير الرفرفة',
    key: 'hover',
    input: true,
    tooltip: 'اظهار تأثير عند المرور بالمؤشر على الصف',
    weight: 703
  },
  {
    type: 'checkbox',
    label: 'مكثف',
    key: 'condensed',
    input: true,
    tooltip: 'تكثيف حكم الجدول',
    weight: 704
  },
];
