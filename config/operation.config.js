export const operationTypes=[
  {
    "id": "routine",
    "name": "常规作业",
    "code": "ZY",
    "icon": 6,
    "levels": [
      {
        "name": "维修作业",
        "description": "化工企业检维修包括：全厂停车大检修；某一套或几套生产储存装置停车大修；系统、车间或生产储存装置的检维修；化工装置的维护保养；生产储存装置及相关设备在不停产状况下的抢修。",
        "default": true
      }
    ],
    "extra": [],
    "people": [
      {
        "label": "作业单位",
        "unit": true,
        "required": true
      },
      {
        "label": "作业负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业所在单位",
        "unit": true,
        "required": true
      },
      {
        "label": "作业所在单位负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全交底人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "属地单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "作业负责人意见",
        "unit": false,
        "required": true
      },
      {
        "label": "所在单位意见",
        "unit": false,
        "required": true
      },
      {
        "label": "完工验收意见",
        "unit": false,
        "required": true
      },
      {
        "label": "抄送成员",
        "unit": false,
        "required": false
      }
    ],
    "hasLocation": true,
    "specialWorkers": false
  },
  {
    "id": "fire",
    "name": "动火作业",
    "code": "DH",
    "icon": 7,
    "levels": [
      {
        "name": "一级",
        "description": "在生产运行状态下的易燃易爆炸生产装置、输送管道、储罐、容器等部位上及其他特殊危险场所进行的动火作业，带压部置换不置换动火作业，密闭容器内、地下室动火作业，按特殊动火作业处理（例如氨气、氢气、天然气管道、化学品仓库内、研发大楼的钢瓶室、QC室、开发硬化实验室、硬化反应区等，）。",
        "default": false
      },
      {
        "name": "二级",
        "description": "在易燃易爆场所进行的除特殊动火作业以外的动火作业，厂区管廊上、通道及室内空间的动火作业。这些动火作业需提前一天申请，批准期限为一天。",
        "default": false
      },
      {
        "name": "三级",
        "description": "除特级动火作业和一级动火作业以外的动火作业。 生产装置或系统全部停车，装置经清洗、置换、分析合格并采取安全隔离措施后，根据其火灾、爆炸危险性大小，经危险化学品企业生产负责人或安全管理负责人批准，动火作业可按二级动火作业管理。",
        "default": true
      }
    ],
    "extra": [
      "动火方式"
    ],
    "people": [
      {
        "label": "作业单位",
        "unit": true,
        "required": true
      },
      {
        "label": "作业负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业所在单位",
        "unit": true,
        "required": true
      },
      {
        "label": "作业所在单位负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "风险评估人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全措施确认人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全交底人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "属地单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "作业负责人意见",
        "unit": false,
        "required": true
      },
      {
        "label": "所在单位意见",
        "unit": false,
        "required": true
      },
      {
        "label": "安全管理部门意见",
        "unit": false,
        "required": true
      },
      {
        "label": "作业前验票情况",
        "unit": false,
        "required": true
      },
      {
        "label": "完工验收意见",
        "unit": false,
        "required": true
      },
      {
        "label": "抄送成员",
        "unit": false,
        "required": false
      }
    ],
    "hasLocation": true,
    "specialWorkers": true
  },
  {
    "id": "electric",
    "name": "临时用电作业",
    "code": "LD",
    "icon": 8,
    "levels": [
      {
        "name": "A级",
        "description": "(高风险/高压)，涉及高压系统（6kV及以上）倒闸操作、带电作业，或在易燃易爆区域进行的临时用电作业。",
        "default": false
      },
      {
        "name": "B级",
        "description": "(中风险/大功率)，总功率在50kW及以上的低压临时用电，或涉及重要负荷的临时用电。",
        "default": false
      },
      {
        "name": "C级",
        "description": "总功率在50kW以下的普通低压临时用电。",
        "default": true
      }
    ],
    "extra": [
      "电源接入点及许可用电功率",
      "工作电压",
      "用电设备名称及额定功率"
    ],
    "people": [
      {
        "label": "用电单位",
        "unit": true,
        "required": true
      },
      {
        "label": "用电单位负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "配送电单位",
        "unit": true,
        "required": true
      },
      {
        "label": "配送电单位负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "用电人",
        "unit": false,
        "required": true
      },
      {
        "label": "风险评估人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全措施确认人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全交底人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "属地单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "作业负责人",
        "unit": false,
        "required": false
      },
      {
        "label": "所在单位意见",
        "unit": false,
        "required": false
      },
      {
        "label": "完工负责人意见",
        "unit": false,
        "required": false
      },
      {
        "label": "抄送成员",
        "unit": false,
        "required": false
      }
    ],
    "hasLocation": true,
    "specialWorkers": true
  },
  {
    "id": "high",
    "name": "高处作业",
    "code": "GC",
    "icon": 9,
    "levels": [
      {
        "name": "一级",
        "description": "不存在特殊危险因素的情况下，在距坠落基准面2米≤h≤5米，有可能坠落的高处进行的作业。（顺明，蓝色字体对应右边图片，可迭代增加）",
        "default": true
      },
      {
        "name": "二级",
        "description": "不存在特殊危险因素的情况下，在距坠落基准面5米≤h≤15米，有可能坠落的高处进行的作业。",
        "default": false
      },
      {
        "name": "三级",
        "description": "不存在特殊危险因素的情况下，在距坠落基准面15米≤h≤30米，有可能坠落的高处进行的作业。",
        "default": false
      },
      {
        "name": "四级",
        "description": "不存在特殊危险因素的情况下，在距坠落基准面h＞30米，有可能坠落的高处进行的作业。",
        "default": false
      }
    ],
    "extra": [
      "作业高度"
    ],
    "people": [
      {
        "label": "作业单位",
        "unit": true,
        "required": true
      },
      {
        "label": "作业负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业所在单位",
        "unit": true,
        "required": true
      },
      {
        "label": "作业所在单位负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "风险评估人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全措施确认人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全交底人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "属地单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "作业指挥意见",
        "unit": false,
        "required": true
      },
      {
        "label": "所在单位意见",
        "unit": false,
        "required": true
      },
      {
        "label": "审核部门意见",
        "unit": false,
        "required": true
      },
      {
        "label": "审批部门意见",
        "unit": false,
        "required": true
      },
      {
        "label": "完工验收意见",
        "unit": false,
        "required": true
      },
      {
        "label": "抄送成员",
        "unit": false,
        "required": false
      }
    ],
    "hasLocation": true,
    "specialWorkers": true
  },
  {
    "id": "crane",
    "name": "吊装作业",
    "code": "DZ",
    "icon": 10,
    "levels": [
      {
        "name": "一级",
        "description": "利用各种吊装机具将设备、工件、器具、材料等吊起，使其发生位置变化的作业，且吊物质量 ≥100吨",
        "default": false
      },
      {
        "name": "二级",
        "description": "利用各种吊装机具将设备、工件、器具、材料等吊起，使其发生位置变化的作业，且40吨≤吊物质量<100吨",
        "default": false
      },
      {
        "name": "三级",
        "description": "利用各种吊装机具将设备、工件、器具、材料等吊起，使其发生位置变化的作业，且吊物质量＜40吨",
        "default": true
      }
    ],
    "extra": [
      "吊物质量（t）",
      "吊具名称"
    ],
    "people": [
      {
        "label": "作业单位",
        "unit": true,
        "required": true
      },
      {
        "label": "作业负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业所在单位",
        "unit": true,
        "required": true
      },
      {
        "label": "作业所在单位负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "风险评估人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全措施确认人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全交底人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "属地单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "指挥人",
        "unit": false,
        "required": true
      },
      {
        "label": "司索人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业负责人意见",
        "unit": false,
        "required": false
      },
      {
        "label": "所在单位意见",
        "unit": false,
        "required": false
      },
      {
        "label": "完工验收意见",
        "unit": false,
        "required": false
      },
      {
        "label": "抄送成员",
        "unit": false,
        "required": false
      }
    ],
    "hasLocation": true,
    "specialWorkers": true
  },
  {
    "id": "earth",
    "name": "动土作业",
    "code": "DT",
    "icon": 11,
    "levels": [
      {
        "name": "A级",
        "description": "(深基坑/复杂环境)，挖掘深度超过5m，或在生产装置区、罐区等危险场所内进行的动土作业。",
        "default": false
      },
      {
        "name": "B级",
        "description": "(一般开挖)，挖掘深度在0.5m至5m之间，且不在核心危险区域的动土作业",
        "default": false
      },
      {
        "name": "C级",
        "description": "(浅层/简单)，挖掘深度小于0.5m，或使用人工挖掘且环境简单的作业。",
        "default": true
      }
    ],
    "extra": [
      "作业范围、内容、方式(包涵深度、面积并附简图)"
    ],
    "people": [
      {
        "label": "作业单位",
        "unit": true,
        "required": true
      },
      {
        "label": "作业负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业所在单位",
        "unit": true,
        "required": true
      },
      {
        "label": "作业所在单位负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "风险评估人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全措施确认人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全交底人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "属地单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "作业负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "所在单位意见",
        "unit": false,
        "required": true
      },
      {
        "label": "验收负责人意见",
        "unit": false,
        "required": true
      },
      {
        "label": "抄送成员",
        "unit": false,
        "required": false
      }
    ],
    "hasLocation": true,
    "specialWorkers": true
  },
  {
    "id": "blind",
    "name": "盲板抽堵作业",
    "code": "MB",
    "icon": 12,
    "levels": [
      {
        "name": "一级",
        "description": "在易燃易爆、有毒有害介质的管道、设备上进行的盲板抽堵作业；或在生产运行状态下进行的盲板抽堵作业。",
        "default": false
      },
      {
        "name": "二级",
        "description": "在非易燃易爆、无毒无害介质（如水、空气、氮气等）的管道、设备上进行的盲板抽堵作业；且在系统停车、置换合格的状态下进行。",
        "default": false
      },
      {
        "name": "三级",
        "description": "除一级、二级以外的其他盲板抽堵作业（通常指在完全隔离、清洗置换彻底且介质危害极小的环境下进行的简单作业）。",
        "default": true
      }
    ],
    "extra": [
      "设备、管道名称",
      "管道介质",
      "管道温度",
      "管道压力",
      "盲板材质",
      "盲板规格",
      "盲板编号"
    ],
    "people": [
      {
        "label": "作业单位",
        "unit": true,
        "required": true
      },
      {
        "label": "作业单位负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业所在单位",
        "unit": true,
        "required": true
      },
      {
        "label": "作业所在单位负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "风险评估人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全措施确认人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全交底人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "属地单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "作业负责人意见",
        "unit": false,
        "required": true
      },
      {
        "label": "所在单位意见",
        "unit": false,
        "required": true
      },
      {
        "label": "验收负责人意见",
        "unit": false,
        "required": true
      },
      {
        "label": "抄送成员",
        "unit": false,
        "required": false
      }
    ],
    "hasLocation": false,
    "specialWorkers": true
  },
  {
    "id": "road",
    "name": "断路作业",
    "code": "DL",
    "icon": 13,
    "levels": [
      {
        "name": "A级",
        "description": "(主干道/长时间),占用厂区主干道、消防通道，或阻断交通时间超过24小时的作业。",
        "default": false
      },
      {
        "name": "B级",
        "description": "(支路/短时间)，占用厂区支路、车间引道，阻断交通时间在4-24小时的作业。",
        "default": false
      },
      {
        "name": "C级",
        "description": "(局部/不影响通行)，仅占用路边少量空间，不影响车辆正常通行，阻断时间小于4小时的作业。",
        "default": true
      }
    ],
    "extra": [
      "涉及单位名称",
      "断路原因"
    ],
    "people": [
      {
        "label": "作业单位",
        "unit": true,
        "required": true
      },
      {
        "label": "作业负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业所在单位",
        "unit": true,
        "required": true
      },
      {
        "label": "作业所在单位负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "风险评估人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全措施确认人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全交底人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "属地单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "作业负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "所在单位意见",
        "unit": false,
        "required": true
      },
      {
        "label": "验收负责人意见",
        "unit": false,
        "required": true
      },
      {
        "label": "抄送成员",
        "unit": false,
        "required": false
      }
    ],
    "hasLocation": true,
    "specialWorkers": true
  },
  {
    "id": "confined",
    "name": "受限空间作业",
    "code": "SX",
    "icon": 14,
    "levels": [
      {
        "name": "A级",
        "description": "进入或探入可能存在易燃易爆、有毒有害物质或缺氧，对作业人员生命健康构成严重威胁的封闭、半封闭设施及场所。包括但不限于：未经置换清洗的储罐/反应釜、污水池/下水道、长期封闭且未通风的地下管廊等。",
        "default": false
      },
      {
        "name": "B级",
        "description": "进入或探入存在一定危险因素，但通过采取通风、检测等安全措施可以有效控制的受限空间。包括：已进行初步清洗置换但需持续监测的容器、通风良好的地下检查井、非剧毒环境的设备内部检修等。",
        "default": false
      },
      {
        "name": "C级",
        "description": "进入或探入危险性较小，环境相对开阔，不存在明显中毒、窒息或燃爆风险的受限空间。包括：敞开式料仓的外部观察口作业、通风良好且经检测合格的浅层坑洞检查等。",
        "default": true
      }
    ],
    "extra": [
      "受限空间名称",
      "受限空间内原有介质名称"
    ],
    "people": [
      {
        "label": "作业单位",
        "unit": true,
        "required": true
      },
      {
        "label": "作业单位负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业所在单位",
        "unit": true,
        "required": true
      },
      {
        "label": "作业所在单位负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "风险评估人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全措施确认人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全交底人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "属地单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "作业负责人意见",
        "unit": false,
        "required": true
      },
      {
        "label": "所在单位（车间）意见",
        "unit": false,
        "required": true
      },
      {
        "label": "完工验收意见",
        "unit": false,
        "required": true
      },
      {
        "label": "抄送成员",
        "unit": false,
        "required": false
      }
    ],
    "hasLocation": true,
    "specialWorkers": true
  },
  {
    "id": "blasting",
    "name": "爆破作业",
    "code": "BP",
    "icon": 15,
    "levels": [
      {
        "name": "一级",
        "description": "一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一一",
        "default": false
      },
      {
        "name": "二级",
        "description": "二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二",
        "default": true
      }
    ],
    "extra": [
      "爆破类型",
      "一次爆破药量",
      "爆破方式"
    ],
    "people": [
      {
        "label": "作业单位",
        "unit": true,
        "required": true
      },
      {
        "label": "作业负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业所在单位",
        "unit": true,
        "required": true
      },
      {
        "label": "作业所在单位负责人",
        "unit": false,
        "required": true
      },
      {
        "label": "风险评估人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全措施确认人",
        "unit": false,
        "required": true
      },
      {
        "label": "安全交底人",
        "unit": false,
        "required": true
      },
      {
        "label": "作业单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "属地单位监护人",
        "unit": true,
        "required": true
      },
      {
        "label": "节点一",
        "unit": false,
        "required": true
      },
      {
        "label": "验收节点",
        "unit": false,
        "required": true
      },
      {
        "label": "抄送成员",
        "unit": false,
        "required": false
      }
    ],
    "hasLocation": true,
    "specialWorkers": true
  }
];
export const todoTypes=[{"id": "risk", "name": "风险评估", "icon": 0}, {"id": "safety", "name": "安全措施", "icon": 1}, {"id": "approval", "name": "作业审批", "icon": 2}, {"id": "scene", "name": "现场实施", "icon": 3}, {"id": "acceptance", "name": "验收审批", "icon": 4}, {"id": "event", "name": "事件处置", "icon": 5}];
export const operationURL=(page,params={})=>{const u=new URL(`../pages/operation-${page}.html`,import.meta.url);Object.entries(params).forEach(([k,v])=>{if(v!=null)u.searchParams.set(k,v)});return u.href};
