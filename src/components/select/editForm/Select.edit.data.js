import { eachComponent } from '../../../utils/utils';

export default [
  {
    type: 'select',
    input: true,
    weight: 0,
    tooltip: 'The source to use for the select data. Values lets you provide your own values and labels. JSON lets you provide raw JSON data. URL lets you provide a URL to retrieve the JSON data from.',
    key: 'dataSrc',
    defaultValue: 'values',
    label: 'نوع مصدر الخيارات',
    dataSrc: 'values',
    data: {
      values: [
        { label: 'قيم', value: 'values' },
        { label: 'رابط', value: 'url' },
        { label: 'مورد', value: 'resource' },
        { label: 'مخصص', value: 'custom' },
        { label: 'JSON', value: 'json' },
        //{ label: 'IndexedDB', value: 'indexeddb' },
      ],
    },
  },
  {
    type: 'textfield',
    weight: 10,
    input: true,
    key: 'indexeddb.database',
    label: 'Database name',
    tooltip: 'The name of the indexeddb database.',
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'indexeddb'] },
    },
  },
  {
    type: 'textfield',
    input: true,
    key: 'indexeddb.table',
    label: 'Table name',
    weight: 16,
    tooltip: 'The name of table in the indexeddb database.',
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'indexeddb'] },
    }
  },
  {
    type: 'textarea',
    as: 'json',
    editor: 'ace',
    weight: 18,
    input: true,
    key: 'indexeddb.filter',
    label: 'Row Filter',
    tooltip: 'Filter table items that match the object.',
    defaultValue: {},
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'indexeddb'] },
    },
  },
  {
    type: 'textarea',
    as: 'json',
    editor: 'ace',
    weight: 10,
    input: true,
    key: 'data.json',
    label: 'الخيارات JSON',
    tooltip: 'ادخل JSON الخيارات',
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'json'] },
    },
  },
  {
    type: 'textfield',
    input: true,
    key: 'data.url',
    weight: 10,
    label: 'رابط مصدر البيانات',
    placeholder: 'ادخل رابط مصدر البيانات',
    tooltip: 'رابط البيانات الذي سيعيد قيم JSON لاستخدامها فى تعبئة القائمة',
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'url'] },
    },
  },
  {
    type: 'checkbox',
    input: true,
    label: 'تأخير التحميل',
    key: 'lazyLoad',
    tooltip: 'عند تحديد هذا الخيار لا يتم طلب البيانات من المصدر الي بعد الضغط على القائمة مفيد فى حالة النماذج التي تحتوي على اكتر من قائمة منسدلة تستدعي بيانات خارجية ايضا',
    weight: 11,
    conditional: {
      json: {
        in: [
          { var: 'data.dataSrc' },
          [
            'resource',
            'url',
          ],
        ],
      },
    },
  },
  {
    type: 'datagrid',
    input: true,
    label: 'هيدر الريكوست',
    key: 'data.headers',
    tooltip: 'اضافة الهيدر المطلوبة فى الريكوست الذي سيرسل',
    weight: 11,
    components: [
      {
        label: 'المفتاح',
        key: 'key',
        input: true,
        type: 'textfield',
      },
      {
        label: 'القيمة',
        key: 'value',
        input: true,
        type: 'textfield',
      },
    ],
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'url'] },
    },
  },
  {
    type: 'datagrid',
    input: true,
    label: 'قيم البيانات',
    key: 'data.values',
    tooltip: 'القيم التي سيتم تعبئة القائمة بها',
    weight: 10,
    reorder: true,
    defaultValue: [{ label: '', value: '' }],
    components: [
      {
        label: 'النص المعروض',
        key: 'label',
        input: true,
        type: 'textfield',
      },
      {
        label: 'القيمة',
        key: 'value',
        input: true,
        type: 'textfield',
        allowCalculateOverride: true,
        calculateValue: { _camelCase: [{ var: 'row.label' }] },
      },
    ],
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'values'] },
    },
  },
  {
    type: 'select',
    input: true,
    dataSrc: 'url',
    data: {
      url: '/lookups',
    },
    authenticate: true,
    template: '<span>{{ item.title }}</span>',
    valueProperty: '_id',
    clearOnHide: false,
    label: 'المورد',
    key: 'data.resource',
    lazyLoad: false,
    weight: 10,
    tooltip: 'المورد الذي سيستخدم مع هذا الحقل',
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'resource'] },
    },
  },
  {
    type: 'textfield',
    input: true,
    label: 'مسار القيم',
    key: 'selectValues',
    weight: 12,
    description: 'مسار القيم التي ستعرض داخل القائمة',
    tooltip: 'الحقل الذي يحتوي على القيم داخل الاوبجيكت: results.items or results[0].items',
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'url'] },
    },
  },
  {
    type: 'select',
    input: true,
    label: 'اسم حقل القيمة',
    key: 'valueProperty',
    skipMerge: true,
    clearOnHide: false,
    tooltip: 'الحقل الذي يستخدم كقيمة للخيار',
    weight: 11,
    refreshOn: 'data.resource',
    template: '<span>{{ item.label }}</span>',
    valueProperty: 'key',
    dataSrc: 'url',
    lazyLoad: false,
    onSetItems(component, form) {
      const newItems = form.type === 'resource'
        ? [{
            label: '{Entire Object}',
            key: 'data',
          }]
        : [];

      eachComponent(form.components, (component, path) => {
        if (component.input) {
          newItems.push({
            label: component.label || component.key,
            key: `data.${path}`
          });
        }
      });
      return newItems;
    },
    onChange(context) {
      if (context && context.flags && context.flags.modified) {
        const valueProp = context.instance.data.valueProperty;
        const templateProp = valueProp ? valueProp : 'data';
        const template = `<span>{{ item.${templateProp} }}</span>`;
        const searchField = valueProp ? `${valueProp}__regex` : '';
        context.instance.root.getComponent('template').setValue(template);
        context.instance.root.getComponent('searchField').setValue(searchField);
      }
    },
    data: {
      url: '/lookups/{{ data.data.resource }}',
    },
    conditional: {
      json: {
        and: [
          { '===': [{ var: 'data.dataSrc' }, 'resource'] },
          { var: 'data.data.resource' },
        ],
      },
    },
  },
  {
    type: 'select',
    input: true,
    label: 'نوع تخزين القيمة',
    key: 'dataType',
    clearOnHide: true,
    tooltip: 'نوع حقل القيمة الذي سيتم تخزين القيمة به',
    weight: 12,
    template: '<span>{{ item.label }}</span>',
    dataSrc: 'values',
    data: {
      values: [
        { label: 'تلقائي', value: 'auto' },
        { label: 'نص', value: 'string' },
        { label: 'رقم', value: 'number' },
        { label: 'منطقى', value: 'boolean' },
        { label: 'كائن', value: 'object' },
      ],
    },
  },
  {
    type: 'textfield',
    input: true,
    key: 'idPath',
    weight: 12,
    label: 'مسار الid',
    placeholder: 'id',
    tooltip: 'مسار تحديد الidللخيار'
  },
  {
    type: 'textfield',
    input: true,
    label: 'حقل القيمة',
    key: 'valueProperty',
    skipMerge: true,
    clearOnHide: false,
    weight: 13,
    description: 'حقل القيمة التي سيتم تخزينها من القيمة المختارة',
    tooltip: 'حقل القيمة التي سيتم تخزينها فى حالة عدم اختيارك لحقل سوف يتم تخزين الخيار بالكامل',
    conditional: {
      json: {
        in: [
          { var: 'data.dataSrc' },
          [
            'json',
            'url',
            'custom'
          ],
        ],
      },
    },
  },
  {
    type: 'textfield',
    input: true,
    label: 'الحقول المطلوبة',
    key: 'selectFields',
    tooltip: 'الحقول المطلوب اعادتها من المورد فى حالة تركتها بدون قيمة سيتم استيراد كامل القيم يمكن فصل بين كل حقل بفصلة انجليزية Comma',
    placeholder: 'ادخل الحقول مفصولة بفاصل',
    weight: 14,
    conditional: {
      json: {
        and: [
          { '===': [{ var: 'data.dataSrc' }, 'resource'] },
          { '===': [{ var: 'data.valueProperty' }, ''] },
        ],
      },
    },
  },
  {
    type: 'checkbox',
    input: true,
    key: 'disableLimit',
    label: 'الغاء تفعيل تحميل الصفحات',
    tooltip: 'عند تحديد هذا الخيار سوف يتم تحميل كامل البيانات و الاستغناء عن تقسيم البيانات الي صفحات',
    weight: 15,
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'url'] },
    },
  },
  {
    type: 'textfield',
    input: true,
    key: 'searchField',
    label: 'اسم حقل البحث',
    weight: 16,
    description: 'اسم حقل البحث الذي سيتم ارساله بقيمة البحث',
    tooltip: 'اسم حقل البحث Query Paramater الذي سيرسل للبحث لابد من التأكد ان خدمة المورد تدعم هذا الحقل',
    conditional: {
      json: {
        in: [
          { var: 'data.dataSrc' },
          [
            'url',
            'resource',
          ],
        ],
      },
    },
  },
  {
    type: 'number',
    input: true,
    key: 'minSearch',
    weight: 17,
    label: 'اقل عدد لحروف البحث',
    tooltip: 'اقل عدد الذي سيقبله الحقل قبل البدأ بالارسال الى خدمة البيانات لجلب البيانات المطابقة لهذا البحث',
    defaultValue: 0,
    conditional: {
      json: {
        and: [
          { '===': [{ var: 'data.dataSrc' }, 'url'] },
          { '!=': [{ var: 'data.searchField' }, ''] },
        ],
      },
    },
  },
  {
    type: 'textfield',
    input: true,
    key: 'filter',
    label: 'البحث الاضافى',
    weight: 18,
    description: 'تصفية اضافية للبيانات',
    tooltip: 'استخدم هذا الحقل لعمل تصفية اضافية مع حقل البحث',
    conditional: {
      json: {
        in: [
          { var: 'data.dataSrc' },
          [
            'url',
            'resource',
          ],
        ],
      },
    },
  },
  {
    type: 'textfield',
    input: true,
    key: 'sort',
    label: 'الترتيب',
    weight: 18,
    description: 'ترتيب القيم داخل القائمة',
    tooltip: 'استخدم هذا الحقل لعمل ترتيب مع حقل البحث',
    conditional: {
      json: {
        in: [
          { var: 'data.dataSrc' },
          [
            'url',
            'resource',
          ],
        ],
      },
    },
  },
  {
    type: 'number',
    input: true,
    key: 'limit',
    label: 'حجم الصفحة',
    weight: 18,
    defaultValue: 100,
    description: 'اكبر عدد لمحتوي القائمة قي الصفحة',
    tooltip: 'Use this to limit the number of items to request or view.',
    conditional: {
      json: {
        in: [
          { var: 'data.dataSrc' },
          [
            'url',
            'resource'
          ],
        ],
      },
    },
  },
  {
    type: 'textarea',
    input: true,
    key: 'data.custom',
    label: 'Custom Values',
    editor: 'ace',
    rows: 10,
    weight: 14,
    placeholder: "values = data['mykey'];",
    tooltip: 'Write custom code to return the value options. The form data object is available.',
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'custom'] },
    },
  },
  {
    type: 'textarea',
    input: true,
    key: 'template',
    label: 'Item Template',
    editor: 'ace',
    as: 'html',
    rows: 3,
    weight: 18,
    tooltip: 'The HTML template for the result data items.',
    allowCalculateOverride: true,
    calculateValue:(context) => {
      if (!context.data.template) {
        if (context.instance && context.instance._currentForm.options.editComponent) {
          return context.instance._currentForm.options.editComponent.template;
        }
      }

      return context.data.template;
    }
  },
  {
    type: 'select',
    input: true,
    key: 'refreshOn',
    label: 'Refresh Options On',
    weight: 19,
    tooltip: 'Refresh data when another field changes.',
    dataSrc: 'custom',
    valueProperty: 'value',
    data: {
      custom(context) {
        var values = [];
        values.push({ label: 'Any Change', value: 'data' });
        context.utils.eachComponent(context.instance.options.editForm.components, function(component, path) {
          if (component.key !== context.data.key) {
            values.push({
              label: component.label || component.key,
              value: path
            });
          }
        });
        return values;
      }
    },
    conditional: {
      json: {
        in: [
          { var: 'data.dataSrc' },
          [
            'url',
            'resource',
            'values'
          ],
        ],
      },
    },
  },
  {
    type: 'select',
    input: true,
    key: 'refreshOnBlur',
    label: 'Refresh Options On Blur',
    weight: 19,
    tooltip: 'Refresh data when another field is blured.',
    dataSrc: 'custom',
    valueProperty: 'value',
    data: {
      custom(context) {
        var values = [];
        values.push({ label: 'Any Change', value: 'data' });
        context.utils.eachComponent(context.instance.options.editForm.components, function(component, path) {
          if (component.key !== context.data.key) {
            values.push({
              label: component.label || component.key,
              value: path
            });
          }
        });
        return values;
      }
    },
    conditional: {
      json: {
        in: [
          { var: 'data.dataSrc' },
          [
            'url',
            'resource',
            'values'
          ],
        ],
      },
    },
  },
  {
    type: 'checkbox',
    input: true,
    weight: 20,
    key: 'clearOnRefresh',
    label: 'Clear Value On Refresh Options',
    defaultValue: false,
    tooltip: 'When the Refresh On field is changed, clear this components value.',
    conditional: {
      json: {
        in: [
          { var: 'data.dataSrc' },
          [
            'url',
            'resource',
            'values'
          ],
        ],
      },
    },
  },
  {
    type: 'checkbox',
    input: true,
    weight: 21,
    key: 'searchEnabled',
    label: 'Enable Static Search',
    defaultValue: true,
    tooltip: 'When checked, the select dropdown will allow for searching within the static list of items provided.',
  },
  {
    label: 'Search Threshold',
    mask: false,
    tableView: true,
    alwaysEnabled: false,
    type: 'number',
    input: true,
    key: 'selectThreshold',
    validate: {
      min: 0,
      customMessage: '',
      json: '',
      max: 1,
    },
    delimiter: false,
    requireDecimal: false,
    encrypted: false,
    defaultValue: 0.3,
    weight: 22,
    tooltip: 'At what point does the match algorithm give up. A threshold of 0.0 requires a perfect match, a threshold of 1.0 would match anything.',
  },
  {
    type: 'checkbox',
    input: true,
    weight: 23,
    key: 'addResource',
    label: 'Add Resource',
    tooltip: 'Allows to create a new resource while entering a submission.',
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'resource'] },
    },
  },
  {
    type: 'textfield',
    label: 'Add Resource Label',
    key: 'addResourceLabel',
    tooltip: 'Set the text of the Add Resource button.',
    placeholder: 'Add Resource',
    weight: 24,
    input: true,
    conditional: {
      json: {
        and: [
          { '===': [{ var: 'data.dataSrc' }, 'resource'] },
          { '!!': { var: 'data.addResource' } },
        ],
      },
    },
  },
  {
    type: 'checkbox',
    input: true,
    weight: 25,
    key: 'reference',
    label: 'Save as reference',
    tooltip: 'Using this option will save this field as a reference and link its value to the value of the origin record.',
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'resource'] },
    },
  },
  {
    type: 'checkbox',
    input: true,
    weight: 26,
    key: 'authenticate',
    label: 'Formio Authenticate',
    tooltip: 'Check this if you would like to use Formio Authentication with the request.',
    conditional: {
      json: { '===': [{ var: 'data.dataSrc' }, 'url'] },
    },
  },
  {
    type: 'checkbox',
    input: true,
    weight: 27,
    key: 'readOnlyValue',
    label: 'Read Only Value',
    tooltip: 'Check this if you would like to show just the value when in Read Only mode.',
  },
  {
    type: 'textarea',
    as: 'json',
    editor: 'ace',
    weight: 28,
    input: true,
    key: 'customOptions',
    label: 'Choices.js options',
    tooltip: 'A raw JSON object to use as options for the Select component (Choices JS).',
    defaultValue: {},
  },
  {
    type: 'checkbox',
    input: true,
    weight: 29,
    key: 'useExactSearch',
    label: 'Use exact search',
    tooltip: 'Disables search algorithm threshold.',
  },
  {
    type: 'checkbox',
    input: true,
    weight: 29,
    key: 'ignoreCache',
    label: 'Disables Storing Request Result in the Cache',
    tooltip: 'Check it if you don\'t want the requests and its results to be stored in the cache. By default, it is stored and if the Select tries to make the request to the same URL with the same paremetrs, the cached data will be returned. It allows to increase performance, but if the remote source\'s data is changing quite often and you always need to keep it up-to-date, uncheck this option.',
    conditional: {
      json: { 'or': [
        { '===': [{ var: 'data.dataSrc' }, 'url'] },
        { '===': [{ var: 'data.dataSrc' }, 'resource'] },
      ] },
    },
  },
];
