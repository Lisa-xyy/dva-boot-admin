import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import resizeMe from '@/decorator/resizeMe';
import isEqual from 'react-fast-compare';

/**
 * 基于ECharts 4的简单封装 fork自https://github.com/hustcc/echarts-for-react/blob/master/src/core.jsx
 */
@resizeMe({ refreshRate: 50 })
class ECharts extends Component {
  componentDidMount() {
    this.rerender();
  }

  componentDidUpdate(prevProps) {
    // 以下属性修改的时候，需要 dispose 之后再新建
    // 1. 切换 theme 的时候
    // 2. 修改 opts 的时候
    // 3. 修改 onEvents 的时候，这样可以取消所以之前绑定的事件 issue #151
    if (
      prevProps.theme !== this.props.theme ||
      !isEqual(prevProps.opts, this.props.opts) ||
      !isEqual(prevProps.onEvents, this.props.onEvents)
    ) {
      this.dispose();

      this.rerender(); // 重建
      return;
    }

    // 当这些属性保持不变的时候，不 setOption
    const pickKeys = ['option', 'notMerge', 'lazyUpdate', 'showLoading', 'loadingOption'];
    if (pickKeys.every(item => isEqual(prevProps[item], this.props[item]))) {
      return;
    }

    // 判断是否需要 setOption，由开发者自己来确定。默认为 true
    if (!this.props.shouldSetOption(prevProps, this.props)) { return; }

    const echartObj = this.renderEchartDom();
    // 样式修改的时候，可能会导致大小变化，所以触发一下 resize
    if (!isEqual(prevProps.style, this.props.style) || !isEqual(prevProps.className, this.props.className)) {
      try {
        echartObj.resize();
      } catch (e) {
        console.warn(e);
      }
    }
  }

  // remove
  componentWillUnmount() {
    this.dispose();
  }

  // return the echart object
  getEchartsInstance = () => echarts.getInstanceByDom(this.echartsElement) ||
    echarts.init(this.echartsElement, this.props.theme, this.props.opts);

  // dispose echarts
  dispose = () => {
    if (this.echartsElement) {
      // dispose echarts instance
      echarts.dispose(this.echartsElement);
    }
  };

  rerender = () => {
    const { onEvents, onChartReady } = this.props;

    const echartObj = this.renderEchartDom();
    this.bindEvents(echartObj, onEvents || {});

    // on chart ready
    if (typeof onChartReady === 'function') this.props.onChartReady(echartObj);
  };

  // bind the events
  bindEvents = (instance, events) => {
    const _bindEvent = (eventName, func) => {
      // ignore the event config which not satisfy
      if (typeof eventName === 'string' && typeof func === 'function') {
        // binding event
        // instance.off(eventName); // 已经 dispose 在重建，所以无需 off 操作
        instance.on(eventName, (param) => {
          func(param, instance);
        });
      }
    };

    // loop and bind
    for (const eventName in events) {
      if (Object.prototype.hasOwnProperty.call(events, eventName)) {
        _bindEvent(eventName, events[eventName]);
      }
    }
  };

  // render the dom
  renderEchartDom = () => {
    // init the echart object
    const echartObj = this.getEchartsInstance();
    // set the echart option
    echartObj.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate || false);
    // set loading mask
    if (this.props.showLoading) echartObj.showLoading(this.props.loadingOption || null);
    else echartObj.hideLoading();

    return echartObj;
  };

  render() {
    const { size, children, style, ...otherProps } = this.props;
    const { width, height } = size;

    const newStyle = {
      height,
      width,
      ...style,
    };
    
    return (
      <div
        ref={(e) => { this.echartsElement = e; }}
        style={newStyle}
        {...otherProps}
      />
    );
  }
}

export default ECharts;