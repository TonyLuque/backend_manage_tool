const array = [
  {
    id: "1234561",
    name: "pc oficina 2 administración",
    type: "portatil",
    operativeSystem: "Windows 7",
  },
  {
    id: "1234562",
    name: "pc oficina 4 sistemas",
    type: "escritorio",
    operativeSystem: "Ubuntu",
  },
  {
    id: "1234563",
    name: "teléfono empresarial",
    type: "smartphone",
    operativeSystem: "Anfroid",
  },
  {
    id: "1234564",
    name: "pc oficina 3 administración",
    type: "portatil",
    operativeSystem: "Windows 10",
  },
  {
    id: "1234565",
    name: "tablet",
    type: "portatil",
    operativeSystem: "Android",
  },
  {
    id: "1234566",
    name: "tablet",
    type: "portatil",
    operativeSystem: "Android",
  },
  {
    id: "1234567",
    name: "teléfono empresarial",
    type: "smartphone",
    operativeSystem: "IOS",
  },
  {
    id: "1234568",
    name: "pc oficina 2 diseño",
    type: "Escritorio",
    operativeSystem: "macOS",
  },
  {
    id: "1234569",
    name: "pc oficina 3 RRHH",
    type: "portatil",
    operativeSystem: "Windows 7",
  },
  {
    id: "1234560",
    name: "teléfono empresarial",
    type: "smartphone",
    operativeSystem: "Android",
  },
  {
    id: "1234571",
    name: "pc oficina 1 recepción",
    type: "escritorio",
    operativeSystem: "Windows 7",
  },
];

function getDeviceById(id) {
  return array.find((element) => element.id == String(id) && element);
}

module.exports = { getDeviceById };
