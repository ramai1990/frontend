import IMask from 'imask';
if (document.querySelector('.js-date-mask')) {
  IMask(document.querySelector('.js-date-mask'), {
    mask: Date,
    lazy: false,
    blocks: {
      d: {
        mask: IMask.MaskedRange,
        placeholderChar: 'Д',
        from: 1,
        to: 31,
        maxLength: 2
      },
      m: {
        mask: IMask.MaskedRange,
        placeholderChar: 'М',
        from: 1,
        to: 12,
        maxLength: 2
      },
      Y: {
        mask: IMask.MaskedRange,
        placeholderChar: 'Г',
        from: 1900,
        to: 9999,
        maxLength: 4
      }
    }
  });
}
