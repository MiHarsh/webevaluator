package core

import (
	"os"
	"path/filepath"
	"sync"

	"github.com/Aman-Codes/backend/go/pkg/log"
)

type Output struct {
	mu sync.Mutex
	mm sync.Mutex
	f  *os.File
	L  []SpiderOutput
	M  []SpiderOutput
}

func NewOutput(folder, filename string) *Output {
	outFile := filepath.Join(folder, filename)
	f, err := os.OpenFile(outFile, os.O_APPEND|os.O_CREATE|os.O_WRONLY, os.ModePerm)
	if err != nil {
		log.Errorf("Failed to open file to write Output: %s", err)
		return nil
	}
	var list []SpiderOutput
	var mediaList []SpiderOutput
	return &Output{
		f: f,
		L: list,
		M: mediaList,
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

func (o *Output) WriteToMediaList(msg SpiderOutput) {
	o.mm.Lock()
	defer o.mm.Unlock()
	o.M = append(o.M, msg)
}

func (o *Output) Close() {
	o.f.Close()
}
