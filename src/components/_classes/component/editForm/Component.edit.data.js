import EditFormUtils from './utils';
/* eslint-disable max-len */
export default [
  {
    weight: 0,
    type: 'checkbox',
    label: 'متعدد القيم',
    tooltip: 'السماح بأكثر من قيمة لهذا الحقل',
    key: 'multiple',
    input: true
  },
  {
    type: 'textfield',
    label: 'القيمة الافتراضية',
    key: 'defaultValue',
    weight: 5,
    placeholder: 'ادخل القيمة الافتراضية',
    tooltip: 'سوف تكون هذه القيمة هي القيمة الافتراضية للحقل وسوف يتم ارسالها للخادم فيى حالة عدم تغيرها',
    input: true
  },
  {
    weight: 30,
    type: 'radio',
    label: 'حقل اساسي ل',
    tooltip: 'سوف يتم ارسال الحقل الاساسي الي الخادم',
    key: 'persistent',
    input: true,
    inline: true,
    defaultValue: true,
    values: [
      { label: 'لايوجد', value: false },
      { label: 'الخادم', value: true },
      { label: 'المتصفح', value: 'client-only' },
    ]
  },
  {
    weight: 150,
    type: 'checkbox',
    label: 'محمي',
    tooltip: 'الحقول المحمية لا تعود بقيمة من الخادم او لايتم اظهارها مرة اخرى',
    key: 'protected',
    input: true
  },
  {
    type: 'checkbox',
    input: true,
    weight: 200,
    key: 'dbIndex',
    label: 'حقل الفهرس',
    tooltip: 'يتم فهرسة هذا الحقل للبحث به لاحقاً'
  },
  {
    weight: 400,
    type: 'checkbox',
    label: 'مشفر',
    tooltip: 'يتم تشفير هذا الحقل داخل قاعدة البيانات ويمكن فك تشفيره مرة اخرى',
    key: 'encrypted',
    input: true
  },
  {
    type: 'select',
    input: true,
    key: 'redrawOn',
    label: 'اعادة رسم الحقل',
    weight: 600,
    tooltip: 'اعادة رسم هذا الحقل عند تغير حقل اخر داخل النموذج',
    dataSrc: 'custom',
    valueProperty: 'value',
    data: {
      custom(context) {
        var values = [];
        values.push({ label: 'اي تغير', value: 'data' });
        context.utils.eachComponent(context.instance.options.editForm.components, function(component, path) {
          if (component.key !== context.data.key) {
            values.push({
              label: component.label || component.key,
              value: path
            });
          }
        });
        return values;
      }
    },
    conditional: {
      json: { '!' : [{ var: 'data.dataSrc' }] },
    },
  },
  {
    weight: 700,
    type: 'checkbox',
    label: 'حذف القيمة اذا تم اخفاءه',
    key: 'clearOnHide',
    defaultValue: true,
    tooltip: 'عند اخفاء الحقل يتم حذف القيمة',
    input: true
  },
  EditFormUtils.javaScriptValue('قيمة افتراضية مخصصة', 'customDefaultValue', 'customDefaultValue', 1000,
    '<p><h4>مثال:</h4><pre>value = data.firstName + " " + data.lastName;</pre></p>',
    '<p><h4>مثال:</h4><pre>{"cat": [{"var": "data.firstName"}, " ", {"var": "data.lastName"}]}</pre>'
  ),
  EditFormUtils.javaScriptValue('قيمة حسابية', 'calculateValue', 'calculateValue', 1100,
    '<p><h4>مثال:</h4><pre>value = data.a + data.b + data.c;</pre></p>',
    '<p><h4>مثال:</h4><pre>{"+": [{"var": "data.a"}, {"var": "data.b"}, {"var": "data.c"}]}</pre><p></p>'
  ),
  {
    type: 'checkbox',
    input: true,
    weight: 1100,
    key: 'calculateServer',
    label: 'حساب القيمة في الخادم',
    tooltip: 'سوف يتم تغير القيمة في الخادم بعد الارسال'
  },
  {
    type: 'checkbox',
    input: true,
    weight: 1200,
    key: 'allowCalculateOverride',
    label: 'السماح بتغير القيمة بشكل يدوي',
    tooltip: 'سوف يتم السماح للمستخدم بتغير القيمة بشكل يدوي بعد التنفيذ'
  },
];
/* eslint-enable max-len */
