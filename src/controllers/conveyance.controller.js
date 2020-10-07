import Conveyance from "../models/conveyance";
const conveyanceCtrl = {};

conveyanceCtrl.getConveyance = async (req, res) => {
  try {
    const data = await Conveyance.find(); // busca todos los documentos(select)
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      ok: false,
      mensaje: "ocurrio un error al obtener los tipos de transporte",
    });
    next(error);
  }
};

conveyanceCtrl.createConveyance = async (req, res) => {
  console.log(req.body);
  const { name, fECO2 } = req.body;

  try {
    const newConveyance = new Conveyance({
      name,
      fECO2,
    });

    await newConveyance.save();
    res
      .status(200)
      .json({ mensaje: "El tipo de transporte fue creado con exito" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      mensaje: "No se pudo crear el tipo de transporte",
    });
    next(error);
  }
};

export default conveyanceCtrl;
