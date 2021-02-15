export default [
  {
    key: 'validate.required',
    ignore: true
  },
  {
    key: 'validate.unique',
    ignore: true
  },
  {
    weight: 0,
    type: 'checkbox',
    label: 'اليوم اجباري',
    tooltip: 'اليوم لابد من ادخاله قبل ارسال النموذج',
    key: 'fields.day.required',
    input: true
  },
  {
    weight: 10,
    type: 'checkbox',
    label: 'الشهر اجباري',
    tooltip: 'لابد من ادخال حقل التاريخ قبل ارسال النموذج',
    key: 'fields.month.required',
    input: true
  },
  {
    weight: 20,
    type: 'checkbox',
    label: 'السنة اجباري',
    tooltip: 'لابد من ادخال السنة قبل ارسال النموذج',
    key: 'fields.year.required',
    input: true
  },
  {
    weight: 40,
    type: 'textfield',
    label: 'اصغر يوم',
    placeholder: 'yyyy-MM-dd',
    tooltip: 'اصعر يوم يمكن ان يقبله هذا الحقل يمكن استخدام دوال moment الجاهزة كمثال: \n \n moment().subtract(10, \'days\')',
    key: 'minDate',
    input: true,
  },
  {
    weight: 30,
    type: 'textfield',
    label: 'اكبر يوم',
    placeholder: 'yyyy-MM-dd',
    tooltip: 'اكبر يوم يمكن ان يقبله هذا الحقل يمكن استخدام دوال moment الجاهزة كمثال: \n \n moment().add(10, \'days\')',
    key: 'maxDate',
    input: true,
  },
];
