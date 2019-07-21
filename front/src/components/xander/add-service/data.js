import dataN from "./cars.json";

for (let b of dataN) {
  b.ind = dataN.indexOf(b);
  b.name = b.brand;
  b.css = "linear-gradient(135deg, white 0%, white 100%)";
  b.height = 200;
}

export default dataN;