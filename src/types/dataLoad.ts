export type TestDataModel = {
  id: number | string;
  image: string;
  text: string;
  data?: { [key: string]: unknown };
};

export type TestDataLoad = TestDataModel[];
