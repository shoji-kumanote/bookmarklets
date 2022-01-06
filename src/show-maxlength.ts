(() => {
  [].forEach.call(document.querySelectorAll("*[maxlength]"), (e) => {
    e.value = "";
    e.placeholder = "maxlength=" + e.maxLength;
  });
})();
