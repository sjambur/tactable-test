"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_config_1 = require("../inversify.config");
var apiManager = inversify_config_1.container.get("ApiManager");
apiManager.fetchData();
