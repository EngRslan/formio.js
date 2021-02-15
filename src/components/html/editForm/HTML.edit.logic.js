export default [
  {
    key: 'logic',
    components: [
      {
        key: 'actions',
        components: [
          {
            key: 'actionPanel',
            components: [
              {
                data: {
                  json: [
                    {
                      label: 'مخفى',
                      value: 'hidden',
                      type: 'boolean',
                    },
                    {
                      label: 'اجباري',
                      value: 'validate.required',
                      type: 'boolean',
                    },
                    {
                      label: 'غير فعال',
                      value: 'disabled',
                      type: 'boolean',
                    },
                    {
                      label: 'التسمية',
                      value: 'label',
                      type: 'string',
                    },
                    {
                      label: 'العنوان',
                      value: 'title',
                      type: 'string',
                    },
                    {
                      label: 'التلميح',
                      value: 'tooltip',
                      type: 'string',
                    },
                    {
                      label: 'الوصف',
                      value: 'description',
                      type: 'string',
                    },
                    {
                      label: 'النص الفارغ',
                      value: 'placeholder',
                      type: 'string',
                    },
                    {
                      label: 'CSS وسم',
                      value: 'className',
                      type: 'string',
                    },
                    {
                      label: 'وسم مخصص للعنصر الاب',
                      value: 'customClass',
                      type: 'string',
                    },
                    {
                      label: 'المحتوى',
                      value: 'content',
                      type: 'string',
                      component: 'content',
                    },
                  ],
                },
                key: 'property',
              },
              {
                type: 'textarea',
                editor: 'ace',
                rows: 10,
                as: 'html',
                label: 'المحتوى',
                tooltip: 'محتوى عنصر الHTML',
                defaultValue: '<div class="well">محتوى</div>',
                key: 'content',
                weight: 30,
                input: true,
                customConditional(context) {
                  return context.row.type === 'property' &&
                    context.row.hasOwnProperty('property') &&
                    context.row.property.type === 'string' &&
                    context.row.property.component === 'content';
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
