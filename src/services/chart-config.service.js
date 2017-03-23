const chartConfigService = {
  setDataDefaults(dataConfig) {
    let properties = ['lineTension', 'fill', 'backgroundColor', 'borderColor', 'borderWidth', 'pointRadius', 'pointBorderColor', 'pointBackgroundColor', 'pointBorderWidth'];
    for (let datasetIndex in dataConfig.datasets) {
      for (let property of properties) {
        if (!dataConfig.datasets[datasetIndex].hasOwnProperty(property)) {
          dataConfig.datasets[datasetIndex][property] = defaultConfig.data.datasets[datasetIndex][property] ?
                                                        defaultConfig.data.datasets[datasetIndex][property] :
                                                        defaultConfig.data.datasets[0][property];
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
              optionsConfig.scales.xAxes[i].gridLines = defaultConfig.options.scales.xAxes[0].gridLines;
            }

            if (optionsConfig.scales.xAxes[i].ticks) {
              _setPropertyToDefault(optionsConfig.scales.xAxes[i].ticks, 'maxRotation', 0);
            } else {
              optionsConfig.scales.xAxes[i].ticks = defaultConfig.options.scales.xAxes[i].ticks;
            }
          }
        } else {
          optionsConfig.scales.xAxes = defaultConfig.options.scales.xAxes;
        }

        if (optionsConfig.scales.yAxes) {
          for (let i = 0; i < optionsConfig.scales.yAxes.length; i++) {
            if (optionsConfig.scales.yAxes[i].gridLines) {
              _setPropertyToDefault(optionsConfig.scales.yAxes[i].gridLines, 'drawBorder', false);
            } else {
              optionsConfig.scales.yAxes[i].gridLines = defaultConfig.options.scales.yAxes[0].gridLines;
            }

            if (optionsConfig.scales.yAxes[i].ticks) {
              _setPropertyToDefault(optionsConfig.scales.yAxes[i].ticks, 'padding', 20);
            } else {
              optionsConfig.scales.yAxes[i].ticks = defaultConfig.options.scales.yAxes[0].ticks;
            }
          }
        } else {
          optionsConfig.scales.yAxes = defaultConfig.options.scales.yAxes;
        }
      } else {
        optionsConfig.scales = defaultConfig.options.scales;
      }
    } else {
      optionsConfig = defaultConfig.options;
    }

    return optionsConfig;
  }
}

module.exports = chartConfigService;
