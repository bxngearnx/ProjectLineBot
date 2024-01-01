export interface IDataList {
  id: string;
  title: string;
}

export interface IIntent {
  id: number;
  intentName: string;
  trainingPhrases: IDataList[];
  perponse: IDataList[];
}
