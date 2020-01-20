let time = 249;
let cam;
let forms = [];
let widthRec = 200;

function setup() {
  createCanvas(windowWidth * 3, windowHeight);

  cam = createCapture(VIDEO);
  cam.size(710, 400);

  cam.hide();

  background(0);
}

function draw() {
  time += 1;

  // add new rect
  if (time % 250 === 0) {
    let _form = { x: 0, y: 0 };
    forms.unshift(_form);
  }

  if (forms.length > 0) {
    // draw each rect of the forms array
    for (let i = 0; i < forms.length - 1; i++) {
      //update coor
      forms[i].x += 1;
      // rebound function
      forms[i].y =
        height - widthRec - abs(cos(forms[i].x * 0.05) * (200 - i)) * (1000 / forms[i].x);
      //rect(forms[i].x, forms[i].y, widthRec, widthRec);

      //draw image cam
      image(cam, forms[i].x, forms[i].y, widthRec, widthRec);

      // delete rect from the array if its outside the screen
      if (forms[i].x > width) {
        forms.splice(i, 1);
      }
    }
  }
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("mySketch", "jpg");
  }
}
