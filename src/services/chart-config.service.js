const chartConfigService = {
  setDataDefaults(dataConfig) {
    let properties = ['lineTension', 'fill', 'backgroundColor', 'borderColor', 'borderWidth', 'pointRadius', 'pointBorderColor', 'pointBackgroundColor', 'pointBorderWidth'];
    for (let datasetIndex in dataConfig.datasets) {
      for (let property of properties) {
        if (!dataConfig.datasets[datasetIndex].hasOwnProperty(property)) {
          dataConfig.datasets[datasetIndex][property] = defaultConfig.line.data.datasets[datasetIndex][property] ?
                                                        defaultConfig.line.data.datasets[datasetIndex][property] :
                                                        defaultConfig.line.data.datasets[0][property];
        } else {
          return;
        }
      }
    }
    return dataConfig;
  },

  setOptionsDefaults(optionsConfig) {
    const _setPropertyToDefault = (object, property, setValue) => {
      if (object) {
        if (!object.hasOwnProperty(property)) {
          object[property] = setValue;
        } else {
          return;
        }
      } else {
        object = {};
        object[property] = setValue;
      }
    }

    if (optionsConfig) {
      _setPropertyToDefault(optionsConfig, 'responsive', true);
      _setPropertyToDefault(optionsConfig, 'maintainAspectRatio', false);

      if (optionsConfig.scales) {
        if (optionsConfig.scales.xAxes) {
          for (let i = 0; i < optionsConfig.scales.xAxes.length; i++) {
            if (optionsConfig.scales.xAxes[i].gridLines) {
              _setPropertyToDefault(optionsConfig.scales.xAxes[i].gridLines, 'display', false);
              _setPropertyToDefault(optionsConfig.scales.xAxes[i].gridLines, 'color', 'rgba(0,0,0,0)');
              _setPropertyToDefault(optionsConfig.scales.xAxes[i].gridLines, 'drawBorder', false);
            } else {
              optionsConfig.scales.xAxes[i].gridLines = defaultConfig.line.options.scales.xAxes[0].gridLines;
            }

            if (optionsConfig.scales.xAxes[i].ticks) {
              _setPropertyToDefault(optionsConfig.scales.xAxes[i].ticks, 'maxRotation', 0);
            } else {
              optionsConfig.scales.xAxes[i].ticks = defaultConfig.line.options.scales.xAxes[i].ticks;
            }
          }
        } else {
          optionsConfig.scales.xAxes = defaultConfig.line.options.scales.xAxes;
        }

        if (optionsConfig.scales.yAxes) {
          for (let i = 0; i < optionsConfig.scales.yAxes.length; i++) {
            if (optionsConfig.scales.yAxes[i].gridLines) {
              _setPropertyToDefault(optionsConfig.scales.yAxes[i].gridLines, 'drawBorder', false);
            } else {
              optionsConfig.scales.yAxes[i].gridLines = defaultConfig.line.options.scales.yAxes[0].gridLines;
            }

            if (optionsConfig.scales.yAxes[i].ticks) {
              _setPropertyToDefault(optionsConfig.scales.yAxes[i].ticks, 'padding', 20);
            } else {
              optionsConfig.scales.yAxes[i].ticks = defaultConfig.line.options.scales.yAxes[0].ticks;
            }
          }
        } else {
          optionsConfig.scales.yAxes = defaultConfig.line.options.scales.yAxes;
        }
      } else {
        optionsConfig.scales = defaultConfig.line.options.scales;
      }
    } else {
      optionsConfig = defaultConfig.line.options;
    }

    return optionsConfig;
  },

  _setDefaults(customChartOptions) {
    let defaultChartOptions = defaultConfig[customChartOptions.type];
    let returnChartOptions = {};
    let keys = [];

    _lookThroughObject = object => {
      for (let key in object) {
        if (object[key] instanceof Object && !(key === 'datasets' || key === 'labels')) {
          keys.push(key);
          returnChartOptions[key] = {};
          _lookThroughObject(object[key]);
          keys.pop();
        } else {
          let defaultPath = 'defaultChartOptions';
          for (let i = 0; i < keys.length; i++) {
            // Needs to be figured out
            //
            // console.log('loop ' + i + ': ');
            // console.log(defaultPath);
            // console.log(keys[i]);
            // console.log(eval(defaultPath)[keys[i]]);
            // if (eval(defaultPath).hasOwnProperty([keys[i]])) {
            //   defaultPath = defaultPath + '[' + keys[i] + ']';
            // } else {
            //   eval(defaultPath)[keys[i]] = object[key];
            // }
          }
        }
      }
    }

    _lookThroughObject(customChartOptions);
  }
}

module.exports = chartConfigService;
