// This one is for getting modules in and use them in the app

function scurvecalc (coeff, start, speed, N) {
  var responseCurve = Array(N)
  for (var i = 0; i < N; i++) {
    responseCurve[i] = coeff*Math.log(i + 1)/(1+Math.exp(start - speed * i))
  }
  return responseCurve
}
