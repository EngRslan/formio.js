import BuilderUtils from '../../../utils/builder';
import _ from 'lodash';

export default [
  {
    key: 'labelPosition',
    ignore: true,
  },
  {
    key: 'placeholder',
    ignore: true,
  },
  {
    key: 'hideLabel',
    ignore: true,
  },
  {
    type: 'select',
    key: 'action',
    label: 'الوظيفة',
    input: true,
    dataSrc: 'values',
    weight: 110,
    tooltip: 'This is the action to be performed by this button.',
    data: {
      values: [
        { label: 'ارسال', value: 'submit' },
        //{ label: 'Save in state', value: 'saveState' },
        { label: 'حدث', value: 'event' },
        { label: 'مخصص', value: 'custom' },
        { label: 'استعادة للافتراضي', value: 'reset' },
        //{ label: 'OAuth', value: 'oauth' },
        //{ label: 'POST to URL', value: 'url' },
      ],
    },
  },
  {
    type: 'select',
    key: 'oauthProvider',
    label: 'OAuth Provider',
    input: true,
    dataSrc: 'values',
    weight: 111,
    tooltip: 'The oauth provider to use to log in (8.x server only).',
    data: {
      values: [
        { label: 'OpenID', value: 'openid' },
        { label: 'Github', value: 'github' },
        { label: 'Google', value: 'google' },
      ],
    },
    conditional: {
      json: { '===': [{ var: 'data.action' }, 'oauth'] },
    },
  },
  {
    type: 'textfield',
    label: 'Save in state',
    key: 'state',
    weight: 112,
    tooltip: 'The state you wish to save the submission under when this button is pressed. Example "draft" would save the submission in Draft Mode.',
    placeholder: 'submitted',
    input: true,
    conditional: {
      json: { '===': [{ var: 'data.action' }, 'saveState'] },
    },
  },
  {
    type: 'checkbox',
    input: true,
    inputType: 'checkbox',
    key: 'showValidations',
    label: 'اظهار رسائل التحقق',
    weight: 115,
    tooltip: 'عند تحديد هذا الخيار تظهر جميع الاخطاء بالنموذج عند الضغط على هذا الزر',
    conditional: {
      json: { '!==': [{ var: 'data.action' }, 'submit'] },
    },
  },
  {
    type: 'textfield',
    label: 'حدث الزر',
    key: 'event',
    input: true,
    weight: 120,
    tooltip: 'تحديد الحدث الذي سيتم تنفيذه عند الضغط على هذا الزر',
    conditional: {
      json: { '===': [{ var: 'data.action' }, 'event'] },
    },
  },
  {
    type: 'textfield',
    inputType: 'url',
    key: 'url',
    input: true,
    weight: 120,
    label: 'Button URL',
    tooltip: 'The URL where the submission will be sent.',
    placeholder: 'https://example.form.io',
    conditional: {
      json: { '===': [{ var: 'data.action' }, 'url'] },
    },
  },
  {
    type: 'datagrid',
    key: 'headers',
    input: true,
    weight: 130,
    label: 'Headers',
    addAnother: 'Add Header',
    tooltip: 'Headers Properties and Values for your request',
    components: [
      {
        key: 'header',
        label: 'Header',
        input: true,
        type: 'textfield',
      },
      {
        key: 'value',
        label: 'Value',
        input: true,
        type: 'textfield',
      }
    ],
    conditional: {
      json: { '===': [{ var: 'data.action' }, 'url'] },
    },
  },
  {
    type: 'textarea',
    key: 'custom',
    label: 'حدث مخصص للزر',
    tooltip: 'تعيين حدث مخصص عند الضغط على هذا الزر',
    rows: 5,
    editor: 'ace',
    input: true,
    weight: 120,
    placeholder: 'data[\'mykey\'] = data[\'anotherKey\'];',
    conditional: {
      json: { '===': [{ var: 'data.action' }, 'custom'] },
    },
  },
  {
    type: 'select',
    key: 'theme',
    label: 'السمة',
    input: true,
    tooltip: 'حدد اللون و المظهر للزر',
    dataSrc: 'values',
    weight: 140,
    data: {
      values: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Info', value: 'info' },
        { label: 'Success', value: 'success' },
        { label: 'Danger', value: 'danger' },
        { label: 'Warning', value: 'warning' },
      ],
    },
  },
  {
    type: 'select',
    key: 'size',
    label: 'الحجم',
    input: true,
    tooltip: 'حجم الزر',
    dataSrc: 'values',
    weight: 150,
    data: {
      values: [
        { label: 'صغير جدا', value: 'xs' },
        { label: 'صغير', value: 'sm' },
        { label: 'معتدل', value: 'md' },
        { label: 'كبير', value: 'lg' },
      ],
    },
  },
  {
    type: 'textfield',
    key: 'leftIcon',
    label: 'الايكون اليمين',
    input: true,
    placeholder: 'fa fa-paper-plane',
    tooltip: 'CSS التي سيتم وضعها ايمن الزر لتظهر الايكون',
    weight: 160,
  },
  {
    type: 'textfield',
    key: 'rightIcon',
    label: 'الايكون اليسار',
    input: true,
    placeholder: 'fa fa-paper-plane',
    tooltip: 'CSS التي سيتم وضعها ايمن الزر لتظهر الايكون',
    weight: 170,
  },
  {
    type: 'select',
    input: true,
    weight: 180,
    label: 'الاختصار',
    key: 'shortcut',
    tooltip: 'اختصار لوحة المفاتيح لتفعيل هذا الزر',
    dataSrc: 'custom',
    valueProperty: 'value',
    customDefaultValue: () => '',
    template: '{{ item.label }}',
    data: {
      custom(context) {
        return BuilderUtils.getAvailableShortcuts(
          _.get(context, 'instance.options.editForm', {}),
          _.get(context, 'instance.options.editComponent', {})
        );
      },
    },
  },
  {
    type: 'checkbox',
    key: 'block',
    label: 'زر كامل العرض',
    input: true,
    weight: 155,
    tooltip: 'هذا الخيار يجعل الزر يأخذ كامل عرض الاب',
  },
  {
    type: 'checkbox',
    key: 'disableOnInvalid',
    label: 'الغاء التفعيل مع الاخطاء',
    tooltip: 'عند تحديد هذا الخيار سيقوب بالغاء تفعيل هذا الزر فى حالة وجود اخطاء بالنموذج',
    input: true,
    weight: 620,
  },
];
