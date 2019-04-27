ordoDua = () => {
  const matrix2 = document.matrix2;
  const a = Number(matrix2.a1.value);
  const b = Number(matrix2.a2.value);
  const c = Number(matrix2.a3.value);
  const d = Number(matrix2.a4.value);

  const determinan = (a*d) - (b*c);
  matrix2.hd2.value = determinan;

  matrix2.aa1.value = d;
  matrix2.aa2.value = (-1 * b);
  matrix2.aa3.value = (-1 * c);
  matrix2.aa4.value = a;
  
  const invers = 1/determinan;
  matrix2.ai1.value = (d * invers).toFixed(2);
  matrix2.ai2.value = ((-1 * b) * invers).toFixed(2);
  matrix2.ai3.value = ((-1 * c) * invers).toFixed(2);
  matrix2.ai4.value = (a * invers).toFixed(2);
};

ordoTiga = () => {
  const matrix3 = document.matrix3;
  const a = Number(matrix3.b1.value);
  const b = Number(matrix3.b2.value);
  const c = Number(matrix3.b3.value);
  const d = Number(matrix3.b4.value);
  const e = Number(matrix3.b5.value);
  const f = Number(matrix3.b6.value);
  const g = Number(matrix3.b7.value);
  const h = Number(matrix3.b8.value);
  const i = Number(matrix3.b9.value);
  
  const determinan = (a*e*i) + (b*f*g) + (c*d*h) - (c*e*g) - (a*f*h) - (b*d*i);
  matrix3.hd3.value = determinan;

  const invers = 1/determinan;
  const a11 = (e*i)-(f*h);
  const a12 = -1 *((d*i)-(f*g));
  const a13 = (d*h)-(e*g);
  const a21 = -1 * ((b*i)-(c*h));
  const a22 = (a*i)-(c*g);
  const a23 = -1 * ((a*h)-(b*g));
  const a31 = (b*f)-(c*e);
  const a32 = -1 * ((a*f)-(c*d));
  const a33 = (a*e)-(b*d);

  matrix3.hk1.value = a11;
  matrix3.hk2.value = a12;
  matrix3.hk3.value = a13;
  matrix3.hk4.value = a21;
  matrix3.hk5.value = a22;
  matrix3.hk6.value = a23;
  matrix3.hk7.value = a31;
  matrix3.hk8.value = a32;
  matrix3.hk9.value = a33;

  matrix3.ha1.value = a11;
  matrix3.ha4.value = a12;
  matrix3.ha7.value = a13;
  matrix3.ha2.value = a21;
  matrix3.ha5.value = a22;
  matrix3.ha8.value = a23;
  matrix3.ha3.value = a31;
  matrix3.ha6.value = a32;
  matrix3.ha9.value = a33;

  matrix3.hi1.value = (invers * a11).toFixed(2);
  matrix3.hi4.value = (invers * a12).toFixed(2);
  matrix3.hi7.value = (invers * a13).toFixed(2);
  matrix3.hi2.value = (invers * a21).toFixed(2);
  matrix3.hi5.value = (invers * a22).toFixed(2);
  matrix3.hi8.value = (invers * a23).toFixed(2);
  matrix3.hi3.value = (invers * a31).toFixed(2);
  matrix3.hi6.value = (invers * a32).toFixed(2);
  matrix3.hi9.value = (invers * a33).toFixed(2);
};

$("#go2").on("click", function(){
  $("#hasil2").slideToggle();
});

$("#go3").on("click", function(){
  $("#hasil3").slideToggle();
});