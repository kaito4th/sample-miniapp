export type TestDataModel = {
  id: number | string;
  image: string;
  text: string;
  data?: { [key: string]: any };
};

export type TestDataLoad = TestDataModel[];
