package main

import (
	"fmt"

	"github.com/valyala/fasthttp"
)

func main() {
	requestHandler := func(ctx *fasthttp.RequestCtx) {
		fmt.Fprintf(ctx, "Hello, fasthttp!")
	}

	fmt.Println("Server running on :8080")
	fasthttp.ListenAndServe(":8080", requestHandler)
}
