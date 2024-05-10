// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

/*
 * OpenAPI Petstore
 *
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * API version: 1.0.0
 */

package petstoreserver


import (
	"fmt"
)



type Species string

// List of Species
const (
	CAT Species = "cat"
	DOG Species = "dog"
	FISH Species = "fish"
	GOAT Species = "goat"
	PIG Species = "pig"
)

// AllowedSpeciesEnumValues is all the allowed values of Species enum
var AllowedSpeciesEnumValues = []Species{
	"cat",
	"dog",
	"fish",
	"goat",
	"pig",
}

// validSpeciesEnumValue provides a map of Speciess for fast verification of use input
var validSpeciesEnumValues = map[Species]struct{}{
	"cat": {},
	"dog": {},
	"fish": {},
	"goat": {},
	"pig": {},
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v Species) IsValid() bool {
	_, ok := validSpeciesEnumValues[v]
	return ok
}

// NewSpeciesFromValue returns a pointer to a valid Species
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewSpeciesFromValue(v string) (Species, error) {
	ev := Species(v)
	if ev.IsValid() {
		return ev, nil
	}

	return "", fmt.Errorf("invalid value '%v' for Species: valid values are %v", v, AllowedSpeciesEnumValues)
}



// AssertSpeciesRequired checks if the required fields are not zero-ed
func AssertSpeciesRequired(obj Species) error {
	return nil
}

// AssertSpeciesConstraints checks if the values respects the defined constraints
func AssertSpeciesConstraints(obj Species) error {
	return nil
}
