import _ from 'lodash';

import ComponentEditConditional from './editForm/Component.edit.conditional';
import ComponentEditData from './editForm/Component.edit.data';
import ComponentEditAPI from './editForm/Component.edit.api';
import ComponentEditDisplay from './editForm/Component.edit.display';
import ComponentEditLogic from './editForm/Component.edit.logic';
import ComponentEditValidation from './editForm/Component.edit.validation';
import ComponentEditLayout from './editForm/Component.edit.layout';
import EditFormUtils from './editForm/utils';

export default function(...extend) {
  const components = _.cloneDeep([
    {
      type: 'tabs',
      key: 'tabs',
      components: [
        {
          label: 'خيارات العرض',
          key: 'display',
          weight: 0,
          components: ComponentEditDisplay
        },
        {
          label: 'البيانات',
          key: 'data',
          weight: 10,
          components: ComponentEditData
        },
        {
          label: 'التحقق من المدخلات',
          key: 'validation',
          weight: 20,
          components: ComponentEditValidation
        },
        {
          label: 'خيارات الترابط',
          key: 'api',
          weight: 30,
          components: ComponentEditAPI
        },
        {
          label: 'الشروط',
          key: 'conditional',
          weight: 40,
          components: ComponentEditConditional
        },
        {
          label: 'المعايير',
          key: 'logic',
          weight: 50,
          components: ComponentEditLogic
        },
        {
          label: 'خيارات البناء',
          key: 'layout',
          weight: 60,
          components: ComponentEditLayout
        }
      ]
    }
  ]).concat(extend.map((items) => ({
    type: 'tabs',
    key: 'tabs',
    components: _.cloneDeep(items),
  })));
  return {
    components: _.unionWith(components, EditFormUtils.unifyComponents).concat({
      type: 'hidden',
      key: 'type'
    })
  };
}
