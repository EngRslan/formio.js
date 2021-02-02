import EditFormUtils from './utils';
import Evaluator from '../../../../utils/Evaluator';

/* eslint-disable quotes, max-len */
export default [
  {
    weight: 10,
    type: 'checkbox',
    label: 'اجباري',
    tooltip: 'الحقل الاجباري لا يمكن ارسال النموذج بدون تعبئة هذا الحقل',
    key: 'validate.required',
    input: true
  },
  {
    weight: 100,
    type: 'checkbox',
    label: 'حقل فريد',
    tooltip: 'جعل هذا الحقل فريد لايمكن ان يتكرر',
    key: 'unique',
    input: true
  },
  {
    weight: 0,
    type: 'select',
    key: 'validateOn',
    defaultValue: 'change',
    input: true,
    label: 'التحقق عند',
    tooltip: 'التحقق من المدخل عند',
    dataSrc: 'values',
    data: {
      values: [
        { label: 'التغير', value: 'change' },
        { label: 'ترك الحقل', value: 'blur' }
      ]
    }
  },
  {
    weight: 190,
    type: 'textfield',
    input: true,
    key: 'errorLabel',
    label: 'عنوان الخطأ',
    placeholder: 'عنوان الخطأ',
    tooltip: 'العنوان الذي سوف ياخده الحقل عند الخطأ'
  },
  {
    weight: 200,
    key: 'validate.customMessage',
    label: 'رسائل اخطاء مخصصة',
    placeholder: 'رسائل اخطاء مخصصة',
    type: 'textfield',
    tooltip: 'رسائل الاخطاء التي ستظهر عن الخطأ',
    input: true
  },
  {
    type: 'panel',
    title: 'تحقق مخصص',
    collapsible: true,
    collapsed: true,
    style: { 'margin-bottom': '10px' },
    key: 'custom-validation-js',
    weight: 300,
    customConditional() {
      return !Evaluator.noeval || Evaluator.protectedEval;
    },
    components: [
      EditFormUtils.logicVariablesTable('<tr><th>input</th><td>القيمة الذي سوف يتم وضعها لهذا الحقل</td></tr>'),
      {
        type: 'textarea',
        key: 'validate.custom',
        rows: 5,
        editor: 'ace',
        hideLabel: true,
        as: 'javascript',
        input: true
      },
      {
        type: 'htmlelement',
        tag: 'div',
        content: `
          <small>
            <p>ادخل رمز للتحقق المخصص</p>
            <p>لابد وضع المتغير <strong>valid</strong> بالقيمة <strong>true</strong> او رسالة الخطأ فى حالة الخطأ.</p>
            <h5>مثال:</h5>
            <pre>valid = (input === 'etc') ? true : 'لابد من وضع اسمك "etc"';</pre>
          </small>`
      },
      {
        type: 'well',
        components: [
          {
            weight: 100,
            type: 'checkbox',
            label: 'Secret Validation',
            tooltip: 'Check this if you wish to perform the validation ONLY on the server side. This keeps your validation logic private and secret.',
            description: 'Check this if you wish to perform the validation ONLY on the server side. This keeps your validation logic private and secret.',
            key: 'validate.customPrivate',
            input: true
          }
        ]
      }
    ]
  },
  {
    type: 'panel',
    title: 'JSONLogic التحقق بـ',
    collapsible: true,
    collapsed: true,
    key: 'json-validation-json',
    weight: 400,
    components: [
      {
        type: 'htmlelement',
        tag: 'div',
        /* eslint-disable prefer-template */
        content: '<p>تنفيذ التحقق باستخدام <a href="http://jsonlogic.com/" target="_blank">JSONLogic</a>.</p>' +
          '<h5>مثال :</h5>' +
          '<pre>' + JSON.stringify({
            "if": [
              { "===": [{ "var": "input" }, "etc"] },
              true,
              "لابد من وضع القيمة etc"
            ]
          }, null, 2) + '</pre>'
        /* eslint-enable prefer-template */
      },
      {
        type: 'textarea',
        key: 'validate.json',
        hideLabel: true,
        rows: 5,
        editor: 'ace',
        as: 'json',
        input: true
      }
    ]
  }
];
/* eslint-enable quotes, max-len */
