package core

import (
	"os"
	"path/filepath"
	"sync"
)

type Output struct {
	mu sync.Mutex
	f  *os.File
	L  []SpiderOutput
}

func NewOutput(folder, filename string) *Output {
	outFile := filepath.Join(folder, filename)
	f, err := os.OpenFile(outFile, os.O_APPEND|os.O_CREATE|os.O_WRONLY, os.ModePerm)
	if err != nil {
		Logger.Errorf("Failed to open file to write Output: %s", err)
		os.Exit(1)
	}
	var list []SpiderOutput
	return &Output{
		f: f,
		L: list,
	}
}

func (o *Output) WriteToFile(msg string) {
	o.mu.Lock()
	defer o.mu.Unlock()
	_, _ = o.f.WriteString(msg + "\n")
}

func (o *Output) WriteToList(msg SpiderOutput) {
	o.mu.Lock()
	defer o.mu.Unlock()
	o.L = append(o.L, msg)
}

func (o *Output) Close() {
	o.f.Close()
}
