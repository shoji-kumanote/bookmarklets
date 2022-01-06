(() => {
  // フォームを埋める
  let index = 0;
  const hiragana =
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん".split(
      ""
    );
  const katakana =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワオン".split(
      ""
    );
  const getI = () => (index += 1);
  const fill = (x, y) => (x.length > y ? x : fill(x + x, y).slice(0, y));
  const len = (x, y) => (typeof x.maxLength === "number" ? x.maxLength : y);
  const get = (x, y = hiragana) =>
    y[getI() % y.length] + (x === 1 ? "" : get(x - 1, y));
  [].forEach.call(
    document.querySelectorAll(
      "input:not([type]),input[type=text],input[type=email],input[type=tel],input[type=date],input[type=url],textarea"
    ),
    (e) => {
      if (/zip[0\._-]*1/i.test(e.name)) {
        e.value = fill("123", len(e, 3));
      } else if (/zip[0\._-]*2/i.test(e.name)) {
        e.value = fill("4567", len(e, 4));
      } else if (/zip/i.test(e.name)) {
        e.value = fill("123-4567", len(e, 8));
      } else if (/tel|fax/i.test(e.name)) {
        e.value = fill("000-0000-0000", len(e, 20));
      } else if (/^email$/i.test(e.type) || /mail/i.test(e.name)) {
        e.value = "user@example.com";
      } else if (/^url$/i.test(e.type) || /mail/i.test(e.name)) {
        e.value = "https://example.com";
      } else if (/^textarea$/i.test(e.type)) {
        e.value = fill(
          [get(12), get(8), " ", get(5), get(12)].join("\r\n"),
          len(e, 2000)
        );
      } else if (
        /kana/i.test(e.name) ||
        /ruby/i.test(e.name) ||
        /furi/i.test(e.name)
      ) {
        e.value = fill(get(10, katakana), len(e, 20));
      } else {
        if (/^date$/i.test(e.type)) {
          e.type = "text";
        }
        e.value = fill(get(10), len(e, 20));
      }
    }
  );
  [].forEach.call(document.querySelectorAll("select"), (e) => {
    const options = e.querySelectorAll("option");
    e.value = options[getI() % options.length].value;
  });
})();
