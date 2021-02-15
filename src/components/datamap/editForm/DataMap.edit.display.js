export default [
  {
    key: 'placeholder',
    ignore: true
  },
  {
    key: 'tabindex',
    ignore: true
  },
  {
    type: 'textfield',
    label: 'عنوان عمود المفتاح',
    key: 'keyLabel',
    tooltip: 'Provide a label text for Key column (otherwise \'Key\' will be used)',
    weight: 404,
    input: true
  },
  {
    type: 'checkbox',
    label: 'الغاء تفعيل اضافة حذف الصفوف',
    key: 'disableAddingRemovingRows',
    tooltip: 'حدد هذا الخيار فى حالة كنت تريد الغاء خاصية اضافة حذف الصفوف',
    weight: 405,
    input: true
  },
  {
    type: 'checkbox',
    label: 'اظهار عمود المفتاح قبل عمود القيمة',
    key: 'keyBeforeValue',
    tooltip: 'حدد هذا الخيار فى حالة كنت تريد ان يكون عمود المفتاح قبل عنوان القيمة',
    weight: 406,
    input: true
  },
  {
    type: 'textfield',
    label: 'نص زر اضافة اخر',
    key: 'addAnother',
    tooltip: 'العنوان الذي سيظهر على مفتاح اضافة اخر',
    placeholder: 'اضافة اخر',
    weight: 410,
    input: true,
    customConditional(context) {
      return !context.data.disableAddingRemovingRows;
    }
  }
];
