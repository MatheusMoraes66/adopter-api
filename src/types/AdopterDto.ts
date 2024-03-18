import AddressDto from "./AddressDto";

type AdopterDto = {
  name: string;
  password: string;
  phone: string;
  photo?: string;
  address?: AddressDto;
};

export default AdopterDto;
