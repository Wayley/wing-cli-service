import {
  registerMicroApps,
  runAfterFirstMounted,
  setDefaultMountApp,
  start,
  initGlobalState,
} from 'qiankun';

import render from './render/ReactRender';
// import render from './render/VueRender';

import config from './config';
const { apps } = config;
const loader = (loading) => render({ loading });
const container = '#subapp-viewport';

let microApps = [];
apps.forEach(({ path, name, entry }) => {
  microApps.push({ name, entry, container, loader, activeRule: path });
});
const lifeCycleTest = function (lifeCycle, content) {
  console.log(`[LifeCycle] ${lifeCycle} %c%s`, 'color: green;', content);
};
const lifeCycles = {
  beforeLoad: [(app) => lifeCycleTest('before load', app.name)],
  beforeMount: [(app) => lifeCycleTest('before mount', app.name)],
  afterUnmount: [(app) => lifeCycleTest('after unmount', app.name)],
};
/**
 * Step1 初始化应用（可选）
 */
render({ loading: true });

/**
 * Step2 注册子应用
 */
registerMicroApps(microApps, lifeCycles);

// 初始化全局State
const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'Global-User',
});
// 监听全局State
onGlobalStateChange((value, prev) =>
  console.log('[onGlobalStateChange - Main App]:', value, prev)
);
// 主应用更新全局State
setGlobalState({
  user: {
    nickName: 'wzheng',
    account: 'U2020',
  },
});

/**
 * Step3 设置默认进入的子应用
 */
const defaultApp = apps[0] ? apps[0].path : '';
setDefaultMountApp(defaultApp);

/**
 * Step4 启动应用
 */
start();

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
