package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type RequestData struct {
	Username string `json:"username"`
}

type ResponseData struct {
	Message string `json:"message"`
}

func corsMiddleware(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		origin := r.Header.Get("Origin")
		if origin != "" {
			w.Header().Set("Access-Control-Allow-Origin", origin)
			w.Header().Set("Access-Control-Allow-Credentials", "true")
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
			w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		}

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		h.ServeHTTP(w, r)
	})
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
	var requestData RequestData
	if err := json.NewDecoder(r.Body).Decode(&requestData); err != nil {
		http.Error(w, "Invalid Body", http.StatusBadRequest)
		return
	}

	username := requestData.Username
	response := ResponseData{Message: "Hello " + username + "! From Backend."}

	json.NewEncoder(w).Encode(response)
}

func main() {
	http.Handle("/api/hello", corsMiddleware(http.HandlerFunc(helloHandler)))

	fmt.Println("Server is running on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
