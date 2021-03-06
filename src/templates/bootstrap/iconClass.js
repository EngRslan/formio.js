export default (iconset, name, spinning) => {
  if (iconset === 'fa') {
    switch (name) {
      case 'save':
        name = 'download';
        break;
      case 'zoom-in':
        name = 'search-plus';
        break;
      case 'zoom-out':
        name = 'search-minus';
        break;
      case 'question-sign':
        name = 'question-circle';
        break;
      case 'remove-circle':
        name = 'times-circle';
        break;
      case 'new-window':
        name = 'window-restore';
        break;
      case 'move':
        name = 'arrows-alt';
        break;
      case 'time':
        name = 'clock';
        break;
        case 'remove':
        name = 'trash';
        break;
    }
  }

  return spinning ? `${iconset} ${iconset}-${name} ${iconset}-spin` : `${iconset} ${iconset}-${name}`;
};
