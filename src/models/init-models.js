import { Alarmas } from '../models/alarmas.js';
import { Alertas } from '../models/alertas.js';
import { ConsultasMedicas } from './consultasMedicas.js';
import { Embarazos } from '../models/embarazos.js';
//import { EmbarazosHistoricos } from '../models/embarazos_historicos.js';
import { RegAlarmas } from './regAlarmas.js';
import { RegAlertas } from './regAlertas.js';
import { ReportesFinalesBebes } from './reporteFinalBebe.js';
import { Usuarios } from '../models/usuarios.js';
import { RegPeso } from './regPeso.js';
import { RegPresion } from './regPresion.js';


//Reg Alarmas
RegAlarmas.belongsTo(Alarmas, {foreignKey: "alrm_codigo" });
Alarmas.hasMany(RegAlarmas, {foreignKey: "alrm_codigo" });

RegAlarmas.belongsTo(Embarazos, { foreignKey: "emb_codigo" });
Embarazos.hasMany(RegAlarmas, { foreignKey: "emb_codigo" });

//RegAlertas
RegAlertas.belongsTo(Alertas, { foreignKey: "alrt_codigo" });
Alertas.hasMany(RegAlertas, { foreignKey: "alrt_codigo" });

RegAlertas.belongsTo(Embarazos, {foreignKey: "emb_codigo" });
Embarazos.hasMany(RegAlertas, {foreignKey: "emb_codigo" });

//ConsultasMedicas
ConsultasMedicas.belongsTo(Embarazos, { foreignKey: "emb_codigo" });
Embarazos.hasMany(ConsultasMedicas, {foreignKey: "emb_codigo" });

ConsultasMedicas.belongsTo(Usuarios, { foreignKey: "cns_codObstetra" });
Usuarios.hasMany(ConsultasMedicas, {foreignKey: "cns_codObstetra" });

//Embarazos
Embarazos.belongsTo(Usuarios, {foreignKey: "usr_codigo" });
Usuarios.hasMany(Embarazos, {foreignKey: "usr_codigo" });

Embarazos.belongsTo(Usuarios, {foreignKey: "emb_codObstetra" });
Usuarios.hasMany(Embarazos, {foreignKey: "emb_codObstetra" });

//Reporte Final Bebes
ReportesFinalesBebes.belongsTo(Embarazos, {foreignKey: "emb_codigo" });
Embarazos.hasOne(ReportesFinalesBebes, {foreignKey: "emb_codigo" });

//RegPeso
RegPeso.belongsTo(Embarazos,{foreignKey:"emb_codigo"})
Embarazos.hasMany(RegPeso,{foreignKey:"emb_codigo"})

//RegPresion
RegPresion.belongsTo(Embarazos,{foreignKey:"emb_codigo"})
Embarazos.hasMany(RegPresion,{foreignKey:"emb_codigo"})

export default function SqlModels() {
  return {
    Alarmas,
    Alertas,
    ConsultasMedicas,
    Embarazos,
    RegAlarmas,
    RegAlertas,
    ReportesFinalesBebes,
    Usuarios,
    RegPeso,
    RegPresion
  }
}