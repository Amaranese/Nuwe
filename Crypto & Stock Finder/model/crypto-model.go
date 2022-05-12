package model

import (
	"fmt"
)

// Cryptoresponse is exported, it models the data we receive.
type Cryptoresponse []struct {
	Name              string `json:"name"`
	Price             string `json:"price"`
	Rank              string `json:"rank"`
	High              string `json:"high"`
	CirculatingSupply string `json:"circulating_supply"`
}

//TextOutput is exported,it formats the data to plain text.
func (c Cryptoresponse) TextOutput() string {
	p := fmt.Sprintf(
		"Name: %s\nPrice : %s\nRank: %s\nHigh: %s\nCirculatingSupply: %s\n",
		c[0].Name, c[0].Price, c[0].Rank, c[0].High, c[0].CirculatingSupply)
	return p
}
