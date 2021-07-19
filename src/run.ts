import { container } from "../inversify.config";
import { ApiManager } from "./api-manager";

const apiManager = container.get<ApiManager>("ApiManager");
apiManager.fetchData();
