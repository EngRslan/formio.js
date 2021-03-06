export default {
  lng: 'en',
  nsSeparator: '::',
  keySeparator: '.|.',
  pluralSeparator: '._.',
  contextSeparator: '._.',
  resources: {
    en: {
      translation: {
        unsavedRowsError: 'من فضلك قم بحفظ الصفوف اولا',
        invalidRowsError: 'يرجي تصحيح الصفوف الخاطئة',
        invalidRowError: 'صف خطأ من فضلك صحح الخطأ او احذفه',
        alertMessageWithLabel: '{{label}}: {{message}}',
        alertMessage: '{{message}}',
        complete: 'تم الارسال',
        error: 'من فضلك صحح المدخلات',
        errorListHotkey: 'من فضلك اضغط CTRL+ALT+X للعودة الى قائمة الاخطاء',
        errorsListNavigationMessage: 'اضغط هنا للذهاب الى الحقل الخطأ',
        submitError: 'من فضلك راجع النموذج وافحص الاخطاء',
        required: '{{field}} اجباري',
        unique: '{{field}} القيمة موجودة مسبقا',
        array: '{{field}} لايمكن ان يكون مصفوفة',
        array_nonempty: '{{field}} لابد ان يحتوي على مصفوفة', // eslint-disable-line camelcase
        nonarray: '{{field}} لا يمكن ان يكون مصفوفة',
        select: '{{field}} يحتوي على خيارات خطأ',
        pattern: '{{field}} لا يطابق المعيار {{pattern}}',
        minLength: '{{field}} لابد ان يحتوي على الاقل {{length}} حرف.',
        maxLength: '{{field}} لابد ان لا يتجاوز {{length}} حرف.',
        minWords: '{{field}} لابد ان يحتوي على الاقل {{length}} كلمة.',
        maxWords: '{{field}} لابد ان لا يتجاوز {{length}} كلمة.',
        min: '{{field}} لا يمكن ان يكون اقل من {{min}}.',
        max: '{{field}} لا يمكن ان يكون اكبر من {{max}}.',
        maxDate: '{{field}} لا يمكن ان يحتوي على تاريخ بعد {{- maxDate}}',
        minDate: '{{field}} لا يمكن ان يحتوي على تاريخ قبل {{- minDate}}',
        maxYear: '{{field}} لا يمكن للسنة ان تتجاوز {{maxYear}}',
        minYear: '{{field}} لا يمكن للسنة ان تقل عن {{minYear}}',
        invalid_email: '{{field}} لابد ان يحتوي على بريد الكتروني صحيح', // eslint-disable-line camelcase
        invalid_url: '{{field}} لابد ان يحتوي على رابط صحيح.', // eslint-disable-line camelcase
        invalid_regex: '{{field}} لا يطابق المعيار {{regex}}.', // eslint-disable-line camelcase
        invalid_date: '{{field}} يحتوي على تاريخ غير صحيح.', // eslint-disable-line camelcase
        invalid_day: '{{field}} لا يحتوي على يوم صحيح.', // eslint-disable-line camelcase
        mask: '{{field}} لا يطابق الصيغة الصحيحة.',
        valueIsNotAvailable: '{{ field }} يحتوي على قيمة غير صحيحة.',
        stripe: '{{stripe}}',
        month: 'شهر',
        day: 'يوم',
        year: 'سنة',
        january: 'يناير',
        february: 'فبراير',
        march: 'مارس',
        april: 'ابريل',
        may: 'مايو',
        june: 'يونيو',
        july: 'يوليو',
        august: 'اغسطس',
        september: 'سبتمبر',
        october: 'اكتوبر',
        november: 'نوفمبر',
        december: 'ديسيمبر',
        next: 'التالي',
        previous: 'السابق',
        cancel: 'الغاء',
        submit: 'حفظ و ارسال',
        confirmCancel: 'هل تريد حقاً الالغاء ؟',
        saveDraftInstanceError: 'لا يمكن حفظ المسودة',
        saveDraftAuthError: 'لايمكن الحفظ بدون تسجيل الدخول',
        restoreDraftInstanceError: 'لا يمكن استعادة المسودة',
        time: 'الوقت غير صحيح',
        Copy: 'نسخ',
        'Paste below': 'لصق اسف',
        Move: 'تحريك',
        Edit: 'تعديل',
        'Edit JSON': 'تعديل المخطط',
        Remove: 'حذف',
        'File Name': 'الملف',
        'Size': 'الحجم',
        'Type': 'النوع',
        'Gallery': 'الاستديو',
        'Camera': 'الكاميرا',
        'Drop files to attach,': 'اسحب واسقط الملفات هنا ,',
        'Use Camera,': 'استخدم الكاميرا',
        'browse': 'تصفح',
        'or': 'أو',
        'Take Picture': 'التقط صورة',
        'Switch to file upload': 'التبديل الي رفع الملفات',
        'Complete': 'اكتمل',
        'No storage has been set for this field. File uploads are disabled until storage is set up.': 'لم يتم تحديد مخزن المفات لهذا الحقل سيظل هذا الحقل غير مفعل حتى اضافة مخزن ملفات',
        'File API & FileReader API not supported.': 'خدمات وواجهات FileReader غير مدعومة',
        'XHR2\'s FormData is not supported.': 'FormData غير مدعومة',
        'XHR2\'s upload progress isn\'t supported.': 'تقدم التحميل غير مدعوم'
      }
    }
  }
};
