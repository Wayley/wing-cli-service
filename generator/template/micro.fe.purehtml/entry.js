const render = () => {
  document.querySelector('#purehtml-container').innerHTML =
    '<h2 class="demo">Hello World, </br></br>Rendered With Prue JavaScript</h2>';
  return Promise.resolve();
};

((global) => {
  global['purehtml'] = {
    bootstrap: () => {
      console.log('purehtml bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('purehtml mount');
      return render();
    },
    unmount: () => {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
