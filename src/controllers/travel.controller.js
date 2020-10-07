import Travel from "../models/travel";
const travelCtrl = {};

travelCtrl.getTravels = async (req, res) => {
  try {
    const data = await Travel.find(); // busca todos los documentos(select)
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      ok: false,
      mensaje: "ocurrio un error al obtener los viajes",
    });
    next(error);
  }
};

travelCtrl.createTravel = async (req, res) => {
  console.log(req.body);
  const {
    typeOfTrip,
    conveyance,
    distance,
    arrivalAddress,
    departureAddress,
    listOfPersonsSelected,
    kgCO2PerPerson,
    dateTimeTravel,
  } = req.body;

  try {
    const newTravel = new Travel({
      typeOfTrip,
      conveyance,
      distance,
      arrivalAddress,
      departureAddress,
      listOfPersonsSelected,
      kgCO2PerPerson,
      dateTimeTravel,
    });

    await newTravel.save();
    res.status(200).json({ mensaje: "El viaje fue creado con exito" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      mensaje: "No se pudo crear el viaje",
    });
    next(error);
  }
};

// travelCtrl.getCategoriaById = async (req, res) => {
//   try {
//     console.log(req.params.id);
//     const categoriaEncontrada = await Categoria.findById(req.params.id);
//     res.status(200).json(categoriaEncontrada);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({
//       ok: false,
//       mensaje: "Ocurrio un error al obtener la categoria" });
//     next(error);
//   }
// };

// travelCtrl.crearCategoria = async (req, res) => {
//   console.log(req.body);
//   const {
//     nombreCat,
//     descripcionCat,
//     estadoCat,
//   } = req.body;

//   try {
//     const categoriaNueva = new Categoria({
//         nombreCat,
//         descripcionCat,
//         estadoCat,
//     });

//     await categoriaNueva.save();
//     res.status(200).json({ mensaje: "La categoria fue creada con exito" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({
//       ok: false,
//       mensaje: "No se pudo crear la categoria" });
//     next(error);
//   }
// };

// travelCtrl.editarCategoria = async (req, res) => {
//   try {
//     await Categoria.findByIdAndUpdate(req.params.id, req.body);
//     res.status(200).json({ mensaje: "Categoria actualizada con exito" });
//   } catch (error) {
//     console.log(error);
//     res
//       .status(400)
//       .json({
//         ok: false,
//         mensaje: "Ocurrio un error al actualizar la categoria" });
//     next(error);
//   }
// };

// travelCtrl.deleteCategoria = async (req, res) => {
//   try {
//     await Categoria.findByIdAndDelete(req.params.id);
//     res.status(200).json({ mensaje: "Se elimino la categoria" });
//   } catch (error) {
//     res
//       .status(400)
//       .json({
//         ok: false,
//         mensaje: "ocurrio un error al eliminar la categoria" });
//     next(error);
//   }
// };

export default travelCtrl;
