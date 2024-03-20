import Size from "../enum/Size";
import Species from "../enum/Species";

type PetDto = {
  name: string;
  specie: Species;
  dateOfBirth: Date;
  adopted: boolean;
  size?: Size;
};

export default PetDto;
