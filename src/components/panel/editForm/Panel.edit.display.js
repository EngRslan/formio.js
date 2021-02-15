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
    key: 'tableView',
    ignore: true
  },
  {
    key: 'label',
    hidden: true,
    calculateValue(context) {
      return context.data.title;
    }
  },
  {
    key: 'tabindex',
    hidden: true,
  },
  {
    weight: 1,
    type: 'textfield',
    input: true,
    placeholder: 'عنوان اللوحة',
    label: 'العنوان',
    key: 'title',
    tooltip: 'العنوان الذي سيظهر اعلى اللوحة'
  },
  {
    weight: 20,
    type: 'textarea',
    input: true,
    key: 'tooltip',
    label: 'التلميح',
    placeholder: 'ادخل التلميح',
    tooltip: 'اضافة تلميح بجوار الحقل'
  },
  {
    weight: 30,
    type: 'select',
    input: true,
    label: 'السمة',
    key: 'theme',
    dataSrc: 'values',
    data: {
      values: [
        { label: 'Default', value: 'default' },
        { label: 'Primary', value: 'primary' },
        { label: 'Info', value: 'info' },
        { label: 'Success', value: 'success' },
        { label: 'Danger', value: 'danger' },
        { label: 'Warning', value: 'warning' }
      ]
    }
  },
  {
    weight: 40,
    type: 'fieldset',
    input: false,
    components: [
      {
        type: 'select',
        input: true,
        label: 'نوع مسار التنقل',
        key: 'breadcrumb',
        dataSrc: 'values',
        data: {
          values: [
            { label: 'Default', value: 'default' },
            { label: 'Condensed', value: 'condensed' },
            { label: 'Hidden', value: 'none' },
          ]
        }
      },
      {
        input: true,
        type: 'checkbox',
        label: 'تفعيل الضغط على مسار التنقل',
        key: 'breadcrumbClickable',
        defaultValue: true,
        conditional: {
          json: { '!==': [{ var: 'data.breadcrumb' }, 'none'] }
        }
      },
      {
        input: true,
        type: 'checkbox',
        label: 'السماح للرجوع للخلف',
        key: 'allowPrevious',
        defaultValue: false,
        tooltip: 'تحديد هل يمكن السماح للعودة للخلف',
        conditional: {
          json: { '===': [{ var: 'data.breadcrumbClickable' }, false] }
        }
      },
      {
        weight: 50,
        label: 'عنواين ازرار التحرك',
        optionsLabelPosition: 'right',
        values: [
          {
            label: 'السابق',
            value: 'previous',
          },
          {
            label: 'الغاء',
            value: 'cancel',
          },
          {
            label: 'التالي',
            value: 'next',
          }
        ],
        inline: true,
        type: 'selectboxes',
        key: 'buttonSettings',
        input: true,
        inputType: 'checkbox',
        defaultValue: {
          previous: true,
          cancel: true,
          next: true
        },
      },
      {
        weight: 60,
        label: 'السحب لاعلى',
        type: 'checkbox',
        key: 'scrollToTop',
        input: true,
        inputType: 'checkbox',
        defaultValue: false,
        tooltip: 'سحب الصفحة لاعلى'
      }
    ],
    customConditional(context) {
      return context.instance.options.editForm.display === 'wizard';
    }
  },
  {
    weight: 650,
    type: 'checkbox',
    label: 'قابلة للطي',
    tooltip: 'فى حالة التحديد سوف يتم السماح بطى او فتح اللوحة',
    key: 'collapsible',
    input: true
  },
  {
    weight: 651,
    type: 'checkbox',
    label: 'مغلقة بشكل افتراضي',
    tooltip: 'تحديد ما اذا كانت هذه اللوحة ستكون مغلقة بشكل افتراضي',
    key: 'collapsed',
    input: true,
    conditional: {
      json: { '===': [{ var: 'data.collapsible' }, true] }
    }
  }
];
