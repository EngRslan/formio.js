/* eslint-disable max-len */
export default [
  {
    weight: 0,
    type: 'textfield',
    input: true,
    key: 'label',
    label: 'اسم الحقل',
    placeholder: 'ادخل اسم الحقل',
    tooltip: 'الاسم الظاهر للحقل',
    validate: {
      required: true
    }
  },
  {
    type: 'select',
    input: true,
    key: 'labelPosition',
    label: 'موضع اسم الحقل',
    tooltip: 'الموضع الذي سوف يظهر به عنوان الحقل',
    weight: 20,
    defaultValue: 'top',
    dataSrc: 'values',
    data: {
      values: [
        { label: 'الاعلى', value: 'top' },
        { label: 'ايسر (محاذاة لليسار)', value: 'left-left' },
        { label: 'ايسر (محاذاة لليمين)', value: 'left-right' },
        { label: 'ايمن (محاذاة لليسار)', value: 'right-left' },
        { label: 'ايمن (محاذاة لليمين)', value: 'right-right' },
        { label: 'الاسفل', value: 'bottom' }
      ]
    }
  },
  {
    type: 'number',
    input: true,
    key: 'labelWidth',
    label: 'مقاس العرض',
    tooltip: 'المساحة الذي سيستهلكها عرض الاسم من المساحة الكلية بالنسبة المؤوية',
    clearOnHide: false,
    weight: 30,
    placeholder: '30',
    suffix: '%',
    validate: {
      min: 0,
      max: 100
    },
    conditional: {
      json: {
        and: [
          { '!==': [{ var: 'data.labelPosition' }, 'top'] },
          { '!==': [{ var: 'data.labelPosition' }, 'bottom'] },
        ]
      }
    }
  },
  {
    type: 'number',
    input: true,
    key: 'labelMargin',
    label: 'الهوامش الخارجية للعنوان',
    tooltip: 'تحديد الهوامش الخارجية للعنوان',
    clearOnHide: false,
    weight: 30,
    placeholder: '3',
    suffix: '%',
    validate: {
      min: 0,
      max: 100
    },
    conditional: {
      json: {
        and: [
          { '!==': [{ var: 'data.labelPosition' }, 'top'] },
          { '!==': [{ var: 'data.labelPosition' }, 'bottom'] },
        ]
      }
    }
  },
  {
    weight: 100,
    type: 'textfield',
    input: true,
    key: 'placeholder',
    label: 'النص الفارغ',
    placeholder: 'ادخل النص الفارغ',
    tooltip: 'هذا النص سوف يظهر بداخل الحقل فى حالة عندم كتابة اي معلومات من قبل المستخدم'
  },
  {
    weight: 200,
    type: 'textarea',
    input: true,
    key: 'description',
    label: 'الوصف',
    placeholder: 'ادخل الوصف للحقل',
    tooltip: 'هذا الوصف سوف يظهر اسفل الحقل',
    editor: 'ace',
    as: 'html',
    wysiwyg: {
      minLines: 3,
      isUseWorkerDisabled: true,
    },
  },
  {
    weight: 300,
    type: 'textarea',
    input: true,
    key: 'tooltip',
    label: 'تلميح',
    placeholder: 'ادخل التلميح',
    tooltip: 'فى حالة كنت تريد عرض تلميح على هذا الحقل',
    editor: 'ace',
    as: 'html',
    wysiwyg: {
      minLines: 3,
      isUseWorkerDisabled: true,
    },
  },
  {
    weight: 500,
    type: 'textfield',
    input: true,
    key: 'customClass',
    label: 'فئة CSS مخصصة',
    placeholder: 'فئة CSS مخصصة',
    tooltip: 'فئة CSS مخصصة سوف يتم اضافتها للحقل وقت الانشاء'
  },
  {
    weight: 600,
    type: 'textfield',
    input: true,
    key: 'tabindex',
    label: 'اولوية التنقل',
    placeholder: '0',
    tooltip: 'تحديد اولية التنقل بين الحقول باستخدام زر TAB انظر <a href=\'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\'>الشرح</a> لمزيد من المعلومات.'
  },
  {
    weight: 1100,
    type: 'checkbox',
    label: 'مخفى',
    tooltip: 'هذا الحقل سيظل موجود داخل النموذك ولكنه سوف يكون مختفى',
    key: 'hidden',
    input: true
  },
  {
    weight: 1200,
    type: 'checkbox',
    label: 'اخفاء عنوان الحقل',
    tooltip: 'سوف يتم خفاء عنوان الحقل في التصميم',
    key: 'hideLabel',
    input: true
  },
  {
    weight: 1350,
    type: 'checkbox',
    label: 'التركيز الافتراضي',
    tooltip: 'جعل التركيز على هذا الحقل بمجرد انشاء النموذج',
    key: 'autofocus',
    input: true
  },
  {
    weight: 1370,
    type: 'checkbox',
    label: 'عرض عنوان الحقل فى حقل شبكة البيانات',
    tooltip: 'عرض عنوان الحقل فى حقل شبكة البيانات',
    key: 'dataGridLabel',
    input: true,
    customConditional(context) {
      return context.instance.options.flags.inDataGrid;
    }
  },
  {
    weight: 1400,
    type: 'checkbox',
    label: 'الغاء تفعيله',
    tooltip: 'الغاء تفعيل هذا الحقل',
    key: 'disabled',
    input: true
  },
  {
    weight: 1500,
    type: 'checkbox',
    label: 'عرض الجدول',
    tooltip: 'عرض هذا الحقل من ضمن بيانات الجدول وقت الارسال',
    key: 'tableView',
    input: true
  },
  {
    weight: 1600,
    type: 'checkbox',
    label: 'تعديل منبثق',
    tooltip: 'عرض نافذة منبثقة للتعديل على هذا الحقل',
    key: 'modalEdit',
    input: true
  },
];
/* eslint-enable max-len */
