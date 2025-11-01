let deg = +prompt("ادخل درجة الطالب");

switch (true) {
  case deg >= 0 && deg < 50:
    document.writeln("الطالب لم ينجح");
    break;
  case deg >= 50 && deg < 65:
    document.writeln("مقبول");
    break;
  case deg >= 65 && deg < 75:
    document.writeln("جيد");
    break;
  case deg >= 75 && deg < 85:
    document.writeln("جيد جدا");
    break;
  case deg >= 85 && deg <= 100:
    document.writeln("امتياز");
    break;
  default:
    document.writeln("من فضلك ادخل درجة الطالب في نطاق من 0 الي 100");
}
