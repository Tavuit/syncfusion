export enum EDiagramAction {
  COPY = 'COPY',
  PARSE = 'PARSE'
}

export enum EDiagramModel {
  //COMMUNICATION
  COMM_MAIN_PROJECT_MODEL = 'COMM_MAIN_PROJECT_MODEL',
  COMM_PROBLEM_STATEMENT = 'COMM_PROBLEM_STATEMENT',
  COMM_PEOPLE_WORK_TOGETHER = 'COMM_PEOPLE_WORK_TOGETHER',
  COMM_OPERATING_PRINCIPLE = 'COMM_OPERATING_PRINCIPLE',

  //THEORY
  THEORY_MAIN_APPLICATION_MODEL = 'THEORY_MAIN_APPLICATION_MODEL',
  SYSTEM_APPLY_THEORY_MODEL = 'SYSTEM_APPLY_THEORY_MODEL',
  FUNCTION_IN_FUNCTIONAL_SYSTEM = 'FUNCTION_IN_FUNCTIONAL_SYSTEM',
  OTHER_THEORY_MODEL = 'OTHER_THEORY_MODEL',
  //SUPPORT_MODEL
  PARTS_OF_FUNCTION_TO_FUNCTION = 'PARTS_OF_FUNCTION_TO_FUNCTION',
  PART_OF_INSTRUMENT_TO_INSTRUMENT = 'PART_OF_INSTRUMENT_TO_INSTRUMENT',
  NATURAL_OR_INPUT_ELEMENT_USAGE = 'NATURAL_OR_INPUT_ELEMENT_USAGE',
  LIST_OF_IDENTIFIED_THEOREMS = 'LIST_OF_IDENTIFIED_THEOREMS',
  LIST_OF_APPLIED_THEOREMS = 'LIST_OF_APPLIED_THEOREMS',
  INSTRUMENT_OR_METHOD_PRODUCED = 'INSTRUMENT_OR_METHOD_PRODUCED',
  FUNCTION_PRODUCED_FROM_THEORY_APPLICATION = 'FUNCTION_PRODUCED_FROM_THEORY_APPLICATION',
  OTHER_SUPPORT_MODEL = 'OTHER_SUPPORT_MODEL',
  //STABILITY
  SYSTEM_UNDERSTANDING_THEORY = 'SYSTEM_UNDERSTANDING_THEORY',
  FUNCTION_ON_THEORY_SCALE = 'FUNCTION_ON_THEORY_SCALE',
  FUNCTIONAL_STABILITY = 'FUNCTIONAL_STABILITY',
  GRAPHICAL_PROJECT_STATUS ='GRAPHICAL_PROJECT_STATUS',
  PROJECT_DIRECTION_AND_DESTINATION = 'PROJECT_DIRECTION_AND_DESTINATION',
  PROBLEM_DEVELOPMENT_AND_IDENTIFICATION = 'PROBLEM_DEVELOPMENT_AND_IDENTIFICATION',
  PHILOSOPHY_INHERITANCE_CHART ='PHILOSOPHY_INHERITANCE_CHART',
  OTHER_STABILITY_MODEL = 'OTHER_STABILITY_MODEL'
}

export const COMM_PROJECT_MODEL = [EDiagramModel.COMM_MAIN_PROJECT_MODEL, EDiagramModel.COMM_PROBLEM_STATEMENT];
export const THEORY_PROJECT_MODEL = [EDiagramModel.THEORY_MAIN_APPLICATION_MODEL, EDiagramModel.SYSTEM_APPLY_THEORY_MODEL];
