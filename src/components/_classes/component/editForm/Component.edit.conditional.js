import EditFormUtils from './utils';
import { getContextComponents } from '../../../../utils/utils';
/* eslint-disable quotes, max-len */
export default [
  {
    type: 'panel',
    title: 'بسيط',
    key: 'simple-conditional',
    theme: 'default',
    components: [
      {
        type: 'select',
        input: true,
        label: 'سوف يكون هذا الحقل',
        key: 'conditional.show',
        dataSrc: 'values',
        data: {
          values: [
            { label: 'ظاهر', value: 'true' },
            { label: 'مختفى', value: 'false' }
          ]
        }
      },
      {
        type: 'select',
        input: true,
        label: 'عندما يحتوي الحقل',
        key: 'conditional.when',
        dataSrc: 'custom',
        valueProperty: 'value',
        data: {
          custom(context) {
            return getContextComponents(context);
          }
        }
      },
      {
        type: 'textfield',
        input: true,
        label: 'على هذه القيمة',
        key: 'conditional.eq'
      }
    ]
  },
  EditFormUtils.javaScriptValue('الشروط المتقدمة', 'customConditional', 'conditional.json', 110,
    '<p>لابد من اعطاء المتغير <strong>show</strong> قيمة true او false.</p>' +
    '<p><strong>ملحوظة: الشروط المتقدمة لها الاولوية على الشروط البسيطة</strong></p>' +
    '<h5>مثال</h5><pre>show = !!data.showMe;</pre>'
  )
];
/* eslint-enable quotes, max-len */
