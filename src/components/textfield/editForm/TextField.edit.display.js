import Widgets from '../../../widgets';
import _ from 'lodash';
export default [
  {
    weight: 400,
    type: 'select',
    input: true,
    key: 'widget.type',
    label: 'مساعد الحقل',
    placeholder: 'اختر مساعد الحقل ',
    tooltip: 'مساعد الحقل هوا عبارة عن مساعد يظهر للعميل لتوليد القيمة التي ستدخل الحقل',
    defaultValue: 'input',
    onChange: (context) => {
      context.data.widget = _.pick(context.data.widget, 'type');
    },
    dataSrc: 'values',
    data: {
      values: [
        { label: 'بدون مساعد', value: 'input' },
        { label: 'التاريخ', value: 'calendar' },
      ]
    },
    conditional: {
      json: { '===': [{ var: 'data.type' }, 'textfield'] }
    }
  },
  {
    weight: 405,
    type: 'textarea',
    key: 'widget',
    label: 'اعدادات المساعد',
    refreshOn: 'wiget.type',
    clearOnHide: false,
    // Deleted clearOnHide and refreshOn to make possible to change exist widget settings.
    calculateValue: (context) => {
      const { calculatedValue } = context.instance;
      const { type } = context.data.widget;

      if (
        _.isEmpty(_.omit(context.data.widget, 'type')) ||
        _.isEmpty(_.omit(calculatedValue, 'type'))
      ) {
        if (calculatedValue && !calculatedValue.type) {
          return context.data.widget;
        }

        const existWidget = context.instance._currentForm.options.editComponent.widget;
        if (existWidget && !_.isEmpty(_.omit(existWidget, 'type')) && type === existWidget.type) {
          return _.omit(existWidget, 'language');
        }
        else if (type) {
          return _.omit(Widgets[type].defaultSettings, 'language');
        }
      }
      return context.data.widget;
    },
    input: true,
    rows: 5,
    editor: 'ace',
    as: 'json',
    conditional: {
      json: { '!==': [{ var: 'data.widget.type' }, 'input'] }
    }
  },
  {
    weight: 410,
    type: 'textfield',
    input: true,
    key: 'inputMask',
    label: 'قناع الادخال',
    tooltip: 'قناع الادخال يساعد المستخدم على ادخال نص بصيغة معينة . مثلا<br><br>9: رقم<br>a: حرف<br>*: رقم او حرف<br><br>مثال قناع الجوال : 999-99-9999<br><br>انظر لـ <a target=\'_blank\' href=\'https://github.com/RobinHerbots/jquery.inputmask\'>jquery.inputmask شرح</a> للمزيد .</a>',
    customConditional(context) {
      return !context.data.allowMultipleMasks;
    }
  },
  {
    weight: 411,
    type: 'textfield',
    input: true,
    key: 'inputMaskPlaceholderChar',
    label: 'النص الفارغ لقناع الحقل',
    tooltip: 'يمكن اضافة حرف او رمز لاظهارة في الخانات الفارغة. <br/> E.g., "\u02cd" <br/>',
    validation: {
      maxLength: 1
    },
    customConditional(context) {
      return context.data.inputMask;
    }
  },
  {
    weight: 413,
    type: 'checkbox',
    input: true,
    key: 'allowMultipleMasks',
    label: 'اضافة عدة اقنعة للحقل'
  },
  {
    weight: 1350,
    type: 'checkbox',
    input: true,
    key: 'spellcheck',
    defaultValue: true,
    label: 'السماح بالتصحيح'
  },
  {
    weight: 417,
    type: 'datagrid',
    input: true,
    key: 'inputMasks',
    label: 'اقنعة الحقل',
    customConditional(context) {
      return context.data.allowMultipleMasks === true;
    },
    reorder: true,
    components: [
      {
        type: 'textfield',
        key: 'label',
        label: 'العنوان',
        input: true
      },
      {
        type: 'textfield',
        key: 'mask',
        label: 'القناع',
        input: true
      }
    ]
  },
  {
    weight: 320,
    type: 'textfield',
    input: true,
    key: 'prefix',
    label: 'البادئة'
  },
  {
    weight: 330,
    type: 'textfield',
    input: true,
    key: 'suffix',
    label: 'اللاحقة'
  },
  {
    weight: 700,
    type: 'textfield',
    input: true,
    key: 'autocomplete',
    label: 'الاستكمال التلقائي',
    placeholder: 'on',
    tooltip: 'هذا الخيار يحدد اذا كان الحقل يدعم الاستكمال التلقائي من النصوص المدخلة سابقا. انظر <a href=\'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete\'>MDN documentation</a> للمزيد من المعلومات.'
  },
  {
    weight: 1300,
    type: 'checkbox',
    label: 'اخفاء المدخلات',
    tooltip: 'هذا الخيار لاخفاء القيمة المدخلة للحقل',
    key: 'mask',
    input: true
  },
  {
    weight: 1200,
    type: 'checkbox',
    label: 'اظهار عداد الكلمات',
    tooltip: 'اظهار عداد الكلمات لمراجعة عدد الكلمات المدخلة من قبل المستخدم',
    key: 'showWordCount',
    input: true
  },
  {
    weight: 1201,
    type: 'checkbox',
    label: 'اظهار عداد الاحرف',
    tooltip: 'اظهار عداد الاحرف لمراجعة عدد الاحرف المكتوبة من قبل المستخدم',
    key: 'showCharCount',
    input: true
  },
];
