export default [
  {
    weight: 110,
    key: 'validate.minLength',
    label: 'الحد الادنى للحروف',
    placeholder: 'الحد الادنى لعدد الحروف المسموح',
    type: 'number',
    tooltip: 'اقل عدد من الحروف المسموح بها فى هذا الحقل',
    input: true
  },
  {
    weight: 120,
    key: 'validate.maxLength',
    label: 'الحد الاعلى للحروف',
    placeholder: 'الحد الاعلى للحروف المسموحة',
    type: 'number',
    tooltip: 'تحديد الحد الاعلى لعدد الحروف المسموح بها فى الحقل.',
    input: true
  },
  {
    weight: 125,
    key: 'validate.minWords',
    label: 'الحد الادني للكلمات',
    placeholder: 'الحد الادني لعدد الكلمات',
    type: 'number',
    tooltip: 'الحد الادنى لعدد الكلمات المسموح بها فى هذا الحقل',
    input: true
  },
  {
    weight: 126,
    key: 'validate.maxWords',
    label: 'الحد الاعلى الكلمات',
    placeholder: 'الحد الاعلى لعدد الكلمات',
    type: 'number',
    tooltip: 'الحد الاعلى لعدد الكلمات المسموح بها فى هذا الحقل',
    input: true
  },
  {
    weight: 130,
    key: 'validate.pattern',
    label: 'تعبير قياسي REGEX',
    placeholder: 'تعبير قياسي REGEX',
    type: 'textfield',
    tooltip: 'التعبير القياسي الذي مكن استخدامه للنحق من المدخل الصحيح',
    input: true
  }
];
