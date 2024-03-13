import StatusCode from "../enum/StatusCode";

type ResponseDto = {
  status: StatusCode;
  message: string;
  data?: any[] | any;
};

export default ResponseDto;
