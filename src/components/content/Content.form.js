import baseEditForm from '../_classes/component/Component.form';

import ContentEditDisplay from './editForm/Content.edit.display';
import ContentEditLogic from './editForm/Content.edit.logic';

export default function(...extend) {
  const editForm = baseEditForm([
    {
      key: 'display',
      components: ContentEditDisplay,
    },
    {
      key: 'data',
      ignore: true,
    },
    {
      key: 'validation',
      ignore: true,
    },
    {
      key: 'logic',
      components: ContentEditLogic,
    },
  ], ...extend);
  // Add content as full width above the settings.
  editForm.components = [{
    weight: 0,
    type: 'textarea',
    editor: 'ckeditor',
    label: 'المحتوى',
    hideLabel: true,
    input: true,
    key: 'html',
    as: 'html',
    rows: 3,
    tooltip: 'محتوى قالب الHTML الذي سوف يتم استخدامه',
  }].concat(editForm.components);
  return editForm;
}
