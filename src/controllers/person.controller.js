import Person from "../models/person";
const personCtrl = {};

personCtrl.getPerson = async (req, res) => {
  try {
    const data = await Person.find(); // busca todos los documentos(select)
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      ok: false,
      mensaje: "ocurrio un error al obtener la lista de personas",
    });
    next(error);
  }
};

personCtrl.createPerson = async (req, res) => {
  console.log(req.body);
  const { name, lastName } = req.body;

  try {
    const newPerson = new Person({
      name,
      lastName,
    });

    await newPerson.save();
    res.status(200).json({ mensaje: "La persona fue creada con exito" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      mensaje: "No se pudo crear la persona",
    });
    next(error);
  }
};

export default personCtrl;
