export default [
  {
    type: 'select',
    input: true,
    key: 'displayInTimezone',
    label: 'عرض المنطقة الزمنية',
    tooltip: 'هذا الحقل سوف يحدد المنطقة الزمنية للتاريخ المدخل',
    weight: 30,
    defaultValue: 'viewer',
    dataSrc: 'values',
    data: {
      values: [
        { label: 'للعرض', value: 'viewer' },
        { label: 'للارسال', value: 'submission' },
        { label: 'للموقع', value: 'location' },
        { label: 'UTC', value: 'utc' }
      ]
    }
  },
  {
    type: 'select',
    input: true,
    key: 'timezone',
    label: 'اختر المنطفة الزمنية',
    tooltip: 'اختر المنطقة الزمنية للتاريخ المحدد',
    weight: 31,
    lazyLoad: true,
    defaultValue: '',
    valueProperty: 'name',
    dataSrc: 'url',
    data: {
      url: 'https://cdn.form.io/timezones.json'
    },
    template: '<span>{{ item.label }}</span>',
    conditional: {
      json: { '===': [{ var: 'data.displayInTimezone' }, 'location'] }
    }
  },
  {
    type: 'checkbox',
    input: true,
    key: 'useLocaleSettings',
    label: 'استخدام الاعدادات المحلية',
    tooltip: 'استخدام الاعدادات المحلية لعرض التاريخ',
    weight: 51
  },
  {
    type: 'checkbox',
    input: true,
    key: 'allowInput',
    label: 'السماح بالادخال اليدوي',
    tooltip: 'اختر هذا الخيار للسماح للمستخدم بادخال التاريخ بطريقة يدوية',
    weight: 51
  },
  {
    type: 'textfield',
    input: true,
    key: 'format',
    label: 'الصيغة',
    placeholder: 'الصيغة',
    description: 'يمكن الاطلاع على الصيغ المتاحة من خلال <a href="https://github.com/angular-ui/bootstrap/tree/master/src/dateparser/docs#uibdateparsers-format-codes" target="_blank">هذا الرابط</a>',
    tooltip: 'الصيغة التي سوف يظهر بها التاريخ',
    weight: 52
  },
  {
    type: 'editgrid',
    input: true,
    key: 'shortcutButtons',
    label: 'ازرار الاختصارات',
    description: 'يمكن تحديد عدة ازرار لوضعها اعلى التقويم. استخدم العنوان لتحديد اسم الزر والحدث onClick لتحديد التاريخ/الوقت الذي سيظهر عند الضغط على هذا الزر. مثال, date = new Date()',
    templates: {
      header: '<div class="row">\n  <div class="col-sm-3">العنوان</div>\n  <div class="col-sm-6">onClick</div>\n</div>',
      row: '<div class="row">\n      <div class="col-sm-3">\n        {{ flattenedComponents.label.getView(row.label) }}\n      </div>\n      <div class="col-sm-6">\n        {{ flattenedComponents.onClick.getView(row.onClick) }}\n      </div>\n      {% if (!instance.disabled) { %}\n        <div class="col-sm-3">\n          <div class="btn-group pull-right">\n            <button class="btn btn-default btn-light btn-sm editRow"><i class="{{ iconClass("edit") }}"></i></button>\n            {% if (!instance.hasRemoveButtons || instance.hasRemoveButtons()) { %}\n              <button class="btn btn-danger btn-sm removeRow"><i class="{{ iconClass("trash") }}"></i></button>\n            {% } %}\n          </div>\n        </div>\n      {% } %}\n    </div>'
    },
    components: [
      {
        label: 'العنوان',
        key: 'label',
        type: 'textfield',
        input: true,
        validate: {
          required: true
        }
      },
      {
        label: 'onClick',
        key: 'onClick',
        type: 'textarea',
        editor: 'ace',
        input: true,
        validate: {
          required: true
        }
      }
    ],
    defaultValue: []
  }
];
