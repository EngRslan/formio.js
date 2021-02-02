export default [
  {
    type: 'select',
    label: 'نوع المدخلات',
    key: 'inputFormat',
    weight: 105,
    placeholder: 'نوع المدخلات',
    tooltip: 'نوع المدخلات يحدد طريقة عرض المدخل فى شاشة المستخدم',
    template: '<span>{{ item.label }}</span>',
    data: {
      values: [
        {
          value: 'plain',
          label: 'نصي'
        },
        {
          value: 'html',
          label: 'HTML'
        },{
          value: 'raw',
          label: 'قابل للتنفيذ (غير آمن)'
        }
      ]
    },
    defaultValue: 'plain',
    input: true
  },
  {
    weight: 200,
    type: 'radio',
    label: 'حالة النص',
    key: 'case',
    tooltip: 'تغير حالة الاحرف فى الحروف اللاتنية',
    input: true,
    values: [
      {
        value: 'mixed',
        label: 'مختلط (السماح بالاحرف الكبيرة و الصغيرة)'
      },
      {
        value: 'uppercase',
        label: 'احرف كبيرة'
      },{
        value: 'lowercase',
        label: 'احرف صعيرة'
      }
    ]
  },
];
