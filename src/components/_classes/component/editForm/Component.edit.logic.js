import EditFormUtils from './utils';
import { getContextComponents } from '../../../../utils/utils';

/* eslint-disable quotes, max-len */
export default [
  {
    weight: 0,
    input: true,
    label: 'معيار متقدم',
    key: 'logic',
    templates: {
      header: '<div class="row"> \n  <div class="col-sm-6">\n    <strong>{{ value.length }} {{ ctx.t("Advanced Logic Configured") }}</strong>\n  </div>\n</div>',
      row: '<div class="row"> \n  <div class="col-sm-6">\n    <div>{{ row.name }} </div>\n  </div>\n  <div class="col-sm-2"> \n    <div class="btn-group pull-right"> \n      <div class="btn btn-default editRow">{{ ctx.t("Edit") }}</div> \n      <div class="btn btn-danger removeRow">{{ ctx.t("Delete") }}</div> \n    </div> \n  </div> \n</div>',
      footer: '',
    },
    type: 'editgrid',
    addAnother: 'اضافة معيار',
    saveRow: 'حفظ المعيار',
    components: [
      {
        weight: 0,
        input: true,
        inputType: 'text',
        label: 'الاسم',
        key: 'name',
        validate: {
          required: true,
        },
        type: 'textfield',
      },
      {
        weight: 10,
        key: 'triggerPanel',
        input: false,
        title: 'المنفذ',
        tableView: false,
        components: [
          {
            weight: 0,
            input: true,
            tableView: false,
            components: [
              {
                weight: 0,
                input: true,
                label: 'النوع',
                key: 'type',
                tableView: false,
                data: {
                  values: [
                    {
                      value: 'simple',
                      label: 'بسيط',
                    },
                    {
                      value: 'javascript',
                      label: 'Javascript',
                    },
                    {
                      value: 'json',
                      label: 'JSON Logic',
                    },
                    {
                      value: 'event',
                      label: 'حدث',
                    },
                  ],
                },
                dataSrc: 'values',
                template: '<span>{{ item.label }}</span>',
                type: 'select',
              },
              {
                weight: 10,
                label: '',
                key: 'simple',
                type: 'container',
                tableView: false,
                customConditional({ row }) {
                  return row.type === 'simple';
                },
                components: [
                  {
                    input: true,
                    key: 'show',
                    label: 'اظهار',
                    type: 'hidden',
                    tableView: false,
                    calculateValue() {
                      return true;
                    },
                  },
                  {
                    type: 'select',
                    input: true,
                    label: 'عندما يكون الحقل :',
                    key: 'when',
                    dataSrc: 'custom',
                    valueProperty: 'value',
                    tableView: false,
                    data: {
                      custom(context) {
                        return getContextComponents(context);
                      },
                    },
                  },
                  {
                    type: 'textfield',
                    input: true,
                    label: 'يحتوي على القيمة',
                    key: 'eq',
                    tableView: false,
                  },
                ],
              },
              {
                weight: 10,
                type: 'textarea',
                key: 'javascript',
                rows: 5,
                editor: 'ace',
                as: 'javascript',
                input: true,
                tableView: false,
                placeholder: `result = (data['mykey'] > 1);`,
                description: '"row"و "data" و "component" المتغيرات المتاحة. Return "result".',
                customConditional({ row }) {
                  return row.type === 'javascript';
                },
              },
              {
                weight: 10,
                type: 'textarea',
                key: 'json',
                rows: 5,
                editor: 'ace',
                label: 'JSON Logic',
                as: 'json',
                input: true,
                tableView: false,
                placeholder: `{ ... }`,
                description: '"row"و "data"و "component" و "_" المتغيرات المتاحة. اعد النتيجة الصحيحة ليتم ارسالها',
                customConditional({ row }) {
                  return row.type === 'json';
                },
              },
              {
                weight: 10,
                type: 'textfield',
                key: 'event',
                label: 'اسم الحدث',
                placeholder: 'event',
                description: 'الحدث الي سوف يتم اطلاقه باستخدام هذا المعيار',
                tableView: false,
                customConditional({ row }) {
                  return row.type === 'event';
                },
              },
            ],
            key: 'trigger',
            type: 'container',
          },
        ],
        type: 'panel',
      },
      {
        weight: 20,
        input: true,
        label: 'الاجراءات',
        key: 'actions',
        tableView: false,
        templates: {
          header: '<div class="row"> \n  <div class="col-sm-6"><strong>{{ value.length }} {{ ctx.t("actions") }}</strong></div>\n</div>',
          row: '<div class="row"> \n  <div class="col-sm-6">\n    <div>{{ row.name }} </div>\n  </div>\n  <div class="col-sm-2"> \n    <div class="btn-group pull-right"> \n      <div class="btn btn-default editRow">{{ ctx.t("Edit") }}</div> \n      <div class="btn btn-danger removeRow">{{ ctx.t("Delete") }}</div> \n    </div> \n  </div> \n</div>',
          footer: '',
        },
        type: 'editgrid',
        addAnother: 'اضافة اجراء',
        saveRow: 'حفظ الاجراء',
        components: [
          {
            weight: 0,
            title: 'اجراء',
            input: false,
            key: 'actionPanel',
            type: 'panel',
            components: [
              {
                weight: 0,
                input: true,
                inputType: 'text',
                label: 'الاسم',
                key: 'name',
                validate: {
                  required: true,
                },
                type: 'textfield',
              },
              {
                weight: 10,
                input: true,
                label: 'النوع',
                key: 'type',
                data: {
                  values: [
                    {
                      value: 'property',
                      label: 'خاصية',
                    },
                    {
                      value: 'value',
                      label: 'قيمة',
                    },
                    {
                      label: 'دمج مخطط الحقل',
                      value: 'mergeComponentSchema',
                    },
                    {
                      label: 'اجراء مخصص',
                      value: 'customAction',
                    },
                  ],
                },
                dataSrc: 'values',
                template: '<span>{{ item.label }}</span>',
                type: 'select',
              },
              {
                weight: 20,
                type: 'select',
                template: '<span>{{ item.label }}</span>',
                dataSrc: 'json',
                tableView: false,
                data: {
                  json: [
                    {
                      label: 'مخفي',
                      value: 'hidden',
                      type: 'boolean',
                    },
                    {
                      label: 'اجباري',
                      value: 'validate.required',
                      type: 'boolean',
                    },
                    {
                      label: 'الغاء التفعيل',
                      value: 'disabled',
                      type: 'boolean',
                    },
                    {
                      label: 'العنوان',
                      value: 'label',
                      type: 'string',
                    },
                    {
                      label: 'العنوان الداخلي',
                      value: 'title',
                      type: 'string',
                    },
                    {
                      label: 'البادئة',
                      value: 'prefix',
                      type: 'string',
                    },
                    {
                      label: 'اللاحقة',
                      value: 'suffix',
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
                      label: 'النص المؤقت',
                      value: 'placeholder',
                      type: 'string',
                    },
                    {
                      label: 'قناع الادخال',
                      value: 'inputMask',
                      type: 'string',
                    },
                    {
                      label: 'CSS فئات',
                      value: 'className',
                      type: 'string',
                    },
                    {
                      label: 'فئات مخصصة للأب',
                      value: 'customClass',
                      type: 'string',
                    },
                  ],
                },
                key: 'property',
                label: 'خاصية الحقل',
                input: true,
                customConditional({ row }) {
                  return row.type === 'property';
                },
              },
              {
                weight: 30,
                input: true,
                label: 'وضع حالة',
                key: 'state',
                tableView: false,
                data: {
                  values: [
                    {
                      label: 'نعم',
                      value: 'true',
                    },
                    {
                      label: 'لا',
                      value: 'false',
                    },
                  ],
                },
                dataSrc: 'values',
                template: '<span>{{ item.label }}</span>',
                type: 'select',
                customConditional({ row }) {
                  return row.type === 'property' &&
                    row.hasOwnProperty('property') &&
                    row.property.type === 'boolean';
                },
              },
              {
                weight: 30,
                type: 'textfield',
                key: 'text',
                label: 'Text',
                inputType: 'text',
                input: true,
                tableView: false,
                description: 'يمكن استخدام متغيرات القوالب {{ data.myfield }}. "data"و "row"و "component" و "result" .',
                customConditional({ row }) {
                  return row.type === 'property' &&
                    row.hasOwnProperty('property') &&
                    row.property.type === 'string' &&
                    !row.property.component;
                },
              },
              {
                weight: 20,
                input: true,
                label: 'القيمة (Javascript)',
                key: 'value',
                editor: 'ace',
                as: 'javascript',
                rows: 5,
                placeholder: `value = data.myfield;`,
                type: 'textarea',
                tableView: false,
                description: '"row"و "data"و "component" و "result" المتغيرات المتاحة. يرجى ارجاع قيمة.',
                customConditional({ row }) {
                  return row.type === 'value';
                },
              },
              {
                weight: 20,
                input: true,
                label: 'تعريف المخطط',
                key: 'schemaDefinition',
                editor: 'ace',
                as: 'javascript',
                rows: 5,
                placeholder: `schema = { label: 'Updated' };`,
                type: 'textarea',
                tableView: false,
                description: '"row"و "data"و "component"و "result" المتغيرات المتاحة. يرجي ارجاع المخطط.',
                customConditional({ row }) {
                  return row.type === 'mergeComponentSchema';
                },
               },
              Object.assign(EditFormUtils.logicVariablesTable('<tr><th>input</th><td>القيمة الذي سوف يتم ادخالها لهذا الحقل</td></tr>'),
               {
                  customConditional({ row }) {
                    return row.type === 'customAction';
                   }
                }
              ),
              {
                weight: 20,
                input: true,
                label: 'اجراء مخصص (Javascript)',
                key: 'customAction',
                editor: 'ace',
                rows: 5,
                placeholder: `value = data.myfield;`,
                type: 'textarea',
                tableView: false,
                customConditional({ row }) {
                  return row.type === 'customAction';
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
/* eslint-enable quotes, max-len */
