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
    key: 'tooltip',
    ignore: true
  },
  {
    key: 'hideLabel',
    ignore: true
  },
  {
    key: 'autofocus',
    ignore: true
  },
  {
    key: 'disabled',
    ignore: true
  },
  {
    key: 'tabindex',
    ignore: true
  },
  {
    key: 'tableView',
    ignore: true
  },
  {
    type: 'textfield',
    input: true,
    key: 'tag',
    weight: 50,
    label: 'HTML وسم',
    placeholder: 'HTML وسم عنصر',
    tooltip: 'وسم عنصر الHTML الذي سيتم انشاؤه'
  },
  {
    type: 'textfield',
    input: true,
    key: 'className',
    weight: 60,
    label: 'CSS فئات',
    placeholder: 'CSS فئات',
    tooltip: 'فئات CSS الذي سوف يتم ارساله لعنصر ال HTML'
  },
  {
    type: 'datagrid',
    input: true,
    label: 'الخصائص',
    key: 'attrs',
    tooltip: 'الخصائص الذس سيتم وضعها لعنصر الHTML مثل href="#"',
    weight: 70,
    components: [
      {
        label: 'الخاصية',
        key: 'attr',
        input: true,
        type: 'textfield'
      },
      {
        label: 'القيمة',
        key: 'value',
        input: true,
        type: 'textfield'
      }
    ]
  },
  {
    type: 'textarea',
    input: true,
    editor: 'ace',
    rows: 10,
    as: 'html',
    label: 'المحتوى',
    tooltip: 'محتوى عنصر ال HTML',
    defaultValue: '<div class="well">المحتوى</div>',
    key: 'content',
    weight: 80
  },
  {
    weight: 85,
    type: 'checkbox',
    label: 'التحديث عند التغير',
    tooltip: 'اعادة رسم الحقل عند تغير اي قيمة فى النموذج',
    key: 'refreshOnChange',
    input: true
  },
];
