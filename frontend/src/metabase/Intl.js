import IntlMessageFormat from 'intl-messageformat';
import zh from 'metabase/locale/zh';
const MESSAGES = { zh };
const LOCALE = 'zh'; // -> 这里写上你的决定语言的方法，例如可以从cookie判断语言

class Intl {

  get(key, defaultMessage, options) {
    let msg = MESSAGES[LOCALE][key];
    if (msg == null) {
      if (defaultMessage != null) {
        return defaultMessage;
      }
      return key;
    }
    if (options) {
      msg = new IntlMessageFormat(msg, LOCALE);
      return msg.format(options);
    }
    return msg;

  }
}

export default Intl;
