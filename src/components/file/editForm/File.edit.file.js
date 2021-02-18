import Formio from '../../../Formio';
import _ from 'lodash';

export default [
  {
    type: 'select',
    input: true,
    key: 'storage',
    label: 'المخزن',
    placeholder: 'اختر مخزن الملفات',
    weight: 0,
    tooltip: 'الي اي مخزن سوف يتم رفع الملفات',
    valueProperty: 'value',
    dataSrc: 'custom',
    data: {
      custom() {
        return _.map(Formio.Providers.getProviders('storage'), (storage, key) => ({
          label: storage.title,
          value: key
        }));
      }
    }
  },
  {
    type: 'textfield',
    input: true,
    key: 'url',
    label: 'رابط المخزن',
    weight: 10,
    placeholder: 'ادخل الرابط الذي سوف يتم ارسال الملفات اليه',
    tooltip: "انظر <a href='https://github.com/danialfarid/ng-file-upload#server-side' target='_blank'>https://github.com/danialfarid/ng-file-upload#server-side</a> لمعرفة كيف تقوم باستقبال الملفات فى الخادم.",
    conditional: {
      json: { '===': [{ var: 'data.storage' }, 'url'] }
    }
  },
  {
    type: 'textfield',
    input: true,
    key: 'options.indexeddb',
    label: 'Database',
    weight: 10,
    placeholder: 'Enter the indexeddb database name',
    conditional: {
      json: {
        in: [
          {
            var: 'data.storage'
          },
          ['indexeddb']
        ],
      }
    }
  },
  {
    type: 'textfield',
    input: true,
    label: 'Table',
    key: 'options.indexeddbTable',
    weight: 10,
    placeholder: 'Enter the name for indexeddb table',
    conditional: {
      json: {
        in: [
          {
            var: 'data.storage'
          },
          ['indexeddb']
        ],
      }
    }
  },
  {
    type: 'textarea',
    key: 'options',
    label: 'العناصر الاضافة فى الريكوست المرسل',
    rows: 5,
    editor: 'ace',
    input: true,
    weight: 15,
    placeholder: `{
  "withCredentials": true
}`,
    conditional: {
      json: {
        '===': [{
          var: 'data.storage'
        }, 'url']
      }
    }
  },
  {
    type: 'textfield',
    input: true,
    key: 'fileKey',
    label: 'المفتاح',
    weight: 17,
    placeholder: 'ادخل المفتاح الذي سيحمل الملف الي الخادم داخل الفورم',
    tooltip: 'اسم المفتاح الذي سوف يرسل الملف به الى الخادم',
    conditional: {
      json: {
        '===': [{
          var: 'data.storage'
        }, 'url']
      }
    }
  },
  {
    type: 'textfield',
    input: true,
    key: 'dir',
    label: 'المجلد',
    placeholder: 'اسم المجلد الذي سيتم حفظ الملف به - اختياري',
    tooltip: 'هذا الخيار سوف يرسل الي الخدمة لحفظ الملف بناءا على هذا المجلد',
    weight: 20
  },
  {
    type: 'textfield',
    input: true,
    key: 'fileNameTemplate',
    label: 'هيكلة اسم الملف',
    placeholder: '(اختياري) {{name}}-{{guid}}',
    tooltip: 'تحديد هيكل اسم الملف الذي سوف يرسل الى الخادم يمكن استخدام المتغيرات (`data`, `component`, `user`, `value`, `moment` وهكذا.), ايضا المتغيرات `fileName`, `guid` متاحة. `guid` لابد من وجود, فى حالة عدم وجودة سيتم اضافة فى اخر اسم الملف لضمان عدم تكرار اسم الملف.',
    weight: 25
  },
  {
    type: 'checkbox',
    input: true,
    key: 'image',
    label: 'معاينة الملفات كصور',
    tooltip: 'بدلا من ظهر الملفات كقائمة بروابط سوف تظهر معاينة الصور',
    weight: 30
  },
  {
    type: 'checkbox',
    input: true,
    key: 'uploadOnly',
    label: 'رفع فقط',
    tooltip: 'عند تحديد هذا الخيار سوف تستطيع فقط برفع الملفات ولكن التنزيل لن يكون متاح',
    weight: 33,
  },
  {
    type: 'checkbox',
    input: true,
    key: 'privateDownload',
    label: 'Private Download',
    tooltip: 'When this is checked, the file download will send a POST request to the download URL with the x-jwt-token header. This will allow your endpoint to create a Private download system.',
    weight: 31,
    ignore: true,
    conditional: {
      json: { '===': [{ var: 'data.storage' }, 'url'] }
    }
  },
  {
    type: 'textfield',
    input: true,
    key: 'imageSize',
    label: 'حجم المعاينة',
    placeholder: '100',
    tooltip: 'حجم معاينة الصورة',
    weight: 40,
    conditional: {
      json: { '==': [{ var: 'data.image' }, true] }
    }
  },
  {
    type: 'checkbox',
    input: true,
    key: 'webcam',
    label: 'السماح باستخدام الكاميرا',
    tooltip: 'عند تحديد هذا الخيار سيتم استخدام الكاميرا مباشرة دون اظهار مربع اختيار الملفات',
    weight: 32
  },
  {
    type: 'textfield',
    input: true,
    key: 'webcamSize',
    label: 'حجم عرض صورة الكاميرا',
    placeholder: '320',
    tooltip: 'حجم الصور الملتقطة بواسطة الكاميرا',
    weight: 38,
    conditional: {
      json: { '==': [{ var: 'data.webcam' }, true] }
    }
  },
  {
    type: 'datagrid',
    input: true,
    label: 'انواع الملفات',
    key: 'fileTypes',
    tooltip: 'تحديد انواع الملفات وذلك لجعل المستخدم يحدد ماهية نوع الملف المرفوع وذلك لتصنيفها',
    weight: 11,
    components: [
      {
        label: 'النص',
        key: 'label',
        input: true,
        type: 'textfield'
      },
      {
        label: 'القيمة',
        key: 'value',
        input: true,
        type: 'textfield'
      }
    ]
  },
  {
    type: 'textfield',
    input: true,
    key: 'filePattern',
    label: 'نمط الملفات المسموحة',
    placeholder: '.jpg,video/*,application/pdf',
    tooltip: 'انظر <a href=\'https://github.com/danialfarid/ng-file-upload#full-reference\' target=\'_blank\'>https://github.com/danialfarid/ng-file-upload#full-reference</a> لمعرفة كيف تحدد الانماط.',
    weight: 50
  },
  {
    type: 'textfield',
    input: true,
    key: 'fileMinSize',
    label: 'اقل حجم مسموح للملف',
    placeholder: '1MB',
    tooltip: 'انظر <a href=\'https://github.com/danialfarid/ng-file-upload#full-reference\' target=\'_blank\'>https://github.com/danialfarid/ng-file-upload#full-reference</a> لمعرفة كيف تحدد الاحجام.',
    weight: 60
  },
  {
    type: 'textfield',
    input: true,
    key: 'fileMaxSize',
    label: 'اكبر حجم مسموح به للملف',
    placeholder: '10MB',
    tooltip: 'انظر <a href=\'https://github.com/danialfarid/ng-file-upload#full-reference\' target=\'_blank\'>https://github.com/danialfarid/ng-file-upload#full-reference</a> لمعرفة كيف تحدد الاحجام.',
    weight: 70
  },
];
