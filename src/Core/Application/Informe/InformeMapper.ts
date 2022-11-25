import type { Informe } from "#Core/DomainModel/Entities/Informe";
import type { InformeDTO, InformeMapper } from "./types";

const createInformeMapper = (): InformeMapper => ({
  mapFromDTO: (dto: InformeDTO): Informe => {
    const informe: Informe = {
      id: dto.id,
      lineanegocio: dto.lineanegocio,
      vehiculo_nombre: dto.vehiculo_nombre,
      marca_vehiculo: dto.marca_vehiculo,
    };

    return informe;
  },
  mapFromEntity: (informe: Informe): InformeDTO => ({
    id: informe.id,
    lineanegocio: informe.lineanegocio,
    vehiculo_nombre: informe.vehiculo_nombre,
    marca_vehiculo: informe.marca_vehiculo,
  }),
});

export default createInformeMapper;
