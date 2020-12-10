webpackHotUpdate("main",{

/***/ "./src/containers/dr-portal/program-actions/schedules/Schedules.jsx":
/*!**************************************************************************!*\
  !*** ./src/containers/dr-portal/program-actions/schedules/Schedules.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_withTemplate_withTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hoc/withTemplate/withTemplate */ "./src/containers/dr-portal/hoc/withTemplate/withTemplate.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.get */ "./node_modules/lodash.get/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_dataTable_CustomTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/dataTable/CustomTable */ "./src/components/dataTable/CustomTable.jsx");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_dr_portal_demand_reponse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/dr-portal/demand-reponse */ "./src/services/dr-portal/demand-reponse.js");
/* harmony import */ var _components_tostrMsg_TostrComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/tostrMsg/TostrComponent */ "./src/components/tostrMsg/TostrComponent.jsx");
/* harmony import */ var _utils_helpers_ConstantMsgs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utils/helpers/ConstantMsgs */ "./src/utils/helpers/ConstantMsgs.jsx");
/* harmony import */ var _components_confirmationPrompt_ConfirmationPrompt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/confirmationPrompt/ConfirmationPrompt */ "./src/components/confirmationPrompt/ConfirmationPrompt.jsx");
/* harmony import */ var _components_subHeader_filter_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/subHeader/filter/filter */ "./src/components/subHeader/filter/filter.jsx");
var _jsxFileName = "/home/hiren/RheemCONNECTPortals/DR_Partner_Portal/src/containers/dr-portal/program-actions/schedules/Schedules.jsx";












const breadCrumbs = [{
  label: 'backSpace',
  path: '/demand-response/program-actions'
}, {
  label: 'home',
  path: '/demand-response'
}, {
  label: sessionStorage.getItem('programName'),
  path: '/demand-response/programs',
  searchFor: {
    key: 'programName',
    label: 'Programs :'
  }
}, {
  label: 'Program Actions',
  path: '/demand-response/program-actions'
}, {
  label: 'Schedules',
  path: '/demand-response/program/schedules',
  isCurrentPage: true
}];

const Schedules = props => {
  const [columnArr, SetColumnArr] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [scheduleList, SetScheduleList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [modalOpen, setModalOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [propEventId, setPropEventId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [onCheckScheduleType, setOnCheckScheduleType] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [refreshed, setRefreshed] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [pureIdData, setPuredIdData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [runTimeScheduleData, setRunTimeScheduleData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [advanceScheduleData, setAdvanceScheduleData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [shrinkClass, setShrinkClass] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [runtimeGetCheckBox, runTimeSetCheckBox] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: 1,
    default: true,
    title: 'Event Id',
    field: 'ScheduledEventId'
  }, {
    id: 2,
    default: true,
    title: 'Mac Address'
  }, {
    id: 3,
    default: true,
    title: 'ScheduleDay',
    field: 'scheduleday'
  }, {
    id: 4,
    default: true,
    title: 'ScheduleTime',
    field: 'scheduletime'
  }, {
    id: 5,
    default: true,
    title: 'Mode',
    field: 'mode'
  }, {
    id: 6,
    default: true,
    title: 'Set Point',
    field: 'setPoint'
  }, {
    id: 7,
    default: true,
    title: 'Equipment',
    field: 'equipmentsDetail'
  }]);
  const [advanceGetCheckBox, advanceSetCheckBox] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: 1,
    default: true,
    title: 'Event Id',
    field: 'ScheduledEventId'
  }, {
    id: 2,
    default: true,
    title: 'Mac Address'
  }, {
    id: 3,
    default: true,
    title: 'Start Time',
    field: 'startTime'
  }, {
    id: 4,
    default: true,
    title: 'End Time',
    field: 'endTime'
  }, {
    id: 5,
    default: true,
    title: 'Mode',
    field: 'mode'
  }, {
    id: 6,
    default: true,
    title: 'Set Point',
    field: 'setPoint'
  }, {
    id: 7,
    default: true,
    title: 'Equipment',
    field: 'equipmentsDetail'
  }]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // get mac address
    let items = {};

    if (sessionStorage.getItem('items') && Object.keys(sessionStorage.getItem('items')).length > 0) {
      items = JSON.parse(sessionStorage.getItem('items'));
    }

    let idList = [];
    items && items.map(id => {
      idList.push({
        id: id.id,
        mac: id.mac
      });
    });
    let pureId = idList.filter(pure => {
      return pure.id != undefined;
    });
    setPuredIdData(pureId);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const scheduleDataFetch = async () => {
      // get Current programs data
      setLoading(true);
      let currentProgram = JSON.parse(sessionStorage.getItem('current_program'));
      setOnCheckScheduleType(currentProgram); // api calls;

      let apiResponse;

      if (currentProgram.runtimeSchedule == true) {
        apiResponse = await Object(_services_dr_portal_demand_reponse__WEBPACK_IMPORTED_MODULE_7__["getRunTimeSchedule"])();
        let response = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(apiResponse, 'data', []);
        setRunTimeScheduleData(response);
      } else if (currentProgram.advancedSchedule == true) {
        apiResponse = await Object(_services_dr_portal_demand_reponse__WEBPACK_IMPORTED_MODULE_7__["getAdvancedSchedule"])();
        let response = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(apiResponse, 'data', []);
        setAdvanceScheduleData(response);
      }

      setLoading(false);
    };

    scheduleDataFetch();
  }, [refreshed]);

  const Action = props => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "btn-holder",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "small-btn",
      onClick: () => {
        setPropEventId(props.eventId);
        setModalOpen(true);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }
    }, "Delete"));
  };

  const runtimeScheduleTable = (respData = null) => {
    try {
      let items = respData || [...runTimeScheduleData];
      let columns = [];

      if (items && items.length > 0) {
        let schedulesForTable = [];

        if (onCheckScheduleType.runtimeSchedule === true) {
          schedulesForTable = items && items.map((resp, i) => {
            let data = resp && resp.equipmentsDetail;
            data = data.replace(/'/g, '"');
            data = JSON.parse(data);
            let macFil = [];
            data && data.every(val => pureIdData.map(all => {
              if (Object.values(all).includes(val)) {
                macFil.push(all);
              }
            }));
            let onlyMac = [];
            macFil && macFil.map(macs => {
              onlyMac.push(macs.mac);
            }); //

            var aryObj = {};
            runtimeGetCheckBox.filter(array_el => {
              if (array_el.id < 10 && array_el.default == true) {
                if (array_el.title == 'Mac Address') {
                  aryObj[array_el.title] = onlyMac.toString();
                } else {
                  aryObj[array_el.title] = resp[array_el.field] !== '' ? resp[array_el.field] : '-';
                }
              }
            });
            aryObj['Actions'] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Action, {
              props: props,
              eventId: resp.ScheduledEventId,
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 35
              }
            });
            return aryObj;
          });
        }

        schedulesForTable.length && Object.keys(schedulesForTable[0]).forEach(key => {
          if (key === 'Actions' || key === 'Mode' || key === 'ScheduleDay' || key === 'ScheduleTime' || key === 'Event Id' || key === 'Mac Address' || key === 'Set Point' || key === 'Equipments') {
            columns.push({
              title: key,
              sortable: false,
              class: 'no-sorting align-center'
            });
          } else {
            columns.push({
              title: key
            });
          }
        });
        SetColumnArr(columns);
        SetScheduleList(schedulesForTable);
      }
    } catch (e) {
      setLoading(false);
    }
  };

  const advanceScheduleTable = (respData = null) => {
    try {
      let items = respData || [...advanceScheduleData];
      let columns = [];

      if (items && items.length > 0) {
        let schedulesForTable = [];

        if (onCheckScheduleType.advancedSchedule === true) {
          schedulesForTable = items && items.map((resp, i) => {
            let data = resp && resp.equipmentsDetail;
            data = data.replace(/'/g, '"');
            data = JSON.parse(data);
            let macFil = [];
            data && data.every(val => pureIdData.map(all => {
              if (Object.values(all).includes(val)) {
                macFil.push(all);
              }
            }));
            let onlyMac = [];
            macFil && macFil.map(macs => {
              onlyMac.push(macs.mac);
            }); //

            var aryObj = {};
            advanceGetCheckBox.filter(array_el => {
              if (array_el.id < 10 && array_el.default == true) {
                if (array_el.title == 'Mac Address') {
                  aryObj[array_el.title] = onlyMac.toString();
                } else if (array_el.title == 'Start Time') {
                  // aryObj[array_el.title] = moment(resp.startTime).format('DD-MM-YYYY : HH-MM') || '-';
                  aryObj[array_el.title] = moment__WEBPACK_IMPORTED_MODULE_6___default()(resp.startTime).format('DD-MM-YYYY') + ' / ' + moment__WEBPACK_IMPORTED_MODULE_6___default()(resp.startTime).utc().format('HH:mm');
                } else if (array_el.title == 'End Time') {
                  // aryObj[array_el.title] = moment(resp.startTime).format('DD-MM-YYYY : HH-MM') || '-';
                  aryObj[array_el.title] = moment__WEBPACK_IMPORTED_MODULE_6___default()(resp.endTime).format('DD-MM-YYYY') + ' / ' + moment__WEBPACK_IMPORTED_MODULE_6___default()(resp.endTime).utc().format('HH:mm');
                } else {
                  aryObj[array_el.title] = resp[array_el.field] !== '' ? resp[array_el.field] : '-';
                }
              }
            });
            aryObj['Actions'] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Action, {
              props: props,
              eventId: resp.ScheduledEventId,
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 318,
                columnNumber: 35
              }
            });
            return aryObj;
          });
        }

        schedulesForTable.length && Object.keys(schedulesForTable[0]).forEach(key => {
          if (key === 'Actions' || key === 'Mode' || key === 'Start Time' || key === 'End Time' || key === 'Event Id' || key === 'Mac Address' || key === 'Set Point') {
            columns.push({
              title: key,
              sortable: false,
              class: 'no-sorting align-center'
            });
          } else {
            columns.push({
              title: key
            });
          }
        });
        SetColumnArr(columns);
        SetScheduleList(schedulesForTable);
      }
    } catch (e) {
      setLoading(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    runtimeScheduleTable();
    advanceScheduleTable();
  }, [runTimeScheduleData, advanceScheduleData, refreshed, onCheckScheduleType]);

  const handleDone = () => {
    runtimeScheduleTable();
    advanceScheduleTable();
    setShrinkClass(false);
  };

  const getScheduleList = async () => {
    setRefreshed(!refreshed);
    runtimeScheduleTable();
    advanceScheduleTable();
  };

  const routeToSchedule = () => {
    props.history.push('/demand-response/program/add-schedule');
  };

  const confirmToDeleteSchedule = async eventId => {
    try {
      setLoading(true);
      let currentProgram = JSON.parse(sessionStorage.getItem('current_program'));
      let apiResponse = false;

      if (currentProgram.runtimeSchedule === true) {
        apiResponse = await Object(_services_dr_portal_demand_reponse__WEBPACK_IMPORTED_MODULE_7__["deleteRunTimeSchedule"])(eventId);
      } else if (currentProgram.advancedSchedule === true) {
        apiResponse = await Object(_services_dr_portal_demand_reponse__WEBPACK_IMPORTED_MODULE_7__["deleteAdvancedSchedule"])(eventId);
      }

      if (apiResponse && apiResponse.status !== 200 && apiResponse.status !== 202) {
        setLoading(false);
        Object(_components_tostrMsg_TostrComponent__WEBPACK_IMPORTED_MODULE_8__["default"])(_utils_helpers_ConstantMsgs__WEBPACK_IMPORTED_MODULE_9__["defaulSuccessMsgs"].deleteProgramFail, {
          type: 'error'
        });
        return false;
      } else if (apiResponse && (apiResponse.status === 200 || apiResponse.status === 202)) {
        if (scheduleList && scheduleList.length - 1 <= 0) {
          if (currentProgram.runtimeSchedule === true) {
            currentProgram.runtimeSchedule = false;
            sessionStorage.setItem('current_program', JSON.stringify(currentProgram));
          } else if (currentProgram.advancedSchedule === true) {
            currentProgram.advancedSchedule = false;
            sessionStorage.setItem('current_program', JSON.stringify(currentProgram));
          }
        }

        Object(_components_tostrMsg_TostrComponent__WEBPACK_IMPORTED_MODULE_8__["default"])(_utils_helpers_ConstantMsgs__WEBPACK_IMPORTED_MODULE_9__["defaulSuccessMsgs"].deleteSChedulePass, {
          type: 'success'
        });
        setRefreshed(!refreshed);
        setLoading(false);
      }

      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }; // let scrollBarRef = null;


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fullw content-holder moz-scrollbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "actions-holder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader__WEBPACK_IMPORTED_MODULE_5___default.a, {
    loaded: !loading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-title display-b fullw",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pull-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 19
    }
  }, "All Schedules", onCheckScheduleType.advancedSchedule === true && scheduleList.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-2 note",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 23
    }
  }, "- Advanced Schedules") : null, onCheckScheduleType.runtimeSchedule === true && scheduleList.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-2 note",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 23
    }
  }, "- Runtime Schedules") : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pull-right dflex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => routeToSchedule(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 19
    }
  }, "Add New Schedule"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "refresh-btn ml-2",
    onClick: () => getScheduleList(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 21
    }
  }, "refresh")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_subHeader_filter_filter__WEBPACK_IMPORTED_MODULE_11__["default"], {
    handleDone: handleDone,
    getCheckBox: onCheckScheduleType.runtimeSchedule == true ? runtimeGetCheckBox : advanceGetCheckBox,
    setCheckBox: onCheckScheduleType.runtimeSchedule == true ? runTimeSetCheckBox : advanceSetCheckBox,
    shrinkClass: shrinkClass,
    setShrinkClass: setShrinkClass // data={scheduleList}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 19
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-area",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "no-more-tables",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 17
    }
  }, scheduleList.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dataTable_CustomTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    columns: columnArr,
    data: scheduleList // loading={loading}
    ,
    checkbox: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 21
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "no-data with-b",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 21
    }
  }, scheduleList.length, "No Data Found"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_confirmationPrompt_ConfirmationPrompt__WEBPACK_IMPORTED_MODULE_10__["default"], {
    modalOpen: modalOpen,
    itemId: propEventId,
    type: "getSchedule",
    closeModal: () => setModalOpen(false),
    method: confirmToDeleteSchedule,
    title: "Delete Schedule",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withTemplate_withTemplate__WEBPACK_IMPORTED_MODULE_1__["default"])(Schedules, 'DR', 'blue', 'Demand Response', breadCrumbs));

/***/ })

})
//# sourceMappingURL=main.e11a87a5654fca147eb2.hot-update.js.map