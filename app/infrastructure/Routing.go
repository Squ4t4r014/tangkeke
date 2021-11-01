package infrastructure

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"os"
)

type Routing struct {
	Gin *gin.Engine
	AbsolutePath string
}

func NewRouting() *Routing {
	c, _ := NewConfig()
	r := &Routing{
		Gin: gin.Default(),
		AbsolutePath: c.AbsolutePath,
	}
	r.loadTemplates()
	r.setRouting()
	return r
}

func (r *Routing) loadTemplates() {
	//r.Gin.Use(favicon.New("./dist/assets/favicon.ico"))
	r.Gin.Static("/assets", r.AbsolutePath + "/dist/assets")
	r.Gin.LoadHTMLGlob(r.AbsolutePath + "/app/interfaces/presenters/*")
}

func (r *Routing) setRouting() {
	r.Gin.GET("/", func (c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H {
			"title" : "唐可可",
			"text" : "唐可可",
			"where" : "あれ？",
		})
	})
}

func (r *Routing) Run() error {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	return r.Gin.Run(":" + port)
}
