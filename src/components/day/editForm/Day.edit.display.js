export default [
  {
    key: 'labelPosition',
    ignore: true
  },
  {
    weight: 15,
    type: 'checkbox',
    label: 'اخفاء عنواين حقول الادخال',
    tooltip: 'اخفاء حقول الادخال . لا تختفى الحقول وقت التصميم لكن تختفى عن توليد النموذج للعميل',
    key: 'hideInputLabels',
    input: true
  },
  {
    type: 'select',
    input: true,
    key: 'inputsLabelPosition',
    label: 'موقع حقول الادخال',
    tooltip: 'الموقع التي سوف تظهر فيه حقول الادخال حول الحقول.',
    weight: 40,
    defaultValue: 'top',
    dataSrc: 'values',
    data: {
      values: [
        { label: 'الاعلى', value: 'top' },
        { label: 'اليسار', value: 'left' },
        { label: 'اليمين', value: 'right' },
        { label: 'الاسفل', value: 'bottom' }
      ]
    }
  },
  {
    key: 'placeholder',
    ignore: true
  },
  {
    weight: 213,
    type: 'checkbox',
    label: 'استخدام الاعدادات المحلية',
    tooltip: 'استخدام الاعدادات فى متصفح العميل.',
    key: 'useLocaleSettings',
    input: true
  },
];
