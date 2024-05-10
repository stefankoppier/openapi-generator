/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.server.api;

import java.io.File;
import org.openapitools.server.model.ModelApiResponse;
import org.openapitools.server.model.Pet;
import org.junit.Test;
import org.junit.Before;
import static org.junit.Assert.*;

import org.eclipse.microprofile.rest.client.RestClientBuilder;

import java.net.URL;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * OpenAPI Petstore Test
 *
 * API tests for PetApi
 */
public class PetApiTest {

    private PetApi client;
    private String baseUrl = "http://localhost:9080";

    @Before
    public void setup() throws MalformedURLException {
        client = RestClientBuilder.newBuilder()
                        .baseUrl(new URL(baseUrl))
                        .register(ApiException.class)
                        .build(PetApi.class);
    }

    
    /**
     * Add a new pet to the store
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void addPetTest() {
        // TODO: test validations
        Pet pet = null;
        //Uni<Pet> response = api.addPet(pet);
        //assertNotNull(response);


    }
    
    /**
     * Deletes a pet
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deletePetTest() {
        // TODO: test validations
        Long petId = null;
        String apiKey = null;
        //api.deletePet(petId, apiKey);
        //assertNotNull(response);


    }
    
    /**
     * Finds Pets by status
     *
     * Multiple status values can be provided with comma separated strings
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void findPetsByStatusTest() {
        // TODO: test validations
        List<String> status = null;
        //Uni<List<Pet>> response = api.findPetsByStatus(status);
        //assertNotNull(response);


    }
    
    /**
     * Finds Pets by tags
     *
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void findPetsByTagsTest() {
        // TODO: test validations
        List<String> tags = null;
        //Uni<List<Pet>> response = api.findPetsByTags(tags);
        //assertNotNull(response);


    }
    
    /**
     * Find pet by ID
     *
     * Returns a single pet
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getPetByIdTest() {
        // TODO: test validations
        Long petId = null;
        //Uni<Pet> response = api.getPetById(petId);
        //assertNotNull(response);


    }
    
    /**
     * Update an existing pet
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updatePetTest() {
        // TODO: test validations
        Pet pet = null;
        //Uni<Pet> response = api.updatePet(pet);
        //assertNotNull(response);


    }
    
    /**
     * Updates a pet in the store with form data
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updatePetWithFormTest() {
        // TODO: test validations
        Long petId = null;
        String name = null;
        String status = null;
        //api.updatePetWithForm(petId, name, status);
        //assertNotNull(response);


    }
    
    /**
     * uploads an image
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void uploadFileTest() {
        // TODO: test validations
        Long petId = null;
        String additionalMetadata = null;
        org.apache.cxf.jaxrs.ext.multipart.Attachment _file = null;
        //Uni<ModelApiResponse> response = api.uploadFile(petId, additionalMetadata, _file);
        //assertNotNull(response);


    }
    
}
