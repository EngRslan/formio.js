export default [
  {
    key: 'validate.minWords',
    ignore: true
  },
  {
    key: 'validate.maxWords',
    ignore: true
  },
  {
    type: 'panel',
    label: 'Kickbox خدمة',
    title: 'Kickbox',
    weight: 102,
    key: 'kickbox',
    components: [
      {
        type: 'checkbox',
        label: 'تفعيل',
        tooltip: 'تفعيل خدمة Kickbox لفحص البريد الاكتروني',
        description: 'فحص البريد الالكتروني عن طريق خدمة فحصي البريد الالكتروني المقدمة من Kickbox',
        key: 'kickbox.enabled'
      }
    ]
  }
];
