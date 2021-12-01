const PIXEL_SIZE = 24
const PIXELS = 24

const SIZE = PIXELS * PIXEL_SIZE
const SIDES = 6
let COLORS = []

function setup() {
	COLORS = [color(25, 255, 45), color("blue"), "orange"]
	createCanvas(SIZE, SIZE, SVG)
	// background("lightGray")
	noStroke()
	// frameRate(1)
	noLoop()
	angleMode(DEGREES)
	// rectMode(CENTER)
}

function draw() {
	// grid()
	// outline()
	for (let i = 0; i < PIXELS; i++) {
		for (let ii = 0; ii < PIXELS; ii++) {
			drawPixel(i * PIXEL_SIZE, ii * PIXEL_SIZE)
		}
	}
}

function drawPixel(x, y) {
	push()
	// fill(getRandomColor())
	fill(
		`hsba(${round(random(0, 360))}, ${round(random(0, 100))}%,  ${round(
			random(30, 100)
		)}%,  ${round(random(0.5, 1))})`
	)
	rect(x, y, PIXEL_SIZE, PIXEL_SIZE)
	pop()
}

function outline() {
	const strokeColor = getRandomColor()
	const weight = randomSelectTwo() ? 2 : 4
	const useHexagon = randomSelectTwo()

	stroke(strokeColor)
	strokeWeight(weight)
	push()
	translate(width / 2, height / 2)
	if (useHexagon) {
		hexagon(0, 0, SIZE / 2)
	} else {
		ellipse(0, 0, SIZE, SIZE)
	}
	pop()
}

function grid() {
	const numShapes = randomSelectTwo() ? SIDES : SIDES * 2
	const strokeColor = getRandomColor()

	const angle = 360 / numShapes

	noFill()
	stroke(COLORS[1])
	push()
	translate(width / 2, height / 2)
	ellipse(0, 0, SIZE, SIZE)
	stroke(strokeColor)
	for (let i = 0; i < numShapes; i++) {
		line(0, 0, SIZE / 2, 0)
		rotate(angle)
	}
	pop()
}

function randomSelectTwo() {
	return random(1) > 0.5
}

function getRandomColor() {
	// return COLORS[floor(random(0, COLORS.length))]
	const r = Math.round(random(0, 255))
	const g = Math.round(random(0, 255))
	const b = Math.round(random(0, 255))
	return color(r, g, b)
}
