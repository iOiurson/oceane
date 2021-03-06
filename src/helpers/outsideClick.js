export default function (node, cb) {
  function check(e) {
    if (!node.contains(e.target)) {
      if (cb) cb();
    }
  }

  document.addEventListener('click', check);

  return {
    destroy() {
      document.removeEventListener('click', check);
    },
  };
}
