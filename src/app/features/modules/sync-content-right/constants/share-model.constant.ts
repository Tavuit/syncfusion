import { COMM_PROJECT_MODEL_MAP } from "src/app/features/modules/sync-content-right/constants/communication.constant";
import { THEORY_PROJECT_MODEL_MAP } from "src/app/features/modules/sync-content-right/constants/theory.constant";


//share project model
export const PROJECT_MODEL_MAP = {
    ...COMM_PROJECT_MODEL_MAP,
    ...THEORY_PROJECT_MODEL_MAP,
}