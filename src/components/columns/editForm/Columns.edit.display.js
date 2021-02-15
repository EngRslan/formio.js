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
    key: 'autofocus',
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
    weight: 150,
    type: 'datagrid',
    input: true,
    key: 'columns',
    label: 'خصائص الاعمدة',
    addAnother: 'اضافة عمود',
    tooltip: 'مقدار العرض ، الازاحة ، دفع وخصائص العمود',
    reorder: true,
    components: [
      {
        type: 'hidden',
        key: 'components',
        defaultValue: []
      },
      {
        type: 'select',
        key: 'size',
        defaultValue: 'md',
        label: 'الحجم',
        data: {
          values: [
            { label: 'xs', value: 'xs' },
            { label: 'sm', value: 'sm' },
            { label: 'md', value: 'md' },
            { label: 'lg', value: 'lg' },
            { label: 'xl', value: 'xl' },
          ],
        },
      },
      {
        type: 'number',
        key: 'width',
        defaultValue: 6,
        label: 'Width'
      },
      {
        type: 'number',
        key: 'offset',
        defaultValue: 0,
        label: 'Offset'
      },
      {
        type: 'number',
        key: 'push',
        defaultValue: 0,
        label: 'Push'
      },
      {
        type: 'number',
        key: 'pull',
        defaultValue: 0,
        label: 'Pull'
      }
    ]
  },
  {
    weight: 160,
    type: 'checkbox',
    label: 'تنسيق الاعمدة بشكل الي',
    tooltip: 'سوف يتم محاذاة الاعمدة بشكل الي بالعتماد على المكوانت المخفية داخل العمود',
    key: 'autoAdjust',
    input: true
  },
  {
    weight: 161,
    type: 'checkbox',
    label: 'اخفاء العمود عن اخفاء محتواه',
    key: 'hideOnChildrenHidden',
    tooltip: 'فحص محتوى العمود اذا كن محتواه فارغ يتم ايضا اخفاء العمود',
    input: true
  }
];
