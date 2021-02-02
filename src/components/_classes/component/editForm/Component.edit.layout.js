export default [
  {
    label: 'خصائص HTML',
    type: 'datamap',
    input: true,
    key: 'attributes',
    keyLabel: 'الاسم',
    valueComponent: {
      type: 'textfield',
      key: 'value',
      label: 'القيمة',
      input: true
    },
    tooltip: '',
    addAnother: 'اضافة اخر',
  },
  {
    type: 'panel',
    ignore:true,
    hidden:true,
    hide:true,
    legend: 'PDF Overlay',
    title: 'PDF Overlay',
    key: 'overlay',
    tooltip: 'The settings inside apply only to the PDF forms.',
    weight: 2000,
    collapsible: true,
    collapsed: true,
    components: [
      {
        type: 'textfield',
        input: true,
        key: 'overlay.style',
        label: 'Style',
        placeholder: '',
        tooltip: 'Custom styles that should be applied to this component when rendered in PDF.'
      },
      {
        type: 'textfield',
        input: true,
        key: 'overlay.page',
        label: 'Page',
        placeholder: '',
        tooltip: 'The PDF page to place this component.'
      },
      {
        type: 'textfield',
        input: true,
        key: 'overlay.left',
        label: 'Left',
        placeholder: '',
        tooltip: 'The left margin within a page to place this component.'
      },
      {
        type: 'textfield',
        input: true,
        key: 'overlay.top',
        label: 'Top',
        placeholder: '',
        tooltip: 'The top margin within a page to place this component.'
      },
      {
        type: 'textfield',
        input: true,
        key: 'overlay.width',
        label: 'Width',
        placeholder: '',
        tooltip: 'The width of the component (in pixels).'
      },
      {
        type: 'textfield',
        input: true,
        key: 'overlay.height',
        label: 'Height',
        placeholder: '',
        tooltip: 'The height of the component (in pixels).'
      },

    ]
  },
];
