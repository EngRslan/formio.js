export default [
  {
    type: 'checkbox',
    input: true,
    key: 'enableTime',
    label: 'تفعيل ادخال الوقت',
    tooltip: 'تفعيل الوقت من ضمن مدخلاص الحقل.',
    weight: 0
  },
  {
    type: 'number',
    input: true,
    key: 'timePicker.hourStep',
    label: 'مقدار حركة الساعات',
    tooltip: 'مفدار حركة الساعات للاعلى/الاسفل',
    weight: 10
  },
  {
    type: 'number',
    input: true,
    key: 'timePicker.minuteStep',
    label: 'مقدار حركة الدقائق',
    tooltip: 'مقدار حركة الدقائق للأعلى/الاسفل',
    weight: 20
  },
  {
    type: 'checkbox',
    input: true,
    key: 'timePicker.showMeridian',
    label: 'توقيت 12/24 ساعة',
    tooltip: 'عرض توقيت 12 ساعه مع اضافة am/pm',
    weight: 30
  }
];
