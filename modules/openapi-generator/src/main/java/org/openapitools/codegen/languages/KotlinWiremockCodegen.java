package org.openapitools.codegen.languages;

import org.openapitools.codegen.CodegenConstants;
import org.openapitools.codegen.CodegenType;
import org.openapitools.codegen.SupportingFile;

import static java.io.File.separator;

public class KotlinWiremockCodegen extends AbstractKotlinCodegen {

    public KotlinWiremockCodegen() {
        super();

        artifactId = "kotlin-wiremock";
        packageName = "org.openapitools.client";
        outputFolder = "generated-code" + separator + "kotlin-wiremock";
        embeddedTemplateDir = templateDir = "kotlin-wiremock";

        updateOption(CodegenConstants.ARTIFACT_ID, this.artifactId);
        updateOption(CodegenConstants.PACKAGE_NAME, this.packageName);

        apiTemplateFiles.put("api.mustache", ".kt");
        modelTemplateFiles.put("model.mustache", ".kt");

        apiPackage = packageName + ".apis";
        modelPackage = packageName + ".models";
    }

    @Override // TODO: I wouldn't really consider this is any of the existing CodegenTypes.
    public CodegenType getTag() {
        return CodegenType.CLIENT;
    }

    @Override
    public String getName() { return "kotlin-wiremock"; }

    @Override
    public String getHelp() { return "Generates a Kotlin client for generating stubs in WireMock."; }

    @Override
    public void processOpts() {
        final String infrastructureFolder = (sourceFolder + separator + "infrastructure").replace(".", separator);

        // General support files
        supportingFiles.add(new SupportingFile("infrastructure/stub.mustache", infrastructureFolder, "Stub.kt"));
        supportingFiles.add(new SupportingFile("infrastructure/stub-builder.mustache", infrastructureFolder, "StubBuilder.kt"));

        // Gradle project files
        supportingFiles.add(new SupportingFile("build-gradle.mustache", "", "build.gradle"));
        supportingFiles.add(new SupportingFile("settings-gradle.mustache", "", "settings.gradle"));

        // Gradle wrapper files
        supportingFiles.add(new SupportingFile("gradlew.mustache", "", "gradlew"));
        supportingFiles.add(new SupportingFile("gradlew-bat.mustache", "", "gradlew.bat"));
        supportingFiles.add(new SupportingFile("gradle-wrapper-properties.mustache", "gradle" + separator + "wrapper", "gradle-wrapper.properties"));
        supportingFiles.add(new SupportingFile("gradle-wrapper.mustache", "gradle" + separator + "wrapper", "gradle-wrapper.jar"));
    }

    @Override
    public void postProcess() {
        System.out.println("###################################################################################");
        System.out.println("# Thanks for using OpenAPI Generator.                                             #");
        System.out.println("# Please consider donation to help us maintain this project \uD83D\uDE4F                    #");
        System.out.println("# https://opencollective.com/openapi_generator/donate                              #");
        System.out.println("#                                                                                  #");
        System.out.println("# This generator's contributed by Stefan Koppier (https://github.com/stefankoppier)#");
        System.out.println("####################################################################################");
    }
}
