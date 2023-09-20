import { NavigateFunction } from "react-router-dom";

interface IHistory {
  navigate: NavigateFunction | null;
  push: any;
}

const History: IHistory = {
  navigate: null,
  push: (data: any) => (History.navigate ? History.navigate(data) : null),
};

export default History;
