import Species from "../enum/Species";

type PetDto = {
  name: string;
  specie: Species;
  dateOfBirth: Date;
  adopted: boolean;
};

export default PetDto;
