import express from "express"

const app = express()
const port = 3000
const entries = []

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")

app.use((req, res, next) => {
	res.locals.title = null
	res.locals.story = null
  res.locals.entries = entries
	next()
})

// Function to process POST data
function capitalizeTitle(req, res, next) {
	let { title } = req.body
	res.locals.title = title
		.split(" ")
		.map(word => {
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
		})
		.join(" ")
	next()
}

app.get("/", (req, res) => {
	res.locals.currentLink = "hero"
	res.render("index")
})
app.get("/features", (req, res) => {
	res.locals.currentLink = "features"
	res.render("index")
})
app.get("/faq", (req, res) => {
	res.locals.currentLink = "faq"
	res.render("index")
})
app.get("/about", (req, res) => {
	res.locals.currentLink = "about"
	res.render("index")
})

app.post("/submit", capitalizeTitle, (req, res) => {
	const { story } = req.body
	const newEntry = { 
    title: res.locals.title, 
    story: story, 
    timestamp: new Date().toLocaleString() 
  }

	entries.push(newEntry)
	res.locals.currentLink = "hero"
	res.render("index", { entries })

})

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
