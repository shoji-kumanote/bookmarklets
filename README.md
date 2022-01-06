# bookmarklets

<p>
  <a
    href='javascript:(function(){"use strict";var e,t,n,a,i,l,u;e=0,t="あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん".split(""),n="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワオン".split(""),a=function(){return e+=1},i=function(e,t){return e.length>t?e:i(e+e,t).slice(0,t)},l=function(e,t){return"number"==typeof e.maxLength?e.maxLength:t},u=function(e,n){return void 0===n&&(n=t),n[a()%n.length]+(1===e?"":u(e-1,n))},[].forEach.call(document.querySelectorAll("input:not([type]),input[type=text],input[type=email],input[type=tel],input[type=date],input[type=url],textarea"),(function(e){/zip[0\._-]*1/i.test(e.name)?e.value=i("123",l(e,3)):/zip[0\._-]*2/i.test(e.name)?e.value=i("4567",l(e,4)):/zip/i.test(e.name)?e.value=i("123-4567",l(e,8)):/tel|fax/i.test(e.name)?e.value=i("000-0000-0000",l(e,20)):/^email$/i.test(e.type)||/mail/i.test(e.name)?e.value="user@example.com":/^url$/i.test(e.type)||/mail/i.test(e.name)?e.value="https://example.com":/^textarea$/i.test(e.type)?e.value=i([u(12),u(8)," ",u(5),u(12)].join("\r\n"),l(e,2e3)):/kana/i.test(e.name)||/ruby/i.test(e.name)||/furi/i.test(e.name)?e.value=i(u(10,n),l(e,20)):(/^date$/i.test(e.type)&&(e.type="text"),e.value=i(u(10),l(e,20)))})),[].forEach.call(document.querySelectorAll("select"),(function(e){var t=e.querySelectorAll("option");e.value=t[a()%t.length].value}))})();'
    >フォームを埋める</a
  >
</p>
<p>
  <a
    href='javascript:(function(){"use strict";var e,t,n,a,i,l,u;e=0,t="あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん".split(""),n="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワオン".split(""),a=function(){return e+=1},i=function(e,t){return e.length>t?e:i(e+e,t).slice(0,t)},l=function(e,t){return 2*("number"==typeof e.maxLength?e.maxLength:t)},u=function(e,n){return void 0===n&&(n=t),n[a()%n.length]+(1===e?"":u(e-1,n))},[].forEach.call(document.querySelectorAll("input:not([type]),input[type=text],input[type=email],input[type=tel],input[type=date],input[type=url],textarea"),(function(e){/zip[0\._-]*1/i.test(e.name)?e.value=i("123",l(e,3)):/zip[0\._-]*2/i.test(e.name)?e.value=i("4567",l(e,4)):/zip/i.test(e.name)?e.value=i("123-4567",l(e,8)):/tel|fax/i.test(e.name)?e.value=i("000-0000-0000",l(e,20)):/^email$/i.test(e.type)||/mail/i.test(e.name)?e.value=i("user",l(e,20)-12)+"@example.com":/^url$/i.test(e.type)||/mail/i.test(e.name)?e.value="https://example.com/#"+i("123",l(e,3)):/^textarea$/i.test(e.type)?e.value=i([u(12),u(8)," ",u(5),u(12)].join("\r\n"),l(e,2e3)):/kana/i.test(e.name)||/ruby/i.test(e.name)||/furi/i.test(e.name)?e.value=i(u(10,n),l(e,20)):(/^date$/i.test(e.type)&&(e.type="text"),e.value=i(u(10),l(e,20)))})),[].forEach.call(document.querySelectorAll("select"),(function(e){var t=e.querySelectorAll("option");e.value=t[a()%t.length].value}))})();'
    >maxlengthを超えてフォームを埋める</a
  >
</p>
<p>
  <a
    href='javascript:(function(){"use strict";[].forEach.call(document.querySelectorAll("*[maxlength]"),(function(e){e.value="",e.placeholder="maxlength="+e.maxLength}))})();'
    >maxlength確認</a
  >
</p>
<p>
  <a
    href='javascript:(function(){"use strict";navigator.clipboard.writeText("あいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさしすせそたちつてとなにぬねの\nあいうえおかきくけこさし")})();'
    >1000文字コピー</a
  >
</p>
